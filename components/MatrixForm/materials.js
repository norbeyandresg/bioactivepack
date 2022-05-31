const min_int = Number.MIN_SAFE_INTEGER;
const max_int = Number.MAX_SAFE_INTEGER;

export const rawMaterials = [
  {
    id: 1,
    name: "Chitosan",
    antimicAgent: "Natamycin",
    inhibit: "Listeria monocytogenes and Staphylococcus aureus",
    observations: [
      "93.61% and 99.99% reduction for 8 h against microorganisms.",

      "The surface color of cheese samples in the control group decreased significantly at 25 °C for 4 days, while samples wrapped in MO@CNPs nanofibers showed less rippling. Similarly, the sensory attributes of cheese samples were almost unaffected after MO@CNPs nanofibers were wrapped at 4 °C and 25 °C for 4 days. Therefore, MO@CNP nanofibers can not only prolong the shelf life of cheese, but also maintain its sensory quality .",

      "The total release rate reached 31.73% at 4C and 54.57% at 25C (it increased with the increase of temperature in 60 days of storage) MO@CNP was 19.61% and 35.19%. The electrospun nanofibers could delay the release of essential oil and extend the action time of MO@CNPS.",
    ],
    references:
      "Lin, L.; Gu, Y.; Cui, H. Moringa oil/chitosan nanoparticles embedded gelatin nanofibers for food packaging against Listeria monocytogenes and Staphylococcus aureus on cheese. Food Packag. Shelf Life 2019, 19, 86–93.",
    weight: 91.5,
    humidity: { low: 36.2, high: 40.2 },
    waterActivity: { low: 0.94, high: 0.99 },
    mnfs: { low: 49, high: 56 },
    ph: { low: 5.1, high: 5.4 },
    fat: { low: 29.3, high: 33.3 },
    fdm: { low: 25, high: 45 },
    protein: { low: 20.7, high: 26.7 },
    minerals: { low: 1.4, high: 1.99 },
  },
  {
    id: 2,
    name: "Chitosan / Whey Protein",
    antimicAgent: "Antimicrobial Properties",
    inhibit:
      "molds, yeasts, bacteria and coliforms. Specifically Pseudomonas Aeruginosa and some Penicillium",
    references:
      "Meira, S.M.M.; Zehetmeyer, G.; Scheibel, J.M.; Werner, J.O.; Brandelli, A. Starch-halloysite nanocomposites containing nisin: Characterization and inhibition of Listeria monocytogenes in soft cheese. LWT-Food Sci. Technol. 2016, 68, 226–234.",
    observations: [
      "Coatings based on hydroxypropylmethylcellulose, glycerol and nisin were effective against different strains, in conjunction with the effect of nanoclays to control the diffusion or improve the retention of antimicrobial agents by polymeric matrices.",

      "H3N2 and H6N6 were the most effective in microbial control. N2: 2 g/100 g N6: 6 g/100 g of nisin. H3: 3 g/100 g and H6: 6 g/100 g of nanotubes. In mechanical properties H3N2 is better than H6N6. A decrease in film strength and toughness was observed with increasing nisin concentration..",

      "The higher nanoclay content could delay the diffusion of nisin. Bionanocomposites containing 2 g/100 g nisin (H3N2 and H6N2) significantly inhibited L. monocytogenes after 4 days, sodium caseinate films containing nisin (1000 IU/cm 2 ) reduced harmless Listeria by 1.1 log CFU/g after one week of storage at 4 °C, cheeses packed in antimicrobial nanocomposites with 6 g/100 g nisin showed a significant decrease in L. monocytogenes population immediately after 1 day compared to cheeses packed in control film. ",

      "The color development in the films can also be attributed to the self-color of the incorporated HNT and nisin, as films with higher amounts of these components produced slightly darker films. ",

      "The addition of HNT increased the thermal stability of the films compared to the control (HNT has no weight loss at low temperature, the residual mass of the films increased as the HNT content increased). They observed a decrease in film strength and toughness with increasing concentration of nisin incorporated in the polymer. In the study, no voids or holes were observed in the nanocomposites with the antimicrobial agent (meaning that it is of good quality and does not show any signs of disbonding).  ",
    ],
    weight: 59.5,
    humidity: { low: 64.4, high: 68.4 },
    waterActivity: { low: 0.9, high: 0.99 },
    mnfs: { low: 59, high: 65 },
    ph: { low: 5.6, high: 6.5 },
    fat: { low: 16, high: 22 },
    fdm: { low: 25, high: 45 },
    protein: { low: 13.42, high: 17.42 },
    minerals: { low: 0.98, high: 2.98 },
  },
  {
    id: 9,
    name: "Starch/Haloysite/Nanocomposite Films",
    antimicAgent: "Nisin",
    inhibit: "Listeria inocua",
    references:
      "Salvucci, E., Rossi, M., Colombo, A., Pérez, G., Borneo, R., & Aguirre, A. (2019). Triticale flour films added with bacteriocin-like substance (BLIS) for active food packaging applications. Food Packaging and Shelf Life, 19, 193–199. https://doi.org/10.1016/J.FPSL.2018.05.007",
    observations: [
      "      The addition of cell-free supernatant (CFS) and semi-purified bacteriocin (E) increased the color difference (ΔE) and opacity values of triticale flour films.",

      "CFS activity is 1024 AU/mL and E is 512 AU/mL. ",

      "The solubility of CFS, E1 and E2 films decreases significantly with time.",

      "Storage time significantly increased the puncture resistance (PS) of control and activated films.",

      "Tested at room temperature",

      "The maximum production of bacteriocins occurs after 15 days of storage and then decreases (45 days). The release of more purified bacteriocins (E2) allows a better action on L. innocua . The addition of CFS to triticale films exerted a lower inhibitory effect. There was no significant change in film color but there was a significant change in opacity. Puncture resistance is a measure of toughness and is directly proportional to resistance to breakage or fracture. The mechanical properties and water vapor permeability of the gelatin films were not affected by the addition of bacteriocins.",
    ],
    weight: 75,
    humidity: { low: 40, high: 50 },
    waterActivity: { low: 0.9, high: 0.99 },
    mnfs: { low: 54, high: 63 },
    ph: { low: 5.1, high: 5.5 },
    fat: { low: 25.3, high: 29 },
    fdm: { low: min_int, high: max_int },
    protein: { low: min_int, high: max_int },
    minerals: { low: 0.5, high: 1.5 },
  },
  {
    id: 10,
    name: "Alginate",
    antimicAgent: "Oregano/Rosemary Essential Oils",
    inhibit: "E. coli, S. aureus, Candida albicans and  Aspergillus niger.",
    references:
      "Jafarzadeh S, Rhim JW, Alias AK, Ariffin F, Mahmud S. Application of antimicrobial active packaging film made of semolina flour, nano zinc oxide and nano-kaolin to maintain the quality of low-moisture mozzarella cheese during low-temperature storage. J Sci Food Agric. 2019 Apr;99(6):2716-2725. doi: 10.1002/jsfa.9439. Epub 2019 Jan 25. PMID: 30350410.",
    observations: [
      "From day 43 the antimicrobial activity started to decrease and the sensory properties were the same. Z5K0 (5:0 ratio ZnO and kaolin nanoclay, 200 mg:0mg) had the best antimicrobial effect, the concentration of ZnO has a direct effect on the antimicrobial activity, the higher the concentration the greater the effect, however, the best is Z3K2 (120 mg: 80 mg) as it manages to maintain the organoleptic properties for 72 days and the mechanical and antimicrobial properties are equally good.  ",
    ],
    weight: 85,
    humidity: { low: 50, high: 58 },
    waterActivity: { low: 0.94, high: 0.99 },
    mnfs: { low: 54, high: 63 },
    ph: { low: 4.7, high: 6.7 },
    fat: { low: 19.8, high: 21.8 },
    fdm: { low: 25, high: 45 },
    protein: { low: 19, high: 22 },
    minerals: { low: 3.6, high: 3.8 },
  },
  {
    id: 13,
    name: "Sodium Alginic Acid",
    antimicAgent: "Silver Montmorillonite Nanoparticles",
    inhibit:
      "molds, yeasts, bacteria and coliforms.  Specifically Pseudomonas aeruginosa and some Penicillium species.",
    references:
      "Nottagh, S., Hesari, J., Peighambardoust, S.H. et al. Effectiveness of edible coating based on chitosan and Natamycin on biological, physico-chemical and organoleptic attributes of Iranian ultra-filtrated cheese. Biologia 75, 605–611 (2020). https://nebulosa.icesi.edu.co:2144/10.2478/s11756-019-00378-w",
    observations: [
      " There was no growth of microorganisms until week 3, then this growth was inhibited and the amount of microorganisms present began to decrease during weeks 3 to 6. ",

      "This material is not effective against lactic acid bacteria.",

      "The physicochemical properties of the cheese remained constant when using the coating.",

      "Negligible differences between appearance, odor, flavor, texture and overall acceptability values of control and coated cheese samples at week 3 of storage.",

      "The presence of salt (helps to reduce water activity and prevent undesirable microorganisms) and chitosan helps to increase its shelf life by up to 1 month in the refrigerator at low storage temperature (4 ± 2 °C).",
    ],
    weight: 82,
    humidity: { low: 60.5, high: 64.5 },
    waterActivity: { low: min_int, high: max_int },
    mnfs: { low: 67, high: max_int },
    ph: { low: 3.5, high: 5.5 },
    fat: { low: 16.5, high: 18.5 },
    fdm: { low: 3.6, high: 5.6 },
    protein: { low: 11, high: 15 },
    minerals: { low: 1, high: 3 },
  },
  {
    id: 14,
    name: "Sodium Alginate",
    antimicAgent: "Potassium Sorbate",
    inhibit: "L. monocytogenes, S. aureus, S. enteritidis and E. coli.",
    references:
      "Wang, Q., Yu, H., Tian, B., Jiang, B., Xu, J., Li, D., . . . Liu, C. (2019). Novel edible coating with antioxidant and antimicrobial activities based on whey protein isolate nanofibrils and carvacrol and its application on fresh-cut cheese. Coatings, 9(9) doi:10.3390/COATINGS9090583.",
    observations: [
      "The presence of CA significantly reduced the moisture content values of the films. The results were consistent with previous research that adding essential oils (e.g., apricot kernel essential oil) to chitosan films has decreased the moisture content values.  ",

      "Cheddar cheese coated with Whey protein nanofibers-Carvacrol/glycine WPNFs-CA/Gly showed the lowest weight loss and the best ability to protect textural properties.",

      "WPNF-based films had better transparency than WPI-based films. WPNF-CA/Gly was the most effective. Samples stored at 4°C for 10 days.",

      "WPNF-based films had better transparency than WPI-based films ( p < 0.05). This was also due to the smooth and continuous surface of the WPNF-based films, while the rough surface of the WPI substrates increased the opacity.",
    ],
    weight: 37,
    humidity: { low: 36.2, high: 41 },
    waterActivity: { low: 0.93, high: 0.99 },
    mnfs: { low: min_int, high: max_int },
    ph: { low: 5.1, high: 5.5 },
    fat: { low: 28, high: 34 },
    fdm: { low: min_int, high: max_int },
    protein: { low: 20, high: 26 },
    minerals: { low: 1.4, high: 1.99 },
  },
  {
    id: 15,
    name: "Fish Gelatin Biodegradable Film",
    antimicAgent: "Lepidium Stavium Extract",
    inhibit: "effective against Salmonella sp, E. coli and L. monocytogenes",
    references:
      "Pieretti, G. G., Pinheiro, M. P., Scapim, M. R. da S., Mikcha, J. M. G., & Madrona, G. S. (2019). Effect of an edible alginate coating with essential oil to improve the quality of a Fresh cheese. Acta Scientiarum. Technology, 41(1), e36402. https://doi.org/10.4025/actascitechnol.v41i1.36402.",
    observations: [
      "Regarding mass loss, it can be observed that the coated samples presented lower values in relation to the uncoated sample (loss of 26% of the total weight). However, the presence of essential oils in the coating decreased the efficiency of the coating to reduce mass loss. ",

      "This material had greater proximity to the white color in the two periods analyzed.",

      " Regarding the initial storage, it was observed that the uncoated sample presented the lowest average, proving to be softer than the coated samples. However, on the last day of storage, the opposite occurred: the uncoated sample presented the highest average, being considered harder than the coated samples.",

      "The results of purchase intention indicated consumer acceptance of cheeses with edible toppings, especially when supplemented with oregano essential oil, which obtained the highest sensory averages, the highest acceptance rate and the highest percentage of consumers willing to buy the product.  Therefore, all samples can be considered viable for commercialization.",

      "Conclusion: the best packaging for microbial control is the one with rosemary. The best packaging according to sensory analysis is the one with oregano. Oregano is preferred. Excellent resistance to heat rupture, however it is not certain that it has excellent mechanical properties. ",
    ],
    weight: 85,
    humidity: { low: 64.4, high: 68.4 },
    waterActivity: { low: 0.9, high: 0.99 },
    mnfs: { low: 59, high: 65 },
    ph: { low: 6.0, high: 6.9 },
    fat: { low: 8.12, high: 12.12 },
    fdm: { low: 25, high: 45 },
    protein: { low: 13.42, high: 17.42 },
    minerals: { low: 0.98, high: 2.98 },
  },
  {
    id: 16,
    name: "Semolina Flour and Nanocomposites (zinc oxide)",
    antimicAgent: "Antimicrobial Properties",
    inhibit:
      "psychrotrophic microorganisms, mesophiles and lactic acid bacteria. ",
    references:
      "Prospero Di Pierro, Angela Sorrentino, Loredana Mariniello, Concetta Valeria L. Giosafatto, Raffaele Porta, Chitosan/whey protein film as active coating to extend Ricotta cheese shelf-life, LWT - Food Science and Technology, Volume 44, Issue 10, 2011, Pages 2324-2327, ISSN 0023-6438, https://doi.org/10.1016/j.lwt.2010.11.031.",
    observations: [
      "This study was done during 30 days of storage in which a slight increase in viable lactic acid bacteria was observed.",

      "Thanks to the antimicrobial activity of the material, the growth limit for mesophilic, psychrotrophic and LAB bacteria was never reached. Taking into account that the microbiological limit of acceptability, 7 log cfu/g 7 days for mesophilic bacteria and between days 7 and 14 for psychrotrophs, is 7 log cfu/g 7 days for mesophilic bacteria.",

      "They detected no differences in visual appearance, texture, taste and odor; on the contrary, their texture improved.",

      "The values of physicochemical properties such as pH remained constant during the first 21 days",

      "The study recommends the applicability of chitosan/whey protein to extend the shelf life of cheese.",
    ],
    weight: 80,
    humidity: { low: 68, high: 74 },
    waterActivity: { low: 0.9, high: 0.95 },
    mnfs: { low: 67, high: max_int },
    ph: { low: 5.6, high: 7.6 },
    fat: { low: 13.3, high: 19.8 },
    fdm: { low: 42, high: 61 },
    protein: { low: 10.4, high: 11.1 },
    minerals: { low: 1.6, high: 2.6 },
  },
  {
    id: 17,
    name: "Chitosano",
    antimicAgent: "Moringa Oil",
    inhibit: "Pseudomonas spp.",
    references:
      "D. Gammariello, A. Conte, G.G. Buonocore, M.A. Del Nobile, Bio-based nanocomposite coating to preserve quality of Fior di latte cheese, Journal of Dairy Science, Volume 94, Issue 11, 2011, Pages 5298-5304, ISSN 0022-0302, https://doi.org/10.3168/jds.2011-4161.",
    observations: [
      "The shelf life of Fior di latte cheese is normally 3 days, but the packaging was able to extend this to more than 5 days regardless of the concentration of nanosilver particles. The storage of this cheese lasted more than 7 days at room temperature. The concentrations of viable cells in all Ag-MMT coated samples were undetectable during the whole observation period. It indicates that the nanocomposite systems are more successful in controlling coliform growth than the other packaging systems tested. the Ag-MMT coated Fior di latte had better overall quality over the same period compared to the uncoated cheese, demonstrating the effectiveness of this system in preserving the product without compromising sensory attributes. ",

      "They do not mention anything about the appearance of the packaging.",

      "Samples with the lysozyme/Na 2 EDTA coating recorded a microbial concentration equal to 5.16 log cfu/g, while samples coated with Ag-MMT reached a microbial concentration of 4.48 to 3.26 log cfu/g, depending on the amount of Ag-MMT incorporated. The efficacy of lysozyme/Na 2 EDTA and MAP on Pseudomonas spp.",

      "A steady decline in overall quality could be observed during storage for all samples. The cheeses showed similar SAL values, being acceptable for approximately 5 to 6 days, except for the lysozyme-containing coated cheese which became unacceptable after less than 3 days.",
    ],
    weight: 58.5,
    humidity: { low: 50, high: 60 },
    waterActivity: { low: min_int, high: max_int },
    mnfs: { low: 70, high: 77 },
    ph: { low: 6.6, high: 6.7 },
    fat: { low: 19.6, high: 23.6 },
    fdm: { low: 45, high: max_int },
    protein: { low: 16.6, high: 20.6 },
    minerals: { low: 5.6, high: 6 },
  },
  {
    id: 26,
    name: "Triticale Flour with Bacteriocin-like substance",
    antimicAgent: "Antimicrobial Properties",
    inhibit: "Enterobacteriaceae and  Pseudomonas spp",
    references:
      "Marianna Mastromatteo, Amalia Conte, Michele Faccia, Matteo Alessandro Del Nobile, Angelo Vittorio Zambrini, Combined effect of active coating and modified atmosphere packaging on prolonging the shelf life of low-moisture Mozzarella cheese, Journal of Dairy Science, Volume 97, Issue 1, 2014, Pages 36-45, ISSN 0022-0302, https://doi.org/10.3168/jds.2013-6999.",
    observations: [
      "The results showed that the combination of active coating and MAP was able to improve the shelf life of low-moisture mozzarella cheese. Specifically, shelf life increased up to 160 days for samples stored at 4°C, and 40 and 11 days for those at 8 and 14°C, respectively. Faster quality degradation was observed for untreated air-packed samples. ",

      "The use of active coating-loaded compounds combined with MAP reduced physiological changes, oxidation reactions and microbial growth.",

      "Most likely, the edible coatings improved the aesthetic appearance and barrier properties against oxygen and physical stress. In addition, the use of coating-loaded active compounds combined with MAP reduced physiological changes, oxidation reactions and microbial growth.",

      "For low moisture mozzarella cheese stored at 4°C MAP1 = 155.45 ± 19.06 days vs Control = 57.78 ± 6.92 MAP2 = 102.05 ± 9.37 days vs Control = 58.40 ± 6.06 MAP3 = 166.36 ± 38.01 days vs Control = 59.62 ± 5.64 the shelf life of the product appeared to be highly dependent on sensory quality For low moisture mozzarella cheese stored at 8°C (Control = 8 days, the limiting factor for shelf life was the appearance of visible surface molds) MAP1 = 37.38 ± 1.48 days MAP2 = 40.35 ± 1.71 days MAP3 = 40.33 ± 1.18 days For low moisture mozzarella cheese stored at 14°C (Control = 1.16 ± 0.04 days) *MAP1 = 10.93 ± 0.50 days MAP2 = 11. 04 ± 1.36 days MAP3 = 11.53 ± 0.70 days                          ",
    ],
    weight: 59.5,
    humidity: { low: 47.21, high: 51.21 },
    waterActivity: { low: 0.9, high: 0.99 },
    mnfs: { low: 54, high: 63 },
    ph: { low: 5.25, high: 5.3 },
    fat: { low: 22.17, high: 27.17 },
    fdm: { low: 25, high: 45 },
    protein: { low: 20.3, high: 24.3 },
    minerals: { low: 3.6, high: 3.8 },
  },
  {
    id: 31,
    name: "Whey Protein Isolate Nanofibers",
    antimicAgent: "Carvacrol",
    inhibit:
      "E. coli, Salmonella typhimurium, Bacillus cereus and Micrococcus luteus.",
    references:
      "Ali Salem, Mourad Jridi, Ola Abdelhedi, Nahed Fakhfakh, Moncef Nasri, Frederic Debeaufort, Nacim Zouari, Development and characterization of fish gelatin-based biodegradable film enriched with Lepidium sativum extract as active packaging for cheese preservation, Heliyon, Volume 7, Issue 10, 2021, e08099, ISSN 2405-8440, https://doi.org/10.1016/j.heliyon.2021.e08099.",
    observations: [
      " The wrapped cheese samples showed lower mesophilic and psychrophilic bacteria counts than unwrapped cheese. Also, other authors reported that wrapping cheese with biodegradable edible films reduced bacterial growth and provided several advantages compared to conventional coatings.",

      "Cheese wrapped with gelatin film enriched with LSE3 at 20 μg/mL showed the lowest changes in color parameters, which allowed preserving the initial color of the cheese.",

      " The weight loss was related to the water permeability of the packaging films. Other authors reported similar results, where coatings based on natural polymers helped to reduce water loss, which ensured good cheese quality. ",

      "No significant differences were recorded in the mechanical parameters of the enriched films. In this particular study, but they do make the clarification that other studies say that the incorporation of the antimicrobial decreased the tensile strength. It was reported that the incorporation of some plant extracts increased the elongation at break values of gelatin-based films, which was explained by specific interactions between polypeptides and phenolic compounds. In fact, covalent crosslinks could be established which may lead to the formation of more cohesive and flexible matrices.            ",
    ],
    weight: 64,
    humidity: { low: 68, high: 74 },
    waterActivity: { low: 0.85, high: 0.95 },
    mnfs: { low: min_int, high: max_int },
    ph: { low: 5.59, high: 7.59 },
    fat: { low: 13.3, high: 19.8 },
    fdm: { low: 42, high: 61 },
    protein: { low: 10.4, high: 11.1 },
    minerals: { low: 1.5, high: 2.6 },
  },
];
