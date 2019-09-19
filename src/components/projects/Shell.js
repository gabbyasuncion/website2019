import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

function Shell() {
  return (
    <PageContainer>
      <Title>Shell</Title>
      <div>
        <h2>Introduction</h2>I ​made this project for a Computer Systems course
        as a way of understanding computer system calls, foreground and
        background processes, and handling file redirection. Though this is a
        project that many CS students have to do, I am proud of this project
        primarily because I built it from scratch and had to go through fair
        amount of problem solving to debug. Click here to jump to my main
        takeaways from the project. ​ I cannot share the exact code from this
        project due to collaboration policies but I will be sharing the logic of
        my project as well as the various issues I faced while developing it.
        <h2>Parsing Command-Line Input</h2>
        In order to parse input, I had to use the library function read() to
        read what was input into the "stdin" file descriptor into a buffer that
        I could modify. At every iteration of my REPL, I set every byte in my
        command-line buffer to null before reading in the input. I then used the
        stdio.h command strtok() to tokenize the input into fragment strings and
        store them in a new array. I had to check for various types of
        whitespace characters, from '\n' to ' ', and make sure that the shell
        still functioned even when the user input 10 tabs between arguments. ​
        After doing this, I check the fragment strings for redirection symbols
        and set them to null in my fragment strings array. I also store the
        files indicated before and after the redirection symbols as either the
        new output file or input file. I also check for multiple redirections
        and invalid use of redirection symbols.
        <h2>Redirecting</h2>After parsing, I check for builtin commands like
        "cd", "ln", and ​"rm". If none of these were used, I forked to create a
        child process that called the given command. Right after forking, I
        redirect files if necessary, which involves closing stdin or stdout and
        opening other files to reassign file descriptors for use when calling
        execv(). In my first implementation, the shell did not handle multiple
        processes so the shell would wait() until this foreground child process
        finished before moving onto the next iteration of the REPL.
        <h2>Reaping</h2>
        To handle multiple processes, I used waitpid() instead, depending on if
        the forked process was foreground or background. To send a process to
        the background, I had to check the command line for '&' and 'bg' and
        made sure that the shell did not wait for the process to finish before
        moving on. This comes into play when reaping background processes as
        well. While the shell still has child processes running in the
        background, the process should not respond to signals like Ctrl-C but
        can be stopped and continued.
        <h2>Debugging</h2>
        Multiple redirections: Though I thought this functionality was simple,
        handling input and output redirection was relatively complicated. The
        main reason for complications was due to the tokenizing of the
        command-line input. When checking for redirections, I immediately store
        the argument following the redirection symbol. However, the shell should
        also handle file redirection after storing the first redirection symbol
        and its file. See the code snippet below for improved version:
        <code></code>
        <h2>Conclusion</h2>
        At first, I absolutely hated this project. I was unbelievably frustrated
        at my lack of understanding, which was necessary for my success on the
        assignment. Even when running the test cases, the redirection bug caused
        2 out of 99 tests to fail. However, after working at it and reviewing
        the lecture slides over and over again, it started to come together. ​
        I'm very proud of this project because I truly learned as I wrote it.
        This reaffirmed to me that what isn't known can be learned. Furthermore,
        I created a functional shell that interacted with the computer system,
        something that seemed impossible a week prior. While it may be a normal
        project that every CS student does and as much as I hated it in the
        moment, this project really made me feel like I'd learned something and
        made me feel prepared to tackle more difficult projects in the future.
      </div>
    </PageContainer>
  );
}

const Title = styled.div`
  font-size: 24pt;
  float: left;
  text-align: left;
  font-family: "Fira Code", monospace;
`;

const PageContainer = styled.div`
  margin: 20px 75px 60px;
  text-align: left;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
`;

export default Shell;
