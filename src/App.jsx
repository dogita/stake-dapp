import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image from "../src/assets/logo1.png"

import Table from "./components/Table";
import { ColorRing } from "react-loader-spinner";
import {
  waitForTransaction,
  writeContract,
  prepareWriteContract,
  readContract,
} from "wagmi/actions";
import { CircularProgress, useMediaQuery } from "@mui/material";
import { useAccount , useNetwork  } from "wagmi";
import { ethers } from "ethers";
import image1 from "../src/assets/card1.png";
import image2 from "../src/assets/card1.png";
import image3 from "../src/assets/card2.png";
import image4 from "../src/assets/card3.png";
import { useTranslation } from "react-i18next";

import Navbar from "./components/Navbar";

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const { t } = useTranslation();
  const { chain  } = useNetwork();



  let poo = t('pool');
  const investmentType = [t('pool'), t("Personal")];

  const [activeType, setactiveType] = useState(investmentType[0]);

  const [stakers1, setStakers1] = useState(0);
  const [stake1, setStake1] = useState(0);
  const [reward1, setReward1] = useState(0);

  const [stakers2, setStakers2] = useState(0);
  const [stake2, setStake2] = useState(0);
  const [reward2, setReward2] = useState(0);

  const [stakers3, setStakers3] = useState(0);
  const [stake3, setStake3] = useState(0);
  const [reward3, setReward3] = useState(0);

  const [stakers4, setStakers4] = useState(0);
  const [stake4, setStake4] = useState(0);
  const [reward4, setReward4] = useState(0);

  const [loading, setLoading] = useState("none");
  const [show, setShow] = useState("none");

  const [investId, setinvestId] = useState(0);
  const [totalStaker, setTotalStaker] = useState(0);
  const [inputValue, setInputValue] = useState("");


  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");



  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value);
    setInputValue(e.target.value);
   
  };

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
    setInputValue(e.target.value);
  };

  const handleInputChange3 = (e) => {
    setInputValue3(e.target.value);
    setInputValue(e.target.value);
  };

  const handleInputChange4 = (e) => {
    setInputValue4(e.target.value);
    setInputValue(e.target.value);
  };




  const [drop, setdrop] = useState("none");
  const [isUpdated, setisUpdated] = useState(false);

  const [BCB, setBCB] = useState(0);
  const [investlen, setinvestlen] = useState("");

  var decimal = 1000000000000000000;

  const { address } = useAccount();

  useEffect(() => {
    if (address) {
      Info();
    }
  }, [address]);

  if(address){



  if(chain.id === 1){

    var contractaddress = "0xC633174D8B937927Bfd1650EEa928d509b368554"; // Contract Address
  var contractaddress_token = "0x488542C2320F20D65405a1C03DA769Bc124F9A28"; //Abi

  var abi_token = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "delegator",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "fromDelegate",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "toDelegate",
          type: "address",
        },
      ],
      name: "DelegateChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "delegate",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "previousBalance",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newBalance",
          type: "uint256",
        },
      ],
      name: "DelegateVotesChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "DOMAIN_SEPARATOR",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "account", type: "address" },
        { internalType: "uint32", name: "pos", type: "uint32" },
      ],
      name: "checkpoints",
      outputs: [
        {
          components: [
            { internalType: "uint32", name: "fromBlock", type: "uint32" },
            { internalType: "uint224", name: "votes", type: "uint224" },
          ],
          internalType: "struct ERC20Votes.Checkpoint",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "subtractedValue", type: "uint256" },
      ],
      name: "decreaseAllowance",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "delegatee", type: "address" }],
      name: "delegate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "delegatee", type: "address" },
        { internalType: "uint256", name: "nonce", type: "uint256" },
        { internalType: "uint256", name: "expiry", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "delegateBySig",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "delegates",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "blockNumber", type: "uint256" },
      ],
      name: "getPastTotalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "account", type: "address" },
        { internalType: "uint256", name: "blockNumber", type: "uint256" },
      ],
      name: "getPastVotes",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "getVotes",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "addedValue", type: "uint256" },
      ],
      name: "increaseAllowance",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "nonces",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "numCheckpoints",
      outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "permit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  var abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"lockupDuration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"returnPer","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawAll","type":"event"},{"inputs":[],"name":"_claimInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_lockupDuration","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"hasStaked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"investor","type":"address"}],"name":"investorOrderIds","outputs":[{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"orders","outputs":[{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"lockupDuration","type":"uint256"},{"internalType":"uint256","name":"returnPer","type":"uint256"},{"internalType":"uint256","name":"starttime","type":"uint256"},{"internalType":"uint256","name":"endtime","type":"uint256"},{"internalType":"uint256","name":"claimedReward","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pooldata","outputs":[{"internalType":"uint256","name":"lockupDuration","type":"uint256"},{"internalType":"uint256","name":"returnPer","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardOnPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newInterval","type":"uint256"}],"name":"setClaimInterval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setEmergencyFeeReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setEmergencyWithdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setFeeReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setMaxStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setMinStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"plan1Apy","type":"uint256"},{"internalType":"uint256","name":"plan2Apy","type":"uint256"},{"internalType":"uint256","name":"plan3Apy","type":"uint256"}],"name":"setPlansApy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setWithdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakeOnPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakersPlan","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_start","type":"bool"}],"name":"toggleStaking","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalRewardEarn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"withdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

  } else if(chain.id === 56){

    var contractaddress = "0xC633174D8B937927Bfd1650EEa928d509b368554"; // Contract Address
    var contractaddress_token = "0x05311d9aA0E17D1071986146CeD510C85c71B52f"; //Abi
  
    var abi_token = [{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint256","name":"totalSupply_","type":"uint256"},{"internalType":"address[4]","name":"addrs","type":"address[4]"},{"internalType":"uint256[3]","name":"feeSettings","type":"uint256[3]"},{"internalType":"uint256","name":"minimumTokenBalanceForDividends_","type":"uint256"},{"internalType":"address","name":"serviceFeeReceiver_","type":"address"},{"internalType":"uint256","name":"serviceFee_","type":"uint256"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"ExcludeFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"ExcludeMultipleAccountsFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"newValue","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"oldValue","type":"uint256"}],"name":"GasForProcessingUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"iterations","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claims","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastProcessedIndex","type":"uint256"},{"indexed":true,"internalType":"bool","name":"automatic","type":"bool"},{"indexed":false,"internalType":"uint256","name":"gas","type":"uint256"},{"indexed":true,"internalType":"address","name":"processor","type":"address"}],"name":"ProcessedDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SendDividends","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SendDividendsReverted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pair","type":"address"},{"indexed":true,"internalType":"bool","name":"value","type":"bool"}],"name":"SetAutomatedMarketMakerPair","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"enum TokenType","name":"tokenType","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"version","type":"uint256"}],"name":"TokenCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"VERSION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_marketingWalletAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"automatedMarketMakerPairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"dividendTokenBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dividendTracker","outputs":[{"internalType":"contract BABYTOKENDividendTracker","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"excludeMultipleAccountsFromFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gasForProcessing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountDividendsInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getAccountDividendsInfoAtIndex","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getClaimWait","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastProcessedIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinimumTokenBalanceForDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfDividendTokenHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalDividendsDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromDividends","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFees","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"processDividendTracker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setLiquiditFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setMarketingFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"wallet","type":"address"}],"name":"setMarketingWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setSwapTokensAtAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setTokenRewardsFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenRewardsFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"claimWait","type":"uint256"}],"name":"updateClaimWait","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateGasForProcessing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateMinimumTokenBalanceForDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"withdrawableDividendOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
    var abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"lockupDuration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"returnPer","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawAll","type":"event"},{"inputs":[],"name":"_claimInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_lockupDuration","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"hasStaked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"investor","type":"address"}],"name":"investorOrderIds","outputs":[{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"orders","outputs":[{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"lockupDuration","type":"uint256"},{"internalType":"uint256","name":"returnPer","type":"uint256"},{"internalType":"uint256","name":"starttime","type":"uint256"},{"internalType":"uint256","name":"endtime","type":"uint256"},{"internalType":"uint256","name":"claimedReward","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pooldata","outputs":[{"internalType":"uint256","name":"lockupDuration","type":"uint256"},{"internalType":"uint256","name":"returnPer","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardOnPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newInterval","type":"uint256"}],"name":"setClaimInterval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setEmergencyFeeReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setEmergencyWithdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setFeeReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setMaxStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setMinStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"plan1Apy","type":"uint256"},{"internalType":"uint256","name":"plan2Apy","type":"uint256"},{"internalType":"uint256","name":"plan3Apy","type":"uint256"}],"name":"setPlansApy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setWithdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakeOnPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakersPlan","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_start","type":"bool"}],"name":"toggleStaking","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalRewardEarn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"withdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

  }

}
  const Info = async () => {
    const account = address;

    // var contractaddress = "0x797e9F9D631F2b9ab81AeA7ddC43e2C84aDdcaA2"; // Contract Address
    // var contractaddress_token = "0x23ac93dB9c305d2D2E9b27F0Dd955166992B0192"; //Abi

    const tokenBal = await readContract({
      address: contractaddress_token, // Contract address
      abi: abi_token, // Contract ABI
      functionName: "balanceOf", // Function to call
      args: [account], // Optional function arguments
    });

    setBCB(Number(tokenBal) / decimal);

    const stakers1 = await readContract({
      address: contractaddress, // Contract address
      abi: abi, // Contract ABI
      functionName: "stakersPlan", // Function to call
      args: [4], // Optional function arguments
    });

    setStakers1(Number(stakers1));

    const stake1 = await readContract({
      address: contractaddress, // Contract address
      abi: abi, // Contract ABI
      functionName: "stakeOnPool", // Function to call
      args: [4], // Optional function arguments
    });

    setStake1((Number(stake1) / decimal).toFixed(4));

    const reward1 = await readContract({
      address: contractaddress, // Contract address
      abi: abi, // Contract ABI
      functionName: "rewardOnPool", // Function to call
      args: [74736000], // Optional function arguments
    });

    setReward1((Number(reward1) / decimal).toFixed(4));




    

    const stakers2 = await readContract({
      address: contractaddress, // Contract address
      abi: abi, // Contract ABI
      functionName: "stakersPlan", // Function to call
      args: [1], // Optional function arguments
    });

    setStakers2(Number(stakers2));

    const stake2 = await readContract({
      address: contractaddress, // Contract address
      abi: abi, // Contract ABI
      functionName: "stakeOnPool", // Function to call
      args: [1], // Optional function arguments
    });

    setStake2((Number(stake2) / decimal).toFixed(4));

    const reward2 = await readContract({
      address: contractaddress, // Contract address
      abi: abi, // Contract ABI
      functionName: "rewardOnPool", // Function to call
      args: [31536000], // Optional function arguments
    });

    setReward2((Number(reward2) / decimal).toFixed(4));




    const stakers3 = await readContract({
      address: contractaddress, // Contract address
      abi: abi, // Contract ABI
      functionName: "stakersPlan", // Function to call
      args: [2], // Optional function arguments
    });
    setStakers3(Number(stakers3));

    const stake3 = await readContract({
      address: contractaddress, // Contract address
      abi: abi, // Contract ABI
      functionName: "stakeOnPool", // Function to call
      args: [2], // Optional function arguments
    });

    setStake3((Number(stake3) / decimal).toFixed(4));

    const reward3 = await readContract({
      address: contractaddress, // Contract address
      abi: abi, // Contract ABI
      functionName: "rewardOnPool", // Function to call
      args: [48816000], // Optional function arguments
    });

    setReward3((Number(reward3) / decimal).toFixed(4));





    const stakers4 = await readContract({
      address: contractaddress, // Contract address
      abi: abi, // Contract ABI
      functionName: "stakersPlan", // Function to call
      args: [3], // Optional function arguments
    });
    setStakers4(Number(stakers4));

    const stake4 = await readContract({
      address: contractaddress, // Contract address
      abi: abi, // Contract ABI
      functionName: "stakeOnPool", // Function to call
      args: [3], // Optional function arguments
    });

    setStake4((Number(stake4) / decimal).toFixed(4));

    const reward4 = await readContract({
      address: contractaddress, // Contract address
      abi: abi, // Contract ABI
      functionName: "rewardOnPool", // Function to call
      args: [57456000], // Optional function arguments
    });

    setReward4((Number(reward4) / decimal).toFixed(4));




   
    const investd = await readContract({
      address: contractaddress, // Contract address
      abi: abi, // Contract ABI
      functionName: "investorOrderIds", // Function to call
      args: [account], // Optional function arguments
    });
    console.log(investId)
    setinvestId(investd[0]);

    if (investd.length) {
      let reward = 0;
      // setinvestlen([]);
      var inv = [];

      for (var i = 0; i < investd.length; i++) {
        // console.log(investlen.length);

        const pReward = await readContract({
          address: contractaddress, // Contract address
          abi: abi, // Contract ABI
          functionName: "pendingRewards", // Function to call
          args: [investd[i]], // Optional function arguments
        });
        const order = await readContract({
          address: contractaddress, // Contract address
          abi: abi, // Contract ABI
          functionName: "orders", // Function to call
          args: [investd[i]], // Optional function arguments
        });


        
          if (order[7] == false) {
            inv.push({
              orderIds: investd[i],
              amount: order[1],
              duration: order[2],
              returnPer :  order[3],
              start: order[4],
              end: order[5],
              pending: pReward,
            });
          
        }
      }
      setinvestlen(inv);
    } else {
      if (Number(investId === 0)) {
        setinvestlen([]);
      }
    }


  };

  const stake = async (valu) => {
    try {
      if (address) {
  
        const valueforstake = ethers.utils.parseUnits(inputValue, "ether");

        setLoading("block");

        const { request } = await prepareWriteContract({
          address: contractaddress_token,
          abi: abi_token,
          functionName: "approve",
          args: [contractaddress, valueforstake],
        });
        const { hash } = await writeContract(request);

        await waitForTransaction({
          hash,
          confirmations: 1,
        });

        const { request: contractrqst } = await prepareWriteContract({
          address: contractaddress,
          abi: abi,
          functionName: "deposit",
          args: [valueforstake, valu ],
        });

        const { hash: contractHash } = await writeContract(contractrqst);

        await waitForTransaction({
          contractHash,
          confirmations: 1,
        });

        Info();

        setLoading("none");
        Info();
      }
    } catch (error) {
      setShow("none");
      setLoading("none");
      console.log(error);
    }
  };

  function handleInputChange(event) {
    setInputValue(event.target.value);
    // console.log(event.target.value);
  }


  return (
    <>
      {loading === "block" && (
        <div className="fixed inset-0 z-30 bg-[rgba(0,0,0,0.2)] w-[100vw] h-[100vh] flex justify-center items-center">
          <div>
            <CircularProgress sx={{ color: "#0dbe4f" }} size={80} />
          </div>
        </div>
      )}

      <ToastContainer />

      <div className="min-h-screen 
       max-w-[100vw]  overflow-hidden relative">
        
        <div className="absolute z-10 top-[-120px] left-[-120px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="346"
            height="368"
            viewBox="0 0 346 368"
            fill="#d946ef"
          >
            <g filter="url(#filter0_f_250_7840)">
              <path
                d="M65.5 280.5H69.9661C119.414 280.5 159.5 240.414 159.5 190.966V186.5H155.034C105.586 186.5 65.5 226.586 65.5 276.034V280.5Z"
                stroke="#00ACD2"
                strokeWidth="5"
              />
              <path
                d="M159.5 280.5H155.034C105.586 280.5 65.5 240.414 65.5 190.966V186.5H69.9661C119.414 186.5 159.5 226.586 159.5 276.034V280.5Z"
                stroke="#00ACD2"
                strokeWidth="5"
              />
              <path
                d="M164.5 280.5H168.966C218.414 280.5 258.5 240.414 258.5 190.966V186.5H254.034C204.586 186.5 164.5 226.586 164.5 276.034V280.5Z"
                stroke="#00ACD2"
                strokeWidth="5"
              />
              <path
                d="M164.5 87.5H168.966C218.414 87.5 258.5 127.586 258.5 177.034V181.5H254.034C204.586 181.5 164.5 141.414 164.5 91.9661V87.5Z"
                stroke="#00ACD2"
                strokeWidth="5"
              />
              <rect
                x="65.5"
                y="87.5"
                width="94"
                height="94"
                rx="47"
                stroke="#d2f0ff"
                strokeWidth="5"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_250_7840"
                x="-22"
                y="0"
                width="368"
                height="368"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="42.5"
                  result="effect1_foregroundBlur_250_7840"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute z-10 bottom-[-100px] right-[-100px]"></div>

        <div className="hidden md:block absolute inset-0">
          <div className="flex justify-end">
            <img src="" alt="" className="object-cover " />
          </div>
        </div>
        <div className="relative bg-image bg-contain bg-no-repeat z-10">
          <Navbar />

          
          <div className="flex  justify-center">
            <h2
              className="text-[55px] gradient-text font-bold w-fit sm:text-[65px]  text-center mt-[70px] sm:mt-[40px]"
              
            >
              {t("staking", "Staking")}
            </h2>
          </div>

          <div className="flex justify-center mt-[10px]">
            <div
              className="relative z-0 flex justify-center bg-[#52104c] items-center h-[52px] px-[7px] rounded-[15px]"
              style={{
                background: "",
              }}
            >
              <div className="flex">
                {investmentType.map((item, i) => (
                  <div key={i}>
                    <div
                      className={` w-[115px] `}
                      onClick={() => setactiveType(item)}
                    >
                      <button
                        className={`rounded-[6px] w-full text-[14px] font-bold h-[34px] ${activeType === item ? "text-[white]" : " text-white"
                          } `}
                        style={{
                          background:
                            activeType === item &&
                            "#d946ef",
                        }}
                      >
                        {item}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        
          <div className="pt-[80px] pb-[40px] max-w-[1400px] px-[30px] mx-auto relative z-10 ">
            {activeType === poo ? (
              <motion.div
                whileInView={{ y: [70, 0], opacity: [0, 1] }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                initial="hidden"
                style={{ opacity: 0 }}
              >
                <div className="flex flex-wrap justify-center gap-[40px] sm:gap-[50px]">
                  
                  <div className="w-[380px] backdrop-blur-sm bg-transparent rounded-[20px] cardShadow p-[20px]">
                    <img style={{borderRadius:"4%"}} src={image2} alt=""  />

                    <p className="text-[15px] pt-[5px] text-[#d946ef]">
                      {t("Reward-Pool", "Reward Pool: APY is 5%")} 17%
                    </p>

                    <div className="mt-[20px] space-y-[15px]">
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Stakers", "Stakers")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {stakers2}
                        </h2>
                      </div>
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Staked", "Staked")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {stake2}
                        </h2>
                      </div>
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Rewards-claimed", "Rewards-claimed")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {reward2}
                        </h2>
                      </div>
                    </div>

                    <div className="flex justify-between border-t mt-[20px] border-b border-[#d946ef] py-[9px] ">
                      <h2 className="text-[#ffffff] text-[16px] font-semibold">
                        {t("My-Balance", "My Balance")}
                      </h2>
                      <h2 className="text-[#ffffff] text-[16px] font-bold">
                        {BCB}
                      </h2>
                    </div>

                    <input
                      placeholder={t("amount", "Enter Usdt amount for CRC stake")}
                      value={inputValue2}
                      onChange={handleInputChange2}
                      type="number"
                      className="outline-none w-full placeholder:text-[#ffffff] text-white border bg-transparent border-[#d946ef] text-[11px] sm:text-[13px] font-normal rounded-[8px]  mt-[20px] px-[20px] py-[10px]"
                    />

                    <div className="flex justify-between   py-[9px] ">
                   
                    </div>

                    <button
                      onClick={() => stake(1)}
                      style={{
                        background:
                          "#d946ef",
                      }}
                      className="text-white relative z-10 mb-[10px] mt-[30px] font-semibold flex gap-[6px] justify-center items-center text-[14px] lg:text-[16px]  w-full h-[32px] sm:h-[37px] rounded-[5px] sm:rounded-[10px]"
                    >
                      {t("bstake", "Stake")}
                    </button>
                  </div>

                  <div className="w-[380px] backdrop-blur-sm bg-transparent rounded-[20px] cardShadow p-[20px]">
                    <img  style={{borderRadius:"4%"}} src={image3} alt=""  />

                    <p className="text-[15px] pt-[5px] text-[#d946ef]">
                      {t("Reward-Pool")} 24%
                    </p>

                    <div className="mt-[20px] space-y-[15px]">
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Stakers", "Stakers")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {stakers3}
                        </h2>
                      </div>
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Staked", "Staked")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {stake3}
                        </h2>
                      </div>
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Rewards-claimed", "Rewards-claimed")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {reward3}
                        </h2>
                      </div>
                    </div>

                    <div className="flex justify-between border-t mt-[20px] border-b border-[#d946ef] py-[9px] ">
                      <h2 className="text-[#ffffff] text-[16px] font-semibold">
                        {t("My-Balance", "My Balance")}
                      </h2>
                      <h2 className="text-[#ffffff] text-[16px] font-bold">
                        {BCB}
                      </h2>
                    </div>

                    <input
                      placeholder={t("amount", "Enter Usdt amount for CRC stake")}
                      value={inputValue3}
                      onChange={handleInputChange3}
                      type="number"
                      className="outline-none w-full placeholder:text-[#ffffff] border border-[#d946ef] text-[#ffffff] text-[11px] sm:text-[13px] font-normal rounded-[8px] bg-transparent mt-[20px] px-[20px] py-[10px]"
                    />
                    <div className="flex justify-between   py-[9px] ">
                     
                    </div>

                    <button
                      onClick={() => stake(2)}
                      style={{
                        background:
                          "#d946ef",
                      }}
                      className="text-white relative z-10 mb-[10px] mt-[30px] font-semibold flex gap-[6px] justify-center items-center text-[14px] lg:text-[16px]  w-full h-[32px] sm:h-[37px] rounded-[5px] sm:rounded-[10px]"
                    >
                      {t("bstake", "Stake")}
                    </button>
                  </div>
                  <div className="w-[380px] backdrop-blur-sm bg-transparent rounded-[20px] cardShadow p-[20px]">
                    <img style={{borderRadius:"4%"}} src={image4} alt=""  />

                    <p className="text-[15px] pt-[5px] text-[#d946ef]">
                      {t("Reward-Pool")} 31%
                    </p>

                    <div className="mt-[20px] space-y-[15px]">
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Stakers", "Stakers")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {stakers4}
                        </h2>
                      </div>
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Staked", "Staked")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {stake4}
                        </h2>
                      </div>
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Rewards-claimed", "Rewards-claimed")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {reward4}
                        </h2>
                      </div>
                    </div>

                    <div className="flex justify-between border-t mt-[20px] border-b border-[#d946ef] py-[9px] ">
                      <h2 className="text-[#ffffff] text-[16px] font-semibold">
                        {t("My-Balance", "My Balance")}
                      </h2>
                      <h2 className="text-[#ffffff] text-[16px] font-bold">
                        {BCB}
                      </h2>
                    </div>

                    <input
                      placeholder={t("amount", "Enter Usdt amount for CRC stake")}
                      value={inputValue3}
                      onChange={handleInputChange3}
                      type="number"
                      className="outline-none w-full placeholder:text-[#ffffff] border border-[#d946ef] text-[#ffffff] text-[11px] sm:text-[13px] font-normal rounded-[8px] bg-transparent mt-[20px] px-[20px] py-[10px]"
                    />
                    <div className="flex justify-between   py-[9px] ">
                     
                    </div>

                    <button
                      onClick={() => stake(3)}
                      style={{
                        background:
                          "#d946ef",
                      }}
                      className="text-white relative z-10 mb-[10px] mt-[30px] font-semibold flex gap-[6px] justify-center items-center text-[14px] lg:text-[16px]  w-full h-[32px] sm:h-[37px] rounded-[5px] sm:rounded-[10px]"
                    >
                      {t("bstake", "Stake")}
                    </button>
                  </div>
                  {/* <div className="w-[380px] backdrop-blur-sm bg-transparent rounded-[20px] cardShadow p-[20px]">
                    <img src={image4} alt=""  />

                    <p className="text-[15px] pt-[5px] text-[#d946ef]">
                      {t("Reward-Pool", "Reward Pool: APY is 15%")} 50%
                    </p>

                    <div className="mt-[20px] space-y-[15px]">
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Stakers", "Stakers")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {stakers4}
                        </h2>
                      </div>
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Staked", "Staked")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {stake4}
                        </h2>
                      </div>
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Rewards-claimed", "Rewards-claimed")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {reward4}
                        </h2>
                      </div>
                    </div>

                    <div className="flex justify-between border-t mt-[20px] border-b border-[#d946ef] py-[9px] ">
                      <h2 className="text-[#ffffff] text-[16px] font-semibold">
                        {t("My-Balance", "My Balance")}
                      </h2>
                      <h2 className="text-[#ffffff] text-[16px] font-bold">
                        {BCB}
                      </h2>
                    </div>

                    <input
                      placeholder={t("amount", "Enter Usdt amount for CRC stake")}
                      value={inputValue4}
                      onChange={handleInputChange4}
                      type="number"
                      className="outline-none w-full placeholder:text-[#ffffff] text-black border bg-transparent border-[#d946ef] text-[11px] sm:text-[13px] font-normal rounded-[8px]  mt-[20px] px-[20px] py-[10px]"
                    />

                    <div className="flex justify-between   py-[9px] ">
                   
                    </div>

                    <button
                      onClick={() => stake(3)}
                      style={{
                        background:
                          "#d946ef",
                      }}
                      className="text-white relative z-10 mb-[10px] mt-[30px] font-semibold flex gap-[6px] justify-center items-center text-[14px] lg:text-[16px]  w-full h-[32px] sm:h-[37px] rounded-[5px] sm:rounded-[10px]"
                    >
                      {t("bstake", "Stake")}
                    </button>
                  </div> */}
                  
                </div>

                <div className="flex  bg-image  bg-cover bg-no-repeat bg flex-wrap justify-center mt-24 gap-[40px] sm:gap-[50px]">
                  
                  {/* <div className="w-[380px] backdrop-blur-sm bg-transparent rounded-[20px] cardShadow p-[20px]">
                    <img style={{borderRadius:"4%"}} src={image1} alt=""  />

                    <p className="text-[15px] pt-[5px] text-[#d946ef]">
                      {t("Reward-Pool", "Reward Pool: APY is 15%")} 49%
                    </p>

                    <div className="mt-[20px] space-y-[15px]">
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Stakers", "Stakers")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {stakers1}
                        </h2>
                      </div>
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Staked", "Staked")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {stake1}
                        </h2>
                      </div>
                      <div className="flex justify-between">
                        <h2 className="text-[#ffffff] text-[16px] font-semibold">
                          {t("Rewards-claimed", "Rewards-claimed")}
                        </h2>
                        <h2 className="text-[#ffffff] text-[16px] font-bold">
                          {reward1}
                        </h2>
                      </div>
                    </div>

                    <div className="flex justify-between border-t mt-[20px] border-b border-[#d946ef] py-[9px] ">
                      <h2 className="text-[#ffffff] text-[16px] font-semibold">
                        {t("My-Balance", "My Balance")}
                      </h2>
                      <h2 className="text-[#ffffff] text-[16px] font-bold">
                        {BCB}
                      </h2>
                    </div>

                    <input
                      placeholder={t("amount", "Enter Usdt amount for CRC stake")}
                      value={inputValue4}
                      onChange={handleInputChange4}
                      type="number"
                      className="outline-none w-full placeholder:text-[#ffffff] text-black border bg-transparent border-[#d946ef] text-[11px] sm:text-[13px] font-normal rounded-[8px]  mt-[20px] px-[20px] py-[10px]"
                    />

                    <div className="flex justify-between   py-[9px] ">
                   
                    </div>

                    <button
                      onClick={() => stake(4)}
                      style={{
                        background:
                          "#d946ef",
                      }}
                      className="text-white relative z-10 mb-[10px] mt-[30px] font-semibold flex gap-[6px] justify-center items-center text-[14px] lg:text-[16px]  w-full h-[32px] sm:h-[37px] rounded-[5px] sm:rounded-[10px]"
                    >
                      {t("bstake", "Stake")}
                    </button>
                  </div> */}
                 
                  
                </div>

                
              </motion.div>
            ) : (
              <div>
                <motion.div
                  whileInView={{ y: [70, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.0, ease: "easeInOut" }}
                  initial="hidden"
                  style={{ opacity: 0 }}
                >
                  <Table investlen={investlen} Info={Info} />
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
