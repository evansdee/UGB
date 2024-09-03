import {} from "react";
import { Form } from "./SignupForm";
import Label from "../../ui/Label";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FlexItem from "../../ui/FlexItem";
import { useLocalUser } from "../../hooks/UserDetails";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const navigate = useNavigate()
  const {value,setValue} = useLocalUser()

  function onSubmit(data) {
    if(value && value.email === data.email){
      toast.success("Login Successfully")
      setValue({...value,isAuthenticated:true})
      navigate('/home')
    }
    else if(value.email !== data.email){
      toast.info("You are not signed in!")
    }
    else{
      toast.error("Check your network or credentials")

    }
    console.log(data);

  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label
          label="Your Email Address"
          id="email"
          error={errors?.email?.message}
        >
          {/* <br />
        <br /> */}
          <input
            placeholder="Email"
            {...register("email", {
              required: {
                message: "This field is required",
                value: true,
              },
              pattern: {
                value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
        </Label>
        <FlexItem just="center">
          <Button
            bg="#28282b"
            color="#fff"
            extra="padding:.5em 1em;border-radius:10px;margin-top:1.5em;"
          >
            Login
          </Button>
        </FlexItem>
      </Form>
      <FlexItem just="center">
        <div style={{ fontFamily: '"Effra"' }}>
          <FlexItem align="center" gap=".5">
            <span>Not a member?</span>
            <Button color="var(--color-blue-100)" to={"/signup"}>
              Sign up
            </Button>
          </FlexItem>
        </div>
      </FlexItem>
    </>
  );
}
