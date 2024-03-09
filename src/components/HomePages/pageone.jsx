import { useState, useEffect } from "react";
import { userAtom } from "../../stores/userAtom";
import { useAtom } from "jotai";

const PageOne = () => {
  const [user] = useAtom(userAtom);
  console.log(`Le user first name dans page home est`, user.first_name);
  const [formattedTime, setFormattedTime] = useState(
    new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFormattedTime(
        new Date().toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="h-screen gradient-background justify-center items-center text-2xl">
      <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">
  Bonjour {user.first_name ? user.first_name : "Invité"}
</h1>{" "}
        <p className="text-2xl">
          Nous sommes le {formattedDate} et il est {formattedTime}.
        </p>
      </div>
    </div>
  );
};

export default PageOne;
