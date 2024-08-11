// script.js

document.getElementById("send-btn").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value.trim();
    
    if (userInput !== "") {
        displayMessage(userInput, "user");
        getBotResponse(userInput);
        document.getElementById("user-input").value = "";
    }
});

function displayMessage(message, sender) {
    let chatOutput = document.getElementById("chat-output");
    let messageElement = document.createElement("p");
    messageElement.className = sender;
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function getBotResponse(userInput) {
    // Define terms for various financial and insurance concepts
    let budgetTerms = ["budget", "financial plan", "spending plan"];
    let emergencyFundTerms = ["emergency fund", "rainy day fund", "savings for emergencies"];
    let saveTerms = ["save", "saving", "put aside"];
    let creditScoreTerms = ["credit score", "credit rating", "creditworthiness"];
    let investmentTerms = ["investment", "investing", "stocks", "bonds", "mutual funds"];
    let retirementTerms = ["retirement", "401k", "IRA", "retirement account"];
    let debtTerms = ["debt", "loan", "credit card debt"];
    let compoundInterestTerms = ["compound interest", "interest on interest"];
    let insuranceTerms = ["insurance", "coverage", "premium", "deductible", "copayment", "claims", "policy", "rider"];
    
    let response = "";

    if (userInput.toLowerCase().includes("financial literacy")) {
        response = "Financial literacy is the ability to understand and effectively manage your financial resources. It includes knowledge about budgeting, saving, investing, and understanding financial products and services.";
    } else if (insuranceTerms.some(term => userInput.toLowerCase().includes(term))) {
        if (userInput.toLowerCase().includes("insurance")) {
            response = "Insurance is a financial arrangement that provides protection against financial loss or risk. By paying regular premiums, you receive coverage for various types of risks, such as damage to property, health issues, or liability for accidents.";
        } else if (userInput.toLowerCase().includes("why is insurance important")) {
            response = "Insurance is important because it helps protect individuals and businesses from significant financial losses. It provides a safety net that can cover costs related to health, property damage, liability, and other unexpected events.";
        } else if (userInput.toLowerCase().includes("different types of insurance")) {
            response = "Common types of insurance include health insurance, auto insurance, homeowners insurance, life insurance, disability insurance, and travel insurance.";
        } else if (userInput.toLowerCase().includes("premium")) {
            response = "A premium is the amount of money paid periodically to an insurance company to maintain coverage. It is essentially the cost of the insurance policy.";
        } else if (userInput.toLowerCase().includes("deductible")) {
            response = "A deductible is the amount you are required to pay out-of-pocket before your insurance coverage starts to pay for claims.";
        } else if (userInput.toLowerCase().includes("copayment")) {
            response = "A copayment (or copay) is a fixed amount you pay for specific medical services or prescriptions at the time of the visit.";
        } else if (userInput.toLowerCase().includes("coverage limit")) {
            response = "A coverage limit is the maximum amount an insurance policy will pay for a covered loss or claim.";
        } else if (userInput.toLowerCase().includes("insurance rider")) {
            response = "An insurance rider is an additional provision or endorsement added to an insurance policy that modifies its coverage.";
        } else if (userInput.toLowerCase().includes("term life insurance vs whole life insurance")) {
            response = "Term life insurance provides coverage for a specific period and pays out a death benefit if the insured dies during that term. Whole life insurance provides lifelong coverage and includes a cash value component.";
        } else if (userInput.toLowerCase().includes("how does claims processing work")) {
            response = "Claims processing involves submitting a request for payment to your insurance company after experiencing a loss or damage. The insurer reviews the claim and determines the payment amount based on the policy terms.";
        } else if (userInput.toLowerCase().includes("factors affecting insurance premiums")) {
            response = "Factors affecting insurance premiums include the type of coverage, coverage limits, deductibles, personal factors, and risk factors.";
        } else if (userInput.toLowerCase().includes("how to lower insurance premiums")) {
            response = "To lower insurance premiums, consider increasing your deductible, shopping around for quotes, bundling policies, maintaining a good record, and taking advantage of discounts.";
        } else {
            response = "I'm sorry, I don't have an answer for that question. Can you ask something else?";
        }
    } else if (budgetTerms.some(term => userInput.toLowerCase().includes(term))) {
        response = "A budget is a plan for how you will spend your money each month.";
    } else if (emergencyFundTerms.some(term => userInput.toLowerCase().includes(term))) {
        response = "An emergency fund is money saved for unexpected expenses.";
    } else if (saveTerms.some(term => userInput.toLowerCase().includes(term))) {
        response = "You can start saving by setting aside a portion of your income each month.";
    } else if (creditScoreTerms.some(term => userInput.toLowerCase().includes(term))) {
        response = "A credit score is a numerical representation of your creditworthiness based on your credit history.";
    } else if (investmentTerms.some(term => userInput.toLowerCase().includes(term))) {
        response = "Investments include stocks, bonds, mutual funds, and real estate, among others. They help you grow your wealth over time.";
    } else if (retirementTerms.some(term => userInput.toLowerCase().includes(term))) {
        response = "Retirement accounts like 401(k)s and IRAs help you save for retirement with tax advantages.";
    } else if (debtTerms.some(term => userInput.toLowerCase().includes(term))) {
        response = "Managing debt involves understanding its terms, making timely payments, and avoiding excessive borrowing.";
    } else if (compoundInterestTerms.some(term => userInput.toLowerCase().includes(term))) {
        response = "Compound interest means earning interest on both your initial investment and the interest that has already been added.";
    } else {
        response = "I'm sorry, I don't understand that question. Can you ask something else?";
    }

    displayMessage(response, "bot");
}
