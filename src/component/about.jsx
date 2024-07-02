const About = () => {
  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
            Saya merupakan seorang mahasiswi di Universitas Klabat, dan saat ini mengambil 
            jurusan Informatika Fakultas Ilmu Komputer. 
            Saya memilih jurusan ini karena komunitas dan networking 
            bisa memberikan akses ke komunitas global profesional yang berbagi minat dan pengetahuan, 
            membuka peluang untuk kolaborasi dan pengembangan karir.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="public\bri.jpg"
                className="img-fluid"
                alt
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Machine Learning Engineer</h3>
              <p className="fst-italic">
                saya adalah seorang
                Machine Learning Engineer yang berkomitmen tinggi terhadap:
                <br/>
                - Membangun dan Mengoptimalkan Model Pembelajaran Mesin: Merancang, mengembangkan, dan menyempurnakan model pembelajaran mesin untuk memecahkan masalah tertentu.
                <br/>
                - Pengumpulan dan Pembersihan Data: Mengumpulkan, mengolah, dan membersihkan data agar siap digunakan dalam model pembelajaran mesin.
                <br/>
                - Eksperimen dan Evaluasi Model: Melakukan eksperimen untuk mengevaluasi kinerja model menggunakan metrik yang tepat dan melakukan penyesuaian berdasarkan hasil tersebut.
                <br/>
                - Implementasi Model dalam Produksi: Mengintegrasikan model pembelajaran mesin ke dalam sistem produksi yang dapat diakses dan digunakan oleh pengguna akhir.
                <br/>
                - Pemantauan dan Pemeliharaan Model: Memantau kinerja model setelah diimplementasikan dan melakukan pemeliharaan rutin untuk memastikan model tetap berfungsi dengan baik.
                <br/>
                - Kolaborasi dengan Tim Lain: Bekerja sama dengan tim data, pengembang perangkat lunak, dan pemangku kepentingan bisnis untuk memahami kebutuhan dan memastikan solusi yang dibangun tepat sasaran.
                <br/>
                - Riset dan Pengembangan: Melakukan riset untuk tetap up-to-date dengan teknologi terbaru dalam bidang pembelajaran mesin dan kecerdasan buatan.
                <br/>
                - Dokumentasi: Mendokumentasikan proses pengembangan model, eksperimen, dan hasil agar dapat direplikasi dan dipelajari oleh anggota tim lainnya.                
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                  <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Born:</strong> <span>29 November 2004</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Website:</strong> <span>.....................</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Phone Number:</strong>{" "}
                      <span>0823******14</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>city:</strong> <span>Manado, Sulawesi Utara, ndoensia</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Age:</strong> <span>19</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Sarjana:</strong>{" "}
                      <span>Sarjana Komputer (s1)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>email:</strong> <span>s2221****student@unklab.ac.id</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Freelance:</strong> <span>tidak tersedia</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                {/* bisa di berikan Text tambahan */}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </div>
  );
};
export default About;
