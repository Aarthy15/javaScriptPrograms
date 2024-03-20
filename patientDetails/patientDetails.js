const csvTojson = require('csvtojson');

const getDays = (dateOfJoining, dateOfDischarge) => {
    const discharge=new Date(dateOfDischarge);
    const joining=new Date(dateOfJoining);
    const days=Math.abs(discharge.getDate()-joining.getDate());

    return days;
};

const getCalculateDays= (bill) => ({
    ...bill,
    Days:getDays(bill.dateOfJoining,bill.dateOfDischarge)
});

const getTotalCharges = ((charges, DoctorFees) =>Number(charges) + Number(DoctorFees));

const getCalculateCharges = (charge) => ({
    ...charge,
    TotalCharge: getTotalCharges(charge.Charges,charge.DoctorFees)
});


const addFields = (detail, calculatedDays, calculateCharges) => {
    const billDetails = calculatedDays.find((bill) => bill.patientNo === detail.PatientId);
    const chargeDetails = calculateCharges.find((charge) => charge.WardType === detail.WardType);

    return {
        ...detail,
        ...billDetails,
        ...chargeDetails
    };
};

const main = async () => {
    const patientDetails = await csvTojson().fromFile('./patientDetails.csv');
    const patientBills = await csvTojson().fromFile('./patientBill.csv');
    const wardCharges = await csvTojson().fromFile('./wardCharges.csv');
    const calculateDays = patientBills.map((bill)=>getCalculateDays(bill));
    const calculateCharges=wardCharges.map((charges)=>getCalculateCharges(charges));
    const result = patientDetails.map((detail) => addFields(detail, calculateDays, calculateCharges));
    const total=result.map((data)=>({
        ...data,
        Total: data.TotalCharge * data.Days
    }))
    console.log(total);
}

main();




