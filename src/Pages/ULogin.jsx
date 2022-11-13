import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Checkbox,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  import { useContext } from "react";
  import { useState } from "react";
  import { UAuthContext } from "../Context/UAuthContext";
  import React from "react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import { Link as ReachLink } from "@reach/router"
  
  export default function ULogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { loginUser, authState } = useContext(UAuthContext);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        // console.log('res:', res)
        .then((res) => {
          if (res.token) {
            loginUser(res.token);
            navigate("/addproducts");
          }
        })
        .catch((err) => {
          console.log("err:", err);
        });
    };
  
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Login
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <br />
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    disabled={loading}
                    type="submit"
                  >
                    Login
                  </Button>
                  <Stack pt={2}>
                    <Text align={"center"}>
                      Go To Admin Login! <Link href="http://localhost:3000/adminlogin"  color={"blue.400"}>Login</Link>
                    </Text>
                  </Stack>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  