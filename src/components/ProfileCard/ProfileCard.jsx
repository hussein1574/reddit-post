import "./ProfileCard.scss";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-card__info">
        <img
          src="https://www.redditstatic.com/shreddit/assets/snoovatar-snoo.png"
          alt="Profile icon"
          className="profile-card__picture"
        />
        <h2>
          <a className="link-heading" href="#">
            Turbostrider27
          </a>
        </h2>
        <div className="profile-card__birth-info">
          <span className="profile-card__userid">u/Turbostrider27</span>
          <span className="profile-card__birthday">
            <svg
              rpl=""
              fill="currentColor"
              height="16"
              icon-name="cake-outline"
              viewBox="0 0 20 20"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m19.426 8.687-8.3-4.73A5.1 5.1 0 0 0 7.746.948c-.84 0-3.587 1.758-3.587 4.125 0 .112.023.218.032.328l-3.816 3.4A1.1 1.1 0 0 0 0 9.623v8.214a1.153 1.153 0 0 0 1.175 1.125L18.819 19c.318 0 .623-.124.85-.347a1.092 1.092 0 0 0 .331-.778V9.652a1.117 1.117 0 0 0-.574-.965ZM7.7 2.195c.387.076 2.382 1.308 2.382 2.878a2.34 2.34 0 1 1-4.675 0C5.409 3.5 7.4 2.271 7.7 2.195ZM18.75 14.75H4.451V16h14.3v1.75l-17.5-.037V11.25h17.5l-.001 3.5Zm0-4.75H1.25v-.3l3.325-2.967a3.555 3.555 0 0 0 6.717-1.24L18.75 9.74V10Z"></path>
            </svg>
            Dec 18, 2015
          </span>
        </div>
      </div>
      <div className="stats-grid">
        <span className="stats-grid--number">11,852,868</span>
        <span className="stats-grid--number">465,698</span>
        <span className="stats-grid--type">Post Karma</span>
        <span className="stats-grid--type">Comment Karma</span>
      </div>
      <a className="profile-card__what-is-karma" href="#">
        What is karma?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="profile-card__icon"
        >
          <path d="M15.75 13H17v3.375A2.63 2.63 0 0 1 14.375 19H3.625A2.63 2.63 0 0 1 1 16.375V5.625A2.629 2.629 0 0 1 3.625 3H7v1.25H3.625A1.377 1.377 0 0 0 2.25 5.625v10.75a1.377 1.377 0 0 0 1.375 1.375h10.75a1.377 1.377 0 0 0 1.375-1.375V13Zm2.625-12h-5v1.25h3.491l-8.433 8.433.884.884 8.433-8.433v3.491H19v-5A.625.625 0 0 0 18.375 1Z"></path>
        </svg>
      </a>
      <div className="profile-card__buttons">
        <a href="#" className="profile-card__btn profile-card__btn--blue">
          <svg
            rpl=""
            aria-hidden="true"
            fill="currentColor"
            height="16"
            icon-name="join-outline"
            viewBox="0 0 20 20"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.625 9.375H14v1.25h-3.375V14h-1.25v-3.375H6v-1.25h3.375V6h1.25v3.375ZM20 10A10 10 0 1 1 10 0a10.011 10.011 0 0 1 10 10Zm-1.25 0A8.75 8.75 0 1 0 10 18.75 8.76 8.76 0 0 0 18.75 10Z"></path>
          </svg>
          Follow
        </a>
        <a href="#" className="profile-card__btn profile-card__btn--grey">
          <svg
            rpl=""
            aria-hidden="true"
            fill="currentColor"
            height="16"
            icon-name="chat-outline"
            viewBox="0 0 20 20"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.61 19.872a10.013 10.013 0 0 0 6.51-4.035A9.999 9.999 0 0 0 12.275.264c-1.28-.3-2.606-.345-3.903-.132a10.05 10.05 0 0 0-8.25 8.311 9.877 9.877 0 0 0 1.202 6.491l-1.24 4.078a.727.727 0 0 0 .178.721.72.72 0 0 0 .72.19l4.17-1.193A9.87 9.87 0 0 0 9.998 20c.54 0 1.079-.043 1.612-.128ZM1.558 18.458l1.118-3.69-.145-.24A8.647 8.647 0 0 1 1.36 8.634a8.778 8.778 0 0 1 7.21-7.27 8.765 8.765 0 0 1 8.916 3.995 8.748 8.748 0 0 1-2.849 12.09 8.763 8.763 0 0 1-3.22 1.188 8.68 8.68 0 0 1-5.862-1.118l-.232-.138-3.764 1.076ZM6.006 9a1.001 1.001 0 0 0-.708 1.707A1 1 0 1 0 6.006 9Zm4.002 0a1.001 1.001 0 0 0-.195 1.981 1 1 0 1 0 .195-1.98Zm4.003 0a1.001 1.001 0 1 0 0 2.003 1.001 1.001 0 0 0 0-2.003Z"></path>
          </svg>
          Chat
        </a>
      </div>
    </div>
  );
}
