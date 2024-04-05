// NOTE: This is linked to salary.html

function calculateNetSalary() {
    // Created a function calculateNetSalary that calculates 
    // a person's net salary by taking as input the basic salary
    // and benefits 
    const taxRates = [{
            min: 0,
            max: 24000,
            rate: 0.1
        },
        {
            min: 24001,
            max: 32333,
            rate: 0.25
        },
        {
            min: 32334,
            max: 40467,
            rate: 0.3
        },
        {
            min: 40468,
            max: Infinity,
            rate: 0.35
        }
    ];
    // taxRates is array of objects representing tax rates based on income ranges.
    const NHIFDeductions = [{
            min: 0,
            max: 5999,
            deduction: 150
        },
        {
            min: 6000,
            max: 7999,
            deduction: 300
        },
        {
            min: 8000,
            max: 11999,
            deduction: 400
        },
        {
            min: 12000,
            max: 14999,
            deduction: 500
        },
        {
            min: 15000,
            max: 19999,
            deduction: 600
        },
        {
            min: 20000,
            max: 24999,
            deduction: 750
        },
        {
            min: 25000,
            max: 29999,
            deduction: 850
        },
        {
            min: 30000,
            max: 34999,
            deduction: 900
        },
        {
            min: 35000,
            max: 39999,
            deduction: 1000
        },
        {
            min: 40000,
            max: 44999,
            deduction: 1100
        },
        {
            min: 45000,
            max: 49999,
            deduction: 1200
        },
        {
            min: 50000,
            max: 59999,
            deduction: 1300
        },
        {
            min: 60000,
            max: 69999,
            deduction: 1400
        },
        {
            min: 70000,
            max: 79999,
            deduction: 1500
        },
        {
            min: 80000,
            max: 89999,
            deduction: 1600
        },
        {
            min: 90000,
            max: 99999,
            deduction: 1700
        },
        {
            min: 100000,
            max: 109999,
            deduction: 1800
        },
        {
            min: 110000,
            max: 119999,
            deduction: 1900
        },
        {
            min: 120000,
            max: 129999,
            deduction: 2000
        },
        {
            min: 130000,
            max: Infinity,
            deduction: 2100
        }
    ];
    // NHIFDeductions is an an array of objects representing NHIF deductions based on income range
    const NSSFPercentage = 0.06;
    //  NSSFPercentage is a constant representing the NSSF contribution percentage.

    let basicSalary = parseFloat(prompt("Enter basic salary (in Ksh):"));
    // basicSalary is a variable that stores the basic salary inputted by the user.
    let benefits = parseFloat(prompt("Enter benefits (in Ksh):"));
    // benefits is a variable stores the benefits inputted by the user

    let grossSalary = basicSalary + benefits;
    // grossSalary is a variable that calculates the gross salary by adding the basic salary and benefits.
    // Calculate PAYE tax
    let taxableIncome = grossSalary - 2400;
    let tax = 0;
    // taxableIncome variable calculates the taxable income by subtracting the personal relief from the gross salary.
    // tax variable calculates the PAYE tax based on the tax rates and taxable income.
    for (let i = 0; i < taxRates.length; i++) {
        if (taxableIncome > taxRates[i].min) {
            let taxableAmount = Math.min(taxRates[i].max - taxRates[i].min, taxableIncome - taxRates[i].min);
            tax += taxableAmount * taxRates[i].rate;
        } else {
            break;
        }
    }

    // Calculate NHIF deductions
    let NHIFDeduction = 0;
    for (let i = 0; i < NHIFDeductions.length; i++) {
        if (grossSalary > NHIFDeductions[i].min && grossSalary <= NHIFDeductions[i].max) {
            NHIFDeduction = NHIFDeductions[i].deduction;
            break;
        }
    }

    // Calculate NSSF deductions
    let NSSFContribution = grossSalary * NSSFPercentage;

    // Calculate net salary
    let netSalary = grossSalary - tax - NHIFDeduction - NSSFContribution;

    // Display results
    alert("Gross Salary: Ksh " + grossSalary.toFixed(2) + "\n" +
        "PAYE Tax: Ksh " + tax.toFixed(2) + "\n" +
        "NHIF Deductions: Ksh " + NHIFDeduction.toFixed(2) + "\n" +
        "NSSF Deductions: Ksh " + NSSFContribution.toFixed(2) + "\n" +
        "Net Salary: Ksh " + netSalary.toFixed(2));
}