import React, { useEffect, useRef } from "react";
import styles from "./ContactsPage.module.css";

export default function ContactsPage() {
  const mapRef = useRef(null);

  useEffect(() => {
    const existingScript = document.getElementById("yandex-maps-script");

    const initMap = () => {
      if (!window.ymaps || !mapRef.current) return;

      window.ymaps.ready(async () => {
        if (mapRef.current.dataset.mapInitialized === "true") return;

        const address = "Тараз, Акмолда батыра басы 58";

        const map = new window.ymaps.Map(mapRef.current, {
          center: [42.874159, 71.368356],
          zoom: 17,
          controls: ["zoomControl", "fullscreenControl"],
        });

        // 🔥 функция создания метки (чтобы не дублировать код)
        const createPlacemark = (coords) =>
          new window.ymaps.Placemark(
            coords,
            {
              balloonContent: `
                <div>
                  <strong>Возвращаем к жизни технику, которая вас окружает!</strong><br />
                  ${address}
                </div>
              `,
              hintContent: address,
            },
            {
              iconLayout: "default#image",
              iconImageHref:
                "https://cdn-icons-png.flaticon.com/512/684/684908.png",
              iconImageSize: [40, 40],
              iconImageOffset: [-20, -40],
            }
          );

        try {
          const result = await window.ymaps.geocode(address);
          const firstGeoObject = result.geoObjects.get(0);

          if (firstGeoObject) {
            const coords = firstGeoObject.geometry.getCoordinates();

            map.setCenter(coords, 17);

            const placemark = createPlacemark(coords);
            map.geoObjects.add(placemark);
          } else {
            const fallbackCoords = [42.874159, 71.368356];

            const placemark = createPlacemark(fallbackCoords);
            map.geoObjects.add(placemark);
            map.setCenter(fallbackCoords, 17);
          }
        } catch (error) {
          const fallbackCoords = [42.874159, 71.368356];

          const placemark = createPlacemark(fallbackCoords);
          map.geoObjects.add(placemark);
          map.setCenter(fallbackCoords, 17);
        }

        map.behaviors.enable("scrollZoom");

        mapRef.current.dataset.mapInitialized = "true";
      });
    };

    if (existingScript) {
      initMap();
      return;
    }

    const script = document.createElement("script");
    script.id = "yandex-maps-script";
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    script.async = true;
    script.onload = initMap;

    document.body.appendChild(script);
  }, []);

  return (
    <section className={styles.contactsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши контакты</h2>

        <div className={styles.content}>
          <div className={styles.mapWrapper}>
            <div ref={mapRef} className={styles.map}></div>
          </div>

          <div className={styles.infoPanel}>
            <div className={styles.infoBlock}>
              <p className={styles.label}>Адрес сервиса:</p>
              <h3 className={styles.mainText}>
                Тараз,
                <br />
                Акмолда батыра басы 58
              </h3>
            </div>

            <div className={styles.separator}></div>

            <div className={styles.infoBlock}>
              <p className={styles.label}>Номер телефона:</p>

              <a className={styles.phone} href="tel:+77713459259">
                +7 771 345 92 59
              </a>

              <a className={styles.phone} href="tel:+77051305393">
                +7 705 130 53 93
              </a>

              <div className={styles.callLinks}>
                <a href="tel:+77713459259" className={styles.callLink}>
                  Позвонить нам
                </a>
              </div>
            </div>

            <div className={styles.separator}></div>

            <div className={styles.infoBlock}>
              <p className={styles.label}>График работы:</p>
              <h3 className={styles.mainText}>
                Будни 9:00 до 23:00
                <br />
                Выходные и праздники
                <br />с 10:00 до 22:00
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}