import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 gap-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg text-white">
              <span style={{ fontSize: '80%' }}>आ</span>rambhik
            </span>
          </Link>

          <p className="text-sm mt-5">
            Looking for investment opportunities? Welcome to{" "}
            <Link to="/" className=" font-semibold">
              Aarambhik.&nbsp;
            </Link>
            You can sign up with your email and password or with Google to tune
            in!
          </p>
        </div>
        {/* right */}

        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@gmail.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            {/* Additional sections */}
            <div>
              <Label value="Your Full Name" />
              <TextInput
                type="text"
                placeholder="Your Full Name"
                id="fullName"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Phone Number" />
              <TextInput
                type="text"
                placeholder="Phone"
                id="phone"
                onChange={handleChange}
              />
            </div>
            {/* Dropdown menus */}

            
            <Label value="Your Investment Size" />
            <select id="investment" onChange={handleChange} className="custom-select rounded-lg">
              <option disabled selected hidden value="">Select Investment Size</option>
              <option value="0-2">0-2L</option>
              <option value="2+">2L+</option>
              {/* Add more options as needed */}
            </select>
            <Label value="Sector Preferences" />
            <select id="sector" onChange={handleChange} className="custom-select rounded-lg bg-gray-50 tw-bg-opacity-50">
              <option disabled selected hidden value="">Select Sector Preferences</option>
              <option value="Health Care">Health Care</option>
              <option value="Mobility">Mobility</option>
              <option value="Sustainability">Sustainability</option>
              <option value="D2C">D2C</option>
              <option value="Any Other">Any Other</option>
              {/* Add more options as needed */}
            </select>

            <Label value="I'm an" />
            <select id="identification" onChange={handleChange} className="custom-select rounded-lg">
              <option disabled selected hidden value="">Select an option</option>
              <option value="investor">Investor</option>
              <option value="advisor">Advisor</option>
            </select>
            {/* End of dropdown menus */}
            <Button
              gradientDuoTone="cyanToBlue"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert
              className="mt-5"
              type="error"
              color="failure"
              onDismiss={() => setErrorMessage(null)}
            >
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
