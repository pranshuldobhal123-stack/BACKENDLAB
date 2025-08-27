const company = {
    name: "TechnicalCorp",
    address: {
        city: "DELHI",
        pin: "110001"
    }
};

function getCompanyName() {
    return company.name;
}

exports.company = company;
exports.getCompanyName = getCompanyName;