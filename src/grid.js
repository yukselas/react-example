import React from "react";

export default function Grid({source}) {
  return (
    <table cellspacing="1" cellpading="1" border="1">
        <tbody>
	    {source.map((row, index) => {
     return <tr>
		<td className={`${row.isBackgroundColorRed ? "red" : ""}`}>{row.name}</td>
		<td className={`${row.isBackgroundColorRed ? "red" : ""}`}>{row.mailReceivedDate}</td>
		<td className={`${row.isBackgroundColorRed ? "red" : ""}`}>{row.solutionSentDate}</td>
            </tr>;
            })}
        </tbody>
    </table>
  );
}
