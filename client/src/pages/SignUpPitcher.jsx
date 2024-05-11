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
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 gap-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg text-white">
              <span style={{ fontSize: '80%' }}>आ</span>rambhik
            </span>
          </Link>

          <p className="text-sm mt-5">
            Have an idea? Welcome to{" "}
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
              <Label value="Foundation date" />
              <TextInput
                type="date"
                placeholder="When did you start?"
                id="time"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Valuation" />
              <TextInput
                type="text"
                placeholder="Valuation in lakhs"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Website link" />
              <TextInput
                type="text"
                placeholder="Link to your website"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Country" />
              <TextInput
                type="text"
                placeholder="Country"
                id="country"s
                onChange={handleChange}
              />
            </div>
            {/* End of additional sections */}
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
