import React from "react";
import PersonFlipBook from "./PersonFlipBook";
import "./BookStage.css";

function BookStage({ people, selectedId }) {
  const person = people.find((p) => p.id === selectedId) || null;

  return (
    <div className="book-container">
      <div className="profile-book">
        <div className="binder-rings">
          <div className="ring" />
          <div className="ring" />
          <div className="ring" />
          <div className="ring" />
        </div>

        <div className="book-mount-fade">
          {person ? (
            /* KUNCI UTAMA: HAPUS key={person.id} di sini! 
               Biarkan PersonFlipBook menangani perubahan data orang di dalamnya secara internal */
            <PersonFlipBook person={person} />
          ) : (
            <div className="book-cover">
              <div className="cover-inner">
                <div className="cover-stars">✨★✨</div>
                <h1 className="cover-title">
                  Our Private
                  <br />
                  Our Private
                  Profile Book
                </h1>
                <p className="cover-subtitle">♥ 平成レトロ・思い出のプロフ帳 ♥</p>
                <div className="cover-hint">◀ 左のメニューから名前を選んでね ♪</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookStage;