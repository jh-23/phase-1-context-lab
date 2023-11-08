/* Your Code Here */

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    const Object = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    return Object 
}

function createEmployeeRecords (nestedArray) {
    const employeeRecords = nestedArray.map(arrayNew => createEmployeeRecord(arrayNew))
    return employeeRecords
}

function createTimeInEvent(dateStamp) {
    console.log(this)
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(11, 15)),
        date: dateStamp.slice(0, 10)
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(11, 15)),
        date: dateStamp.slice(0, 10)
    })
    return this 
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find((element) => element.date === date).hour
    const timeOut = this.timeOutEvents.find((element) => element.date === date).hour
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(date) {
    const rate = this.payPerHour
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    return rate * hoursWorked
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find((record) => record.firstName === firstName)
}

function calculatePayroll(arrayRecord) {
    const sumEmployeePay = arrayRecord.map((employee) => allWagesFor.call(employee))
    return sumEmployeePay.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

