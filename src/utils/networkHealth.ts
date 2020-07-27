
export default function calculateNetworkHealth(health: number, status: string): { color: string, health: number | null} {
    
  const lightGreen = "#6EE294";
  const orange = "#FF993A";
  const reddish = "#FF3563"
  const butterScotch = "#FFC12F";
  
  if (status === 'ack') {
    return { 
      color: '#f0f0f0',
      health: null
    };
  }
  if (!health) {
    return {
      color: reddish,
      health: 0
    };
  }

  const calculateHealth: number = health / 20;
  const roundedHealth: number = Math.round(calculateHealth);
  switch (roundedHealth) {
    case 0:
      return {
        color: reddish,
        health: roundedHealth
      };
    case 1:
      return {
        color: orange,
        health: roundedHealth
      }
    case 2:
    case 3:
      return {
        color: butterScotch,
        health: roundedHealth
      }
    case 4:
    case 5: 
      return {
        color: lightGreen,
        health: roundedHealth
      }
    default:
      return {
        color: reddish,
        health: null
      }
  }


}