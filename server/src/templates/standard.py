def getStandardTemplate(party, person):
    return f"""<div>
  <div id="header" style="background-color: #43d7b3; padding: 2rem 2rem 1rem;">
    <div style="max-width: 600px; margin: 0 auto; text-align: center;">
      <span
        style="
          color: #052033;
          font-size: 3rem;
          font-family: Georgia, 'Times New Roman', Times, serif;
        "
      >
        Secret Santa
      </span>
    </div>
  </div>
  <div id="content" style="background-color: #052033; padding: 3rem 2rem 8rem;">
    <div style="max-width: 600px; margin: 0 auto; text-align: center;">
      <p
        style="
          color: #ffffff;
          margin: 0 0 1rem;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          line-height: 1.75rem;
        "
      >
        {party.get("partyOwner")} has invited you to join this year's secret
        santa party, {party.get("partyName")}!
      </p>
      <p
        style="
          color: #ffffff;
          margin: 0 0 1rem;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          line-height: 1.75rem;
        "
      >
        The party will take place on {party.get("partyDate")} so don't leave
        shopping to the last minute.
      </p>
      <p
        style="
          color: #ffffff;
          margin: 0 0 1rem;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          line-height: 1.75rem;
        "
      >
        Lucky you! It seems this year you're buying for:
      </p>
      <div
        id="giftee"
        style="
          color: #ffffff;
          margin: 1rem auto 2rem;
          padding: 1rem 3rem;
          background-color: #f0a432;
          display: inline-block;
          border-radius: 10px;
          font-size: 1.5rem;
          font-family: Georgia, 'Times New Roman', Times, serif;
          border: 5px #edc765 solid;
        "
      >
        {person.get("giftee")}
      </div>
      <p
        style="
          color: #ffffff;
          margin: 0 0 1rem;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          line-height: 1.75rem;
        "
      >
        Good luck and remember a gift card is not a valid present.
      </p>
    </div>
  </div>
  <div id="footer" style="background-color: #00345c; padding: 3rem 2rem;">
    <div style="max-width: 600px; margin: 0 auto; text-align: center;">
      <p
        style="
          color: #ffffff;
          margin: 0 0 2rem;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          line-height: 1.75rem;
        "
      >
        Want to create your own secret santa party?
      </p>
      <p style="margin: 0 0 1rem;">
        <a
          href="https://santa.alexhomingwong.co.uk"
          target="_blank"
          style="
            color: #052033;
            background-color: #43d7b3;
            text-decoration: none;
            padding: 0.75rem 2rem;
            border-radius: 10px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
          "
        >
          Click here to start
        </a>
      </p>
      <p
        style="
          color: #ffffff;
          margin: 0 0 2rem;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          line-height: 1.75rem;
          font-style: italic;
          font-size: 0.8rem;
        "
      >
        (and invite your real friends)
      </p>
    </div>
  </div>
</div>
"""
