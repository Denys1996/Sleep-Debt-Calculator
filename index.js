const getSleepHours = (day) => {
    //SWITCH Statement
    switch (day) {
      case "Monday":
        return 7;
        break;
      case "Tuesday":
        return 6;
        break;
      case "Wednesday":
        return 7;
        break;
      case "Thursday":
        return 8;
        break;
      case "Friday":
        return 7;
        break;
      case "Saturday":
        return 7;
        break;
      case "Sunday":
        return 6;
        break;
      default:
        return "Error!";
    }
  };
  
  const getActualSleepHours = () =>
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday");
  
  const getIdealSleepHours = (idealHoursPerNight = 8) => {
    return idealHoursPerNight * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      return "You got the perfect amount of sleep!"
    } else if (actualSleepHours > idealSleepHours) {
      let overHours = actualSleepHours - idealSleepHours
      return `You got more sleep than needed. You are over ${overHours} hour(s).`
    } else if (actualSleepHours < idealSleepHours){
      let underHours = idealSleepHours - actualSleepHours
      return `You should get some rest. You are under ${underHours} hour(s).`
    }
  }
  
  console.log(calculateSleepDebt());
  // console.log(getActualSleepHours());
  // console.log(getIdealSleepHours());
  //console.log(getSleepHours("Sunday"));
  
  
  
  
  
  
  
  
  
  
  
  