import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	NavLink,
	Redirect
} from 'react-router-dom';

import Student from '../../Student';
import Test from '../../Test';
import './App.css';

import vkBotImg from './assets/vkBotImg.png';
import telegramBotImg from './assets/telegramBotImg.png';
import signOutIcon from './assets/signOutIcon.png';
import helpButtonIcon from './assets/helpButtonIcon.png';
import sidebarBannerAd from './assets/sidebarBannerAd.png';
import contentBannerTopAd from './assets/contentBannerTopAd.png';
import contentBannerBottomAd from './assets/contentBannerBottomAd.png';
import spbsut from './assets/spbsut.png';
import SideMenu from './NavSide';
import NavMain from './NavMain/NavMain';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="PageLayout StartPage">
					<header className="Header">
						<NavLink to="/" exact activeClassName="Link_selected">
							<img
								src="https://ege.sdamgia.ru/img/headers/logo.svg"
								className="Header-Logo"
								alt="Сдам ГИА"
							/>
						</NavLink>
						<img
							className="header_subj_logo"
							src="https://math.reshuct.by/img/headers/math.png"
							style={{
								float: 'right',
								height: '100px',
								margin: '5px'
							}}
							alt="Математика"
						/>
						<div className="header-title">
							<a
								className="header-link"
								target="_blank"
								rel="noopener noreferrer"
								href="https://sdamgia.ru"
							>
								СДАМ ГИА
							</a>
							:{' '}
							<NavLink
								to="/"
								exact
								className="header-link"
								activeClassName="header-link_selected Link_selected"
							>
								РЕШУ ЕГЭ
							</NavLink>
						</div>
						<div className="header_site_info">
							Образовательный портал для подготовки к экзаменам
						</div>
						<div className="header_subj_name">
							Математика профильного уровня
						</div>
						<div style={{ clear: 'both' }}></div>
					</header>

					<NavMain className="PageLayout-Nav PageLayout-Nav_desktop" />
					<div className="Nav PageLayout-Nav PageLayout-Nav_mobile">
						≡ математика
					</div>

					<div className="SidebarBtns">
						сайты - меню - вход - новости
					</div>

					<div className="Sidebar PageLayout-Sidebar">
						<div className="sdamgia_btns">
							<a href="https://sdamgia.ru">СДАМ ГИА</a>
							<a href="https://ege.sdamgia.ru">РЕШУ ЕГЭ</a>
							<a href="https://oge.sdamgia.ru">РЕШУ ОГЭ</a>
							<a href="https://vpr.sdamgia.ru">РЕШУ ВПР</a>
							<a href="https://ct.sdamgia.ru">РЕШУ ЦТ</a>
						</div>
						<SideMenu />
						<form
							className="search Sidebar-Search"
							action="/problem"
							method="POST"
						>
							<label
								className="search__label"
								title="Для поиска нажмите клавишу Enter"
							>
								<input
									className="Input search-input"
									type="text"
									name="id"
									placeholder="№/текст задания"
								/>
								<div className="search-icon search__search-icon">
									<svg
										className="search-icon__svg"
										version="1.1"
										viewBox="0 0 27.9 50"
										x="0px"
										y="0px"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											className="search-icon__lens"
											cx="10.9"
											cy="24.1"
											r="9.4"
										></circle>
										<rect
											className="search-icon__handle"
											width="3"
											height="14.5"
											x="20"
											y="27.6"
											transform="matrix(0.7071 -0.7071 0.7071 0.7071 -18.3066 25.467)"
										></rect>
									</svg>
								</div>
							</label>
						</form>
						<div className="login" width="100%">
							<form method="post">
								<input name="la" type="hidden" value="logout" />
								<a href="/profile">
									<b>Константин</b>
								</a>
								&nbsp;
								<a
									href="/signout"
									style={{ borderBottom: 'none' }}
								>
									<img
										src={signOutIcon}
										style={{ verticalAlign: 'middle' }}
										alt="Выход"
									/>
								</a>
							</form>
							<div className="ChatButton">Чат</div>
							<a
								className="news news_urgent"
								href="https://ege.sdamgia.ru/game.htm"
								target="_blank"
								rel="noopener noreferrer"
							>
								Играть <u>в ЕГЭ-игрушку</u>
							</a>
							<a
								className="news news_urgent"
								href="https://play.google.com/store/apps/details?id=com.ilnur.handbook"
								target="_blank"
								rel="noopener noreferrer"
							>
								<u>Мобильный справочник</u>
							</a>
							<table
								align="center"
								style={{ marginBottom: '5px' }}
							>
								<tbody>
									<tr>
										<td align="left">
											<a
												href="https://vk.com/bot.sdamgia"
												target="_blank"
												rel="noopener noreferrer"
												title="Наш умный бот ВК"
											>
												<img src={vkBotImg} alt="" />
											</a>
										</td>
										<td width="5px"></td>
										<td align="right">
											<a
												href="tg://resolve?domain=reshuege_bot"
												target="_blank"
												rel="noopener noreferrer"
												title="Наш Телеграм-бот"
											>
												<img
													src={telegramBotImg}
													alt=""
												/>
											</a>
										</td>
									</tr>
								</tbody>
							</table>
							<a
								className="news news_hot"
								href="https://ege.sdamgia.ru/img/blockadblock_chrome.jpg"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="news__text">
									На сайте что-то не так? Отключите адблок
								</div>
							</a>
							<div className="login__title">
								<a
									href="https://sdamgia.ru/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Новости
								</a>
							</div>
							<a
								className="news"
								href="https://vk.com/wall-34649478_180027"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="news__date">15 сентября</div>
								<div className="news__text">
									Решения всех демоверсий ЕГЭ−2020
								</div>
							</a>
							<a
								className="news"
								href="https://vk.com/mgumsch"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="news__date">15 августа</div>
								<div className="news__text">
									Подготовка к ЕГЭ и ОГЭ с нуля до 100 баллов
									на годовом курсе УМСКУЛ
								</div>
							</a>
							<a
								className="news"
								href="https://vk.com/wall-34649478_177050"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="news__date">20 июня</div>
								<div className="news__text">
									Сначала составители ЕГЭ свою ошибку
									признали, потом расхотели
								</div>
							</a>
							<a
								className="news"
								href="https://vk.com/wall-34649478_175961"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="news__date">14 июня</div>
								<div className="news__text">
									ЕГЭ ещё не начался, а выгнать уже смогли
								</div>
							</a>
							<a
								className="news"
								href="https://vk.com/wall-34649478_175325"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="news__date">12 июня</div>
								<div className="news__text">
									Комментарии Д. Гущина к геометрическим
									заданиям ЕГЭ основной волны
								</div>
							</a>
							<a
								className="news news_urgent"
								href="https://vk.com/wall-34649478_169793"
								target="_blank"
								rel="noopener noreferrer"
							>
								Новый сервис — <u>карточки</u>
							</a>
							<div className="login__title">ЧУЖОЕ НЕ БРАТЬ!</div>
							<a
								className="news"
								href="https://ege.sdamgia.ru/page/examer.ru"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="news__text">
									Экзамер из Таганрога
								</div>
							</a>
							<a
								className="news"
								href="https://ege.sdamgia.ru/page/thieves"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="news__text">
									Учитель Думбадзе из школы 162 Петербурга
								</div>
							</a>

							<a
								className="news"
								href="https://ege.sdamgia.ru/page/examer.ru"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="news__text">
									<span className="smallcapitals">
										ОПРОВЕРЖЕНИЕ СВЕДЕНИЙ ОБ EXAMER
										ИЗ ТАГАНРОГА
									</span>
								</div>
							</a>

							<div className="login__social-links">
								<a
									className="button_vk"
									href="https://vk.com/reshuege"
									target="_blank"
									rel="noopener noreferrer"
								>
									Наша группа
								</a>
								Мобильные приложения:
							</div>
							<a
								className="button-store ButtonStore_android"
								href="https://play.google.com/store/apps/details?id=com.reshuege"
								target="_blank"
								rel="noopener noreferrer"
								title="Андроиды"
							>
								{' '}
							</a>
							<a
								className="button-store ButtonStore_iOS"
								href="https://appsto.re/ru/TSavbb.i"
								target="_blank"
								rel="noopener noreferrer"
								title="Джобсы"
							>
								{' '}
							</a>
						</div>

						<img
							className="SidebarBannerAd Sidebar-BannerAd "
							src={sidebarBannerAd}
							alt="Реклама"
						/>
					</div>

					<main className="PageLayout-Content">
						<img
							className="BannerAd"
							src={contentBannerTopAd}
							alt="Реклама"
						/>

						<Switch>
							<Route path="/" component={Student} exact />
							<Route path="/test" component={Test} />
							<Redirect to="/" />
						</Switch>

						<img
							className="BannerAd PageLayout-BannerAd"
							src={contentBannerBottomAd}
							alt="Реклама"
						/>
					</main>

					<footer className="Footer PageLayout-Footer">
						<p style={{ float: 'left' }}>
							<a href="/about">О проекте</a> ·{' '}
							<a href="/staff">Редакция</a> ·{' '}
							<a href="/legal">Правовая информация</a>{' '}
						</p>
						<p align="right">© Гущин Д. Д., 2011—2019</p> <br />
						<center>
							<a
								href="http://priem.sut.ru/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={spbsut}
									alt="СПб ГУТ!"
									title="priem.sut.ru"
									width="160"
								/>
							</a>
						</center>
					</footer>
					<div
						className="HelpButton"
						style={{
							backgroundImage: `url(${helpButtonIcon})`
						}}
					></div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;