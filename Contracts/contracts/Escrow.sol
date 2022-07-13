// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Counters } from "@openzeppelin/contracts/utils/Counters.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Escrow is Ownable {

    using Counters for Counters.Counter;

    enum State { CANCELED, AWAITING_DELIVERY, COMPLETE }

    Counters.Counter transactionIds;
    uint256 escrowFee = 100;

    struct EscrowTransaction {
        uint256 transactionId;
        uint256 orderId;
        address payable depositor;
        address payable payee;
        uint256 amount;
        address currency;
        State _state;
    }

    mapping (uint256 => EscrowTransaction[]) transactions;

    // Events
    event Deposited(uint256 orderId, uint256 transactionId, address depositor, address payee, uint256 amount);
    event TransactionMade(EscrowTransaction[] transaction);
    event TransactionCanceled(EscrowTransaction[] transaction);

    constructor(address newOwner) {
        transferOwnership(newOwner);
    }

    function deposit(uint _orderId, uint _amount, address _payee) external payable {
        require(_amount == msg.value, "Amount sent is less");
        transactionIds.increment();
        uint256 newTxnId = transactionIds.current();
        transactions[newTxnId].push(EscrowTransaction(newTxnId, _orderId, payable(msg.sender), payable(_payee), _amount, address(0), State.AWAITING_DELIVERY));
        emit Deposited(_orderId, newTxnId, msg.sender, _payee, _amount);
    }

    function depositToken(uint _orderId, uint _amount, address _payee, address token) external payable {
        IERC20 erc20token = IERC20(token);
        require(erc20token.allowance(msg.sender, address(this)) >= _amount, "Amount sent is less");
        transactionIds.increment();
        uint256 newTxnId = transactionIds.current();
        transactions[newTxnId].push(EscrowTransaction(newTxnId, _orderId, payable(msg.sender), payable(_payee), _amount, token, State.AWAITING_DELIVERY));
        emit Deposited(_orderId, newTxnId, msg.sender, _payee, _amount);
    }

    function getTransaction(uint _orderId) external payable returns(EscrowTransaction[] memory) {
        return transactions[_orderId];
    }

    function makeTransfers(uint _orderId) external onlyOwner {
        EscrowTransaction[] storage txns = transactions[_orderId];
        for(uint i=0; i<txns.length; i++){
            require(txns[i]._state == State.AWAITING_DELIVERY, "Something's wrong");
        }
        for(uint i=0; i<txns.length; i++){
            if(txns[i].currency == address(0)){
                txns[i].depositor.transfer(txns[i].amount);
            }else{
                IERC20 erc20token = IERC20(txns[i].currency);
                erc20token.transfer(txns[i].depositor, txns[i].amount);
            }
            txns[i]._state = State.COMPLETE;
        }
        emit TransactionMade(txns);
    }

    function cancelTransactions(uint _orderId) external {
        EscrowTransaction[] storage txns = transactions[_orderId];
        for(uint i=0; i<txns.length; i++){
            txns[i]._state = State.CANCELED;
            if(txns[i].currency == address(0)){
                txns[i].payee.transfer(txns[i].amount);
            }else{
                IERC20 erc20token = IERC20(txns[i].currency);
                erc20token.transfer(txns[i].payee, txns[i].amount);
            }
        }
        emit TransactionCanceled(txns);
    }

}