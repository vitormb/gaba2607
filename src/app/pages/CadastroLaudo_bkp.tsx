import { Formik, Form, Field } from 'formik';

export function CadastroDeLaudo() {
    return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary">
        <h3 className="card-title text-white fs-2x bg-primary"><i className="bi bi-person-fill-add text-white fs-2x me-2"></i>Novo laudo</h3>
        <div className="card-toolbar">
          <button type="button" className="btn btn-sm btn-light">
            Retornar
          </button>
        </div>
      </div>
      <div className="card-body">

        {/* Copy HTML */}    
            <div className="row row-cols-auto">
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                <input className="form-check-input input-metodologia82" type="checkbox" name="id_demanda[]" value="20" />
                    <label className="form-check-label">
                      Agitação                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia82" type="checkbox" name="id_demanda[]" value="82" />
                    <label className="form-check-label">
                      Agressividade física                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia31" type="checkbox" name="id_demanda[]" value="31" />
                    <label className="form-check-label">
                      Agressividade verbal                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia32" type="checkbox" name="id_demanda[]" value="32" />
                    <label className="form-check-label">
                      Alteração de humor                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia53" type="checkbox" name="id_demanda[]" value="53"/>
                    <label className="form-check-label">
                      Alterações fonoarticulatórias                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia34" type="checkbox" name="id_demanda[]" value="34"/>
                    <label className="form-check-label">
                      Alucinação                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia72" type="checkbox" name="id_demanda[]" value="72"/>
                    <label className="form-check-label">
                      Ansiedade                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia33" type="checkbox" name="id_demanda[]" value="33"/>
                    <label className="form-check-label">
                      Apatia                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia1" type="checkbox" name="id_demanda[]" value="1"/>
                    <label className="form-check-label">
                      Atraso no desenvolvimento da linguagem                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia2" type="checkbox" name="id_demanda[]" value="2" />
                    <label className="form-check-label">
                      Atraso no desenvolvimento motor                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia3" type="checkbox" name="id_demanda[]" value="3"/>
                    <label className="form-check-label" aria-label="defaultCheck3">
                      Atraso nos marcos do desenvolvimento                             </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia50" type="checkbox" name="id_demanda[]" value="50"/>
                    <label className="form-check-label" aria-label="defaultCheck50">
                      Aumento da sensibilidade a estímulos                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia61" type="checkbox" name="id_demanda[]" value="61"/>
                    <label className="form-check-label" aria-label="defaultCheck61">
                      Autor de bullying                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia86" type="checkbox" name="id_demanda[]" value="86"/>
                    <label className="form-check-label" aria-label="defaultCheck86">
                      Baixa tolerância à frustração                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia80" type="checkbox" name="id_demanda[]" value="80"/>
                    <label className="form-check-label" aria-label="defaultCheck80">
                      Baixo desempenho escolar                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia40" type="checkbox" name="id_demanda[]" value="40"/>
                    <label className="form-check-label" aria-label="defaultCheck40">
                      Comportamento de acumulação                             </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia48" type="checkbox" name="id_demanda[]" value="48"/>
                    <label className="form-check-label" aria-label="defaultCheck48">
                      Comportamento de anorexia                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia49" type="checkbox" name="id_demanda[]" value="49"/>
                    <label className="form-check-label" aria-label="defaultCheck49">
                      Comportamento de bulimia                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia91" type="checkbox" name="id_demanda[]" value="91"/>
                    <label className="form-check-label" aria-label="defaultCheck91">
                      Comportamento de roubo                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia90" type="checkbox" name="id_demanda[]" value="90"/>
                    <label className="form-check-label" aria-label="defaultCheck90">
                      Comportamento delinquente                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia75" type="checkbox" name="id_demanda[]" value="75"/>
                    <label className="form-check-label" aria-label="defaultCheck75">
                      Comportamento desafiador                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia15" type="checkbox" name="id_demanda[]" value="15"/>
                    <label className="form-check-label" aria-label="defaultCheck15">
                      Comportamento disruptivo                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia27" type="checkbox" name="id_demanda[]" value="27"/>
                    <label className="form-check-label" aria-label="defaultCheck27">
                      Comportamento infantilizado                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia74" type="checkbox" name="id_demanda[]" value="74"/>
                    <label className="form-check-label" aria-label="defaultCheck74">
                      Comportamento opositor                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia17" type="checkbox" name="id_demanda[]" value="17"/>
                    <label className="form-check-label" aria-label="defaultCheck17">
                      Comportamento repetitivo                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia41" type="checkbox" name="id_demanda[]" value="41"/>
                    <label className="form-check-label" aria-label="defaultCheck41">
                      Comportamento sedutor                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia37" type="checkbox" name="id_demanda[]" value="37"/>
                    <label className="form-check-label" aria-label="defaultCheck37">
                      Compras excessivas                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia47" type="checkbox" name="id_demanda[]" value="47"/>
                    <label className="form-check-label" aria-label="defaultCheck47">
                      Compulsão alimentar                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia73" type="checkbox" name="id_demanda[]" value="73"/>
                    <label className="form-check-label" aria-label="defaultCheck73">
                      Crises de pânico                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia44" type="checkbox" name="id_demanda[]" value="44"/>
                    <label className="form-check-label" aria-label="defaultCheck44">
                      Culpabilização                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia35" type="checkbox" name="id_demanda[]" value="35"/>
                    <label className="form-check-label" aria-label="defaultCheck35">
                      Delírios                             </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia30" type="checkbox" name="id_demanda[]" value="30"/>
                    <label className="form-check-label" aria-label="defaultCheck30">
                      Dependência                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia71" type="checkbox" name="id_demanda[]" value="71"/>
                    <label className="form-check-label" aria-label="defaultCheck71">
                      Dependência na relação emocional                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia69" type="checkbox" name="id_demanda[]" value="69"/>
                    <label className="form-check-label" aria-label="defaultCheck69">
                      Depressão                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia4" type="checkbox" name="id_demanda[]" value="4"/>
                    <label className="form-check-label" aria-label="defaultCheck4">
                      Desatenção                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia94" type="checkbox" name="id_demanda[]" value="94"/>
                    <label className="form-check-label" aria-label="defaultCheck94">
                      Desinteresse escolar                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia93" type="checkbox" name="id_demanda[]" value="93"/>
                    <label className="form-check-label" aria-label="defaultCheck93">
                      Desobediência                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia21" type="checkbox" name="id_demanda[]" value="21"/>
                    <label className="form-check-label" aria-label="defaultCheck21">
                      Desorganização                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia78" type="checkbox" name="id_demanda[]" value="78"/>
                    <label className="form-check-label" aria-label="defaultCheck78">
                      Dificuldade de adaptação                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia84" type="checkbox" name="id_demanda[]" value="84"/>
                    <label className="form-check-label" aria-label="defaultCheck84">
                      Dificuldade de compreensão de texto                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia25" type="checkbox" name="id_demanda[]" value="25"/>
                    <label className="form-check-label" aria-label="defaultCheck25">
                      Dificuldade de controle inibitório                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia18" type="checkbox" name="id_demanda[]" value="18"/>
                    <label className="form-check-label" aria-label="defaultCheck18">
                      Dificuldade de interação social                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia89" type="checkbox" name="id_demanda[]" value="89"/>
                    <label className="form-check-label" aria-label="defaultCheck89">
                      Dificuldade na alfabetização                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia24" type="checkbox" name="id_demanda[]" value="24"/>
                    <label className="form-check-label" aria-label="defaultCheck24">
                      Dificuldade para seguir regras                             </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia23" type="checkbox" name="id_demanda[]" value="23"/>
                    <label className="form-check-label" aria-label="defaultCheck23">
                      Dificuldade para tomada de decisão                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia13" type="checkbox" name="id_demanda[]" value="13"/>
                    <label className="form-check-label" aria-label="defaultCheck13">
                      Dificuldades motoras                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia57" type="checkbox" name="id_demanda[]" value="57"/>
                    <label className="form-check-label" aria-label="defaultCheck57">
                      Dificuldades para acordar                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia56" type="checkbox" name="id_demanda[]" value="56"/>
                    <label className="form-check-label" aria-label="defaultCheck56">
                      Dificuldades para adormecer                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia51" type="checkbox" name="id_demanda[]" value="51"/>
                    <label className="form-check-label" aria-label="defaultCheck51">
                      Diminuída sensibilidade a estímulos                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia29" type="checkbox" name="id_demanda[]" value="29"/>
                    <label className="form-check-label" aria-label="defaultCheck29">
                      Disautonomia                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia19" type="checkbox" name="id_demanda[]" value="19"/>
                    <label className="form-check-label" aria-label="defaultCheck19">
                      Ecolalia                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia77" type="checkbox" name="id_demanda[]" value="77"/>
                    <label className="form-check-label" aria-label="defaultCheck77">
                      Enurese diurna                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia76" type="checkbox" name="id_demanda[]" value="76"/>
                    <label className="form-check-label" aria-label="defaultCheck76">
                      Enurese noturna                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia16" type="checkbox" name="id_demanda[]" value="16"/>
                    <label className="form-check-label" aria-label="defaultCheck16">
                      Estereotipias                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia28" type="checkbox" name="id_demanda[]" value="28"/>
                    <label className="form-check-label" aria-label="defaultCheck28">
                      Fala infantilizada                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia83" type="checkbox" name="id_demanda[]" value="83"/>
                    <label className="form-check-label" aria-label="defaultCheck83">
                      Fala sozinho                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia22" type="checkbox" name="id_demanda[]" value="22"/>
                    <label className="form-check-label" aria-label="defaultCheck22">
                      Falta de planejamento                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia85" type="checkbox" name="id_demanda[]" value="85"/>
                    <label className="form-check-label" aria-label="defaultCheck85">
                      Flapping                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia5" type="checkbox" name="id_demanda[]" value="5"/>
                    <label className="form-check-label" aria-label="defaultCheck5">
                      Hiperfoco                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia26" type="checkbox" name="id_demanda[]" value="26"/>
                    <label className="form-check-label" aria-label="defaultCheck26">
                      Impulsividade                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia92" type="checkbox" name="id_demanda[]" value="92"/>
                    <label className="form-check-label" aria-label="defaultCheck92">
                      Indisciplina                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia81" type="checkbox" name="id_demanda[]" value="81"/>
                    <label className="form-check-label" aria-label="defaultCheck81">
                      Inquietação                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia66" type="checkbox" name="id_demanda[]" value="66"/>
                    <label className="form-check-label" aria-label="defaultCheck66">
                      Insatisfação com a imagem corporal                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia59" type="checkbox" name="id_demanda[]" value="59"/>
                    <label className="form-check-label" aria-label="defaultCheck59">
                      Intercorrências no sono                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia36" type="checkbox" name="id_demanda[]" value="36"/>
                    <label className="form-check-label" aria-label="defaultCheck36">
                      Juízo crítico comprometido                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia52" type="checkbox" name="id_demanda[]" value="52"/>
                    <label className="form-check-label" aria-label="defaultCheck52">
                      Limitações motoras                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia65" type="checkbox" name="id_demanda[]" value="65"/>
                    <label className="form-check-label" aria-label="defaultCheck65">
                      Luto                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia87" type="checkbox" name="id_demanda[]" value="87"/>
                    <label className="form-check-label" aria-label="defaultCheck87">
                      Mania de limpeza                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia88" type="checkbox" name="id_demanda[]" value="88"/>
                    <label className="form-check-label" aria-label="defaultCheck88">
                      Mania de organização                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia55" type="checkbox" name="id_demanda[]" value="55"/>
                    <label className="form-check-label" aria-label="defaultCheck55">
                      Mutismo                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia6" type="checkbox" name="id_demanda[]" value="6"/>
                    <label className="form-check-label" aria-label="defaultCheck6">
                      Não sabe brincar                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia79" type="checkbox" name="id_demanda[]" value="79"/>
                    <label className="form-check-label" aria-label="defaultCheck79">
                      Pensamento acelerado                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia68" type="checkbox" name="id_demanda[]" value="68"/>
                    <label className="form-check-label" aria-label="defaultCheck68">
                      Perda capacidade visual                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia67" type="checkbox" name="id_demanda[]" value="67"/>
                    <label className="form-check-label" aria-label="defaultCheck67">
                      Perda da capacidade auditiva                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia10" type="checkbox" name="id_demanda[]" value="10"/>
                    <label className="form-check-label" aria-label="defaultCheck10">
                      Problemas de aprendizagem de escrita                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia8" type="checkbox" name="id_demanda[]" value="8"/>
                    <label className="form-check-label" aria-label="defaultCheck8">
                      Problemas de aprendizagem de leitura                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia9" type="checkbox" name="id_demanda[]" value="9"/>
                    <label className="form-check-label" aria-label="defaultCheck9">
                      Problemas de aprendizagem de matemática                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia7" type="checkbox" name="id_demanda[]" value="7"/>
                    <label className="form-check-label" aria-label="defaultCheck7">
                      Problemas de memória                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia14" type="checkbox" name="id_demanda[]" value="14"/>
                    <label className="form-check-label" aria-label="defaultCheck14">
                      Problemas de raciocínio                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia11" type="checkbox" name="id_demanda[]" value="11"/>
                    <label className="form-check-label" aria-label="defaultCheck11">
                      Problemas na compreensão da leitura                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia95" type="checkbox" name="id_demanda[]" value="95"/>
                    <label className="form-check-label" aria-label="defaultCheck95">
                      Procrastinação                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia46" type="checkbox" name="id_demanda[]" value="46"/>
                    <label className="form-check-label" aria-label="defaultCheck46">
                      Recusa alimentar                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia12" type="checkbox" name="id_demanda[]" value="12"/>
                    <label className="form-check-label" aria-label="defaultCheck12">
                      Repetência escolar                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia43" type="checkbox" name="id_demanda[]" value="43"/>
                    <label className="form-check-label" aria-label="defaultCheck43">
                      Rigidez de comportamento                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia42" type="checkbox" name="id_demanda[]" value="42"/>
                    <label className="form-check-label" aria-label="defaultCheck42">
                      Rigidez de pensamento                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia45" type="checkbox" name="id_demanda[]" value="45"/>
                    <label className="form-check-label" aria-label="defaultCheck45">
                      Seletividade alimentar                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia58" type="checkbox" name="id_demanda[]" value="58"/>
                    <label className="form-check-label" aria-label="defaultCheck58">
                      Sono improdutivo                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia70" type="checkbox" name="id_demanda[]" value="70"/>
                    <label className="form-check-label" aria-label="defaultCheck70">
                      Teimosia                             </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia38" type="checkbox" name="id_demanda[]" value="38"/>
                    <label className="form-check-label" aria-label="defaultCheck38">
                      Uso abusivo de álcool                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia39" type="checkbox" name="id_demanda[]" value="39"/>
                    <label className="form-check-label" aria-label="defaultCheck39">
                      Uso abusivo de drogas                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia62" type="checkbox" name="id_demanda[]" value="62"/>
                    <label className="form-check-label" aria-label="defaultCheck62">
                      Vítima de abuso sexual                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia63" type="checkbox" name="id_demanda[]" value="63"/>
                    <label className="form-check-label" aria-label="defaultCheck63">
                      Vítima de abuso verbal                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia64" type="checkbox" name="id_demanda[]" value="64"/>
                    <label className="form-check-label" aria-label="defaultCheck64">
                      Vítima de alienação parental                            </label>
                </div>
              </div>
              <div className="col-xl-3 mb-3 col-md-4 col-sm-6 col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input input-metodologia60" type="checkbox" name="id_demanda[]" value="60"/>
                    <label className="form-check-label" aria-label="defaultCheck60">
                      Vítima de bullyng                            </label>
                </div>
              </div>
            </div>    
      </div>
    </div>
  );
}
