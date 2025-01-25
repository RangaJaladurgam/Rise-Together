import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Util.css";

function XploreIPAQ1() {
  // Function to render the content for the right side

  const codefor15 = ` 
  public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the lower limit (l1): ");
        int l1 = sc.nextInt();

        System.out.print("Enter the upper limit (l2): ");
        int l2 = sc.nextInt();

        int[] nums = new int[5];
        System.out.println("Enter 5 numbers:");
        for (int i = 0; i < nums.length; i++) {
            nums[i] = sc.nextInt();
        }

        int s = 0;
        int c = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > l1 && nums[i] < l2) {
                s += nums[i];
                c++;
            }
        }

        int ans = (c > 0) ? s / c : 0; // Avoid \ndivision by zero
        System.out.println("Average of\n numbers between l1 and l2: " + ans);

        sc.close();
    }
} `;


  const codefor35 = `
import java.util.*;
import java.util.*;

class Player {
    private int playerId;
    private String playerName;
    private int runs;
    private String playerType;
    private String matchType;

    public Player(int playerId, String playerName, int runs, \nString playerType, String matchType) {
        this.playerId = playerId;
        this.playerName = playerName;
        this.runs = runs;
        this.playerType = playerType;
        this.matchType = matchType;
    }

    public void setPlayerId(int playerId) {
        this.playerId = playerId;
    }

    public int getPlayerId() {
        return this.playerId;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public String getPlayerName() {
        return this.playerName;
    }

    public void setRuns(int runs) {
        this.runs = runs;
    }

    public int getRuns() {
        return this.runs;
    }

    public void setPlayerType(String type) {
        this.playerType = type;
    }

    public String getPlayerType() {
        return playerType;
    }

    public void setMatchType(String matchType) {
        this.matchType = matchType;
    }

    public String getMatchType() {
        return this.matchType;
    }
}

public class soln35mrk {
    public static void main(String[] args) {
        List<Player> players = new ArrayList<>();
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter details for 5 players:");
        for (int i = 0; i < 5; i++) {
            System.out.print("Enter Player ID: ");
            int playerId = sc.nextInt();
            sc.nextLine(); // consume newline
            System.out.print("Enter Player Name: ");
            String playerName = sc.nextLine();
            System.out.print("Enter Runs: ");
            int runs = sc.nextInt();
            sc.nextLine(); // consume newline
            System.out.print("Enter Player Type: ");
            String playerType = sc.nextLine();
            System.out.print("Enter Match Type: ");
            String matchType = sc.nextLine();

            players.add(new Player(playerId, playerName, runs,\n playerType, matchType));
        }

        System.out.print("Enter player type to find minimum runs: ");
        String typeInput = sc.nextLine();
        int minRuns = fun1(players, typeInput);
        System.out.println("Minimum runs for player type \"" + typeInput + "\": "
                + (minRuns != -1 ? minRuns : "No players found"));

        System.out.print("Enter match type to sort players by ID: ");
        String matchTypeInput = sc.nextLine();
        Player[] sortedPlayers = fun2(players, matchTypeInput);

        if (sortedPlayers.length > 0) {
            System.out.println("Players sorted by ID (descending) for \nmatch type \"" + matchTypeInput + "\":");
            for (Player p : sortedPlayers) {
                System.out.println(
                        "Player ID: " + p.getPlayerId() + ", Name: " + \np.getPlayerName() + ", Runs: " + p.getRuns());
            }
        } else {
            System.out.println("No players found with match type \"" + \nmatchTypeInput + "\".");
        }

        sc.close();
    }

    // Method to find minimum runs by player type
    public static int fun1(List<Player> players, String type) {
        int minRuns = Integer.MAX_VALUE;
        boolean found = false;

        for (Player p : players) {
            if (p.getPlayerType().equalsIgnoreCase(type)) {
                minRuns = Math.min(minRuns, p.getRuns());
                found = true;
            }
        }

        return found ? minRuns : -1;
    }

    // Method to return players of a certain match type sorted by \nplayer ID in
    // descending order
    public static Player[] fun2(List<Player> players, String type) {
        List<Player> newList = new ArrayList<>();

        for (Player p : players) {
            if (p.getMatchType().equalsIgnoreCase(type)) {
                newList.add(p);
            }
        }

        Player[] newArr = newList.toArray(new Player[0]);
        if (newArr.length == 0)
            return newArr;

        Arrays.sort(newArr, (p1, p2) -> Integer.compare(p2.getPlayerId(),\n p1.getPlayerId()));
        return newArr;
    }
}  `;

  return (
    <div>
      <div className="content-container xplore-content">
        {/* Left Half */}
        <div className="content-half half1">
        <div className="render-content">
            <h3>Question 1 - 15 marks</h3>
            <div className="code-block">
              <SyntaxHighlighter language="java">
                {codefor15}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        {/* Right Half */}
        <div className="content-half half2 handson-code">
          <div className="render-content">
          <h3>Question 2 - 35 marks</h3> 
            <div className="code-block">
              <SyntaxHighlighter language="java">
                {codefor35}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default XploreIPAQ1;
