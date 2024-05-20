import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Spinner, Card } from "flowbite-react";

export default function Investor() {
  const [investorData, setInvestorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInvestorData = async () => {
      try {
        const res = await fetch("/api/investor", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        setInvestorData(data);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    };

    fetchInvestorData();
  }, []);

  const totalInvestment = investorData?.investments.reduce((acc, investment) => acc + investment.amount, 0) || 0;
  const totalCurrentValue = investorData?.investments.reduce((acc, investment) => acc + investment.currentValue, 0) || 0;
  const totalProfit = totalCurrentValue - totalInvestment;
  const profitPercentage = ((totalProfit / totalInvestment) * 100).toFixed(2);

  const mockOpportunities = [
    { name: "TechCorp", performance: "Positive", url: "https://techcorp.com" },
    { name: "HealthPlus", performance: "Steady", url: "https://healthplus.com" },
    { name: "EcoWorld", performance: "Rising", url: "https://ecoworld.com" },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Alert color="failure" onDismiss={() => setErrorMessage(null)}>
          {errorMessage}
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-5">Welcome back, {investorData.fullName}</h1>
        <div className="flex gap-5">
          <div className="w-7/12 bg-white shadow-md rounded-lg p-5">
            <h2 className="text-2xl font-semibold mb-5">Investment Overview</h2>
            <p>Total Investment Made: ₹{totalInvestment}</p>
            <p>Total Current Value: ₹{totalCurrentValue}</p>
            <p>
              Total Profit: ₹{totalProfit} ({profitPercentage}%)
            </p>
            <table className="min-w-full mt-5 bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Company Name</th>
                  <th className="px-4 py-2 border">Investment Made</th>
                  <th className="px-4 py-2 border">Date of Investment</th>
                  <th className="px-4 py-2 border">Current Value</th>
                </tr>
              </thead>
              <tbody>
                {investorData.investments.map((investment) => (
                  <tr key={investment.companyName}>
                    <td className="px-4 py-2 border">{investment.companyName}</td>
                    <td className="px-4 py-2 border">₹{investment.amount}</td>
                    <td className="px-4 py-2 border">{investment.date}</td>
                    <td className="px-4 py-2 border">
                      ₹{investment.currentValue} (
                      {((investment.currentValue - investment.amount) / investment.amount * 100).toFixed(2)}%)
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-5/12 bg-white shadow-md rounded-lg p-5">
            <h2 className="text-2xl font-semibold mb-5">Investment Opportunities</h2>
            {mockOpportunities.map((opportunity) => (
              <Card key={opportunity.name} className="mb-5">
                <h3 className="text-xl font-bold">{opportunity.name}</h3>
                <p>Market Performance: {opportunity.performance}</p>
                <a href={opportunity.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Visit Website
                </a>
              </Card>
            ))}
          </div>
        </div>
        <Button className="mt-5" gradientDuoTone="cyanToBlue" onClick={() => navigate("/sign-in")}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}
