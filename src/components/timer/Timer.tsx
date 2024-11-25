import React, { useEffect, useState, useRef, useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Context } from "../../contexts/timers";
import * as Selection from "../../contexts/selection";

const formatTime = (seconds: number) => {
  const getMinutes = `0${Math.floor(seconds / 60)}`.slice(-2);
  const getSeconds = `0${seconds % 60}`.slice(-2);
  return `${getMinutes}:${getSeconds}`;
};

type ComponentProps = {
  time: number;
  ringTone?: boolean;
  teaId?: number;
};

const Timer = ({ time, ringTone, teaId }: ComponentProps) => {
  const [seconds, setSeconds] = useState(time);
  const { setInfused, teaMinTime, setMinTimer, selection } =
    Selection.useContext();
  const interval = useRef(null);

  const { running = false, reset } = useContext(Context);

  useEffect(() => {
    setSeconds(time);
  }, [time]);

  useEffect(() => {
    if (reset > 0) {
      setSeconds(time);
    }
  }, [reset]);

  useEffect(() => {
    if (seconds && running) {
      interval.current = setInterval(() => {
        setSeconds((seconds: number) => seconds - 1);
      }, 1000);
    }
    return () => clearInterval(interval.current);
  }, [seconds, running]);

  useEffect(() => {
    if (seconds <= 0) {
      setInfused(teaId);
    }
  }, [seconds]);

  useEffect(() => {
    if (teaMinTime.id == teaId) {
      setMinTimer(seconds);
    }
  }, [teaMinTime.id]);

  return <Text style={styles.timer}>{formatTime(seconds)}</Text>;
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 24
  }
});

export default Timer;
