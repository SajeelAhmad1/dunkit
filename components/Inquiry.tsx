"use client";

import MaxWidth from "@/components/max-width";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "sonner";
import Button from "./button";
import { FormattedMessage, useIntl } from "react-intl";

const Inquiry = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    company: "",
    department: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/send-inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setLoading(false);

    if (response.ok) {
      toast.success("Email sent successfully");
      setFormData({
        lastName: "",
        firstName: "",
        company: "",
        department: "",
        email: "",
        message: "",
      });
    } else {
      toast.error("Error sending email");
    }
  };

  const intl = useIntl();
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <div
        className="h-[300px] lg:h-[450px] "
        style={{
          backgroundImage: "url(/Inquiry.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full w-full lg:w-[600px] mx-auto inset-0  backdrop-blur-lg flex items-center justify-center">
          <h2 className="   font-bold text-white  ">
            <FormattedMessage
              id={"Inquiry.inqry"}
              defaultMessage={"i n q u i r y"}
            />
          </h2>
        </div>
      </div>
      {/* { Form form INQUIRY section } */}
      <MaxWidth>
        <form onSubmit={handleSubmit}>
          <div className="w-full mx-auto lg:w-[600px] lg:mx-auto mb-10 ">
            <div className=" lg:gap-4 lg:grid lg:grid-cols-2 ">
              <div className="mt-20">
                <h5 className="font-bold ">
                  <FormattedMessage
                    id={"Inquiry.LastN"}
                    defaultMessage={"Last name"}
                  />
                </h5>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="p-2  lg:py-3 lg:px-2 w-full border mt-2 border-gray-400"
                  placeholder={intl.formatMessage({
                    id: "Inquiry.yamad",
                    defaultMessage: "Yamada",
                  })}
                />
              </div>
              <div className="mt-3 lg:mt-20">
                <h5 className="font-bold ">
                  <FormattedMessage
                    id={"Inquiry.GName"}
                    defaultMessage={"given name"}
                  />
                </h5>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="p-2  lg:py-3 lg:px-2 w-full border border-gray-400 mt-2"
                  placeholder={intl.formatMessage({
                    id: "Inquiry.tar",
                    defaultMessage: "Taro",
                  })}
                />
              </div>
            </div>
            <div className="lg:gap-4 lg:grid lg:grid-cols-2 ">
              <div className="mt-3 lg:mt-20">
                <h5 className="font-bold ">
                  <FormattedMessage
                    id={"Inquiry.companyNam"}
                    defaultMessage={"Company Name (Optional)"}
                  />
                </h5>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="p-2  lg:py-3 lg:px-2 w-full border mt-2 border-gray-400"
                  placeholder={intl.formatMessage({
                    id: "Inquiry.xxx",
                    defaultMessage: "XXX Co.,Ltd.",
                  })}
                />
              </div>
              <div className="mt-3 lg:mt-20">
                <h5 className="font-bold">
                  <FormattedMessage
                    id={"Inquiry.dpt"}
                    defaultMessage={" Department, position, etc. (optional)"}
                  />
                </h5>
                <input
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="p-2  lg:py-3 lg:px-2 w-full border mt-2 border-gray-400"
                  placeholder={intl.formatMessage({
                    id: "Inquiry.tro",
                    defaultMessage: "Taro",
                  })}
                />
              </div>
            </div>
            <div>
              {/* { email address} */}
              <div className="mt-3 lg:mt-17">
                <div>
                  <h5 className="font-bold">
                    <FormattedMessage
                      id={"Inquiry.emal"}
                      defaultMessage={"email address"}
                    />
                  </h5>
                </div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full lg:w-full py-2 border mt-2 border-gray-400"
                />
              </div>
              {/* { Inquriy contant } */}
              <div className="mt-14 lg:mt-13">
                <div>
                  <h5 className="font-bold">
                    <FormattedMessage
                      id={"Inquiry.cont"}
                      defaultMessage={"Inquiry Content"}
                    />
                  </h5>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={intl.formatMessage({
                    id: "Inquiry.enter",
                    defaultMessage: "Enter here",
                  })}
                  className="w-full h-[300px] px-5 py-2 border mt-2 border-gray-400"
                />
              </div>
            </div>
            {/*>>>> { Send inquiry button } <<<<<<*/}
            <div className="flex justify-center mt-3 lg:mt-10">
              <button
                type="submit"
                disabled={loading}
                className="relative  flex items-center gap-8  bg-white 
              
  overflow-hidden transition-all duration-700 ease-in-out group "
              >
                <Button icon={ArrowRight} animation>
                  {loading
                    ? intl.formatMessage({
                        id: "inquiry.send",
                        defaultMessage: "Sending...",
                      })
                    : intl.formatMessage({
                        id: "inquiry.sendIq",
                        defaultMessage: "Send Inquiry",
                      })}
                </Button>
              </button>
            </div>
          </div>
        </form>
      </MaxWidth>
    </div>
  );
};

export default Inquiry;
