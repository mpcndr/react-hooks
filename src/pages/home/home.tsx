import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Profile } from "../../components";
import { Button, Grid, TextField } from "@mui/material";
import { getProfile } from "../../services";
import App from "../../components/application/app";
import Counter from "../../components/contents/counter";

type User = {
  name: string;
  age: number;
  count: number;
};

export const Home: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [profile, setProfile] = useState<User>();

  const handleChangeName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      console.log("handleChangeName Callback function");
      setName(event.target.value);
    },
    []
  );

  // const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
  //   console.log("handleChangeName Arrow Function");
  //   setName(event.target.value);
  // };

  const handleClick = async () => {
    console.log("handleClick");
    try {
      let response = await getProfile(name);
      if (response) {
        setProfile(response);
        console.log(response);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const hiddenProfile = useMemo(() => {
    // console.log("useMemo");
    return profile ? <Profile name={profile?.name} age={profile?.age} /> : null;
  }, [profile]);

  useEffect(() => {
    console.log("check handleChangeName");
  }, [handleChangeName]);

  useEffect(() => {
    console.log("check hiddenProfile");
  }, [hiddenProfile]);

  return (
    <div>
      <h1>Welcome to My Home</h1>
      <Grid container mb={2}>
        <TextField
          id="outlined-basic"
          label="Search your name"
          variant="outlined"
          value={name}
          onChange={handleChangeName}
        />
      </Grid>

      <Button variant="contained" onClick={handleClick}>
        Search
      </Button>
      {hiddenProfile}
      <App />
      <Counter />
    </div>
  );
};
