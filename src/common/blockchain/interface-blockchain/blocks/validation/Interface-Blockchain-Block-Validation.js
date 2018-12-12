import BlockchainDifficulty from "common/blockchain/global/difficulty/Blockchain-Difficulty"

class InterfaceBlockchainBlockValidation {

    constructor(getBlockCallBack, getDifficultyCallback, getTimeStampCallback, getHashPrevCallback, getChainHashPrevCallback, blockValidationType){

        if (blockValidationType === undefined || blockValidationType === null)
            blockValidationType = {};

        this.getBlockCallBack = getBlockCallBack;
        this.getDifficultyCallback = getDifficultyCallback;
        this.getTimeStampCallback = getTimeStampCallback;
        this.getHashPrevCallback = getHashPrevCallback;
        this.getChainHashPrevCallback = getChainHashPrevCallback;

        this.blockValidationType = blockValidationType;
    }

    destroyBlockValidation(){

        this.getBlockCallBack = undefined;
        this.getDifficultyCallback = undefined;
        this.getTimeStampCallback = undefined;
        this.getHashPrevCallback = undefined;
        this.getChainHashPrevCallback = undefined;

        this.blockValidationType = undefined;

    }

    getDifficulty(blockTimestamp, blockNumber){

        return BlockchainDifficulty.getDifficulty(this.getDifficultyCallback, this.getTimeStampCallback, blockTimestamp, blockNumber)

    }


    saveValidation(){

    }

    loadValidation(){

    }

}

export default InterfaceBlockchainBlockValidation;