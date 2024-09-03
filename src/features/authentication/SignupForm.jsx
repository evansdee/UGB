import styled from "styled-components";
import FlexItem from "../../ui/FlexItem";
import Label from "../../ui/Label";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocalUser } from "../../hooks/UserDetails";

export const Form = styled.form`
  font-family: "Effra";
  display: flex;
  /* align-items:center; */
  flex-direction: column;
  gap: 1em;
  padding: 0.5em 2em;

  label:nth-child(-n + 2) {
    font-weight: 500;
  }
  input {
    margin-top: 0.4em;
    padding: 0.6em;

    &[type="checkbox"] {
      accent-color: #28282b;
    }
  }
  #email {
    width: 100%;
    margin: 1em 0;

    input {
      width: 100%;
      margin: 1em 0;
    }
  }
`;

export default function SignupForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const navigate = useNavigate();
  const { errors } = formState;
  const { value, setValue } = useLocalUser();

  console.log(value);
  function handleSignup(data) {
    const { firstName, lastName, email } = data;
    console.log(data);
    setValue({
      firstName,
      lastName,
      email,
      isAuthenticated:true
    });
    toast.success("Succesful");
    navigate("/home");
    reset();
  }
  return (
    <>
    <Form onSubmit={handleSubmit(handleSignup)}>
      <FlexItem just="between" gap="1">
        <Label label="First name" error={errors?.firstName?.message}>
          <input
            placeholder="First name"
            {...register("firstName", {
              required: {
                message: "This field is required",
                value: true,
              },
            })}
          />
        </Label>
        <Label label="Last name" error={errors?.lastName?.message}>
          <input
            placeholder="Last name"
            {...register("lastName", {
              required: {
                message: "This field is required",
                value: true,
              },
            })}
          />
        </Label>
      </FlexItem>

      <Label
        label="Your Email Address"
        id="email"
        error={errors?.email?.message}
      >
        {/* <br /> */}
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
      <Label error={errors?.terms?.message}>
        <FlexItem align="center" gap=".5">
          <input
            type="checkbox"
            {...register("terms", {
              required: {
                message: "This field is required",
                value: true,
              },
            })}
          />
          <span>I agree to UGB Terms and Privacy Policy</span>
        </FlexItem>
      </Label>
      <Label error={errors?.test?.message}>
        <FlexItem align="center" gap=".5">
          <input
            type="checkbox"
            {...register("test", {
              required: {
                message: "This field is required",
                value: true,
              },
            })}
          />
          <span>
            Yes! I want to be the first to hear about UGB’s exclusive offers,
            news events and updates.
          </span>
        </FlexItem>
      </Label>
      <FlexItem just="center">
        <Button
          bg="#28282b"
          color="#fff"
          extra="padding:.5em 1em;border-radius:10px;margin-top:1.5em;"
        >
          Sign Up
        </Button>
      </FlexItem>
    </Form>
      <FlexItem just="center">
      <div style={{ fontFamily: '"Effra"' }}>
        <FlexItem align="center" gap=".5">
          <span>Already a member?</span>
          <Button color="var(--color-blue-100)" to={"/login"}>
            Login
          </Button>
        </FlexItem>
      </div>
    </FlexItem>
    </>

  );
}
