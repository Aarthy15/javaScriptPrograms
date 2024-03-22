const csvTojson = require('csvtojson');

const getFeesAmount = (detail, feesDetails) =>
   feesDetails.find((x) => x.courses === detail.courses).Fees;

const getPenaltyAmount = (detail, penaltyCharges) => 
   penaltyCharges.find((x) => x.paidmonth === detail.Paidmonth).penaltyamt;

const getCalculateFees = (details, feesDetails, penaltyCharges) => 
    details.map((detail)=> {
    const courseFee = getFeesAmount(detail, feesDetails);
    const penaltyFee = getPenaltyAmount(detail, penaltyCharges);
    const lateFee = Number(courseFee) + Number(penaltyFee);

    return {
        ...detail,
        courseFee,
        penaltyFee,
        lateFee 
    };
});

const main = async () => {
    const studentDetails = await csvTojson().fromFile('/home/arsr/dev/javaScriptPrograms/studentFeesDetails/studentDetails.csv');
    const feesDetails = await csvTojson().fromFile('/home/arsr/dev/javaScriptPrograms/studentFeesDetails/feesDetails.csv');
    const penaltyCharges = await csvTojson().fromFile('/home/arsr/dev/javaScriptPrograms/studentFeesDetails/penaltyCharges.csv');
    const calculatedFees = getCalculateFees(studentDetails, feesDetails, penaltyCharges);

    console.log(calculatedFees);
};

main();
