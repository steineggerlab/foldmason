(() => {
    var t, e = {
        5106: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => r
            });
            const r = {
                APP_NAME: "FoldMason",
                APP_DESCRIPTION: "FoldMason offers fast and sensitive multiple protein structure alignments",
                CITATION: 'Gilchrist CLM, Mirdita M, Steinegger M. <a href="https://www.biorxiv.org/content/10.1101/2024.08.01.606130v3" target="_blank" rel="noopener">Multiple Protein Structure Alignment at Scale with FoldMason</a>. bioRxiv, 2024.',
                NAV_URL_COUNT: "2",
                NAV_TITLE_1: "GitHub",
                NAV_URL_1: "https://foldmason.foldseek.com",
                NAV_TITLE_2: "Steinegger Lab",
                NAV_URL_2: "https://steineggerlab.com/",
                QUERIES_HELP: "Enter a protein structure in PDB format or upload a PDB file.",
                UPLOAD_LABEL: "Upload PDB",
                CURL_INTRO: " Use this command to get a submit a file in PDB format to the Foldseek search server. Replace the ‘PATH_TO_FILE’ string with the path to the file.",
                MODE_HELP: "<strong>3Di/AA:</strong> fast prefilter using the 3Di alphabet and alignment using the 3Di alphabet+BLOSUM62 based Smith-Waterman-Gotoh (local alignment)<br>\n<strong>TM-align:</strong> fast prefilter using the 3Di alphabet and alignment using TM-align (global-alignment)",
                MODE_COUNT: "2",
                MODE_DEFAULT_KEY: "3diaa",
                MODE_KEY_1: "3diaa",
                MODE_TITLE_1: "3Di/AA",
                MODE_KEY_2: "tmalign",
                MODE_TITLE_2: "TM-align",
                QUERY_DEFAULT: "ATOM    866  N   PHE A 111      11.187 -12.768  -6.000\nATOM    867  CA  PHE A 111      11.895 -11.516  -5.804\nATOM    868  C   PHE A 111      13.203 -11.457  -6.592\nATOM    870  CB  PHE A 111      12.169 -11.360  -4.310\nATOM    877  N   GLY A 112      13.543 -10.277  -7.094\nATOM    878  CA  GLY A 112      14.800 -10.107  -7.788\nATOM    879  C   GLY A 112      14.816  -9.982  -9.286\nATOM    881  N   TYR A 113      13.670 -10.112  -9.938\nATOM    882  CA  TYR A 113      13.648 -10.024 -11.397\nATOM    883  C   TYR A 113      12.764  -8.904 -11.929\nATOM    885  CB  TYR A 113      13.182 -11.355 -11.997\nATOM    893  N   CYS A 114      13.052  -8.468 -13.148\nATOM    894  CA  CYS A 114      12.288  -7.406 -13.778\nATOM    895  C   CYS A 114      10.881  -7.902 -14.054\nATOM    897  CB  CYS A 114      12.938  -6.973 -15.096\nATOM    899  N   GLU A 115       9.884  -7.083 -13.740\nATOM    900  CA  GLU A 115       8.508  -7.493 -13.963\nATOM    901  C   GLU A 115       8.078  -7.419 -15.428\nATOM    903  CB  GLU A 115       7.564  -6.649 -13.087\nATOM    908  N   SER A 116       8.751  -6.604 -16.236\nATOM    909  CA  SER A 116       8.399  -6.475 -17.651\nATOM    910  C   SER A 116       9.022  -7.604 -18.460\nATOM    912  CB  SER A 116       8.874  -5.128 -18.198\nATOM    914  N   CYS A 117      10.338  -7.721 -18.376\nATOM    915  CA  CYS A 117      11.043  -8.788 -19.061\nATOM    916  C   CYS A 117      11.545  -9.657 -17.913\nATOM    918  CB  CYS A 117      12.180  -8.202 -19.896\nATOM    920  N   GLY A 118      11.749 -10.943 -18.129\nATOM    921  CA  GLY A 118      12.164 -11.781 -17.008\nATOM    922  C   GLY A 118      13.517 -11.520 -16.366\nATOM    924  N   VAL A 119      14.307 -10.654 -16.991\nATOM    925  CA  VAL A 119      15.653 -10.305 -16.546\nATOM    926  C   VAL A 119      15.839 -10.128 -15.043\nATOM    928  CB  VAL A 119      16.116  -9.004 -17.259\nATOM    931  N   GLU A 120      17.018 -10.498 -14.557\nATOM    932  CA  GLU A 120      17.318 -10.353 -13.149\nATOM    933  C   GLU A 120      17.758  -8.921 -12.929\nATOM    935  CB  GLU A 120      18.457 -11.282 -12.739\nATOM    940  N   ILE A 121      17.328  -8.325 -11.826\nATOM    941  CA  ILE A 121      17.713  -6.960 -11.477\nATOM    942  C   ILE A 121      19.000  -7.099 -10.668\nATOM    944  CB  ILE A 121      16.621  -6.291 -10.625\nATOM    948  N   GLY A 122      19.945  -6.204 -10.856\nATOM    949  CA  GLY A 122      21.175  -6.377 -10.114\nATOM    950  C   GLY A 122      21.099  -6.565  -8.605\nATOM    952  N   ILE A 123      22.051  -7.298  -8.038\nATOM    953  CA  ILE A 123      22.055  -7.474  -6.607\nATOM    954  C   ILE A 123      22.389  -6.135  -5.992\nATOM    956  CB  ILE A 123      23.078  -8.512  -6.173\nATOM    960  N   ARG A 124      23.412  -5.481  -6.521\nATOM    961  CA  ARG A 124      23.804  -4.174  -5.993\nATOM    962  C   ARG A 124      22.719  -3.163  -6.291\nATOM    964  CB  ARG A 124      25.110  -3.680  -6.625\nATOM    971  N   ARG A 125      21.969  -3.378  -7.364\nATOM    972  CA  ARG A 125      20.903  -2.436  -7.674\nATOM    973  C   ARG A 125      19.754  -2.611  -6.682\nATOM    975  CB  ARG A 125      20.358  -2.617  -9.083\nATOM    982  N   LEU A 126      19.493  -3.856  -6.289\nATOM    983  CA  LEU A 126      18.430  -4.140  -5.333\nATOM    984  C   LEU A 126      18.838  -3.655  -3.951\nATOM    986  CB  LEU A 126      18.141  -5.637  -5.271\nATOM    990  N   GLU A 127      20.138  -3.596  -3.708\nATOM    991  CA  GLU A 127      20.632  -3.131  -2.429\nATOM    992  C   GLU A 127      20.396  -1.621  -2.356\nATOM    994  CB  GLU A 127      22.117  -3.451  -2.320\nATOM    999  N   ALA A 128      20.326  -0.979  -3.520\nATOM   1000  CA  ALA A 128      20.074   0.459  -3.603\nATOM   1001  C   ALA A 128      18.574   0.724  -3.409\nATOM   1003  CB  ALA A 128      20.517   0.985  -4.943\nATOM   1004  N   ARG A 129      17.730   0.026  -4.174\nATOM   1005  CA  ARG A 129      16.277   0.152  -4.044\nATOM   1006  C   ARG A 129      15.726  -1.263  -4.110\nATOM   1008  CB  ARG A 129      15.680   0.998  -5.173\nATOM   1015  N   PRO A 130      15.684  -1.961  -2.968\nATOM   1016  CA  PRO A 130      15.183  -3.334  -2.892\nATOM   1017  C   PRO A 130      13.742  -3.504  -3.336\nATOM   1019  CB  PRO A 130      15.393  -3.691  -1.429\nATOM   1022  N   THR A 131      13.075  -2.383  -3.540\nATOM   1023  CA  THR A 131      11.675  -2.355  -3.940\nATOM   1024  C   THR A 131      11.531  -2.277  -5.471\nATOM   1026  CB  THR A 131      11.004  -1.137  -3.239\nATOM   1029  N   ALA A 132      12.661  -2.293  -6.172\nATOM   1030  CA  ALA A 132      12.672  -2.208  -7.625\nATOM   1031  C   ALA A 132      11.798  -3.246  -8.352\nATOM   1033  CB  ALA A 132      14.106  -2.304  -8.114\nATOM   1034  N   ASP A 133      10.971  -2.777  -9.287\nATOM   1035  CA  ASP A 133      10.071  -3.635 -10.060\nATOM   1036  C   ASP A 133      10.581  -3.912 -11.473\nATOM   1038  CB  ASP A 133       8.681  -2.987 -10.220\nATOM   1042  N   LEU A 134      11.366  -2.982 -12.010\nATOM   1043  CA  LEU A 134      11.863  -3.127 -13.369\nATOM   1044  C   LEU A 134      13.361  -3.082 -13.523\nATOM   1046  CB  LEU A 134      11.257  -2.039 -14.242\nATOM   1050  N   CYS A 135      13.836  -3.733 -14.589\nATOM   1051  CA  CYS A 135      15.243  -3.648 -14.882\nATOM   1052  C   CYS A 135      15.282  -2.173 -15.324\nATOM   1054  CB  CYS A 135      15.651  -4.622 -16.008\nATOM   1056  N   ILE A 136      16.461  -1.566 -15.338\nATOM   1057  CA  ILE A 136      16.567  -0.158 -15.714\nATOM   1058  C   ILE A 136      15.950   0.181 -17.061\nATOM   1060  CB  ILE A 136      18.043   0.319 -15.697\nATOM   1064  N   ASP A 137      16.145  -0.690 -18.047\nATOM   1065  CA  ASP A 137      15.602  -0.448 -19.378\nATOM   1066  C   ASP A 137      14.082  -0.391 -19.394\nATOM   1068  CB  ASP A 137      16.048  -1.516 -20.372\nATOM   1072  N   CYS A 138      13.433  -1.411 -18.854\nATOM   1073  CA  CYS A 138      11.977  -1.428 -18.842\nATOM   1074  C   CYS A 138      11.458  -0.325 -17.968\nATOM   1076  CB  CYS A 138      11.431  -2.759 -18.330\nATOM   1078  N   LYS A 139      12.159  -0.068 -16.872\nATOM   1079  CA  LYS A 139      11.752   0.988 -15.957\nATOM   1080  C   LYS A 139      11.752   2.318 -16.682\nATOM   1082  CB  LYS A 139      12.709   1.093 -14.766\nATOM   1087  N   THR A 140      12.841   2.584 -17.394\nATOM   1088  CA  THR A 140      12.987   3.830 -18.134\nATOM   1089  C   THR A 140      12.001   3.945 -19.284\nATOM   1091  CB  THR A 140      14.413   3.980 -18.671\nATOM   1094  N   LEU A 141      11.855   2.866 -20.038\nATOM   1095  CA  LEU A 141      10.936   2.857 -21.156\nATOM   1096  C   LEU A 141       9.543   3.165 -20.663\nATOM   1098  CB  LEU A 141      10.967   1.509 -21.855\nATOM   1102  N   ALA A 142       9.202   2.630 -19.501\nATOM   1103  CA  ALA A 142       7.888   2.875 -18.910\nATOM   1104  C   ALA A 142       7.720   4.354 -18.613\nATOM   1106  CB  ALA A 142       7.734   2.069 -17.624\nATOM   1107  N   GLU A 143       8.760   4.969 -18.070\nATOM   1108  CA  GLU A 143       8.715   6.382 -17.737\nATOM   1109  C   GLU A 143       8.556   7.223 -18.995\nATOM   1111  CB  GLU A 143       9.992   6.783 -17.003\nATOM   1116  N   ILE A 144       9.188   6.790 -20.080\nATOM   1117  CA  ILE A 144       9.096   7.513 -21.329\nATOM   1118  C   ILE A 144       7.684   7.397 -21.873\nATOM   1120  CB  ILE A 144      10.091   6.976 -22.380\nATOM   1124  N   ARG A 145       7.153   6.178 -21.916\nATOM   1125  CA  ARG A 145       5.798   5.945 -22.417\nATOM   1126  C   ARG A 145       4.846   6.844 -21.651\nATOM   1128  CB  ARG A 145       5.359   4.495 -22.200\nATOM   1135  N   GLU A 146       5.063   6.922 -20.346\nATOM   1136  CA  GLU A 146       4.263   7.735 -19.443\nATOM   1137  C   GLU A 146       4.121   9.167 -19.951\nATOM   1139  CB  GLU A 146       4.936   7.716 -18.080\nATOM   1144  N   LYS A 147       5.248   9.860 -20.097\nATOM   1145  CA  LYS A 147       5.253  11.240 -20.581\nATOM   1146  C   LYS A 147       4.540  11.421 -21.924\nATOM   1148  CB  LYS A 147       6.693  11.757 -20.710\nATOM   1153  N   GLN A 148       4.576  10.393 -22.762\nATOM   1154  CA  GLN A 148       3.951  10.453 -24.085\nATOM   1155  C   GLN A 148       2.471  10.044 -24.106\nATOM   1157  CB  GLN A 148       4.750   9.592 -25.070\nATOM   1162  N   MET A 149       2.128   8.997 -23.359\nATOM   1163  CA  MET A 149       0.743   8.529 -23.282\nATOM   1164  C   MET A 149      -0.049   9.525 -22.433\nATOM   1166  CB  MET A 149       0.660   7.141 -22.624\nATOM   1170  N   ALA A 150       0.664  10.279 -21.603\nATOM   1171  CA  ALA A 150       0.044  11.272 -20.740\nATOM   1172  C   ALA A 150      -0.134  12.585 -21.497\nATOM   1174  CB  ALA A 150       0.902  11.499 -19.503\nATOM   1175  N   GLY A 151       0.960  13.327 -21.647\nATOM   1176  CA  GLY A 151       0.909  14.596 -22.353\nATOM   1177  C   GLY A 151       0.566  14.495 -23.835\nTER"
            };
        },
        5473: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => r
            });
            const r = {
                APP_NAME: "Foldseek",
                APP_DESCRIPTION: "Foldseek Server offers fast and sensitive protein structure alignments against large protein structure collections",
                CITATION: 'van Kempen M, Kim S, Tumescheit C, Mirdita M, Lee J, Gilchrist CLM, Söding J, and Steinegger M. <a href="https://www.nature.com/articles/s41587-023-01773-0" target="_blank" rel="noopener">Fast and accurate protein structure search with Foldseek</a>. Nature Biotechnology, 2023.',
                CITATION_MULTIMER: 'Kim W, Mirdita M, Levy Karin E, Gilchrist CLM, Schweke H, Soeding J, Levy E, and Steinegger M. <a href="https://www.biorxiv.org/content/10.1101/2024.04.14.589414v2" target="_blank" rel="noopener">Rapid and Sensitive Protein Complex Alignment with Foldseek-Multimer</a>. bioRxiv, 2024.',
                CITATION_FOLDMASON: 'Gilchrist CLM, Mirdita M and Steinegger M. <a href="https://www.biorxiv.org/content/10.1101/2024.08.01.606130v1" target="_blank" rel="noopener">Multiple Protein Structure Alignment at Scale with FoldMason</a>. bioRxiv, 2024.',
                NAV_URL_COUNT: "3",
                NAV_TITLE_1: "GitHub",
                NAV_URL_1: "https://foldseek.com",
                NAV_TITLE_2: "Söding Lab",
                NAV_URL_2: "https://www.mpinat.mpg.de/soeding",
                NAV_TITLE_3: "Steinegger Lab",
                NAV_URL_3: "https://steineggerlab.com/",
                QUERIES_HELP: "Enter a protein structure in PDB or mmCIF format or upload a PDB or mmCIF file.",
                UPLOAD_LABEL: "Upload PDB",
                CURL_INTRO: " Use this command to get a submit a file in PDB or mmCIF format to the Foldseek search server. Replace the ‘PATH_TO_FILE’ string with the path to the file.",
                MODE_HELP: "<strong>3Di/AA:</strong> fast prefilter using the 3Di alphabet and alignment using the 3Di alphabet+BLOSUM62 based Smith-Waterman-Gotoh (local alignment)<br>\n<strong>TM-align:</strong> fast prefilter using the 3Di alphabet and alignment using TM-align (global-alignment)",
                MODE_COUNT: "2",
                MODE_DEFAULT_KEY: "3diaa",
                MODE_KEY_1: "3diaa",
                MODE_TITLE_1: "3Di/AA",
                MODE_KEY_2: "tmalign",
                MODE_TITLE_2: "TM-align",
                QUERY_DEFAULT: "ATOM    866  N   PHE A 111      11.187 -12.768  -6.000\nATOM    867  CA  PHE A 111      11.895 -11.516  -5.804\nATOM    868  C   PHE A 111      13.203 -11.457  -6.592\nATOM    870  CB  PHE A 111      12.169 -11.360  -4.310\nATOM    877  N   GLY A 112      13.543 -10.277  -7.094\nATOM    878  CA  GLY A 112      14.800 -10.107  -7.788\nATOM    879  C   GLY A 112      14.816  -9.982  -9.286\nATOM    881  N   TYR A 113      13.670 -10.112  -9.938\nATOM    882  CA  TYR A 113      13.648 -10.024 -11.397\nATOM    883  C   TYR A 113      12.764  -8.904 -11.929\nATOM    885  CB  TYR A 113      13.182 -11.355 -11.997\nATOM    893  N   CYS A 114      13.052  -8.468 -13.148\nATOM    894  CA  CYS A 114      12.288  -7.406 -13.778\nATOM    895  C   CYS A 114      10.881  -7.902 -14.054\nATOM    897  CB  CYS A 114      12.938  -6.973 -15.096\nATOM    899  N   GLU A 115       9.884  -7.083 -13.740\nATOM    900  CA  GLU A 115       8.508  -7.493 -13.963\nATOM    901  C   GLU A 115       8.078  -7.419 -15.428\nATOM    903  CB  GLU A 115       7.564  -6.649 -13.087\nATOM    908  N   SER A 116       8.751  -6.604 -16.236\nATOM    909  CA  SER A 116       8.399  -6.475 -17.651\nATOM    910  C   SER A 116       9.022  -7.604 -18.460\nATOM    912  CB  SER A 116       8.874  -5.128 -18.198\nATOM    914  N   CYS A 117      10.338  -7.721 -18.376\nATOM    915  CA  CYS A 117      11.043  -8.788 -19.061\nATOM    916  C   CYS A 117      11.545  -9.657 -17.913\nATOM    918  CB  CYS A 117      12.180  -8.202 -19.896\nATOM    920  N   GLY A 118      11.749 -10.943 -18.129\nATOM    921  CA  GLY A 118      12.164 -11.781 -17.008\nATOM    922  C   GLY A 118      13.517 -11.520 -16.366\nATOM    924  N   VAL A 119      14.307 -10.654 -16.991\nATOM    925  CA  VAL A 119      15.653 -10.305 -16.546\nATOM    926  C   VAL A 119      15.839 -10.128 -15.043\nATOM    928  CB  VAL A 119      16.116  -9.004 -17.259\nATOM    931  N   GLU A 120      17.018 -10.498 -14.557\nATOM    932  CA  GLU A 120      17.318 -10.353 -13.149\nATOM    933  C   GLU A 120      17.758  -8.921 -12.929\nATOM    935  CB  GLU A 120      18.457 -11.282 -12.739\nATOM    940  N   ILE A 121      17.328  -8.325 -11.826\nATOM    941  CA  ILE A 121      17.713  -6.960 -11.477\nATOM    942  C   ILE A 121      19.000  -7.099 -10.668\nATOM    944  CB  ILE A 121      16.621  -6.291 -10.625\nATOM    948  N   GLY A 122      19.945  -6.204 -10.856\nATOM    949  CA  GLY A 122      21.175  -6.377 -10.114\nATOM    950  C   GLY A 122      21.099  -6.565  -8.605\nATOM    952  N   ILE A 123      22.051  -7.298  -8.038\nATOM    953  CA  ILE A 123      22.055  -7.474  -6.607\nATOM    954  C   ILE A 123      22.389  -6.135  -5.992\nATOM    956  CB  ILE A 123      23.078  -8.512  -6.173\nATOM    960  N   ARG A 124      23.412  -5.481  -6.521\nATOM    961  CA  ARG A 124      23.804  -4.174  -5.993\nATOM    962  C   ARG A 124      22.719  -3.163  -6.291\nATOM    964  CB  ARG A 124      25.110  -3.680  -6.625\nATOM    971  N   ARG A 125      21.969  -3.378  -7.364\nATOM    972  CA  ARG A 125      20.903  -2.436  -7.674\nATOM    973  C   ARG A 125      19.754  -2.611  -6.682\nATOM    975  CB  ARG A 125      20.358  -2.617  -9.083\nATOM    982  N   LEU A 126      19.493  -3.856  -6.289\nATOM    983  CA  LEU A 126      18.430  -4.140  -5.333\nATOM    984  C   LEU A 126      18.838  -3.655  -3.951\nATOM    986  CB  LEU A 126      18.141  -5.637  -5.271\nATOM    990  N   GLU A 127      20.138  -3.596  -3.708\nATOM    991  CA  GLU A 127      20.632  -3.131  -2.429\nATOM    992  C   GLU A 127      20.396  -1.621  -2.356\nATOM    994  CB  GLU A 127      22.117  -3.451  -2.320\nATOM    999  N   ALA A 128      20.326  -0.979  -3.520\nATOM   1000  CA  ALA A 128      20.074   0.459  -3.603\nATOM   1001  C   ALA A 128      18.574   0.724  -3.409\nATOM   1003  CB  ALA A 128      20.517   0.985  -4.943\nATOM   1004  N   ARG A 129      17.730   0.026  -4.174\nATOM   1005  CA  ARG A 129      16.277   0.152  -4.044\nATOM   1006  C   ARG A 129      15.726  -1.263  -4.110\nATOM   1008  CB  ARG A 129      15.680   0.998  -5.173\nATOM   1015  N   PRO A 130      15.684  -1.961  -2.968\nATOM   1016  CA  PRO A 130      15.183  -3.334  -2.892\nATOM   1017  C   PRO A 130      13.742  -3.504  -3.336\nATOM   1019  CB  PRO A 130      15.393  -3.691  -1.429\nATOM   1022  N   THR A 131      13.075  -2.383  -3.540\nATOM   1023  CA  THR A 131      11.675  -2.355  -3.940\nATOM   1024  C   THR A 131      11.531  -2.277  -5.471\nATOM   1026  CB  THR A 131      11.004  -1.137  -3.239\nATOM   1029  N   ALA A 132      12.661  -2.293  -6.172\nATOM   1030  CA  ALA A 132      12.672  -2.208  -7.625\nATOM   1031  C   ALA A 132      11.798  -3.246  -8.352\nATOM   1033  CB  ALA A 132      14.106  -2.304  -8.114\nATOM   1034  N   ASP A 133      10.971  -2.777  -9.287\nATOM   1035  CA  ASP A 133      10.071  -3.635 -10.060\nATOM   1036  C   ASP A 133      10.581  -3.912 -11.473\nATOM   1038  CB  ASP A 133       8.681  -2.987 -10.220\nATOM   1042  N   LEU A 134      11.366  -2.982 -12.010\nATOM   1043  CA  LEU A 134      11.863  -3.127 -13.369\nATOM   1044  C   LEU A 134      13.361  -3.082 -13.523\nATOM   1046  CB  LEU A 134      11.257  -2.039 -14.242\nATOM   1050  N   CYS A 135      13.836  -3.733 -14.589\nATOM   1051  CA  CYS A 135      15.243  -3.648 -14.882\nATOM   1052  C   CYS A 135      15.282  -2.173 -15.324\nATOM   1054  CB  CYS A 135      15.651  -4.622 -16.008\nATOM   1056  N   ILE A 136      16.461  -1.566 -15.338\nATOM   1057  CA  ILE A 136      16.567  -0.158 -15.714\nATOM   1058  C   ILE A 136      15.950   0.181 -17.061\nATOM   1060  CB  ILE A 136      18.043   0.319 -15.697\nATOM   1064  N   ASP A 137      16.145  -0.690 -18.047\nATOM   1065  CA  ASP A 137      15.602  -0.448 -19.378\nATOM   1066  C   ASP A 137      14.082  -0.391 -19.394\nATOM   1068  CB  ASP A 137      16.048  -1.516 -20.372\nATOM   1072  N   CYS A 138      13.433  -1.411 -18.854\nATOM   1073  CA  CYS A 138      11.977  -1.428 -18.842\nATOM   1074  C   CYS A 138      11.458  -0.325 -17.968\nATOM   1076  CB  CYS A 138      11.431  -2.759 -18.330\nATOM   1078  N   LYS A 139      12.159  -0.068 -16.872\nATOM   1079  CA  LYS A 139      11.752   0.988 -15.957\nATOM   1080  C   LYS A 139      11.752   2.318 -16.682\nATOM   1082  CB  LYS A 139      12.709   1.093 -14.766\nATOM   1087  N   THR A 140      12.841   2.584 -17.394\nATOM   1088  CA  THR A 140      12.987   3.830 -18.134\nATOM   1089  C   THR A 140      12.001   3.945 -19.284\nATOM   1091  CB  THR A 140      14.413   3.980 -18.671\nATOM   1094  N   LEU A 141      11.855   2.866 -20.038\nATOM   1095  CA  LEU A 141      10.936   2.857 -21.156\nATOM   1096  C   LEU A 141       9.543   3.165 -20.663\nATOM   1098  CB  LEU A 141      10.967   1.509 -21.855\nATOM   1102  N   ALA A 142       9.202   2.630 -19.501\nATOM   1103  CA  ALA A 142       7.888   2.875 -18.910\nATOM   1104  C   ALA A 142       7.720   4.354 -18.613\nATOM   1106  CB  ALA A 142       7.734   2.069 -17.624\nATOM   1107  N   GLU A 143       8.760   4.969 -18.070\nATOM   1108  CA  GLU A 143       8.715   6.382 -17.737\nATOM   1109  C   GLU A 143       8.556   7.223 -18.995\nATOM   1111  CB  GLU A 143       9.992   6.783 -17.003\nATOM   1116  N   ILE A 144       9.188   6.790 -20.080\nATOM   1117  CA  ILE A 144       9.096   7.513 -21.329\nATOM   1118  C   ILE A 144       7.684   7.397 -21.873\nATOM   1120  CB  ILE A 144      10.091   6.976 -22.380\nATOM   1124  N   ARG A 145       7.153   6.178 -21.916\nATOM   1125  CA  ARG A 145       5.798   5.945 -22.417\nATOM   1126  C   ARG A 145       4.846   6.844 -21.651\nATOM   1128  CB  ARG A 145       5.359   4.495 -22.200\nATOM   1135  N   GLU A 146       5.063   6.922 -20.346\nATOM   1136  CA  GLU A 146       4.263   7.735 -19.443\nATOM   1137  C   GLU A 146       4.121   9.167 -19.951\nATOM   1139  CB  GLU A 146       4.936   7.716 -18.080\nATOM   1144  N   LYS A 147       5.248   9.860 -20.097\nATOM   1145  CA  LYS A 147       5.253  11.240 -20.581\nATOM   1146  C   LYS A 147       4.540  11.421 -21.924\nATOM   1148  CB  LYS A 147       6.693  11.757 -20.710\nATOM   1153  N   GLN A 148       4.576  10.393 -22.762\nATOM   1154  CA  GLN A 148       3.951  10.453 -24.085\nATOM   1155  C   GLN A 148       2.471  10.044 -24.106\nATOM   1157  CB  GLN A 148       4.750   9.592 -25.070\nATOM   1162  N   MET A 149       2.128   8.997 -23.359\nATOM   1163  CA  MET A 149       0.743   8.529 -23.282\nATOM   1164  C   MET A 149      -0.049   9.525 -22.433\nATOM   1166  CB  MET A 149       0.660   7.141 -22.624\nATOM   1170  N   ALA A 150       0.664  10.279 -21.603\nATOM   1171  CA  ALA A 150       0.044  11.272 -20.740\nATOM   1172  C   ALA A 150      -0.134  12.585 -21.497\nATOM   1174  CB  ALA A 150       0.902  11.499 -19.503\nATOM   1175  N   GLY A 151       0.960  13.327 -21.647\nATOM   1176  CA  GLY A 151       0.909  14.596 -22.353\nATOM   1177  C   GLY A 151       0.566  14.495 -23.835\nTER"
            };
        },
        8615: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => r
            });
            const r = {
                APP_NAME: "MMseqs2",
                APP_DESCRIPTION: "MMseqs2 server offers fast and sensitive sequence alignments against large sequence databases",
                CITATION: "Mirdita M., Steinegger M., and Söding J., <a href=“https://doi.org/10.1093/bioinformatics/bty1057” target=“_blank” rel=“noopener”>MMseqs2 desktop and local web server app for fast, interactive sequence searches</a>, <i>Bioinformatics</i>, 2019.",
                NAV_URL_COUNT: "3",
                NAV_TITLE_1: "MMseqs2",
                NAV_URL_1: "https://mmseqs.com",
                NAV_TITLE_2: "GitHub",
                NAV_URL_2: "https://github.com/soedinglab/MMseqs2-App",
                NAV_TITLE_3: "Södinglab",
                NAV_URL_3: "http://www.mpibpc.mpg.de/soeding",
                QUERIES_HELP: "Enter a list of either protein or nucleotide sequences in FASTA format or upload a FASTA file.",
                UPLOAD_LABEL: "Upload FASTA File",
                CURL_INTRO: " Use this command to get a submit a file in fasta format to the MMseqs2 search server. Replace the ‘PATH_TO_FILE’ string with the path to the file.",
                MODE_HELP: "‘All’ shows all hits under an e-value cutoff. ‘Greedy Best Hits’ tries to cover the search query.",
                MODE_COUNT: "2",
                MODE_DEFAULT_KEY: "accept",
                MODE_KEY_1: "accept",
                MODE_TITLE_1: "All Hits",
                MODE_KEY_2: "summary",
                MODE_TITLE_2: "Greedy Best Hits",
                MODE_KEY_3: "",
                MODE_TITLE_3: "",
                QUERY_DEFAULT: ">TEST\nMPKIIEAIYENGVFKPLQKVDLKEGEKAKIVLESISDKTFGILKASETEIKKVLEEIDDFWGVC"
            };
        },
        3957: (t, e, n) => {
            "use strict";
            var r = n(144), i = n(123), a = n(1002), s = {
                selector: "vue-portal-target"
            };
            const o = s;
            var l = "undefined" != typeof window && void 0 !== ("undefined" == typeof document ? "undefined" : (0, 
            a.Z)(document));
            const c = r.Z.extend({
                abstract: !0,
                name: "PortalOutlet",
                props: [ "nodes", "tag" ],
                data: function(t) {
                    return {
                        updatedNodes: t.nodes
                    };
                },
                render: function(t) {
                    var e = this.updatedNodes && this.updatedNodes();
                    return e ? 1 !== e.length || e[0].text ? t(this.tag || "DIV", e) : e : t();
                },
                destroyed: function() {
                    var t = this.$el;
                    t && t.parentNode.removeChild(t);
                }
            }), d = r.Z.extend({
                name: "VueSimplePortal",
                props: {
                    disabled: {
                        type: Boolean
                    },
                    prepend: {
                        type: Boolean
                    },
                    selector: {
                        type: String,
                        default: function() {
                            return "#".concat(o.selector);
                        }
                    },
                    tag: {
                        type: String,
                        default: "DIV"
                    }
                },
                render: function(t) {
                    if (this.disabled) {
                        var e = this.$scopedSlots && this.$scopedSlots.default();
                        return e ? e.length < 2 && !e[0].text ? e : t(this.tag, e) : t();
                    }
                    return t();
                },
                created: function() {
                    this.getTargetEl() || this.insertTargetEl();
                },
                updated: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.disabled || t.slotFn === t.$scopedSlots.default || (t.container.updatedNodes = t.$scopedSlots.default), 
                        t.slotFn = t.$scopedSlots.default;
                    }));
                },
                beforeDestroy: function() {
                    this.unmount();
                },
                watch: {
                    disabled: {
                        immediate: !0,
                        handler: function(t) {
                            t ? this.unmount() : this.$nextTick(this.mount);
                        }
                    }
                },
                methods: {
                    getTargetEl: function() {
                        if (l) return document.querySelector(this.selector);
                    },
                    insertTargetEl: function() {
                        if (l) {
                            var t = document.querySelector("body"), e = document.createElement(this.tag);
                            e.id = this.selector.substring(1), t.appendChild(e);
                        }
                    },
                    mount: function() {
                        if (l) {
                            var t = this.getTargetEl(), e = document.createElement("DIV");
                            this.prepend && t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e), 
                            this.container = new c({
                                el: e,
                                parent: this,
                                propsData: {
                                    tag: this.tag,
                                    nodes: this.$scopedSlots.default
                                }
                            });
                        }
                    },
                    unmount: function() {
                        this.container && (this.container.$destroy(), delete this.container);
                    }
                }
            });
            function u(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t.component(n.name || "portal", d), n.defaultSelector && (e = n.defaultSelector, 
                s.selector = e);
            }
            "undefined" != typeof window && window.Vue && window.Vue === r.Z && r.Z.use(u);
            const h = u;
            var p = n(5317);
            const A = {
                AlertCircleOutline: p._gM,
                ApplicationBracesOutline: "M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 20H3V6H21V20M9 8C7.9 8 7 8.9 7 10C7 11.1 6.1 12 5 12V14C6.1 14 7 14.9 7 16C7 17.1 7.9 18 9 18H11V16H9V15C9 13.9 8.1 13 7 13C8.1 13 9 12.1 9 11V10H11V8M15 8C16.1 8 17 8.9 17 10C17 11.1 17.9 12 19 12V14C17.9 14 17 14.9 17 16C17 17.1 16.1 18 15 18H13V16H15V15C15 13.9 15.9 13 17 13C15.9 13 15 12.1 15 11V10H13V8H15Z",
                ArrowRightCircle: p.BzZ,
                ArrowRightCircleOutline: p.LHZ,
                AxisZRotateCounterclockwise: p.LDS,
                ChevronLeft: p.gAv,
                ChevronRight: p.zrb,
                Circle: p.mdD,
                CircleHalf: p.dMH,
                CircleOneThird: "M12 12 V2 A10 10 0 0 0 3.858 17.806 Z",
                CircleTwoThird: "M12 12 V2 A10 10 0 1 0 20.142 17.806 Z",
                ClockOutline: p.R1X,
                CloudDownloadOutline: p.REA,
                Delete: p.x9U,
                Dns: p.cfj,
                File: p.iA5,
                FileDownloadOutline: p.wLz,
                FileUpload: p.ruG,
                FormatListBulleted: p.Ir0,
                Fullscreen: p.h40,
                HelpCircleOutline: p.Gir,
                History: p.BBX,
                Label: p.KB_,
                LabelOutline: p.iz_,
                Magnify: p.I0v,
                MinusBox: p.PeF,
                NotificationClearAll: p.Tal,
                PlusBox: p.U1m,
                ProgressWrench: p.Oy8,
                ReorderHorizontal: p.Qjn,
                Restore: p.mBz,
                SavePDB: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14Zm0 8v-.8c0-.7-.6-1.2-1.3-1.2h-2.4v6h2.4c.7 0 1.2-.5 1.2-1.2v-1c0-.4-.4-.8-.9-.8.5 0 1-.4 1-1Zm-9.7.5v-1c0-.8-.7-1.5-1.5-1.5H5.3v6h1.5v-2h1c.8 0 1.5-.7 1.5-1.5Zm5 2v-3c0-.8-.7-1.5-1.5-1.5h-2.5v6h2.5c.8 0 1.5-.7 1.5-1.5Zm3.4.3h-1.2v-1.2h1.2v1.2Zm-5.9-3.3v3h1v-3h-1Zm-5 0v1h1v-1h-1Zm11 .9h-1.3v-1.2h1.2v1.2Z",
                SavePNG: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9 11.5C9 12.3 8.3 13 7.5 13H6.5V15H5V9H7.5C8.3 9 9 9.7 9 10.5V11.5M14 15H12.5L11.5 12.5V15H10V9H11.5L12.5 11.5V9H14V15M19 10.5H16.5V13.5H17.5V12H19V13.7C19 14.4 18.5 15 17.7 15H16.4C15.6 15 15.1 14.3 15.1 13.7V10.4C15 9.7 15.5 9 16.3 9H17.6C18.4 9 18.9 9.7 18.9 10.3V10.5H19M6.5 10.5H7.5V11.5H6.5V10.5Z",
                TableLarge: p.bgG,
                Tune: p.S3d,
                LayersSearchOutline: p.Qpb,
                API: "M 22.23 1.96 c -0.98 0 -1.77 0.8 -1.77 1.77 c 0 0.21 0.05 0.4 0.12 0.6 l -8.31 14.23 c -0.8 0.17 -1.42 0.85 -1.42 1.7 a 1.77 1.77 0 0 0 3.54 0 c 0 -0.2 -0.05 -0.37 -0.1 -0.55 l 8.34 -14.29 a 1.75 1.75 0 0 0 1.37 -1.69 c 0 -0.97 -0.8 -1.77 -1.77 -1.77 M 14.98 1.96 c -0.98 0 -1.77 0.8 -1.77 1.77 c 0 0.21 0.05 0.4 0.12 0.6 l -8.3 14.24 c -0.81 0.16 -1.43 0.84 -1.43 1.7 a 1.77 1.77 0 0 0 3.55 0 c 0 -0.2 -0.06 -0.38 -0.12 -0.56 L 15.4 5.42 a 1.75 1.75 0 0 0 1.37 -1.69 c 0 -0.97 -0.8 -1.77 -1.78 -1.77 M 1.75 6 a 1.75 1.75 0 1 0 0 3.5 a 1.75 1.75 0 0 0 0 -3.5 z m 0 6 a 1.75 1.75 0 1 0 0 3.5 a 1.75 1.75 0 0 0 0 -3.5 z",
                CloseCircle: p.lY3,
                CloseCircleOutline: p.DNZ,
                Monomer: "m13.9 4.4.8.5a7.7 7.7 90 0 0 1.3.6 2.3 2.3 90 0 1 .5.2l.5.2.4.2.1.2a.4.4 90 0 1-.1.3A6.2 6.2 90 0 1 16 7a11.3 11.3 0 0 0-1.2.6l-.5-.2-1.1-.6a2 2 0 0 1-.5-.6 1.8 1.8 90 0 1-.2-1V3A5.3 5.3 90 0 0 14 4.4Zm-1.6-2c-.4-.8-1-1.3-1.6-1.3-1-.1-1.7.3-2.2 1.2a4.2 4.2 90 0 0-.3 1.3H10v12.9h2l-3.4 3.4.1 1.6c0 .4-.1.5-.4.5-.2 0 1.2-1-.4-.4L7.6 20l-3.3-3.4h1.9V3.6h1.1a7.4 7.4 90 0 1 .5-1.7C8.3.7 9.3.1 10.8.2a2.2 2.2 90 0 1 1.2.6A4.3 4.3 90 0 1 13 2v.3c0 .2 0 .4-.3.4-.2 0-.3 0-.4-.2Zm4.3 20.8a3 3 0 0 1-2.6-.5c-.8-.5-1.2-1.4-1.2-2.7 0-.3.1-.4.4-.4.3 0 .4.1.4.4 0 1 .3 1.7.8 2a2.5 2.5 90 0 0 2 .3h.1c.3 0 .5.2.5.5 0 .2-.1.3-.4.4Zm1.4-8v1a2.1 2.1 90 0 1-.3.5 2.6 2.6 90 0 1-.8.5l-.7.3-.6.3c-1.3.4-2 .7-2 .8a2.5 2.5 90 0 0-.8.5l-.2.3a3.3 3.3 90 0 1-.1-.8 5 5 90 0 1 0-1.3 2.4 2.4 90 0 1 .4-.8 3.6 3.6 90 0 1 .6-.4 38.4 38.4 0 0 1 4-1.9l.2-.3a2.6 2.6 90 0 1 .2.3 3.2 3.2 90 0 1 0 1Zm-5.2-1.8V13l.2-.4.7-.5 1-.3a7.7 7.7 90 0 0 1.3.6l.5.2.5.2.4.2.1.2-.1.2a2.4 2.4 90 0 1-.8.4 3 3 90 0 0-.5.2 1.9 1.9 90 0 1-.6.2l-.7.4-.5-.3a4.6 4.6 90 0 1-1.1-.5l-.2-.3-.2-.2ZM18 8.2a5.8 5.8 90 0 1 0 1 1.2 1.2 90 0 1-.3.5l-.5.3a189.3 189.3 90 0 0-3.6 1.5 2.5 2.5 90 0 0-.8.6l-.2.3-.1-.7v-1.3l.4-.9.5-.3L15.6 8l.6-.3a3.5 3.5 90 0 1 .5-.2l.9-.4.2-.3v.2l.2 1.1Z",
                Multimer: "M14 19.3c0-.3.2-.4.3-.5h.2c.3 0 .4.1.4.3.1.8.4 1.4 1 1.7.5.2 1 .3 1.5.1H17.7c.2-.1.4 0 .5.2 0 .3 0 .4-.3.5l-.4.2h-.3c-.5.1-1 0-1.7-.3-.4-.1-.7-.4-.9-.8a2.4 2.4 0 0 1-.4-1l-.1-.4Zm3.2-2h-.4a18.4 18.4 0 0 0-2.6.8l-.2.3v-.7c0-.5.1-.8.3-1l.6-.7.5-.3A63.2 63.2 0 0 1 18 15l.5-.2h.3l.3-.1.1-.1.3-.3v.2a7.5 7.5 0 0 1-.2 1.9l-.2.4-.8.4a15 15 0 0 0-.8.1h-.2Zm-5.1-.1v.6h-.6l-.4-.5-.6-.7-4.6-.8 1.5-1-5.9-8 .9-.7-.6-1.5c-.3-1.3.2-2.4 1.3-3.1l1.3-.3h.4l.4.1.2.1.6.4c.2 0 .3.2.2.5l-.4.2h-.2l-.4-.2-.8-.2c-.3 0-.6 0-.9.2a2 2 0 0 0-1 2.2l.6 1.1 1.3-1 1 1.4L5 8.6l1.4-1 3.8 5 1.5-1-.6 4.6.9 1Zm7-4-.1.3-.8.3a9 9 0 0 0-1.7.4 100.6 100.6 0 0 1-1.4-1.1v-.5c0-.1 0-.3.2-.4l.7-.3.8-.2.1.1.5.3.6.3a2092.6 2092.6 0 0 0 1.1.8Zm-8-2L7.2 6l-1.1.8.6-4 4 .7-1.1.8 4.2 5.7c-.4.5-.5 1.5-.4 3l-.6.4-.7-.9.2-2.2-1.2 1Zm9.2-3.7v1.2l-.2.8c0 .3-.2.4-.2.4l-.5.3a49.2 49.2 0 0 1-4.1 1l-.2.3V11c0-.4 0-.8.2-1.1l.5-.7.4-.3a19.2 19.2 0 0 1 4-1V7.4Zm-3.9-4.2c.3.5.6.9 1 1.1.2.4.5.6.6.6l.5.3a15.8 15.8 0 0 1 .8.6h.3l.1.2h.2c0 .2.2.3.3.3V7h-.5a2 2 0 0 0-.3.2l-.5.1-.5.1h-.1l-.3.1a1 1 0 0 0-.3 0l-.5-.2a4.7 4.7 0 0 1-1-1l-.2-.2V5l.4-2v.3Zm1.9-1.8c.1 0 .9-1.4 0-1.1-.9.2-1.5.7-1.8 1.5 0 .4 0 .7.5.8.4 0 .6-.1.7-.5 0-.3.3-.5.6-.7Z",
                Wall: p.MxW,
                TextBoxOutline: p.eLz
            };
            var g = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("v-app", {
                    class: {
                        electron: t.$ELECTRON
                    },
                    attrs: {
                        id: "app"
                    }
                }, [ n("v-main", [ "foldmason" === t.$APP ? n("MSALocal") : n("ResultLocal") ], 1) ], 1);
            };
            g._withStripped = !0;
            var m = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("Local", {
                    attrs: {
                        title: t.appTitle
                    },
                    on: {
                        uploadData: t.handleUploadData,
                        downloadData: t.handleDownloadData
                    },
                    scopedSlots: t._u([ {
                        key: "default",
                        fn: function() {
                            return [ t.hits ? n("v-tabs", {
                                staticStyle: {
                                    "margin-bottom": "1em"
                                },
                                attrs: {
                                    "center-active": "",
                                    grow: "",
                                    "show-arrows": ""
                                }
                            }, t._l(t.hits, (function(e, r) {
                                return n("v-tab", {
                                    key: e.query.header,
                                    on: {
                                        click: function(e) {
                                            return t.changeResult(r);
                                        }
                                    }
                                }, [ t._v("\n                " + t._s(e.query.header) + " (" + t._s(e.results[0].alignments ? e.results[0].alignments.length : 0) + ")\n            ") ]);
                            })), 1) : t._e(), t._v(" "), n("ResultView", {
                                key: t.currentIndex,
                                attrs: {
                                    ticket: t.ticket,
                                    error: t.error,
                                    mode: t.mode,
                                    hits: t.currentResult,
                                    selectedDatabases: t.selectedDatabases,
                                    tableMode: t.tableMode
                                }
                            }) ];
                        },
                        proxy: !0
                    } ])
                });
            };
            m._withStripped = !0;
            var f = n(9062), b = n(3324), v = n(8197);
            function y(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return C(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(t, e);
                    }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(t);
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t;
                    },
                    e: function(t) {
                        o = !0, a = t;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function C(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function x(t, e) {
                try {
                    var n = e.toLowerCase();
                    return n.startsWith("pfam") ? "https://www.ebi.ac.uk/interpro/entry/pfam/" + t : n.startsWith("pdb") ? "https://www.rcsb.org/structure/" + t.replaceAll(/-assembly[0-9]+/g, "").replaceAll(/\.(cif|pdb)(\.gz)?/g, "").split("_")[0] : n.startsWith("uniclust") || n.startsWith("uniprot") || n.startsWith("sprot") || n.startsWith("swissprot") ? "https://www.uniprot.org/uniprot/" + t : n.startsWith("eggnog_") ? "http://eggnogdb.embl.de/#/app/results?target_nogs=" + t : n.startsWith("cdd") ? "https://www.ncbi.nlm.nih.gov/Structure/cdd/cddsrv.cgi?uid=" + t : null;
                } catch (t) {
                    return null;
                }
            }
            function w(t, e) {
                e.toLowerCase();
                return t;
            }
            function S(t) {
                return t.startsWith("AF-") && (t = t.replaceAll(/(AF[-_]|[-_]F[0-9]+[-_]model[-_]v[0-9]+)/g, "")), 
                t.replaceAll(/\.(cif|pdb|gz)/g, "");
            }
            function M(t) {
                var e = 0, n = 0;
                for (var r in t.results) {
                    var i = t.results[r], a = i.db;
                    i.hasDescription = !1, i.hasTaxonomy = !1, null == i.alignments && e++, n++;
                    var s = {};
                    for (var o in i.alignments) for (var l in i.alignments[o]) {
                        var c, d = i.alignments[o][l], u = d.target.split(" ");
                        d.target = u[0], d.description = u.slice(1).join(" "), d.description.length > 1 && (i.hasDescription = !0), 
                        d.href = x(d.target, a), d.target = w(d.target, a), d.id = "result-" + r + "-" + o, 
                        d.active = !1, d.eval = "string" == typeof d.eval ? d.eval : d.eval.toExponential(2), 
                        "taxId" in d && (i.hasTaxonomy = !0);
                        var h = null !== (c = d.complexid) && void 0 !== c ? c : l;
                        s[h] || (s[h] = []), s[h].push(d);
                    }
                    i.alignments = s;
                }
                return 0 != n && e / n == 1 ? {
                    results: [],
                    mode: t.mode
                } : t;
            }
            function k() {
                return (new Date).toLocaleString("sv").replace(" ", "_").replaceAll("-", "_").replaceAll(":", "_");
            }
            function I(t, e) {
                var n = JSON.stringify(t), r = new Blob([ n ], {
                    type: "application/json"
                }), i = document.createElement("a");
                i.href = URL.createObjectURL(r), i.download = e, i.click(), URL.revokeObjectURL(i.href);
            }
            function T(t, e) {
                for (var n = Array(e.length), r = 0, i = 0; r < e.length; r++) "-" === e[r] ? (n[r] = null, 
                i++) : n[r] = t + r - i;
                return n;
            }
            var E = {
                A: "ALA",
                R: "ARG",
                N: "ASN",
                D: "ASP",
                C: "CYS",
                E: "GLU",
                Q: "GLN",
                G: "GLY",
                H: "HIS",
                I: "ILE",
                L: "LEU",
                K: "LYS",
                M: "MET",
                F: "PHE",
                P: "PRO",
                S: "SER",
                T: "THR",
                W: "TRP",
                Y: "TYR",
                V: "VAL",
                U: "SEC",
                O: "PHL",
                X: "XAA"
            };
            function R(t, e) {
                var n = [];
                return t.eachAtom((function(t) {
                    n.push(function(t) {
                        var e = t.serial, n = t.atomname, r = t.resname, i = t.chainname, a = t.resno, s = t.inscode, o = t.x, l = t.y, c = t.z;
                        return "ATOM  ".concat(e.toString().padStart(5)).concat(n.padStart(4), "  ").concat(r.padStart(3), " ").concat(i.padStart(1)).concat(a.toString().padStart(4), " ").concat(s.padStart(1), "  ").concat(o.toFixed(3).padStart(8)).concat(l.toFixed(3).padStart(8)).concat(c.toFixed(3).padStart(8));
                    }(t));
                }), new v.Y1(e)), n.join("\n");
            }
            function L(t, e, n) {
                for (var r = t.split(","), i = new Array, a = 1, s = 0; s < r.length; s += 3, a++) {
                    var o = r.slice(s, s + 3).map((function(t) {
                        return parseFloat(t);
                    })), l = (0, b.Z)(o, 3), c = l[0], d = l[1], u = l[2];
                    i.push("ATOM  " + a.toString().padStart(5) + "  CA  " + E["" != e && r.length / 3 == e.length ? e[s / 3] : "A"] + n.toString().padStart(2) + a.toString().padStart(4) + "    " + c.toFixed(3).padStart(8) + d.toFixed(3).padStart(8) + u.toFixed(3).padStart(8) + "  1.00  0.00           C  ");
                }
                return i.join("\n");
            }
            function N(t, e, n) {
                t.eachAtom((function(t) {
                    var r = [ t.x, t.y, t.z ], i = r[0], a = r[1], s = r[2];
                    t.x = e[0] + n[0][0] * i + n[0][1] * a + n[0][2] * s, t.y = e[1] + n[1][0] * i + n[1][1] * a + n[1][2] * s, 
                    t.z = e[2] + n[2][0] * i + n[2][1] * a + n[2][2] * s;
                }));
            }
            function O(t, e) {
                var n;
                return function() {
                    var r = this, i = arguments;
                    clearTimeout(n), n = setTimeout((function() {
                        t.apply(r, i);
                    }), e);
                };
            }
            function B(t, e) {
                for (var n, r = e.slice(), i = 0; i < 3; i++) r[i].push(t[i]);
                var a = new v.yG, s = (n = []).concat.apply(n, (0, f.Z)(r).concat([ [ 0, 0, 0, 1 ] ]));
                return a.set.apply(a, (0, f.Z)(s)), a;
            }
            var D = "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5".match(/.{6}/g).map((function(t) {
                return "#" + t;
            }));
            function q(t) {
                t = function(t) {
                    var e = function(t) {
                        return parseInt(t, 16) / 255;
                    };
                    return [ e(t.slice(1, 3)), e(t.slice(3, 5)), e(t.slice(5, 7)) ];
                }(t);
                var e = t[0], n = t[1], r = t[2], i = Math.min(e, n, r), a = Math.max(e, n, r), s = NaN, o = a - i, l = (a + i) / 2;
                return o ? (s = e === a ? (n - r) / o + 6 * (n < r) : n === a ? (r - e) / o + 2 : (e - n) / o + 4, 
                o /= l < .5 ? a + i : 2 - a - i, s *= 60) : o = l > 0 && l < 1 ? 0 : s, [ s, o, l ];
            }
            function P(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return _(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(t, e);
                    }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(t);
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t;
                    },
                    e: function(t) {
                        o = !0, a = t;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            const F = {
                name: "ResultMixin",
                data: function() {
                    return {
                        ticket: "",
                        error: "",
                        mode: "",
                        hits: null,
                        alignment: null,
                        activeTarget: null,
                        alnBoxOffset: 0,
                        selectedDatabases: 0,
                        tableMode: 0
                    };
                },
                methods: {
                    resetProperties: function() {},
                    fetchData: function() {},
                    setColorScheme: function() {
                        if (this.hits) {
                            var t, e, n, r, i, a, s, o, l, c = (t = [], e = 1, function(n) {
                                var r = n + "", i = t[r];
                                return i || (i = t[r] = e++), D[(i - 1) % D.length];
                            }), d = P(this.currentResult.results);
                            try {
                                for (d.s(); !(n = d.n()).done; ) {
                                    var u = n.value;
                                    u.color = c(u.db ? u.db : 0);
                                    for (var h = q(u.color), p = {
                                        score: Number.MIN_VALUE
                                    }, A = {
                                        score: Number.MAX_VALUE
                                    }, g = 0, m = Object.values(u.alignments); g < m.length; g++) {
                                        var f, b = P(m[g]);
                                        try {
                                            for (b.s(); !(f = b.n()).done; ) {
                                                var v = f.value;
                                                for (var y in A) A[y] = v[y] < A[y] ? v[y] : A[y], p[y] = v[y] > p[y] ? v[y] : p[y];
                                            }
                                        } catch (t) {
                                            b.e(t);
                                        } finally {
                                            b.f();
                                        }
                                    }
                                    for (var C = 0, x = Object.values(u.alignments); C < x.length; C++) {
                                        var w, S = P(x[C]);
                                        try {
                                            for (S.s(); !(w = S.n()).done; ) {
                                                var M = w.value, k = (s = A.score / p.score, o = 1, l = M.score / p.score, s * (1 - l) + o * l), I = (r = h[2] * Math.pow(.55, -(1 - k)), 
                                                i = .1, a = .9, Math.max(i, Math.min(a, r)));
                                                M.color = "hsl(".concat(h[0], ", ").concat(100 * h[1], "%, ").concat(100 * I, "%)");
                                            }
                                        } catch (t) {
                                            S.e(t);
                                        } finally {
                                            S.f();
                                        }
                                    }
                                }
                            } catch (t) {
                                d.e(t);
                            } finally {
                                d.f();
                            }
                        }
                    }
                },
                watch: {
                    hits: function() {
                        this.setColorScheme();
                    }
                }
            };
            var V = n(1900), z = (0, V.Z)(F, undefined, undefined, !1, null, null, null);
            z.options.__file = "frontend/ResultMixin.vue";
            const j = z.exports;
            var U = function() {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("v-container", {
                    attrs: {
                        "grid-list-md": "",
                        fluid: "",
                        "pa-2": ""
                    }
                }, [ r("v-layout", {
                    attrs: {
                        wrap: ""
                    }
                }, [ r("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [ r("panel", [ r("template", {
                    slot: "header"
                }, [ t.$LOCAL || t.hits && t.hits.query ? t.hits ? [ r("span", {
                    staticClass: "hidden-sm-and-down"
                }, [ t._v("Results: ") ]), t._v(" "), r("small", {
                    staticClass: "ticket"
                }, [ t._v(t._s(t.hits.query.header)) ]) ] : t._e() : [ r("span", {
                    staticClass: "hidden-sm-and-down"
                }, [ t._v("Results for job: ") ]), t._v(" "), r("small", {
                    staticClass: "ticket"
                }, [ t._v(t._s(t.ticket)) ]) ] ], 2), t._v(" "), t.$LOCAL || "PENDING" != t.resultState ? t.$LOCAL || "EMPTY" != t.resultState ? t.$LOCAL || "RESULT" == t.resultState ? t._e() : r("div", {
                    attrs: {
                        slot: "desc"
                    },
                    slot: "desc"
                }, [ r("v-container", {
                    attrs: {
                        "fill-height": "",
                        "grid-list-md": ""
                    }
                }, [ r("v-layout", {
                    attrs: {
                        "justify-center": ""
                    }
                }, [ r("v-flex", {
                    attrs: {
                        xs4: ""
                    }
                }, [ r("img", {
                    staticStyle: {
                        "max-width": "100%"
                    },
                    attrs: {
                        src: n(4833),
                        srcset: n(4833) + " 2x, " + n(5904) + " 3x"
                    }
                }) ]), t._v(" "), r("v-flex", {
                    attrs: {
                        xs8: ""
                    }
                }, [ r("h3", [ t._v("Error! ") ]), t._v(" "), r("p", [ t._v("Start a "), r("v-btn", {
                    attrs: {
                        to: "/search"
                    }
                }, [ t._v("New Search") ]), t._v("?") ], 1) ]) ], 1) ], 1) ], 1) : r("div", {
                    attrs: {
                        slot: "desc"
                    },
                    slot: "desc"
                }, [ r("v-container", {
                    attrs: {
                        "fill-height": "",
                        "grid-list-md": ""
                    }
                }, [ r("v-layout", {
                    attrs: {
                        "justify-center": ""
                    }
                }, [ r("v-flex", {
                    attrs: {
                        xs4: ""
                    }
                }, [ r("img", {
                    staticStyle: {
                        "max-width": "100%"
                    },
                    attrs: {
                        src: n(7969),
                        srcset: n(7969) + " 2x, " + n(5515) + " 3x"
                    }
                }) ]), t._v(" "), r("v-flex", {
                    attrs: {
                        xs8: ""
                    }
                }, [ r("h3", [ t._v("No hits found!") ]), t._v(" "), r("p", [ t._v("Start a "), r("v-btn", {
                    attrs: {
                        to: "/search"
                    }
                }, [ t._v("New Search") ]), t._v("?") ], 1) ]) ], 1) ], 1) ], 1) : r("div", {
                    attrs: {
                        slot: "desc"
                    },
                    slot: "desc"
                }, [ r("v-container", {
                    attrs: {
                        "fill-height": "",
                        "grid-list-md": ""
                    }
                }, [ r("v-layout", {
                    attrs: {
                        "justify-center": ""
                    }
                }, [ r("v-flex", {
                    attrs: {
                        xs4: ""
                    }
                }, [ r("img", {
                    staticStyle: {
                        "max-width": "100%"
                    },
                    attrs: {
                        src: n(4484),
                        srcset: n(4484) + " 2x, " + n(7940) + " 3x"
                    }
                }) ]), t._v(" "), r("v-flex", {
                    attrs: {
                        xs8: ""
                    }
                }, [ r("h3", [ t._v("Still Pending") ]), t._v(" "), r("p", [ t._v("Please wait a moment") ]) ]) ], 1) ], 1) ], 1), t._v(" "), "RESULT" == t.resultState && t.hits && t.hits.results ? r("template", {
                    slot: "content"
                }, [ r("v-menu", {
                    ref: "menuwrapper",
                    staticStyle: {
                        "z-index": "99999 !important"
                    },
                    attrs: {
                        "offset-y": "",
                        absolute: ""
                    },
                    scopedSlots: t._u([ {
                        key: "activator",
                        fn: function(e) {
                            var n = e.on;
                            e.attrs;
                            return [ r("div", {
                                staticStyle: {
                                    display: "none"
                                }
                            }, [ t._v(t._s(t.menuActivator = n)) ]) ];
                        }
                    } ], null, !1, 3471006822)
                }, [ t._v(" "), r("v-list", t._l(t.menuItems, (function(e, n) {
                    return r("v-list-item", {
                        key: n,
                        attrs: {
                            "two-line": "",
                            href: e.href,
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [ r("v-list-item-content", [ r("v-list-item-title", [ t._v(t._s(e.label)) ]), t._v(" "), r("v-list-item-subtitle", [ t._v("\n                                    " + t._s(e.accession) + "\n                                ") ]) ], 1) ], 1);
                })), 1) ], 1), t._v(" "), t.hits.results.length > 1 ? r("v-tabs", {
                    staticStyle: {
                        "margin-bottom": "2em"
                    },
                    attrs: {
                        color: t.selectedDatabases > 0 ? t.hits.results[t.selectedDatabases - 1].color : null,
                        "center-active": "",
                        grow: "",
                        "show-arrows": ""
                    },
                    on: {
                        change: function(e) {
                            return t.handleChangeDatabase();
                        }
                    },
                    model: {
                        value: t.selectedDatabases,
                        callback: function(e) {
                            t.selectedDatabases = e;
                        },
                        expression: "selectedDatabases"
                    }
                }, [ r("v-tab", [ t._v("All databases") ]), t._v(" "), t._l(t.hits.results, (function(e) {
                    return r("v-tab", {
                        key: e.db
                    }, [ t._v(t._s(e.db) + " (" + t._s(e.alignments ? Object.values(e.alignments).length : 0) + ")") ]);
                })) ], 2) : t._e(), t._v(" "), t._l(t.hits.results, (function(e, n) {
                    return 0 == t.selectedDatabases || n + 1 == t.selectedDatabases ? r("div", {
                        key: e.db
                    }, [ r("v-flex", {
                        staticClass: "d-flex",
                        style: {
                            "flex-direction": t.$vuetify.breakpoint.xsOnly ? "column" : null,
                            "align-items": "center"
                        }
                    }, [ r("h2", {
                        staticClass: "mr-auto",
                        staticStyle: {
                            "margin-top": "0.5em",
                            "margin-bottom": "1em",
                            display: "inline-block"
                        }
                    }, [ r("span", {
                        staticStyle: {
                            "text-transform": "uppercase"
                        }
                    }, [ t._v(t._s(e.db)) ]), t._v(" "), r("small", [ t._v(t._s(e.alignments ? Object.values(e.alignments).length : 0) + " hits") ]) ]), t._v(" "), e.hasTaxonomy && !t.isComplex ? r("v-btn", {
                        staticClass: "mr-2",
                        attrs: {
                            large: ""
                        },
                        on: {
                            click: function(n) {
                                return t.toggleSankeyVisibility(e.db);
                            }
                        }
                    }, [ t._v("\n                        " + t._s(t.isSankeyVisible[e.db] ? "Hide Taxonomy" : "Show Taxonomy") + "\n                    ") ]) : t._e(), t._v(" "), r("v-btn-toggle", {
                        attrs: {
                            mandatory: ""
                        },
                        model: {
                            value: t.tableMode,
                            callback: function(e) {
                                t.tableMode = e;
                            },
                            expression: "tableMode"
                        }
                    }, [ r("v-btn", [ t._v("\n                            Graphical\n                        ") ]), t._v(" "), r("v-btn", [ t._v("\n                            Numeric\n                        ") ]) ], 1) ], 1), t._v(" "), e.hasTaxonomy && t.isSankeyVisible[e.db] ? r("v-flex", {
                        staticClass: "mb-2"
                    }, [ r("SankeyDiagram", {
                        attrs: {
                            rawData: e.taxonomyreports[0],
                            db: e.db,
                            currentSelectedNodeId: t.localSelectedTaxId,
                            currentSelectedDb: t.selectedDb
                        },
                        on: {
                            selectTaxon: t.handleSankeySelect
                        }
                    }) ], 1) : t._e(), t._v(" "), r("table", {
                        staticClass: "v-table result-table",
                        staticStyle: {
                            position: "relativ",
                            "margin-bottom": "3em"
                        }
                    }, [ r("colgroup", [ t.isComplex ? [ r("col", {
                        staticStyle: {
                            width: "6.5%"
                        }
                    }), t._v(" "), r("col", {
                        staticStyle: {
                            width: "6.5%"
                        }
                    }) ] : t._e(), t._v(" "), r("col", {
                        staticStyle: {
                            width: "20%"
                        }
                    }), t._v(" "), e.hasDescription ? r("col", {
                        staticStyle: {
                            width: "30%"
                        }
                    }) : t._e(), t._v(" "), e.hasTaxonomy ? r("col", {
                        staticStyle: {
                            width: "20%"
                        }
                    }) : t._e(), t._v(" "), r("col", {
                        staticStyle: {
                            width: "6.5%"
                        }
                    }), t._v(" "), r("col", {
                        staticStyle: {
                            width: "6.5%"
                        }
                    }), t._v(" "), r("col", {
                        staticStyle: {
                            width: "8.5%"
                        }
                    }), t._v(" "), 0 == t.tableMode ? [ r("col", {
                        staticStyle: {
                            width: "26.5%"
                        }
                    }) ] : [ r("col", {
                        staticStyle: {
                            width: "6.5%"
                        }
                    }), t._v(" "), r("col", {
                        staticStyle: {
                            width: "10%"
                        }
                    }), t._v(" "), r("col", {
                        staticStyle: {
                            width: "10%"
                        }
                    }) ], t._v(" "), r("col", {
                        staticStyle: {
                            width: "10%"
                        }
                    }) ], 2), t._v(" "), r("thead", [ t.isComplex ? r("tr", [ r("th", {
                        staticStyle: {
                            "text-align": "center",
                            width: "10%",
                            "border-right": "1px solid #333",
                            "border-bottom": "1px solid #333"
                        },
                        attrs: {
                            colspan: "2"
                        }
                    }, [ t._v("Complex") ]), t._v(" "), r("th", {
                        staticStyle: {
                            "text-align": "center",
                            "border-bottom": "1px solid #333"
                        },
                        attrs: {
                            colspan: 6 + e.hasDescription + e.hasTaxonomy + (1 == t.tableMode ? 2 : 0)
                        }
                    }, [ t._v("Chain") ]) ]) : t._e(), t._v(" "), r("tr", [ t.isComplex ? [ r("th", {
                        staticClass: "thin"
                    }, [ t._v("qTM") ]), t._v(" "), r("th", {
                        staticClass: "thin",
                        staticStyle: {
                            "border-right": "1px solid #333"
                        }
                    }, [ t._v("tTM") ]) ] : t._e(), t._v(" "), r("th", {
                        class: "wide-" + (3 - e.hasDescription - e.hasTaxonomy)
                    }, [ t.isComplex ? [ t._v("\n                                    Chain paring\n                                ") ] : [ t._v("\n                                    Target\n                                ") ] ], 2), t._v(" "), e.hasDescription ? r("th", [ t._v("\n                                Description\n                                "), r("v-tooltip", {
                        attrs: {
                            "open-delay": "300",
                            top: ""
                        },
                        scopedSlots: t._u([ {
                            key: "activator",
                            fn: function(e) {
                                var n = e.on;
                                return [ r("v-icon", t._g({
                                    staticStyle: {
                                        "font-size": "16px",
                                        float: "right"
                                    }
                                }, n), [ t._v(t._s(t.$MDI.HelpCircleOutline)) ]) ];
                            }
                        } ], null, !0)
                    }, [ t._v(" "), r("span", [ t._v("Triple click to select whole cell (for very long identifiers)") ]) ]) ], 1) : t._e(), t._v(" "), e.hasTaxonomy ? r("th", [ t._v("Scientific Name") ]) : t._e(), t._v(" "), r("th", {
                        staticClass: "thin"
                    }, [ t._v("Prob.") ]), t._v(" "), r("th", {
                        staticClass: "thin"
                    }, [ t._v("Seq. Id.") ]), t._v(" "), r("th", {
                        staticClass: "thin"
                    }, [ t._v(t._s("foldseek" == t.$APP && "tmalign" == t.mode ? "TM-score" : "E-Value")) ]), t._v(" "), 1 == t.tableMode ? r("th", {
                        staticClass: "thin"
                    }, [ t._v("Score") ]) : t._e(), t._v(" "), 1 == t.tableMode ? r("th", [ t._v("Query Pos.") ]) : t._e(), t._v(" "), 1 == t.tableMode ? r("th", [ t._v("Target Pos.") ]) : t._e(), t._v(" "), 0 == t.tableMode ? r("th", [ t._v("\n                                Position in query\n                                "), r("v-tooltip", {
                        attrs: {
                            "open-delay": "300",
                            top: ""
                        },
                        scopedSlots: t._u([ {
                            key: "activator",
                            fn: function(e) {
                                var n = e.on;
                                return [ r("v-icon", t._g({
                                    staticStyle: {
                                        "font-size": "16px",
                                        float: "right"
                                    }
                                }, n), [ t._v(t._s(t.$MDI.HelpCircleOutline)) ]) ];
                            }
                        } ], null, !0)
                    }, [ t._v(" "), r("span", [ t._v("The position of the aligned region of the target sequence in the query") ]) ]) ], 1) : t._e(), t._v(" "), r("th", {
                        staticClass: "alignment-action thin"
                    }, [ t._v("Alignment") ]) ], 2) ]), t._v(" "), r("tbody", [ t._l(e.alignments, (function(n, i) {
                        return [ t._l(n, (function(i, a) {
                            return t.isGroupVisible(n) ? r("tr", {
                                class: [ "hit", {
                                    active: i.active
                                } ]
                            }, [ 0 == a && t.isComplex ? [ r("td", {
                                staticClass: "thin",
                                attrs: {
                                    "data-label": "Query TM-score",
                                    rowspan: n.length
                                }
                            }, [ t._v(t._s(n[0].complexqtm.toFixed(2))) ]), t._v(" "), r("td", {
                                staticClass: "thin",
                                attrs: {
                                    "data-label": "Target TM-score",
                                    rowspan: n.length
                                }
                            }, [ t._v(t._s(n[0].complexttm.toFixed(2))) ]) ] : t._e(), t._v(" "), r("td", {
                                staticClass: "db long",
                                style: {
                                    "border-width": t.isComplex ? "5px" : null,
                                    "border-color": e.color
                                },
                                attrs: {
                                    "data-label": "Target"
                                }
                            }, [ r("a", {
                                staticClass: "anchor",
                                staticStyle: {
                                    position: "absolute",
                                    top: "0"
                                },
                                attrs: {
                                    id: i.id
                                }
                            }), t._v(" "), t.isComplex ? [ t._v("\n                                    " + t._s(-1 != i.query.lastIndexOf("_") ? i.query.substring(i.query.lastIndexOf("_") + 1) : "") + " ➔ \n                                ") ] : t._e(), t._v(" "), Array.isArray(i.href) ? r("a", {
                                staticStyle: {
                                    "text-decoration": "underline",
                                    color: "#2196f3"
                                },
                                attrs: {
                                    rel: "noopener",
                                    title: i.target
                                },
                                on: {
                                    click: function(e) {
                                        return t.forwardDropdown(e, i.href);
                                    }
                                }
                            }, [ t._v(t._s(i.target)) ]) : r("a", {
                                attrs: {
                                    href: i.href,
                                    target: "_blank",
                                    rel: "noopener",
                                    title: i.target
                                }
                            }, [ t._v(t._s(i.target)) ]) ], 2), t._v(" "), e.hasDescription ? r("td", {
                                staticClass: "long",
                                attrs: {
                                    "data-label": "Description"
                                }
                            }, [ r("span", {
                                attrs: {
                                    title: i.description
                                }
                            }, [ t._v(t._s(i.description)) ]) ]) : t._e(), t._v(" "), e.hasTaxonomy ? r("td", {
                                staticClass: "long",
                                attrs: {
                                    "data-label": "Taxonomy"
                                }
                            }, [ r("a", {
                                attrs: {
                                    href: "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=" + i.taxId,
                                    target: "_blank",
                                    rel: "noopener",
                                    title: i.taxName
                                }
                            }, [ t._v(t._s(i.taxName)) ]) ]) : t._e(), t._v(" "), r("td", {
                                staticClass: "thin",
                                attrs: {
                                    "data-label": "Probability"
                                }
                            }, [ t._v(t._s(i.prob)) ]), t._v(" "), r("td", {
                                staticClass: "thin",
                                attrs: {
                                    "data-label": "Sequence Identity"
                                }
                            }, [ t._v(t._s(i.seqId)) ]), t._v(" "), r("td", {
                                staticClass: "thin",
                                attrs: {
                                    "data-label": "foldseek" == t.$APP && "tmalign" == t.mode ? "TM-score" : "E-Value"
                                }
                            }, [ t._v(t._s(i.eval)) ]), t._v(" "), 1 == t.tableMode ? r("td", {
                                staticClass: "thin",
                                attrs: {
                                    "data-label": "Score"
                                }
                            }, [ t._v(t._s(i.score)) ]) : t._e(), t._v(" "), 1 == t.tableMode ? r("td", {
                                attrs: {
                                    "data-label": "Query Position"
                                }
                            }, [ t._v(t._s(i.qStartPos) + "-" + t._s(i.qEndPos) + " (" + t._s(i.qLen) + ")") ]) : t._e(), t._v(" "), 1 == t.tableMode ? r("td", {
                                attrs: {
                                    "data-label": "Target Position"
                                }
                            }, [ t._v(t._s(i.dbStartPos) + "-" + t._s(i.dbEndPos) + " (" + t._s(i.dbLen) + ")") ]) : t._e(), t._v(" "), 0 == t.tableMode ? r("td", {
                                staticClass: "graphical",
                                attrs: {
                                    "data-label": "Position"
                                }
                            }, [ r("Ruler", {
                                attrs: {
                                    length: i.qLen,
                                    start: i.qStartPos,
                                    end: i.qEndPos,
                                    color: i.color,
                                    label: 0 == a
                                }
                            }) ], 1) : t._e(), t._v(" "), 0 == a ? r("td", {
                                staticClass: "alignment-action",
                                attrs: {
                                    rowspan: t.isComplex ? n.length : 1
                                }
                            }, [ r("button", {
                                staticClass: "v-btn v-btn--icon v-btn--round v-btn--text v-size--default",
                                class: {
                                    "v-btn--outlined": t.alignment && i.target == t.alignment.target,
                                    "theme--dark": t.$vuetify.theme.dark
                                },
                                attrs: {
                                    type: "button"
                                },
                                on: {
                                    click: function(r) {
                                        return t.showAlignment(n, e.db, r);
                                    }
                                }
                            }, [ r("span", {
                                staticClass: "v-btn__content"
                            }, [ r("span", {
                                staticClass: "v-icon notranslate theme--dark",
                                attrs: {
                                    "aria-hidden": "true"
                                }
                            }, [ r("svg", {
                                staticClass: "v-icon__svg",
                                attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    role: "img",
                                    "aria-hidden": "true"
                                }
                            }, [ r("path", {
                                attrs: {
                                    d: "M5,13H19V11H5M3,17H17V15H3M7,7V9H21V7"
                                }
                            }) ]) ]) ]) ]) ]) : t._e() ], 2) : t._e();
                        })), t._v(" "), t.isComplex ? r("tr", {
                            staticStyle: {
                                height: "15px"
                            },
                            attrs: {
                                "aria-hidden": "true"
                            }
                        }) : t._e() ];
                    })) ], 2) ]) ], 1) : t._e();
                })) ], 2) : t._e() ], 2) ], 1) ], 1), t._v(" "), r("portal", [ null != t.alignment ? r("panel", {
                    staticClass: "alignment",
                    style: "top: " + t.alnBoxOffset + "px;"
                }, [ r("AlignmentPanel", {
                    key: "ap-" + t.alignment.id,
                    attrs: {
                        slot: "content",
                        alignments: t.alignment,
                        lineLen: t.fluidLineLen,
                        hits: t.hits
                    },
                    slot: "content"
                }) ], 1) : t._e() ], 1) ], 1);
            };
            U._withStripped = !0;
            var $ = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    class: [ "panel-root", null != t.elevation ? "elevation-" + t.elevation : null ]
                }, [ t.$slots.header || t.header ? n("v-toolbar", {
                    attrs: {
                        text: "",
                        dense: "",
                        dark: ""
                    }
                }, [ t.collapsible ? n("v-btn", {
                    staticStyle: {
                        "margin-top": "0",
                        "margin-left": "-15px"
                    },
                    attrs: {
                        icon: "",
                        plain: "",
                        "aria-expanded": t.isCollapsed ? "false" : "true",
                        "aria-controls": t.uuid
                    },
                    on: {
                        click: function(e) {
                            t.isCollapsed = !t.isCollapsed;
                        }
                    }
                }, [ t.isCollapsed ? n("v-icon", [ t._v("\n                " + t._s(t.$MDI.PlusBox) + "\n            ") ]) : n("v-icon", [ t._v("\n                " + t._s(t.$MDI.MinusBox) + "\n            ") ]) ], 1) : t._e(), t._v(" "), n("span", {
                    staticClass: "text-h6 align-end"
                }, [ t.$slots.header ? t._t("header") : [ t._v(t._s(t.header)) ] ], 2), t._v(" "), n("v-spacer"), t._v(" "), t._t("toolbar-extra") ], 2) : t._e(), t._v(" "), !t.isCollapsed || t.renderCollapsed ? n("v-card", {
                    class: [ "panel", {
                        "d-flex": t.flex
                    }, {
                        "force-fill-height": t.fillHeight
                    } ],
                    style: [ {
                        display: t.isCollapsed ? "none !important" : null
                    } ],
                    attrs: {
                        rounded: "0",
                        id: t.uuid
                    }
                }, [ t.$slots.desc ? n("v-card-text", {
                    staticClass: "subheading justify"
                }, [ t._t("desc") ], 2) : t._e(), t._v(" "), t.$slots.content ? n("v-card-text", {
                    class: [ "panel-content", "justify", {
                        "d-flex": t.flex
                    } ]
                }, [ t._t("content") ], 2) : t._e() ], 1) : t._e() ], 1);
            };
            $._withStripped = !0;
            var G = 0;
            const H = {
                name: "panel",
                props: {
                    header: {
                        default: "",
                        type: String
                    },
                    fillHeight: {
                        default: !1,
                        type: Boolean
                    },
                    collapsible: {
                        default: !1,
                        type: Boolean
                    },
                    collapsed: {
                        default: !1,
                        type: Boolean
                    },
                    flex: {
                        default: !0,
                        type: Boolean
                    },
                    elevation: {
                        default: null,
                        type: Number
                    },
                    renderCollapsed: {
                        default: !1,
                        type: Boolean
                    }
                },
                data: function() {
                    return {
                        isCollapsed: this.collapsed
                    };
                },
                beforeCreate: function() {
                    this.uuid = "panel-" + G.toString(), G += 1;
                }
            };
            n(9146);
            var Q = n(3453), Z = n.n(Q), Y = n(920), W = n(5893), K = n(5255), J = n(4786), X = n(2515), tt = n(241), et = (0, 
            V.Z)(H, $, [], !1, null, "0d9b5935", null);
            Z()(et, {
                VBtn: Y.Z,
                VCard: W.Z,
                VCardText: K.ZB,
                VIcon: J.Z,
                VSpacer: X.Z,
                VToolbar: tt.Z
            }), et.options.__file = "frontend/Panel.vue";
            const nt = et.exports;
            var rt = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "alignment-panel",
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                }, [ n("div", {
                    staticClass: "alignment-wrapper-outer"
                }, [ n("div", {
                    staticStyle: {
                        "line-height": "1.2em",
                        display: "flex",
                        "flex-direction": "row",
                        width: "100%",
                        "justify-content": "space-between",
                        "margin-bottom": "1em"
                    }
                }, [ "foldseek" == t.$APP ? n("small", [ t._v("\n                Select target residues to highlight their structure."), n("br", {
                    staticStyle: {
                        height: "0.2em"
                    }
                }), t._v("\n                Click on highlighted sequences to dehighlight the corresponding chain.\n            ") ]) : t._e(), t._v(" "), n("v-btn", {
                    attrs: {
                        small: "",
                        title: "Clear sequence selection",
                        disabled: t.hasSelection
                    },
                    on: {
                        click: t.clearAllSelection
                    }
                }, [ t._v("\n                " + t._s(t.alignments[0].hasOwnProperty("complexu") ? "Clear all selections" : "Clear selection") + " \n                "), n("v-icon", {
                    staticStyle: {
                        width: "16px"
                    }
                }, [ t._v(t._s(t.$MDI.CloseCircle)) ]) ], 1) ], 1), t._v(" "), t._l(t.alignments, (function(e, r) {
                    return [ t._v("\n            " + t._s(-1 != e.query.lastIndexOf("_") ? e.query.substring(e.query.lastIndexOf("_") + 1) : "") + " ➔ " + t._s(e.target) + "\n            "), n("Alignment", {
                        key: "aln2-" + e.id,
                        ref: "alignments",
                        refInFor: !0,
                        attrs: {
                            alnIndex: r,
                            alignment: e,
                            lineLen: t.lineLen,
                            queryMap: t.queryMaps[r],
                            targetMap: t.targetMaps[r],
                            showhelp: r == t.alignments.length - 1,
                            highlights: t.highlights[r]
                        },
                        on: {
                            residueSelectStart: t.onResidueSelectStart,
                            residuePointerUp: t.onResiduePointerUp
                        }
                    }) ];
                })) ], 2), t._v(" "), "foldseek" == t.$APP ? n("div", {
                    staticClass: "alignment-structure-wrapper"
                }, [ n("StructureViewer", {
                    key: "struc2-" + t.alignments[0].id,
                    ref: "structureViewer",
                    attrs: {
                        alignments: t.alignments,
                        highlights: t.structureHighlights,
                        hits: t.hits,
                        bgColorLight: "white",
                        bgColorDark: "#1E1E1E",
                        qColor: "lightgrey",
                        tColor: "red",
                        qRepr: "cartoon",
                        tRepr: "cartoon"
                    }
                }) ], 1) : t._e() ]);
            };
            rt._withStripped = !0;
            var it = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "alignment-wrapper-inner",
                    attrs: {
                        id: t.alnIndex
                    }
                }, t._l(Math.max(1, Math.ceil(t.alignment.alnLength / t.lineLen)), (function(e) {
                    return n("span", {
                        key: e,
                        staticClass: "monospace"
                    }, [ n("span", {
                        ref: "lines",
                        refInFor: !0,
                        staticClass: "line",
                        attrs: {
                            id: e
                        }
                    }, [ n("span", [ t._v("Q " + t._s(t.padNumber(t.getQueryRowStartPos(e), (Math.max(t.alignment.qStartPos, t.alignment.dbStartPos) + t.alignment.alnLength + "").length, " "))) ]), t._v(" "), n("ResidueSpan", {
                        attrs: {
                            sequenceType: "query"
                        }
                    }, [ t._v(t._s(t.alignment.qAln.substring((e - 1) * t.lineLen, (e - 1) * t.lineLen + t.lineLen))) ]), n("br"), n("span", [ t._v(t._s(" ".repeat(3 + (Math.max(t.alignment.qStartPos, t.alignment.dbStartPos) + t.alignment.alnLength + "").length))) ]), n("span", {
                        staticClass: "residues diff"
                    }, [ t._v(t._s(t.formatAlnDiff(t.alignment.qAln.substring((e - 1) * t.lineLen, (e - 1) * t.lineLen + t.lineLen), t.alignment.dbAln.substring((e - 1) * t.lineLen, (e - 1) * t.lineLen + t.lineLen)))) ]), n("br"), n("span", [ t._v("T " + t._s(t.padNumber(t.getTargetRowStartPos(e), (Math.max(t.alignment.qStartPos, t.alignment.dbStartPos) + t.alignment.alnLength + "").length, " "))) ]), t._v(" "), n("ResidueSpan", {
                        attrs: {
                            sequenceType: "target",
                            selectionStart: t.getSelectionStart(e),
                            selectionEnd: t.getSelectionEnd(e)
                        },
                        on: {
                            selectstart: function(n) {
                                return t.onSelectStart(n, t.alnIndex, e);
                            },
                            pointerup: function(n) {
                                return t.onPointerUp(n, t.alnIndex, e);
                            }
                        }
                    }, [ t._v(t._s(t.alignment.dbAln.substring((e - 1) * t.lineLen, (e - 1) * t.lineLen + t.lineLen))) ]) ], 1), n("br") ]);
                })), 0);
            };
            it._withStripped = !0;
            var at = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.selectionStart || t.selectionEnd ? n("span", {
                    staticClass: "residues",
                    class: t.sequenceType,
                    on: {
                        pointerup: t.emitPointerUpEvent,
                        selectstart: t.emitSelectStartEvent
                    }
                }, [ n("span", [ t._v(t._s(t.$slots.default[0].text.slice(0, t.selectionStart))) ]), n("span", {
                    staticClass: "selected",
                    on: {
                        click: t.emitClickHighlight
                    }
                }, [ t._v(t._s(t.$slots.default[0].text.slice(t.selectionStart, t.selectionEnd))) ]), n("span", [ t._v(t._s(t.$slots.default[0].text.slice(t.selectionEnd, t.$slots.default[0].text.length))) ]) ]) : n("span", {
                    staticClass: "residues",
                    class: t.sequenceType,
                    on: {
                        pointerup: t.emitPointerUpEvent,
                        selectstart: t.emitSelectStartEvent
                    }
                }, [ t._t("default") ], 2);
            };
            at._withStripped = !0;
            const st = {
                name: "ResidueSpan",
                props: {
                    sequenceType: {
                        type: String
                    },
                    selectionStart: {
                        type: Number
                    },
                    selectionEnd: {
                        type: Number
                    }
                },
                methods: {
                    emitPointerUpEvent: function(t) {
                        this.$emit("pointerup", t);
                    },
                    emitSelectStartEvent: function(t) {
                        this.$emit("selectstart", t);
                    },
                    emitClickHighlight: function(t) {
                        this.$emit("clickHighlight", t);
                    }
                }
            };
            n(5367);
            var ot = (0, V.Z)(st, at, [], !1, null, null, null);
            ot.options.__file = "frontend/ResidueSpan.vue";
            const lt = ot.exports;
            var ct = [ "AG", "AS", "DE", "DN", "ED", "EK", "EQ", "FL", "FM", "FW", "FY", "GA", "HN", "HQ", "HY", "IL", "IM", "IV", "KE", "KQ", "KR", "LF", "LI", "LM", "LV", "MF", "MI", "ML", "MV", "ND", "NH", "NQ", "NS", "QE", "QH", "QK", "QN", "QR", "RK", "RQ", "SA", "SN", "ST", "TS", "VI", "VL", "VM", "WF", "WY", "YF", "YH", "YW" ];
            const dt = {
                props: [ "alignment", "lineLen", "queryMap", "targetMap", "showhelp", "alnIndex", "highlights" ],
                components: {
                    ResidueSpan: lt
                },
                methods: {
                    getSelectionStart: function(t) {
                        return t > 0 && t <= this.highlights.length ? this.highlights[t - 1][0] : 0;
                    },
                    getSelectionEnd: function(t) {
                        return t > 0 && t <= this.highlights.length ? this.highlights[t - 1][1] : 0;
                    },
                    getQueryIndex: function(t) {
                        return this.queryMap[t];
                    },
                    getTargetIndex: function(t) {
                        return this.targetMap[t];
                    },
                    getFirstResidueNumber: function(t, e) {
                        for (var n = this.lineLen * (e - 1); null === t[n]; ) n--;
                        return t[n];
                    },
                    getQueryRowStartPos: function(t) {
                        return this.getFirstResidueNumber(this.queryMap, t);
                    },
                    getTargetRowStartPos: function(t) {
                        return this.getFirstResidueNumber(this.targetMap, t);
                    },
                    formatAlnDiff: function(t, e) {
                        if (t.length != e.length) return "";
                        for (var n = "", r = 0; r < t.length; r++) t[r] == e[r] ? n += t[r] : -1 != ct.indexOf(t[r] + e[r]) ? n += "+" : n += " ";
                        return n;
                    },
                    padNumber: function(t, e, n) {
                        return Array(e - String(t).length + 1).join(n || "0") + t;
                    },
                    onSelectStart: function(t, e, n) {
                        this.$emit("residueSelectStart", t, e, n);
                    },
                    onPointerUp: function(t, e, n) {
                        this.$emit("residuePointerUp", t, e, n);
                    }
                }
            };
            n(603);
            var ut = (0, V.Z)(dt, it, [], !1, null, null, null);
            ut.options.__file = "frontend/Alignment.vue";
            function ht(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return pt(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pt(t, e);
                    }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(t);
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t;
                    },
                    e: function(t) {
                        o = !0, a = t;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function pt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function At(t) {
                var e, n = 0, r = ht(t.closest("span.residues").querySelectorAll("span"));
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        var i = e.value;
                        if (i === t) break;
                        n += i.textContent.length;
                    }
                } catch (t) {
                    r.e(t);
                } finally {
                    r.f();
                }
                return n;
            }
            function gt(t, e) {
                var n, r = 0, i = ht(t);
                try {
                    for (i.s(); !(n = i.n()).done; ) {
                        n.value === e && r++;
                    }
                } catch (t) {
                    i.e(t);
                } finally {
                    i.f();
                }
                return r;
            }
            const mt = {
                components: {
                    StructureViewer: function() {
                        return null;
                    },
                    Alignment: ut.exports
                },
                data: function() {
                    return {
                        queryMap: null,
                        targetMap: null,
                        highlights: [],
                        structureHighlights: [],
                        isSelecting: !1
                    };
                },
                props: {
                    alignments: {
                        type: Array,
                        required: !0
                    },
                    lineLen: {
                        type: Number,
                        required: !0
                    },
                    hits: {
                        type: Object
                    }
                },
                computed: {
                    hasSelection: function() {
                        return !this.structureHighlights.some((function(t) {
                            return null !== t;
                        }));
                    }
                },
                methods: {
                    getFirstResidueNumber: function(t, e) {
                        for (var n = this.lineLen * (e - 1); null === t[n]; ) n--;
                        return t[n];
                    },
                    getQueryRowStartPos: function(t, e) {
                        return this.getFirstResidueNumber(this.queryMaps[t], e);
                    },
                    getTargetRowStartPos: function(t, e) {
                        return this.getFirstResidueNumber(this.targetMaps[t], e);
                    },
                    setEmptyHighlight: function() {
                        var t = this;
                        this.highlights = this.alignments.map((function(e) {
                            return new Array(Math.ceil(e.qAln.length / t.lineLen)).fill([ void 0, void 0 ]);
                        }));
                    },
                    setEmptyStructureHighlight: function() {
                        this.structureHighlights = new Array(this.alignments.length).fill(null);
                    },
                    clearAllSelection: function() {
                        this.setEmptyHighlight(), this.setEmptyStructureHighlight();
                    },
                    setAlignmentSelection: function(t) {
                        this.setEmptyHighlight();
                        var e, n = ht(t);
                        try {
                            for (n.s(); !(e = n.n()).done; ) for (var r = (0, b.Z)(e.value, 6), i = r[0], a = r[1], s = r[2], o = r[3], l = r[4], c = (r[5], 
                            a); c <= o; c++) this.highlights[i][c] = c === a ? [ s, c === o ? l : this.lineLen ] : c === o ? [ 0, l ] : [ 0, this.lineLen ];
                        } catch (t) {
                            n.e(t);
                        } finally {
                            n.f();
                        }
                    },
                    updateMaps: function() {
                        if (this.alignments) {
                            this.queryMaps = [], this.targetMaps = [];
                            var t, e = ht(this.alignments);
                            try {
                                for (e.s(); !(t = e.n()).done; ) {
                                    var n = t.value;
                                    this.queryMaps.push(T(n.qStartPos, n.qAln)), this.targetMaps.push(T(n.dbStartPos, n.dbAln));
                                }
                            } catch (t) {
                                e.e(t);
                            } finally {
                                e.f();
                            }
                        }
                    },
                    onResidueSelectStart: function(t, e, n) {
                        this.isSelecting = !0, document.querySelector(".alignment-wrapper-outer").classList.add("inselection");
                    },
                    onResiduePointerUp: function(t, e, n) {
                        if (!this.isSelecting) {
                            var r = this.alignments[e];
                            return this.highlights.splice(e, 1, new Array(Math.ceil(r.qAln.length / this.lineLen)).fill([ void 0, void 0 ])), 
                            this.structureHighlights.splice(e, 1, null), void window.getSelection().removeAllRanges();
                        }
                        for (var i = window.getSelection(), a = [], s = "", o = null, l = null, c = 0, d = 0, u = {}, h = 0; h < i.rangeCount; h++) {
                            var p = i.getRangeAt(h);
                            l = p.startContainer.parentElement.closest(".alignment-wrapper-inner"), d = parseInt(l.id), 
                            c = parseInt(p.startContainer.parentElement.closest(".line").id);
                            var A = p.startContainer, g = p.endContainer, m = 3 === A.nodeType ? p.startOffset + At(A.parentElement) : 0, f = 3 === g.nodeType ? p.endOffset + At(g.parentElement) : this.lineLen;
                            if (o) {
                                if (l != o) {
                                    a.push([ parseInt(o.id), u, s ]), s = "", o = l;
                                    var v = p.startContainer.textContent.slice(0, m);
                                    u = {
                                        startLine: c,
                                        startOffset: m,
                                        seqStart: this.getTargetRowStartPos(d, c) + m - gt(v, "-")
                                    };
                                }
                            } else {
                                o = l;
                                var y = p.startContainer.textContent.slice(0, p.startOffset);
                                u = {
                                    startLine: c,
                                    startOffset: m,
                                    seqStart: this.getTargetRowStartPos(d, c) + m - gt(y, "-")
                                };
                            }
                            s += p.toString(), u.endLine = c, u.endOffset = f;
                        }
                        a.push([ parseInt(o.id), u, s ]);
                        for (var C = 0, x = a; C < x.length; C++) {
                            var w = (0, b.Z)(x[C], 3), S = w[0], M = w[1].seqStart, k = w[2];
                            this.structureHighlights.splice(S, 1, [ M, k.replace(/[-]/g, "").length ]);
                        }
                        this.setAlignmentSelection(a.map((function(t) {
                            var e = (0, b.Z)(t, 3), n = e[0], r = e[1];
                            return [ n, r.startLine - 1, r.startOffset, r.endLine - 1, r.endOffset, e[2].length ];
                        }))), this.resetUserSelect(), window.getSelection().removeAllRanges();
                    },
                    resetUserSelect: function() {
                        this.isSelecting = !1, document.querySelectorAll(".inselection").forEach((function(t) {
                            t.classList.remove("inselection");
                        }));
                    }
                },
                watch: {
                    alignment: function() {
                        this.updateMaps();
                    }
                },
                beforeMount: function() {
                    this.updateMaps(), this.setEmptyHighlight(), this.setEmptyStructureHighlight();
                }
            };
            n(5685), n(2237);
            var ft = (0, V.Z)(mt, rt, [], !1, null, "89abb500", null);
            Z()(ft, {
                VBtn: Y.Z,
                VIcon: J.Z
            }), ft.options.__file = "frontend/AlignmentPanel.vue";
            const bt = ft.exports;
            var vt = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "ruler"
                }, [ n("div", {
                    staticClass: "query",
                    class: {
                        reversed: t.reversed
                    },
                    style: {
                        left: t.queryLeft + "%",
                        right: t.queryRight + "%"
                    }
                }, [ n("div", {
                    staticClass: "chevron-start",
                    style: {
                        "background-color": t.color
                    }
                }), t._v(" "), n("div", {
                    staticClass: "chevron-mid",
                    style: {
                        "background-color": t.color
                    }
                }), t._v(" "), n("div", {
                    staticClass: "chevron-end",
                    style: {
                        "background-color": t.color
                    }
                }) ]), t._v(" "), n("div", {
                    staticClass: "tick-label",
                    style: {
                        left: t.queryLeft + "%"
                    }
                }, [ t._v(t._s(t.minStart)) ]), t._v(" "), n("div", {
                    staticClass: "tick-label",
                    style: {
                        right: t.queryRight + "%",
                        "margin-left": 0,
                        "margin-right": "-25px"
                    }
                }, [ t._v(t._s(t.maxEnd)) ]) ]);
            };
            vt._withStripped = !0;
            const yt = {
                props: {
                    length: Number,
                    start: Number,
                    end: Number,
                    color: String,
                    label: Boolean,
                    tickInterval: {
                        type: Number,
                        default: 10
                    }
                },
                computed: {
                    minStart: function() {
                        return Math.min(this.start, this.end);
                    },
                    maxEnd: function() {
                        return Math.max(this.start, this.end);
                    },
                    reversed: function() {
                        return this.start > this.end;
                    },
                    queryLeft: function() {
                        return (this.minStart - 1) / this.length * 100;
                    },
                    queryRight: function() {
                        return 100 - this.maxEnd / this.length * 100;
                    },
                    numTicks: function() {
                        return 3;
                    },
                    ticks: function() {
                        var t = this;
                        return Array.from({
                            length: this.numTicks + 1
                        }, (function(e, n) {
                            return n / t.numTicks * 100;
                        }));
                    }
                }
            };
            n(5941);
            var Ct = (0, V.Z)(yt, vt, [], !1, null, "2b7861b2", null);
            Ct.options.__file = "frontend/Ruler.vue";
            const xt = Ct.exports;
            var wt = function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "sankey-container"
                }, [ e("svg", {
                    ref: "sankeyContainer",
                    staticClass: "hide"
                }) ]);
            };
            wt._withStripped = !0;
            var St = n(5270), Mt = n(1743), kt = n(7929), It = n(3768), Tt = [ "root", "superkingdom", "kingdom", "phylum", "class", "order", "family", "genus", "species" ];
            const Et = {
                name: "SankeyDiagram",
                props: {
                    rawData: {
                        type: Array,
                        required: !0
                    },
                    currentSelectedNodeId: {
                        type: String,
                        default: null
                    },
                    db: {
                        type: String,
                        required: !0
                    },
                    currentSelectedDb: {
                        type: String,
                        default: null
                    }
                },
                data: function() {
                    return {
                        currentSelectedNode: null,
                        unclassifiedNodes: [],
                        sankeyRankColumns: Tt,
                        colors: [ "#57291F", "#C0413B", "#D77B5F", "#FF9200", "#FFCD73", "#F7E5BF", "#C87505", "#F18E3F", "#E59579", "#C14C32", "#80003A", "#506432", "#FFC500", "#B30019", "#EC410B", "#E63400", "#8CB5B5", "#6C3400", "#FFA400", "#41222A", "#FFB27B", "#FFCD87", "#BC7576" ]
                    };
                },
                watch: {
                    rawData: {
                        immediate: !0,
                        handler: function(t) {
                            var e = this;
                            this.$nextTick((function() {
                                t && e.createSankey(t);
                            }));
                        }
                    },
                    currentSelectedDb: {
                        immediate: !0,
                        handler: function(t) {
                            t !== this.db && (this.currentSelectedNode = null, this.createSankey(this.rawData));
                        }
                    }
                },
                methods: {
                    parseData: function(t) {
                        var e = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = [], i = [], a = [], s = {}, o = null;
                        if (this.unclassifiedNodes = [], t.forEach((function(t) {
                            var n = {
                                id: t.taxon_id,
                                taxon_id: t.taxon_id,
                                name: t.name,
                                rank: t.rank,
                                trueRank: t.rank,
                                hierarchy: t.depth,
                                proportion: parseFloat(t.proportion),
                                clade_reads: parseFloat(t.clade_reads),
                                taxon_reads: t.taxon_reads,
                                lineage: null,
                                type: ""
                            };
                            e.sankeyRankColumns.includes(t.rank) ? (s[t.rank] || (s[t.rank] = []), s[t.rank].push(n)) : e.isRootNode(n) ? (s.root = [ n ], 
                            n.rank = "root", o = n) : ("12908" === n.id && "unclassified sequences" === n.name || "28384" === n.id && "other sequences" === n.name) && e.unclassifiedNodes.push(n);
                            var r = a[a.length - 1];
                            if (r) for (var i = n.hierarchy, l = r.hierarchy; r && i <= l && (a.pop(), r = a[a.length - 1]); ) l = r.hierarchy;
                            a.push(n), n.lineage = [].concat(a);
                        })), this.sankeyRankColumns.forEach((function(t) {
                            if (s[t]) {
                                var e = s[t].sort((function(t, e) {
                                    return e.clade_reads - t.clade_reads;
                                })).slice(0, n ? s[t].length : 10);
                                r.push.apply(r, (0, f.Z)(e));
                            }
                        })), r.forEach((function(t) {
                            for (var n = t.lineage, a = n[n.length - 2]; a; ) {
                                var s = {
                                    sourceName: a.name,
                                    source: a.id,
                                    targetName: t.name,
                                    target: t.id,
                                    value: t.clade_reads
                                };
                                if (e.sankeyRankColumns.includes(a.rank) && r.includes(a)) {
                                    i.push(s);
                                    break;
                                }
                                a = n[n.indexOf(a) - 1];
                            }
                        })), o) {
                            var l = 0, c = 0;
                            i.filter((function(t) {
                                return t.source === o.id;
                            })).forEach((function(t) {
                                var e = r.find((function(e) {
                                    return e.id === t.target;
                                }));
                                l += e.clade_reads, c += e.proportion;
                            }));
                            var d = o.clade_reads - l;
                            if (d > 0) {
                                var u = {
                                    id: "",
                                    taxon_id: "",
                                    name: "Unclassified sequences",
                                    rank: this.sankeyRankColumns[this.sankeyRankColumns.indexOf(o.rank) + 1],
                                    trueRank: "unclassified",
                                    hierarchy: o.hierarchy + 1,
                                    proportion: o.proportion - c,
                                    clade_reads: d,
                                    taxon_reads: 0,
                                    lineage: [ o ],
                                    type: "unclassified"
                                };
                                u.lineage.push(u), r.push(u), i.push({
                                    sourceName: o.name,
                                    source: o.id,
                                    targetName: u.name,
                                    target: u.id,
                                    value: d
                                });
                            }
                        }
                        return {
                            nodes: r,
                            links: i
                        };
                    },
                    isRootNode: function(t) {
                        return 1 === parseInt(t.taxon_id);
                    },
                    createSankey: function(t) {
                        var e = this, n = this.parseData(t), r = n.nodes, i = n.links;
                        if (r.length && i.length) {
                            var a = this.$refs.sankeyContainer;
                            if (a && a.parentElement) {
                                St.Ys(a).selectAll("*").remove();
                                var s = a.parentElement.clientWidth, o = 450, l = St.Ys(a).attr("viewBox", "0 0 ".concat(s, " ").concat(500)).attr("width", "100%").attr("height", o).classed("hide", !1), c = (0, 
                                Mt.Z)().nodeId((function(t) {
                                    return t.id;
                                })).nodeAlign(kt.PT).nodeWidth(30).nodePadding(20).iterations(100).extent([ [ 10, 10 ], [ s - 70, 444 ] ]), d = c({
                                    nodes: r.map((function(t) {
                                        return Object.assign({}, t);
                                    })),
                                    links: i.map((function(t) {
                                        return Object.assign({}, t);
                                    }))
                                }), u = St.PKp().range(this.colors), h = "#696B7E", p = (s - 70) / this.sankeyRankColumns.length, A = this.sankeyRankColumns.reduce((function(t, e, n) {
                                    return t[e] = n * p + 10, t;
                                }), {});
                                d.nodes.forEach((function(t) {
                                    t.x0 = A[t.rank], t.x1 = t.x0 + c.nodeWidth(), "unclassified" === t.type ? t.color = h : t.color = u(t.id);
                                })), c.update(d);
                                var g = [ " ", "D", "K", "P", "C", "O", "F", "G", "S" ];
                                l.append("g").selectAll("text").data(this.sankeyRankColumns).enter().append("text").attr("x", (function(t) {
                                    return A[t] + c.nodeWidth() / 2;
                                })).attr("y", 475).attr("dy", "0.35em").attr("text-anchor", "middle").text((function(t, e) {
                                    return g[e];
                                })), l.append("line").attr("x1", 0).attr("y1", 460).attr("x2", s).attr("y2", 460).attr("stroke", "#000").attr("stroke-width", 1);
                                l.append("defs").selectAll("clipPath").data(d.links).enter().append("clipPath").attr("id", (function(t, n) {
                                    return "clip-path-".concat(e.instanceId, "-").concat(n);
                                })).append("rect").attr("x", (function(t) {
                                    return t.source.x1;
                                })).attr("y", 0).attr("width", (function(t) {
                                    return t.target.x0 - t.source.x1;
                                })).attr("height", o), l.append("g").attr("fill", "none").attr("stroke-opacity", .3).selectAll("path").data(d.links).enter().append("path").attr("d", (0, 
                                It.Z)()).attr("stroke", (function(t) {
                                    return "unclassified" === t.target.type ? h : u(t.source.color);
                                })).attr("stroke-width", (function(t) {
                                    return Math.max(1, t.width);
                                })).attr("clip-path", (function(t, n) {
                                    return "url(#clip-path-".concat(e.instanceId, "-").concat(n, ")");
                                }));
                                var m = l.append("g").selectAll(".node-group").data(d.nodes).enter().append("g").attr("class", (function(t) {
                                    return "node-group taxid-" + t.id;
                                })).attr("transform", (function(t) {
                                    return "translate(".concat(t.x0, ", ").concat(t.y0, ")");
                                })).on("mouseover", (function(t, e) {
                                    var n, r;
                                    n = e, (r = new Set(n.lineage.map((function(t) {
                                        return t.id;
                                    })))).add(n.id), l.selectAll("rect").style("opacity", (function(t) {
                                        return r.has(t.id) ? 1 : .2;
                                    })), l.selectAll("path").style("opacity", (function(t) {
                                        return r.has(t.source.id) && r.has(t.target.id) ? 1 : .2;
                                    })), l.selectAll(".label").style("opacity", (function(t) {
                                        return r.has(t.id) ? 1 : .1;
                                    })), l.selectAll(".clade-reads").style("opacity", (function(t) {
                                        return r.has(t.id) ? 1 : .1;
                                    })), St.Ys("body").append("div").attr("class", "tooltip").style("position", "absolute").style("background-color", "rgba(38, 50, 56, 0.95)").style("color", "white").style("border-radius", "8px").style("padding", "10px").style("box-shadow", "0 2px 6px rgba(0, 0, 0, 0.1)").style("opacity", 1).html('\n\t\t\t\t\t\t\t<div style="padding-top: 4px; padding-bottom: 4px; padding-left: 8px; padding-right: 8px;">\n\t\t\t\t\t\t\t\t'.concat("unclassified" !== e.type ? '<p style="font-size: 0.6rem; margin-bottom: 0px;">#'.concat(e.taxon_id, "</p>") : "", '\n\t\t\t\t\t\t\t\t<div style="display: flex; justify-content: space-between; align-items: center;">\n\t\t\t\t\t\t\t\t\t<div style="font-weight: bold; font-size: 0.875rem;">').concat(e.name, "</div>\n\t\t\t\t\t\t\t\t\t").concat("unclassified" !== e.type ? '<span style="background-color: rgba(255, 167, 38, 0.25); color: #ffa726; \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: bold; padding: 4px 8px; border-radius: 12px; \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 0.875rem; margin-left: 10px;">'.concat(e.trueRank, "</span>") : "", '\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<hr style="margin: 8px 0; border: none; border-top: 1px solid #fff; opacity: 0.2;">\n\t\t\t\t\t\t\t\t<div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem;">\n\t\t\t\t\t\t\t\t\t<div style="font-weight: bold;">Clade Reads</div>\n\t\t\t\t\t\t\t\t\t<div style="margin-left: 10px;">').concat(e.clade_reads, "</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t")).style("left", "".concat(t.pageX + 10, "px")).style("top", "".concat(t.pageY + 10, "px"));
                                })).on("mousemove", (function(t, e) {
                                    St.Ys(".tooltip").style("left", "".concat(t.pageX + 10, "px")).style("top", "".concat(t.pageY + 10, "px"));
                                })).on("mouseout", (function() {
                                    l.selectAll("rect").style("opacity", 1), l.selectAll("path").style("opacity", 1), 
                                    l.selectAll(".label").style("opacity", 1), l.selectAll(".clade-reads").style("opacity", 1), 
                                    St.Ys(".tooltip").remove();
                                })).on("click", (function(t, n) {
                                    if (l.selectAll("rect.node").style("stroke", null).style("stroke-width", null), 
                                    l.selectAll("text.label").style("font-weight", null), e.currentSelectedNode && e.currentSelectedNode.id === n.id) return e.currentSelectedNode = null, 
                                    void e.$emit("selectTaxon", {
                                        nodeId: null,
                                        descendantIds: null,
                                        db: e.db
                                    });
                                    St.Ys(".taxid-".concat(n.id, " rect")).style("stroke", "black").style("stroke-width", "2px"), 
                                    St.Ys(".taxid-".concat(n.id, " text.label")).style("font-weight", "bold");
                                    var r = function(t) {
                                        var n = [ t.taxon_id ];
                                        return n = n.concat(e.findChildren(e.rawData, t));
                                    }, i = [];
                                    "unclassified" === n.type ? (i.push("0"), e.unclassifiedNodes.forEach((function(t) {
                                        var e;
                                        (e = i).push.apply(e, (0, f.Z)(r(t)));
                                    }))) : i = r(n), e.currentSelectedNode = n, e.$emit("selectTaxon", {
                                        nodeId: n.taxon_id,
                                        descendantIds: i,
                                        db: e.db
                                    });
                                }));
                                m.append("rect").attr("width", (function(t) {
                                    return t.x1 - t.x0;
                                })).attr("height", (function(t) {
                                    return Math.max(1, t.y1 - t.y0);
                                })).attr("fill", (function(t) {
                                    return "unclassified" === t.type ? h : t.color;
                                })).attr("class", (function(t) {
                                    return "node taxid-" + t.id;
                                })).style("cursor", "pointer").style("stroke", (function(t) {
                                    return e.currentSelectedNodeId === t.id ? "black" : null;
                                })).style("stroke-width", (function(t) {
                                    return e.currentSelectedNodeId === t.id ? "2px" : "0px";
                                })), m.append("text").attr("id", (function(t) {
                                    return "nodeName-".concat(t.id);
                                })).attr("class", (function(t) {
                                    return "label taxid-" + t.id;
                                })).attr("x", (function(t) {
                                    return t.x1 - t.x0 + 3;
                                })).attr("y", (function(t) {
                                    return (t.y1 - t.y0) / 2;
                                })).attr("dy", "0.35em").attr("text-anchor", "start").text((function(t) {
                                    return t.name;
                                })).style("font-size", "9px").style("cursor", "pointer").style("font-weight", (function(t) {
                                    return "normal";
                                })), m.append("text").attr("id", (function(t) {
                                    return "cladeReads-".concat(t.id);
                                })).attr("class", "clade-reads").attr("x", (function(t) {
                                    return (t.x1 - t.x0) / 2;
                                })).attr("y", -4).attr("dy", "0.35em").attr("text-anchor", "middle").style("font-size", "9px").text((function(t) {
                                    return e.formatCladeReads(t.clade_reads);
                                })).style("cursor", "pointer");
                            }
                        } else console.warn("No data to create Sankey diagram");
                    },
                    formatCladeReads: function(t) {
                        return t >= 1e3 ? "".concat((t / 1e3).toFixed(2), "k") : t.toString();
                    },
                    findChildren: function(t, e) {
                        for (var n = [], r = !1, i = e.hierarchy, a = 0; a < t.length; a++) {
                            var s = t[a];
                            if (s.taxon_id !== e.taxon_id) {
                                if (r) {
                                    if (!(s.depth > i)) break;
                                    n.push(s.taxon_id);
                                }
                            } else r = !0;
                        }
                        return n;
                    },
                    throttle: function(t, e) {
                        var n = 0;
                        return function() {
                            var r = (new Date).getTime();
                            if (!(r - n < e)) return n = r, t.apply(void 0, arguments);
                        };
                    },
                    onResize: function() {
                        this.rawData && this.drawSankey(this.rawData);
                    },
                    mounted: function() {
                        window.addEventListener("resize", this.onResize);
                    },
                    beforeUnmount: function() {
                        window.removeEventListener("resize", this.onResize);
                    }
                }
            }, Rt = Et;
            n(1591);
            var Lt = (0, V.Z)(Rt, wt, [], !1, null, "36db98f6", null);
            Lt.options.__file = "frontend/SankeyDiagram.vue";
            function Nt(t) {
                for (var e = 0; t; ) e += t.offsetTop, t = t.offsetParent;
                return e;
            }
            var Ot, Bt, Dt, qt;
            const Pt = {
                name: "ResultView",
                components: {
                    Panel: nt,
                    AlignmentPanel: bt,
                    Ruler: xt,
                    SankeyDiagram: Lt.exports
                },
                data: function() {
                    return {
                        alignment: null,
                        activeTarget: null,
                        alnBoxOffset: 0,
                        selectedDatabases: 0,
                        isSankeyVisible: {},
                        selectedDb: null,
                        localSelectedTaxId: null,
                        filteredHitsTaxIds: [],
                        tableMode: 0,
                        menuActivator: null,
                        menuItems: []
                    };
                },
                props: {
                    ticket: "",
                    error: "",
                    hits: null,
                    selectedTaxId: null
                },
                created: function() {
                    window.addEventListener("resize", this.handleAlignmentBoxResize, {
                        passive: !0
                    });
                },
                beforeDestroy: function() {
                    window.removeEventListener("resize", this.handleAlignmentBoxResize);
                },
                computed: {
                    mode: function() {
                        var t, e;
                        return null !== (t = null === (e = this.hits) || void 0 === e ? void 0 : e.mode) && void 0 !== t ? t : "";
                    },
                    isComplex: function() {
                        var t;
                        return null != (null === (t = this.hits) || void 0 === t || null === (t = t.results) || void 0 === t || null === (t = t[0]) || void 0 === t || null === (t = t.alignments) || void 0 === t || null === (t = t[0]) || void 0 === t || null === (t = t[0]) || void 0 === t ? void 0 : t.complexqtm);
                    },
                    fluidLineLen: function() {
                        return this.$vuetify.breakpoint.xsOnly ? 30 : this.$vuetify.breakpoint.smAndDown ? 45 : this.$vuetify.breakpoint.mdAndDown ? 60 : 80;
                    },
                    resultState: function() {
                        if ("" != this.error) return "ERROR";
                        if (null == this.hits) return "PENDING";
                        if (!this.hits.results) return "ERROR";
                        if (0 == this.hits.results.length) return "EMPTY";
                        for (var t in this.hits.results) if (null != this.hits.results[t].alignments) return "RESULT";
                        return "ERROR";
                    }
                },
                watch: {
                    selectedTaxId: function(t) {
                        this.localSelectedTaxId = t, this.handleSankeySelect({
                            nodeId: t,
                            db: this.selectedDb
                        });
                    }
                },
                methods: {
                    log: function(t) {
                        return console.log(t), t;
                    },
                    showAlignment: function(t, e, n) {
                        var r = this;
                        this.alignment === t ? this.closeAlignment() : (this.alignment = null, this.$nextTick((function() {
                            t.map((function(t) {
                                return t.db = e;
                            })), r.alignment = t, r.activeTarget = n.target.closest(".alignment-action"), r.alnBoxOffset = Nt(r.activeTarget) + r.activeTarget.offsetHeight;
                        })));
                    },
                    closeAlignment: function() {
                        this.alignment = null, this.activeTarget = null;
                    },
                    handleAlignmentBoxResize: (Ot = function() {
                        null != this.activeTarget && (this.alnBoxOffset = Nt(this.activeTarget) + this.activeTarget.offsetHeight);
                    }, Bt = 32, Dt = !1, function() {
                        var t = this, e = arguments, n = Dt && !qt;
                        clearTimeout(qt), qt = setTimeout((function() {
                            qt = null, Dt || Ot.apply(t, e);
                        }), Bt), n && Ot.apply(t, e);
                    }),
                    forwardDropdown: function(t, e) {
                        this.menuActivator && (this.menuItems = e, this.menuActivator.click(t));
                    },
                    toggleSankeyVisibility: function(t) {
                        this.$set(this.isSankeyVisible, t, !this.isSankeyVisible[t]);
                    },
                    handleSankeySelect: function(t) {
                        var e = t.nodeId, n = t.descendantIds, r = t.db;
                        this.closeAlignment(), this.localSelectedTaxId = e, this.filteredHitsTaxIds = n ? n.map(Number) : null, 
                        this.selectedDb = r;
                    },
                    handleChangeDatabase: function() {
                        this.closeAlignment(), this.localSelectedTaxId = null, this.filteredHitsTaxIds = [];
                    },
                    isGroupVisible: function(t) {
                        var e = this;
                        return !this.filteredHitsTaxIds || 0 === this.filteredHitsTaxIds.length || t.filter((function(t) {
                            return e.filteredHitsTaxIds.includes(Number(t.taxId));
                        })).length > 0;
                    }
                }
            };
            n(5264);
            var _t = n(6584), Ft = n(6530), Vt = n(683), zt = n(9456), jt = n(2545), Ut = n(3347), $t = n(2641), Gt = n(245), Ht = n(756), Qt = n(7259), Zt = n(6640), Yt = (0, 
            V.Z)(Pt, U, [], !1, null, null, null);
            Z()(Yt, {
                VBtn: Y.Z,
                VBtnToggle: _t.Z,
                VContainer: Ft.Z,
                VFlex: Vt.Z,
                VIcon: J.Z,
                VLayout: zt.Z,
                VList: jt.Z,
                VListItem: Ut.Z,
                VListItemContent: $t.km,
                VListItemSubtitle: $t.oZ,
                VListItemTitle: $t.V9,
                VMenu: Gt.Z,
                VTab: Ht.Z,
                VTabs: Qt.Z,
                VTooltip: Zt.Z
            }), Yt.options.__file = "frontend/ResultView.vue";
            const Wt = Yt.exports;
            var Kt = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticStyle: {
                        overflow: "visible",
                        height: "100%"
                    }
                }, [ n("v-app-bar", {
                    attrs: {
                        app: "",
                        height: "48px",
                        fixed: "",
                        "clipped-left": ""
                    }
                }, [ n("img", {
                    attrs: {
                        height: "28px",
                        src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTAiIHZpZXdCb3g9IjAgMCA0NjggMzA2Ij48cGF0aCBkPSJNMzcyIDIwMnMxNC0xIDM3LTE5YzIzLTE3IDQwLTQ5IDU1LTU1bC0xMTQgMjQtNCAzMiAyNiAxOFoiIHN0eWxlPSJmaWxsOiNmN2QxOGE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik02MiAxMzlTODcgMjEgMjY5IDJsMSAxLTQ2IDYxcy00MC0zLTU1IDdjMCAwIDE5LTEzIDY5LTRzNTAtMjAgNTAtMjAgOCAyMiAwIDI5bDI5IDE0LTE4IDRzMTI1LTEyIDE2NyAzM2MwIDAtMjYgMTctNjAgMjAtNTYgNS02MiAyMi02MiAyMnMyNS0xMCA0MyA0bC0yMiA5czE1IDggMTUgMjNsLTI2IDEwczM2LTE4IDUyLTdsLTI0IDE4czIzIDMgMzggMTVsLTMyIDhzMTUgMiAyNyAzMWwtNDUtNnM3IDkgNCAzMGwtMjUtMjJzLTE3IDQ2LTE1OCAyQzQ5IDI0MCA1NiAyMjEgNTAgMTkxbC0yNi0xczItMTUgMTgtMjFMMiAxNDJzMjQtMTMgNDItOGwtOC0yNXMyOSAxMSAyNiAzMFoiIHN0eWxlPSJmaWxsOiNlMTMyMTM7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0xMDEgMjUzYy00Ni0yMyA4LTEzNCAzNy0xNTEgMjgtMTYgNTcgNyA2MyAxOSAwIDAgMjMtMTggNTctN3M0OSA0NyAzNiAxMTVjLTggNDEtMjQgNTgtMzUgNjUtNyA0LTE0IDUtMjEgMy0yNS02LTEwNS0yNy0xMzctNDRaIiBzdHlsZT0iZmlsbDojZjdkMThhO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0LjQ4cHgiLz48cGF0aCBkPSJNMTM2IDExMnMtNDEtMTAtNTYgMThjLTE1IDI3IDEyIDM4IDI3IDQzIDE2IDQgNDcgNCA1Ny0xM3MtMS0zOC0yOC00OFoiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0xMTYgMTYwYzE2IDggMzQtMzcgMjAtNDQtMTQtNi00MCAzNS0yMCA0NFoiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NC40OHB4Ii8+PHBhdGggZD0iTTI4NCAxNDhjLTQxLTE1LTU5IDUtNjUgMjJzMiA0NCA0MiA1MyA1MC00IDU2LTE5YzUtMTYgNi00MS0zMy01NloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0yNDggMTk5YzE5IDkgNDctNDEgMjMtNTJzLTQzIDQzLTIzIDUyWm0tODUtMTVjMS04IDIwLTEgMjAgNSAwIDctOSA4LTEyIDctNC0xLTktNi04LTEyWiIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0LjQ4cHgiLz48cGF0aCBkPSJNMTMyIDEyMGM3IDMtMiAxNS02IDEyczMtMTQgNi0xMlptMTI4IDMwYzcgMy0yIDE1LTYgMTItNC0yIDMtMTQgNi0xMloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm8iLz48cGF0aCBkPSJtMTE1IDIxMiA5LTRzLTggNyAwIDEzYzggNyAyNS00IDQ2LTEgMjEgNCA0MCAxOSA1NSAyMSAxNiAzIDI0IDEgMjMtNC0xLTYgNSA3IDUgNyIgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NC40OHB4Ii8+PC9zdmc+"
                    }
                }), t._v("\n         \n        "), n("v-app-bar-title", {
                    staticClass: "ml-2"
                }, [ t._v(t._s(t.title)) ]), t._v(" "), n("v-spacer"), t._v(" "), n("v-file-input", {
                    staticClass: "shrink",
                    staticStyle: {
                        position: "relative",
                        top: "30%"
                    },
                    attrs: {
                        id: "input-uploadData",
                        type: "file",
                        accept: "application/json",
                        placeholder: "Load JSON data file",
                        "single-line": "",
                        outlined: "",
                        filled: "",
                        flat: "",
                        dense: ""
                    },
                    on: {
                        change: t.uploadData
                    }
                }), t._v(" "), n("v-toolbar-items", [ n("v-btn", {
                    attrs: {
                        text: ""
                    },
                    on: {
                        click: t.downloadData
                    }
                }, [ n("v-icon", [ t._v("\n                    " + t._s(t.$MDI.FileDownloadOutline) + "\n                ") ]) ], 1), t._v(" "), t._l(t.$STRINGS.NAV_URL_COUNT - 0, (function(e) {
                    return n("v-btn", {
                        key: e,
                        staticClass: "hidden-sm-and-down",
                        attrs: {
                            text: "",
                            rel: "external noopener",
                            target: "_blank",
                            href: t.$STRINGS["NAV_URL_" + e]
                        }
                    }, [ t._v(t._s(t.$STRINGS["NAV_TITLE_" + e])) ]);
                })) ], 2) ], 1), t._v(" "), t.hasMainContent ? [ t._t("default") ] : [ n("v-container", {
                    attrs: {
                        "grid-list-md": "",
                        fluid: "",
                        "pa-2": ""
                    }
                }, [ n("v-layout", {
                    attrs: {
                        wrap: ""
                    }
                }, [ n("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [ n("v-card", {
                    attrs: {
                        rounded: "0"
                    }
                }, [ n("v-card-title", {
                    staticClass: "mb-0 pa-4",
                    attrs: {
                        "primary-title": ""
                    }
                }, [ t._v("\n                            No data loaded\n                        ") ]) ], 1) ], 1) ], 1) ], 1) ], t._v(" "), n("v-container", {
                    staticStyle: {
                        "margin-bottom": "500px"
                    },
                    attrs: {
                        "grid-list-md": "",
                        fluid: "",
                        "pa-2": ""
                    }
                }, [ n("v-layout", {
                    attrs: {
                        wrap: ""
                    }
                }, [ n("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [ n("v-card", {
                    attrs: {
                        rounded: "0"
                    }
                }, [ n("v-card-title", {
                    staticClass: "pb-0 mb-0",
                    attrs: {
                        "primary-title": ""
                    }
                }, [ n("div", {
                    staticClass: "text-h5 mb-0"
                }, [ t._v("Reference") ]) ]), t._v(" "), n("v-card-title", {
                    staticClass: "pt-0 mt-0",
                    attrs: {
                        "primary-title": ""
                    }
                }, [ n("p", {
                    staticClass: "text-subtitle-2 mb-0",
                    domProps: {
                        innerHTML: t._s(t.$STRINGS.CITATION)
                    }
                }) ]) ], 1) ], 1) ], 1) ], 1) ], 2);
            };
            Kt._withStripped = !0;
            const Jt = {
                props: {
                    title: {
                        type: String,
                        required: !0
                    }
                },
                computed: {
                    hasMainContent: function() {
                        return void 0 !== this.$slots.default && this.$slots.default.length > 0;
                    }
                },
                methods: {
                    uploadData: function(t) {
                        var e = this;
                        if (t) {
                            var n = new FileReader;
                            n.addEventListener("load", (function(t) {
                                var n = JSON.parse(t.target.result);
                                e.$emit("uploadData", n);
                            })), n.readAsText(t);
                        }
                    },
                    downloadData: function() {
                        this.$emit("downloadData");
                    }
                }
            };
            n(4869), n(55);
            var Xt = n(1690), te = n(8895), ee = n(9955), ne = n(3845), re = (0, V.Z)(Jt, Kt, [], !1, null, "1e22231c", null);
            Z()(re, {
                VAppBar: Xt.Z,
                VAppBarTitle: te.Z,
                VBtn: Y.Z,
                VCard: W.Z,
                VCardTitle: K.EB,
                VContainer: Ft.Z,
                VFileInput: ee.Z,
                VFlex: Vt.Z,
                VIcon: J.Z,
                VLayout: zt.Z,
                VSpacer: X.Z,
                VToolbarItems: ne.lj
            }), re.options.__file = "frontend/Local.vue";
            const ie = re.exports, ae = {
                name: "ResultLocal",
                mixins: [ j ],
                components: {
                    ResultView: Wt,
                    Local: ie
                },
                data: function() {
                    return {
                        currentIndex: 0
                    };
                },
                mounted: function() {
                    var t = this;
                    document.onreadystatechange = function() {
                        if ("complete" == document.readyState) {
                            var e = document.getElementById("data");
                            if (!e) return null;
                            var n = JSON.parse(e.textContent);
                            t.fetchData(n);
                        }
                    };
                },
                computed: {
                    appTitle: function() {
                        return "".concat(__STRINGS__.APP_NAME, " Search");
                    },
                    currentResult: function() {
                        return null === this.hits ? null : this.hits[this.currentIndex];
                    },
                    currentQuery: function() {
                        return null === this.hits ? "" : this.hits[this.currentIndex].query.header;
                    }
                },
                methods: {
                    changeResult: function(t) {
                        this.currentIndex = t, this.setColorScheme();
                    },
                    handleUploadData: function(t) {
                        this.fetchData(t);
                    },
                    handleDownloadData: function() {
                        if (!this.hits) return null;
                        I(this.hits, "".concat("foldmason", "-").concat(k(), ".json"));
                    },
                    resetProperties: function() {
                        this.ticket = "", this.error = "", this.mode = "", this.hits = null, this.selectedDatabases = 0, 
                        this.tableMode = 0;
                    },
                    fetchData: function(t) {
                        this.resetProperties(), this.hits = function(t) {
                            var e, n = [], r = y(t);
                            try {
                                for (r.s(); !(e = r.n()).done; ) {
                                    var i = e.value;
                                    n.push(M(i));
                                }
                            } catch (t) {
                                r.e(t);
                            } finally {
                                r.f();
                            }
                            return n;
                        }(t);
                    }
                }
            };
            n(2556), n(4568);
            var se = (0, V.Z)(ae, m, [], !1, null, "54679682", null);
            Z()(se, {
                VTab: Ht.Z,
                VTabs: Qt.Z
            }), se.options.__file = "frontend/ResultLocal.vue";
            const oe = se.exports;
            var le = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("Local", {
                    attrs: {
                        title: "FoldMason Results"
                    },
                    on: {
                        uploadData: t.handleUploadData,
                        downloadData: t.handleDownloadData
                    },
                    scopedSlots: t._u([ {
                        key: "default",
                        fn: function() {
                            return [ t.entries.length > 0 ? n("MSA", {
                                key: t.key,
                                attrs: {
                                    entries: t.entries,
                                    scores: t.scores,
                                    statistics: t.statistics,
                                    tree: t.tree
                                }
                            }) : t._e() ];
                        },
                        proxy: !0
                    } ])
                });
            };
            le._withStripped = !0;
            var ce = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", [ n("v-container", {
                    staticStyle: {
                        overflow: "visible",
                        height: "100%"
                    },
                    attrs: {
                        fluid: "",
                        "pa-2": ""
                    }
                }, [ n("v-row", [ n("v-col", {
                    staticClass: "flex-col"
                }, [ n("v-card", {
                    staticStyle: {
                        height: "100%"
                    }
                }, [ n("v-card-title", [ t._v("Summary") ]), t._v(" "), n("v-card-text", [ n("v-simple-table", {
                    staticClass: "settings auto-height-table",
                    staticStyle: {
                        height: "100%"
                    },
                    attrs: {
                        id: "settings"
                    }
                }, [ n("tbody", [ t.$LOCAL && t.statistics.hasOwnProperty("db") ? n("tr", [ n("td", [ t._v("Database") ]), t._v(" "), n("td", {
                    attrs: {
                        id: "msa-database"
                    }
                }, [ t._v(t._s(t.statistics.db)) ]) ]) : t._e(), t._v(" "), t.$LOCAL && t.statistics.hasOwnProperty("msaFile") ? n("tr", [ n("td", [ t._v("MSA file") ]), t._v(" "), n("td", {
                    attrs: {
                        id: "msa-file"
                    }
                }, [ t._v(t._s(t.statistics.msaFile)) ]) ]) : t._e(), t._v(" "), t.statistics.hasOwnProperty("msaLDDT") ? n("tr", [ n("td", [ t._v("MSA LDDT") ]), t._v(" "), n("td", {
                    attrs: {
                        id: "msa-lddt"
                    }
                }, [ t._v(t._s(t.statistics.msaLDDT.toFixed(3))) ]) ]) : t._e(), t._v(" "), t.statistics.hasOwnProperty("cmdString") ? n("tr", [ n("td", [ t._v("Command") ]), t._v(" "), n("td", {
                    attrs: {
                        id: "msa-cmd"
                    }
                }, [ t._v(t._s(t.statistics.cmdString)) ]) ]) : t._e() ]) ]) ], 1) ], 1) ], 1), t._v(" "), t.tree ? n("v-col", {
                    staticClass: "flex-col"
                }, [ n("v-card", {
                    staticClass: "fill-height",
                    staticStyle: {
                        position: "relative"
                    }
                }, [ n("v-card-title", {
                    staticStyle: {
                        position: "absolute",
                        left: "0",
                        top: "0",
                        margin: "0",
                        padding: "16px",
                        "z-index": "1"
                    }
                }, [ t._v("Guide Tree") ]), t._v(" "), n("Tree", {
                    attrs: {
                        newick: t.tree,
                        order: t.entries.map((function(t) {
                            return t.name;
                        })),
                        selection: t.structureViewerSelection.map((function(e) {
                            return t.entries[e].name;
                        })),
                        reference: t.structureViewerReference
                    },
                    on: {
                        newStructureSelection: t.handleNewStructureViewerSelection,
                        newStructureReference: t.handleNewStructureViewerReference
                    }
                }) ], 1) ], 1) : t._e(), t._v(" "), n("v-col", {
                    staticClass: "flex-col"
                }, [ n("v-card", {
                    staticClass: "fill-height",
                    staticStyle: {
                        position: "relative"
                    }
                }, [ n("v-card-title", {
                    staticStyle: {
                        position: "absolute",
                        left: "0",
                        top: "0",
                        margin: "0",
                        padding: "16px",
                        "z-index": "1"
                    }
                }, [ t._v("Structure") ]), t._v(" "), t.structureViewerSelection ? n("div", {
                    staticStyle: {
                        padding: "10px",
                        height: "100%",
                        width: "100%"
                    }
                }, [ n("StructureViewerMSA", {
                    attrs: {
                        entries: t.entries,
                        selection: t.structureViewerSelection,
                        reference: t.structureViewerReference,
                        mask: t.mask
                    },
                    on: {
                        loadingChange: t.handleStructureLoadingChange,
                        columnSelected: function(e) {
                            t.selectedColumn = e;
                        }
                    }
                }) ], 1) : n("v-card-text", [ t._v("\n                        No structures loaded.\n                    ") ]) ], 1) ], 1) ], 1), t._v(" "), n("v-card", {
                    staticClass: "minimap fill-height"
                }, [ t.cssGradients ? n("v-row", {
                    staticStyle: {
                        "align-items": "center"
                    },
                    attrs: {
                        dense: ""
                    }
                }, [ n("v-col", {
                    staticStyle: {
                        "max-width": "fit-content",
                        "margin-right": "4px",
                        position: "relative"
                    },
                    attrs: {
                        align: "center",
                        "no-gutters": ""
                    }
                }, [ n("div", {
                    staticStyle: {
                        display: "flex",
                        "flex-direction": "row"
                    }
                }, [ n("div", {
                    staticClass: "input-div-wrapper expansion-panel",
                    class: {
                        "is-expanded": t.settingsPanelOpen
                    }
                }, [ n("div", {
                    staticClass: "input-div"
                }, [ n("label", {
                    staticClass: "input-label",
                    attrs: {
                        title: "Toggle between AA and 3Di alphabets"
                    }
                }, [ t._v("Alphabet") ]), t._v(" "), n("v-btn-toggle", {
                    attrs: {
                        dense: "",
                        mandatory: "",
                        color: "primary"
                    },
                    model: {
                        value: t.alphabet,
                        callback: function(e) {
                            t.alphabet = e;
                        },
                        expression: "alphabet"
                    }
                }, [ n("v-btn", {
                    staticStyle: {
                        width: "40px"
                    },
                    attrs: {
                        "x-small": "",
                        value: "aa"
                    }
                }, [ t._v("AA") ]), t._v(" "), n("v-btn", {
                    staticStyle: {
                        width: "40px"
                    },
                    attrs: {
                        "x-small": "",
                        value: "ss"
                    }
                }, [ t._v("3Di") ]) ], 1) ], 1), t._v(" "), n("div", {
                    staticClass: "input-div"
                }, [ n("label", {
                    staticClass: "input-label",
                    attrs: {
                        title: "Hide columns with percentage of gaps above this cutoff"
                    }
                }, [ t._v("Gaps") ]), t._v(" "), n("v-text-field", {
                    staticStyle: {
                        "max-width": "80px",
                        "max-height": "20px"
                    },
                    attrs: {
                        label: "0.0",
                        default: "0.00",
                        type: "number",
                        min: "0",
                        max: "1",
                        step: "0.01",
                        "single-line": "",
                        "hide-details": "",
                        solo: "",
                        flat: "",
                        dense: ""
                    },
                    model: {
                        value: t.matchRatio,
                        callback: function(e) {
                            t.matchRatio = e;
                        },
                        expression: "matchRatio"
                    }
                }) ], 1), t._v(" "), n("div", {
                    staticClass: "input-div"
                }, [ n("label", {
                    staticClass: "input-label",
                    attrs: {
                        title: "Toggle between per-column LDDT and 3Di score matrix-based colorschemes"
                    }
                }, [ t._v("Colours") ]), t._v(" "), n("v-btn-toggle", {
                    attrs: {
                        dense: "",
                        mandatory: "",
                        color: "primary"
                    },
                    model: {
                        value: t.colorScheme,
                        callback: function(e) {
                            t.colorScheme = e;
                        },
                        expression: "colorScheme"
                    }
                }, [ n("v-btn", {
                    staticStyle: {
                        width: "40px"
                    },
                    attrs: {
                        "x-small": "",
                        value: "lddt"
                    }
                }, [ t._v("LDDT") ]), t._v(" "), n("v-btn", {
                    staticStyle: {
                        width: "40px"
                    },
                    attrs: {
                        "x-small": "",
                        value: "3di"
                    }
                }, [ t._v("3Di") ]) ], 1) ], 1) ]), t._v(" "), n("div", {
                    staticStyle: {
                        position: "relative",
                        display: "flex",
                        "justify-content": "center",
                        "align-items": "center",
                        width: "fit-content",
                        height: "80px"
                    }
                }, [ n("v-btn", {
                    staticClass: "toggle-button",
                    attrs: {
                        small: "",
                        icon: "",
                        title: "Toggle MSA viewing options"
                    },
                    on: {
                        click: t.toggleSettingsPanel
                    }
                }, [ n("v-icon", [ t._v(t._s(t.settingsBtnIcon)) ]) ], 1) ], 1) ]) ]), t._v(" "), n("v-col", {
                    staticClass: "minimap-col"
                }, t._l(t.cssGradients, (function(e, r) {
                    return n("div", {
                        key: "col-" + r,
                        staticClass: "gradient-block-col",
                        style: t.minimapBlock(r),
                        on: {
                            click: function(e) {
                                return t.handleMapBlockClick(r);
                            }
                        }
                    }, [ n("div", {
                        staticClass: "gradient-block"
                    }, t._l(e, (function(t, e) {
                        return n("div", {
                            key: "gradient-" + e,
                            staticClass: "gradient-row",
                            style: {
                                "background-image": t
                            }
                        });
                    })), 0) ]);
                })), 0) ], 1) : t._e() ], 1), t._v(" "), n("v-card", {
                    attrs: {
                        "pa-2": ""
                    }
                }, [ n("MSAView", {
                    ref: "msaView",
                    attrs: {
                        entries: t.msaViewEntries,
                        scores: t.msaViewScores,
                        alnLen: t.alnLen,
                        alphabet: t.alphabet,
                        colorScheme: t.colorScheme,
                        selectedStructures: t.structureViewerSelection,
                        referenceStructure: t.structureViewerReference,
                        matchRatio: parseFloat(t.matchRatio),
                        mask: t.mask,
                        highlightColumn: t.selectedColumn
                    },
                    on: {
                        cssGradients: t.handleCSSGradient,
                        lineLen: t.handleLineLen,
                        newStructureSelection: t.handleNewStructureViewerSelection,
                        newStructureReference: t.handleNewStructureViewerReference
                    }
                }) ], 1) ], 1) ], 1);
            };
            ce._withStripped = !0;
            var de = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    ref: "msaWrapper",
                    staticClass: "msa-wrapper"
                }, t._l(t.blockRanges, (function(e, r) {
                    var i = e[0], a = e[1];
                    return n("div", {
                        staticClass: "msa-block"
                    }, [ t._l(t.getEntryRanges(i, a), (function(e, r) {
                        var s = e.name, o = e.aa, l = e.ss, c = e.seqStart, d = e.css;
                        return [ n("span", {
                            staticClass: "header",
                            style: t.headerStyle(r),
                            attrs: {
                                title: s
                            },
                            on: {
                                click: function(e) {
                                    return t.handleClickHeader(e, r);
                                }
                            }
                        }, [ t._v(t._s(s)) ]), t._v(" "), n("div", {
                            staticClass: "sequence-wrapper"
                        }, [ n("span", {
                            staticClass: "sequence",
                            style: d,
                            domProps: {
                                innerHTML: t._s(t.insertHighlight("aa" === t.alphabet ? o : l, i, a))
                            }
                        }) ]), t._v(" "), n("span", {
                            staticClass: "count"
                        }, [ t._v(t._s(t.countSequence(o, c).toString())) ]) ];
                    })) ], 2);
                })), 0);
            };
            de._withStripped = !0;
            var ue = n(4942), he = function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "canvas-wrapper"
                }, [ e("canvas", {
                    ref: "canvas"
                }) ]);
            };
            function pe(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return Ae(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ae(t, e);
                    }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(t);
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t;
                    },
                    e: function(t) {
                        o = !0, a = t;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function Ae(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            he._withStripped = !0;
            const ge = {
                props: {
                    sequences: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    alphabet: {
                        type: String,
                        default: "aa"
                    },
                    lineLen: {
                        type: Number
                    },
                    width: {
                        type: Number
                    }
                },
                watch: {
                    sequences: function(t) {
                        var e = this.$refs.canvas, n = e.getContext("2d");
                        n.clearRect(0, 0, e.width, e.height);
                        for (var r = function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "aa";
                            if (0 !== t.length) {
                                for (var n = [], r = t[0].aa.length, i = t.length, a = Math.log(20) - 1 / Math.log(2) * 19 / (2 * i), s = 0; s < r; s++) {
                                    for (var o = [], l = 0; l < i; l++) {
                                        var c = t[l][e][s];
                                        "-" !== c && (void 0 !== o[c] ? o[c]++ : o[c] = 1);
                                    }
                                    var d = 0;
                                    for (var u in o) o[u] = o[u] / i, d -= o[u] * Math.log(o[u]);
                                    var h = Math.abs(a - d), p = [];
                                    for (var A in o) p.push([ A, o[A] * h ]);
                                    p.sort((function(t, e) {
                                        return t[1] > e[1] ? 1 : -1;
                                    })), n.push(p);
                                }
                                return n;
                            }
                        }(t, this.alphabet), i = r.map((function(t) {
                            return t.reduce((function(t, e) {
                                var n = (0, b.Z)(e, 2);
                                n[0];
                                return t + n[1];
                            }), 0);
                        })), a = Math.max.apply(Math, (0, f.Z)(i)), s = 10, o = e.width / this.lineLen, l = 0; l < r.length; l++) {
                            var c, d = e.height, u = pe(r[l]);
                            try {
                                for (u.s(); !(c = u.n()).done; ) {
                                    var h = (0, b.Z)(c.value, 2), p = h[0], A = h[1] / a * e.height;
                                    n.save(), n.translate(s, d), n.scale(1, A / 16), n.fillStyle = this.$vuetify.theme.dark ? "white" : "black", 
                                    n.fillText(p, 0, 0), n.restore(), d -= A;
                                }
                            } catch (t) {
                                u.e(t);
                            } finally {
                                u.f();
                            }
                            s += o;
                        }
                    }
                },
                mounted: function() {
                    var t = this.$refs.canvas, e = t.getContext("2d");
                    t.width = 16 * this.lineLen, t.height = 100, e.font = "16px monospace", e.fillStyle = "red", 
                    e.clearRect(0, 0, t.width, t.height);
                }
            };
            n(5877);
            var me = (0, V.Z)(ge, he, [], !1, null, null, null);
            me.options.__file = "frontend/SequenceLogo.vue";
            const fe = me.exports;
            function be(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return ve(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ve(t, e);
                    }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(t);
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t;
                    },
                    e: function(t) {
                        o = !0, a = t;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function ve(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            var ye = {
                A: "#df9a8c",
                C: "#fb72c5",
                D: "#b4a3d8",
                E: "#ff5701",
                F: "#d99e81",
                G: "#7491c5",
                H: "#94abe1",
                I: "#609d7b",
                K: "#d7a304",
                L: "#fe4c8b",
                M: "#12a564",
                N: "#d570fd",
                P: "#cb99c4",
                Q: "#da8e99",
                R: "#9487d0",
                S: "#e842fe",
                T: "#42a299",
                V: "#fb7edd",
                W: "#d1a368",
                Y: "#17a8fd",
                X: "#c0c0c0",
                "-": "#ffffff"
            };
            const Ce = {
                components: (0, ue.Z)({
                    SequenceLogo: fe
                }, "SequenceLogo", fe),
                data: function() {
                    return {
                        lineLen: 80,
                        headerLen: null,
                        countLen: null,
                        resizeObserver: null
                    };
                },
                props: {
                    matchRatio: Number,
                    entries: Array,
                    scores: Array,
                    alnLen: Number,
                    alphabet: String,
                    mask: {
                        type: Array
                    },
                    selectedStructures: {
                        type: Array,
                        required: !1
                    },
                    referenceStructure: {
                        type: Number
                    },
                    colorScheme: {
                        type: String,
                        default: "lddt"
                    },
                    maxHeaderWidth: {
                        type: Number,
                        default: 30
                    },
                    highlightColumn: {
                        type: Number,
                        default: -1
                    }
                },
                mounted: function() {
                    this.resizeObserver = new ResizeObserver(O(this.handleResize, 100)).observe(this.$refs.msaWrapper), 
                    this.handleUpdateEntries(), this.handleResize(), this.emitGradients();
                },
                updated: function() {
                    this.handleResize(), this.emitGradients();
                },
                beforeDestroy: function() {
                    this.resizeObserver && this.resizeObserver.disconnect();
                },
                watch: {
                    entries: function() {
                        this.handleUpdateEntries();
                    },
                    lineLen: function() {
                        this.$emit("lineLen", this.lineLen);
                    }
                },
                computed: {
                    maskCumSum: function() {
                        if (!this.mask) return [];
                        for (var t = [], e = 0, n = 0; n < this.mask.length; n++) e += 0 == this.mask[n], 
                        t.push(e);
                        return t;
                    },
                    firstSequenceWidth: function() {
                        var t = document.querySelector(".msa-block");
                        return t ? t.querySelector(".sequence").scrollWidth : 0;
                    },
                    blockRanges: function() {
                        var t = this, e = Math.max(1, Math.ceil(this.alnLen / this.lineLen));
                        return Array.from({
                            length: e
                        }, (function(e, n) {
                            return [ n * t.lineLen, Math.min(t.alnLen, n * t.lineLen + t.lineLen) ];
                        }));
                    },
                    backgroundClip: function() {
                        return this.$vuetify.theme.dark ? "text" : "border-box";
                    },
                    sequenceColor: function() {
                        return this.$vuetify.theme.dark ? "transparent" : "black";
                    },
                    fontWeight: function() {
                        return this.$vuetify.theme.dark ? "bolder" : "normal";
                    }
                },
                methods: {
                    handleClickHeader: function(t, e) {
                        0 === this.selectedStructures.length || t.altKey ? this.$emit("newStructureReference", e) : this.$emit("newStructureSelection", e);
                    },
                    getSequenceWidth: function() {
                        return document.querySelector(".msa-block").querySelector(".sequence").scrollWidth;
                    },
                    headerStyle: function(t) {
                        var e = this.selectedStructures.length > 0 && this.selectedStructures.includes(t);
                        return {
                            fontWeight: e ? "bold" : "normal",
                            color: this.selectedStructures.length > 0 && this.referenceStructure === t ? "#1E88E5" : e ? "#e6ac00" : this.$vuetify.theme.dark ? "rgba(180, 180, 180, 1)" : "black"
                        };
                    },
                    handleUpdateEntries: function() {
                        var t = this;
                        this.headerLen = 0, this.countLen = 0, this.entries.forEach((function(e, n) {
                            t.headerLen = Math.min(30, Math.max(t.headerLen, e.name.length));
                            var r, i = 0, a = be(e.aa);
                            try {
                                for (a.s(); !(r = a.n()).done; ) {
                                    "-" !== r.value && i++;
                                }
                            } catch (t) {
                                a.e(t);
                            } finally {
                                a.f();
                            }
                            t.countLen = Math.max(t.countLen, i.toString().length);
                        }));
                    },
                    handleResize: function() {
                        var t = document.querySelector(".msa-block");
                        if (t) {
                            var e = t.querySelector(".header"), n = t.querySelector(".count"), r = t.querySelector(".sequence"), i = t.offsetWidth - e.offsetWidth - n.offsetWidth - 32, a = r.textContent, s = Math.abs(Math.ceil(a.length * (r.scrollWidth - i) / r.scrollWidth));
                            r.scrollWidth > i ? this.lineLen = Math.min(this.lineLen - s, this.entries[0].aa.length) : r.scrollWidth < i && (this.lineLen = Math.min(this.lineLen + s, this.entries[0].aa.length));
                        }
                    },
                    emitGradients: function() {
                        var t = document.getElementsByClassName("sequence");
                        this.$emit("cssGradients", Array.prototype.map.call(t, (function(t) {
                            return t.style["background-image"];
                        })));
                    },
                    percentageToColor: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 120, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return -1 === t ? this.$vuetify.theme.dark ? "rgba(180, 180, 180, 1)" : "rgba(0, 0, 0, 0)" : "hsl(".concat(t * (e - n) + n, ", 100%, 50%)");
                    },
                    getEntryRange: function(t, e, n) {
                        for (var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = {
                            name: t.name,
                            aa: t.aa.slice(e, n),
                            ss: t.ss.slice(e, n),
                            seqStart: 0
                        }, a = 0; a < e; a++) "-" !== t.aa[a] && i.seqStart++;
                        return r && (i.css = this.generateCSSGradient(e, n, i.ss)), i;
                    },
                    insertHighlight: function(t, e, n) {
                        if (-1 == this.highlightColumn || 0 == this.mask[this.highlightColumn]) return t;
                        var r = this.highlightColumn - this.maskCumSum[this.highlightColumn];
                        if (r >= e && r < n) {
                            var i = r - e;
                            return t.substring(0, i) + "<strong>" + t.substring(i, i + 1) + "</strong>" + t.substring(i + 1);
                        }
                        return t;
                    },
                    getEntryRanges: function(t, e) {
                        var n = this, r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        return Array.from(this.entries, (function(i) {
                            return n.getEntryRange(i, t, e, r);
                        }));
                    },
                    countSequence: function(t, e) {
                        var n = t.split("-").length - 1;
                        return e + this.lineLen - n;
                    },
                    generateCSSGradient: function(t, e, n) {
                        var r = this;
                        if (!this.scores) return null;
                        var i = [];
                        if ("3di" === this.colorScheme) {
                            var a, s = be(n);
                            try {
                                for (s.s(); !(a = s.n()).done; ) {
                                    var o = a.value;
                                    i.push(ye[o]);
                                }
                            } catch (t) {
                                s.e(t);
                            } finally {
                                s.f();
                            }
                        } else i = this.scores.slice(t, e).map((function(t) {
                            return r.percentageToColor(parseFloat(t));
                        }));
                        for (var l = 0; l < n.length; l++) "-" === n[l] && (i[l] = this.$vuetify.theme.dark ? "rgba(100, 100, 100, 0.4)" : "rgba(0, 0, 0, 0)");
                        for (var c = 100 / i.length, d = "linear-gradient(to right", u = 0, h = c, p = 0; p < i.length; p++) h = p === i.length - 1 ? 100 : u + c, 
                        d += ", ".concat(i[p], " ").concat(u, "%, ").concat(i[p], " ").concat(h, "%"), u = h;
                        return {
                            backgroundImage: d += ")",
                            backgroundSize: "calc(100% - 2px) 100%",
                            backgroundPosition: "left top",
                            backgroundAttachment: "scroll",
                            backgroundClip: this.backgroundClip,
                            color: this.sequenceColor,
                            fontWeight: this.fontWeight
                        };
                    }
                }
            }, xe = Ce;
            n(1574);
            var we = (0, V.Z)(xe, de, [], !1, null, null, null);
            we.options.__file = "frontend/MSAView.vue";
            const Se = we.exports;
            var Me = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.alignments.length > 0 && "tCa" in t.alignments[0] ? n("div", {
                    staticClass: "structure-panel"
                }, [ n("StructureViewerTooltip", {
                    attrs: {
                        attach: ".structure-panel"
                    }
                }), t._v(" "), n("div", {
                    ref: "structurepanel",
                    staticClass: "structure-wrapper"
                }, [ t.tmAlignResults ? n("table", t._b({
                    staticClass: "tmscore-panel"
                }, "table", t.tmPanelBindings, !1), [ n("tr", [ n("td", {
                    staticClass: "left-cell"
                }, [ t._v("TM-Score:") ]), t._v(" "), n("td", {
                    staticClass: "right-cell"
                }, [ t._v(t._s(t.tmAlignResults.tmScore)) ]) ]), t._v(" "), n("tr", [ n("td", {
                    staticClass: "left-cell"
                }, [ t._v("RMSD:") ]), t._v(" "), n("td", {
                    staticClass: "right-cell"
                }, [ t._v(t._s(t.tmAlignResults.rmsd)) ]) ]) ]) : t._e(), t._v(" "), n("StructureViewerToolbar", {
                    attrs: {
                        isFullscreen: t.isFullscreen,
                        isSpinning: t.isSpinning,
                        showQuery: t.showQuery,
                        showTarget: t.showTarget,
                        showArrows: t.showArrows,
                        disableQueryButton: !t.hasQuery,
                        disableArrowButton: !t.hasQuery
                    },
                    on: {
                        makeImage: t.handleMakeImage,
                        makePDB: t.handleMakePDB,
                        resetView: t.handleResetView,
                        toggleFullscreen: t.handleToggleFullscreen,
                        toggleTarget: t.handleToggleTarget,
                        toggleQuery: t.handleToggleQuery,
                        toggleArrows: t.handleToggleArrows,
                        toggleSpin: t.handleToggleSpin
                    }
                }), t._v(" "), n("div", {
                    ref: "viewport",
                    staticClass: "structure-viewer"
                }) ], 1) ], 1) : t._e();
            };
            Me._withStripped = !0;
            var ke = n(531), Ie = n(4687), Te = n.n(Ie), Ee = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("v-tooltip", {
                    attrs: {
                        "open-delay": "300",
                        top: "",
                        attach: t.attach,
                        "nudge-left": "25",
                        "background-color": "transparent"
                    },
                    scopedSlots: t._u([ {
                        key: "activator",
                        fn: function(e) {
                            var r = e.on;
                            return [ n("v-icon", t._g({
                                staticStyle: {
                                    position: "absolute",
                                    "z-index": "999",
                                    right: "0"
                                },
                                attrs: {
                                    light: t.isFullscreen
                                }
                            }, r), [ t._v(t._s(t.$MDI.HelpCircleOutline)) ]) ];
                        }
                    } ])
                }, [ t._v(" "), n("span", [ n("dl", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [ n("dt", [ n("svg", t._b({}, "svg", t.svgProps, !1), [ n("title", [ t._v("Left click") ]), t._v(" "), n("path", {
                    attrs: {
                        d: "M25.6 5.8a5 5 0 0 0-5-4.8h-9.1a5 5 0 0 0-5.1 4.8v20.4a5 5 0 0 0 5 4.8h9.1a5 5 0 0 0 5.1-4.8V5.8Zm-1 9.5v10.9a4 4 0 0 1-4 3.8h-9.1a4 4 0 0 1-4-3.8V15.3h17ZM15.5 2v12.3h-8V5.8a4 4 0 0 1 4-3.8h4Zm1 0h4a4 4 0 0 1 4 3.8v8.5h-8V2Z"
                    }
                }), t._v(" "), n("path", {
                    staticStyle: {
                        fill: "red"
                    },
                    attrs: {
                        id: "left",
                        d: "M15.5 2v12.3h-8V5.8a4 4 0 0 1 4-3.8h4Z"
                    }
                }), t._v(" "), n("path", {
                    attrs: {
                        id: "middle-inactive",
                        d: "M14.6 4h2.8v8h-2.8z"
                    }
                }) ]) ]), t._v(" "), n("dd", [ t._v("\n                Rotate\n            ") ]), t._v(" "), n("dt", [ n("svg", t._b({}, "svg", t.svgProps, !1), [ n("title", [ t._v("Right click") ]), t._v(" "), n("path", {
                    attrs: {
                        d: "M25.6 5.8a5 5 0 0 0-5-4.8h-9.1a5 5 0 0 0-5.1 4.8v20.4a5 5 0 0 0 5 4.8h9.1a5 5 0 0 0 5.1-4.8V5.8Zm-1 9.5v10.9a4 4 0 0 1-4 3.8h-9.1a4 4 0 0 1-4-3.8V15.3h17ZM15.5 2v12.3h-8V5.8a4 4 0 0 1 4-3.8h4Zm1 0h4a4 4 0 0 1 4 3.8v8.5h-8V2Z"
                    }
                }), t._v(" "), n("path", {
                    staticStyle: {
                        fill: "red"
                    },
                    attrs: {
                        id: "right",
                        d: "M16.5 2h4a4 4 0 0 1 4 3.8v8.5h-8V2Z"
                    }
                }), t._v(" "), n("path", {
                    attrs: {
                        id: "middle-inactive",
                        d: "M14.6 4h2.8v8h-2.8z"
                    }
                }) ]) ]), t._v(" "), n("dd", [ t._v("\n                Pan\n            ") ]), t._v(" "), n("dt", [ n("svg", t._b({}, "svg", t.svgProps, !1), [ n("title", [ t._v("Scroll wheel") ]), t._v(" "), n("path", {
                    attrs: {
                        d: "M25.6 5.8a5 5 0 0 0-5-4.8h-9.1a5 5 0 0 0-5.1 4.8v20.4a5 5 0 0 0 5 4.8h9.1a5 5 0 0 0 5.1-4.8V5.8Zm-1 9.5v10.9a4 4 0 0 1-4 3.8h-9.1a4 4 0 0 1-4-3.8V15.3h17ZM15.5 2v12.3h-8V5.8a4 4 0 0 1 4-3.8h4Zm1 0h4a4 4 0 0 1 4 3.8v8.5h-8V2Z"
                    }
                }), t._v(" "), n("path", {
                    staticStyle: {
                        fill: "red"
                    },
                    attrs: {
                        id: "middle-active",
                        d: "M14.6 4h2.8v8h-2.8z"
                    }
                }) ]) ]), t._v(" "), n("dd", [ t._v("\n                Zoom\n            ") ]) ]) ]) ]);
            };
            Ee._withStripped = !0;
            const Re = {
                props: {
                    attach: {
                        type: String,
                        required: !0
                    },
                    isFullscreen: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: {
                    svgProps: function() {
                        return {
                            xmlns: "http://www.w3.org/2000/svg",
                            "xml:space": "preserve",
                            style: "fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2",
                            viewBox: "0 0 32 32"
                        };
                    }
                }
            };
            var Le = (0, V.Z)(Re, Ee, [], !1, null, null, null);
            Z()(Le, {
                VIcon: J.Z,
                VTooltip: Zt.Z
            }), Le.options.__file = "frontend/StructureViewerTooltip.vue";
            const Ne = Le.exports;
            var Oe = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "toolbar-panel"
                }, [ n("v-item-group", {
                    staticClass: "v-btn-toggle",
                    attrs: {
                        light: t.isFullscreen
                    }
                }, [ t.disablePDBButton ? t._e() : n("v-btn", t._b({
                    attrs: {
                        title: "Save PDB"
                    },
                    on: {
                        click: t.handleClickMakePDB
                    }
                }, "v-btn", t.toolbarButtonProps, !1), [ n("v-icon", t._b({}, "v-icon", t.toolbarIconProps, !1), [ t._v(t._s(t.$MDI.SavePDB)) ]), t._v(" "), t.isFullscreen ? n("span", [ t._v(" Save PDB") ]) : t._e() ], 1), t._v(" "), t.disableImageButton ? t._e() : n("v-btn", t._b({
                    attrs: {
                        title: "Save image"
                    },
                    on: {
                        click: t.handleClickMakeImage
                    }
                }, "v-btn", t.toolbarButtonProps, !1), [ n("v-icon", t._b({}, "v-icon", t.toolbarIconProps, !1), [ t._v(t._s(t.$MDI.SavePNG)) ]), t._v(" "), t.isFullscreen ? n("span", [ t._v(" Save image") ]) : t._e() ], 1), t._v(" "), t.disableQueryButton ? t._e() : n("v-btn", t._b({
                    attrs: {
                        title: "Toggle between the entire query structure and aligned region"
                    },
                    on: {
                        click: t.handleClickCycleQuery
                    }
                }, "v-btn", t.toolbarButtonProps, !1), [ 0 === t.showQuery ? n("v-icon", t._b({
                    staticStyle: {
                        color: "#1E88E5"
                    }
                }, "v-icon", t.toolbarIconProps, !1), [ t._v(t._s(t.$LOCAL ? t.$MDI.CircleHalf : t.$MDI.CircleOneThird)) ]) : t.$LOCAL || 1 !== t.showQuery ? n("v-icon", t._b({
                    staticStyle: {
                        color: "#1E88E5"
                    }
                }, "v-icon", t.toolbarIconProps, !1), [ t._v(t._s(t.$MDI.Circle)) ]) : n("v-icon", t._b({
                    staticStyle: {
                        color: "#1E88E5"
                    }
                }, "v-icon", t.toolbarIconProps, !1), [ t._v(t._s(t.$MDI.CircleTwoThird)) ]), t._v(" "), t.isFullscreen ? n("span", [ t._v(" Toggle full query") ]) : t._e() ], 1), t._v(" "), t.disableTargetButton ? t._e() : n("v-btn", t._b({
                    attrs: {
                        title: "Toggle between the entire target structure and aligned region"
                    },
                    on: {
                        click: t.handleClickToggleTarget
                    }
                }, "v-btn", t.toolbarButtonProps, !1), [ 0 === t.showTarget ? n("v-icon", t._b({
                    staticStyle: {
                        color: "#FFC107"
                    }
                }, "v-icon", t.toolbarIconProps, !1), [ t._v(t._s(t.$LOCAL ? t.$MDI.CircleHalf : t.$MDI.CircleOneThird)) ]) : t.$LOCAL || 1 !== t.showTarget ? n("v-icon", t._b({
                    staticStyle: {
                        color: "#FFC107"
                    }
                }, "v-icon", t.toolbarIconProps, !1), [ t._v(t._s(t.$MDI.Circle)) ]) : n("v-icon", t._b({
                    staticStyle: {
                        color: "#FFC107"
                    }
                }, "v-icon", t.toolbarIconProps, !1), [ t._v(t._s(t.$MDI.CircleTwoThird)) ]), t._v(" "), t.isFullscreen ? n("span", [ t._v(" Toggle full target") ]) : t._e() ], 1), t._v(" "), t.disableArrowButton ? t._e() : n("v-btn", t._b({
                    attrs: {
                        title: "Draw arrows between aligned residues"
                    },
                    on: {
                        click: t.handleClickToggleArrows
                    }
                }, "v-btn", t.toolbarButtonProps, !1), [ t.showArrows ? n("v-icon", t._b({}, "v-icon", t.toolbarIconProps, !1), [ t._v(t._s(t.$MDI.ArrowRightCircle)) ]) : n("v-icon", t._b({}, "v-icon", t.toolbarIconProps, !1), [ t._v(t._s(t.$MDI.ArrowRightCircleOutline)) ]), t._v(" "), t.isFullscreen ? n("span", [ t._v(" Toggle arrows") ]) : t._e() ], 1), t._v(" "), t.disableResetButton ? t._e() : n("v-btn", t._b({
                    attrs: {
                        title: "Reset the view to the original position and zoom level"
                    },
                    on: {
                        click: t.handleClickResetView
                    }
                }, "v-btn", t.toolbarButtonProps, !1), [ n("v-icon", t._b({}, "v-icon", t.toolbarIconProps, !1), [ t._v(t._s(t.$MDI.Restore)) ]), t._v(" "), t.isFullscreen ? n("span", [ t._v(" Reset view") ]) : t._e() ], 1), t._v(" "), t.disableSpinButton ? t._e() : n("v-btn", t._b({
                    attrs: {
                        disabled: t.isSpinning,
                        title: "Toggle spinning structure"
                    },
                    on: {
                        click: t.handleClickSpin
                    }
                }, "v-btn", t.toolbarButtonProps, !1), [ n("v-icon", t._b({}, "v-icon", t.toolbarIconProps, !1), [ t._v(t._s(t.$MDI.AxisZRotateCounterclockwise)) ]), t._v(" "), t.isFullscreen ? n("span", [ t._v(" Toggle spin") ]) : t._e() ], 1), t._v(" "), t.disableFullscreenButton ? t._e() : n("v-btn", t._b({
                    attrs: {
                        title: "Enter fullscreen mode - press ESC to exit"
                    },
                    on: {
                        click: t.handleClickFullscreen
                    }
                }, "v-btn", t.toolbarButtonProps, !1), [ n("v-icon", t._b({}, "v-icon", t.toolbarIconProps, !1), [ t._v(t._s(t.$MDI.Fullscreen)) ]), t._v(" "), t.isFullscreen ? n("span", [ t._v(" Fullscreen") ]) : t._e() ], 1) ], 1) ], 1);
            };
            Oe._withStripped = !0;
            const Be = {
                props: {
                    showQuery: {
                        type: Number,
                        default: 0
                    },
                    showTarget: {
                        type: Number,
                        default: 0
                    },
                    showArrows: {
                        type: Boolean,
                        default: !1
                    },
                    isFullscreen: {
                        type: Boolean,
                        default: !1
                    },
                    isSpinning: {
                        type: Boolean,
                        default: !0
                    },
                    disablePDBButton: {
                        type: Boolean,
                        default: !1
                    },
                    disableSpinButton: {
                        type: Boolean,
                        default: !1
                    },
                    disableImageButton: {
                        type: Boolean,
                        default: !1
                    },
                    disableQueryButton: {
                        type: Boolean,
                        default: !1
                    },
                    disableTargetButton: {
                        type: Boolean,
                        default: !1
                    },
                    disableArrowButton: {
                        type: Boolean,
                        default: !1
                    },
                    disableResetButton: {
                        type: Boolean,
                        default: !1
                    },
                    disableFullscreenButton: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: {
                    toolbarIconProps: function() {
                        return this.isFullscreen ? {
                            right: !0
                        } : {};
                    },
                    toolbarButtonProps: function() {
                        return this.isFullscreen ? {
                            small: !1,
                            style: "margin-bottom: 15px;"
                        } : {
                            small: !0,
                            style: "width: 24px;"
                        };
                    }
                },
                methods: {
                    handleClickSpin: function() {
                        this.$emit("toggleSpin");
                    },
                    handleClickMakePDB: function() {
                        this.$emit("makePDB");
                    },
                    handleClickMakeImage: function() {
                        this.$emit("makeImage");
                    },
                    handleClickResetView: function() {
                        this.$emit("resetView");
                    },
                    handleClickFullscreen: function() {
                        this.$emit("toggleFullscreen");
                    },
                    handleClickCycleQuery: function() {
                        this.$emit("toggleQuery");
                    },
                    handleClickToggleTarget: function() {
                        this.$emit("toggleTarget");
                    },
                    handleClickToggleArrows: function() {
                        this.$emit("toggleArrows");
                    }
                }
            };
            n(7539);
            var De = n(7309), qe = (0, V.Z)(Be, Oe, [], !1, null, null, null);
            Z()(qe, {
                VBtn: Y.Z,
                VIcon: J.Z,
                VItemGroup: De.Z
            }), qe.options.__file = "frontend/StructureViewerToolbar.vue";
            const Pe = qe.exports, _e = {
                data: function() {
                    return {
                        stage: null,
                        isFullscreen: !1,
                        isSpinning: !0
                    };
                },
                props: {
                    bgColorLight: {
                        type: String,
                        default: "white"
                    },
                    bgColorDark: {
                        type: String,
                        default: "#1E1E1E"
                    },
                    transitionDuration: 100
                },
                computed: {
                    bgColor: function() {
                        return this.$vuetify.theme.dark ? this.bgColorDark : this.bgColorLight;
                    },
                    ambientIntensity: function() {
                        this.$vuetify.theme.dark;
                    },
                    stageParameters: function() {
                        return {
                            log: "none",
                            backgroundColor: this.bgColor,
                            transparent: !0,
                            ambientIntensity: this.ambientIntensity,
                            clipNear: -1e3,
                            clipFar: 1e3,
                            fogFar: 1e3,
                            fogNear: -1e3,
                            quality: "high"
                        };
                    }
                },
                watch: {
                    isSpinning: function() {
                        this.stage && this.stage.setSpin(this.isSpinning);
                    }
                },
                mounted: function() {
                    this.initialiseStage();
                },
                beforeDestroy: function() {
                    this.teardownStage();
                },
                methods: {
                    makePDB: function() {
                        console.warn("makePDB() not implemented in ".concat(this.$options.name));
                    },
                    makeImage: function() {
                        console.warn("makeImage() not implemented in ".concat(this.$options.name));
                    },
                    resetView: function() {
                        this.stage && this.stage.autoView(this.transitionDuration);
                    },
                    handleResize: function() {
                        this.stage && this.stage.handleResize();
                    },
                    handleToggleFullscreen: function() {
                        this.stage && this.stage.toggleFullscreen(this.$refs.structurepanel);
                    },
                    handleToggleSpin: function() {
                        this.stage && (this.isSpinning = !this.isSpinning);
                    },
                    handleResetView: function() {
                        this.showTarget && this.setSelection(this.showTarget), this.resetView();
                    },
                    initialiseStage: function() {
                        var t = this;
                        window.addEventListener("resize", this.handleResize, {
                            passive: !0
                        }), this.stage = new v.Hf(this.$refs.viewport, this.stageParameters), this.stage.signals.fullscreenChanged.add((function(e) {
                            e ? (t.stage.viewer.setBackground("#ffffff"), t.stage.viewer.setLight(void 0, void 0, void 0, .2), 
                            t.isFullscreen = !0) : (t.stage.viewer.setBackground(t.bgColor), t.stage.viewer.setLight(void 0, void 0, void 0, t.ambientIntensity), 
                            t.isFullscreen = !1);
                        })), this.stage.setSpin(this.isSpinning), this.stage.viewer.renderer.domElement.addEventListener("mousedown", (function(e) {
                            t.isSpinning = !1;
                        }));
                    },
                    teardownStage: function() {
                        window.removeEventListener("resize", this.handleResize), this.stage && this.stage.dispose();
                    },
                    handleMakeImage: function() {
                        this.makeImage();
                    },
                    handleMakePDB: function() {
                        this.makePDB();
                    }
                }
            };
            var Fe = (0, V.Z)(_e, undefined, undefined, !1, null, null, null);
            Fe.options.__file = "frontend/StructureViewerMixin.vue";
            const Ve = Fe.exports;
            var ze = n(7895), je = n(1434);
            function Ue(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    }))), n.push.apply(n, r);
                }
                return n;
            }
            function $e(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ue(Object(n), !0).forEach((function(e) {
                        (0, ue.Z)(t, e, n[e]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ue(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    }));
                }
                return t;
            }
            function Ge(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return He(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return He(t, e);
                    }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(t);
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t;
                    },
                    e: function(t) {
                        o = !0, a = t;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function He(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            var Qe = function(t) {
                for (var e = [], n = [], r = t.qStartPos, i = t.dbStartPos, a = 0; a < t.qAln.length; a++) "-" === t.qAln[a] || "-" === t.dbAln[a] ? "-" === t.qAln[a] ? i++ : r++ : (e.push(r), 
                n.push(i), r++, i++);
                return [ e, n ];
            }, Ze = function(t) {
                if (/_v[0-9]+$/.test(t)) return "A";
                var e = t.lastIndexOf("_");
                if (-1 != e) {
                    var n = t.substring(e + 1);
                    return n.length >= 1 ? n[0] : "A";
                }
                return "A";
            }, Ye = function(t) {
                if (/_v[0-9]+$/.test(t)) return t;
                var e = t.lastIndexOf("_");
                return -1 != e ? t.substring(0, e) : t;
            }, We = function(t, e) {
                var n = [], r = -1;
                return t.eachAtom((function(t) {
                    t.resno !== r && (n.push([ t.x, t.y, t.z ]), r = t.resno);
                }), e), n;
            }, Ke = v.Ub.addScheme((function() {
                var t = [ 10033561, 49087, 15308410, 40563, 15787074, 29362, 13983232, 13400487 ];
                this.atomColor = function(e) {
                    return t[e.chainIndex % t.length];
                };
            }), "colorblindColors"), Je = function(t) {
                return new v.p8(t.structure, {
                    renumberSerial: !1
                }).getData().split("\n").filter((function(t) {
                    return t.startsWith("ATOM");
                })).join("\n");
            };
            const Xe = {
                name: "StructureViewer",
                components: {
                    Panel: nt,
                    StructureViewerTooltip: Ne,
                    StructureViewerToolbar: Pe
                },
                mixins: [ Ve ],
                data: function() {
                    return {
                        selection: null,
                        showArrows: !1,
                        showQuery: 0,
                        showTarget: 0,
                        tmAlignResults: null,
                        hasQuery: !0
                    };
                },
                props: {
                    alignments: {
                        type: Array
                    },
                    highlights: {
                        type: Array
                    },
                    queryFile: {
                        type: String
                    },
                    queryAlignedColor: {
                        type: String,
                        default: "#1E88E5"
                    },
                    queryUnalignedColor: {
                        type: String,
                        default: "#A5CFF5"
                    },
                    targetAlignedColor: {
                        type: String,
                        default: "#FFC107"
                    },
                    targetUnalignedColor: {
                        type: String,
                        default: "#FFE699"
                    },
                    qRepr: {
                        type: String,
                        default: "cartoon"
                    },
                    tRepr: {
                        type: String,
                        default: "cartoon"
                    },
                    hits: {
                        type: Object
                    },
                    autoViewTime: {
                        type: Number,
                        default: 100
                    }
                },
                methods: {
                    drawArrows: function(t, e) {
                        var n = this;
                        return (0, ke.Z)(Te().mark((function r() {
                            var i, a;
                            return Te().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return i = new v.bn("arrows"), r.next = 3, Promise.all(n.alignments.map(function() {
                                        var n = (0, ke.Z)(Te().mark((function n(r) {
                                            var a, s, o, l, c, d, u, h, p;
                                            return Te().wrap((function(n) {
                                                for (;;) switch (n.prev = n.next) {
                                                  case 0:
                                                    for (a = Ze(r.query), s = Ze(r.target), o = Qe(r).map((function(t) {
                                                        return t.join(" or ");
                                                    })), l = (0, b.Z)(o, 2), c = l[0], d = l[1], u = We(t, new v.Y1("(".concat(c, ") and :").concat(a, ".CA"))), 
                                                    h = We(e, new v.Y1("(".concat(d, ") and :").concat(s, ".CA"))), u.length != h.length && console.warn("Different number of CA atoms in query and target", u.length, h.length), 
                                                    p = 0; p < Math.min(u.length, h.length); p++) i.addArrow(u[p], h[p], [ 0, 1, 1 ], .4);

                                                  case 7:
                                                  case "end":
                                                    return n.stop();
                                                }
                                            }), n);
                                        })));
                                        return function(t) {
                                            return n.apply(this, arguments);
                                        };
                                    }()));

                                  case 3:
                                    (a = n.stage.addComponentFromObject(i)).addRepresentation("buffer"), a.setVisibility(n.showArrows);

                                  case 6:
                                  case "end":
                                    return r.stop();
                                }
                            }), r);
                        })))();
                    },
                    handleToggleArrows: function() {
                        this.stage && (this.showArrows = !this.showArrows);
                    },
                    handleToggleQuery: function() {
                        this.stage && (this.showQuery = 0 === this.showQuery ? 1 : 0);
                    },
                    handleResetView: function() {
                        this.stage && this.setQuerySelection();
                    },
                    handleToggleTarget: function() {
                        this.stage && (this.showTarget = 0 === this.showTarget ? 1 : 0);
                    },
                    clearSelection: function() {
                        if (this.alignments && this.stage) {
                            var t = this.stage.getRepresentationsByName("targetHighlight");
                            t.setSelection(), t.setVisibility(!1);
                        }
                    },
                    setSelectionData: function(t) {
                        if (this.alignments && this.stage) {
                            var e = this.stage.getRepresentationsByName("targetHighlight");
                            if (e.setSelection(), 0 !== t.length) {
                                var n, r = [], i = Ge(t);
                                try {
                                    for (i.s(); !(n = i.n()).done; ) {
                                        var a = (0, b.Z)(n.value, 3), s = a[0], o = a[1], l = a[2], c = Ze(this.alignments[s].target), d = o + l;
                                        r.push("".concat(o, "-").concat(d, ":").concat(c));
                                    }
                                } catch (t) {
                                    i.e(t);
                                } finally {
                                    i.f();
                                }
                                var u = r.join(" or ");
                                e.setSelection(u), e.setVisibility(!0);
                            } else e.setVisibility(!1);
                        }
                    },
                    setQuerySelection: function() {
                        var t = this.stage.getRepresentationsByName("queryStructure");
                        if (t) {
                            var e = this.querySele;
                            t.setSelection(e), t.list[0].parent.autoView(e, this.autoViewTime), 0 === this.showQuery ? (this.stage.getRepresentationsByName("querySurface-1").setVisibility(!1), 
                            this.stage.getRepresentationsByName("querySurface-2").setVisibility(!1)) : 1 === this.showQuery ? (this.stage.getRepresentationsByName("querySurface-1").setVisibility(!0), 
                            this.stage.getRepresentationsByName("querySurface-2").setVisibility(!1)) : (this.stage.getRepresentationsByName("querySurface-1").setVisibility(!0), 
                            this.stage.getRepresentationsByName("querySurface-2").setVisibility(!0));
                        }
                    },
                    setTargetSelection: function() {
                        var t = this.stage.getRepresentationsByName("targetStructure");
                        if (t) {
                            var e = this.targetSele;
                            t.setSelection(e);
                        }
                    },
                    handleMakeImage: function() {
                        var t = this;
                        return (0, ke.Z)(Te().mark((function e() {
                            var n, r, i;
                            return Te().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (t.stage) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 2:
                                    return n = t.isSpinning, t.isSpinning = !1, r = t.alignments.map((function(e) {
                                        return t.hasQuery ? "".concat(e.query, "-").concat(e.target) : e.target;
                                    })).join("_"), t.stage.viewer.setLight(void 0, void 0, void 0, .2), e.next = 8, 
                                    t.stage.makeImage({
                                        trim: !0,
                                        factor: t.isFullscreen ? 1 : 8,
                                        antialias: !0,
                                        transparent: !0
                                    });

                                  case 8:
                                    i = e.sent, t.stage.viewer.setLight(void 0, void 0, void 0, t.$vuetify.theme.dark ? .4 : .2), 
                                    (0, v.LR)(i, "".concat(r, ".png")), t.isSpinning = n;

                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            }), e);
                        })))();
                    },
                    handleMakePDB: function() {
                        if (this.stage) {
                            var t = this.stage.getComponentsByName("queryStructure").list.map(Je), e = this.stage.getComponentsByName("targetStructure").list.map(Je);
                            if (t || e) {
                                var n = this.alignments.map((function(e) {
                                    return t ? "".concat(e.query, "-").concat(e.target) : e.target;
                                })), r = null;
                                r = t && e ? "TITLE     ".concat(n.join(" "), "\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms might have been re-generated by PULCHRA,\nREMARK              if they are not present in the original PDB file.\nMODEL        1\n").concat(t.join("\n"), "\nENDMDL\nMODEL        2\n").concat(e.join("\n"), "\nENDMDL\nEND\n") : "TITLE     ".concat(n.join(" "), "\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms were re-generated by PULCHRA.\nMODEL        1\n").concat(e.join("\n"), "\nENDMDL\nEND\n"), 
                                (0, v.LR)(new Blob([ r ], {
                                    type: "text/plain"
                                }), n.join("_") + ".pdb");
                            }
                        }
                    }
                },
                watch: {
                    showArrows: function(t, e) {
                        this.stage && this.stage.getComponentsByName("arrows").forEach((function(e) {
                            e.setVisibility(t);
                        }));
                    },
                    showQuery: function() {
                        this.stage && this.setQuerySelection();
                    },
                    showTarget: function(t, e) {
                        this.stage && this.setTargetSelection();
                    },
                    highlights: function(t) {
                        if (this.stage && t) {
                            var e = [];
                            t.forEach((function(t, n) {
                                if (t) {
                                    var r = (0, b.Z)(t, 2), i = r[0], a = r[1];
                                    e.push([ n, i, a ]);
                                }
                            })), this.setSelectionData(e);
                        }
                    }
                },
                computed: {
                    querySele: function() {
                        return 0 === this.alignments.length || 2 == this.showQuery ? "" : 0 === this.showQuery ? this.alignments.map((function(t) {
                            return "".concat(t.qStartPos, "-").concat(t.qEndPos, ":").concat(Ze(t.query));
                        })).join(" or ") : 1 === this.showQuery ? this.alignments.map((function(t) {
                            return ":".concat(Ze(t.query));
                        })).join(" or ") : void 0;
                    },
                    targetSele: function() {
                        return 0 === this.alignments.length || 2 == this.showTarget ? "" : 0 === this.showTarget ? this.alignments.map((function(t) {
                            return "".concat(t.dbStartPos, "-").concat(t.dbEndPos, ":").concat(Ze(t.target));
                        })).join(" or ") : 1 === this.showTarget ? this.alignments.map((function(t) {
                            return ":".concat(Ze(t.target));
                        })).join(" or ") : void 0;
                    },
                    tmPanelBindings: function() {
                        return this.isFullscreen ? {
                            style: "margin-top: 10px; font-size: 2em; line-height: 2em"
                        } : {};
                    }
                },
                mounted: function() {
                    var t = this;
                    return (0, ke.Z)(Te().mark((function e() {
                        var n, r, i, a, s, o, l, c, d, u, h, p, A, g, m, b, y, C, x, w, S, M, k, I, T, E, O, B, D, q, P, _, F, V, z, j, U, $, G, H, Q, Z, Y;
                        return Te().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (void 0 !== t.alignments[0].tCa) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");

                              case 2:
                                if (n = "", t.hasQuery = !0, !t.$LOCAL) {
                                    e.next = 8;
                                    break;
                                }
                                n = t.hits.queries[0].hasOwnProperty("pdb") ? JSON.parse(t.hits.queries[0].pdb) : L(t.hits.queries[0].qCa, t.hits.queries[0].sequence, "A"), 
                                e.next = 23;
                                break;

                              case 8:
                                if (!t.$route.params.ticket.startsWith("user-")) {
                                    e.next = 12;
                                    break;
                                }
                                t.hits.queries[0].hasOwnProperty("pdb") ? n = JSON.parse(t.hits.queries[0].pdb) : (r = t.$root.userData[t.$route.params.entry], 
                                n = L(r.queries[0].qCa, r.queries[0].sequence, "A")), e.next = 23;
                                break;

                              case 12:
                                return e.prev = 12, e.next = 15, t.$axios.get("api/result/" + t.$route.params.ticket + "/query");

                              case 15:
                                i = e.sent, n = i.data, e.next = 23;
                                break;

                              case 19:
                                e.prev = 19, e.t0 = e.catch(12), n = "", t.hasQuery = !1;

                              case 23:
                                a = [], s = [], o = 0, l = null, c = null, d = 0, u = Ge(t.alignments), e.prev = 30, 
                                p = Te().mark((function e() {
                                    var n, r, i, u, p, A, g, m, f, b, v;
                                    return Te().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            if (n = h.value, r = Ze(n.target), i = n.tSeq, u = n.tCa, !Number.isInteger(n.tCa) || !Number.isInteger(n.tSeq)) {
                                                e.next = 17;
                                                break;
                                            }
                                            if (p = n.db, (A = n.tCa) == l) {
                                                e.next = 14;
                                                break;
                                            }
                                            return g = t.$route.params.ticket, e.next = 11, t.$axios.get("api/result/" + g + "/" + t.$route.params.entry + "?format=brief&index=" + A + "&database=" + p);

                                          case 11:
                                            m = e.sent, c = m.data, l = A;

                                          case 14:
                                            i = c[d].tSeq, u = c[d].tCa, d++;

                                          case 17:
                                            return f = L(u, i, r), e.next = 20, (0, ze.n)(f);

                                          case 20:
                                            return b = e.sent, e.next = 23, t.stage.loadFile(new Blob([ b ], {
                                                type: "text/plain"
                                            }), {
                                                ext: "pdb",
                                                firstModelOnly: !0
                                            });

                                          case 23:
                                            (v = e.sent).structure.eachChain((function(t) {
                                                t.chainname = r;
                                            })), v.structure.eachAtom((function(t) {
                                                t.serial = o++;
                                            })), a.push(v), s.push("".concat(n.dbStartPos, "-").concat(n.dbEndPos, ":").concat(r));

                                          case 28:
                                          case "end":
                                            return e.stop();
                                        }
                                    }), e);
                                })), u.s();

                              case 33:
                                if ((h = u.n()).done) {
                                    e.next = 37;
                                    break;
                                }
                                return e.delegateYield(p(), "t1", 35);

                              case 35:
                                e.next = 33;
                                break;

                              case 37:
                                e.next = 42;
                                break;

                              case 39:
                                e.prev = 39, e.t2 = e.catch(30), u.e(e.t2);

                              case 42:
                                return e.prev = 42, u.f(), e.finish(42);

                              case 45:
                                if (A = v.Z9.apply(void 0, [ Ye(t.alignments[0].target) ].concat((0, f.Z)(a.map((function(t) {
                                    return t.structure;
                                }))))), (g = t.stage.addComponentFromObject(A, {
                                    name: "targetStructure"
                                })).addRepresentation("tube", {
                                    color: 1179630,
                                    side: "front",
                                    opacity: .5,
                                    radius: .8,
                                    visible: !1,
                                    name: "targetHighlight"
                                }), v.Ub.hasScheme("_targetScheme") && v.Ub.removeScheme("_targetScheme"), t.targetSchemeId = v.Ub.addSelectionScheme([ [ t.targetAlignedColor, s.join(" or ") ], [ t.targetUnalignedColor, "*" ] ], "_targetScheme"), 
                                !t.hasQuery) {
                                    e.next = 122;
                                    break;
                                }
                                if (m = "", b = "pdb", "#" == (n = n.trimStart())[0] || n.startsWith("data_")) b = "cif", 
                                n = n.replaceAll("_chem_comp.", "_chem_comp_SKIP_HACK."); else {
                                    y = Ge(n.split("\n"));
                                    try {
                                        for (y.s(); !(C = y.n()).done; ) x = C.value, w = Math.max(0, 80 - x.length), S = x + " ".repeat(w) + "\n", 
                                        m += S;
                                    } catch (t) {
                                        y.e(t);
                                    } finally {
                                        y.f();
                                    }
                                    n = m;
                                }
                                return e.next = 57, t.stage.loadFile(new Blob([ n ], {
                                    type: "text/plain"
                                }), {
                                    ext: b,
                                    firstModelOnly: !0,
                                    name: "queryStructure"
                                });

                              case 57:
                                if (!(M = e.sent) || !M.structure.getAtomProxy().isCg()) {
                                    e.next = 67;
                                    break;
                                }
                                return "cif" == b && (n = Je(M)), e.next = 62, (0, ze.n)(n);

                              case 62:
                                return n = e.sent, t.stage.removeComponent(M), e.next = 66, t.stage.loadFile(new Blob([ n ], {
                                    type: "text/plain"
                                }), {
                                    ext: "pdb",
                                    firstModelOnly: !0,
                                    name: "queryStructure"
                                });

                              case 66:
                                M = e.sent;

                              case 67:
                                k = [], I = Ge(t.alignments), e.prev = 69, E = Te().mark((function t() {
                                    var e, n, r;
                                    return Te().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                          case 0:
                                            e = T.value, n = Ze(e.query), k.push("".concat(e.qStartPos, "-").concat(e.qEndPos, " and :").concat(n)), 
                                            r = 1, M.structure.eachResidue((function(t) {
                                                t.resno = r++;
                                            }), new v.Y1(":".concat(n)));

                                          case 5:
                                          case "end":
                                            return t.stop();
                                        }
                                    }), t);
                                })), I.s();

                              case 72:
                                if ((T = I.n()).done) {
                                    e.next = 76;
                                    break;
                                }
                                return e.delegateYield(E(), "t3", 74);

                              case 74:
                                e.next = 72;
                                break;

                              case 76:
                                e.next = 81;
                                break;

                              case 78:
                                e.prev = 78, e.t4 = e.catch(69), I.e(e.t4);

                              case 81:
                                return e.prev = 81, I.f(), e.finish(81);

                              case 84:
                                if (v.Ub.hasScheme("_queryScheme") && v.Ub.removeScheme("_queryScheme"), t.querySchemeId = v.Ub.addSelectionScheme([ [ t.queryAlignedColor, k.join(" or ") ], [ t.queryUnalignedColor, "*" ] ], "_queryScheme"), 
                                !t.alignments[0].hasOwnProperty("complexu") || !t.alignments[0].hasOwnProperty("complext")) {
                                    e.next = 104;
                                    break;
                                }
                                O = t.alignments[0].complext.split(",").map((function(t) {
                                    return parseFloat(t);
                                })), B = [ [ (B = t.alignments[0].complexu.split(",").map((function(t) {
                                    return parseFloat(t);
                                })))[0], B[1], B[2] ], [ B[3], B[4], B[5] ], [ B[6], B[7], B[8] ] ], N(g.structure, O, B), 
                                M.addRepresentation(t.qRepr, {
                                    color: t.querySchemeId,
                                    smoothSheet: !0,
                                    name: "queryStructure"
                                }), g.addRepresentation(t.tRepr, {
                                    color: t.targetSchemeId,
                                    smoothSheet: !0,
                                    name: "targetStructure"
                                }), D = [], q = [], P = [], _ = Ge(t.alignments);
                                try {
                                    for (_.s(); !(F = _.n()).done; ) V = F.value, z = Ze(V.query), D.push("".concat(V.qStartPos, "-").concat(V.qEndPos, ":").concat(z)), 
                                    q.push("(not ".concat(V.qStartPos, "-").concat(V.qEndPos, " and :").concat(z, ")")), 
                                    P.push(":".concat(z));
                                } catch (t) {
                                    _.e(t);
                                } finally {
                                    _.f();
                                }
                                j = {
                                    color: Ke,
                                    opacity: .1,
                                    opaqueBack: !1,
                                    useWorker: !1
                                }, M.addRepresentation("surface", $e({
                                    sele: D.join(" or "),
                                    name: "querySurface-0"
                                }, j)), M.addRepresentation("surface", $e({
                                    sele: q.join(" or "),
                                    name: "querySurface-1",
                                    visible: !1
                                }, j)), M.addRepresentation("surface", $e({
                                    sele: "not (".concat(P.join(" or "), ")"),
                                    name: "querySurface-2",
                                    visible: !1
                                }, j)), e.next = 115;
                                break;

                              case 104:
                                return U = R(M.structure, t.querySele), $ = R(g.structure, t.targetSele), G = ">target\n".concat(t.alignments[0].dbAln, "\n\n>query\n").concat(t.alignments[0].qAln), 
                                e.next = 109, (0, je.Mb)($, U, G);

                              case 109:
                                H = e.sent, t.tmAlignResults = (0, je.Qc)(H.output), Q = (0, je.im)(H.matrix), Z = Q.t, 
                                Y = Q.u, N(g.structure, Z, Y), M.addRepresentation(t.qRepr, {
                                    color: t.querySchemeId,
                                    name: "queryStructure"
                                }), g.addRepresentation(t.tRepr, {
                                    color: t.targetSchemeId,
                                    name: "targetStructure"
                                });

                              case 115:
                                return e.next = 117, t.drawArrows(M.structure, g.structure);

                              case 117:
                                t.setQuerySelection(), t.setTargetSelection(), M.autoView(t.querySele, t.autoViewTime), 
                                e.next = 125;
                                break;

                              case 122:
                                g.addRepresentation(t.tRepr, {
                                    color: t.targetSchemeId,
                                    name: "targetStructure"
                                }), t.setTargetSelection(), t.stage.autoView(t.autoViewTime);

                              case 125:
                              case "end":
                                return e.stop();
                            }
                        }), e, null, [ [ 12, 19 ], [ 30, 39, 42, 45 ], [ 69, 78, 81, 84 ] ]);
                    })))();
                }
            }, tn = Xe;
            n(9121), n(6226);
            var en = (0, V.Z)(tn, Me, [], !1, null, "739834d6", null);
            en.options.__file = "frontend/StructureViewer.vue";
            const nn = en.exports;
            var rn = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "structure-panel"
                }, [ n("StructureViewerTooltip", {
                    attrs: {
                        attach: ".structure-panel"
                    }
                }), t._v(" "), n("div", {
                    ref: "structurepanel",
                    staticClass: "structure-wrapper"
                }, [ n("StructureViewerToolbar", {
                    staticStyle: {
                        position: "absolute",
                        bottom: "8px"
                    },
                    attrs: {
                        isFullscreen: t.isFullscreen,
                        isSpinning: t.isSpinning,
                        disableArrowButton: "",
                        disableQueryButton: "",
                        disableTargetButton: ""
                    },
                    on: {
                        makeImage: t.handleMakeImage,
                        makePDB: t.handleMakePDB,
                        resetView: t.handleResetView,
                        toggleFullscreen: t.handleToggleFullscreen,
                        toggleSpin: t.handleToggleSpin
                    }
                }), t._v(" "), n("div", {
                    ref: "viewport",
                    staticClass: "structure-viewer"
                }) ], 1) ], 1);
            };
            function an(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    }))), n.push.apply(n, r);
                }
                return n;
            }
            function sn(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? an(Object(n), !0).forEach((function(e) {
                        (0, ue.Z)(t, e, n[e]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : an(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    }));
                }
                return t;
            }
            function on(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return ln(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ln(t, e);
                    }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(t);
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t;
                    },
                    e: function(t) {
                        o = !0, a = t;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function ln(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function cn(t, e) {
                for (var n = {
                    backtrace: "",
                    qAln: "",
                    dbAln: ""
                }, r = !1, i = 0, a = 0, s = 0, o = "", l = ""; i < t.length; ) {
                    var c = t[i], d = e[i];
                    "-" === c && "-" === d || ("-" === c ? (r && (n.backtrace += "D", o += c, l += d), 
                    ++s) : "-" === d ? (r && (n.backtrace += "I", o += c, l += d), ++a) : (r ? (n.qAln += o, 
                    n.dbAln += l, o = "", l = "") : (r = !0, n.qStartPos = a, n.dbStartPos = s), n.backtrace += "M", 
                    o += c, l += d, n.qEndPos = a, n.dbEndPos = s, ++a, ++s)), ++i;
                }
                return n.qStartPos++, n.dbStartPos++, n.qSeq = t.replace(/-/g, ""), n.tSeq = e.replace(/-/g, ""), 
                n;
            }
            function dn(t, e) {
                for (var n = [], r = 0, i = 0; i < t.length; i++) "-" !== t[i] && (0 === e[i] && n.push(r), 
                r++);
                return n;
            }
            function un(t, e) {
                for (var n = -1, r = 0; r <= e && r < t.length; r++) "-" !== t[r] && n++;
                return n;
            }
            rn._withStripped = !0;
            const hn = {
                name: "StructureViewerMSA",
                components: {
                    StructureViewerToolbar: Pe,
                    StructureViewerTooltip: Ne
                },
                mixins: [ Ve ],
                data: function() {
                    return {
                        structures: [],
                        curReferenceIndex: -1,
                        schemeId: null,
                        selectedColumn: -1
                    };
                },
                props: {
                    entries: {
                        type: Array,
                        required: !0
                    },
                    selection: {
                        type: Array,
                        required: !0,
                        default: [ 0, 1 ]
                    },
                    mask: {
                        type: Array,
                        required: !0
                    },
                    reference: {
                        type: Number,
                        required: !0
                    },
                    bgColorLight: {
                        type: String,
                        default: "white"
                    },
                    bgColorDark: {
                        type: String,
                        default: "#1E1E1E"
                    },
                    representationStyle: {
                        type: String,
                        default: "cartoon"
                    },
                    referenceStyleParameters: {
                        type: Object,
                        default: function() {
                            return {
                                color: 2001125,
                                opacity: 1
                            };
                        }
                    },
                    regularStyleParameters: {
                        type: Object,
                        default: function() {
                            return {
                                color: 16761095,
                                opacity: .5,
                                side: "front"
                            };
                        }
                    }
                },
                mounted: function() {
                    var t = this;
                    this.updateEntries(this.selection, []), this.stage.signals.clicked.add((function(e) {
                        if (!e) return t.selectedColumn = -1, t.updateMask(), void t.$emit("columnSelected", -1);
                        var n = e.atom;
                        if (!n) return t.selectedColumn = -1, t.updateMask(), void t.$emit("columnSelected", -1);
                        var r = parseInt(n.structure.name.replace("key-", "")), i = function(t, e) {
                            for (var n = -1, r = 0; r < t.length; r++) if ("-" !== t[r] && n++, n == e) return r;
                            return -1;
                        }(t.entries[r].aa, n.residueIndex);
                        t.selectedColumn = i, t.$emit("columnSelected", i), t.updateMask();
                    }));
                },
                methods: {
                    resetView: function() {
                        this.stage && (this.selection.length > 0 ? this.getComponentByIndex(this.reference).autoView(this.transitionDuration) : this.stage.autoView(this.transitionDuration));
                    },
                    makePDB: function() {
                        var t = this;
                        if (this.stage) {
                            var e, n = "TITLE     Superposed structures from Foldmason alignment\nREMARK    This file was generated by the FoldMason webserver:\nREMARK      https://search.foldseek.com/foldmason\nREMARK    Please cite:\nREMARK      https://doi.org/10.1101/2024.08.01.606130\nREMARK    Warning: Non C-alpha atoms may have been re-generated by PULCHRA\nREMARK             if they are not present in the original PDB file.\n";
                            this.stage.eachComponent((function(r) {
                                var i = (0, v.Z9)("clone", r.structure), a = new v.yG;
                                a.fromArray(r.transform.elements), i.eachAtom((function(t) {
                                    var e = new v.P(t.x, t.y, t.z);
                                    e.applyMatrix4(a), t.x = e.x, t.y = e.y, t.z = e.z;
                                })), e = (e = new v.p8(i, {
                                    renumberSerial: !1
                                }).getData()).split("\n").filter((function(t) {
                                    return t.startsWith("ATOM");
                                })).join("\n");
                                var s = parseInt(r.structure.name.replace("key-", "")), o = t.entries[s].name, l = "REMARK    Name: ".concat(o);
                                if (s !== t.reference) {
                                    var c = a.elements.map((function(t) {
                                        return t.toFixed(6).padStart(12);
                                    }));
                                    l += "\nREMARK    Rotation matrix (u)\nREMARK    ".concat(c[0], " ").concat(c[4], " ").concat(c[8], "\nREMARK    ").concat(c[1], " ").concat(c[5], " ").concat(c[9], "\nREMARK    ").concat(c[2], " ").concat(c[6], " ").concat(c[10], "\nREMARK    Translation matrix (t)\nREMARK    ").concat(c[12], " ").concat(c[13], " ").concat(c[14]);
                                }
                                n += "MODEL     ".concat(s, "\n").concat(l, "\n").concat(e, "\nENDMDL\n");
                            }), "structure"), n += "END", (0, v.LR)(new Blob([ n ], {
                                type: "text/plain"
                            }), "foldmason.pdb");
                        }
                    },
                    makeImage: function() {
                        var t = this;
                        this.stage && (this.stage.viewer.setLight(void 0, void 0, void 0, .2), this.stage.makeImage({
                            trim: !0,
                            factor: this.isFullscreen ? 1 : 8,
                            antialias: !0,
                            transparent: !0
                        }).then((function(e) {
                            t.stage.viewer.setLight(void 0, void 0, void 0, t.$vuetify.theme.dark ? .4 : .2), 
                            (0, v.LR)(e, "foldmason.png");
                        })));
                    },
                    getComponentByIndex: function(t) {
                        if (this.stage) {
                            var e = this.stage.getComponentsByName("key-".concat(t));
                            return 0 === e.list.length ? -1 : e.list[0];
                        }
                    },
                    tmAlignToReference: function(t) {
                        var e = this;
                        return (0, ke.Z)(Te().mark((function n() {
                            var r, i, a, s, o, l, c, d, u, h, p, A, g, m, f, v, y;
                            return Te().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (t !== e.reference) {
                                        n.next = 2;
                                        break;
                                    }
                                    return n.abrupt("return");

                                  case 2:
                                    return r = e.entries[e.reference], i = e.entries[t], a = e.getComponentByIndex(e.reference), 
                                    s = e.getComponentByIndex(t), o = cn(r.aa, i.aa), l = ">target\n".concat(o.dbAln, "\n\n>query\n").concat(o.qAln), 
                                    n.next = 10, Promise.all([ R(a.structure, o ? "".concat(o.qStartPos, "-").concat(o.qEndPos) : ""), R(s.structure, o ? "".concat(o.dbStartPos, "-").concat(o.dbEndPos) : "") ]);

                                  case 10:
                                    c = n.sent, d = (0, b.Z)(c, 2), u = d[0], h = d[1], n.next = 17;
                                    break;

                                  case 17:
                                    return n.next = 19, (0, je.Mb)(h, u, l);

                                  case 19:
                                    return p = n.sent, A = p.output, g = p.matrix, m = (0, je.im)(g), f = m.t, v = m.u, 
                                    y = (0, je.Qc)(A), n.abrupt("return", Promise.resolve({
                                        matrix: B(f, v),
                                        tmResults: y,
                                        alignment: o
                                    }));

                                  case 25:
                                  case "end":
                                    return n.stop();
                                }
                            }), n);
                        })))();
                    },
                    addStructureToStage: function(t, e, n) {
                        var r = this;
                        return (0, ke.Z)(Te().mark((function i() {
                            var a, s, o;
                            return Te().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                  case 0:
                                    return a = L(n, e.replace(/-/g, ""), "A"), i.next = 3, (0, ze.n)(a);

                                  case 3:
                                    return s = i.sent, o = new Blob([ s ], {
                                        type: "text/plain"
                                    }), i.abrupt("return", r.stage.loadFile(o, {
                                        ext: "pdb",
                                        firstModelOnly: !0,
                                        name: "key-".concat(t)
                                    }));

                                  case 6:
                                  case "end":
                                    return i.stop();
                                }
                            }), i);
                        })))();
                    },
                    shiftStructure: function(t, e, n) {
                        var r = this;
                        return (0, ke.Z)(Te().mark((function i() {
                            var a, s, o, l, c, d;
                            return Te().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                  case 0:
                                    a = t.structure, s = a.position, o = s.x, l = s.y, c = s.z, d = e * n, a.setPosition({
                                        x: o + d,
                                        y: l + d,
                                        z: c + d
                                    }), r.stage.viewer.requestRender();

                                  case 5:
                                  case "end":
                                    return i.stop();
                                }
                            }), i);
                        })))();
                    },
                    explode: function(t) {
                        var e = this;
                        return (0, ke.Z)(Te().mark((function n() {
                            return Te().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (e.stage) {
                                        n.next = 2;
                                        break;
                                    }
                                    return n.abrupt("return");

                                  case 2:
                                    e.structures.forEach((function(n, r) {
                                        return e.shiftStructure(n, r, t);
                                    })), e.stage.autoView();

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }), n);
                        })))();
                    },
                    updateEntries: function(t, e) {
                        var n = this;
                        return (0, ke.Z)(Te().mark((function r() {
                            var i, a, s, o, l, c, d, u, h, p, A, g, m, f, y, C, x;
                            return Te().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    if (n.stage) {
                                        r.next = 2;
                                        break;
                                    }
                                    return r.abrupt("return");

                                  case 2:
                                    if (null == n.schemeId && (i = n, n.schemeId = v.Ub.addScheme((function(t) {
                                        var e = parseInt(t.structure.name.replace("key-", "")), n = i.regularStyleParameters.color;
                                        e === i.reference && (n = i.referenceStyleParameters.color);
                                        var r = dn(i.entries[e].aa, i.mask), a = un(i.entries[e].aa, i.selectedColumn);
                                        this.atomColor = function(t) {
                                            return a == t.residueIndex ? 1179630 : r.includes(t.residueIndex) ? 6710886 : n;
                                        };
                                    }))), a = new Set(t), s = new Set(e), 0 !== a.size) {
                                        r.next = 8;
                                        break;
                                    }
                                    return n.stage.removeAllComponents(), r.abrupt("return");

                                  case 8:
                                    o = [], l = [], c = [], d = on(s), r.prev = 12, d.s();

                                  case 14:
                                    if ((u = d.n()).done) {
                                        r.next = 21;
                                        break;
                                    }
                                    if ((h = u.value) !== n.reference) {
                                        r.next = 18;
                                        break;
                                    }
                                    return r.abrupt("continue", 19);

                                  case 18:
                                    a.has(h) ? o.push(h) : l.push(h);

                                  case 19:
                                    r.next = 14;
                                    break;

                                  case 21:
                                    r.next = 26;
                                    break;

                                  case 23:
                                    r.prev = 23, r.t0 = r.catch(12), d.e(r.t0);

                                  case 26:
                                    return r.prev = 26, d.f(), r.finish(26);

                                  case 29:
                                    p = on(a), r.prev = 30, p.s();

                                  case 32:
                                    if ((A = p.n()).done) {
                                        r.next = 39;
                                        break;
                                    }
                                    if ((g = A.value) !== n.reference && !s.has(g)) {
                                        r.next = 36;
                                        break;
                                    }
                                    return r.abrupt("continue", 37);

                                  case 36:
                                    c.push(g);

                                  case 37:
                                    r.next = 32;
                                    break;

                                  case 39:
                                    r.next = 44;
                                    break;

                                  case 41:
                                    r.prev = 41, r.t1 = r.catch(30), p.e(r.t1);

                                  case 44:
                                    return r.prev = 44, p.f(), r.finish(44);

                                  case 47:
                                    if (m = n.reference !== n.curReferenceIndex, f = !s.has(n.reference), y = m || f, 
                                    n.curReferenceIndex = n.reference, !y) {
                                        r.next = 66;
                                        break;
                                    }
                                    if (C = n.entries[n.reference], !f) {
                                        r.next = 60;
                                        break;
                                    }
                                    return r.next = 56, n.addStructureToStage(n.reference, C.aa, C.ca);

                                  case 56:
                                    (x = r.sent).addRepresentation(n.representationStyle, sn(sn({}, n.referenceStyleParameters), {}, {
                                        color: n.schemeId
                                    })), r.next = 65;
                                    break;

                                  case 60:
                                    (x = n.getComponentByIndex(n.reference)).reprList[0].setVisibility(!1), x.reprList[0].setParameters(sn(sn({}, n.referenceStyleParameters), {}, {
                                        color: n.schemeId
                                    })), x.setTransform(new v.yG), x.reprList[0].setVisibility(!0);

                                  case 65:
                                    x.autoView();

                                  case 66:
                                    return r.next = 68, Promise.all(c.map(function() {
                                        var t = (0, ke.Z)(Te().mark((function t(e) {
                                            var r, i, a, s;
                                            return Te().wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                  case 0:
                                                    return r = n.entries[e], t.next = 3, n.addStructureToStage(e, r.aa, r.ca);

                                                  case 3:
                                                    return i = t.sent, t.next = 6, n.tmAlignToReference(e);

                                                  case 6:
                                                    a = t.sent, s = a.matrix, i.setTransform(s), i.addRepresentation(n.representationStyle, sn(sn({}, n.regularStyleParameters), {}, {
                                                        color: n.schemeId
                                                    }));

                                                  case 10:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }), t);
                                        })));
                                        return function(e) {
                                            return t.apply(this, arguments);
                                        };
                                    }()));

                                  case 68:
                                    return r.next = 70, Promise.all(l.map(function() {
                                        var t = (0, ke.Z)(Te().mark((function t(e) {
                                            var r;
                                            return Te().wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                  case 0:
                                                    r = n.getComponentByIndex(e), n.stage.removeComponent(r);

                                                  case 2:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }), t);
                                        })));
                                        return function(e) {
                                            return t.apply(this, arguments);
                                        };
                                    }()));

                                  case 70:
                                    if (y) {
                                        r.next = 72;
                                        break;
                                    }
                                    return r.abrupt("return");

                                  case 72:
                                    return r.next = 74, Promise.all(o.map(function() {
                                        var t = (0, ke.Z)(Te().mark((function t(e) {
                                            var r, i, a, s, o;
                                            return Te().wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                  case 0:
                                                    if ((r = n.getComponentByIndex(e)) && 0 !== r.reprList.length) {
                                                        t.next = 3;
                                                        break;
                                                    }
                                                    return t.abrupt("return");

                                                  case 3:
                                                    return i = (0, b.Z)(r.reprList, 1), (a = i[0]).setVisibility(!1), t.next = 7, n.tmAlignToReference(e);

                                                  case 7:
                                                    s = t.sent, o = s.matrix, a.setParameters(n.regularStyleParameters), r.setTransform(o), 
                                                    a.setVisibility(!0);

                                                  case 12:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }), t);
                                        })));
                                        return function(e) {
                                            return t.apply(this, arguments);
                                        };
                                    }()));

                                  case 74:
                                    n.updateMask();

                                  case 75:
                                  case "end":
                                    return r.stop();
                                }
                            }), r, null, [ [ 12, 23, 26, 29 ], [ 30, 41, 44, 47 ] ]);
                        })))();
                    },
                    updateMask: function() {
                        var t = this;
                        return (0, ke.Z)(Te().mark((function e() {
                            return Te().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t.stage.eachRepresentation((function(t) {
                                        t.build();
                                    }));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }), e);
                        })))();
                    }
                },
                watch: {
                    "$vuetify.theme.dark": function() {
                        this.stage.viewer.setBackground(this.bgColor);
                    },
                    selection: function(t, e) {
                        this.updateEntries(t, e);
                    },
                    mask: function(t, e) {
                        this.updateMask();
                    }
                },
                computed: {
                    bgColor: function() {
                        return this.$vuetify.theme.dark ? this.bgColorDark : this.bgColorLight;
                    },
                    ambientIntensity: function() {
                        this.$vuetify.theme.dark;
                    },
                    stageParameters: function() {
                        return {
                            log: "none",
                            backgroundColor: this.bgColor,
                            transparent: !0,
                            ambientIntensity: this.ambientIntensity,
                            clipNear: -1e3,
                            clipFar: 1e3,
                            fogFar: 1e3,
                            fogNear: -1e3,
                            quality: "high",
                            tooltip: !1
                        };
                    }
                }
            };
            n(4678);
            var pn = (0, V.Z)(hn, rn, [], !1, null, "06a02575", null);
            pn.options.__file = "frontend/StructureViewerMSA.vue";
            const An = pn.exports;
            var gn = function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    ref: "parentDiv",
                    staticStyle: {
                        padding: "10px",
                        height: "inherit",
                        width: "100%",
                        "overflow-y": "auto"
                    }
                }, [ n("canvas", {
                    class: t.canvasClass,
                    attrs: {
                        id: "tree"
                    },
                    on: {
                        click: t.handleClick,
                        mousemove: t.handleMouseOver,
                        mouseleave: t.handleMouseLeave
                    }
                }) ]);
            };
            function mn(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return fn(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fn(t, e);
                    }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(t);
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t;
                    },
                    e: function(t) {
                        o = !0, a = t;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function fn(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function bn(t, e) {
                var n, r = [], i = {}, a = i, s = [], o = mn(t.split(/\s*(;|\(|\)|,|:)\s*/));
                try {
                    for (o.s(); !(n = o.n()).done; ) {
                        var l = n.value;
                        switch (l) {
                          case "(":
                            var c = {
                                height: 1
                            };
                            a.branches = [ c ], r.push(a), a = c;
                            break;

                          case ",":
                            c = {
                                height: 1
                            }, r[r.length - 1].branches.push(c), a = c;
                            break;

                          case ")":
                            (a = r.pop()).branches && (a.height = vn(a));
                            break;

                          default:
                            l.length > 0 && (a.name = S(l), s.push(a.name));
                        }
                    }
                } catch (t) {
                    o.e(t);
                } finally {
                    o.f();
                }
                return {
                    tree: i = function(t, e) {
                        function n(t) {
                            return t.branches && 0 !== t.branches.length ? Math.min.apply(Math, (0, f.Z)(t.branches.map(n))) : e.indexOf(t.name);
                        }
                        return function t(e) {
                            if (e.branches && 0 !== e.branches.length && (e.branches.forEach(t), n(e.branches[0]) > n(e.branches[1]))) {
                                var r = [ e.branches[1], e.branches[0] ];
                                e.branches[0] = r[0], e.branches[1] = r[1];
                            }
                        }(t), t;
                    }(i, e),
                    headers: s
                };
            }
            function vn(t) {
                if (!t.branches || 0 === t.branches.length) return 1;
                var e = 0;
                return t.branches.forEach((function(t) {
                    e += vn(t);
                })), e;
            }
            function yn(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (!t) return e;
                if (!t.branches || 0 === t.branches.length) return e;
                var n = e;
                return t.branches.forEach((function(t) {
                    n = Math.max(n, yn(t, e + 1));
                })), n;
            }
            gn._withStripped = !0;
            const Cn = {
                data: function() {
                    return {
                        tree: {},
                        headers: [],
                        resizeObserver: null,
                        headerStartX: null,
                        isHovering: !1
                    };
                },
                props: {
                    newick: {
                        type: String
                    },
                    selection: {
                        type: Array
                    },
                    reference: {
                        type: Number
                    },
                    order: {
                        type: Array
                    },
                    fontNormal: {
                        type: String,
                        default: "normal 12px sans-serif"
                    },
                    fontSelected: {
                        type: String,
                        default: "normal 600 12px sans-serif"
                    },
                    referenceColor: {
                        type: String,
                        default: "#1E88E5"
                    },
                    selectionColor: {
                        type: String,
                        default: "#E6AC00"
                    },
                    maxHeaderChars: {
                        type: Number,
                        default: 25
                    }
                },
                computed: {
                    strokeStyle: function() {
                        return this.$vuetify.theme.dark ? "white" : "black";
                    },
                    canvasClass: function() {
                        return this.isHovering ? "hover" : "";
                    }
                },
                watch: {
                    tree: function() {
                        this.visualiseTree();
                    },
                    "$vuetify.theme.dark": function() {
                        this.visualiseTree();
                    },
                    selection: function() {
                        this.visualiseTree();
                    }
                },
                methods: {
                    drawElbowConnector: function(t, e, n, r, i) {
                        t.beginPath(), t.moveTo(e, n), t.lineTo(e, i), t.lineTo(r, i), t.strokeStyle = this.strokeStyle, 
                        t.stroke(), t.closePath();
                    },
                    isSelection: function(t) {
                        return !!this.selection && this.selection.includes(t.name);
                    },
                    isReference: function(t) {
                        return void 0 !== this.reference && -1 !== this.reference && t.name === this.order[this.reference];
                    },
                    drawTree: function(t, e, n, r, i, a) {
                        var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 100, c = e.branches ? n + i : l, d = r + a * (0 === o ? -(e.branches ? e.branches[1].height : .5) : +(e.branches ? e.branches[0].height : .5));
                        if (this.drawElbowConnector(t, n, r, c, d), e.branches) for (var u = 0; u < e.branches.length; u++) this.drawTree(t, e.branches[u], c, d, i, a, s + 1, u, l); else {
                            this.selection && (t.font = this.isSelection(e) ? this.fontSelected : this.fontNormal, 
                            t.fillStyle = this.isSelection(e) ? this.isReference(e) ? this.referenceColor : this.selectionColor : this.strokeStyle);
                            var h = e.name.length > this.maxHeaderChars ? "".concat(e.name.substring(0, this.maxHeaderChars), "…") : e.name;
                            t.fillText(h, c + 5, d + 4);
                        }
                    },
                    clearTree: function() {
                        var t = document.getElementById("tree");
                        t.getContext("2d").clearRect(0, 0, t.width, t.height);
                    },
                    visualiseTree: function() {
                        var t = this, e = document.getElementById("tree");
                        if (e) {
                            var n = e.getContext("2d");
                            n.clearRect(0, 0, e.width, e.height), n.strokeStyle = this.strokeStyle, n.font = this.fontSelected;
                            var r = 0, i = 0;
                            this.headers.forEach((function(e) {
                                var a = n.measureText(e.substring(0, t.maxHeaderChars + 3)), s = a.width, o = a.fontBoundingBoxAscent;
                                r = Math.max(r, s), i = Math.max(i, o);
                            })), i *= 2, e.style.width = "100%", e.style.height = "".concat(this.headers.length * i, "px");
                            var a = yn(this.tree), s = e.offsetWidth - r, o = s / (a + 1);
                            this.headerStartX = s;
                            var l = window.devicePixelRatio;
                            e.height = this.headers.length * i * l, e.width = e.offsetWidth * l, n.scale(l, l), 
                            n.font = this.fontNormal, this.drawTree(n, this.tree, -5, this.headers.length * i, o, i, 0, 0, s);
                        }
                    },
                    handleClick: function(t) {
                        if (t.layerX > this.headerStartX) {
                            var e = t.target.height / this.headers.length, n = Math.floor(t.offsetY * window.devicePixelRatio / e), r = 0 === this.selection.length || t.altKey ? "newStructureReference" : "newStructureSelection";
                            this.$emit(r, n);
                        }
                    },
                    handleMouseOver: function(t) {
                        this.isHovering = t.layerX > this.headerStartX;
                    },
                    handleMouseLeave: function() {
                        this.isHovering = !1;
                    }
                },
                mounted: function() {
                    var t = bn(this.newick, this.order), e = t.tree, n = t.headers;
                    this.tree = e, this.headers = n, this.resizeObserver = new ResizeObserver(O(this.visualiseTree, 200)).observe(this.$refs.parentDiv);
                },
                beforeDestroy: function() {
                    this.resizeObserver && this.resizeObserver.disconnect();
                }
            };
            n(6406);
            var xn = (0, V.Z)(Cn, gn, [], !1, null, null, null);
            xn.options.__file = "frontend/Tree.vue";
            function wn(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return Sn(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Sn(t, e);
                    }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(t);
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t;
                    },
                    e: function(t) {
                        o = !0, a = t;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function Sn(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            const Mn = {
                components: {
                    MSAView: Se,
                    StructureViewer: nn,
                    StructureViewerMSA: An,
                    Tree: xn.exports
                },
                props: {
                    entries: [],
                    scores: [],
                    statistics: {},
                    tree: ""
                },
                data: function() {
                    return {
                        mask: [],
                        structures: [],
                        lineLen: 80,
                        cssGradients: null,
                        gradientRatio: null,
                        blockIndex: 0,
                        alphabet: "aa",
                        colorScheme: "lddt",
                        matchRatioInner: 0,
                        structureViewerSelection: [],
                        structureViewerReference: 0,
                        isLoadingStructure: !1,
                        numMinimapGradients: 30,
                        settingsPanelOpen: !0,
                        selectedColumn: -1
                    };
                },
                watch: {
                    matchRatio: O((function() {
                        this.handleUpdateMatchRatio();
                    }), 400)
                },
                beforeMount: function() {
                    this.handleUpdateMatchRatio();
                    var t, e = wn(this.entries);
                    try {
                        for (e.s(); !(t = e.n()).done; ) {
                            var n = t.value;
                            n.name = S(n.name);
                        }
                    } catch (t) {
                        e.e(t);
                    } finally {
                        e.f();
                    }
                },
                mounted: function() {
                    window.addEventListener("scroll", this.handleScroll), this.structureViewerSelection = [ 0, 1 ];
                },
                beforeDestroy: function() {
                    window.removeEventListener("scroll", this.handleScroll);
                },
                computed: {
                    matchRatio: {
                        get: function() {
                            return this.matchRatioInner;
                        },
                        set: function(t) {
                            this.matchRatioInner = function(t, e, n) {
                                return Math.min(Math.max(t, e), n);
                            }(t, 0, 1), this.$emit("input", this.matchRatioInner);
                        }
                    },
                    alnLen: function() {
                        return this.entries.length > 0 ? this.mask.reduce((function(t, e) {
                            return t + e;
                        }), 0) : 0;
                    },
                    structureViewerProps: function() {
                        return {
                            structures: this.entries
                        };
                    },
                    structureViewerEntries: function() {
                        var t = this;
                        return this.structureViewerSelection.map((function(e) {
                            return t.entries[e];
                        }));
                    },
                    msaViewEntries: function() {
                        var t = this;
                        return this.entries.map((function(e) {
                            for (var n = {
                                name: e.name,
                                aa: "",
                                ss: ""
                            }, r = 0; r < t.mask.length; r++) 1 === t.mask[r] && (n.aa += e.aa[r], n.ss += e.ss[r]);
                            return n;
                        }));
                    },
                    msaViewScores: function() {
                        var t = this;
                        return this.scores.filter((function(e, n) {
                            return 1 === t.mask[n];
                        }));
                    },
                    settingsBtnIcon: function() {
                        return this.settingsPanelOpen ? A.ChevronLeft : A.ChevronRight;
                    }
                },
                methods: {
                    toggleSettingsPanel: function() {
                        this.settingsPanelOpen = !this.settingsPanelOpen;
                    },
                    handleUpdateMatchRatio: function() {
                        0 === this.matchRatio ? this.mask = new Array(this.entries[0].aa.length).fill(1) : this.mask = function(t, e) {
                            for (var n = t[0].aa.length, r = new Array(n).fill(0), i = 0; i < n; i++) {
                                for (var a = 0, s = 0, o = 0; o < t.length; o++) "-" === t[o].aa[i] ? a++ : s++;
                                s / (a + s) >= e && (r[i] = 1);
                            }
                            return r;
                        }(this.entries, this.matchRatio);
                    },
                    handleStructureLoadingChange: function(t) {
                        this.isLoadingStructure = t;
                    },
                    handleNewStructureViewerReference: function(t) {
                        if (t === this.structureViewerReference) return this.structureViewerSelection = [], 
                        void (this.structureViewerReference = -1);
                        var e = this.structureViewerSelection.slice();
                        -1 === e.indexOf(t) && e.push(t), this.structureViewerSelection = e, this.structureViewerReference = t;
                    },
                    handleNewStructureViewerSelection: function(t) {
                        if (t === this.structureViewerReference) return this.structureViewerSelection = [], 
                        void (this.structureViewerReference = -1);
                        var e = this.structureViewerSelection.slice(), n = e.indexOf(t);
                        -1 !== n ? e.splice(n, 1) : e.push(t), this.structureViewerSelection = e;
                    },
                    getEntry: function(t) {
                        return this.entries.find((function(e) {
                            return e.name === t;
                        }));
                    },
                    makeMockAlignment: function(t, e) {
                        var n = this.entries[t], r = this.entries[e];
                        if (n && r) {
                            var i = function(t, e) {
                                for (var n = {
                                    backtrace: ""
                                }, r = !1, i = 0, a = 0, s = 0; i < t.length; ) {
                                    var o = t[i], l = e[i];
                                    "-" === o && "-" === l || ("-" === o ? (r && (n.backtrace += "D"), ++s) : "-" === l ? (r && (n.backtrace += "I"), 
                                    ++a) : (r || (r = !0, n.qStartPos = a, n.dbStartPos = s), n.backtrace += "M", n.qEndPos = a, 
                                    n.dbEndPos = s, ++a, ++s)), ++i;
                                }
                                return n.qStartPos++, n.dbStartPos++, n;
                            }(n.aa, r.aa);
                            return i.query = n.name, i.target = r.name, i.qCa = n.ca, i.tCa = r.ca, i.qSeq = n.aa.replace(/-/g, ""), 
                            i.qAln = n.aa, i.tSeq = r.aa.replace(/-/g, ""), i.dbAln = r.aa, {
                                queryMap: T(i.qStartPos, i.qAln),
                                targetMap: T(i.dbStartPos, i.dbAln),
                                alignment: i
                            };
                        }
                    },
                    handleMapBlockClick: function(t) {
                        var e = document.querySelector(".minimap").offsetHeight + 60, n = this.$refs.msaView.$el.children[t].getBoundingClientRect();
                        window.scrollTo({
                            behavior: "smooth",
                            top: n.top + window.scrollY - e
                        });
                    },
                    handleAlphabetChange: function(t) {
                        this.alphabet = t.target.value;
                    },
                    gradientBlockCSS: function(t) {
                        return {
                            width: "100%"
                        };
                    },
                    handleLineLenChange: function(t) {
                        this.lineLen = parseInt(t.target.value);
                    },
                    minimapBlock: function(t) {
                        return {
                            "--bg-color": this.blockIndex === t ? "rgba(255, 0, 0, 0.3)" : null,
                            "--bg-color-hover": this.$vuetify.theme.dark ? "rgba(255, 255, 255, 0.5)" : "rgba(100, 100, 100, 0.5)",
                            "flex-basis": "".concat(this.gradientRatio[t], "%")
                        };
                    },
                    handleScroll: function() {
                        var t = this.$refs.msaView.$el.getBoundingClientRect(), e = Math.ceil(this.alnLen / this.lineLen), n = t.height / e, r = window.scrollY + t.top, i = r + t.height, a = window.scrollY + 180;
                        this.blockIndex = a < r ? 0 : a > i ? e : Math.floor((a - r) / n);
                    },
                    handleLineLen: function(t) {
                        this.lineLen = t;
                    },
                    handleCSSGradient: function(t) {
                        var e = Math.ceil(this.alnLen / this.lineLen), n = t.length / e;
                        if (this.cssGradients = Array.from({
                            length: e
                        }, (function() {
                            return [];
                        })), n < this.numMinimapGradients) this.cssGradients.forEach((function(e, r) {
                            var i = r * n, a = t.slice(i, i + n);
                            e.push.apply(e, (0, f.Z)(a));
                        })); else for (var r = (n - 1) / (this.numMinimapGradients - 1), i = 0; i < e; i++) for (var a = 0; a < this.numMinimapGradients; a++) this.cssGradients[i].push(t[Math.round(a * r) + i * n]);
                        var s = this.cssGradients[e - 1][0].split("%,").length / 2, o = (e - 1) * this.lineLen + s;
                        this.gradientRatio = new Array(e - 1).fill(this.lineLen / o * 100), this.gradientRatio.push(s / o * 100);
                    }
                }
            };
            n(7316);
            var kn = n(7024), In = n(7894), Tn = n(4317), En = n(9866), Rn = (0, V.Z)(Mn, ce, [], !1, null, null, null);
            Z()(Rn, {
                VBtn: Y.Z,
                VBtnToggle: _t.Z,
                VCard: W.Z,
                VCardText: K.ZB,
                VCardTitle: K.EB,
                VCol: kn.Z,
                VContainer: Ft.Z,
                VIcon: J.Z,
                VRow: In.Z,
                VSimpleTable: Tn.Z,
                VTextField: En.Z
            }), Rn.options.__file = "frontend/MSA.vue";
            const Ln = {
                components: {
                    MSA: Rn.exports,
                    Local: ie
                },
                data: function() {
                    return {
                        entries: [],
                        scores: [],
                        statistics: {},
                        key: "",
                        tree: ""
                    };
                },
                mounted: function() {
                    var t = this;
                    document.onreadystatechange = function() {
                        if ("complete" == document.readyState) {
                            var e = document.getElementById("data");
                            if (!e) return null;
                            var n = JSON.parse(e.textContent);
                            t.handleUploadData(n);
                        }
                    };
                },
                methods: {
                    clearData: function() {
                        this.key = "", this.entries = [], this.scores = [], this.statistics = {};
                    },
                    handleUploadData: function(t) {
                        this.clearData(), this.key = k(), this.entries = t.entries, this.scores = t.scores, 
                        this.statistics = t.statistics, this.tree = t.tree, this.entries.forEach((function(t) {
                            t.name = S(t.name);
                        }));
                    },
                    handleDownloadData: function() {
                        this.entries && I({
                            entries: this.entries,
                            scores: this.scores,
                            statistics: this.statistics,
                            tree: this.tree
                        }, "FoldMason-".concat(k(), ".json"));
                    }
                }
            };
            var Nn = (0, V.Z)(Ln, le, [], !1, null, null, null);
            Nn.options.__file = "frontend/MSALocal.vue";
            const On = {
                components: {
                    ResultLocal: oe,
                    MSALocal: Nn.exports
                }
            };
            var Bn = n(2659), Dn = n(5091), qn = (0, V.Z)(On, g, [], !1, null, null, null);
            Z()(qn, {
                VApp: Bn.Z,
                VMain: Dn.Z
            }), qn.options.__file = "frontend/AppLocal.vue";
            const Pn = qn.exports;
            n(654);
            r.Z.use(i.Z), r.Z.use(h);
            var _n = {
                mmseqs: n(8615).Z,
                foldseek: n(5473).Z,
                foldmason: n(5106).Z
            };
            window.document.title = _n.foldmason.APP_NAME + " Search Server";
            var Fn = window.matchMedia("(prefers-color-scheme: dark)"), Vn = new i.Z({
                icons: {
                    iconfont: "mdiSvg"
                },
                theme: {
                    dark: Fn.matches
                }
            });
            Fn.addEventListener("change", (function(t) {
                Vn.framework.theme.dark = t.matches;
            })), r.Z.use({
                install: function(t, e) {
                    t.prototype.$APP = "foldmason", t.prototype.$STRINGS = _n.foldmason, t.prototype.$ELECTRON = !1, 
                    t.prototype.$LOCAL = !0, t.prototype.$MDI = A, t.prototype.__OS__ = {
                        arch: "web",
                        platform: "web"
                    }, t.prototype.mmseqsVersion = "web", t.prototype.saveResult = function() {}, t.prototype.handleTitleBarDoubleClick = function() {};
                }
            });
            new r.Z({
                el: "#app",
                vuetify: Vn,
                render: function(t) {
                    return t(Pn);
                }
            });
        },
        9837: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, 'body, svg text, #app.electron {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif !important;\n}\n\nbody {\n    background-color: #fff;\n}\n\n@media screen and (prefers-color-scheme: dark) {\n    html, body {\n        background-color: #121212;\n        color-scheme: dark;\n    }\n}\n\nsvg a {\n    cursor: pointer;\n}\n\n.monospace, .mono, pre {\n    font-family: ui-monospace, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n}\n\n.loading {\n    -webkit-animation: spin 1000ms infinite linear;\n    animation: spin 1000ms infinite linear;\n}\n\n@-webkit-keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n@keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n\n.input-group .tooltip label {\n    max-width: 100%;\n}\n\nmain.content {\n    max-width: 1536px;\n}\n\n@media print {\n    nav.v-navigation-drawer, header.v-app-bar {\n        display: none !important;\n    }\n    main {\n        padding: 1cm !important;\n    }\n    .v-card, .v-sheet {\n        border: 0px solid transparent !important;\n        outline: 0px solid transparent !important;\n        box-shadow: none !important;\n    }\n}\n\n#app.electron a {\n    -webkit-user-drag: none;\n}\n\n#app.electron .v-toolbar__content, #app.electron .v-input label {\n    user-select: none;\n}', "", {
                version: 3,
                sources: [ "webpack://./frontend/assets/style.css" ],
                names: [],
                mappings: "AAAA;IACI,8JAA8J;AAClK;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI;QACI,yBAAyB;QACzB,kBAAkB;IACtB;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gOAAgO;AACpO;;AAEA;IACI,8CAA8C;IAC9C,sCAAsC;AAC1C;;AAEA;IACI;QACI,+BAA+B;QAC/B,uBAAuB;IAC3B;IACA;QACI,iCAAiC;QACjC,yBAAyB;IAC7B;AACJ;AACA;IACI;QACI,+BAA+B;QAC/B,uBAAuB;IAC3B;IACA;QACI,iCAAiC;QACjC,yBAAyB;IAC7B;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI;QACI,wBAAwB;IAC5B;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,wCAAwC;QACxC,yCAAyC;QACzC,2BAA2B;IAC/B;AACJ;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB",
                sourcesContent: [ 'body, svg text, #app.electron {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif !important;\n}\n\nbody {\n    background-color: #fff;\n}\n\n@media screen and (prefers-color-scheme: dark) {\n    html, body {\n        background-color: #121212;\n        color-scheme: dark;\n    }\n}\n\nsvg a {\n    cursor: pointer;\n}\n\n.monospace, .mono, pre {\n    font-family: ui-monospace, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n}\n\n.loading {\n    -webkit-animation: spin 1000ms infinite linear;\n    animation: spin 1000ms infinite linear;\n}\n\n@-webkit-keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n@keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n\n.input-group .tooltip label {\n    max-width: 100%;\n}\n\nmain.content {\n    max-width: 1536px;\n}\n\n@media print {\n    nav.v-navigation-drawer, header.v-app-bar {\n        display: none !important;\n    }\n    main {\n        padding: 1cm !important;\n    }\n    .v-card, .v-sheet {\n        border: 0px solid transparent !important;\n        outline: 0px solid transparent !important;\n        box-shadow: none !important;\n    }\n}\n\n#app.electron a {\n    -webkit-user-drag: none;\n}\n\n#app.electron .v-toolbar__content, #app.electron .v-input label {\n    user-select: none;\n}' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        5426: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, '\n.residues {\n    font-family: InconsolataClustal, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n    white-space: pre;\n}\n.alignment-wrapper-outer {\n    display: inline-block;\n    overflow-x: auto;\n}\n.inselection, .inselection * {\n    user-select: none;\n}\n.inselection span.target, span.target * {\n    user-select: text !important;\n}\n.alignment-wrapper-inner .line {\n    display: inline-block;\n    margin-bottom: 0.5em;\n    white-space: nowrap;\n}\n', "", {
                version: 3,
                sources: [ "webpack://./frontend/Alignment.vue" ],
                names: [],
                mappings: ";AA0FA;IACA,sOAAA;IACA,gBAAA;AACA;AACA;IACA,qBAAA;IACA,gBAAA;AACA;AACA;IACA,iBAAA;AACA;AACA;IACA,4BAAA;AACA;AACA;IACA,qBAAA;IACA,oBAAA;IACA,mBAAA;AACA",
                sourcesContent: [ '<template>\n    <div :id="alnIndex" class="alignment-wrapper-inner">\n        <span class="monospace" v-for="i in Math.max(1, Math.ceil(alignment.alnLength / lineLen))" :key="i">\n            <span :id="i" class="line" ref="lines">\n                <span>Q&nbsp;{{padNumber(getQueryRowStartPos(i), (Math.max(alignment.qStartPos, alignment.dbStartPos) + alignment.alnLength+"").length, \'&nbsp;\')}}</span>&nbsp;\x3c!--\n                --\x3e<ResidueSpan sequenceType="query">\x3c!--\n                    --\x3e{{alignment.qAln.substring((i-1)*lineLen,  (i-1)*lineLen+lineLen)}}\x3c!--\n                --\x3e</ResidueSpan><br>\x3c!--\n                --\x3e<span>{{\'&nbsp;\'.repeat(3+(Math.max(alignment.qStartPos, alignment.dbStartPos) + alignment.alnLength+"").length)}}</span>\x3c!--\n                --\x3e<span class="residues diff">{{formatAlnDiff(alignment.qAln.substring((i-1)*lineLen,  (i-1)*lineLen+lineLen), alignment.dbAln.substring((i-1)*lineLen, (i-1)*lineLen+lineLen))}}</span><br>\x3c!--\n                --\x3e<span>T&nbsp;{{padNumber(getTargetRowStartPos(i), (Math.max(alignment.qStartPos, alignment.dbStartPos) + alignment.alnLength+"").length, \'&nbsp;\')}}</span>&nbsp;\x3c!--\n                --\x3e<ResidueSpan\n                    sequenceType="target"\n                    :selectionStart="getSelectionStart(i)"\n                    :selectionEnd="getSelectionEnd(i)"\n                    @selectstart="onSelectStart($event, alnIndex, i)"\n                    @pointerup="onPointerUp($event, alnIndex, i)"\n                >{{alignment.dbAln.substring((i-1)*lineLen, (i-1)*lineLen+lineLen)}}\x3c!--\n                --\x3e</ResidueSpan>\n            </span><br>\n        </span>\n    </div>\n</template>\n\n<script>\n    \nimport ResidueSpan from \'./ResidueSpan.vue\'\n\n// cat blosum62.out  | grep -v \'^#\' | awk \'NR == 1 { for (i = 1; i <= NF; i++) { r[i] = $i; } next; } { col = $1; for (i = 2; i <= NF; i++) { print col,r[i-1],$i; } }\' | awk \'$3 > 0 && $1 != $2 { printf "\\""$1""$2"\\",";}\'\nconst blosum62Sim = [\n    "AG", "AS", "DE", "DN",\n    "ED", "EK", "EQ", "FL",\n    "FM", "FW", "FY", "GA",\n    "HN", "HQ", "HY", "IL",\n    "IM", "IV", "KE", "KQ",\n    "KR", "LF", "LI", "LM",\n    "LV", "MF", "MI", "ML",\n    "MV", "ND", "NH", "NQ",\n    "NS", "QE", "QH", "QK",\n    "QN", "QR", "RK", "RQ",\n    "SA", "SN", "ST", "TS",\n    "VI", "VL", "VM", "WF",\n    "WY", "YF", "YH", "YW"\n]\n\nexport default {\n    props: [\'alignment\', \'lineLen\', \'queryMap\', \'targetMap\', \'showhelp\', \'alnIndex\', \'highlights\'],\n    components: { ResidueSpan },\n    methods: {\n        getSelectionStart(i) {\n            return (i > 0 && i <= this.highlights.length) ? this.highlights[i-1][0] : 0;\n        },\n        getSelectionEnd(i) {\n            return (i > 0 && i <= this.highlights.length) ? this.highlights[i-1][1] : 0;\n        },\n\n        // Get the index of a given residue in the alignment\n        getQueryIndex(index) { return this.queryMap[index] },\n        getTargetIndex(index) { return this.targetMap[index] },\n        getFirstResidueNumber(map, i) {\n            let start = this.lineLen * (i - 1)\n            while (map[start] === null) start--\n            return map[start]\n        },\n        getQueryRowStartPos(i) { return this.getFirstResidueNumber(this.queryMap, i) },\n        getTargetRowStartPos(i) { return this.getFirstResidueNumber(this.targetMap, i) },\n        formatAlnDiff(seq1, seq2) {\n            if (seq1.length != seq2.length) return \'\'\n            var res = \'\'\n            for (var i = 0; i < seq1.length; i++) {\n                if (seq1[i] == seq2[i]) res += seq1[i];\n                else if (blosum62Sim.indexOf(seq1[i] + seq2[i]) != -1) res += \'+\';\n                else res += \' \';\n            }\n            return res;\n        },\n        padNumber(nr, n, str){\n            return Array(n - String(nr).length + 1).join(str || \'0\') + nr\n        },\n        onSelectStart(event, alnIndex, lineNo) {\n            this.$emit(\'residueSelectStart\', event, alnIndex, lineNo);\n        },\n        onPointerUp(event, alnIndex, lineNo) {\n            this.$emit(\'residuePointerUp\', event, alnIndex, lineNo);\n        }\n    }, \n}\n<\/script>\n\n<style>\n.residues {\n    font-family: InconsolataClustal, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n    white-space: pre;\n}\n.alignment-wrapper-outer {\n    display: inline-block;\n    overflow-x: auto;\n}\n.inselection, .inselection * {\n    user-select: none;\n}\n.inselection span.target, span.target * {\n    user-select: text !important; \n}\n.alignment-wrapper-inner .line {\n    display: inline-block;\n    margin-bottom: 0.5em;\n    white-space: nowrap;\n}\n</style>\n' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        7562: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\n.alignment-panel[data-v-89abb500] {\n    display: inline-flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    width: 100%;\n}\n.alignment-wrapper-outer[data-v-89abb500] {\n    display: inline-flex;\n    flex-direction: column;\n}\n.alignment-wrapper-inner[data-v-89abb500] {\n    padding-bottom: 1em;\n}\n.alignment-structure-wrapper[data-v-89abb500] {\n    min-width:450px;\n    margin: 0;\n    margin-bottom: auto;\n}\n@media screen and (max-width: 960px) {\n.alignment-wrapper-outer[data-v-89abb500], .alignment-panel[data-v-89abb500]  {\n        display: flex;\n}\n.alignment-panel[data-v-89abb500] {\n        flex-direction: column-reverse;\n}\n.alignment-structure-wrapper[data-v-89abb500] {\n        padding-bottom: 1em;\n}\n.alignment-wrapper-outer[data-v-89abb500], .alignment-structure-wrapper[data-v-89abb500] {\n        align-self: center;\n}\n}\n@media screen and (min-width: 961px) {\n.alignment-structure-wrapper[data-v-89abb500] {\n        padding-left: 2em;\n}\n}\n\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/AlignmentPanel.vue" ],
                names: [],
                mappings: ";AAwPA;IACA,oBAAA;IACA,iBAAA;IACA,uBAAA;IACA,WAAA;AACA;AAEA;IACA,oBAAA;IACA,sBAAA;AACA;AAEA;IACA,mBAAA;AACA;AAEA;IACA,eAAA;IACA,SAAA;IACA,mBAAA;AACA;AAEA;AACA;QACA,aAAA;AACA;AACA;QACA,8BAAA;AACA;AACA;QACA,mBAAA;AACA;AAEA;QACA,kBAAA;AACA;AACA;AAEA;AACA;QACA,iBAAA;AACA;AACA",
                sourcesContent: [ '<template>\n    <div class="alignment-panel" slot="content">\n        <div class="alignment-wrapper-outer">\n            <div style="line-height: 1.2em; display: flex; flex-direction: row; width: 100%; justify-content: space-between; margin-bottom: 1em;">\n                <small v-if="$APP == \'foldseek\'">\n                    Select target residues to highlight their structure.<br style="height: 0.2em">\n                    Click on highlighted sequences to dehighlight the corresponding chain.\n                </small>\n                <v-btn\n                    small\n                    title="Clear sequence selection"\n                    @click="clearAllSelection"\n                    :disabled="hasSelection"\n                >\n                    {{ (alignments[0].hasOwnProperty("complexu")) ? "Clear all selections" : "Clear selection" }}&nbsp;\n                    <v-icon style="width: 16px;">{{ $MDI.CloseCircle }}</v-icon>\n                </v-btn>\n            </div>\n\n            <template v-for="(alignment, index) in alignments">\n                {{ alignment.query.lastIndexOf(\'_\') != -1 ? alignment.query.substring(alignment.query.lastIndexOf(\'_\')+1) : \'\' }} ➔ {{ alignment.target }}\n                <Alignment\n                    :key="`aln2-${alignment.id}`"\n                    :alnIndex="index"\n                    :alignment="alignment"\n                    :lineLen="lineLen"\n                    :queryMap="queryMaps[index]"\n                    :targetMap="targetMaps[index]"\n                    :showhelp="index == alignments.length - 1"\n                    :highlights="highlights[index]"\n                    ref="alignments"\n                    @residueSelectStart="onResidueSelectStart"\n                    @residuePointerUp="onResiduePointerUp"\n                />\n            </template>\n        </div>\n        <div v-if=" $APP == \'foldseek\'" class="alignment-structure-wrapper">\n            <StructureViewer\n                :key="`struc2-${alignments[0].id}`"\n                :alignments="alignments"\n                :highlights="structureHighlights" \n                :hits="hits"\n                bgColorLight="white"\n                bgColorDark="#1E1E1E"\n                qColor="lightgrey"\n                tColor="red"\n                qRepr="cartoon"\n                tRepr="cartoon"\n                ref="structureViewer"\n            />\n        </div>\n    </div>\n</template>\n\n<script>\nimport Alignment from \'./Alignment.vue\'\nimport { makePositionMap } from \'./Utilities.js\'\n\n/**\n * Count characters up until the given node in the parent span.\n * e.g. with layout <span 1/><span 2/><span 3/>\n * Text selection which starts/ends in span 3 will have offset relative only to span 3,\n * so we need to include length of spans 1 + 2\n */\nfunction calculateOffset(node) {\n    let container = node.closest("span.residues")\n    let children = container.querySelectorAll("span");\n    let length = 0;\n    for (let child of children) {\n        if (child === node)\n            break;\n        length += child.textContent.length;\n    }\n    return length;\n}\n\nfunction countCharacter(string, char) {\n    let count = 0;\n    for (let c of string) {\n        if (c === char) count++;\n    }\n    return count;\n}\n\nexport default {\n    components: { StructureViewer: () => __APP__ == "foldseek" ? import(\'./StructureViewer.vue\') : null, Alignment },\n    data: () => ({\n        queryMap: null,\n        targetMap: null,\n        highlights: [],\n        structureHighlights: [],\n        isSelecting: false,\n    }),\n    props: {\n        alignments: { type: Array, required: true, },\n        lineLen: { type: Number, required: true, },\n        hits: { type: Object }\n    },\n    computed: {\n        hasSelection() {\n            return !this.structureHighlights.some(e => e !== null);\n        }\n    },\n    methods: {\n        getFirstResidueNumber(map, i) {\n            let start = this.lineLen * (i - 1);\n            while (map[start] === null) start--;\n            return map[start];\n        },\n        getQueryRowStartPos(alnIndex, i) { return this.getFirstResidueNumber(this.queryMaps[alnIndex], i) },\n        getTargetRowStartPos(alnIndex, i) { return this.getFirstResidueNumber(this.targetMaps[alnIndex], i) },\n        setEmptyHighlight() {\n            this.highlights = this.alignments.map(a => new Array(Math.ceil(a.qAln.length / this.lineLen)).fill([undefined, undefined]))\n        },\n        setEmptyStructureHighlight() {\n            this.structureHighlights = new Array(this.alignments.length).fill(null);\n        },\n        clearAllSelection() {\n            this.setEmptyHighlight();\n            this.setEmptyStructureHighlight();\n        },\n        setAlignmentSelection(selections) {\n            // array per alignment, then array per line in alignment\n            this.setEmptyHighlight();\n            for (let [ alnId, startLine, startOffset, endLine, endOffset, _ ] of selections) {\n                for (let i = startLine; i <= endLine; i++) {\n                    if (i === startLine) {\n                        this.highlights[alnId][i] = [startOffset, (i === endLine) ? endOffset : this.lineLen];\n                    } else if (i === endLine) {\n                        this.highlights[alnId][i] = [0, endOffset];\n                    } else {\n                        this.highlights[alnId][i] = [0, this.lineLen];\n                    }\n                }\n            }\n        },\n        updateMaps() {\n            if (!this.alignments) return\n            this.queryMaps = [];\n            this.targetMaps = [];\n            for (let alignment of this.alignments) {\n                this.queryMaps.push(makePositionMap(alignment.qStartPos, alignment.qAln));\n                this.targetMaps.push(makePositionMap(alignment.dbStartPos, alignment.dbAln));\n            }\n\n        },\n        onResidueSelectStart(event, alnIndex, lineNo) {\n            this.isSelecting = true;\n            document.querySelector(".alignment-wrapper-outer")\n                .classList.add("inselection");\n        },\n        onResiduePointerUp(event, targetAlnIndex, targetLineNo) {\n            if (!this.isSelecting) {\n                // handle as click\n                // this.highlights[targetAlnIndex].splice(targetLineNo - 1, 1, [undefined, undefined]);\n                let a = this.alignments[targetAlnIndex];\n                this.highlights.splice(targetAlnIndex, 1, new Array(Math.ceil(a.qAln.length / this.lineLen)).fill([undefined, undefined]));\n                this.structureHighlights.splice(targetAlnIndex, 1, null);\n                window.getSelection().removeAllRanges();\n                return;\n            }\n            var selection = window.getSelection()\n            \n            // Get text and (sequence) starting position for each selected alignment\n            let chunks = [];\n            let chunk = "";\n            let prevWrapper = null;\n            let currWrapper = null;\n            let lineNo = 0;\n            let alnIndex = 0;\n            let start = {};\n            for (let i = 0; i < selection.rangeCount; i++) {\n                let range = selection.getRangeAt(i);\n                currWrapper = range.startContainer.parentElement.closest(".alignment-wrapper-inner");\n                alnIndex = parseInt(currWrapper.id);\n                lineNo = parseInt(range.startContainer.parentElement.closest(".line").id);\n                \n                // Start/end containers will either be:\n                // #text  - Start/end inside a span, so calculate lengths of spans until that point\n                // <span> - Start/end of entire span (e.g. multiline selection). Start = 0, end = line length\n                let sc = range.startContainer;\n                let ec = range.endContainer;\n                let startOffset = (sc.nodeType === 3) ? range.startOffset + calculateOffset(sc.parentElement) : 0;\n                let endOffset = (ec.nodeType === 3) ? range.endOffset + calculateOffset(ec.parentElement) : this.lineLen;\n                \n                // Test for new container (alignment), store starting line/offset & calculate position in sequence\n                // If in the same alignment, extend sequence and update end line/offset\n                if (!prevWrapper) {\n                    prevWrapper = currWrapper;\n                    let preText = range.startContainer.textContent.slice(0, range.startOffset);\n                    start = {\n                        startLine: lineNo,\n                        startOffset: startOffset,\n                        seqStart: this.getTargetRowStartPos(alnIndex, lineNo) + startOffset - countCharacter(preText, \'-\')\n                    }\n                } else if (currWrapper != prevWrapper) {\n                    chunks.push([parseInt(prevWrapper.id), start, chunk]);\n                    chunk = "";\n                    prevWrapper = currWrapper;\n                    let preText = range.startContainer.textContent.slice(0, startOffset);\n                    start = {\n                        startLine: lineNo,\n                        startOffset: startOffset,\n                        seqStart: this.getTargetRowStartPos(alnIndex, lineNo) + startOffset - countCharacter(preText, \'-\')\n                    }\n                }\n                chunk += range.toString();\n                start.endLine = lineNo;\n                start.endOffset = endOffset;\n            }\n            chunks.push([parseInt(prevWrapper.id), start, chunk])\n\n            // For structure: aln Id, start in sequence, selection length\n            for (let [ alnId, { seqStart }, text ] of chunks) {\n                this.structureHighlights.splice(alnId, 1, [seqStart, text.replace(/[-]/g, \'\').length]);\n            }\n            \n            // For sequence: aln Id, line and start position (in start line), line and end position (in end line)\n            this.setAlignmentSelection(chunks.map(([ alnId, { startLine, startOffset, endLine, endOffset }, chunk ]) => (\n                [ alnId, startLine - 1, startOffset, endLine - 1, endOffset, chunk.length ]\n            )));\n\n            // Make everything else selectable again\n            this.resetUserSelect();\n\n            // Clear selection afterwards to prevent weird highlighting after inserting spans\n            window.getSelection().removeAllRanges();\n        },\n        resetUserSelect() {\n            this.isSelecting = false;\n            let noselects = document.querySelectorAll(".inselection");\n            noselects.forEach(el => { el.classList.remove("inselection") });\n        }\n    },\n    watch: {\n        \'alignment\': function() {\n            this.updateMaps()\n        }\n    },\n    beforeMount() {\n        this.updateMaps()\n        this.setEmptyHighlight();\n        this.setEmptyStructureHighlight();\n    },\n}\n<\/script>\n\n<style scoped>\n.alignment-panel {\n    display: inline-flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    width: 100%;\n}\n\n.alignment-wrapper-outer {\n    display: inline-flex;\n    flex-direction: column;\n}\n\n.alignment-wrapper-inner {\n    padding-bottom: 1em;\n}\n\n.alignment-structure-wrapper {\n    min-width:450px;\n    margin: 0;\n    margin-bottom: auto;\n}\n\n@media screen and (max-width: 960px) {\n    .alignment-wrapper-outer, .alignment-panel  {\n        display: flex;\n    }\n    .alignment-panel {\n        flex-direction: column-reverse;\n    }\n    .alignment-structure-wrapper {\n        padding-bottom: 1em;\n    }\n\n    .alignment-wrapper-outer, .alignment-structure-wrapper {\n        align-self: center;\n    }\n}\n\n@media screen and (min-width: 961px) {\n    .alignment-structure-wrapper {\n        padding-left: 2em;\n    }\n}\n\n</style>\n\n<style>\nspan.selected {\n    border-radius: 4px;\n    background-color: rgba(0, 255, 255, 0.1);\n    box-shadow: 0 0 .4em .1em rgba(0, 255, 255, 0.5);\n    cursor: pointer;\n}\n/* TODO Some sort of banding thing here? */\n/* .alignment-wrapper-inner:nth-child(odd) span.selected {\n    background-color: rgba(0, 255, 100, 0.1);\n    box-shadow: 0 0 .4em .1em rgba(0, 255, 100, 0.5);\n} */\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        5229: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\nspan.selected {\n    border-radius: 4px;\n    background-color: rgba(0, 255, 255, 0.1);\n    box-shadow: 0 0 .4em .1em rgba(0, 255, 255, 0.5);\n    cursor: pointer;\n}\n/* TODO Some sort of banding thing here? */\n/* .alignment-wrapper-inner:nth-child(odd) span.selected {\n    background-color: rgba(0, 255, 100, 0.1);\n    box-shadow: 0 0 .4em .1em rgba(0, 255, 100, 0.5);\n} */\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/AlignmentPanel.vue" ],
                names: [],
                mappings: ";AAuSA;IACA,kBAAA;IACA,wCAAA;IACA,gDAAA;IACA,eAAA;AACA;AACA,0CAAA;AACA;;;GAGA",
                sourcesContent: [ '<template>\n    <div class="alignment-panel" slot="content">\n        <div class="alignment-wrapper-outer">\n            <div style="line-height: 1.2em; display: flex; flex-direction: row; width: 100%; justify-content: space-between; margin-bottom: 1em;">\n                <small v-if="$APP == \'foldseek\'">\n                    Select target residues to highlight their structure.<br style="height: 0.2em">\n                    Click on highlighted sequences to dehighlight the corresponding chain.\n                </small>\n                <v-btn\n                    small\n                    title="Clear sequence selection"\n                    @click="clearAllSelection"\n                    :disabled="hasSelection"\n                >\n                    {{ (alignments[0].hasOwnProperty("complexu")) ? "Clear all selections" : "Clear selection" }}&nbsp;\n                    <v-icon style="width: 16px;">{{ $MDI.CloseCircle }}</v-icon>\n                </v-btn>\n            </div>\n\n            <template v-for="(alignment, index) in alignments">\n                {{ alignment.query.lastIndexOf(\'_\') != -1 ? alignment.query.substring(alignment.query.lastIndexOf(\'_\')+1) : \'\' }} ➔ {{ alignment.target }}\n                <Alignment\n                    :key="`aln2-${alignment.id}`"\n                    :alnIndex="index"\n                    :alignment="alignment"\n                    :lineLen="lineLen"\n                    :queryMap="queryMaps[index]"\n                    :targetMap="targetMaps[index]"\n                    :showhelp="index == alignments.length - 1"\n                    :highlights="highlights[index]"\n                    ref="alignments"\n                    @residueSelectStart="onResidueSelectStart"\n                    @residuePointerUp="onResiduePointerUp"\n                />\n            </template>\n        </div>\n        <div v-if=" $APP == \'foldseek\'" class="alignment-structure-wrapper">\n            <StructureViewer\n                :key="`struc2-${alignments[0].id}`"\n                :alignments="alignments"\n                :highlights="structureHighlights" \n                :hits="hits"\n                bgColorLight="white"\n                bgColorDark="#1E1E1E"\n                qColor="lightgrey"\n                tColor="red"\n                qRepr="cartoon"\n                tRepr="cartoon"\n                ref="structureViewer"\n            />\n        </div>\n    </div>\n</template>\n\n<script>\nimport Alignment from \'./Alignment.vue\'\nimport { makePositionMap } from \'./Utilities.js\'\n\n/**\n * Count characters up until the given node in the parent span.\n * e.g. with layout <span 1/><span 2/><span 3/>\n * Text selection which starts/ends in span 3 will have offset relative only to span 3,\n * so we need to include length of spans 1 + 2\n */\nfunction calculateOffset(node) {\n    let container = node.closest("span.residues")\n    let children = container.querySelectorAll("span");\n    let length = 0;\n    for (let child of children) {\n        if (child === node)\n            break;\n        length += child.textContent.length;\n    }\n    return length;\n}\n\nfunction countCharacter(string, char) {\n    let count = 0;\n    for (let c of string) {\n        if (c === char) count++;\n    }\n    return count;\n}\n\nexport default {\n    components: { StructureViewer: () => __APP__ == "foldseek" ? import(\'./StructureViewer.vue\') : null, Alignment },\n    data: () => ({\n        queryMap: null,\n        targetMap: null,\n        highlights: [],\n        structureHighlights: [],\n        isSelecting: false,\n    }),\n    props: {\n        alignments: { type: Array, required: true, },\n        lineLen: { type: Number, required: true, },\n        hits: { type: Object }\n    },\n    computed: {\n        hasSelection() {\n            return !this.structureHighlights.some(e => e !== null);\n        }\n    },\n    methods: {\n        getFirstResidueNumber(map, i) {\n            let start = this.lineLen * (i - 1);\n            while (map[start] === null) start--;\n            return map[start];\n        },\n        getQueryRowStartPos(alnIndex, i) { return this.getFirstResidueNumber(this.queryMaps[alnIndex], i) },\n        getTargetRowStartPos(alnIndex, i) { return this.getFirstResidueNumber(this.targetMaps[alnIndex], i) },\n        setEmptyHighlight() {\n            this.highlights = this.alignments.map(a => new Array(Math.ceil(a.qAln.length / this.lineLen)).fill([undefined, undefined]))\n        },\n        setEmptyStructureHighlight() {\n            this.structureHighlights = new Array(this.alignments.length).fill(null);\n        },\n        clearAllSelection() {\n            this.setEmptyHighlight();\n            this.setEmptyStructureHighlight();\n        },\n        setAlignmentSelection(selections) {\n            // array per alignment, then array per line in alignment\n            this.setEmptyHighlight();\n            for (let [ alnId, startLine, startOffset, endLine, endOffset, _ ] of selections) {\n                for (let i = startLine; i <= endLine; i++) {\n                    if (i === startLine) {\n                        this.highlights[alnId][i] = [startOffset, (i === endLine) ? endOffset : this.lineLen];\n                    } else if (i === endLine) {\n                        this.highlights[alnId][i] = [0, endOffset];\n                    } else {\n                        this.highlights[alnId][i] = [0, this.lineLen];\n                    }\n                }\n            }\n        },\n        updateMaps() {\n            if (!this.alignments) return\n            this.queryMaps = [];\n            this.targetMaps = [];\n            for (let alignment of this.alignments) {\n                this.queryMaps.push(makePositionMap(alignment.qStartPos, alignment.qAln));\n                this.targetMaps.push(makePositionMap(alignment.dbStartPos, alignment.dbAln));\n            }\n\n        },\n        onResidueSelectStart(event, alnIndex, lineNo) {\n            this.isSelecting = true;\n            document.querySelector(".alignment-wrapper-outer")\n                .classList.add("inselection");\n        },\n        onResiduePointerUp(event, targetAlnIndex, targetLineNo) {\n            if (!this.isSelecting) {\n                // handle as click\n                // this.highlights[targetAlnIndex].splice(targetLineNo - 1, 1, [undefined, undefined]);\n                let a = this.alignments[targetAlnIndex];\n                this.highlights.splice(targetAlnIndex, 1, new Array(Math.ceil(a.qAln.length / this.lineLen)).fill([undefined, undefined]));\n                this.structureHighlights.splice(targetAlnIndex, 1, null);\n                window.getSelection().removeAllRanges();\n                return;\n            }\n            var selection = window.getSelection()\n            \n            // Get text and (sequence) starting position for each selected alignment\n            let chunks = [];\n            let chunk = "";\n            let prevWrapper = null;\n            let currWrapper = null;\n            let lineNo = 0;\n            let alnIndex = 0;\n            let start = {};\n            for (let i = 0; i < selection.rangeCount; i++) {\n                let range = selection.getRangeAt(i);\n                currWrapper = range.startContainer.parentElement.closest(".alignment-wrapper-inner");\n                alnIndex = parseInt(currWrapper.id);\n                lineNo = parseInt(range.startContainer.parentElement.closest(".line").id);\n                \n                // Start/end containers will either be:\n                // #text  - Start/end inside a span, so calculate lengths of spans until that point\n                // <span> - Start/end of entire span (e.g. multiline selection). Start = 0, end = line length\n                let sc = range.startContainer;\n                let ec = range.endContainer;\n                let startOffset = (sc.nodeType === 3) ? range.startOffset + calculateOffset(sc.parentElement) : 0;\n                let endOffset = (ec.nodeType === 3) ? range.endOffset + calculateOffset(ec.parentElement) : this.lineLen;\n                \n                // Test for new container (alignment), store starting line/offset & calculate position in sequence\n                // If in the same alignment, extend sequence and update end line/offset\n                if (!prevWrapper) {\n                    prevWrapper = currWrapper;\n                    let preText = range.startContainer.textContent.slice(0, range.startOffset);\n                    start = {\n                        startLine: lineNo,\n                        startOffset: startOffset,\n                        seqStart: this.getTargetRowStartPos(alnIndex, lineNo) + startOffset - countCharacter(preText, \'-\')\n                    }\n                } else if (currWrapper != prevWrapper) {\n                    chunks.push([parseInt(prevWrapper.id), start, chunk]);\n                    chunk = "";\n                    prevWrapper = currWrapper;\n                    let preText = range.startContainer.textContent.slice(0, startOffset);\n                    start = {\n                        startLine: lineNo,\n                        startOffset: startOffset,\n                        seqStart: this.getTargetRowStartPos(alnIndex, lineNo) + startOffset - countCharacter(preText, \'-\')\n                    }\n                }\n                chunk += range.toString();\n                start.endLine = lineNo;\n                start.endOffset = endOffset;\n            }\n            chunks.push([parseInt(prevWrapper.id), start, chunk])\n\n            // For structure: aln Id, start in sequence, selection length\n            for (let [ alnId, { seqStart }, text ] of chunks) {\n                this.structureHighlights.splice(alnId, 1, [seqStart, text.replace(/[-]/g, \'\').length]);\n            }\n            \n            // For sequence: aln Id, line and start position (in start line), line and end position (in end line)\n            this.setAlignmentSelection(chunks.map(([ alnId, { startLine, startOffset, endLine, endOffset }, chunk ]) => (\n                [ alnId, startLine - 1, startOffset, endLine - 1, endOffset, chunk.length ]\n            )));\n\n            // Make everything else selectable again\n            this.resetUserSelect();\n\n            // Clear selection afterwards to prevent weird highlighting after inserting spans\n            window.getSelection().removeAllRanges();\n        },\n        resetUserSelect() {\n            this.isSelecting = false;\n            let noselects = document.querySelectorAll(".inselection");\n            noselects.forEach(el => { el.classList.remove("inselection") });\n        }\n    },\n    watch: {\n        \'alignment\': function() {\n            this.updateMaps()\n        }\n    },\n    beforeMount() {\n        this.updateMaps()\n        this.setEmptyHighlight();\n        this.setEmptyStructureHighlight();\n    },\n}\n<\/script>\n\n<style scoped>\n.alignment-panel {\n    display: inline-flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    width: 100%;\n}\n\n.alignment-wrapper-outer {\n    display: inline-flex;\n    flex-direction: column;\n}\n\n.alignment-wrapper-inner {\n    padding-bottom: 1em;\n}\n\n.alignment-structure-wrapper {\n    min-width:450px;\n    margin: 0;\n    margin-bottom: auto;\n}\n\n@media screen and (max-width: 960px) {\n    .alignment-wrapper-outer, .alignment-panel  {\n        display: flex;\n    }\n    .alignment-panel {\n        flex-direction: column-reverse;\n    }\n    .alignment-structure-wrapper {\n        padding-bottom: 1em;\n    }\n\n    .alignment-wrapper-outer, .alignment-structure-wrapper {\n        align-self: center;\n    }\n}\n\n@media screen and (min-width: 961px) {\n    .alignment-structure-wrapper {\n        padding-left: 2em;\n    }\n}\n\n</style>\n\n<style>\nspan.selected {\n    border-radius: 4px;\n    background-color: rgba(0, 255, 255, 0.1);\n    box-shadow: 0 0 .4em .1em rgba(0, 255, 255, 0.5);\n    cursor: pointer;\n}\n/* TODO Some sort of banding thing here? */\n/* .alignment-wrapper-inner:nth-child(odd) span.selected {\n    background-color: rgba(0, 255, 100, 0.1);\n    box-shadow: 0 0 .4em .1em rgba(0, 255, 100, 0.5);\n} */\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        5479: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\n[data-v-1e22231c] .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/Local.vue" ],
                names: [],
                mappings: ";AAmGA;IACA,gCAAA;AACA",
                sourcesContent: [ '<template>\n<div style="overflow: visible; height: 100%;">\n    <v-app-bar app :height="\'48px\'" fixed clipped-left>\n        <img height="28px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTAiIHZpZXdCb3g9IjAgMCA0NjggMzA2Ij48cGF0aCBkPSJNMzcyIDIwMnMxNC0xIDM3LTE5YzIzLTE3IDQwLTQ5IDU1LTU1bC0xMTQgMjQtNCAzMiAyNiAxOFoiIHN0eWxlPSJmaWxsOiNmN2QxOGE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik02MiAxMzlTODcgMjEgMjY5IDJsMSAxLTQ2IDYxcy00MC0zLTU1IDdjMCAwIDE5LTEzIDY5LTRzNTAtMjAgNTAtMjAgOCAyMiAwIDI5bDI5IDE0LTE4IDRzMTI1LTEyIDE2NyAzM2MwIDAtMjYgMTctNjAgMjAtNTYgNS02MiAyMi02MiAyMnMyNS0xMCA0MyA0bC0yMiA5czE1IDggMTUgMjNsLTI2IDEwczM2LTE4IDUyLTdsLTI0IDE4czIzIDMgMzggMTVsLTMyIDhzMTUgMiAyNyAzMWwtNDUtNnM3IDkgNCAzMGwtMjUtMjJzLTE3IDQ2LTE1OCAyQzQ5IDI0MCA1NiAyMjEgNTAgMTkxbC0yNi0xczItMTUgMTgtMjFMMiAxNDJzMjQtMTMgNDItOGwtOC0yNXMyOSAxMSAyNiAzMFoiIHN0eWxlPSJmaWxsOiNlMTMyMTM7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0xMDEgMjUzYy00Ni0yMyA4LTEzNCAzNy0xNTEgMjgtMTYgNTcgNyA2MyAxOSAwIDAgMjMtMTggNTctN3M0OSA0NyAzNiAxMTVjLTggNDEtMjQgNTgtMzUgNjUtNyA0LTE0IDUtMjEgMy0yNS02LTEwNS0yNy0xMzctNDRaIiBzdHlsZT0iZmlsbDojZjdkMThhO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0LjQ4cHgiLz48cGF0aCBkPSJNMTM2IDExMnMtNDEtMTAtNTYgMThjLTE1IDI3IDEyIDM4IDI3IDQzIDE2IDQgNDcgNCA1Ny0xM3MtMS0zOC0yOC00OFoiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0xMTYgMTYwYzE2IDggMzQtMzcgMjAtNDQtMTQtNi00MCAzNS0yMCA0NFoiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NC40OHB4Ii8+PHBhdGggZD0iTTI4NCAxNDhjLTQxLTE1LTU5IDUtNjUgMjJzMiA0NCA0MiA1MyA1MC00IDU2LTE5YzUtMTYgNi00MS0zMy01NloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0yNDggMTk5YzE5IDkgNDctNDEgMjMtNTJzLTQzIDQzLTIzIDUyWm0tODUtMTVjMS04IDIwLTEgMjAgNSAwIDctOSA4LTEyIDctNC0xLTktNi04LTEyWiIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0LjQ4cHgiLz48cGF0aCBkPSJNMTMyIDEyMGM3IDMtMiAxNS02IDEyczMtMTQgNi0xMlptMTI4IDMwYzcgMy0yIDE1LTYgMTItNC0yIDMtMTQgNi0xMloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm8iLz48cGF0aCBkPSJtMTE1IDIxMiA5LTRzLTggNyAwIDEzYzggNyAyNS00IDQ2LTEgMjEgNCA0MCAxOSA1NSAyMSAxNiAzIDI0IDEgMjMtNC0xLTYgNSA3IDUgNyIgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NC40OHB4Ii8+PC9zdmc+" />\n        &nbsp;\n        <v-app-bar-title class="ml-2">{{ title }}</v-app-bar-title>\n        <v-spacer />\n        <v-file-input\n            id="input-uploadData"\n            class="shrink"\n            type="file"\n            accept="application/json"\n            placeholder="Load JSON data file"\n            style="position: relative; top: 30%;"\n            @change="uploadData" \n            single-line\n            outlined\n            filled\n            flat\n            dense\n        />\n        <v-toolbar-items>\n            <v-btn text @click="downloadData">\n                <v-icon>\n                    {{ $MDI.FileDownloadOutline }}\n                </v-icon>\n            </v-btn>\n            <v-btn text rel="external noopener" target="_blank" class="hidden-sm-and-down"\n                   v-for="i in ($STRINGS.NAV_URL_COUNT - 0)" :key="i" :href="$STRINGS[\'NAV_URL_\' + i]">{{ $STRINGS["NAV_TITLE_" + i]}}</v-btn>\n        </v-toolbar-items>\n    </v-app-bar>\n\n    <template v-if="hasMainContent">\n        <slot></slot>\n    </template>\n    <template v-else>\n        <v-container grid-list-md fluid pa-2>\n            <v-layout wrap>\n                <v-flex xs12>\n                    <v-card rounded="0">\n                        <v-card-title primary-title class="mb-0 pa-4">\n                            No data loaded\n                        </v-card-title>\n                    </v-card>\n                </v-flex>\n            </v-layout>\n        </v-container>       \n    </template>\n\n    <v-container grid-list-md fluid pa-2 style="margin-bottom: 500px;">\n        <v-layout wrap>\n            <v-flex xs12>\n                <v-card rounded="0">\n                <v-card-title primary-title class="pb-0 mb-0">\n                    <div class="text-h5 mb-0">Reference</div>\n                </v-card-title>\n                <v-card-title primary-title class="pt-0 mt-0">\n                    <p class="text-subtitle-2 mb-0" v-html="$STRINGS.CITATION"></p>\n                </v-card-title>\n                </v-card>\n            </v-flex>\n        </v-layout>\n    </v-container>\n</div>\n</template>\n\n<script>\nexport default {\n    props: {\n        title: { type: String, required: true }\n    },\n    computed: {\n        hasMainContent() {\n            return this.$slots.default !== undefined && this.$slots.default.length > 0;\n        }\n    },\n    methods: {\n        uploadData(file) {\n            if (!file) {\n                return;\n            }\n            let fr = new FileReader();\n            fr.addEventListener(\n                "load",\n                (e) => {\n                    let data = JSON.parse(e.target.result);\n                    this.$emit("uploadData", data);\n                }\n            );\n            fr.readAsText(file)\n        },\n        downloadData() {\n            this.$emit("downloadData");\n        },\n    }\n}\n<\/script>\n\n<style scoped>\n::v-deep .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n</style>\n<style>\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        7212: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/Local.vue" ],
                names: [],
                mappings: ";AAwGA;IACA,oCAAA;AACA;AAEA;IACA,oCAAA;AACA",
                sourcesContent: [ '<template>\n<div style="overflow: visible; height: 100%;">\n    <v-app-bar app :height="\'48px\'" fixed clipped-left>\n        <img height="28px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTAiIHZpZXdCb3g9IjAgMCA0NjggMzA2Ij48cGF0aCBkPSJNMzcyIDIwMnMxNC0xIDM3LTE5YzIzLTE3IDQwLTQ5IDU1LTU1bC0xMTQgMjQtNCAzMiAyNiAxOFoiIHN0eWxlPSJmaWxsOiNmN2QxOGE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik02MiAxMzlTODcgMjEgMjY5IDJsMSAxLTQ2IDYxcy00MC0zLTU1IDdjMCAwIDE5LTEzIDY5LTRzNTAtMjAgNTAtMjAgOCAyMiAwIDI5bDI5IDE0LTE4IDRzMTI1LTEyIDE2NyAzM2MwIDAtMjYgMTctNjAgMjAtNTYgNS02MiAyMi02MiAyMnMyNS0xMCA0MyA0bC0yMiA5czE1IDggMTUgMjNsLTI2IDEwczM2LTE4IDUyLTdsLTI0IDE4czIzIDMgMzggMTVsLTMyIDhzMTUgMiAyNyAzMWwtNDUtNnM3IDkgNCAzMGwtMjUtMjJzLTE3IDQ2LTE1OCAyQzQ5IDI0MCA1NiAyMjEgNTAgMTkxbC0yNi0xczItMTUgMTgtMjFMMiAxNDJzMjQtMTMgNDItOGwtOC0yNXMyOSAxMSAyNiAzMFoiIHN0eWxlPSJmaWxsOiNlMTMyMTM7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0xMDEgMjUzYy00Ni0yMyA4LTEzNCAzNy0xNTEgMjgtMTYgNTcgNyA2MyAxOSAwIDAgMjMtMTggNTctN3M0OSA0NyAzNiAxMTVjLTggNDEtMjQgNTgtMzUgNjUtNyA0LTE0IDUtMjEgMy0yNS02LTEwNS0yNy0xMzctNDRaIiBzdHlsZT0iZmlsbDojZjdkMThhO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0LjQ4cHgiLz48cGF0aCBkPSJNMTM2IDExMnMtNDEtMTAtNTYgMThjLTE1IDI3IDEyIDM4IDI3IDQzIDE2IDQgNDcgNCA1Ny0xM3MtMS0zOC0yOC00OFoiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0xMTYgMTYwYzE2IDggMzQtMzcgMjAtNDQtMTQtNi00MCAzNS0yMCA0NFoiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NC40OHB4Ii8+PHBhdGggZD0iTTI4NCAxNDhjLTQxLTE1LTU5IDUtNjUgMjJzMiA0NCA0MiA1MyA1MC00IDU2LTE5YzUtMTYgNi00MS0zMy01NloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0yNDggMTk5YzE5IDkgNDctNDEgMjMtNTJzLTQzIDQzLTIzIDUyWm0tODUtMTVjMS04IDIwLTEgMjAgNSAwIDctOSA4LTEyIDctNC0xLTktNi04LTEyWiIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0LjQ4cHgiLz48cGF0aCBkPSJNMTMyIDEyMGM3IDMtMiAxNS02IDEyczMtMTQgNi0xMlptMTI4IDMwYzcgMy0yIDE1LTYgMTItNC0yIDMtMTQgNi0xMloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm8iLz48cGF0aCBkPSJtMTE1IDIxMiA5LTRzLTggNyAwIDEzYzggNyAyNS00IDQ2LTEgMjEgNCA0MCAxOSA1NSAyMSAxNiAzIDI0IDEgMjMtNC0xLTYgNSA3IDUgNyIgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NC40OHB4Ii8+PC9zdmc+" />\n        &nbsp;\n        <v-app-bar-title class="ml-2">{{ title }}</v-app-bar-title>\n        <v-spacer />\n        <v-file-input\n            id="input-uploadData"\n            class="shrink"\n            type="file"\n            accept="application/json"\n            placeholder="Load JSON data file"\n            style="position: relative; top: 30%;"\n            @change="uploadData" \n            single-line\n            outlined\n            filled\n            flat\n            dense\n        />\n        <v-toolbar-items>\n            <v-btn text @click="downloadData">\n                <v-icon>\n                    {{ $MDI.FileDownloadOutline }}\n                </v-icon>\n            </v-btn>\n            <v-btn text rel="external noopener" target="_blank" class="hidden-sm-and-down"\n                   v-for="i in ($STRINGS.NAV_URL_COUNT - 0)" :key="i" :href="$STRINGS[\'NAV_URL_\' + i]">{{ $STRINGS["NAV_TITLE_" + i]}}</v-btn>\n        </v-toolbar-items>\n    </v-app-bar>\n\n    <template v-if="hasMainContent">\n        <slot></slot>\n    </template>\n    <template v-else>\n        <v-container grid-list-md fluid pa-2>\n            <v-layout wrap>\n                <v-flex xs12>\n                    <v-card rounded="0">\n                        <v-card-title primary-title class="mb-0 pa-4">\n                            No data loaded\n                        </v-card-title>\n                    </v-card>\n                </v-flex>\n            </v-layout>\n        </v-container>       \n    </template>\n\n    <v-container grid-list-md fluid pa-2 style="margin-bottom: 500px;">\n        <v-layout wrap>\n            <v-flex xs12>\n                <v-card rounded="0">\n                <v-card-title primary-title class="pb-0 mb-0">\n                    <div class="text-h5 mb-0">Reference</div>\n                </v-card-title>\n                <v-card-title primary-title class="pt-0 mt-0">\n                    <p class="text-subtitle-2 mb-0" v-html="$STRINGS.CITATION"></p>\n                </v-card-title>\n                </v-card>\n            </v-flex>\n        </v-layout>\n    </v-container>\n</div>\n</template>\n\n<script>\nexport default {\n    props: {\n        title: { type: String, required: true }\n    },\n    computed: {\n        hasMainContent() {\n            return this.$slots.default !== undefined && this.$slots.default.length > 0;\n        }\n    },\n    methods: {\n        uploadData(file) {\n            if (!file) {\n                return;\n            }\n            let fr = new FileReader();\n            fr.addEventListener(\n                "load",\n                (e) => {\n                    let data = JSON.parse(e.target.result);\n                    this.$emit("uploadData", data);\n                }\n            );\n            fr.readAsText(file)\n        },\n        downloadData() {\n            this.$emit("downloadData");\n        },\n    }\n}\n<\/script>\n\n<style scoped>\n::v-deep .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n</style>\n<style>\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        6791: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\n.gradient-block-col {\n    position: relative;\n    display: inline-block;\n    border: 1px solid grey; \n    height: 80px;\n}\n.gradient-block {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n.gradient-row {\n    flex: 1;\n}\n.minimap {\n    position: sticky;\n    top: 48px;\n    padding: 16px;\n    margin-top: 1em;\n    margin-bottom: 2px;\n    height: fit-content;\n    z-index: 1;\n}\n.minimap-col {\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n}\n.gradient-block-col::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--bg-color);\n    z-index: 2;\n}\n.gradient-block-col:hover:before {\n    background-color: var(--bg-color-hover);\n    cursor: pointer;\n}\n.input-label {\n    margin: 0 8px 0 0 !important;\n}\n.input-btn {\n    height: 25px;\n}\ndiv.input-div-wrapper {\n    display: flex;\n    flex-direction: column;\n    font-size: 13px;\n    height: 80px;\n    text-align: center;\n    align-items: center;\n    justify-content: space-between;\n    padding: 2px 0;\n}\ndiv.input-div {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n}\ndiv.input-div .v-text-field {\n    min-height: 0 !important;\n    max-height: 20px;\n    max-width: 80px;\n    padding: 0 !important;\n}\ndiv.input-div .v-input__control, div.input-div .v-input__control * {\n    padding: 0;\n    min-height: 0 !important;\n    max-height: 20px;\n}\ndiv.input-div .v-input__slot {\n    padding: 0 4px !important;\n}\n@media only screen and (min-width: 800px) {\n.flex-col {\n        flex: 1 1 0px;\n        height: 500px;\n}\n.flex-col:nth-child(1) {\n        flex: 3;\n        padding-right: 6px;\n}\n.flex-col:nth-child(2),\n    .flex-col:nth-child(3) {\n        flex: 4.5;\n}\n.flex-col:nth-child(3) {\n        padding-left: 6px;\n}\n}\n@media only screen and (max-width: 800px) {\n.flex-col {\n        height: 400px;\n        flex-basis: 100%;\n        padding-bottom: 6px;\n        padding-top: 6px;\n}\n.flex-col:nth-child(1) {\n        height: 300px;\n}\n}\n.expansion-panel {\n    /* transition: width 0.3s ease; */\n    overflow: hidden;\n    width: 100%;\n    position: relative;\n}\n.expansion-panel:not(.is-expanded) {\n    width: 0;\n}\n.toggle-button {\n    color: black;\n    z-index: 2;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/MSA.vue" ],
                names: [],
                mappings: ";AAsdA;IACA,kBAAA;IACA,qBAAA;IACA,sBAAA;IACA,YAAA;AACA;AACA;IACA,aAAA;IACA,sBAAA;IACA,YAAA;AACA;AACA;IACA,OAAA;AACA;AACA;IACA,gBAAA;IACA,SAAA;IACA,aAAA;IACA,eAAA;IACA,kBAAA;IACA,mBAAA;IACA,UAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,YAAA;IACA,WAAA;IACA,UAAA;IACA,SAAA;AACA;AACA;IACA,WAAA;IACA,kBAAA;IACA,MAAA;IACA,OAAA;IACA,WAAA;IACA,YAAA;IACA,iCAAA;IACA,UAAA;AACA;AACA;IACA,uCAAA;IACA,eAAA;AACA;AACA;IACA,4BAAA;AACA;AACA;IACA,YAAA;AACA;AACA;IACA,aAAA;IACA,sBAAA;IACA,eAAA;IACA,YAAA;IACA,kBAAA;IACA,mBAAA;IACA,8BAAA;IACA,cAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,8BAAA;IACA,WAAA;AACA;AACA;IACA,wBAAA;IACA,gBAAA;IACA,eAAA;IACA,qBAAA;AACA;AACA;IACA,UAAA;IACA,wBAAA;IACA,gBAAA;AACA;AACA;IACA,yBAAA;AACA;AACA;AACA;QACA,aAAA;QACA,aAAA;AACA;AACA;QACA,OAAA;QACA,kBAAA;AACA;AACA;;QAEA,SAAA;AACA;AACA;QACA,iBAAA;AACA;AACA;AACA;AACA;QACA,aAAA;QACA,gBAAA;QACA,mBAAA;QACA,gBAAA;AACA;AACA;QACA,aAAA;AACA;AACA;AACA;IACA,iCAAA;IACA,gBAAA;IACA,WAAA;IACA,kBAAA;AACA;AACA;IACA,QAAA;AACA;AACA;IACA,YAAA;IACA,UAAA;AACA",
                sourcesContent: [ '<template>\n<div>\n    <v-container fluid pa-2 style="overflow: visible; height: 100%;">\n        <v-row>\n            <v-col class="flex-col">\n                <v-card style="height: 100%">\n                    <v-card-title>Summary</v-card-title>\n                    <v-card-text>\n                        <v-simple-table style="height: 100%;" id="settings" class="settings auto-height-table">\n                            <tbody>\n                                <tr v-if="$LOCAL && statistics.hasOwnProperty(\'db\')">\n                                    <td>Database</td>\n                                    <td id="msa-database">{{ statistics.db }}</td>\n                                </tr>\n                                <tr v-if="$LOCAL && statistics.hasOwnProperty(\'msaFile\')">\n                                    <td>MSA file</td>\n                                    <td id="msa-file">{{ statistics.msaFile }}</td>\n                                </tr>\n                                <tr v-if="statistics.hasOwnProperty(\'msaLDDT\')">\n                                    <td>MSA LDDT</td>\n                                    <td id="msa-lddt">{{ statistics.msaLDDT.toFixed(3) }}</td>\n                                </tr>\n                                <tr v-if="statistics.hasOwnProperty(\'cmdString\')">\n                                    <td>Command</td>\n                                    <td id="msa-cmd">{{ statistics.cmdString }}</td>\n                                </tr>\n                            </tbody>\n                        </v-simple-table>\n                    </v-card-text>\n                </v-card>\n            </v-col>\n            <v-col class="flex-col" v-if="tree">\n                <v-card class="fill-height" style="position: relative;">\n                    <v-card-title style="position: absolute; left: 0; top: 0; margin: 0; padding: 16px; z-index: 1;">Guide Tree</v-card-title>\n                    <Tree\n                        :newick="tree"\n                        :order="entries.map(e => e.name)"\n                        :selection="structureViewerSelection.map(i => entries[i].name)"\n                        :reference="structureViewerReference"\n                        @newStructureSelection="handleNewStructureViewerSelection"\n                        @newStructureReference="handleNewStructureViewerReference"\n                    />\n                </v-card>\n            </v-col>\n            <v-col class="flex-col">\n                <v-card class="fill-height" style="position: relative;">\n                    <v-card-title style="position: absolute; left: 0; top: 0; margin: 0; padding: 16px; z-index: 1;">Structure</v-card-title>\n                    <div v-if="structureViewerSelection" style="padding: 10px; height: 100%; width: 100%;">\n                        <StructureViewerMSA\n                            :entries="entries"\n                            :selection="structureViewerSelection"\n                            :reference="structureViewerReference"\n                            :mask="mask"\n                            @loadingChange="handleStructureLoadingChange"\n                            @columnSelected="selectedColumn = $event"\n                        />\n                    </div>\n                    <v-card-text v-else>\n                        No structures loaded.\n                    </v-card-text>\n                </v-card>\n            </v-col>\n        </v-row>\n        <v-card class="minimap fill-height">\n            <v-row dense v-if="cssGradients" style="align-items: center;">\n                <v-col align="center" no-gutters style="max-width: fit-content; margin-right: 4px; position: relative;">\n                    <div style="display: flex; flex-direction: row;">\n                        <div class="input-div-wrapper expansion-panel" :class="{ \'is-expanded\': settingsPanelOpen }">\n                            <div class="input-div">\n                                <label\n                                    title="Toggle between AA and 3Di alphabets"\n                                    class="input-label"\n                                >Alphabet</label>\n                                <v-btn-toggle dense mandatory color="primary" v-model="alphabet">\n                                    <v-btn x-small value="aa" style="width: 40px;">AA</v-btn>\n                                    <v-btn x-small value="ss" style="width: 40px;">3Di</v-btn>\n                                </v-btn-toggle>\n                            </div>\n                            <div class="input-div">\n                                <label\n                                    title="Hide columns with percentage of gaps above this cutoff"\n                                    class="input-label"\n                                >Gaps</label>\n                                <v-text-field\n                                    v-model="matchRatio"\n                                    label="0.0"\n                                    default="0.00"\n                                    type="number"\n                                    min="0"\n                                    max="1"\n                                    step="0.01"\n                                    single-line\n                                    hide-details\n                                    solo\n                                    flat\n                                    dense\n                                    style="max-width: 80px; max-height: 20px;"\n                                />                       \n                            </div>\n                            <div class="input-div">\n                                <label\n                                    title="Toggle between per-column LDDT and 3Di score matrix-based colorschemes"\n                                    class="input-label"\n                                >Colours</label>\n                                <v-btn-toggle dense mandatory color="primary" v-model="colorScheme">\n                                    <v-btn x-small value="lddt" style="width: 40px;">LDDT</v-btn>\n                                    <v-btn x-small value="3di"  style="width: 40px;">3Di</v-btn>\n                                </v-btn-toggle>\n                            </div>\n                        </div>\n                        <div style="position: relative; display: flex; justify-content: center; align-items: center; width: fit-content; height: 80px;">\n                            <v-btn class="toggle-button" @click="toggleSettingsPanel" small icon title="Toggle MSA viewing options">\n                                <v-icon>{{ settingsBtnIcon }}</v-icon>\n                            </v-btn>\n                        </div>\n                    </div>\n                </v-col>\n                <v-col class="minimap-col">\n                    <div\n                        v-for="(block, i) in cssGradients"\n                        :key="\'col-\' + i"\n                        class="gradient-block-col"\n                        :style="minimapBlock(i)"\n                        @click="handleMapBlockClick(i)"\n                    >\n                        <div class="gradient-block">\n                            <div\n                                v-for="(gradient, j) in block"\n                                :key="\'gradient-\' + j"\n                                class="gradient-row"\n                                :style="{ \'background-image\': gradient }"\n                            />\n                        </div>\n                    </div>\n                </v-col>\n            </v-row>\n        </v-card>\n        <v-card pa-2>\n            <MSAView\n                :entries="msaViewEntries"\n                :scores="msaViewScores"\n                :alnLen="alnLen"\n                :alphabet="alphabet"\n                :colorScheme="colorScheme"\n                :selectedStructures="structureViewerSelection"\n                :referenceStructure="structureViewerReference"\n                :matchRatio="parseFloat(matchRatio)"\n                :mask="mask"\n                :highlightColumn="selectedColumn"\n                @cssGradients="handleCSSGradient"\n                @lineLen="handleLineLen"\n                @newStructureSelection="handleNewStructureViewerSelection"\n                @newStructureReference="handleNewStructureViewerReference"\n                ref="msaView"\n            />\n        </v-card>\n    </v-container>\n</div>\n</template>\n\n<script>\nimport MSAView from \'./MSAView.vue\';\nimport StructureViewer from \'./StructureViewer.vue\';\nimport StructureViewerMSA from \'./StructureViewerMSA.vue\';\nimport Tree from \'./Tree.vue\';\nimport { debounce, makePositionMap, tryFixName } from \'./Utilities.js\'\nimport MDI from \'./MDI.js\';\n\nfunction clamp(value, min, max) {\n  return Math.min(Math.max(value, min), max);\n}\n\nfunction makeMatchRatioMask(entries, ratio) {\n    const columnLength = entries[0].aa.length;\n    const mask = new Array(columnLength).fill(0);\n    for (let i = 0; i < columnLength; i++) {\n        let gap = 0;\n        let nonGap = 0;\n        for (let j = 0; j < entries.length; j++) {\n            if (entries[j].aa[i] === \'-\') {\n                gap++;\n            } else {\n                nonGap++;\n            }\n        }\n        let fraction = nonGap / (gap + nonGap);\n        if (fraction >= ratio) {\n            mask[i] = 1;\n        }\n    }\n    return mask;\n}\n\nfunction mockAlignment(one, two) {\n    let res = { backtrace: "" };\n    let started = false; // flag for first Match column in backtrace\n    let m = 0;           // index in msa\n    let qr = 0;          // index in seq\n    let tr = 0;\n    while (m < one.length) {\n        const qc = one[m];\n        const tc = two[m];\n        if (qc === \'-\' && tc === \'-\') {\n            // Skip gap columns\n        } else if (qc === \'-\') {\n            if (started) res.backtrace += \'D\';\n            ++tr;\n        } else if (tc === \'-\') {\n            if (started) res.backtrace += \'I\';\n            ++qr;\n        } else {\n            if (!started) {\n                started = true;\n                res.qStartPos = qr;\n                res.dbStartPos = tr;\n            }\n            res.backtrace += \'M\';\n            res.qEndPos = qr;\n            res.dbEndPos = tr;\n            ++qr;\n            ++tr;\n        }\n        ++m;\n    }\n    res.qStartPos++;\n    res.dbStartPos++;\n    return res;\n}\n\nexport default {\n    components: {\n        MSAView,\n        StructureViewer,\n        StructureViewerMSA,\n        Tree\n    },\n    props: {\n        entries: [],\n        scores: [],\n        statistics: {},\n        tree: ""\n    },\n    data() {\n        return {\n            mask: [],\n            structures: [],       \n            lineLen: 80,\n            cssGradients: null,\n            gradientRatio: null,\n            blockIndex: 0,\n            alphabet: \'aa\',\n            colorScheme: \'lddt\',\n            matchRatioInner: 0.0,\n            structureViewerSelection: [],\n            structureViewerReference: 0,\n            isLoadingStructure: false,\n            numMinimapGradients: 30,\n            settingsPanelOpen: true,\n            selectedColumn: -1,\n        }\n    },    \n    watch: {\n        matchRatio: debounce(function() {\n            this.handleUpdateMatchRatio();\n        }, 400)\n    },\n    beforeMount() {\n        this.handleUpdateMatchRatio();\n        for (let entry of this.entries) {\n            entry.name = tryFixName(entry.name)\n        }\n    },\n    mounted() {\n        window.addEventListener("scroll", this.handleScroll);\n        this.structureViewerSelection = [0, 1];\n    },\n    beforeDestroy() {\n        window.removeEventListener("scroll", this.handleScroll);\n    },\n    computed: {\n        matchRatio: {\n            get() {\n                return this.matchRatioInner;\n            },\n            set(value) {\n                this.matchRatioInner = clamp(value, 0.0, 1.0);\n                this.$emit(\'input\', this.matchRatioInner);\n            }\n        },\n        alnLen() {\n            if (this.entries.length > 0) {\n                return this.mask.reduce((count, value) => count + value, 0);\n                // return this.entries[0].aa.length;\n            }\n            return 0;\n        },\n        structureViewerProps() {\n            return { structures: this.entries };\n        },\n        structureViewerEntries() {\n            return this.structureViewerSelection.map(index => this.entries[index]);\n        },\n        msaViewEntries() {\n            const entries = this.entries.map(entry => {\n                const copy = {\n                    name: entry.name,\n                    aa: "",\n                    ss: ""\n                }\n                for (let i = 0; i < this.mask.length; i++) {\n                    if (this.mask[i] === 1) {\n                        copy.aa += entry.aa[i];\n                        copy.ss += entry.ss[i];\n                    }\n                }\n                return copy;\n            })\n            return entries\n        },\n        msaViewScores() {\n            return this.scores.filter((_, index) => this.mask[index] === 1);\n        },\n        settingsBtnIcon() {\n            return this.settingsPanelOpen ? MDI.ChevronLeft : MDI.ChevronRight;\n        }\n    },\n    methods: {\n        toggleSettingsPanel() {\n            this.settingsPanelOpen = !this.settingsPanelOpen;\n        },\n        handleUpdateMatchRatio: function() {\n            if (this.matchRatio === 0.0) {\n                this.mask = new Array(this.entries[0].aa.length).fill(1);\n            } else {\n                this.mask = makeMatchRatioMask(this.entries, this.matchRatio);\n            }\n        },\n        handleStructureLoadingChange(isLoading) {\n            this.isLoadingStructure = isLoading;\n        },\n        // New reference emitted from MSAView.\n        // entryIndex is based on ALL entries, not just selection (taken from row of MSA block)\n        // Add new structure to selection if index not already in selection,\n        // otherwise just switch reference index.\n        handleNewStructureViewerReference(entryIndex) {\n            if (entryIndex === this.structureViewerReference) {\n                this.structureViewerSelection = [];\n                this.structureViewerReference = -1;\n                return;\n            }\n            const selection = this.structureViewerSelection.slice();\n            const index = selection.indexOf(entryIndex);\n            if (index === -1) {\n                selection.push(entryIndex);\n            }\n            this.structureViewerSelection = selection;\n            this.structureViewerReference = entryIndex;\n        },\n        handleNewStructureViewerSelection(entryIndex) {\n            if (entryIndex === this.structureViewerReference) {\n                this.structureViewerSelection = [];\n                this.structureViewerReference = -1;\n                return;\n            }\n            const selection = this.structureViewerSelection.slice();\n            const index = selection.indexOf(entryIndex);\n            if (index !== -1) {\n                selection.splice(index, 1);\n            } else {\n                selection.push(entryIndex);\n            }\n            this.structureViewerSelection = selection;\n        },\n        getEntry(name) {\n            return this.entries.find(item => item.name === name);\n        },\n        makeMockAlignment(one, two) {\n            const entryOne = this.entries[one];\n            const entryTwo = this.entries[two];\n            if (!entryOne || !entryTwo) {\n                return;\n            }\n            const alignment  = mockAlignment(entryOne.aa, entryTwo.aa);\n            alignment.query  = entryOne.name;\n            alignment.target = entryTwo.name;\n            alignment.qCa    = entryOne.ca;\n            alignment.tCa    = entryTwo.ca;\n            alignment.qSeq   = entryOne.aa.replace(/-/g, \'\');\n            alignment.qAln   = entryOne.aa;\n            alignment.tSeq   = entryTwo.aa.replace(/-/g, \'\');\n            alignment.dbAln  = entryTwo.aa;\n            return {\n                queryMap: makePositionMap(alignment.qStartPos, alignment.qAln), \n                targetMap: makePositionMap(alignment.dbStartPos, alignment.dbAln), \n                alignment: alignment\n            };\n        },\n        handleMapBlockClick(index) {\n            const top = document.querySelector(\'.minimap\').offsetHeight + 60;  // app-bar + minimap\n            const box = this.$refs.msaView.$el.children[index].getBoundingClientRect();\n            window.scrollTo({ behavior: \'smooth\', top: box.top + window.scrollY - top });\n        },\n        handleAlphabetChange(event) {\n            this.alphabet = event.target.value;\n        },\n        gradientBlockCSS(gradient) {\n            return { width: \'100%\' };\n        },\n        handleLineLenChange: function(event) {\n            this.lineLen = parseInt(event.target.value);\n        },\n        minimapBlock: function(index) {\n            return {\n                \'--bg-color\': (this.blockIndex === index) ? \'rgba(255, 0, 0, 0.3)\' : null,\n                \'--bg-color-hover\': this.$vuetify.theme.dark ? \'rgba(255, 255, 255, 0.5)\' : \'rgba(100, 100, 100, 0.5)\',\n                \'flex-basis\': `${this.gradientRatio[index]}%`\n            }\n        },\n        handleScroll() {\n            const box = this.$refs.msaView.$el.getBoundingClientRect()\n            const numBlocks = Math.ceil(this.alnLen / this.lineLen);\n            const blockSize = box.height / numBlocks;\n            const top = window.scrollY + box.top;  // top of the msa relative to entire document\n            const bot = top + box.height;          // bottom\n            let scroll = window.scrollY + 180;     // current scroll pos + minimap height\n            if (scroll < top) {\n                this.blockIndex = 0;\n            } else if (scroll > bot) {\n                this.blockIndex = numBlocks;\n            } else {\n                this.blockIndex = Math.floor((scroll - top) / blockSize);\n            }\n        },\n        handleLineLen(lineLen) {\n            this.lineLen = lineLen;\n        },\n        handleCSSGradient(gradients) {\n            const numBlocks = Math.ceil(this.alnLen / this.lineLen);\n            const blockSize = gradients.length / numBlocks;\n\n            // Organise into blocks. Subsetted to numMinimapGradients for large MSAs\n            // Use a step to ensure coverage over entire MSA.\n            this.cssGradients = Array.from({ length: numBlocks }, () => []);\n            if (blockSize < this.numMinimapGradients) {\n                this.cssGradients.forEach((arr, i) => {\n                    let block = i * blockSize;\n                    let slice = gradients.slice(block, block + blockSize);\n                    arr.push(...slice);\n                });\n            } else {\n                const step = (blockSize - 1) / (this.numMinimapGradients - 1);\n                for (let i = 0; i < numBlocks; i++) {\n                    for (let j = 0; j < this.numMinimapGradients; j++) {\n                        this.cssGradients[i].push(gradients[Math.round(j * step) + i * blockSize]);\n                    }\n                }\n            }\n\n            // Calculate length of last block (all others will be lineLen)\n            // Get array of %s that sum to 100%\n            const lastBlockLen = this.cssGradients[numBlocks - 1][0].split(\'%,\').length / 2;\n            const total = (numBlocks - 1) * this.lineLen + lastBlockLen;\n            this.gradientRatio = new Array(numBlocks - 1).fill(this.lineLen / total * 100);\n            this.gradientRatio.push(lastBlockLen / total * 100);\n        },\n    },\n}\n<\/script>\n\n<style>\n.gradient-block-col {\n    position: relative;\n    display: inline-block;\n    border: 1px solid grey; \n    height: 80px;\n}\n.gradient-block {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n.gradient-row {\n    flex: 1;\n}\n.minimap {\n    position: sticky;\n    top: 48px;\n    padding: 16px;\n    margin-top: 1em;\n    margin-bottom: 2px;\n    height: fit-content;\n    z-index: 1;\n}\n.minimap-col {\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n}\n.gradient-block-col::before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--bg-color);\n    z-index: 2;\n}\n.gradient-block-col:hover:before {\n    background-color: var(--bg-color-hover);\n    cursor: pointer;\n}\n.input-label {\n    margin: 0 8px 0 0 !important;\n}\n.input-btn {\n    height: 25px;\n}\ndiv.input-div-wrapper {\n    display: flex;\n    flex-direction: column;\n    font-size: 13px;\n    height: 80px;\n    text-align: center;\n    align-items: center;\n    justify-content: space-between;\n    padding: 2px 0;\n}\ndiv.input-div {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n}\ndiv.input-div .v-text-field {\n    min-height: 0 !important;\n    max-height: 20px;\n    max-width: 80px;\n    padding: 0 !important;\n}\ndiv.input-div .v-input__control, div.input-div .v-input__control * {\n    padding: 0;\n    min-height: 0 !important;\n    max-height: 20px;\n}\ndiv.input-div .v-input__slot {\n    padding: 0 4px !important;\n}\n@media only screen and (min-width: 800px) {\n    .flex-col {\n        flex: 1 1 0px;\n        height: 500px;\n    }\n    .flex-col:nth-child(1) {\n        flex: 3;\n        padding-right: 6px;\n    }\n    .flex-col:nth-child(2),\n    .flex-col:nth-child(3) {\n        flex: 4.5;\n    }\n    .flex-col:nth-child(3) {\n        padding-left: 6px;\n    }\n}\n@media only screen and (max-width: 800px) {\n    .flex-col {\n        height: 400px;\n        flex-basis: 100%;\n        padding-bottom: 6px;\n        padding-top: 6px;\n    }\n    .flex-col:nth-child(1) {\n        height: 300px;\n    }\n}\n.expansion-panel {\n    /* transition: width 0.3s ease; */\n    overflow: hidden;\n    width: 100%;\n    position: relative;\n}\n.expansion-panel:not(.is-expanded) {\n    width: 0;\n}\n.toggle-button {\n    color: black;\n    z-index: 2;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        1229: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\n.msa-wrapper {\n    padding: 16px; /* equivalent to pa-4 */\n    display: flex;\n    flex-direction: column;\n    font-family: monospace;\n    white-space: nowrap;\n    width: 100%;\n}\n.msa-block {\n    margin-bottom: 1.5em;\n    display: grid;\n    grid-template-columns: fit-content(20%) 5fr auto;\n    width: 100%;\n    justify-content: space-between;\n    gap: 0px 16px;\n    line-height: 1em;\n}\n.msa-block:last-child {\n    margin-bottom: 0;\n}\n.msa-block .sequence {\n    display: inline-block;\n    padding: 0px;\n    margin: 0px;\n    letter-spacing: 4px;\n    color: transparent;\n    z-index: 0;\n}\n.msa-block .sequence::selection, .msa-block .sequence strong {\n    background: #11FFEE;\n    color: #111;\n}\n.msa-row {\n    display: contents;\n/*     padding: 0;\n    margin: 0;\n    display: grid;\n    grid-template-columns: fit-content(20%) 5fr auto;\n    width: 100%;\n    justify-content: space-between;\n    gap: 16px;\n    line-height: 1em; */\n}\n.sequence-wrapper {\n    overflow: hidden;\n    align-content: left;\n    align-items: center;\n    display: flex;\n    flex-grow: 1;\n    text-align: left;\n}\n.sequence {\n    margin-left: auto;\n    margin: 0;\n    padding: 0;\n    line-height: 1em;\n}\n.header {\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n}\n.header:hover {\n    cursor: pointer;\n}\n.count {\n    text-align: right;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/MSAView.vue" ],
                names: [],
                mappings: ";AAoUA;IACA,aAAA,EAAA,uBAAA;IACA,aAAA;IACA,sBAAA;IACA,sBAAA;IACA,mBAAA;IACA,WAAA;AACA;AACA;IACA,oBAAA;IACA,aAAA;IACA,gDAAA;IACA,WAAA;IACA,8BAAA;IACA,aAAA;IACA,gBAAA;AACA;AACA;IACA,gBAAA;AACA;AACA;IACA,qBAAA;IACA,YAAA;IACA,WAAA;IACA,mBAAA;IACA,kBAAA;IACA,UAAA;AACA;AACA;IACA,mBAAA;IACA,WAAA;AACA;AACA;IACA,iBAAA;AACA;;;;;;;uBAOA;AACA;AACA;IACA,gBAAA;IACA,mBAAA;IACA,mBAAA;IACA,aAAA;IACA,YAAA;IACA,gBAAA;AACA;AACA;IACA,iBAAA;IACA,SAAA;IACA,UAAA;IACA,gBAAA;AACA;AACA;IACA,gBAAA;IACA,gBAAA;IACA,uBAAA;AACA;AACA;IACA,eAAA;AACA;AACA;IACA,iBAAA;AACA",
                sourcesContent: [ '<template>\n<div class="msa-wrapper" ref="msaWrapper">\n    <div class="msa-block" v-for="([start, end], i) in blockRanges">\n        \x3c!-- <SequenceLogo\n            :sequences="getEntryRanges(start, end, makeGradients=false)"\n            :alphabet="alphabet"\n            :lineLen="lineLen"\n        /> --\x3e\n        \x3c!--\n            <div class="msa-row" v-for="({name, aa, ss, seqStart, css}, j) in getEntryRanges(start, end)">\n        --\x3e\n        <template v-for="({name, aa, ss, seqStart, css}, j) in getEntryRanges(start, end)">\n            <span\n                class="header"\n                :title="name"\n                :style="headerStyle(j)"\n                @click="handleClickHeader($event, j)"\n            >{{ name }}</span>\n            <div class="sequence-wrapper">\n                <span class="sequence" :style="css" v-html="insertHighlight(alphabet === \'aa\' ? aa : ss, start, end)"></span>\n            </div>\n            <span class="count">{{ countSequence(aa, seqStart).toString()  }}</span>\n        </template>\n        \x3c!-- </div> --\x3e\n    </div>\n</div>\n</template>\n\n<script>\nimport SequenceLogo from \'./SequenceLogo.vue\';\nimport { debounce } from \'./Utilities.js\';\n\nconst colorsAa = {\n    "A": "#80A0F0FF",\n    "R": "#F01505FF",\n    "N": "#00FF00FF",\n    "D": "#C048C0FF",\n    "C": "#F08080FF",\n    "Q": "#00FF00FF",\n    "E": "#C048C0FF",\n    "G": "#F09048FF",\n    "H": "#15A4A4FF",\n    "I": "#80A0F0FF",\n    "L": "#80A0F0FF",\n    "K": "#F01505FF",\n    "M": "#80A0F0FF",\n    "F": "#80A0F0FF",\n    "P": "#FFD700FF",\n    "S": "#00FF00FF",\n    "T": "#00FF00FF",\n    "W": "#80A0F0FF",\n    "Y": "#15A4A4FF",\n    "V": "#80A0F0FF",\n    "B": "#FFFFFFFF",\n    "X": "#FFFFFFFF",\n    "Z": "#FFFFFFFF",\n    "-": "#ffffff"\n}\n\nconst colors3di = {\n    "A": "#df9a8c",\n    "C": "#fb72c5",\n    "D": "#b4a3d8",\n    "E": "#ff5701",\n    "F": "#d99e81",\n    "G": "#7491c5",\n    "H": "#94abe1",\n    "I": "#609d7b",\n    "K": "#d7a304",\n    "L": "#fe4c8b",\n    "M": "#12a564",\n    "N": "#d570fd",\n    "P": "#cb99c4",\n    "Q": "#da8e99",\n    "R": "#9487d0",\n    "S": "#e842fe",\n    "T": "#42a299",\n    "V": "#fb7edd",\n    "W": "#d1a368",\n    "Y": "#17a8fd",\n    "X": "#c0c0c0",\n    "-": "#ffffff"\n}\n\nexport default {\n    components: { SequenceLogo, SequenceLogo },\n    data() {\n        return {\n            lineLen: 80,\n            headerLen: null,\n            countLen: null,\n            resizeObserver: null,\n        }\n    },\n    props: {\n        matchRatio: Number,\n        entries: Array,\n        scores: Array,\n        alnLen: Number,\n        alphabet: String,\n        mask: { type: Array },\n        selectedStructures: { type: Array, required: false },\n        referenceStructure: { type: Number },\n        colorScheme: { type: String, default: \'lddt\' },\n        maxHeaderWidth: { type: Number, default: 30 },\n        highlightColumn: { type: Number, default: -1 },\n    },\n    mounted() {\n        this.resizeObserver = new ResizeObserver(debounce(this.handleResize, 100)).observe(this.$refs.msaWrapper);\n        this.handleUpdateEntries();\n        this.handleResize();\n        this.emitGradients();\n    },\n    updated() {\n        this.handleResize();\n        this.emitGradients();\n    },\n    beforeDestroy() {\n        if (this.resizeObserver)\n            this.resizeObserver.disconnect();\n    },\n    watch: {\n        entries: function() {\n            this.handleUpdateEntries();\n        },\n        lineLen: function() {\n            this.$emit("lineLen", this.lineLen);\n        },\n    },\n    computed: {\n        maskCumSum() {\n            if (!this.mask) {\n                return [];\n            }\n            const result = [];\n            let sum = 0;\n            for (let i = 0; i < this.mask.length; i++) {\n                sum += this.mask[i] == 0;\n                result.push(sum);\n            }\n            return result;\n        },\n        firstSequenceWidth() {\n            const container = document.querySelector(".msa-block");\n            if (!container)\n                return 0\n            const sequence = container.querySelector(".sequence");\n            return sequence.scrollWidth;\n        },\n        blockRanges() {\n            const maxVal = Math.max(1, Math.ceil(this.alnLen / this.lineLen));\n            return Array.from({ length: maxVal }, (_, i) => {\n                let start = i * this.lineLen;\n                let end = Math.min(this.alnLen, i * this.lineLen + this.lineLen);\n                return [start, end];\n            });\n        },\n        backgroundClip() {\n            return this.$vuetify.theme.dark ? \'text\' : \'border-box\';\n        },\n        sequenceColor() {\n            return this.$vuetify.theme.dark ? \'transparent\' : \'black\';\n        },\n        fontWeight() {\n            return this.$vuetify.theme.dark ? \'bolder\' : \'normal\';\n        },\n    },\n    methods: {\n        handleClickHeader(event, index) {\n            if (this.selectedStructures.length === 0 || event.altKey) {\n                this.$emit("newStructureReference", index);\n            } else {\n                this.$emit("newStructureSelection", index);\n            }\n        },\n        getSequenceWidth() {\n            const container = document.querySelector(".msa-block");\n            const sequence  = container.querySelector(".sequence");\n            return sequence.scrollWidth;\n        },\n        headerStyle(index) {\n            const isSelected  = this.selectedStructures.length > 0 && this.selectedStructures.includes(index);\n            const isReference = this.selectedStructures.length > 0 && this.referenceStructure === index;\n            return {\n                fontWeight: isSelected ? \'bold\' : \'normal\',                \n                color: isReference\n                    ? \'#1E88E5\'\n                    : (isSelected\n                        ? \'#e6ac00\'\n                        : this.$vuetify.theme.dark ? \'rgba(180, 180, 180, 1)\' : \'black\'),\n            }\n        },\n        handleUpdateEntries() {\n            this.headerLen = 0;\n            this.countLen = 0;\n            this.entries.forEach((e, i) => {\n                this.headerLen = Math.min(30, Math.max(this.headerLen, e.name.length));\n                let count = 0;\n                for (const char of e.aa) {\n                    if (char !== \'-\') count++;\n                }\n                this.countLen = Math.max(this.countLen, count.toString().length);\n            })\n        },\n        handleResize() {\n            // Resize based on first row\n            const container = document.querySelector(".msa-block");\n            if (!container) {\n                return\n            }\n            const header    = container.querySelector(".header");\n            const count     = container.querySelector(".count");\n            const sequence  = container.querySelector(".sequence");\n            const containerWidth = container.offsetWidth - header.offsetWidth - count.offsetWidth - 32;\n            \n            // calculate #chars difference\n            const content = sequence.textContent;\n            const charDiff = Math.abs(Math.ceil(content.length * (sequence.scrollWidth - containerWidth) / sequence.scrollWidth));\n\n            if (sequence.scrollWidth > containerWidth) {\n                this.lineLen = Math.min(this.lineLen - charDiff, this.entries[0].aa.length);\n            } else if (sequence.scrollWidth < containerWidth) {\n                this.lineLen = Math.min(this.lineLen + charDiff, this.entries[0].aa.length);\n            }\n        },\n        emitGradients() {\n            const elements = document.getElementsByClassName("sequence"); \n            this.$emit(\n                "cssGradients",\n                Array.prototype.map.call(elements, element => element.style[\'background-image\'])\n            );\n        },\n        percentageToColor(percentage, maxHue = 120, minHue = 0) {\n            if (percentage === -1) {\n                return this.$vuetify.theme.dark ? \'rgba(180, 180, 180, 1)\' : \'rgba(0, 0, 0, 0)\';\n            }\n            const hue = percentage * (maxHue - minHue) + minHue;\n            // const hue = (1 - percentage) * 120;\n            // const lightness = this.$vuetify.theme.dark ? 50 : 30;\n            return `hsl(${hue}, 100%, 50%)`;\n        },\n        getEntryRange(entry, start, end, makeGradients=true) {\n            let result = {\n                name: entry.name,\n                aa: entry.aa.slice(start, end),\n                ss: entry.ss.slice(start, end),\n                seqStart: 0\n            };\n            for (let i = 0; i < start; i++) {\n                if (entry.aa[i] === \'-\') continue;\n                result.seqStart++;\n            }\n            if (makeGradients) {\n                result.css = this.generateCSSGradient(start, end, result.ss);\n            }\n            return result;\n        },\n        insertHighlight(seq, start, end) {\n            if (this.highlightColumn == -1 || this.mask[this.highlightColumn] == 0) {\n                return seq;\n            }\n            let column = this.highlightColumn - this.maskCumSum[this.highlightColumn];\n            if (column >= start && column < end) {\n                let idx = column - start;\n                let newseq = seq.substring(0, idx) + \'<strong>\' + seq.substring(idx, idx + 1) + \'</strong>\' + seq.substring(idx + 1);\n                return newseq;\n            }\n            return seq;\n        },\n        getEntryRanges(start, end, makeGradients=true) {\n            return Array.from(this.entries, entry => this.getEntryRange(entry, start, end, makeGradients));\n        },\n        countSequence(sequence, start) {\n            let gaps = sequence.split(\'-\').length - 1;\n            return start + this.lineLen - gaps;\n        },\n        generateCSSGradient(start, end, sequence) {\n            if (!this.scores) {\n                return null;\n            }\n            let colors = [];\n            if (this.colorScheme === \'3di\') {\n                for (const residue of sequence) {\n                    colors.push(colors3di[residue]); \n                }\n            } else {\n                colors = this.scores\n                    .slice(start, end)\n                    .map(score => this.percentageToColor(parseFloat(score)));\n            }\n            for (let i = 0; i < sequence.length; i++) {\n                if (sequence[i] === \'-\') {\n                    colors[i] = this.$vuetify.theme.dark ? "rgba(100, 100, 100, 0.4)" : "rgba(0, 0, 0, 0)";\n                }\n            }\n            \n            const step = 100 / colors.length;\n            let gradient = \'linear-gradient(to right\';\n            \n            let preStep = 0;\n            let curStep = step;\n            for (let i = 0; i < colors.length; i++) {\n                curStep = (i === colors.length - 1) ? 100 : preStep + step;\n                gradient += `, ${colors[i]} ${preStep}%, ${colors[i]} ${curStep}%`;\n                preStep = curStep;\n            }\n            gradient += \')\';\n\n            return {\n                backgroundImage: gradient,\n                // decrease width to account for weird font glyph spacing\n                backgroundSize: `calc(100% - 2px) 100%`,\n                backgroundPosition: \'left top\',\n                backgroundAttachment: \'scroll\',\n                backgroundClip: this.backgroundClip,\n                color: this.sequenceColor,\n                fontWeight: this.fontWeight,\n            };\n        }\n    },\n}\n<\/script>\n\n<style>\n.msa-wrapper {\n    padding: 16px; /* equivalent to pa-4 */\n    display: flex;\n    flex-direction: column;\n    font-family: monospace;\n    white-space: nowrap;\n    width: 100%;\n}\n.msa-block {\n    margin-bottom: 1.5em;\n    display: grid;\n    grid-template-columns: fit-content(20%) 5fr auto;\n    width: 100%;\n    justify-content: space-between;\n    gap: 0px 16px;\n    line-height: 1em;\n}\n.msa-block:last-child {\n    margin-bottom: 0;\n}\n.msa-block .sequence {\n    display: inline-block;\n    padding: 0px;\n    margin: 0px;\n    letter-spacing: 4px;\n    color: transparent;\n    z-index: 0;\n}\n.msa-block .sequence::selection, .msa-block .sequence strong {\n    background: #11FFEE;\n    color: #111;\n}\n.msa-row {\n    display: contents;\n/*     padding: 0;\n    margin: 0;\n    display: grid;\n    grid-template-columns: fit-content(20%) 5fr auto;\n    width: 100%;\n    justify-content: space-between;\n    gap: 16px;\n    line-height: 1em; */\n}\n.sequence-wrapper {\n    overflow: hidden;\n    align-content: left;\n    align-items: center;\n    display: flex;\n    flex-grow: 1;\n    text-align: left;\n}\n.sequence {\n    margin-left: auto;\n    margin: 0;\n    padding: 0;\n    line-height: 1em;\n}\n.header {\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n}\n.header:hover {\n    cursor: pointer;\n}\n.count {\n    text-align: right;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        4569: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => A
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a), o = n(1667), l = n.n(o), c = new URL(n(42), n.b), d = new URL(n(901), n.b), u = s()(i()), h = l()(c), p = l()(d);
            u.push([ t.id, "\n.panel-root[data-v-0d9b5935], .panel-content[data-v-0d9b5935] {\n    flex-direction: column;\n}\n.panel-root header[data-v-0d9b5935], .panel-content[data-v-0d9b5935] {\n    contain: content;\n}\n.panel-root nav[data-v-0d9b5935] {\n    flex: 0;\n}\n.panel-root .force-fill-height[data-v-0d9b5935] {\n    display: flex;\n    height: 100% !important;\n}\n.panel-root[data-v-0d9b5935] .v-toolbar {\n    background-repeat: repeat;\n}\n.theme--light .panel-root[data-v-0d9b5935] .v-toolbar {\n    background: url(" + h + ");\n}\n.theme--dark .panel-root[data-v-0d9b5935] .v-toolbar {\n    background: url(" + p + ");\n}\n.panel-root[data-v-0d9b5935] .text-h6 {\n    margin-bottom: -5px;\n}\n.panel-root[data-v-0d9b5935] .text-h6 i.v-icon {\n    font-size: 1em;\n    vertical-align: bottom;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/Panel.vue" ],
                names: [],
                mappings: ";AAuDA;IACA,sBAAA;AACA;AAEA;IACA,gBAAA;AACA;AAEA;IACA,OAAA;AACA;AAEA;IACA,aAAA;IACA,uBAAA;AACA;AAEA;IACA,yBAAA;AACA;AAEA;IACA,mDAAA;AAEA;AAEA;IACA,mDAAA;AACA;AAEA;IACA,mBAAA;AACA;AAEA;IACA,cAAA;IACA,sBAAA;AACA",
                sourcesContent: [ "<template>\n    <div :class=\"['panel-root', elevation != null ? 'elevation-' + elevation : null ]\">\n        <v-toolbar v-if=\"!!$slots['header'] || !!header\" text dense dark>\n            <v-btn v-if=\"collapsible\" style=\"margin-top:0;margin-left:-15px;\" icon plain  @click=\"isCollapsed = !isCollapsed\" :aria-expanded=\"isCollapsed ? 'false' : 'true'\" :aria-controls=\"uuid\">\n                <v-icon v-if=\"isCollapsed\">\n                    {{ $MDI.PlusBox }}\n                </v-icon>\n                <v-icon v-else>\n                    {{ $MDI.MinusBox }}\n                </v-icon>\n            </v-btn>\n            <span class=\"text-h6 align-end\">\n                <slot v-if=\"$slots['header']\" name=\"header\"></slot>\n                <template v-else>{{ header }}</template>\n            </span>\n            <v-spacer></v-spacer>\n            <slot name=\"toolbar-extra\"></slot>\n        </v-toolbar>\n        <v-card rounded=\"0\" :class=\"['panel', { 'd-flex' : flex }, { 'force-fill-height' : fillHeight }]\" :style=\"[{ 'display' : isCollapsed ? 'none !important' : null }]\" v-if=\"!isCollapsed || renderCollapsed\" :id=\"uuid\">\n            <v-card-text v-if=\"$slots['desc']\" class=\"subheading justify\">\n                <slot name=\"desc\"></slot>\n            </v-card-text>\n            <v-card-text v-if=\"$slots['content']\" :class=\"['panel-content', 'justify', { 'd-flex' : flex }]\">\n                <slot name=\"content\"></slot>\n            </v-card-text>\n        </v-card>\n    </div>\n</template>\n\n<script>\nlet uuid = 0;\nexport default {\n    name: 'panel',\n    props: { \n        header : { default: '', type: String }, \n        'fillHeight' : { default: false, type: Boolean }, \n        'collapsible' : { default: false, type: Boolean },\n        'collapsed' : { default: false, type: Boolean },\n        'flex' : { default: true, type: Boolean },\n        'elevation' : { default: null, type: Number },\n        'renderCollapsed' : { default: false, type: Boolean },\n    },\n    data() {\n        return {\n            isCollapsed: this.collapsed,\n        }\n    },\n    beforeCreate() {\n        this.uuid = 'panel-' + uuid.toString();\n        uuid += 1;\n    },\n}\n<\/script>\n\n<style scoped>\n.panel-root, .panel-content {\n    flex-direction: column;\n}\n\n.panel-root header, .panel-content {\n    contain: content;\n}\n\n.panel-root nav {\n    flex: 0;\n}\n\n.panel-root .force-fill-height {\n    display: flex;\n    height: 100% !important;\n}\n\n.panel-root >>> .v-toolbar {\n    background-repeat: repeat;\n}\n\n.theme--light .panel-root >>> .v-toolbar {\n    background: url('./assets/spiration-dark.png');\n    \n}\n\n.theme--dark .panel-root >>> .v-toolbar {\n    background: url('./assets/spiration-darker.png');\n}\n\n.panel-root >>> .text-h6 {\n    margin-bottom: -5px;\n}\n\n.panel-root >>> .text-h6 i.v-icon {\n    font-size: 1em;\n    vertical-align: bottom;\n}\n</style>" ],
                sourceRoot: ""
            } ]);
            const A = u;
        },
        6686: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, '\n.residues {\n    font-family:\n        InconsolataClustal, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono",\n        "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n    white-space: pre;\n}\n', "", {
                version: 3,
                sources: [ "webpack://./frontend/ResidueSpan.vue" ],
                names: [],
                mappings: ";AA8CA;IACA;;sHAEA;IACA,gBAAA;AACA",
                sourcesContent: [ '\x3c!--\nA span of residues in a sequence alignment. If a selection start/end is specified, this\nwill render a span with three child spans (before, highlight, after).\n--\x3e\n\n<template>\n    <span\n        v-if="!selectionStart && !selectionEnd"\n        @pointerup="emitPointerUpEvent"\n        @selectstart="emitSelectStartEvent"\n        class="residues"\n        :class="sequenceType"\n    ><slot></slot></span>\n    <span\n        v-else\n        @pointerup="emitPointerUpEvent"\n        @selectstart="emitSelectStartEvent"\n        class="residues"\n        :class="sequenceType"\n    >\x3c!--\n        --\x3e<span>{{ $slots.default[0].text.slice(0, selectionStart) }}</span>\x3c!--\n        --\x3e<span\n            class="selected"\n            @click="emitClickHighlight"\n           >{{ $slots.default[0].text.slice(selectionStart, selectionEnd) }}</span>\x3c!--\n        --\x3e<span>{{ $slots.default[0].text.slice(selectionEnd, $slots.default[0].text.length) }}</span>\n    </span>\n</template>\n\n<script>\nexport default {\n    name: \'ResidueSpan\',\n    props: {\n        sequenceType: { type: String },\n        selectionStart: { type: Number },\n        selectionEnd: { type: Number },\n    },\n    methods: {\n        emitPointerUpEvent(event) { this.$emit(\'pointerup\', event) },\n        emitSelectStartEvent(event) { this.$emit(\'selectstart\', event) },\n        emitClickHighlight(event) { this.$emit(\'clickHighlight\', event) },\n    }\n}\n<\/script>\n\n<style>\n.residues {\n    font-family:\n        InconsolataClustal, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono",\n        "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n    white-space: pre;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        864: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\n[data-v-54679682] .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/ResultLocal.vue" ],
                names: [],
                mappings: ";AAkGA;IACA,gCAAA;AACA",
                sourcesContent: [ '<template>\n<Local \n    :title="appTitle"\n    @uploadData="handleUploadData"\n    @downloadData="handleDownloadData"\n>\n    <template v-slot:default>\n        <v-tabs v-if="hits" center-active grow style="margin-bottom: 1em" show-arrows>\n            <v-tab v-for="(entry, index) in hits" :key="entry.query.header" @click="changeResult(index)">\n                {{ entry.query.header }} ({{ entry.results[0].alignments ? entry.results[0].alignments.length : 0 }})\n            </v-tab>\n        </v-tabs>\n        <ResultView\n            :key="currentIndex"\n            :ticket="ticket"\n            :error="error"\n            :mode="mode"\n            :hits="currentResult"\n            :selectedDatabases="selectedDatabases"\n            :tableMode="tableMode"\n        />       \n    </template>\n</Local>\n</template>\n\n<script>\nimport { parseResultsList, download, dateTime } from \'./Utilities.js\';\nimport ResultMixin from \'./ResultMixin.vue\';\nimport ResultView from \'./ResultView.vue\';\nimport Local from \'./Local.vue\';\n\nexport default {\n    name: \'ResultLocal\',\n    mixins: [ResultMixin],\n    components: { ResultView, Local },\n    data() {\n        return {\n            currentIndex: 0\n        };\n    },\n    mounted() {\n        document.onreadystatechange = () => {\n            if (document.readyState == "complete") {\n                let div = document.getElementById("data");\n                if (!div) {\n                    return null;\n                }\n                let data = JSON.parse(div.textContent);\n                this.fetchData(data);\n            }\n        }\n    },\n    computed: {\n        appTitle() {\n            return `${__STRINGS__.APP_NAME} Search`;\n        },\n        currentResult() {\n            if (this.hits === null)\n                return null;\n            return this.hits[this.currentIndex];\n        },\n        currentQuery() {\n            if (this.hits === null)\n                return "";\n            return this.hits[this.currentIndex].query.header;\n        }\n    },\n    methods: {\n        changeResult(newRes) {\n            this.currentIndex = newRes;\n            this.setColorScheme();\n        },\n        handleUploadData(data) {\n            this.fetchData(data);\n        },\n        handleDownloadData() {\n            if (!this.hits) {\n                return null;\n            }\n            download(this.hits, `${__APP__}-${dateTime()}.json`);\n        },\n        resetProperties() {\n            this.ticket = "";\n            this.error = "";\n            this.mode = "";\n            this.hits = null;\n            this.selectedDatabases = 0;\n            this.tableMode = 0;\n        },\n        fetchData(data) {\n            this.resetProperties();\n            this.hits = parseResultsList(data);\n        }\n    }\n};\n<\/script>\n\n<style scoped>\n::v-deep .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n</style>\n<style>\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        8742: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/ResultLocal.vue" ],
                names: [],
                mappings: ";AAuGA;IACA,oCAAA;AACA;AAEA;IACA,oCAAA;AACA",
                sourcesContent: [ '<template>\n<Local \n    :title="appTitle"\n    @uploadData="handleUploadData"\n    @downloadData="handleDownloadData"\n>\n    <template v-slot:default>\n        <v-tabs v-if="hits" center-active grow style="margin-bottom: 1em" show-arrows>\n            <v-tab v-for="(entry, index) in hits" :key="entry.query.header" @click="changeResult(index)">\n                {{ entry.query.header }} ({{ entry.results[0].alignments ? entry.results[0].alignments.length : 0 }})\n            </v-tab>\n        </v-tabs>\n        <ResultView\n            :key="currentIndex"\n            :ticket="ticket"\n            :error="error"\n            :mode="mode"\n            :hits="currentResult"\n            :selectedDatabases="selectedDatabases"\n            :tableMode="tableMode"\n        />       \n    </template>\n</Local>\n</template>\n\n<script>\nimport { parseResultsList, download, dateTime } from \'./Utilities.js\';\nimport ResultMixin from \'./ResultMixin.vue\';\nimport ResultView from \'./ResultView.vue\';\nimport Local from \'./Local.vue\';\n\nexport default {\n    name: \'ResultLocal\',\n    mixins: [ResultMixin],\n    components: { ResultView, Local },\n    data() {\n        return {\n            currentIndex: 0\n        };\n    },\n    mounted() {\n        document.onreadystatechange = () => {\n            if (document.readyState == "complete") {\n                let div = document.getElementById("data");\n                if (!div) {\n                    return null;\n                }\n                let data = JSON.parse(div.textContent);\n                this.fetchData(data);\n            }\n        }\n    },\n    computed: {\n        appTitle() {\n            return `${__STRINGS__.APP_NAME} Search`;\n        },\n        currentResult() {\n            if (this.hits === null)\n                return null;\n            return this.hits[this.currentIndex];\n        },\n        currentQuery() {\n            if (this.hits === null)\n                return "";\n            return this.hits[this.currentIndex].query.header;\n        }\n    },\n    methods: {\n        changeResult(newRes) {\n            this.currentIndex = newRes;\n            this.setColorScheme();\n        },\n        handleUploadData(data) {\n            this.fetchData(data);\n        },\n        handleDownloadData() {\n            if (!this.hits) {\n                return null;\n            }\n            download(this.hits, `${__APP__}-${dateTime()}.json`);\n        },\n        resetProperties() {\n            this.ticket = "";\n            this.error = "";\n            this.mode = "";\n            this.hits = null;\n            this.selectedDatabases = 0;\n            this.tableMode = 0;\n        },\n        fetchData(data) {\n            this.resetProperties();\n            this.hits = parseResultsList(data);\n        }\n    }\n};\n<\/script>\n\n<style scoped>\n::v-deep .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n</style>\n<style>\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        8018: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\n.theme--dark svg[data-v-36db98f6] {\n\tfill: white;\n}\n.theme--light svg[data-v-36db98f6]  {\n\tfill: black;\n}\n.sankey-container[data-v-36db98f6] {\n\tdisplay: flex;\n\twidth: 100%;\n\theight: auto; /* Ensure it takes full viewport height */\n}\nsvg[data-v-36db98f6] {\n  display: block; /* Prevent extra margins caused by inline SVG */\n  width: 100%;\n  height: auto;\n}\n.sankey-diagram[data-v-36db98f6] {\n\twidth: 100%;\n\theight: auto;\n\tpadding-bottom: 32px;\n\toverflow-x: scroll;\n\t/* Hide horizontal scrollbar for IE, Edge and Firefox */\n\t-ms-overflow-style: none; /* IE and Edge */\n\tscrollbar-width: none; /* Firefox */\n}\n/* Hide horizontal scrollbar for Chrome, Safari and Opera */\n.sankey-diagram[data-v-36db98f6]::-webkit-scrollbar {\n\tdisplay: none;\n}\nsvg.hide[data-v-36db98f6] {\n\tdisplay: none;\n}\n/* Node Hover Tooltip */\n.tooltip[data-v-36db98f6] {\n\tposition: absolute;\n\tbackground-color: rgba(38, 50, 56, 0.95);\n\tpadding: 10px;\n\tborder-radius: 8px;\n\tcolor: white;\n\tpointer-events: none;\n\tz-index: 1000;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/SankeyDiagram.vue" ],
                names: [],
                mappings: ";AAqkBA;CACA,WAAA;AACA;AACA;CACA,WAAA;AACA;AAEA;CACA,aAAA;CACA,WAAA;CACA,YAAA,EAAA,yCAAA;AACA;AACA;EACA,cAAA,EAAA,+CAAA;EACA,WAAA;EACA,YAAA;AACA;AAEA;CACA,WAAA;CACA,YAAA;CACA,oBAAA;CACA,kBAAA;CACA,uDAAA;CACA,wBAAA,EAAA,gBAAA;CACA,qBAAA,EAAA,YAAA;AACA;AACA,2DAAA;AACA;CACA,aAAA;AACA;AAEA;CACA,aAAA;AACA;AACA,uBAAA;AACA;CACA,kBAAA;CACA,wCAAA;CACA,aAAA;CACA,kBAAA;CACA,YAAA;CACA,oBAAA;CACA,aAAA;AACA",
                sourcesContent: [ '<template>\n\t <div class="sankey-container">\n        <svg ref="sankeyContainer" class="hide"></svg>    \n        </div>\n</template>\n\n<script>\nimport * as d3 from "d3";\nimport { sankey, sankeyLinkHorizontal, sankeyJustify } from "d3-sankey";\nimport { sankeyRankColumns } from "./rankUtils";\n\nexport default {\n\tname: "SankeyDiagram",\n    props: {\n        rawData: {\n\t\t\ttype: Array,\n\t\t\trequired: true,\n\t\t},\n\t\tcurrentSelectedNodeId: {\n\t\t\ttype: String,\n\t\t\tdefault: null,\n\t\t},\n\t\tdb: {\n\t\t\ttype: String,\n\t\t\trequired: true,\n\t\t},\n\t\tcurrentSelectedDb: {\n\t\t\ttype: String,\n\t\t\tdefault: null,\n\t\t}\n\t},\n    data: () => ({\n\t\tcurrentSelectedNode: null, // Track the currently selected node\n\t\tunclassifiedNodes: [], // Store unclassified nodes\n\t\t\n\t\t// Data for graph rendering\n\t\tsankeyRankColumns,\n\t\tcolors: [\n\t\t\t"#57291F",\n\t\t\t"#C0413B",\n\t\t\t"#D77B5F",\n\t\t\t"#FF9200",\n\t\t\t"#FFCD73",\n\t\t\t"#F7E5BF",\n\t\t\t"#C87505",\n\t\t\t"#F18E3F",\n\t\t\t"#E59579",\n\t\t\t"#C14C32",\n\t\t\t"#80003A",\n\t\t\t"#506432",\n\t\t\t"#FFC500",\n\t\t\t"#B30019",\n\t\t\t"#EC410B",\n\t\t\t"#E63400",\n\t\t\t"#8CB5B5",\n\t\t\t"#6C3400",\n\t\t\t"#FFA400",\n\t\t\t"#41222A",\n\t\t\t"#FFB27B",\n\t\t\t"#FFCD87",\n\t\t\t"#BC7576",\n\t\t],\n\t}),\n\twatch: {\n\t\trawData: {\n\t\t\timmediate: true,\n\t\t\thandler(newValue) {\n\t\t\t\tthis.$nextTick(() => {\n\t\t\t\t\tif (newValue) {\n\t\t\t\t\t\tthis.createSankey(newValue);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t},\n\t\t},\n\t\tcurrentSelectedDb: {\n\t\t\timmediate: true,\n\t\t\thandler(newValue) {\n\t\t\t\tif (newValue !== this.db) {\n\t\t\t\t\t// Reset the selected node when switching databases\n\t\t\t\t\tthis.currentSelectedNode = null;\n\t\t\t\t\tthis.createSankey(this.rawData);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n    },\n    methods: {\n\t\t// Function for processing/parsing data\n\t\tparseData(data, isFullGraph = false) {\n\t\t\tconst nodes = [];\n\t\t\tconst links = [];\n\n\t\t\tlet currentLineage = []; // Track the current lineage\n\t\t\tconst nodesByRank = {}; // Store nodes by rank\n\n\t\t\tlet rootNode = null;\n\t\t\tthis.unclassifiedNodes = [];\n\n\t\t\t// Step 1: Create nodes and save lineage data for ALL NODES\n\t\t\tdata.forEach((d) => {\n\t\t\t\tlet node = {\n\t\t\t\t\tid: d.taxon_id,\n\t\t\t\t\ttaxon_id: d.taxon_id,\n\t\t\t\t\tname: d.name,\n\t\t\t\t\trank: d.rank,\n\t\t\t\t\ttrueRank: d.rank,\n\t\t\t\t\thierarchy: d.depth,\n\t\t\t\t\tproportion: parseFloat(d.proportion),\n\t\t\t\t\tclade_reads: parseFloat(d.clade_reads),\n\t\t\t\t\ttaxon_reads: d.taxon_reads,\n\t\t\t\t\tlineage: null, \n\t\t\t\t\ttype: "", \n\t\t\t\t};\n\n\t\t\t\t// Add node to its corresponding rank collection\n\t\t\t\t// + Add root node to the "root" collection\n\t\t\t\tif (this.sankeyRankColumns.includes(d.rank)) {\n\t\t\t\t\tif (!nodesByRank[d.rank]) {\n\t\t\t\t\t\tnodesByRank[d.rank] = [];\n\t\t\t\t\t}\n\t\t\t\t\tnodesByRank[d.rank].push(node);\n\t\t\t\t} else if (this.isRootNode(node)) {\n\t\t\t\t\tnodesByRank["root"] = [node];\n\t\t\t\t\tnode.rank = "root";\n\t\t\t\t\trootNode = node;\n\t\t\t\t} else if ((node.id === \'12908\' && node.name === \'unclassified sequences\') || (node.id === \'28384\' && node.name === \'other sequences\')) {\n\t\t\t\t\tthis.unclassifiedNodes.push(node);\n\t\t\t\t}\n\n\t\t\t\t// Store lineage for each node\n\t\t\t\tlet lastLineageNode = currentLineage[currentLineage.length - 1];\n\t\t\t\tif (lastLineageNode) {\n\t\t\t\t\tlet currentRank = node.hierarchy;\n\t\t\t\t\tlet lastRank = lastLineageNode.hierarchy;\n\t\t\t\t\t\n\t\t\t\t\twhile (lastLineageNode && currentRank <= lastRank) {\n\t\t\t\t\t\tcurrentLineage.pop();\n\t\t\t\t\t\t\n\t\t\t\t\t\tlastLineageNode = currentLineage[currentLineage.length - 1];\n\t\t\t\t\t\tif (!lastLineageNode) {\n\t\t\t\t\t\t\tbreak; // Exit the loop if no more nodes in the lineage\n\t\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t\t\tlastRank = lastLineageNode.hierarchy; // Update lastRank for the next iteration comparison\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t// Append current node to currentLineage array + store lineage data\n\t\t\t\tcurrentLineage.push(node);\n\t\t\t\tnode.lineage = [...currentLineage];\n\t\t\t});\n\n\t\t\t// Step 2: Filter top 10 nodes by clade_reads for each rank\n\t\t\t// + Add filtered rank nodes to sankey data\n\t\t\tthis.sankeyRankColumns.forEach((rank) => {\n\t\t\t\tif (nodesByRank[rank]) {\n\t\t\t\t\t// Sort nodes by clade_reads in descending order and select the top nodes\n\t\t\t\t\tconst topNodes = nodesByRank[rank].sort((a, b) => b.clade_reads - a.clade_reads).slice(0, isFullGraph ? nodesByRank[rank].length : 10);\n\t\t\t\t\tnodes.push(...topNodes);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t// Step 3: Create links based on filtered nodes\' lineage\n\t\t\tnodes.forEach((node) => {\n\t\t\t\t// Find the previous node in the lineage that is in sankeyRankColumns\n\t\t\t\tconst lineage = node.lineage;\n\n\t\t\t\tlet previousNode = lineage[lineage.length - 2];\n\t\t\t\twhile (previousNode) {\n\t\t\t\t\tconst linkEntry = {\n\t\t\t\t\t\tsourceName: previousNode.name,\n\t\t\t\t\t\tsource: previousNode.id,\n\t\t\t\t\t\ttargetName: node.name,\n\t\t\t\t\t\ttarget: node.id,\n\t\t\t\t\t\tvalue: node.clade_reads,\n\t\t\t\t\t};\n\n\t\t\t\t\tif (this.sankeyRankColumns.includes(previousNode.rank) && nodes.includes(previousNode)) {\n\t\t\t\t\t\tlinks.push(linkEntry);\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\n\t\t\t\t\tpreviousNode = lineage[lineage.indexOf(previousNode) - 1];\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t// Step 4: Add an unclassified node under the root\n\t\t\tif (rootNode) {\n\t\t\t\tlet totalClassifiedCladeReads = 0;\n\t\t\t\tlet totalClassifiedProportion = 0;\n\n\t\t\t\t// Count total classified clade reads and proportion\n\t\t\t\tlinks.filter((link) => link.source === rootNode.id).forEach((link) => {\n\t\t\t\t\tconst targetNode = nodes.find((node) => node.id === link.target);\n\t\t\t\t\ttotalClassifiedCladeReads = totalClassifiedCladeReads + targetNode.clade_reads;\n\t\t\t\t\ttotalClassifiedProportion = totalClassifiedProportion + targetNode.proportion;\n\t\t\t\t});\n\n\t\t\t\tconst totalUnclassifiedCladeReads = rootNode.clade_reads - totalClassifiedCladeReads;\n\t\t\t\tif (totalUnclassifiedCladeReads > 0) {\n\t\t\t\t\tconst unclassifiedNode = {\n\t\t\t\t\t\tid: "",\n\t\t\t\t\t\ttaxon_id: "",\n\t\t\t\t\t\tname: "Unclassified sequences",\n\t\t\t\t\t\trank: this.sankeyRankColumns[this.sankeyRankColumns.indexOf(rootNode.rank)+1],\n\t\t\t\t\t\ttrueRank: "unclassified",\n\t\t\t\t\t\thierarchy: rootNode.hierarchy + 1,\n\t\t\t\t\t\tproportion: rootNode.proportion - totalClassifiedProportion,\n\t\t\t\t\t\tclade_reads: totalUnclassifiedCladeReads,\n\t\t\t\t\t\ttaxon_reads: 0,\n\t\t\t\t\t\tlineage: [rootNode],\n\t\t\t\t\t\ttype: "unclassified",\n\t\t\t\t\t};\n\t\t\t\t\tunclassifiedNode.lineage.push(unclassifiedNode);\n\t\t\t\t\tnodes.push(unclassifiedNode);\n\n\t\t\t\t\tlinks.push({\n\t\t\t\t\t\tsourceName: rootNode.name,\n\t\t\t\t\t\tsource: rootNode.id,\n\t\t\t\t\t\ttargetName: unclassifiedNode.name,\n\t\t\t\t\t\ttarget: unclassifiedNode.id,\n\t\t\t\t\t\tvalue: totalUnclassifiedCladeReads,\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn { nodes, links };\n\t\t},\n\t\tisRootNode(node) {\n\t\t\t// Check if the node is the root node\n\t\t\treturn parseInt(node.taxon_id) === 1;\n\t\t},\n        // Main function for rendering Sankey\n\t\tcreateSankey(items) {\n\t\t\tconst { nodes, links } = this.parseData(items);\n\n\t\t\t// // Check if nodes and links are not empty\n\t\t\tif (!nodes.length || !links.length) {\n\t\t\t\tconsole.warn("No data to create Sankey diagram");\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tconst container = this.$refs.sankeyContainer;\n\t\t\tif (!container || !container.parentElement) {\n\t\t\t\t// Ensure the container and its parent are accessible\n\t\t\t\treturn;\n\t\t\t}\n\t\t\td3.select(container).selectAll("*").remove(); // Clear the previous diagram\n\n\t\t\tconst nodeWidth = 30;\n\t\t\tconst nodePadding = 20;\n\t\t\tconst marginBottom = 50; // Margin for rank labels\n\t\t\tconst marginRight = 70;\n\n\t\t\tconst width = container.parentElement.clientWidth; // Dynamically get parent width\n\t\t\tconst height = 450;\n\t\t\t\n\t\t\tconst svg = d3.select(container)\n\t\t\t.attr("viewBox", `0 0 ${width} ${height+marginBottom}`)\n\t\t\t.attr("width", "100%")\n\t\t\t.attr("height", height)\n\t\t\t.classed("hide", false);\n\n\t\t\tconst sankeyGenerator = sankey()\n\t\t\t\t.nodeId((d) => d.id)\n\t\t\t\t.nodeAlign(sankeyJustify)\n\t\t\t\t.nodeWidth(nodeWidth)\n\t\t\t\t.nodePadding(nodePadding)\n\t\t\t\t.iterations(100)\n\t\t\t\t.extent([\n\t\t\t\t\t[10, 10],\n\t\t\t\t\t[width - marginRight, height - 6],\n\t\t\t\t]);\n\n\t\t\tconst graph = sankeyGenerator({\n\t\t\t\tnodes: nodes.map((d) => Object.assign({}, d)),\n\t\t\t\tlinks: links.map((d) => Object.assign({}, d)),\n\t\t\t});\n\t\t\tconst color = d3.scaleOrdinal().range(this.colors);\n\t\t\tconst unclassifiedLabelColor = "#696B7E";\n\n\t\t\t// Manually adjust nodes position to align by rank\n\t\t\tconst columnWidth = (width - marginRight) / this.sankeyRankColumns.length;\n\t\t\tconst columnMap = this.sankeyRankColumns.reduce((acc, rank, index) => {\n\t\t\t\tconst leftMargin = 10;\n\t\t\t\tacc[rank] = index * columnWidth + leftMargin;\n\t\t\t\treturn acc;\n\t\t\t}, {});\n\n\t\t\tgraph.nodes.forEach((node) => {\n\t\t\t\tnode.x0 = columnMap[node.rank];\n\t\t\t\tnode.x1 = node.x0 + sankeyGenerator.nodeWidth();\n\n\t\t\t\tif (node.type === "unclassified") {\n\t\t\t\t\tnode.color = unclassifiedLabelColor;\n\t\t\t\t} else {\n\t\t\t\t\tnode.color = color(node.id); // Assign color to node\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t// Re-run the layout to ensure correct vertical positioning\n\t\t\tsankeyGenerator.update(graph);\n\n\t\t\t// Add rank column labels\n\t\t\tconst rankLabels = [" ", "D", "K", "P", "C", "O", "F", "G", "S"];\n\t\t\tsvg\n\t\t\t\t.append("g")\n\t\t\t\t.selectAll("text")\n\t\t\t\t.data(this.sankeyRankColumns)\n\t\t\t\t.enter()\n\t\t\t\t.append("text")\n\t\t\t\t.attr("x", (rank) => columnMap[rank] + sankeyGenerator.nodeWidth() / 2)\n\t\t\t\t.attr("y", height + marginBottom / 2)\n\t\t\t\t.attr("dy", "0.35em")\n\t\t\t\t.attr("text-anchor", "middle")\n\t\t\t\t.text((rank, index) => rankLabels[index]);\n\n\t\t\t// Draw rank label divider link\n\t\t\tsvg\n\t\t\t\t.append("line")\n\t\t\t\t.attr("x1", 0)\n\t\t\t\t.attr("y1", height + 10)\n\t\t\t\t.attr("x2", width)\n\t\t\t\t.attr("y2", height + 10)\n\t\t\t\t.attr("stroke", "#000")\n\t\t\t\t.attr("stroke-width", 1);\n\n\t\t\t// Function to highlight lineage\n\t\t\tconst highlightLineage = (node) => {\n\t\t\t\tconst lineageIds = new Set(node.lineage.map((n) => n.id));\n\t\t\t\tlineageIds.add(node.id);\n\n\t\t\t\tsvg.selectAll("rect").style("opacity", (d) => (lineageIds.has(d.id) ? 1 : 0.2));\n\t\t\t\tsvg.selectAll("path").style("opacity", (d) => (lineageIds.has(d.source.id) && lineageIds.has(d.target.id) ? 1 : 0.2));\n\t\t\t\tsvg.selectAll(".label").style("opacity", (d) => (lineageIds.has(d.id) ? 1 : 0.1));\n\t\t\t\tsvg.selectAll(".clade-reads").style("opacity", (d) => (lineageIds.has(d.id) ? 1 : 0.1));\n\t\t\t};\n\n\t\t\t// Function to reset highlight\n\t\t\tconst resetHighlight = () => {\n\t\t\t\tsvg.selectAll("rect").style("opacity", 1);\n\t\t\t\tsvg.selectAll("path").style("opacity", 1);\n\t\t\t\tsvg.selectAll(".label").style("opacity", 1);\n\t\t\t\tsvg.selectAll(".clade-reads").style("opacity", 1);\n\t\t\t};\n\n\t\t\t// // Define a clipping path for each link (crops out curve when links are too thick)\n\t\t\tsvg\n\t\t\t\t.append("defs")\n\t\t\t\t.selectAll("clipPath")\n\t\t\t\t.data(graph.links)\n\t\t\t\t.enter()\n\t\t\t\t.append("clipPath")\n\t\t\t\t.attr("id", (d, i) => `clip-path-${this.instanceId}-${i}`)\n\t\t\t\t.append("rect")\n\t\t\t\t.attr("x", (d) => d.source.x1)\n\t\t\t\t.attr("y", 0)\n\t\t\t\t.attr("width", (d) => d.target.x0 - d.source.x1)\n\t\t\t\t.attr("height", height);\n\n\t\t\t// Add links\n\t\t\tsvg\n\t\t\t\t.append("g")\n\t\t\t\t.attr("fill", "none")\n\t\t\t\t.attr("stroke-opacity", 0.3)\n\t\t\t\t.selectAll("path")\n\t\t\t\t.data(graph.links)\n\t\t\t\t.enter()\n\t\t\t\t.append("path")\n\t\t\t\t.attr("d", sankeyLinkHorizontal())\n\t\t\t\t.attr("stroke", (d) => (d.target.type === "unclassified" ? unclassifiedLabelColor : color(d.source.color)))\n\t\t\t\t.attr("stroke-width", (d) => Math.max(1, d.width))\n\t\t\t\t.attr("clip-path", (d, i) => `url(#clip-path-${this.instanceId}-${i})`);\n\t\t\n\t\t\t// Create node group (node + labels) and add mouse events\n\t\t\tconst nodeGroup = svg\n\t\t\t\t.append("g")\n\t\t\t\t.selectAll(".node-group")\n\t\t\t\t.data(graph.nodes)\n\t\t\t\t.enter()\n\t\t\t\t.append("g")\n\t\t\t\t.attr("class", (d) => "node-group taxid-" + d.id)\n\t\t\t\t.attr("transform", (d) => `translate(${d.x0}, ${d.y0})`)\n\t\t\t\t.on("mouseover", (event, d) => {\n    \t\t\t\t// Highlight the lineage\n\t\t\t\t\thighlightLineage(d);\n\n\t\t\t\t\t// Append tooltip to the body\n\t\t\t\t\tconst tooltip = d3.select("body")\n\t\t\t\t\t\t.append("div")\n\t\t\t\t\t\t.attr("class", "tooltip")\n\t\t\t\t\t\t.style("position", "absolute")\n\t\t\t\t\t\t.style("background-color", "rgba(38, 50, 56, 0.95)")\n\t\t\t\t\t\t.style("color", "white")\n\t\t\t\t\t\t.style("border-radius", "8px")\n\t\t\t\t\t\t.style("padding", "10px")\n\t\t\t\t\t\t.style("box-shadow", "0 2px 6px rgba(0, 0, 0, 0.1)")\n\t\t\t\t\t\t.style("opacity", 1)\n\t\t\t\t\t\t.html(`\n\t\t\t\t\t\t\t<div style="padding-top: 4px; padding-bottom: 4px; padding-left: 8px; padding-right: 8px;">\n\t\t\t\t\t\t\t\t${d.type !== "unclassified" ? `<p style="font-size: 0.6rem; margin-bottom: 0px;">#${d.taxon_id}</p>` : ""}\n\t\t\t\t\t\t\t\t<div style="display: flex; justify-content: space-between; align-items: center;">\n\t\t\t\t\t\t\t\t\t<div style="font-weight: bold; font-size: 0.875rem;">${d.name}</div>\n\t\t\t\t\t\t\t\t\t${d.type !== "unclassified" ? `<span style="background-color: rgba(255, 167, 38, 0.25); color: #ffa726; \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-weight: bold; padding: 4px 8px; border-radius: 12px; \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 0.875rem; margin-left: 10px;">${d.trueRank}</span>` : \'\'}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<hr style="margin: 8px 0; border: none; border-top: 1px solid #fff; opacity: 0.2;">\n\t\t\t\t\t\t\t\t<div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem;">\n\t\t\t\t\t\t\t\t\t<div style="font-weight: bold;">Clade Reads</div>\n\t\t\t\t\t\t\t\t\t<div style="margin-left: 10px;">${d.clade_reads}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t`);\n\n\t\t\t\t\t// Position the tooltip\n\t\t\t\t\ttooltip\n\t\t\t\t\t.style("left", `${event.pageX + 10}px`)\n\t\t\t\t\t.style("top", `${event.pageY + 10}px`);\n\t\t\t\t})\n\t\t\t\t.on("mousemove", (event, d) => {\n\t\t\t\t\t// Move the tooltip as the mouse moves\n\t\t\t\t\td3.select(".tooltip")\n\t\t\t\t\t\t.style("left", `${event.pageX + 10}px`)\n\t\t\t\t\t\t.style("top", `${event.pageY + 10}px`);\n\t\t\t\t})\n\t\t\t\t.on("mouseout", () => {\n\t\t\t\t\tresetHighlight();\n\t\t\t\t\t// Remove the tooltip when mouse leaves\n\t\t\t\t\td3.select(".tooltip").remove();\n\t\t\t\t})\n\t\t\t\t.on("click", (event, d) => {\n\t\t\t\t\t// Deselect any previously selected nodes\n\t\t\t\t\tsvg.selectAll("rect.node").style("stroke", null).style("stroke-width", null);\n\t\t\t\t\tsvg.selectAll("text.label").style("font-weight", null);\n\n\t\t\t\t\t// If the same node is clicked again, deselect it\n\t\t\t\t\tif (this.currentSelectedNode && this.currentSelectedNode.id === d.id) {\n\t\t\t\t\t\tthis.currentSelectedNode = null;\n\t\t\t\t\t\tthis.$emit("selectTaxon", { nodeId: null, descendantIds: null, db: this.db }); // Emit an empty array to show all IDs\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\n\t\t\t\t\t// Highlight the selected node\n\t\t\t\t\td3.select(`.taxid-${d.id} rect`)\n\t\t\t\t\t\t.style("stroke", "black")\n\t\t\t\t\t\t.style("stroke-width", "2px");\n\n\t\t\t\t\td3.select(`.taxid-${d.id} text.label`)\n\t\t\t\t\t\t.style("font-weight", "bold");\n\n\n\t\t\t\t\t// Function to collect all IDs of the current node and its descendants\n\t\t\t\t\tconst collectIds = (node) => {\n\t\t\t\t\t\tlet childrenIds = [node.taxon_id];\n\t\t\t\t\t\tchildrenIds = childrenIds.concat(this.findChildren(this.rawData, node));\n\t\t\t\t\t\treturn childrenIds;\n\t\t\t\t\t};\n\n\t\t\t\t\t// Collect all taxIds for children nodes\n\t\t\t\t\tlet allNodeIds = [];\n\t\t\t\t\tif (d.type === "unclassified") {\n\t\t\t\t\t\t// Handle unclassified nodes\n\t\t\t\t\t\tallNodeIds.push(\'0\');\n\t\t\t\t\t\tthis.unclassifiedNodes.forEach(node => {\n\t\t\t\t\t\t\tallNodeIds.push(...collectIds(node));\n\t\t\t\t\t\t});\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Collect IDs for other node types\n\t\t\t\t\t\tallNodeIds = collectIds(d);\n\t\t\t\t\t}\n\n\t\t\t\t\t// Update the currently selected node\n        \t\t\tthis.currentSelectedNode = d;\n\n\t\t\t\t\t// Emit the IDs array\n\t\t\t\t\tthis.$emit("selectTaxon", { nodeId: d.taxon_id, descendantIds: allNodeIds, db: this.db });\n\t\t\t\t});\n\t\t\t;\n\n\t\t\t// Create node rectangles\n\t\t\tnodeGroup\n\t\t\t\t.append("rect")\n\t\t\t\t.attr("width", (d) => d.x1 - d.x0)\n\t\t\t\t.attr("height", (d) => Math.max(1, d.y1 - d.y0))\n\t\t\t\t.attr("fill", (d) => (d.type === "unclassified" ? unclassifiedLabelColor : d.color))\n\t\t\t\t.attr("class", (d) => "node taxid-" + d.id)\n\t\t\t\t.style("cursor", "pointer")\n\t\t\t\t.style("stroke", (d) => this.currentSelectedNodeId === d.id ? "black" : null)\n\t\t\t\t.style("stroke-width", (d) => this.currentSelectedNodeId === d.id ? "2px" : "0px");\n\n\t\t\t// Add node name labels next to node\n\t\t\tnodeGroup\n\t\t\t\t.append("text")\n\t\t\t\t.attr("id", (d) => `nodeName-${d.id}`)\n\t\t\t\t.attr("class", (d) => "label taxid-" + d.id)\n\t\t\t\t.attr("x", (d) => d.x1 - d.x0 + 3)\n\t\t\t\t.attr("y", (d) => (d.y1 - d.y0) / 2)\n\t\t\t\t.attr("dy", "0.35em")\n\t\t\t\t.attr("text-anchor", "start")\n\t\t\t\t.text((d) => d.name)\n\t\t\t\t.style("font-size", "9px")\n\t\t\t\t.style("cursor", "pointer")\n\t\t\t\t.style("font-weight", (d) =>  "normal");\n\n\t\t\t// Add label above node (proportion/clade reads)\n\t\t\tnodeGroup\n\t\t\t\t.append("text")\n\t\t\t\t.attr("id", (d) => `cladeReads-${d.id}`)\n\t\t\t\t.attr("class", "clade-reads")\n\t\t\t\t.attr("x", (d) => (d.x1 - d.x0) / 2)\n\t\t\t\t.attr("y", -4)\n\t\t\t\t.attr("dy", "0.35em")\n\t\t\t\t.attr("text-anchor", "middle")\n\t\t\t\t.style("font-size", "9px")\n\t\t\t\t.text((d) => this.formatCladeReads(d.clade_reads))\n\t\t\t\t.style("cursor", "pointer");\n\t\t},\n\n\t\tformatCladeReads(value) {\n\t\t\tif (value >= 1000) {\n\t\t\t\treturn `${(value / 1000).toFixed(2)}k`;\n\t\t\t}\n\t\t\treturn value.toString();\n\t\t},\n\t\tfindChildren(rawData, selectedNode) {\n\t\t\tconst filteredTaxIds = [];\n\t\t\tlet startAdding = false;\n\t\t\tconst selectedNodeRank = selectedNode.hierarchy; \n\n\t\t\tfor (let i = 0; i < rawData.length; i++) {\n\n\t\t\t\tconst comparingNode = rawData[i];\n\t\t\t\tif (comparingNode.taxon_id === selectedNode.taxon_id) {\n\t\t\t\t\t// Start adding child nodes from here\n\t\t\t\t\tstartAdding = true;\n\t\t\t\t\tcontinue; // Move to the next iteration to skip the current node\n\t\t\t\t}\n\n\t\t\t\tif (startAdding) {\n  \t\t\t\t\tconst comparingNodeDepth = comparingNode.depth;\n\t\t\t\t\t  if (comparingNodeDepth > selectedNodeRank) {\n\t\t\t\t\t\tfilteredTaxIds.push(comparingNode.taxon_id);\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Stop when we encounter a node at the same or higher rank\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn filteredTaxIds;\n\t\t},\n\n\t\t// Throttle function (used for improving performance during node hover)\n\t\tthrottle(func, delay) {\n\t\t\tlet lastCall = 0;\n\t\t\treturn function (...args) {\n\t\t\t\tconst now = new Date().getTime();\n\t\t\t\tif (now - lastCall < delay) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tlastCall = now;\n\t\t\t\treturn func(...args);\n\t\t\t};\n\t\t},\n\t\tonResize() {\n\t\t\tif (this.rawData) {\n\t\t\t\tthis.drawSankey(this.rawData);\n\t\t\t}\n\t\t},\n\t\tmounted() {\n\t\t\t// Listener for screen resizing event\n\t\t\twindow.addEventListener("resize", this.onResize);\n\t\t},\n\t\tbeforeUnmount() {\n\t\t\twindow.removeEventListener("resize", this.onResize);\n\t\t},\n\t},\n}\n\n<\/script>\n\n<style scoped>\n.theme--dark svg {\n\tfill: white;\n}\n.theme--light svg  {\n\tfill: black;\n}\n\n.sankey-container {\n\tdisplay: flex;\n\twidth: 100%;\n\theight: auto; /* Ensure it takes full viewport height */\n}\nsvg {\n  display: block; /* Prevent extra margins caused by inline SVG */\n  width: 100%;\n  height: auto;\n}\n\n.sankey-diagram {\n\twidth: 100%;\n\theight: auto;\n\tpadding-bottom: 32px;\n\toverflow-x: scroll;\n\t/* Hide horizontal scrollbar for IE, Edge and Firefox */\n\t-ms-overflow-style: none; /* IE and Edge */\n\tscrollbar-width: none; /* Firefox */\n}\n/* Hide horizontal scrollbar for Chrome, Safari and Opera */\n.sankey-diagram::-webkit-scrollbar {\n\tdisplay: none;\n}\n\nsvg.hide {\n\tdisplay: none;\n}\n/* Node Hover Tooltip */\n.tooltip {\n\tposition: absolute;\n\tbackground-color: rgba(38, 50, 56, 0.95);\n\tpadding: 10px;\n\tborder-radius: 8px;\n\tcolor: white;\n\tpointer-events: none;\n\tz-index: 1000;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        405: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\n.canvas-wrapper {\n    /* display: block; */\n    border: 1px solid black;\n    margin-left: 80px;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/SequenceLogo.vue" ],
                names: [],
                mappings: ";AAyGA;IACA,oBAAA;IACA,uBAAA;IACA,iBAAA;AACA",
                sourcesContent: [ "<template>\n<div class=\"canvas-wrapper\">\n    <canvas ref=\"canvas\"></canvas>\n</div>\n</template>\n\n<script>\nfunction generateColumnCounts(sequences, alphabet='aa') {\n    // e_n:  small-sample correction for alignment of n letters\n    // H_i:  uncertainty (Shannon entropy) of position i\n    // R_i:  information content (y-axis) of position i\n    // F_bi: relative frequency of base/aa b at position i\n    if (sequences.length === 0)\n        return;\n    const counts = [];\n    const seqLength = sequences[0].aa.length;\n    const numSequences = sequences.length;\n    const e_n = Math.log(20) - ((1 / Math.log(2)) * (20 - 1) / (2 * numSequences));\n    for (let i = 0; i < seqLength; i++) {\n        let frequency = [];\n        for (let j = 0; j < numSequences; j++) {\n            let char = sequences[j][alphabet][i];\n            if (char === '-') {\n                continue;\n            }\n            if (typeof frequency[char] !== 'undefined') {\n                frequency[char]++;\n            } else {\n                frequency[char] = 1;\n            }\n        }\n        let H_i = 0.0;\n        for (let j in frequency) {\n            frequency[j] = frequency[j] / numSequences;\n            H_i -= frequency[j] * Math.log(frequency[j]);\n        }\n        let R_i = Math.abs(e_n - H_i);\n        let height = [];\n        for (let j in frequency) {\n            height.push([j, frequency[j] * R_i]);\n        }\n        height.sort(function(a, b) {\n            return (a[1] > b[1] ? 1 : -1);\n        });\n        counts.push(height);\n    }\n    return counts;\n}\n\nexport default {\n    props: {\n        sequences: { type: Array, default: () => ([]) },\n        alphabet: { type: String, default: 'aa' },\n        lineLen: { type: Number },\n        width: { type: Number },\n    },\n    watch: {\n        sequences: function(newSequences) {\n            const canvas = this.$refs.canvas;\n            const ctx = canvas.getContext(\"2d\");         \n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n            const counts = generateColumnCounts(newSequences, this.alphabet);\n            const sums = counts.map(item => item.reduce((sum, [_, a]) => sum + a, 0))\n            let max = Math.max(...sums);\n            \n            const fontSize = 16;\n            let x = 10;\n            const charWidth = canvas.width / this.lineLen;\n            // const charWidth = 10;\n            \n            for (let i = 0; i < counts.length; i++) {\n                let y = canvas.height;\n                // let max = counts[i].reduce((sum, [, e]) => sum + e, 0)\n                \n                for (const [char, count] of counts[i]) {\n                    const charHeight = count / max * canvas.height;\n                    \n                    ctx.save();\n                    ctx.translate(x, y);\n                    ctx.scale(1, charHeight / fontSize);\n                    ctx.fillStyle = this.$vuetify.theme.dark ? 'white' : 'black';\n                    ctx.fillText(char, 0, 0);\n                    ctx.restore();\n\n                    y -= charHeight;\n\n                }\n                x += charWidth;\n            }\n        }\n    },\n    mounted() {\n        const canvas = this.$refs.canvas;\n        const ctx = canvas.getContext(\"2d\");         \n        canvas.width = 16 * this.lineLen; //window.innerWidth;\n        canvas.height = 100;\n        ctx.font = '16px monospace'\n        ctx.fillStyle = 'red';\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n    }\n}\n<\/script>\n\n<style>\n.canvas-wrapper {\n    /* display: block; */\n    border: 1px solid black;\n    margin-left: 80px;\n}\n</style>" ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        7866: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\n.structure-wrapper[data-v-739834d6] {\n    width: 500px;\n    height: 400px;\n    margin: 0 auto;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/StructureViewer.vue" ],
                names: [],
                mappings: ";AAqjBA;IACA,YAAA;IACA,aAAA;IACA,cAAA;AACA",
                sourcesContent: [ '<template>\n<div class="structure-panel" v-if="alignments.length > 0 && \'tCa\' in alignments[0]">\n    <StructureViewerTooltip attach=".structure-panel" />\n    <div class="structure-wrapper" ref="structurepanel">\n        <table v-if="tmAlignResults" class="tmscore-panel" v-bind="tmPanelBindings">\n            <tr>\n                <td class="left-cell">TM-Score:</td>\n                <td class="right-cell">{{ tmAlignResults.tmScore }}</td>\n            </tr>\n            <tr>\n                <td class="left-cell">RMSD:</td>\n                <td class="right-cell">{{ tmAlignResults.rmsd  }}</td>\n            </tr>\n        </table>\n        <StructureViewerToolbar\n            :isFullscreen="isFullscreen"\n            :isSpinning="isSpinning"\n            :showQuery="showQuery"\n            :showTarget="showTarget"\n            :showArrows="showArrows"\n            :disableQueryButton="!hasQuery"\n            :disableArrowButton="!hasQuery"\n            @makeImage="handleMakeImage"\n            @makePDB="handleMakePDB"\n            @resetView="handleResetView"\n            @toggleFullscreen="handleToggleFullscreen"\n            @toggleTarget="handleToggleTarget"\n            @toggleQuery="handleToggleQuery"\n            @toggleArrows="handleToggleArrows"\n            @toggleSpin="handleToggleSpin"\n        />\n        <div class="structure-viewer" ref="viewport"></div>\n    </div>\n</div>\n</template>\n\n<script>\nimport StructureViewerTooltip from \'./StructureViewerTooltip.vue\';\nimport StructureViewerToolbar from \'./StructureViewerToolbar.vue\';\nimport StructureViewerMixin from \'./StructureViewerMixin.vue\';\nimport { mockPDB, makeSubPDB, transformStructure, makeMatrix4  } from \'./Utilities.js\';\nimport { pulchra } from \'pulchra-wasm\';\nimport { tmalign, parse as parseTMOutput, parseMatrix as parseTMMatrix } from \'tmalign-wasm\';\n\nimport Panel from \'./Panel.vue\';\nimport { Shape, Selection, download, ColormakerRegistry, PdbWriter, Color, concatStructures, StructureComponent } from \'ngl\';\n\n// Create NGL arrows from array of ([X, Y, Z], [X, Y, Z]) pairs\n// Get XYZ coordinates of CA of a given residue\nconst xyz = (structure, resIndex) => {\n    var rp = structure.getResidueProxy();\n    var ap = structure.getAtomProxy();\n    rp.index = resIndex;\n    ap.index = rp.getAtomIndexByName(\'CA\');\n    return [ap.x, ap.y, ap.z];\n}\n\n// Save indices of matching columns in an alignment\nconst getMatchingColumns = (alignment) => {\n    let cols_q = [];\n    let cols_t = [];\n    let id_q = alignment.qStartPos;\n    let id_t = alignment.dbStartPos;\n    for (let i = 0; i < alignment.qAln.length; i++) {\n        if (alignment.qAln[i] === \'-\' || alignment.dbAln[i] === \'-\') {\n            if (alignment.qAln[i] === \'-\') id_t++;\n            else id_q++;\n        } else {\n            cols_q.push(id_q);\n            cols_t.push(id_t);\n            id_q++;\n            id_t++;\n        }\n    }\n    return [cols_q, cols_t]\n}\n\n// Get chain from structure name like Structure_A\nconst getChainName = (name) => {\n    // HACK FIXME fix AF chain names\n    if (/_v[0-9]+$/.test(name)) {\n        return \'A\';\n    }\n    let pos = name.lastIndexOf(\'_\');\n    if (pos != -1) {\n        let match = name.substring(pos + 1);\n        return match.length >= 1 ? match[0] : \'A\';\n    }\n    // fallback\n    return \'A\';\n}\n\nconst getAccession = (name) => {\n    // HACK FIXME fix AF chain names\n    if (/_v[0-9]+$/.test(name)) {\n        return name;\n    }\n    let pos = name.lastIndexOf(\'_\');\n    return pos != -1 ? name.substring(0, pos) : name;\n}\n\n// Get coordinates of all atoms found in given selection\n// skip consecutive res indices as they are most likely alternative locations\n// foldseek always chooses the first alt locations, so we mimic this behavior\nconst getAtomXYZ = (structure, sele) => {\n    const xyz = [];\n    let lastResidueIndex = -1;\n\n    structure.eachAtom(ap => {\n        if (ap.resno !== lastResidueIndex) {\n            xyz.push([ap.x, ap.y, ap.z]);\n            lastResidueIndex = ap.resno;\n        }\n    }, sele); \n\n    return xyz;\n}\n\nconst colorblindColors = ColormakerRegistry.addScheme(function() {\n    let colors = [0x991999, 0x00BFBF, 0xE9967A, 0x009E73, 0xF0E442, 0x0072B2, 0xD55E00, 0xCC79A7];\n    this.atomColor = function(atom) {\n        return colors[atom.chainIndex % colors.length];\n    }\n}, "colorblindColors")\n\nconst getPdbText = comp => {\n    let pw = new PdbWriter(comp.structure, { renumberSerial: false });\n    return pw.getData().split(\'\\n\').filter(line => line.startsWith(\'ATOM\')).join(\'\\n\');\n}\n\nexport default {\n    name: "StructureViewer",\n    components: {\n        Panel,\n        StructureViewerTooltip,\n        StructureViewerToolbar,\n    },\n    mixins: [\n        StructureViewerMixin,\n    ],\n    data() {\n        return {\n            selection: null,\n            showArrows: false,\n            showQuery: 0,\n            showTarget: 0,\n            tmAlignResults: null,\n            hasQuery: true,\n        }\n    },\n    props: {\n        alignments: { type: Array },\n        highlights: { type: Array },\n        queryFile: { type: String },\n        queryAlignedColor: { type: String, default: "#1E88E5" },\n        queryUnalignedColor: { type: String, default: "#A5CFF5" },\n        targetAlignedColor: { type: String, default: "#FFC107" },\n        targetUnalignedColor: { type: String, default: "#FFE699" },\n        qRepr: { type: String, default: "cartoon" },\n        tRepr: { type: String, default: "cartoon" },\n        hits: { type: Object },\n        autoViewTime: { type: Number, default: 100 }\n    },\n    methods: {\n        // Create arrows connecting CA coordinates for query/target in match columns\n        async drawArrows(str1, str2) {\n            const shape = new Shape(\'arrows\');\n            await Promise.all(this.alignments.map(async (alignment) => {\n                const chain_q = getChainName(alignment.query);\n                const chain_t = getChainName(alignment.target);\n                const [sele_q, sele_t] = getMatchingColumns(alignment).map(arr => arr.join(" or "));\n\n                const str1_xyz = getAtomXYZ(str1, new Selection(`(${sele_q}) and :${chain_q}.CA`));\n                const str2_xyz = getAtomXYZ(str2, new Selection(`(${sele_t}) and :${chain_t}.CA`));\n\n                if (str1_xyz.length != str2_xyz.length) {\n                    console.warn("Different number of CA atoms in query and target", str1_xyz.length, str2_xyz.length);\n                }\n                for (let i = 0; i < Math.min(str1_xyz.length, str2_xyz.length); i++) {\n                    shape.addArrow(str1_xyz[i], str2_xyz[i], [0, 1, 1], 0.4);\n                }\n            }));\n            let component = this.stage.addComponentFromObject(shape);\n            component.addRepresentation(\'buffer\');\n            component.setVisibility(this.showArrows);\n        },\n        handleToggleArrows() {\n            if (!this.stage) return;\n            this.showArrows = !this.showArrows;\n        },\n        handleToggleQuery() {\n            if (!this.stage) return;\n            if (__LOCAL__) {\n                this.showQuery = (this.showQuery === 0) ? 1 : 0;\n            } else {\n                this.showQuery = (this.showQuery === 2) ? 0 : this.showQuery + 1;\n            }\n        },\n        handleResetView() {\n            if (!this.stage) return;\n            this.setQuerySelection();\n        },\n        handleToggleTarget() {\n            if (!this.stage) return;\n            if (__LOCAL__) {\n                this.showTarget = (this.showTarget === 0) ? 1 : 0;\n            } else {\n                this.showTarget = (this.showTarget === 2) ? 0 : this.showTarget + 1; \n            }\n        },\n        clearSelection() {\n            if (!this.alignments || !this.stage) return;\n            let repr = this.stage.getRepresentationsByName("targetHighlight");\n            repr.setSelection()\n            repr.setVisibility(false)\n        },\n        setSelectionData(selection) {\n            // FIXME tube/cartoon representation cannot visualise <3 residues\n            //       https://github.com/nglviewer/ngl/issues/759\n            //       use licorice representation for this case? or just +1 to make 3\n            if (!this.alignments || !this.stage) return;\n            let repr = this.stage.getRepresentationsByName("targetHighlight");\n            repr.setSelection()\n            if (selection.length === 0) {\n                repr.setVisibility(false);\n                return;\n            }\n            let seles = [];\n            for (let [i, start, length] of selection) {\n                let chain = getChainName(this.alignments[i].target);\n                let end = start + length;\n                seles.push(`${start}-${end}:${chain}`);\n            } \n            let sele = seles.join(" or ");\n            repr.setSelection(sele);\n            repr.setVisibility(true);\n        },\n        setQuerySelection() {\n            let repr = this.stage.getRepresentationsByName("queryStructure");\n            if (!repr) return;\n            let sele = this.querySele;\n            repr.setSelection(sele);\n            repr.list[0].parent.autoView(sele, this.autoViewTime);\n            if (this.showQuery === 0) {\n                this.stage.getRepresentationsByName("querySurface-1").setVisibility(false);\n                this.stage.getRepresentationsByName("querySurface-2").setVisibility(false);\n            } else if (this.showQuery === 1) {\n                this.stage.getRepresentationsByName("querySurface-1").setVisibility(true);\n                this.stage.getRepresentationsByName("querySurface-2").setVisibility(false);\n            } else {\n                this.stage.getRepresentationsByName("querySurface-1").setVisibility(true);\n                this.stage.getRepresentationsByName("querySurface-2").setVisibility(true);\n            }\n        },\n        setTargetSelection() {\n            let repr = this.stage.getRepresentationsByName("targetStructure");\n            if (!repr) return;\n            let sele = this.targetSele;\n            repr.setSelection(sele);\n        },\n        async handleMakeImage() {\n            if (!this.stage)\n                return;\n            let wasSpinning = this.isSpinning;\n            this.isSpinning = false;\n            let title = this.alignments.map(aln => this.hasQuery ? `${aln.query}-${aln.target}` : aln.target).join("_");\n            this.stage.viewer.setLight(undefined, undefined, undefined, 0.2)\n            const blob = await this.stage.makeImage({\n                trim: true,\n                factor: (this.isFullscreen) ? 1 : 8,\n                antialias: true,\n                transparent: true,\n            });\n            this.stage.viewer.setLight(undefined, undefined, undefined, this.$vuetify.theme.dark ? 0.4 : 0.2)\n            download(blob, `${title}.png`)\n            this.isSpinning = wasSpinning;\n        },\n        handleMakePDB() {\n            if (!this.stage)\n                return;\n            let qPDB = this.stage.getComponentsByName("queryStructure").list.map(getPdbText); \n            let tPDB = this.stage.getComponentsByName("targetStructure").list.map(getPdbText);\n            if (!qPDB && !tPDB) \n                return;\n            let title = this.alignments.map(aln => qPDB ? `${aln.query}-${aln.target}` : aln.target);\n            let result = null;\n            if (qPDB && tPDB) {\n                result =\n`TITLE     ${title.join(" ")}\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms might have been re-generated by PULCHRA,\nREMARK              if they are not present in the original PDB file.\nMODEL        1\n${qPDB.join(\'\\n\')}\nENDMDL\nMODEL        2\n${tPDB.join(\'\\n\')}\nENDMDL\nEND\n`\n            } else {\n                result =\n`TITLE     ${title.join(" ")}\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms were re-generated by PULCHRA.\nMODEL        1\n${tPDB.join(\'\\n\')}\nENDMDL\nEND\n`\n            }\n            download(new Blob([result], { type: \'text/plain\' }), (title.join("_") + ".pdb"));\n        }\n    },\n    watch: {\n        \'showArrows\': function(val, _) {\n            if (!this.stage) return\n            this.stage.getComponentsByName("arrows").forEach(comp => { comp.setVisibility(val) });\n        },\n        \'showQuery\': function() {\n            if (!this.stage) return;\n            this.setQuerySelection();\n        },\n        \'showTarget\': function(val, _) {\n            if (!this.stage) return;\n            this.setTargetSelection();\n        },\n        \'highlights\': function(values) {\n            if (!this.stage || !values) return;\n            let selections = []\n            values.forEach((value, i) => {\n                if (!value) return;\n                let [start, length] = value;\n                selections.push([i, start, length]);\n            })\n            this.setSelectionData(selections)\n        }\n    },\n    computed: {\n        querySele: function() {\n            if (this.alignments.length === 0 || this.showQuery == 2)\n                return \'\';\n            if (this.showQuery === 0)\n                return this.alignments.map(a => `${a.qStartPos}-${a.qEndPos}:${getChainName(a.query)}`).join(" or ");\n            if (this.showQuery === 1)\n                return this.alignments.map(a => `:${getChainName(a.query)}`).join(" or ");\n        },\n        targetSele: function() {\n            if (this.alignments.length === 0 || this.showTarget == 2)\n                return \'\';\n            if (this.showTarget === 0)\n                return this.alignments.map(a => `${a.dbStartPos}-${a.dbEndPos}:${getChainName(a.target)}`).join(" or ");\n            if (this.showTarget === 1)\n                return this.alignments.map(a => `:${getChainName(a.target)}`).join(" or ");\n        },\n        tmPanelBindings: function() {\n            return (this.isFullscreen) ? { \'style\': \'margin-top: 10px; font-size: 2em; line-height: 2em\' } : {  }\n        },\n    },\n    async mounted() {\n        if (typeof(this.alignments[0].tCa) == "undefined")\n            return;\n\n        // Download from server --\x3e full input PDB from /result/query endpoint, saved with JSON.stringify\n        //                local --\x3e qCa string\n        // Tickets prefixed with \'user-\' only occur on user uploaded files\n        let queryPdb = "";\n        this.hasQuery = true;\n        if (this.$LOCAL) {\n            if (this.hits.queries[0].hasOwnProperty(\'pdb\')) {\n                queryPdb = JSON.parse(this.hits.queries[0].pdb);\n            } else {\n                queryPdb = mockPDB(this.hits.queries[0].qCa, this.hits.queries[0].sequence, \'A\');\n            }\n        } else if (this.$route.params.ticket.startsWith(\'user-\')) {\n            // Check for special \'user\' ticket for when users have uploaded JSON\n            if (this.hits.queries[0].hasOwnProperty(\'pdb\')) {\n                queryPdb = JSON.parse(this.hits.queries[0].pdb);\n            } else {\n                const localData = this.$root.userData[this.$route.params.entry];\n                queryPdb = mockPDB(localData.queries[0].qCa, localData.queries[0].sequence, \'A\');\n            }\n        } else {\n            try {\n                const request = await this.$axios.get("api/result/" + this.$route.params.ticket + \'/query\');\n                queryPdb = request.data;\n            } catch (e) {\n                queryPdb = "";\n                this.hasQuery = false;\n            }\n        }\n\n        // Run PULCHRA per chain then concatenate Structure objects in first StructureComponent\n        const targets = [];\n        const selections_t = [];\n        let renumber = 0;\n        let lastIdx = null;\n        let remoteData = null;\n        let i = 0;\n        for (let alignment of this.alignments) {\n            const chain = getChainName(alignment.target);\n            let tSeq = alignment.tSeq;\n            let tCa = alignment.tCa;\n            if (Number.isInteger(alignment.tCa) && Number.isInteger(alignment.tSeq)) {\n                const db = alignment.db;\n                const idx = alignment.tCa;\n                if (idx != lastIdx) {\n                    const ticket =  this.$route.params.ticket;\n                    const response = await this.$axios.get("api/result/" + ticket + \'/\' + this.$route.params.entry + \'?format=brief&index=\' + idx + \'&database=\' + db);\n                    remoteData = response.data;\n                    lastIdx = idx;\n                }\n                tSeq = remoteData[i].tSeq;\n                tCa = remoteData[i].tCa;\n                i++;\n            }\n            const mock = mockPDB(tCa, tSeq, chain);\n            const pdb = await pulchra(mock);\n            const component = await this.stage.loadFile(new Blob([pdb], { type: \'text/plain\' }), {ext: \'pdb\', firstModelOnly: true});\n            component.structure.eachChain(c => { c.chainname = chain; });\n            component.structure.eachAtom(a => { a.serial = renumber++; });\n            targets.push(component);\n            selections_t.push(`${alignment.dbStartPos}-${alignment.dbEndPos}:${chain}`);\n        }\n        const structure = concatStructures(getAccession(this.alignments[0].target), ...targets.map(t => t.structure));\n        const target = this.stage.addComponentFromObject(structure, { name: "targetStructure" });\n        \n        target.addRepresentation(\'tube\', {\n            color: 0x11FFEE,\n            side: \'front\',\n            opacity: 0.5,\n            radius: 0.8,\n            visible: false,\n            name: \'targetHighlight\'\n        });\n\n        if (ColormakerRegistry.hasScheme("_targetScheme")) {\n            ColormakerRegistry.removeScheme("_targetScheme")\n        }\n        this.targetSchemeId = ColormakerRegistry.addSelectionScheme([\n            [this.targetAlignedColor, selections_t.join(" or ")],\n            [this.targetUnalignedColor, "*"]\n        ], "_targetScheme")\n\n        if (this.hasQuery) {\n            let data = \'\';\n            let ext = \'pdb\';\n            queryPdb = queryPdb.trimStart();\n            if (queryPdb[0] == "#" || queryPdb.startsWith("data_")) {\n                ext = \'cif\';\n                // NGL doesn\'t like AF3\'s _chem_comp entries\n                queryPdb = queryPdb.replaceAll("_chem_comp.", "_chem_comp_SKIP_HACK.");\n            } else {\n                for (let line of queryPdb.split(\'\\n\')) {\n                    let numCols = Math.max(0, 80 - line.length);\n                    let newLine = line + \' \'.repeat(numCols) + \'\\n\';\n                    data += newLine\n                }\n                queryPdb = data;\n            }\n\n            let query = await this.stage.loadFile(new Blob([queryPdb], { type: \'text/plain\' }), { ext: ext, firstModelOnly: true, name: \'queryStructure\'});\n            if (query && query.structure.getAtomProxy().isCg()) {\n                if (ext == "cif") {\n                    // FIXME: pulchra probably should learn mmCIF\n                    queryPdb = getPdbText(query);\n                }\n                queryPdb = await pulchra(queryPdb);\n                this.stage.removeComponent(query);\n                query = await this.stage.loadFile(new Blob([queryPdb], { type: \'text/plain\' }), {ext: \'pdb\', firstModelOnly: true, name: \'queryStructure\'}); \n            }\n\n            // Map 1-based indices to residue index/resno; only need for query structure\n            // Use queryChainSele to make all selections based on actual query chain\n            const selections_q = [];\n            for (let alignment of this.alignments) {\n                const chain = getChainName(alignment.query);\n\n                selections_q.push(`${alignment.qStartPos}-${alignment.qEndPos} and :${chain}`);\n\n                // Renumber to avoid residue gaps\n                let renumber = 1;\n                query.structure.eachResidue(function(rp) {\n                    rp.resno = renumber++;\n                }, new Selection(`:${chain}`))\n            }\n            if (ColormakerRegistry.hasScheme("_queryScheme")) {\n                ColormakerRegistry.removeScheme("_queryScheme")\n            }\n            this.querySchemeId = ColormakerRegistry.addSelectionScheme([\n                [this.queryAlignedColor, selections_q.join(" or ")],\n                [this.queryUnalignedColor, "*"],\n            ], "_queryScheme")\n\n            // Re-align target to query using TM-align for better superposition\n            // Target 1st since TM-align generates superposition matrix for 1st structure\n            if (this.alignments[0].hasOwnProperty("complexu") && this.alignments[0].hasOwnProperty("complext")) {\n                const t = this.alignments[0].complext.split(\',\').map(x => parseFloat(x));\n                let u = this.alignments[0].complexu.split(\',\').map(x => parseFloat(x));\n                u = [\n                    [u[0], u[1], u[2]],\n                    [u[3], u[4], u[5]],\n                    [u[6], u[7], u[8]],\n                ];\n                // Can\'t use setTransform since we need the actual transformed coordinates for arrows\n                transformStructure(target.structure, t, u);\n                query.addRepresentation(this.qRepr, { color: this.querySchemeId, smoothSheet: true, name: "queryStructure"});\n                target.addRepresentation(this.tRepr, { color: this.targetSchemeId, smoothSheet: true, name: "targetStructure" });\n\n                // Make three separate surface representations based on query toggle state:\n                //   0: Aligned regions of aligned chains\n                //   1: Unaligned regions of aligned chains (shown with 0)\n                //   2: Full structure (all chains; shown with 0 and 1)\n                // Then toggle visibility when showQuery is changed by the user.\n                const surfaceSele0 = [];\n                const surfaceSele1 = [];\n                const surfaceSele2 = [];\n                for (let alignment of this.alignments) {\n                    let chain = getChainName(alignment.query);\n                    surfaceSele0.push(`${alignment.qStartPos}-${alignment.qEndPos}:${chain}`);\n                    surfaceSele1.push(`(not ${alignment.qStartPos}-${alignment.qEndPos} and :${chain})`);\n                    surfaceSele2.push(`:${chain}`);\n                }\n                const surfaceParams = {\n                    color: colorblindColors,\n                    opacity: 0.1,\n                    opaqueBack: false,\n                    useWorker: false\n                }\n                query.addRepresentation("surface", { sele: surfaceSele0.join(" or "), name: "querySurface-0", ...surfaceParams });\n                query.addRepresentation("surface", { sele: surfaceSele1.join(" or "), name: "querySurface-1", visible: false, ...surfaceParams });\n                query.addRepresentation("surface", { sele: `not (${surfaceSele2.join(" or ")})`, name: "querySurface-2", visible: false, ...surfaceParams });\n            } else {\n                // Generate subsetted PDBs for TM-align\n                let qSubPdb = makeSubPDB(query.structure, this.querySele);\n                let tSubPdb = makeSubPDB(target.structure, this.targetSele);\n                let alnFasta = `>target\\n${this.alignments[0].dbAln}\\n\\n>query\\n${this.alignments[0].qAln}`\n                const tm = await tmalign(tSubPdb, qSubPdb, alnFasta);\n                this.tmAlignResults = parseTMOutput(tm.output)\n                let { t, u } = parseTMMatrix(tm.matrix)\n                transformStructure(target.structure, t, u)\n                query.addRepresentation(this.qRepr, {color: this.querySchemeId, name: "queryStructure"});\n                target.addRepresentation(this.tRepr, {color: this.targetSchemeId, name: "targetStructure"});\n            }\n            await this.drawArrows(query.structure, target.structure)\n            this.setQuerySelection();\n            this.setTargetSelection();\n            query.autoView(this.querySele, this.autoViewTime)\n        } else {\n            target.addRepresentation(this.tRepr, {color: this.targetSchemeId, name: "targetStructure"})\n            this.setTargetSelection();\n            this.stage.autoView(this.autoViewTime)\n        }\n        \n    },\n}\n<\/script>\n\n<style scoped>\n.structure-wrapper {\n    width: 500px;\n    height: 400px;\n    margin: 0 auto;\n}\n</style>\n\n<style>\n.theme--dark .structure-wrapper .v-tooltip__content {\n    background: rgba(97, 97, 97, 0.3);\n}\n/* @media only screen and (max-width: 600px) {\n    .structure-wrapper {\n        width: 300px;\n    }\n} */\n.structure-viewer {\n    width: 100%;\n    height: 100%;\n}\n.structure-viewer canvas {\n    border-radius: 2px;\n}\n.structure-panel {\n    position: relative;\n}\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n.tmscore-panel {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    font-family: monospace;\n    color: rgb(31, 119, 180);\n}\n.left-cell {\n    text-align: right;\n    width: 50%;\n}\n.right-cell {\n    text-align: left;\n    width: 50%;\n    padding-left: 0.3em;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        6732: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\n.theme--dark .structure-wrapper .v-tooltip__content {\n    background: rgba(97, 97, 97, 0.3);\n}\n/* @media only screen and (max-width: 600px) {\n    .structure-wrapper {\n        width: 300px;\n    }\n} */\n.structure-viewer {\n    width: 100%;\n    height: 100%;\n}\n.structure-viewer canvas {\n    border-radius: 2px;\n}\n.structure-panel {\n    position: relative;\n}\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n.tmscore-panel {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    font-family: monospace;\n    color: rgb(31, 119, 180);\n}\n.left-cell {\n    text-align: right;\n    width: 50%;\n}\n.right-cell {\n    text-align: left;\n    width: 50%;\n    padding-left: 0.3em;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/StructureViewer.vue" ],
                names: [],
                mappings: ";AA6jBA;IACA,iCAAA;AACA;AACA;;;;GAIA;AACA;IACA,WAAA;IACA,YAAA;AACA;AACA;IACA,kBAAA;AACA;AACA;IACA,kBAAA;AACA;AACA;IACA,oBAAA;IACA,mBAAA;IACA,kBAAA;IACA,uBAAA;IACA,WAAA;IACA,SAAA;IACA,UAAA;IACA,OAAA;AACA;AACA;IACA,kBAAA;IACA,WAAA;IACA,MAAA;IACA,OAAA;IACA,UAAA;IACA,sBAAA;IACA,wBAAA;AACA;AACA;IACA,iBAAA;IACA,UAAA;AACA;AACA;IACA,gBAAA;IACA,UAAA;IACA,mBAAA;AACA",
                sourcesContent: [ '<template>\n<div class="structure-panel" v-if="alignments.length > 0 && \'tCa\' in alignments[0]">\n    <StructureViewerTooltip attach=".structure-panel" />\n    <div class="structure-wrapper" ref="structurepanel">\n        <table v-if="tmAlignResults" class="tmscore-panel" v-bind="tmPanelBindings">\n            <tr>\n                <td class="left-cell">TM-Score:</td>\n                <td class="right-cell">{{ tmAlignResults.tmScore }}</td>\n            </tr>\n            <tr>\n                <td class="left-cell">RMSD:</td>\n                <td class="right-cell">{{ tmAlignResults.rmsd  }}</td>\n            </tr>\n        </table>\n        <StructureViewerToolbar\n            :isFullscreen="isFullscreen"\n            :isSpinning="isSpinning"\n            :showQuery="showQuery"\n            :showTarget="showTarget"\n            :showArrows="showArrows"\n            :disableQueryButton="!hasQuery"\n            :disableArrowButton="!hasQuery"\n            @makeImage="handleMakeImage"\n            @makePDB="handleMakePDB"\n            @resetView="handleResetView"\n            @toggleFullscreen="handleToggleFullscreen"\n            @toggleTarget="handleToggleTarget"\n            @toggleQuery="handleToggleQuery"\n            @toggleArrows="handleToggleArrows"\n            @toggleSpin="handleToggleSpin"\n        />\n        <div class="structure-viewer" ref="viewport"></div>\n    </div>\n</div>\n</template>\n\n<script>\nimport StructureViewerTooltip from \'./StructureViewerTooltip.vue\';\nimport StructureViewerToolbar from \'./StructureViewerToolbar.vue\';\nimport StructureViewerMixin from \'./StructureViewerMixin.vue\';\nimport { mockPDB, makeSubPDB, transformStructure, makeMatrix4  } from \'./Utilities.js\';\nimport { pulchra } from \'pulchra-wasm\';\nimport { tmalign, parse as parseTMOutput, parseMatrix as parseTMMatrix } from \'tmalign-wasm\';\n\nimport Panel from \'./Panel.vue\';\nimport { Shape, Selection, download, ColormakerRegistry, PdbWriter, Color, concatStructures, StructureComponent } from \'ngl\';\n\n// Create NGL arrows from array of ([X, Y, Z], [X, Y, Z]) pairs\n// Get XYZ coordinates of CA of a given residue\nconst xyz = (structure, resIndex) => {\n    var rp = structure.getResidueProxy();\n    var ap = structure.getAtomProxy();\n    rp.index = resIndex;\n    ap.index = rp.getAtomIndexByName(\'CA\');\n    return [ap.x, ap.y, ap.z];\n}\n\n// Save indices of matching columns in an alignment\nconst getMatchingColumns = (alignment) => {\n    let cols_q = [];\n    let cols_t = [];\n    let id_q = alignment.qStartPos;\n    let id_t = alignment.dbStartPos;\n    for (let i = 0; i < alignment.qAln.length; i++) {\n        if (alignment.qAln[i] === \'-\' || alignment.dbAln[i] === \'-\') {\n            if (alignment.qAln[i] === \'-\') id_t++;\n            else id_q++;\n        } else {\n            cols_q.push(id_q);\n            cols_t.push(id_t);\n            id_q++;\n            id_t++;\n        }\n    }\n    return [cols_q, cols_t]\n}\n\n// Get chain from structure name like Structure_A\nconst getChainName = (name) => {\n    // HACK FIXME fix AF chain names\n    if (/_v[0-9]+$/.test(name)) {\n        return \'A\';\n    }\n    let pos = name.lastIndexOf(\'_\');\n    if (pos != -1) {\n        let match = name.substring(pos + 1);\n        return match.length >= 1 ? match[0] : \'A\';\n    }\n    // fallback\n    return \'A\';\n}\n\nconst getAccession = (name) => {\n    // HACK FIXME fix AF chain names\n    if (/_v[0-9]+$/.test(name)) {\n        return name;\n    }\n    let pos = name.lastIndexOf(\'_\');\n    return pos != -1 ? name.substring(0, pos) : name;\n}\n\n// Get coordinates of all atoms found in given selection\n// skip consecutive res indices as they are most likely alternative locations\n// foldseek always chooses the first alt locations, so we mimic this behavior\nconst getAtomXYZ = (structure, sele) => {\n    const xyz = [];\n    let lastResidueIndex = -1;\n\n    structure.eachAtom(ap => {\n        if (ap.resno !== lastResidueIndex) {\n            xyz.push([ap.x, ap.y, ap.z]);\n            lastResidueIndex = ap.resno;\n        }\n    }, sele); \n\n    return xyz;\n}\n\nconst colorblindColors = ColormakerRegistry.addScheme(function() {\n    let colors = [0x991999, 0x00BFBF, 0xE9967A, 0x009E73, 0xF0E442, 0x0072B2, 0xD55E00, 0xCC79A7];\n    this.atomColor = function(atom) {\n        return colors[atom.chainIndex % colors.length];\n    }\n}, "colorblindColors")\n\nconst getPdbText = comp => {\n    let pw = new PdbWriter(comp.structure, { renumberSerial: false });\n    return pw.getData().split(\'\\n\').filter(line => line.startsWith(\'ATOM\')).join(\'\\n\');\n}\n\nexport default {\n    name: "StructureViewer",\n    components: {\n        Panel,\n        StructureViewerTooltip,\n        StructureViewerToolbar,\n    },\n    mixins: [\n        StructureViewerMixin,\n    ],\n    data() {\n        return {\n            selection: null,\n            showArrows: false,\n            showQuery: 0,\n            showTarget: 0,\n            tmAlignResults: null,\n            hasQuery: true,\n        }\n    },\n    props: {\n        alignments: { type: Array },\n        highlights: { type: Array },\n        queryFile: { type: String },\n        queryAlignedColor: { type: String, default: "#1E88E5" },\n        queryUnalignedColor: { type: String, default: "#A5CFF5" },\n        targetAlignedColor: { type: String, default: "#FFC107" },\n        targetUnalignedColor: { type: String, default: "#FFE699" },\n        qRepr: { type: String, default: "cartoon" },\n        tRepr: { type: String, default: "cartoon" },\n        hits: { type: Object },\n        autoViewTime: { type: Number, default: 100 }\n    },\n    methods: {\n        // Create arrows connecting CA coordinates for query/target in match columns\n        async drawArrows(str1, str2) {\n            const shape = new Shape(\'arrows\');\n            await Promise.all(this.alignments.map(async (alignment) => {\n                const chain_q = getChainName(alignment.query);\n                const chain_t = getChainName(alignment.target);\n                const [sele_q, sele_t] = getMatchingColumns(alignment).map(arr => arr.join(" or "));\n\n                const str1_xyz = getAtomXYZ(str1, new Selection(`(${sele_q}) and :${chain_q}.CA`));\n                const str2_xyz = getAtomXYZ(str2, new Selection(`(${sele_t}) and :${chain_t}.CA`));\n\n                if (str1_xyz.length != str2_xyz.length) {\n                    console.warn("Different number of CA atoms in query and target", str1_xyz.length, str2_xyz.length);\n                }\n                for (let i = 0; i < Math.min(str1_xyz.length, str2_xyz.length); i++) {\n                    shape.addArrow(str1_xyz[i], str2_xyz[i], [0, 1, 1], 0.4);\n                }\n            }));\n            let component = this.stage.addComponentFromObject(shape);\n            component.addRepresentation(\'buffer\');\n            component.setVisibility(this.showArrows);\n        },\n        handleToggleArrows() {\n            if (!this.stage) return;\n            this.showArrows = !this.showArrows;\n        },\n        handleToggleQuery() {\n            if (!this.stage) return;\n            if (__LOCAL__) {\n                this.showQuery = (this.showQuery === 0) ? 1 : 0;\n            } else {\n                this.showQuery = (this.showQuery === 2) ? 0 : this.showQuery + 1;\n            }\n        },\n        handleResetView() {\n            if (!this.stage) return;\n            this.setQuerySelection();\n        },\n        handleToggleTarget() {\n            if (!this.stage) return;\n            if (__LOCAL__) {\n                this.showTarget = (this.showTarget === 0) ? 1 : 0;\n            } else {\n                this.showTarget = (this.showTarget === 2) ? 0 : this.showTarget + 1; \n            }\n        },\n        clearSelection() {\n            if (!this.alignments || !this.stage) return;\n            let repr = this.stage.getRepresentationsByName("targetHighlight");\n            repr.setSelection()\n            repr.setVisibility(false)\n        },\n        setSelectionData(selection) {\n            // FIXME tube/cartoon representation cannot visualise <3 residues\n            //       https://github.com/nglviewer/ngl/issues/759\n            //       use licorice representation for this case? or just +1 to make 3\n            if (!this.alignments || !this.stage) return;\n            let repr = this.stage.getRepresentationsByName("targetHighlight");\n            repr.setSelection()\n            if (selection.length === 0) {\n                repr.setVisibility(false);\n                return;\n            }\n            let seles = [];\n            for (let [i, start, length] of selection) {\n                let chain = getChainName(this.alignments[i].target);\n                let end = start + length;\n                seles.push(`${start}-${end}:${chain}`);\n            } \n            let sele = seles.join(" or ");\n            repr.setSelection(sele);\n            repr.setVisibility(true);\n        },\n        setQuerySelection() {\n            let repr = this.stage.getRepresentationsByName("queryStructure");\n            if (!repr) return;\n            let sele = this.querySele;\n            repr.setSelection(sele);\n            repr.list[0].parent.autoView(sele, this.autoViewTime);\n            if (this.showQuery === 0) {\n                this.stage.getRepresentationsByName("querySurface-1").setVisibility(false);\n                this.stage.getRepresentationsByName("querySurface-2").setVisibility(false);\n            } else if (this.showQuery === 1) {\n                this.stage.getRepresentationsByName("querySurface-1").setVisibility(true);\n                this.stage.getRepresentationsByName("querySurface-2").setVisibility(false);\n            } else {\n                this.stage.getRepresentationsByName("querySurface-1").setVisibility(true);\n                this.stage.getRepresentationsByName("querySurface-2").setVisibility(true);\n            }\n        },\n        setTargetSelection() {\n            let repr = this.stage.getRepresentationsByName("targetStructure");\n            if (!repr) return;\n            let sele = this.targetSele;\n            repr.setSelection(sele);\n        },\n        async handleMakeImage() {\n            if (!this.stage)\n                return;\n            let wasSpinning = this.isSpinning;\n            this.isSpinning = false;\n            let title = this.alignments.map(aln => this.hasQuery ? `${aln.query}-${aln.target}` : aln.target).join("_");\n            this.stage.viewer.setLight(undefined, undefined, undefined, 0.2)\n            const blob = await this.stage.makeImage({\n                trim: true,\n                factor: (this.isFullscreen) ? 1 : 8,\n                antialias: true,\n                transparent: true,\n            });\n            this.stage.viewer.setLight(undefined, undefined, undefined, this.$vuetify.theme.dark ? 0.4 : 0.2)\n            download(blob, `${title}.png`)\n            this.isSpinning = wasSpinning;\n        },\n        handleMakePDB() {\n            if (!this.stage)\n                return;\n            let qPDB = this.stage.getComponentsByName("queryStructure").list.map(getPdbText); \n            let tPDB = this.stage.getComponentsByName("targetStructure").list.map(getPdbText);\n            if (!qPDB && !tPDB) \n                return;\n            let title = this.alignments.map(aln => qPDB ? `${aln.query}-${aln.target}` : aln.target);\n            let result = null;\n            if (qPDB && tPDB) {\n                result =\n`TITLE     ${title.join(" ")}\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms might have been re-generated by PULCHRA,\nREMARK              if they are not present in the original PDB file.\nMODEL        1\n${qPDB.join(\'\\n\')}\nENDMDL\nMODEL        2\n${tPDB.join(\'\\n\')}\nENDMDL\nEND\n`\n            } else {\n                result =\n`TITLE     ${title.join(" ")}\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms were re-generated by PULCHRA.\nMODEL        1\n${tPDB.join(\'\\n\')}\nENDMDL\nEND\n`\n            }\n            download(new Blob([result], { type: \'text/plain\' }), (title.join("_") + ".pdb"));\n        }\n    },\n    watch: {\n        \'showArrows\': function(val, _) {\n            if (!this.stage) return\n            this.stage.getComponentsByName("arrows").forEach(comp => { comp.setVisibility(val) });\n        },\n        \'showQuery\': function() {\n            if (!this.stage) return;\n            this.setQuerySelection();\n        },\n        \'showTarget\': function(val, _) {\n            if (!this.stage) return;\n            this.setTargetSelection();\n        },\n        \'highlights\': function(values) {\n            if (!this.stage || !values) return;\n            let selections = []\n            values.forEach((value, i) => {\n                if (!value) return;\n                let [start, length] = value;\n                selections.push([i, start, length]);\n            })\n            this.setSelectionData(selections)\n        }\n    },\n    computed: {\n        querySele: function() {\n            if (this.alignments.length === 0 || this.showQuery == 2)\n                return \'\';\n            if (this.showQuery === 0)\n                return this.alignments.map(a => `${a.qStartPos}-${a.qEndPos}:${getChainName(a.query)}`).join(" or ");\n            if (this.showQuery === 1)\n                return this.alignments.map(a => `:${getChainName(a.query)}`).join(" or ");\n        },\n        targetSele: function() {\n            if (this.alignments.length === 0 || this.showTarget == 2)\n                return \'\';\n            if (this.showTarget === 0)\n                return this.alignments.map(a => `${a.dbStartPos}-${a.dbEndPos}:${getChainName(a.target)}`).join(" or ");\n            if (this.showTarget === 1)\n                return this.alignments.map(a => `:${getChainName(a.target)}`).join(" or ");\n        },\n        tmPanelBindings: function() {\n            return (this.isFullscreen) ? { \'style\': \'margin-top: 10px; font-size: 2em; line-height: 2em\' } : {  }\n        },\n    },\n    async mounted() {\n        if (typeof(this.alignments[0].tCa) == "undefined")\n            return;\n\n        // Download from server --\x3e full input PDB from /result/query endpoint, saved with JSON.stringify\n        //                local --\x3e qCa string\n        // Tickets prefixed with \'user-\' only occur on user uploaded files\n        let queryPdb = "";\n        this.hasQuery = true;\n        if (this.$LOCAL) {\n            if (this.hits.queries[0].hasOwnProperty(\'pdb\')) {\n                queryPdb = JSON.parse(this.hits.queries[0].pdb);\n            } else {\n                queryPdb = mockPDB(this.hits.queries[0].qCa, this.hits.queries[0].sequence, \'A\');\n            }\n        } else if (this.$route.params.ticket.startsWith(\'user-\')) {\n            // Check for special \'user\' ticket for when users have uploaded JSON\n            if (this.hits.queries[0].hasOwnProperty(\'pdb\')) {\n                queryPdb = JSON.parse(this.hits.queries[0].pdb);\n            } else {\n                const localData = this.$root.userData[this.$route.params.entry];\n                queryPdb = mockPDB(localData.queries[0].qCa, localData.queries[0].sequence, \'A\');\n            }\n        } else {\n            try {\n                const request = await this.$axios.get("api/result/" + this.$route.params.ticket + \'/query\');\n                queryPdb = request.data;\n            } catch (e) {\n                queryPdb = "";\n                this.hasQuery = false;\n            }\n        }\n\n        // Run PULCHRA per chain then concatenate Structure objects in first StructureComponent\n        const targets = [];\n        const selections_t = [];\n        let renumber = 0;\n        let lastIdx = null;\n        let remoteData = null;\n        let i = 0;\n        for (let alignment of this.alignments) {\n            const chain = getChainName(alignment.target);\n            let tSeq = alignment.tSeq;\n            let tCa = alignment.tCa;\n            if (Number.isInteger(alignment.tCa) && Number.isInteger(alignment.tSeq)) {\n                const db = alignment.db;\n                const idx = alignment.tCa;\n                if (idx != lastIdx) {\n                    const ticket =  this.$route.params.ticket;\n                    const response = await this.$axios.get("api/result/" + ticket + \'/\' + this.$route.params.entry + \'?format=brief&index=\' + idx + \'&database=\' + db);\n                    remoteData = response.data;\n                    lastIdx = idx;\n                }\n                tSeq = remoteData[i].tSeq;\n                tCa = remoteData[i].tCa;\n                i++;\n            }\n            const mock = mockPDB(tCa, tSeq, chain);\n            const pdb = await pulchra(mock);\n            const component = await this.stage.loadFile(new Blob([pdb], { type: \'text/plain\' }), {ext: \'pdb\', firstModelOnly: true});\n            component.structure.eachChain(c => { c.chainname = chain; });\n            component.structure.eachAtom(a => { a.serial = renumber++; });\n            targets.push(component);\n            selections_t.push(`${alignment.dbStartPos}-${alignment.dbEndPos}:${chain}`);\n        }\n        const structure = concatStructures(getAccession(this.alignments[0].target), ...targets.map(t => t.structure));\n        const target = this.stage.addComponentFromObject(structure, { name: "targetStructure" });\n        \n        target.addRepresentation(\'tube\', {\n            color: 0x11FFEE,\n            side: \'front\',\n            opacity: 0.5,\n            radius: 0.8,\n            visible: false,\n            name: \'targetHighlight\'\n        });\n\n        if (ColormakerRegistry.hasScheme("_targetScheme")) {\n            ColormakerRegistry.removeScheme("_targetScheme")\n        }\n        this.targetSchemeId = ColormakerRegistry.addSelectionScheme([\n            [this.targetAlignedColor, selections_t.join(" or ")],\n            [this.targetUnalignedColor, "*"]\n        ], "_targetScheme")\n\n        if (this.hasQuery) {\n            let data = \'\';\n            let ext = \'pdb\';\n            queryPdb = queryPdb.trimStart();\n            if (queryPdb[0] == "#" || queryPdb.startsWith("data_")) {\n                ext = \'cif\';\n                // NGL doesn\'t like AF3\'s _chem_comp entries\n                queryPdb = queryPdb.replaceAll("_chem_comp.", "_chem_comp_SKIP_HACK.");\n            } else {\n                for (let line of queryPdb.split(\'\\n\')) {\n                    let numCols = Math.max(0, 80 - line.length);\n                    let newLine = line + \' \'.repeat(numCols) + \'\\n\';\n                    data += newLine\n                }\n                queryPdb = data;\n            }\n\n            let query = await this.stage.loadFile(new Blob([queryPdb], { type: \'text/plain\' }), { ext: ext, firstModelOnly: true, name: \'queryStructure\'});\n            if (query && query.structure.getAtomProxy().isCg()) {\n                if (ext == "cif") {\n                    // FIXME: pulchra probably should learn mmCIF\n                    queryPdb = getPdbText(query);\n                }\n                queryPdb = await pulchra(queryPdb);\n                this.stage.removeComponent(query);\n                query = await this.stage.loadFile(new Blob([queryPdb], { type: \'text/plain\' }), {ext: \'pdb\', firstModelOnly: true, name: \'queryStructure\'}); \n            }\n\n            // Map 1-based indices to residue index/resno; only need for query structure\n            // Use queryChainSele to make all selections based on actual query chain\n            const selections_q = [];\n            for (let alignment of this.alignments) {\n                const chain = getChainName(alignment.query);\n\n                selections_q.push(`${alignment.qStartPos}-${alignment.qEndPos} and :${chain}`);\n\n                // Renumber to avoid residue gaps\n                let renumber = 1;\n                query.structure.eachResidue(function(rp) {\n                    rp.resno = renumber++;\n                }, new Selection(`:${chain}`))\n            }\n            if (ColormakerRegistry.hasScheme("_queryScheme")) {\n                ColormakerRegistry.removeScheme("_queryScheme")\n            }\n            this.querySchemeId = ColormakerRegistry.addSelectionScheme([\n                [this.queryAlignedColor, selections_q.join(" or ")],\n                [this.queryUnalignedColor, "*"],\n            ], "_queryScheme")\n\n            // Re-align target to query using TM-align for better superposition\n            // Target 1st since TM-align generates superposition matrix for 1st structure\n            if (this.alignments[0].hasOwnProperty("complexu") && this.alignments[0].hasOwnProperty("complext")) {\n                const t = this.alignments[0].complext.split(\',\').map(x => parseFloat(x));\n                let u = this.alignments[0].complexu.split(\',\').map(x => parseFloat(x));\n                u = [\n                    [u[0], u[1], u[2]],\n                    [u[3], u[4], u[5]],\n                    [u[6], u[7], u[8]],\n                ];\n                // Can\'t use setTransform since we need the actual transformed coordinates for arrows\n                transformStructure(target.structure, t, u);\n                query.addRepresentation(this.qRepr, { color: this.querySchemeId, smoothSheet: true, name: "queryStructure"});\n                target.addRepresentation(this.tRepr, { color: this.targetSchemeId, smoothSheet: true, name: "targetStructure" });\n\n                // Make three separate surface representations based on query toggle state:\n                //   0: Aligned regions of aligned chains\n                //   1: Unaligned regions of aligned chains (shown with 0)\n                //   2: Full structure (all chains; shown with 0 and 1)\n                // Then toggle visibility when showQuery is changed by the user.\n                const surfaceSele0 = [];\n                const surfaceSele1 = [];\n                const surfaceSele2 = [];\n                for (let alignment of this.alignments) {\n                    let chain = getChainName(alignment.query);\n                    surfaceSele0.push(`${alignment.qStartPos}-${alignment.qEndPos}:${chain}`);\n                    surfaceSele1.push(`(not ${alignment.qStartPos}-${alignment.qEndPos} and :${chain})`);\n                    surfaceSele2.push(`:${chain}`);\n                }\n                const surfaceParams = {\n                    color: colorblindColors,\n                    opacity: 0.1,\n                    opaqueBack: false,\n                    useWorker: false\n                }\n                query.addRepresentation("surface", { sele: surfaceSele0.join(" or "), name: "querySurface-0", ...surfaceParams });\n                query.addRepresentation("surface", { sele: surfaceSele1.join(" or "), name: "querySurface-1", visible: false, ...surfaceParams });\n                query.addRepresentation("surface", { sele: `not (${surfaceSele2.join(" or ")})`, name: "querySurface-2", visible: false, ...surfaceParams });\n            } else {\n                // Generate subsetted PDBs for TM-align\n                let qSubPdb = makeSubPDB(query.structure, this.querySele);\n                let tSubPdb = makeSubPDB(target.structure, this.targetSele);\n                let alnFasta = `>target\\n${this.alignments[0].dbAln}\\n\\n>query\\n${this.alignments[0].qAln}`\n                const tm = await tmalign(tSubPdb, qSubPdb, alnFasta);\n                this.tmAlignResults = parseTMOutput(tm.output)\n                let { t, u } = parseTMMatrix(tm.matrix)\n                transformStructure(target.structure, t, u)\n                query.addRepresentation(this.qRepr, {color: this.querySchemeId, name: "queryStructure"});\n                target.addRepresentation(this.tRepr, {color: this.targetSchemeId, name: "targetStructure"});\n            }\n            await this.drawArrows(query.structure, target.structure)\n            this.setQuerySelection();\n            this.setTargetSelection();\n            query.autoView(this.querySele, this.autoViewTime)\n        } else {\n            target.addRepresentation(this.tRepr, {color: this.targetSchemeId, name: "targetStructure"})\n            this.setTargetSelection();\n            this.stage.autoView(this.autoViewTime)\n        }\n        \n    },\n}\n<\/script>\n\n<style scoped>\n.structure-wrapper {\n    width: 500px;\n    height: 400px;\n    margin: 0 auto;\n}\n</style>\n\n<style>\n.theme--dark .structure-wrapper .v-tooltip__content {\n    background: rgba(97, 97, 97, 0.3);\n}\n/* @media only screen and (max-width: 600px) {\n    .structure-wrapper {\n        width: 300px;\n    }\n} */\n.structure-viewer {\n    width: 100%;\n    height: 100%;\n}\n.structure-viewer canvas {\n    border-radius: 2px;\n}\n.structure-panel {\n    position: relative;\n}\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n.tmscore-panel {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    font-family: monospace;\n    color: rgb(31, 119, 180);\n}\n.left-cell {\n    text-align: right;\n    width: 50%;\n}\n.right-cell {\n    text-align: left;\n    width: 50%;\n    padding-left: 0.3em;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        8786: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\n.structure-panel[data-v-06a02575] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n.structure-viewer[data-v-06a02575] {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/StructureViewerMSA.vue" ],
                names: [],
                mappings: ";AA0dA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;AACA;AACA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;IACA,SAAA;IACA,OAAA;IACA,QAAA;IACA,MAAA;IACA,SAAA;IACA,UAAA;IACA,gBAAA;AACA",
                sourcesContent: [ '<template>\n<div class="structure-panel">\n    <StructureViewerTooltip attach=".structure-panel" />\n    <div class="structure-wrapper" ref="structurepanel">\n        <StructureViewerToolbar\n            :isFullscreen="isFullscreen"\n            :isSpinning="isSpinning"\n            @makeImage="handleMakeImage"\n            @makePDB="handleMakePDB"\n            @resetView="handleResetView"\n            @toggleFullscreen="handleToggleFullscreen"\n            @toggleSpin="handleToggleSpin"\n            disableArrowButton\n            disableQueryButton\n            disableTargetButton\n            style="position: absolute; bottom: 8px;"\n        />\n        <div class="structure-viewer" ref="viewport"></div>\n    </div>\n</div>\n</template>\n\n<script>\nimport StructureViewerTooltip from \'./StructureViewerTooltip.vue\';\nimport StructureViewerToolbar from \'./StructureViewerToolbar.vue\';\nimport StructureViewerMixin from \'./StructureViewerMixin.vue\';\nimport { tmalign, parse as parseTMOutput, parseMatrix as parseTMMatrix } from \'tmalign-wasm\';\nimport { mockPDB, makeSubPDB, makeMatrix4, interpolateMatrices, animateMatrix  } from \'./Utilities.js\';\nimport { download, PdbWriter, Matrix4, Quaternion, Vector3, concatStructures, ColormakerRegistry } from \'ngl\';\nimport { pulchra } from \'pulchra-wasm\';\n\n// Mock alignment object from two (MSA-derived) aligned strings\nfunction mockAlignment(one, two) {\n    let res = { backtrace: "", qAln: "", dbAln: "" };\n    let started = false; // flag for first Match column in backtrace\n    let m = 0;           // index in msa\n    let qr = 0;          // index in seq\n    let tr = 0;\n    let qBuffer = "";\n    let tBuffer = "";\n    while (m < one.length) {\n        const qc = one[m];\n        const tc = two[m];\n        if (qc === \'-\' && tc === \'-\') {\n            // Skip gap columns\n        } else if (qc === \'-\') {\n            if (started) {\n                res.backtrace += \'D\';               \n                qBuffer += qc;\n                tBuffer += tc;\n            }\n            ++tr;\n        } else if (tc === \'-\') {\n            if (started) {\n                res.backtrace += \'I\';\n                qBuffer += qc;\n                tBuffer += tc;\n            }\n            ++qr;\n        } else {\n            if (started) {\n                res.qAln += qBuffer;\n                res.dbAln += tBuffer;\n                qBuffer = "";\n                tBuffer = "";\n            } else {\n                started = true;\n                res.qStartPos = qr;\n                res.dbStartPos = tr;\n            }\n            res.backtrace += \'M\';\n            qBuffer += qc;\n            tBuffer += tc;\n            res.qEndPos = qr;\n            res.dbEndPos = tr;\n            ++qr;\n            ++tr;\n        }\n        ++m;\n    }\n    res.qStartPos++;\n    res.dbStartPos++;\n    res.qSeq  = one.replace(/-/g, \'\');\n    res.tSeq  = two.replace(/-/g, \'\');\n    return res;\n}\n\n\nfunction getMaskedPositions(seq, mask) {\n    const result = [];\n    let resno = 0;\n    for (let i = 0; i < seq.length; i++) {\n        if (seq[i] !== \'-\') {\n            if (mask[i] === 0) {\n                result.push(resno);\n            }\n            resno++;\n        }\n    }\n    return result;\n}\n\nfunction getAlignmentPos(seq, residueIndex) {\n    let resno = -1;\n    for (let i = 0; i < seq.length; i++) {\n        if (seq[i] !== \'-\') {\n            resno++;\n        }\n        if (resno == residueIndex) {\n            return i;\n        }\n    }\n    return -1;\n}\n\nfunction getResidueIndex(seq, alignmentPos) {\n    let residueIndex = -1;\n    for (let i = 0; i <= alignmentPos && i < seq.length; i++) {\n        if (seq[i] !== \'-\') {\n            residueIndex++;\n        }\n    }\n    return residueIndex;\n}\n\nexport default {\n    name: "StructureViewerMSA",\n    components: {\n        StructureViewerToolbar,\n        StructureViewerTooltip,\n    },\n    mixins: [\n        StructureViewerMixin,\n    ],\n    data: () => ({\n        structures: [],  // { name, aa, 3di (ss), ca, NGL structure, alignment, map }\n        curReferenceIndex: -1,  // index in ALL sequences, not just visualised subset - used as key,\n        schemeId: null, // NGL colorscheme,\n        selectedColumn: -1,\n    }),\n    props: {\n        entries: { type: Array, required: true },\n        selection: { type: Array, required: true, default: [0, 1] },\n        mask: { type: Array, required: true },\n        reference: { type: Number, required: true },\n        bgColorLight: { type: String, default: "white" },\n        bgColorDark: { type: String, default: "#1E1E1E" },\n        representationStyle: { type: String, default: "cartoon" },\n        referenceStyleParameters: {\n            type: Object,\n            default: () => ({ color: 0x1E88E5, opacity: 1.0 })\n        },\n        regularStyleParameters: {\n            type: Object,\n            default: () => ({ color: 0xFFC107, opacity: 0.5, side: \'front\' })\n        },\n    },\n    mounted() {\n        this.updateEntries(this.selection, []);\n        this.stage.signals.clicked.add((pickingProxy) => {\n            if (!pickingProxy) {\n                this.selectedColumn = -1;\n                this.updateMask()\n                this.$emit(\'columnSelected\', -1);\n                return;\n            }\n\n            let atom = pickingProxy.atom;\n            if (!atom) {\n                this.selectedColumn = -1;\n                this.updateMask()\n                this.$emit(\'columnSelected\', -1);\n                return;\n            }\n            let index = parseInt(atom.structure.name.replace("key-", ""));\n            let alnPos = getAlignmentPos(this.entries[index].aa, atom.residueIndex);\n            // console.log(atom.residueIndex, alnPos);\n            this.selectedColumn = alnPos;\n            this.$emit(\'columnSelected\', alnPos);\n            this.updateMask()\n        });\n    },\n    methods: {\n        resetView() {\n            if (!this.stage) return;\n            if (this.selection.length > 0) {\n                this.getComponentByIndex(this.reference).autoView(this.transitionDuration);\n            } else {\n                this.stage.autoView(this.transitionDuration);\n            }\n        },\n        makePDB() {\n            if (!this.stage) return\n            let PDB;\n            let result = `\\\nTITLE     Superposed structures from Foldmason alignment\nREMARK    This file was generated by the FoldMason webserver:\nREMARK      https://search.foldseek.com/foldmason\nREMARK    Please cite:\nREMARK      https://doi.org/10.1101/2024.08.01.606130\nREMARK    Warning: Non C-alpha atoms may have been re-generated by PULCHRA\nREMARK             if they are not present in the original PDB file.\n`;\n            this.stage.eachComponent(comp => {\n                let clone = concatStructures("clone", comp.structure)\n                let matrix = new Matrix4();\n                matrix.fromArray(comp.transform.elements);\n                clone.eachAtom(ap => {\n                    let position = new Vector3(ap.x, ap.y, ap.z);\n                    position.applyMatrix4(matrix);\n                    ap.x = position.x;\n                    ap.y = position.y;\n                    ap.z = position.z;\n                });\n                PDB = new PdbWriter(clone, { renumberSerial: false }).getData();\n                PDB = PDB.split(\'\\n\').filter(line => line.startsWith("ATOM")).join(\'\\n\');\n                let index = parseInt(comp.structure.name.replace("key-", "")); \n                let name = this.entries[index].name;\n                let remark = `REMARK    Name: ${name}`;\n                if (index !== this.reference) {\n                    const m = matrix.elements.map(e => e.toFixed(6).padStart(12));\n                    remark += `\nREMARK    Rotation matrix (u)\nREMARK    ${m[0]} ${m[4]} ${m[8]}\nREMARK    ${m[1]} ${m[5]} ${m[9]}\nREMARK    ${m[2]} ${m[6]} ${m[10]}\nREMARK    Translation matrix (t)\nREMARK    ${m[12]} ${m[13]} ${m[14]}`;\n                }\n                result += `\\\nMODEL     ${index}\n${remark}\n${PDB}\nENDMDL\n`;\n            }, "structure")\n            result += "END";\n            download(new Blob([result], { type: \'text/plain\' }), "foldmason.pdb")\n        },\n        makeImage() {\n            if (!this.stage) return\n            this.stage.viewer.setLight(undefined, undefined, undefined, 0.2)\n            this.stage.makeImage({\n                trim: true,\n                factor: (this.isFullscreen) ? 1 : 8,\n                antialias: true,\n                transparent: true,\n            }).then((blob) => {\n                this.stage.viewer.setLight(undefined, undefined, undefined, this.$vuetify.theme.dark ? 0.4 : 0.2)\n                download(blob, "foldmason.png")\n            })\n        },\n        getComponentByIndex(index) {\n            if (!this.stage) return;\n            const compList = this.stage.getComponentsByName(`key-${index}`);\n            if (compList.list.length === 0) return -1;\n            return compList.list[0];\n        },\n        async tmAlignToReference(index) {\n            if (index === this.reference) {\n                return;\n            }\n            const refData = this.entries[this.reference];\n            const newData = this.entries[index];\n            const refComp = this.getComponentByIndex(this.reference);\n            const newComp = this.getComponentByIndex(index);\n            const aln = mockAlignment(refData.aa, newData.aa);\n            const fasta = `>target\\n${aln.dbAln}\\n\\n>query\\n${aln.qAln}`;\n            const [queryPDB, targetPDB] = await Promise.all([\n                makeSubPDB(refComp.structure, aln ? `${aln.qStartPos}-${aln.qEndPos}` : \'\'),\n                makeSubPDB(newComp.structure, aln ? `${aln.dbStartPos}-${aln.dbEndPos}` : \'\')\n            ]);\n            if (!__LOCAL__) {\n                const worker = new Worker(new URL("TMAlignWorker.js", import.meta.url));\n                return new Promise((resolve, reject) => {\n                    worker.onmessage = function (e) {\n                        const { t, u, tmResults } = e.data;\n                        resolve({\n                            matrix: makeMatrix4(t, u),\n                            tmResults: tmResults\n                        }); \n                        worker.terminate();\n                    }\n                    worker.onerror = function (e) {\n                        reject(e);\n                        worker.terminate();\n                    }\n                    worker.postMessage({ refPDB: targetPDB, newPDB: queryPDB, alnFasta: fasta });\n                });\n            }\n            const { output, matrix } = await tmalign(targetPDB, queryPDB, fasta);\n            const { t, u }  = parseTMMatrix(matrix);\n            const tmResults = parseTMOutput(output);\n            return Promise.resolve({\n                matrix: makeMatrix4(t, u),\n                tmResults: tmResults,\n                alignment: aln\n            });\n        },\n        async addStructureToStage(index, aa, ca) {\n            const mock = mockPDB(ca, aa.replace(/-/g, \'\'), \'A\');\n            const pdb  = await pulchra(mock);\n            const blob = new Blob([pdb], { type: \'text/plain\' })\n            return this.stage.loadFile(blob, { ext: \'pdb\', firstModelOnly: true, name: `key-${index}` });\n        },\n        async shiftStructure({ structure }, index, shiftValue) {\n            const { x, y, z } = structure.position;\n            const offset = index * shiftValue;\n            structure.setPosition({x: x + offset, y: y + offset, z: z + offset })\n            this.stage.viewer.requestRender()\n        },\n        async explode(shiftValue) {\n            if (!this.stage) return;\n            this.structures.forEach((structure, index) => this.shiftStructure(structure, index, shiftValue));\n            this.stage.autoView();\n        },\n        async updateEntries(newValues, oldValues) {\n            if (!this.stage) {\n                return;\n            }\n\n            // custom color scheme to hightlight gappy columns and reference/targets\n            if (this.schemeId == null) {\n                let that = this;\n                this.schemeId = ColormakerRegistry.addScheme(function(params) {\n                    let index = parseInt(params.structure.name.replace("key-", ""));\n                    let color = that.regularStyleParameters.color;\n                    if (index === that.reference) {\n                        color = that.referenceStyleParameters.color;\n                    }\n                    let residueMask = getMaskedPositions(that.entries[index].aa, that.mask);\n                    let highlightedIndex = getResidueIndex(that.entries[index].aa, that.selectedColumn);\n                    this.atomColor = (atom) => {\n                        if (highlightedIndex == atom.residueIndex) {\n                            return 0x11FFEE;\n                        }\n                        if (residueMask.includes(atom.residueIndex)) {\n                            return 0x666666;\n                        }\n                        return color;\n                    };\n                });\n            }\n\n            // Selections - structures to update/remove/add\n            const newSet = new Set(newValues);\n            const oldSet = new Set(oldValues);\n            \n            if (newSet.size === 0) {\n                this.stage.removeAllComponents();\n                return;\n            }\n\n            const update = [];\n            const remove = [];\n            const add    = [];\n\n            for (const value of oldSet) {\n                if (value === this.reference) continue;\n                if (newSet.has(value)) {\n                    update.push(value);\n                } else {\n                    remove.push(value);\n                }\n            }\n            for (const value of newSet) {\n                if (value === this.reference || oldSet.has(value)) continue;\n                add.push(value);\n            }\n\n            // Changed status of reference\n            const isDiffReference = this.reference !== this.curReferenceIndex;\n            const isNewReference  = !oldSet.has(this.reference);\n            const referenceChanged = isDiffReference || isNewReference;\n\n            this.curReferenceIndex = this.reference;\n\n            // Update the reference\n            // If reference already exists, just change the colour and reset its transform\n            // Otherwise add as new structure to the NGL Stage\n            if (referenceChanged) {\n                let data = this.entries[this.reference];\n                let ref;\n                if (isNewReference) {\n                    ref = await this.addStructureToStage(this.reference, data.aa, data.ca);\n                    ref.addRepresentation(this.representationStyle, {...this.referenceStyleParameters, color: this.schemeId });\n                } else {\n                    ref = this.getComponentByIndex(this.reference);\n                    ref.reprList[0].setVisibility(false);\n                    ref.reprList[0].setParameters({...this.referenceStyleParameters, color: this.schemeId })\n                    ref.setTransform(new Matrix4());\n                    ref.reprList[0].setVisibility(true);\n                }\n                ref.autoView();\n            }\n\n            await Promise.all(\n                add.map(async (idx) => {\n                    const data = this.entries[idx];\n                    const structure = await this.addStructureToStage(idx, data.aa, data.ca);\n                    const { matrix } = await this.tmAlignToReference(idx);\n                    structure.setTransform(matrix);\n                    structure.addRepresentation(this.representationStyle, {...this.regularStyleParameters, color: this.schemeId });\n                })\n            );\n\n            await Promise.all(\n                remove.map(async (idx) => {\n                    const structure = this.getComponentByIndex(idx);\n                    this.stage.removeComponent(structure);\n                })\n            );\n            \n            if (!referenceChanged) {\n                return;\n            }\n\n            await Promise.all(\n                update.map(async (idx) => {\n                    const structure = this.getComponentByIndex(idx); \n                    if (!structure || structure.reprList.length === 0) return;\n                    const [ representation ] = structure.reprList;\n                    representation.setVisibility(false);\n                    const { matrix } = await this.tmAlignToReference(idx);\n                    representation.setParameters(this.regularStyleParameters)\n                    structure.setTransform(matrix);\n                    representation.setVisibility(true);\n                })\n            );\n            this.updateMask();\n        },\n        async updateMask() {\n            this.stage.eachRepresentation((repr) => {\n                repr.build();\n            });\n        },\n    },\n    watch: {\n        \'$vuetify.theme.dark\': function() {\n            this.stage.viewer.setBackground(this.bgColor);\n        },\n        selection: function(newV, oldV) {\n            this.updateEntries(newV, oldV);\n        },\n        mask: function(newM, oldM) {\n            this.updateMask();\n        }\n    },\n    computed: {\n        bgColor() {\n            return this.$vuetify.theme.dark ? this.bgColorDark : this.bgColorLight;\n        },\n        ambientIntensity() {\n            this.$vuetify.theme.dark ? 0.4 : 0.2;\n        },\n        stageParameters: function() {\n            return {\n                log: \'none\',\n                backgroundColor: this.bgColor,\n                transparent: true,\n                ambientIntensity: this.ambientIntensity,\n                clipNear: -1000,\n                clipFar: 1000,\n                fogFar: 1000,\n                fogNear: -1000,\n                quality: \'high\',\n                tooltip: false,\n            }\n        }\n    },\n}\n<\/script>\n\n<style scoped>\n.structure-panel {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n.structure-viewer {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        6237: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/StructureViewerToolbar.vue" ],
                names: [],
                mappings: ";AAsJA;IACA,oBAAA;IACA,mBAAA;IACA,kBAAA;IACA,uBAAA;IACA,WAAA;IACA,SAAA;IACA,UAAA;IACA,OAAA;AACA",
                sourcesContent: [ '<template>\n<div class="toolbar-panel">\n    <v-item-group class="v-btn-toggle" :light="isFullscreen">\n    <v-btn\n        v-if="!disablePDBButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickMakePDB"\n        title="Save PDB"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.SavePDB }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Save PDB</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableImageButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickMakeImage"\n        title="Save image"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.SavePNG }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Save image</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableQueryButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickCycleQuery"\n        title="Toggle between the entire query structure and aligned region"\n    >\n        <v-icon v-bind="toolbarIconProps" style=\'color: #1E88E5;\' v-if="showQuery === 0">{{ ($LOCAL) ? $MDI.CircleHalf : $MDI.CircleOneThird }}</v-icon>\n        <v-icon v-bind="toolbarIconProps" style=\'color: #1E88E5;\' v-else-if="!$LOCAL && showQuery === 1">{{ $MDI.CircleTwoThird }}</v-icon>\n        <v-icon v-bind="toolbarIconProps" style=\'color: #1E88E5;\' v-else>{{ $MDI.Circle }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Toggle full query</span>\n  </v-btn>\n    <v-btn\n        v-if="!disableTargetButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickToggleTarget"\n        title="Toggle between the entire target structure and aligned region"\n    >\n        <v-icon v-bind="toolbarIconProps" style=\'color: #FFC107;\' v-if="showTarget === 0">{{ ($LOCAL) ? $MDI.CircleHalf : $MDI.CircleOneThird }}</v-icon>\n        <v-icon v-bind="toolbarIconProps" style=\'color: #FFC107;\' v-else-if="!$LOCAL && showTarget === 1">{{ $MDI.CircleTwoThird }}</v-icon>\n        <v-icon v-bind="toolbarIconProps" style=\'color: #FFC107;\' v-else>{{ $MDI.Circle }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Toggle full target</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableArrowButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickToggleArrows"\n        title="Draw arrows between aligned residues"\n    >\n        <v-icon v-bind="toolbarIconProps" v-if="showArrows">{{ $MDI.ArrowRightCircle }}</v-icon>\n        <v-icon v-bind="toolbarIconProps" v-else>{{ $MDI.ArrowRightCircleOutline }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Toggle arrows</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableResetButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickResetView"\n        title="Reset the view to the original position and zoom level"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.Restore }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Reset view</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableSpinButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickSpin"\n        :disabled="isSpinning"\n        title="Toggle spinning structure"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.AxisZRotateCounterclockwise }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Toggle spin</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableFullscreenButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickFullscreen"\n        title="Enter fullscreen mode - press ESC to exit"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.Fullscreen }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Fullscreen</span>\n    </v-btn>\n    </v-item-group>\n</div>\n</template>\n\n<script>\nexport default {\n    props: {\n        showQuery: { type: Number, default: 0 },\n        showTarget: { type: Number, default: 0 },\n        showArrows: { type: Boolean, default: false },\n        isFullscreen: { type: Boolean, default: false },\n        isSpinning: { type: Boolean, default: true },\n        disablePDBButton: { type: Boolean, default: false },\n        disableSpinButton: { type: Boolean, default: false },\n        disableImageButton: { type: Boolean, default: false },\n        disableQueryButton: { type: Boolean, default: false },\n        disableTargetButton: { type: Boolean, default: false },\n        disableArrowButton: { type: Boolean, default: false },\n        disableResetButton: { type: Boolean, default: false },\n        disableFullscreenButton: { type: Boolean, default: false },\n    },\n    computed: {\n        toolbarIconProps: function() {\n            return (this.isFullscreen) ? {\n                \'right\': true\n            } : {\n                \n            }\n        },\n        toolbarButtonProps: function() {\n            return (this.isFullscreen) ? {\n                small: false,\n                style: \'margin-bottom: 15px;\',\n            } : {\n                small: true,\n                style: "width: 24px;",\n            }\n        },\n    },\n    methods: {\n        handleClickSpin() {\n            this.$emit("toggleSpin");\n        },\n        handleClickMakePDB() {\n            this.$emit("makePDB");\n        },\n        handleClickMakeImage() {\n            this.$emit("makeImage");\n        },\n        handleClickResetView() {\n            this.$emit("resetView");\n        },\n        handleClickFullscreen() {\n            this.$emit("toggleFullscreen");\n        },\n        handleClickCycleQuery() {\n            this.$emit("toggleQuery");\n        },\n        handleClickToggleTarget() {\n            this.$emit("toggleTarget");\n        },\n        handleClickToggleArrows() {\n            this.$emit("toggleArrows");\n        } \n    }\n}\n<\/script>\n\n<style>\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        5727: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => o
            });
            var r = n(7537), i = n.n(r), a = n(3645), s = n.n(a)()(i());
            s.push([ t.id, "\ncanvas {\n    image-rendering: pixelated;\n    cursor: auto;\n}\ncanvas.hover {\n    cursor: pointer;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/Tree.vue" ],
                names: [],
                mappings: ";AAuRA;IACA,0BAAA;IACA,YAAA;AACA;AACA;IACA,eAAA;AACA",
                sourcesContent: [ '<template>\n<div style="padding: 10px; height: inherit; width: 100%; overflow-y: auto;" ref="parentDiv">\n    <canvas\n        id="tree"\n        :class="canvasClass"\n        @click="handleClick"\n        @mousemove="handleMouseOver"\n        @mouseleave="handleMouseLeave"\n    />\n</div>\n</template>\n\n<script>\nimport { tryFixName, debounce } from \'./Utilities\'; \n\nfunction sortTreeByLeafOrder(tree, leafOrder) {\n\n    function findDeepestLeafIndex(node) {\n        if (!node.branches || node.branches.length === 0) {\n            return leafOrder.indexOf(node.name);\n        }\n        return Math.min(...node.branches.map(findDeepestLeafIndex));\n    }\n\n    function sortNode(node) {\n        if (!node.branches || node.branches.length === 0) {\n            return; // Leaf node, no action needed\n        }\n\n        // Ensure each child is sorted\n        node.branches.forEach(sortNode);\n\n        // Compare the deepest leaf index of each child\n        let leftIndex = findDeepestLeafIndex(node.branches[0]);\n        let rightIndex = findDeepestLeafIndex(node.branches[1]);\n\n        // Swap children if necessary\n        if (leftIndex > rightIndex) {\n            [node.branches[0], node.branches[1]] = [node.branches[1], node.branches[0]];\n        }\n    }\n\n    // Start the sorting process from the root\n    sortNode(tree);\n    return tree;\n}\n\n// TODO sort by MSA order\n// highlight selected sequences\nfunction parseNewick(newick, order) {\n    let tokens = newick.split(/\\s*(;|\\(|\\)|,|:)\\s*/);\n    let stack = [];\n    let tree = {};\n    let current_node = tree;\n    let headers = [];\n    for (let token of tokens) {\n        switch (token) {\n            case \'(\': // new branch set\n                let branch = { height: 1 };\n                current_node.branches = [branch];\n                stack.push(current_node);\n                current_node = branch;\n                break;\n            case \',\': // another branch\n                branch = { height: 1 };\n                stack[stack.length - 1].branches.push(branch);\n                current_node = branch;\n                break;\n            case \')\': // end of branch set\n                current_node = stack.pop();\n                if (current_node.branches) {\n                    current_node.height = countLeaves(current_node);\n                }\n                break;\n            default: // leaf or branch name\n                if (token.length > 0) {\n                    current_node.name = tryFixName(token);\n                    headers.push(current_node.name);\n                }\n        }\n    }\n    // sortTree(tree);\n    tree = sortTreeByLeafOrder(tree, order)\n   \n    // printNode(tree)\n    return { tree, headers };\n}\n\nfunction printNode(node) {\n    console.log(node)\n    if (!node.branches) {\n        return;\n    }\n    for (let child of node.branches) {\n        printNode(child) \n    }\n}\n\nfunction countLeaves(node) {\n    if (!node.branches || node.branches.length === 0) {\n        return 1;\n    }\n    let leaves = 0;\n    node.branches.forEach(child => {\n        leaves += countLeaves(child);\n    });\n    return leaves;\n}\n\nfunction calculateTreeDepth(node, currentDepth=0) {\n    if (!node) return currentDepth;\n    if (!node.branches || node.branches.length === 0) return currentDepth;\n    let depth = currentDepth;\n    node.branches.forEach(child => {\n        depth = Math.max(depth, calculateTreeDepth(child, currentDepth + 1));\n    });\n    return depth;\n}\n   \nexport default {\n    data() {\n        return {\n            tree: {},\n            headers: [],\n            resizeObserver: null,\n            headerStartX: null,\n            isHovering: false\n        }\n    },\n    props: {\n        newick: { type: String },\n        selection: { type: Array },\n        reference: { type: Number },\n        order: { type: Array },\n        fontNormal: { type: String, default: "normal 12px sans-serif" },\n        fontSelected: { type: String, default: "normal 600 12px sans-serif" },\n        referenceColor: { type: String, default: "#1E88E5" },\n        selectionColor: { type: String, default: "#E6AC00" },\n        maxHeaderChars: { type: Number, default: 25 }\n    },\n    computed: {\n        strokeStyle() {\n            return this.$vuetify.theme.dark ? \'white\' : \'black\';\n        },\n        canvasClass() {\n            return this.isHovering ? "hover" : "";\n        }\n    },\n    watch: {\n        \'tree\': function() {\n            this.visualiseTree();\n        },\n        \'$vuetify.theme.dark\': function() {\n            this.visualiseTree();\n        },\n        \'selection\': function() {\n            this.visualiseTree();\n        },\n    },\n    methods: {\n        drawElbowConnector(ctx, startX, startY, endX, endY) {\n            ctx.beginPath();\n            ctx.moveTo(startX, startY);\n            ctx.lineTo(startX, endY); // Vertical line\n            ctx.lineTo(endX, endY);   // Horizontal line\n            ctx.strokeStyle = this.strokeStyle;\n            ctx.stroke();\n            ctx.closePath();\n        },\n        isSelection(node) {\n            if (!this.selection) return false;\n            return (this.selection.includes(node.name));\n        },\n        isReference(node) {\n            if (this.reference === undefined || this.reference === -1) return false;\n            return (node.name === this.order[this.reference]);\n        },\n        drawTree(ctx, node, startX, startY, length, headerHeight, depth=0, childIndex=0, fullWidth=100) {\n            const endX = (!node.branches ? fullWidth : startX + length);\n            const endY = startY + headerHeight * (\n                childIndex === 0\n                    ? -(node.branches ? node.branches[1].height : 0.5)\n                    : +(node.branches ? node.branches[0].height : 0.5)\n            );\n            this.drawElbowConnector(ctx, startX, startY, endX, endY);\n            if (node.branches) {\n                for (let i = 0; i < node.branches.length; i++) {\n                    this.drawTree(ctx, node.branches[i], endX, endY, length, headerHeight, depth + 1, i, fullWidth);\n                }\n            } else {\n                if (this.selection) {\n                    ctx.font = this.isSelection(node) ? this.fontSelected : this.fontNormal;\n                    ctx.fillStyle = this.isSelection(node)\n                        ? (this.isReference(node) ? this.referenceColor : this.selectionColor)\n                        : this.strokeStyle;\n                }\n                let name = (node.name.length > this.maxHeaderChars)\n                    ? `${node.name.substring(0, this.maxHeaderChars)}…`\n                    : node.name;\n                ctx.fillText(name, endX + 5, endY + 4);\n            }\n        },\n        clearTree() {\n            let canvas = document.getElementById(\'tree\');\n            let ctx = canvas.getContext(\'2d\');\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n        },\n        visualiseTree() {\n            let canvas = document.getElementById(\'tree\');\n            if (!canvas) {\n                return;\n            }\n            let ctx = canvas.getContext(\'2d\');\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            ctx.strokeStyle = this.strokeStyle;\n            ctx.font = this.fontSelected;  // Calculate width bolded\n            \n            // Calculate spacing for header substrings of length maxHeaderChars\n            // +extra to account for ellipsis\n            let headerWidth = 0;\n            let headerHeight = 0;\n            this.headers.forEach(header => {\n                let { width, fontBoundingBoxAscent } = ctx.measureText(header.substring(0, this.maxHeaderChars + 3));\n                headerWidth = Math.max(headerWidth, width);\n                headerHeight = Math.max(headerHeight, fontBoundingBoxAscent);\n            });\n            headerHeight *= 2\n            \n            canvas.style.width = \'100%\';\n            canvas.style.height = `${this.headers.length * headerHeight}px`;\n\n            let depth = calculateTreeDepth(this.tree);\n            let fullWidth = canvas.offsetWidth - headerWidth;\n            let length = fullWidth / (depth + 1);\n            \n            // Store x position where headers start being drawn\n            // Used when identifying header on click\n            this.headerStartX = fullWidth;\n\n            // Prevent blurriness on high DPI displays\n            const ratio = window.devicePixelRatio;\n            canvas.height = this.headers.length * headerHeight * ratio;\n            canvas.width = canvas.offsetWidth * ratio;\n            ctx.scale(ratio, ratio);\n\n            ctx.font = this.fontNormal;\n            this.drawTree(ctx, this.tree, -5, this.headers.length * headerHeight, length, headerHeight, 0, 0, fullWidth);           \n        },\n        handleClick(event) {\n            if (event.layerX > this.headerStartX) {\n                const canvas = event.target;\n                const divHeight = canvas.height / this.headers.length;\n                const index = Math.floor(event.offsetY * window.devicePixelRatio / divHeight);\n                const status = (this.selection.length === 0 || event.altKey) ? "newStructureReference" : "newStructureSelection";\n                this.$emit(status, index);\n            }\n        },\n        handleMouseOver(event) {\n            this.isHovering = (event.layerX > this.headerStartX);\n        },\n        handleMouseLeave() {\n            this.isHovering = false;\n        }\n    },\n    mounted() {\n        let { tree, headers } = parseNewick(this.newick, this.order)\n        this.tree = tree;\n        this.headers = headers;\n        this.resizeObserver = new ResizeObserver(debounce(this.visualiseTree, 200)).observe(this.$refs.parentDiv);\n    },\n    beforeDestroy() {\n        if (this.resizeObserver) {\n            this.resizeObserver.disconnect();\n        }\n    }\n}\n<\/script>\n\n<style>\ncanvas {\n    image-rendering: pixelated;\n    cursor: auto;\n}\ncanvas.hover {\n    cursor: pointer;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        9010: (t, e, n) => {
            var r = n(7537), i = n(3645), a = n(1667), s = n(7204), o = n(1464), l = i(r), c = a(s), d = a(o);
            l.push([ t.id, ".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12) !important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(255,255,255,.12) !important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(255,255,255,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child){border-left-width:0}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent !important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}@font-face{font-family:InconsolataClustal;src:url(" + c + "),url(" + d + ')}.hide{display:none}.db{border-left:5px solid #000}@media print,screen and (max-width: 599px){small.ticket{display:inline-block;line-height:.9}}.result-table a.anchor{display:block;position:relative;top:-125px;visibility:hidden}.result-table a:not([href]){color:#333}.result-table a:not([href]):not([href]):hover{text-decoration:none}.result-table td,.result-table th{padding:0 6px;text-align:left}.result-table .hit.active{background:#f9f9f9}.result-table .alignment-action{text-align:center;word-wrap:normal}.theme--dark .result-table a:not([href]){color:#eee}.theme--dark .result-table .hit.active{background:#333}@media print,screen and (min-width: 961px){.result-table{table-layout:fixed;border-collapse:collapse;width:100%}.result-table th.thin,.result-table td.thin{white-space:nowrap}.result-table .long{overflow:hidden;word-break:keep-all;text-overflow:ellipsis;white-space:nowrap}}@media print{.result-table .alignment-action{display:none}}@media screen and (max-width: 960px){.result-table{width:100%}.result-table col{width:auto !important}.result-table .long{height:100% !important;white-space:normal !important;min-height:48px}.result-table .hits{min-width:300px}.result-table tbody td a{min-width:100px}.result-table tbody td.graphical div.ruler{margin:10px 0}.result-table thead{display:none}.result-table tfoot th{border:0;display:inherit}.result-table tr{box-shadow:0 2px 3px rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.1);max-width:100%;position:relative;display:block;padding:.5em}.result-table tr td{border:0;display:inherit}.result-table tr td:last-child{border-bottom:0}.result-table tr:not(:last-child){margin-bottom:1rem}.result-table tr:not(.is-selected){background:inherit}.result-table tr:not(.is-selected):hover{background-color:inherit}.result-table tr.detail{margin-top:-1rem}.result-table tr:not(.detail):not(.is-empty):not(.table-footer) td{display:flex;border-bottom:1px solid #eee;flex-direction:row}.result-table tr:not(.detail):not(.is-empty):not(.table-footer) td:last-child{border-bottom:0}.result-table tr:not(.detail):not(.is-empty):not(.table-footer) td:before{content:attr(data-label);font-weight:600;margin-right:auto;padding-right:.5em;word-break:keep-all;flex:1;white-space:nowrap}.result-table tbody td a,.result-table tbody td span{flex:2;margin-left:auto;text-align:right;word-wrap:anywhere}}.alignment{position:absolute;left:4px;right:4px;z-index:999;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12) !important}.alignment .residues{font-family:InconsolataClustal,Inconsolata,Consolas,Menlo,Monaco,"Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New",monospace;white-space:pre}.theme--dark .alignment .residues{color:#fff}', "", {
                version: 3,
                sources: [ "webpack://./node_modules/vuetify/src/components/VBtnToggle/VBtnToggle.sass", "webpack://./node_modules/vuetify/src/styles/settings/_variables.scss", "webpack://./node_modules/vuetify/src/components/VBtnToggle/_variables.scss", "webpack://./node_modules/vuetify/src/styles/tools/_rtl.sass", "webpack://./frontend/ResultView.vue" ],
                names: [],
                mappings: "AAKE,qDACE,eAAA,CACA,qBAAA,CAEA,kEACE,uCAAA,CAEA,qFACE,4BAAA,CAEF,0EACE,UAAA,CAXN,oDACE,kBAAA,CACA,UAAA,CAEA,iEACE,6CAAA,CAEA,oFACE,iCAAA,CAEF,yEACE,UAAA,CAGR,cACE,iBCbmB,CDcnB,mBAAA,CACA,cAAA,CAEA,2BACE,eAAA,CACA,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,eAAA,CACA,UEvBqB,CFwBrB,cE1BqB,CAAA,8DF8BjB,8BAAA,CACA,iCAAA,CGnCN,8DHsCM,+BAAA,CACA,kCAAA,CGnCN,6DHuCM,+BAAA,CACA,kCAAA,CG5CN,6DH+CM,8BAAA,CACA,iCAAA,CAEJ,mCACE,aAAA,CACA,SAAA,CAEF,iCACE,YAAA,CAGA,oEACE,mBAAA,CAGF,mEACE,mBAAA,CAEN,2CACE,cE7DmB,CF8DnB,YAAA,CAGA,qEACE,WEpEkB,CFuEtB,uCACE,cAAA,CAGF,kCACE,aEvE2B,CFyE/B,qBACE,eAAA,CAEA,kCACE,uCAAA,CACA,wBAAA,CACA,UE9E0B,CF+E1B,cAAA,CAEJ,uBACE,kBEpF+B,CFsFjC,sBACE,sBAAA,CAEF,oBACE,eAAA,CI4TF,WACA,8BAAA,CACA,mFAAA,CAIA,MACI,YAAA,CAGJ,IACI,0BAAA,CAGJ,2CACI,aACI,oBAAA,CACA,cAAA,CAAA,CAKJ,uBACI,aAAA,CACA,iBAAA,CACA,UAAA,CACA,iBAAA,CAGJ,4BACI,UAAA,CACA,8CACI,oBAAA,CAIR,kCACI,aAAA,CACA,eAAA,CAGJ,0BACI,kBAAA,CAOJ,gCACI,iBAAA,CACA,gBAAA,CAMA,yCACI,UAAA,CAGJ,uCACI,eAAA,CASZ,2CACI,cACI,kBAAA,CACA,wBAAA,CACA,UAAA,CACA,4CACI,kBAAA,CAEJ,oBACI,eAAA,CACA,mBAAA,CACA,sBAAA,CACA,kBAAA,CAAA,CAKZ,aACI,gCACI,YAAA,CAAA,CAIR,qCACI,cACI,UAAA,CACA,kBACI,qBAAA,CAEJ,oBACI,sBAAA,CACA,6BAAA,CACA,eAAA,CAEJ,oBACI,eAAA,CAEJ,yBACI,eAAA,CAEJ,2CACI,aAAA,CAEJ,oBACI,YAAA,CAEJ,uBACI,QAAA,CACA,eAAA,CAEJ,iBACI,4DAAA,CACA,cAAA,CACA,iBAAA,CACA,aAAA,CACA,YAAA,CAEJ,oBACI,QAAA,CACA,eAAA,CAEJ,+BACI,eAAA,CAEJ,kCACI,kBAAA,CAEJ,mCACI,kBAAA,CAEJ,yCACI,wBAAA,CAEJ,wBACI,gBAAA,CAEJ,mEACI,YAAA,CACA,4BAAA,CACA,kBAAA,CAEA,8EACI,eAAA,CAGR,0EACI,wBAAA,CACA,eAAA,CACA,iBAAA,CACA,kBAAA,CACA,mBAAA,CACA,MAAA,CACA,kBAAA,CAGJ,qDACI,MAAA,CACA,gBAAA,CACA,gBAAA,CACA,kBAAA,CAAA,CAKZ,WACI,iBAAA,CACA,QAAA,CACA,SAAA,CACA,WAAA,CACA,6GAAA,CAEA,qBACI,uNAAA,CACA,eAAA,CAIA,kCACI,UAAA",
                sourcesContent: [ "// Imports\n@import './_variables.scss'\n\n// Theme\n+theme(v-btn-toggle) using ($material)\n  &:not(.v-btn-toggle--group)\n    background: map-get($material, 'cards')\n    color: map-deep-get($material, 'text', 'primary')\n\n    .v-btn.v-btn\n      border-color: map-get($material, 'dividers') !important\n\n      &:focus:not(:active)\n        border-color: map-deep-get($material, 'buttons', 'disabled')\n\n      .v-icon\n        color: map-deep-get($material, 'toggle-buttons', 'color')\n\n// Block\n.v-btn-toggle\n  border-radius: $btn-toggle-border-radius\n  display: inline-flex\n  max-width: 100%\n\n  > .v-btn.v-btn\n    border-radius: 0\n    border-style: solid\n    border-width: thin\n    box-shadow: none\n    box-shadow: none\n    opacity: $btn-toggle-btn-opacity\n    padding: $btn-toggle-btn-padding\n\n    &:first-child\n      +ltr()\n        border-top-left-radius: inherit\n        border-bottom-left-radius: inherit\n\n      +rtl()\n        border-top-right-radius: inherit\n        border-bottom-right-radius: inherit\n\n    &:last-child\n      +ltr()\n        border-top-right-radius: inherit\n        border-bottom-right-radius: inherit\n\n      +rtl()\n        border-top-left-radius: inherit\n        border-bottom-left-radius: inherit\n\n    &--active\n      color: inherit\n      opacity: 1\n\n    &:after\n      display: none\n\n    +ltr()\n      &:not(:first-child)\n        border-left-width: 0\n\n    +rtl()\n      &:not(:last-child)\n        border-left-width: 0\n\n  .v-btn.v-btn.v-size--default\n    min-width: $btn-toggle-btn-width\n    min-height: 0\n\n  &:not(.v-btn-toggle--dense)\n    .v-btn.v-btn.v-size--default\n      height: $btn-toggle-btn-height\n\n.v-btn-toggle--borderless\n  > .v-btn.v-btn\n    border-width: 0\n\n.v-btn-toggle--dense\n  > .v-btn.v-btn\n    padding: $btn-toggle-dense-btn-padding\n\n.v-btn-toggle--group\n  border-radius: 0\n\n  > .v-btn.v-btn\n    background-color: transparent !important\n    border-color: transparent\n    margin: $btn-toggle-group-btn-margin\n    min-width: auto\n\n.v-btn-toggle--rounded\n  border-radius: $btn-toggle-round-border-radius\n\n.v-btn-toggle--shaped\n  border-radius: $btn-toggle-shaped-border-radius $btn-toggle-border-radius\n\n.v-btn-toggle--tile\n  border-radius: 0\n", "@import '../tools/_functions.sass';\n\n$color-pack: true !default;\n\n$body-font-family: 'Roboto', sans-serif !default;\n$font-size-root: 16px !default;\n$line-height-root: 1.5 !default;\n$border-radius-root: 4px !default;\n\n$rounded: () !default;\n$rounded: map-deep-merge(\n  (\n    0: 0,\n    'sm': $border-radius-root / 2,\n    null: $border-radius-root,\n    'lg': $border-radius-root * 2,\n    'xl': $border-radius-root * 6,\n    'pill': 9999px,\n    'circle': 50%\n  ),\n  $rounded\n);\n\n$spacer: 4px !default;\n$spacers-steps: 16 !default; \n\n$spacers: () !default;\n@if (type-of($spacers) == list) {\n  @for $i from 0 through $spacers-steps {\n    $spacers: map-merge($spacers, ($i: $spacer * $i))\n  }\n}\n\n$negative-spacers: () !default;\n@if (type-of($negative-spacers) == list) {\n  @for $i from 1 through $spacers-steps {\n    $negative-spacers: map-merge($negative-spacers, (\"n\" + $i: -$spacer * $i))\n  }\n}\n\n$grid-breakpoints: () !default;\n$grid-breakpoints: map-deep-merge(\n  (\n    'xs': 0,\n    'sm': 600px,\n    'md': 960px,\n    'lg': 1280px - 16px,\n    'xl': 1920px - 16px\n  ),\n  $grid-breakpoints\n);\n\n$grid-gutter: $spacer * 6 !default;\n$form-grid-gutter: $spacer * 2 !default;\n$grid-columns: 12 !default;\n\n$container-padding-x: $grid-gutter / 2 !default;\n\n$grid-gutters: () !default;\n$grid-gutters: map-deep-merge(\n  (\n    'xs': $grid-gutter / 12,\n    'sm': $grid-gutter / 6,\n    'md': $grid-gutter / 3,\n    'lg': $grid-gutter * 2/3,\n    'xl': $grid-gutter\n  ),\n  $grid-gutters\n);\n\n$container-max-widths: () !default;\n$container-max-widths: map-deep-merge(\n  (\n    'md': map-get($grid-breakpoints, 'md') * 0.9375,\n    'lg': map-get($grid-breakpoints, 'lg') * 0.9375,\n    'xl': map-get($grid-breakpoints, 'xl') * 0.9375\n  ),\n  $container-max-widths\n);\n\n$display-breakpoints: () !default;\n$display-breakpoints: map-deep-merge(\n  (\n    'print-only': 'only print',\n    'screen-only': 'only screen',\n    'xs-only': 'only screen and (max-width: #{map-get($grid-breakpoints, 'sm') - 0.02})',\n    'sm-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'sm')}) and (max-width: #{map-get($grid-breakpoints, 'md') - 0.02})',\n    'sm-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'md') - 0.02})',\n    'sm-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'sm')})',\n    'md-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'md')}) and (max-width: #{map-get($grid-breakpoints, 'lg') - 0.02})',\n    'md-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'lg') - 0.02})',\n    'md-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'md')})',\n    'lg-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'lg')}) and (max-width: #{map-get($grid-breakpoints, 'xl') - 0.02})',\n    'lg-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'xl') - 0.02})',\n    'lg-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'lg')})',\n    'xl-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'xl')})'\n  ),\n  $display-breakpoints\n);\n\n$font-weights: () !default;\n$font-weights: map-deep-merge(\n  (\n    'thin': 100,\n    'light': 300,\n    'regular': 400,\n    'medium': 500,\n    'bold': 700,\n    'black': 900\n  ),\n  $font-weights\n);\n\n$heading-font-family: $body-font-family !default;\n\n$headings: () !default;\n$headings: map-deep-merge(\n  (\n    'h1': (\n      'size': 6rem,\n      'weight': 300,\n      'line-height': 6rem,\n      'letter-spacing': -.015625em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h2': (\n      'size': 3.75rem,\n      'weight': 300,\n      'line-height': 3.75rem,\n      'letter-spacing': -.0083333333em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h3': (\n      'size': 3rem,\n      'weight': 400,\n      'line-height': 3.125rem,\n      'letter-spacing': normal,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h4': (\n      'size': 2.125rem,\n      'weight': 400,\n      'line-height': 2.5rem,\n      'letter-spacing': .0073529412em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h5': (\n      'size': 1.5rem,\n      'weight': 400,\n      'line-height': 2rem,\n      'letter-spacing': normal,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h6': (\n      'size': 1.25rem,\n      'weight': 500,\n      'line-height': 2rem,\n      'letter-spacing': .0125em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'subtitle-1': (\n      'size': 1rem,\n      'weight': normal,\n      'line-height': 1.75rem,\n      'letter-spacing': .009375em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'subtitle-2': (\n      'size': .875rem,\n      'weight': 500,\n      'line-height': 1.375rem,\n      'letter-spacing': .0071428571em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'body-1': (\n      'size': 1rem,\n      'weight': 400,\n      'line-height': 1.5rem,\n      'letter-spacing': .03125em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'body-2': (\n      'size': .875rem,\n      'weight': 400,\n      'line-height': 1.25rem,\n      'letter-spacing': .0178571429em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'button': (\n      'size': .875rem,\n      'weight': 500,\n      'line-height': 2.25rem,\n      'letter-spacing': .0892857143em,\n      'font-family': $body-font-family,\n      'text-transform': uppercase\n    ),\n    'caption': (\n      'size': .75rem,\n      'weight': 400,\n      'line-height': 1.25rem,\n      'letter-spacing': .0333333333em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'overline': (\n      'size': .75rem,\n      'weight': 500,\n      'line-height': 2rem,\n      'letter-spacing': .1666666667em,\n      'font-family': $body-font-family,\n      'text-transform': uppercase\n    )\n  ),\n  $headings\n);\n\n$typography: () !default;\n@each $type, $values in $headings {\n  $typography: map-deep-merge(\n    $typography,\n    (#{$type}: map-values($values))\n  );\n}\n\n$transition: () !default;\n$transition: map-deep-merge(\n  (\n    'fast-out-slow-in': cubic-bezier(0.4, 0, 0.2, 1),\n    'linear-out-slow-in': cubic-bezier(0, 0, 0.2, 1),\n    'fast-out-linear-in': cubic-bezier(0.4, 0, 1, 1),\n    'ease-in-out': cubic-bezier(0.4, 0, 0.6, 1),\n    'fast-in-fast-out': cubic-bezier(0.25, 0.8, 0.25, 1),\n    'swing': cubic-bezier(0.25, 0.8, 0.5, 1)\n  ),\n  $transition\n);\n$primary-transition: 0.3s map-get($transition, 'swing') !default;\n$secondary-transition: 0.2s map-get($transition, 'ease-in-out') !default;\n\n// Ripples //;\n$ripple-animation-transition-in: transform 0.25s map-get($transition, 'fast-out-slow-in'), opacity 0.1s map-get($transition, 'fast-out-slow-in') !default;\n$ripple-animation-transition-out: opacity 0.3s map-get($transition, 'fast-out-slow-in') !default;\n$ripple-animation-visible-opacity: 0.25 !default;\n\n// Elements //;\n$bootable-transition: 0.2s map-get($transition, 'fast-out-slow-in') !default;\n$blockquote-font-size: 18px !default;\n$blockquote-font-weight: 300 !default;\n$code-kbd-border-radius: 3px !default;\n$code-kbd-font-size: 85% !default;\n$code-kbd-font-weight: normal !default;\n$code-padding: .2em .4em !default;\n$kbd-padding: .2em .4rem !default;\n$input-top-spacing: 16px !default;\n$text-field-active-label-height: 12px !default;\n", "@import '../../styles/styles.sass';\n\n$btn-toggle-border-radius: $border-radius-root !default;\n$btn-toggle-shaped-border-radius: 24px !default;\n$btn-toggle-btn-height: 48px !default;\n$btn-toggle-btn-padding: 0 12px !default;\n$btn-toggle-btn-width: 48px !default;\n$btn-toggle-btn-opacity: 0.8 !default;\n$btn-toggle-round-border-radius: 24px !default;\n$btn-toggle-dense-btn-padding: 0 8px !default;\n$btn-toggle-group-btn-margin: 4px !default;\n", "@mixin rtl()\n  .v-application--is-rtl &\n    @content\n\n@mixin ltr()\n  .v-application--is-ltr &\n    @content\n", '@import "_variables.scss";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@font-face {\nfont-family: InconsolataClustal;\nsrc: url(assets/InconsolataClustal2.woff2),\n     url(assets/InconsolataClustal2.woff);\n}\n\n.hide {\n    display: none;\n}\n\n.db {\n    border-left: 5px solid black;\n}\n\n@media print, screen and (max-width: 599px) {\n    small.ticket {\n        display: inline-block;\n        line-height: 0.9;\n    }\n}\n\n.result-table {\n    a.anchor {\n        display: block;\n        position: relative;\n        top: -125px;\n        visibility: hidden;\n    }\n\n    a:not([href]) {\n        color: #333;\n        &:not([href]):hover {\n            text-decoration: none;\n        }\n    }\n\n    td, th {\n        padding: 0 6px;\n        text-align: left;\n    }\n\n    .hit.active {\n        background: #f9f9f9;\n    }\n\n    // tbody:hover td[rowspan], tbody tr:hover {\n    //     background: #eee;\n    // }\n\n    .alignment-action {\n        text-align: center;\n        word-wrap: normal;\n    }\n}\n\n.theme--dark {\n    .result-table {\n        a:not([href])  {\n            color: #eee;\n        }\n\n        .hit.active {\n            background: #333;\n        }\n\n        // tbody:hover td[rowspan], tbody tr:hover {\n        //     background: #333;\n        // }\n    }\n}\n\n@media print, screen and (min-width: 961px) {\n    .result-table {\n        table-layout: fixed;\n        border-collapse: collapse;\n        width: 100%;\n        th.thin, td.thin {\n            white-space: nowrap;\n        }\n        .long {\n            overflow: hidden;\n            word-break: keep-all;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n        }\n    }\n}\n\n@media print {\n    .result-table .alignment-action {\n        display: none;\n    }\n}\n\n@media screen and (max-width: 960px) {\n    .result-table {\n        width: 100%;\n        col {\n            width: auto !important;\n        }\n        .long {\n            height: 100% !important;\n            white-space: normal !important;\n            min-height: 48px;\n        }\n        .hits {\n            min-width: 300px;\n        }\n        tbody td a {\n            min-width: 100px;\n        }\n        tbody td.graphical div.ruler {\n            margin: 10px 0;\n        }\n        thead {\n            display: none;\n        }\n        tfoot th {\n            border: 0;\n            display: inherit;\n        }\n        tr {\n            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);\n            max-width: 100%;\n            position: relative;\n            display: block;\n            padding: 0.5em;\n        }\n        tr td {\n            border: 0;\n            display: inherit;\n        }\n        tr td:last-child {\n            border-bottom: 0;\n        }\n        tr:not(:last-child) {\n            margin-bottom: 1rem;\n        }\n        tr:not(.is-selected) {\n            background: inherit;\n        }\n        tr:not(.is-selected):hover {\n            background-color: inherit;\n        }\n        tr.detail {\n            margin-top: -1rem;\n        }\n        tr:not(.detail):not(.is-empty):not(.table-footer) td {\n            display: flex;\n            border-bottom: 1px solid #eee;\n            flex-direction: row;\n\n            &:last-child {\n                border-bottom: 0;\n            }\n        }\n        tr:not(.detail):not(.is-empty):not(.table-footer) td:before {\n            content: attr(data-label);\n            font-weight: 600;\n            margin-right: auto;\n            padding-right: 0.5em;\n            word-break: keep-all;\n            flex: 1;\n            white-space: nowrap;\n        }\n\n        tbody td a, tbody td span {\n            flex: 2;\n            margin-left: auto;\n            text-align: right;\n            word-wrap: anywhere;\n        }\n    }\n}\n\n.alignment {\n    position:absolute;\n    left:4px;\n    right:4px;\n    z-index: 999;\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12) !important;\n\n    .residues {\n        font-family: InconsolataClustal, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n        white-space: pre;\n    }\n\n    .theme--dark & {\n        .residues {\n            color: #fff;\n        }\n    }\n}\n\n' ],
                sourceRoot: ""
            } ]), t.exports = l;
        },
        5385: (t, e, n) => {
            var r = n(7537), i = n(3645)(r);
            i.push([ t.id, ".theme--light.v-btn-toggle[data-v-2b7861b2]:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn[data-v-2b7861b2]{border-color:rgba(0,0,0,.12) !important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn[data-v-2b7861b2]:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon[data-v-2b7861b2]{color:#000}.theme--dark.v-btn-toggle[data-v-2b7861b2]:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn[data-v-2b7861b2]{border-color:rgba(255,255,255,.12) !important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn[data-v-2b7861b2]:focus:not(:active){border-color:rgba(255,255,255,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon[data-v-2b7861b2]{color:#fff}.v-btn-toggle[data-v-2b7861b2]{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]:last-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active[data-v-2b7861b2]{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]:not(:first-child){border-left-width:0}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default[data-v-2b7861b2]{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default[data-v-2b7861b2]{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn[data-v-2b7861b2]{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn[data-v-2b7861b2]{padding:0 8px}.v-btn-toggle--group[data-v-2b7861b2]{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn[data-v-2b7861b2]{background-color:transparent !important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded[data-v-2b7861b2]{border-radius:24px}.v-btn-toggle--shaped[data-v-2b7861b2]{border-radius:24px 4px}.v-btn-toggle--tile[data-v-2b7861b2]{border-radius:0}.ruler[data-v-2b7861b2]{position:relative;width:100%;height:10px;border-top:1px solid #333}.tick-label[data-v-2b7861b2]{position:absolute;word-wrap:normal;font-size:9px;word-break:keep-all;line-height:1em;margin-top:7px;width:50px;margin-left:-25px;text-align:center;font-weight:bold}.tick-label-top[data-v-2b7861b2]{margin-top:-15px}.query[data-v-2b7861b2]{position:absolute;top:0;bottom:0;margin-top:-5px;--chevron-width: 5px;height:10px}.chevron-start[data-v-2b7861b2]{position:absolute;left:0;bottom:0;top:0;width:5px;clip-path:polygon(0 0, var(--chevron-width) 0, var(--chevron-width) 100%, 0 100%, var(--chevron-width) 50%)}.query.reversed .chevron-start[data-v-2b7861b2]{clip-path:polygon(var(--chevron-width) 0, 0 50%, var(--chevron-width) 100%)}.chevron-mid[data-v-2b7861b2]{position:absolute;left:5px;right:5px;bottom:0;top:0}.chevron-end[data-v-2b7861b2]{position:absolute;right:0;bottom:0;top:0;width:5px;clip-path:polygon(0 0, var(--chevron-width) 50%, 0 100%)}.query.reversed .chevron-end[data-v-2b7861b2]{clip-path:polygon(0 0, var(--chevron-width) 0, 0 50%, var(--chevron-width) 100%, 0 100%);clip-path:polygon()}.theme--dark .ruler[data-v-2b7861b2]{border-color:#aaa}", "", {
                version: 3,
                sources: [ "webpack://./node_modules/vuetify/src/components/VBtnToggle/VBtnToggle.sass", "webpack://./node_modules/vuetify/src/styles/settings/_variables.scss", "webpack://./node_modules/vuetify/src/components/VBtnToggle/_variables.scss", "webpack://./node_modules/vuetify/src/styles/tools/_rtl.sass", "webpack://./frontend/Ruler.vue" ],
                names: [],
                mappings: "AAKE,sEACE,eAAA,CACA,qBAAA,CAEA,mFACE,uCAAA,CAEA,sGACE,4BAAA,CAEF,2FACE,UAAA,CAXN,qEACE,kBAAA,CACA,UAAA,CAEA,kFACE,6CAAA,CAEA,qGACE,iCAAA,CAEF,0FACE,UAAA,CAGR,+BACE,iBCbmB,CDcnB,mBAAA,CACA,cAAA,CAEA,4CACE,eAAA,CACA,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,eAAA,CACA,UEvBqB,CFwBrB,cE1BqB,CAAA,+EF8BjB,8BAAA,CACA,iCAAA,CGnCN,+EHsCM,+BAAA,CACA,kCAAA,CGnCN,8EHuCM,+BAAA,CACA,kCAAA,CG5CN,8EH+CM,8BAAA,CACA,iCAAA,CAEJ,oDACE,aAAA,CACA,SAAA,CAEF,kDACE,YAAA,CAGA,qFACE,mBAAA,CAGF,oFACE,mBAAA,CAEN,4DACE,cE7DmB,CF8DnB,YAAA,CAGA,sFACE,WEpEkB,CFuEtB,wDACE,cAAA,CAGF,mDACE,aEvE2B,CFyE/B,sCACE,eAAA,CAEA,mDACE,uCAAA,CACA,wBAAA,CACA,UE9E0B,CF+E1B,cAAA,CAEJ,wCACE,kBEpF+B,CFsFjC,uCACE,sBAAA,CAEF,qCACE,eAAA,CI1CF,wBACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,yBAAA,CAGF,6BACE,iBAAA,CACA,gBAAA,CACA,aAAA,CACA,mBAAA,CACA,eAAA,CACA,cAAA,CACA,UAAA,CACA,iBAAA,CACA,iBAAA,CACA,gBAAA,CAGF,iCACE,gBAAA,CAGF,wBACE,iBAAA,CACA,KAAA,CACA,QAAA,CACA,eAAA,CACA,oBAAA,CACA,WAAA,CAGF,gCACE,iBAAA,CACA,MAAA,CACA,QAAA,CACA,KAAA,CACA,SAAA,CACA,2GAAA,CAGF,gDACE,2EAAA,CAGF,8BACE,iBAAA,CACA,QAAA,CACA,SAAA,CACA,QAAA,CACA,KAAA,CAGF,8BACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,KAAA,CACA,SAAA,CACA,wDAAA,CAEF,8CACE,wFAAA,CACA,mBAAA,CAIE,qCACE,iBAAA",
                sourcesContent: [ "// Imports\n@import './_variables.scss'\n\n// Theme\n+theme(v-btn-toggle) using ($material)\n  &:not(.v-btn-toggle--group)\n    background: map-get($material, 'cards')\n    color: map-deep-get($material, 'text', 'primary')\n\n    .v-btn.v-btn\n      border-color: map-get($material, 'dividers') !important\n\n      &:focus:not(:active)\n        border-color: map-deep-get($material, 'buttons', 'disabled')\n\n      .v-icon\n        color: map-deep-get($material, 'toggle-buttons', 'color')\n\n// Block\n.v-btn-toggle\n  border-radius: $btn-toggle-border-radius\n  display: inline-flex\n  max-width: 100%\n\n  > .v-btn.v-btn\n    border-radius: 0\n    border-style: solid\n    border-width: thin\n    box-shadow: none\n    box-shadow: none\n    opacity: $btn-toggle-btn-opacity\n    padding: $btn-toggle-btn-padding\n\n    &:first-child\n      +ltr()\n        border-top-left-radius: inherit\n        border-bottom-left-radius: inherit\n\n      +rtl()\n        border-top-right-radius: inherit\n        border-bottom-right-radius: inherit\n\n    &:last-child\n      +ltr()\n        border-top-right-radius: inherit\n        border-bottom-right-radius: inherit\n\n      +rtl()\n        border-top-left-radius: inherit\n        border-bottom-left-radius: inherit\n\n    &--active\n      color: inherit\n      opacity: 1\n\n    &:after\n      display: none\n\n    +ltr()\n      &:not(:first-child)\n        border-left-width: 0\n\n    +rtl()\n      &:not(:last-child)\n        border-left-width: 0\n\n  .v-btn.v-btn.v-size--default\n    min-width: $btn-toggle-btn-width\n    min-height: 0\n\n  &:not(.v-btn-toggle--dense)\n    .v-btn.v-btn.v-size--default\n      height: $btn-toggle-btn-height\n\n.v-btn-toggle--borderless\n  > .v-btn.v-btn\n    border-width: 0\n\n.v-btn-toggle--dense\n  > .v-btn.v-btn\n    padding: $btn-toggle-dense-btn-padding\n\n.v-btn-toggle--group\n  border-radius: 0\n\n  > .v-btn.v-btn\n    background-color: transparent !important\n    border-color: transparent\n    margin: $btn-toggle-group-btn-margin\n    min-width: auto\n\n.v-btn-toggle--rounded\n  border-radius: $btn-toggle-round-border-radius\n\n.v-btn-toggle--shaped\n  border-radius: $btn-toggle-shaped-border-radius $btn-toggle-border-radius\n\n.v-btn-toggle--tile\n  border-radius: 0\n", "@import '../tools/_functions.sass';\n\n$color-pack: true !default;\n\n$body-font-family: 'Roboto', sans-serif !default;\n$font-size-root: 16px !default;\n$line-height-root: 1.5 !default;\n$border-radius-root: 4px !default;\n\n$rounded: () !default;\n$rounded: map-deep-merge(\n  (\n    0: 0,\n    'sm': $border-radius-root / 2,\n    null: $border-radius-root,\n    'lg': $border-radius-root * 2,\n    'xl': $border-radius-root * 6,\n    'pill': 9999px,\n    'circle': 50%\n  ),\n  $rounded\n);\n\n$spacer: 4px !default;\n$spacers-steps: 16 !default; \n\n$spacers: () !default;\n@if (type-of($spacers) == list) {\n  @for $i from 0 through $spacers-steps {\n    $spacers: map-merge($spacers, ($i: $spacer * $i))\n  }\n}\n\n$negative-spacers: () !default;\n@if (type-of($negative-spacers) == list) {\n  @for $i from 1 through $spacers-steps {\n    $negative-spacers: map-merge($negative-spacers, (\"n\" + $i: -$spacer * $i))\n  }\n}\n\n$grid-breakpoints: () !default;\n$grid-breakpoints: map-deep-merge(\n  (\n    'xs': 0,\n    'sm': 600px,\n    'md': 960px,\n    'lg': 1280px - 16px,\n    'xl': 1920px - 16px\n  ),\n  $grid-breakpoints\n);\n\n$grid-gutter: $spacer * 6 !default;\n$form-grid-gutter: $spacer * 2 !default;\n$grid-columns: 12 !default;\n\n$container-padding-x: $grid-gutter / 2 !default;\n\n$grid-gutters: () !default;\n$grid-gutters: map-deep-merge(\n  (\n    'xs': $grid-gutter / 12,\n    'sm': $grid-gutter / 6,\n    'md': $grid-gutter / 3,\n    'lg': $grid-gutter * 2/3,\n    'xl': $grid-gutter\n  ),\n  $grid-gutters\n);\n\n$container-max-widths: () !default;\n$container-max-widths: map-deep-merge(\n  (\n    'md': map-get($grid-breakpoints, 'md') * 0.9375,\n    'lg': map-get($grid-breakpoints, 'lg') * 0.9375,\n    'xl': map-get($grid-breakpoints, 'xl') * 0.9375\n  ),\n  $container-max-widths\n);\n\n$display-breakpoints: () !default;\n$display-breakpoints: map-deep-merge(\n  (\n    'print-only': 'only print',\n    'screen-only': 'only screen',\n    'xs-only': 'only screen and (max-width: #{map-get($grid-breakpoints, 'sm') - 0.02})',\n    'sm-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'sm')}) and (max-width: #{map-get($grid-breakpoints, 'md') - 0.02})',\n    'sm-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'md') - 0.02})',\n    'sm-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'sm')})',\n    'md-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'md')}) and (max-width: #{map-get($grid-breakpoints, 'lg') - 0.02})',\n    'md-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'lg') - 0.02})',\n    'md-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'md')})',\n    'lg-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'lg')}) and (max-width: #{map-get($grid-breakpoints, 'xl') - 0.02})',\n    'lg-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'xl') - 0.02})',\n    'lg-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'lg')})',\n    'xl-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'xl')})'\n  ),\n  $display-breakpoints\n);\n\n$font-weights: () !default;\n$font-weights: map-deep-merge(\n  (\n    'thin': 100,\n    'light': 300,\n    'regular': 400,\n    'medium': 500,\n    'bold': 700,\n    'black': 900\n  ),\n  $font-weights\n);\n\n$heading-font-family: $body-font-family !default;\n\n$headings: () !default;\n$headings: map-deep-merge(\n  (\n    'h1': (\n      'size': 6rem,\n      'weight': 300,\n      'line-height': 6rem,\n      'letter-spacing': -.015625em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h2': (\n      'size': 3.75rem,\n      'weight': 300,\n      'line-height': 3.75rem,\n      'letter-spacing': -.0083333333em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h3': (\n      'size': 3rem,\n      'weight': 400,\n      'line-height': 3.125rem,\n      'letter-spacing': normal,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h4': (\n      'size': 2.125rem,\n      'weight': 400,\n      'line-height': 2.5rem,\n      'letter-spacing': .0073529412em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h5': (\n      'size': 1.5rem,\n      'weight': 400,\n      'line-height': 2rem,\n      'letter-spacing': normal,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h6': (\n      'size': 1.25rem,\n      'weight': 500,\n      'line-height': 2rem,\n      'letter-spacing': .0125em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'subtitle-1': (\n      'size': 1rem,\n      'weight': normal,\n      'line-height': 1.75rem,\n      'letter-spacing': .009375em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'subtitle-2': (\n      'size': .875rem,\n      'weight': 500,\n      'line-height': 1.375rem,\n      'letter-spacing': .0071428571em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'body-1': (\n      'size': 1rem,\n      'weight': 400,\n      'line-height': 1.5rem,\n      'letter-spacing': .03125em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'body-2': (\n      'size': .875rem,\n      'weight': 400,\n      'line-height': 1.25rem,\n      'letter-spacing': .0178571429em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'button': (\n      'size': .875rem,\n      'weight': 500,\n      'line-height': 2.25rem,\n      'letter-spacing': .0892857143em,\n      'font-family': $body-font-family,\n      'text-transform': uppercase\n    ),\n    'caption': (\n      'size': .75rem,\n      'weight': 400,\n      'line-height': 1.25rem,\n      'letter-spacing': .0333333333em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'overline': (\n      'size': .75rem,\n      'weight': 500,\n      'line-height': 2rem,\n      'letter-spacing': .1666666667em,\n      'font-family': $body-font-family,\n      'text-transform': uppercase\n    )\n  ),\n  $headings\n);\n\n$typography: () !default;\n@each $type, $values in $headings {\n  $typography: map-deep-merge(\n    $typography,\n    (#{$type}: map-values($values))\n  );\n}\n\n$transition: () !default;\n$transition: map-deep-merge(\n  (\n    'fast-out-slow-in': cubic-bezier(0.4, 0, 0.2, 1),\n    'linear-out-slow-in': cubic-bezier(0, 0, 0.2, 1),\n    'fast-out-linear-in': cubic-bezier(0.4, 0, 1, 1),\n    'ease-in-out': cubic-bezier(0.4, 0, 0.6, 1),\n    'fast-in-fast-out': cubic-bezier(0.25, 0.8, 0.25, 1),\n    'swing': cubic-bezier(0.25, 0.8, 0.5, 1)\n  ),\n  $transition\n);\n$primary-transition: 0.3s map-get($transition, 'swing') !default;\n$secondary-transition: 0.2s map-get($transition, 'ease-in-out') !default;\n\n// Ripples //;\n$ripple-animation-transition-in: transform 0.25s map-get($transition, 'fast-out-slow-in'), opacity 0.1s map-get($transition, 'fast-out-slow-in') !default;\n$ripple-animation-transition-out: opacity 0.3s map-get($transition, 'fast-out-slow-in') !default;\n$ripple-animation-visible-opacity: 0.25 !default;\n\n// Elements //;\n$bootable-transition: 0.2s map-get($transition, 'fast-out-slow-in') !default;\n$blockquote-font-size: 18px !default;\n$blockquote-font-weight: 300 !default;\n$code-kbd-border-radius: 3px !default;\n$code-kbd-font-size: 85% !default;\n$code-kbd-font-weight: normal !default;\n$code-padding: .2em .4em !default;\n$kbd-padding: .2em .4rem !default;\n$input-top-spacing: 16px !default;\n$text-field-active-label-height: 12px !default;\n", "@import '../../styles/styles.sass';\n\n$btn-toggle-border-radius: $border-radius-root !default;\n$btn-toggle-shaped-border-radius: 24px !default;\n$btn-toggle-btn-height: 48px !default;\n$btn-toggle-btn-padding: 0 12px !default;\n$btn-toggle-btn-width: 48px !default;\n$btn-toggle-btn-opacity: 0.8 !default;\n$btn-toggle-round-border-radius: 24px !default;\n$btn-toggle-dense-btn-padding: 0 8px !default;\n$btn-toggle-group-btn-margin: 4px !default;\n", "@mixin rtl()\n  .v-application--is-rtl &\n    @content\n\n@mixin ltr()\n  .v-application--is-ltr &\n    @content\n", '@import "_variables.scss";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.ruler {\n  position: relative;\n  width: 100%;\n  height: 10px;\n  border-top: 1px solid #333;\n}\n\n.tick-label {\n  position: absolute;\n  word-wrap: normal;\n  font-size: 9px;\n  word-break: keep-all;\n  line-height: 1em;\n  margin-top: 7px;\n  width: 50px;\n  margin-left: -25px;\n  text-align: center;\n  font-weight: bold;\n}\n\n.tick-label-top {\n  margin-top: -15px;\n}\n\n.query {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin-top: -5px;\n  --chevron-width: 5px;\n  height: 10px;\n}\n\n.chevron-start {\n  position: absolute;\n  left:0;\n  bottom:0;\n  top:0;\n  width:5px;\n  clip-path: polygon(0 0, var(--chevron-width) 0, var(--chevron-width) 100%, 0 100%, var(--chevron-width) 50%);\n}\n\n.query.reversed .chevron-start {\n  clip-path: polygon(var(--chevron-width) 0, 0 50%, var(--chevron-width) 100%);\n}\n\n.chevron-mid {\n  position: absolute;\n  left:5px;\n  right:5px;\n  bottom:0;\n  top:0;\n}\n\n.chevron-end {\n  position: absolute;\n  right:0;\n  bottom:0;\n  top:0;\n  width:5px;\n  clip-path: polygon(0 0, var(--chevron-width) 50%, 0 100%);\n}\n.query.reversed .chevron-end {\n  clip-path: polygon(0 0, var(--chevron-width) 0, 0 50%, var(--chevron-width) 100%, 0 100%);\n  clip-path: polygon()\n}\n\n.theme--dark {\n    .ruler {\n      border-color: #aaa;\n    }\n}\n' ],
                sourceRoot: ""
            } ]), t.exports = i;
        },
        654: (t, e, n) => {
            var r = n(9837);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("4fa110d4", r, !1, {});
        },
        603: (t, e, n) => {
            var r = n(5426);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("59383ee7", r, !1, {});
        },
        5685: (t, e, n) => {
            var r = n(7562);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("a7333c86", r, !1, {});
        },
        2237: (t, e, n) => {
            var r = n(5229);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("35bdd9d0", r, !1, {});
        },
        4869: (t, e, n) => {
            var r = n(5479);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("d70395c2", r, !1, {});
        },
        55: (t, e, n) => {
            var r = n(7212);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("08f57856", r, !1, {});
        },
        7316: (t, e, n) => {
            var r = n(6791);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("e7ce63d2", r, !1, {});
        },
        1574: (t, e, n) => {
            var r = n(1229);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("4c075a21", r, !1, {});
        },
        9146: (t, e, n) => {
            var r = n(4569);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("5d44b975", r, !1, {});
        },
        5367: (t, e, n) => {
            var r = n(6686);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("2ec3240b", r, !1, {});
        },
        2556: (t, e, n) => {
            var r = n(864);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("0a2d9f56", r, !1, {});
        },
        4568: (t, e, n) => {
            var r = n(8742);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("77ba9bdc", r, !1, {});
        },
        1591: (t, e, n) => {
            var r = n(8018);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("27c41ce8", r, !1, {});
        },
        5877: (t, e, n) => {
            var r = n(405);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("a3a33312", r, !1, {});
        },
        9121: (t, e, n) => {
            var r = n(7866);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("802ef828", r, !1, {});
        },
        6226: (t, e, n) => {
            var r = n(6732);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("9e5866ec", r, !1, {});
        },
        4678: (t, e, n) => {
            var r = n(8786);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("0ac3d6be", r, !1, {});
        },
        7539: (t, e, n) => {
            var r = n(6237);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("4acebb77", r, !1, {});
        },
        6406: (t, e, n) => {
            var r = n(5727);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("48dc9db7", r, !1, {});
        },
        5264: (t, e, n) => {
            var r = n(9010);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("122feea2", r, !1, {});
        },
        5941: (t, e, n) => {
            var r = n(5385);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ t.id, r, "" ] ]), 
            r.locals && (t.exports = r.locals);
            (0, n(7913).Z)("6d831950", r, !1, {});
        },
        1464: t => {
            "use strict";
            t.exports = "data:font/woff;base64,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";
        },
        7204: t => {
            "use strict";
            t.exports = "data:font/woff2;base64,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";
        },
        4833: (t, e, n) => {
            "use strict";
            t.exports = n.p + "142d6904f2305dd1cce7.png";
        },
        5904: (t, e, n) => {
            "use strict";
            t.exports = n.p + "9f772eefe8d08175ff5d.png";
        },
        7969: (t, e, n) => {
            "use strict";
            t.exports = n.p + "53d2a61fad6a2df4af57.png";
        },
        5515: (t, e, n) => {
            "use strict";
            t.exports = n.p + "fb5cfc3806f721f541ad.png";
        },
        4484: (t, e, n) => {
            "use strict";
            t.exports = n.p + "cb013a3d1b5f9a2c78e2.png";
        },
        7940: (t, e, n) => {
            "use strict";
            t.exports = n.p + "753a136eb8e7d5534788.png";
        },
        42: (t, e, n) => {
            "use strict";
            t.exports = n.p + "a1ee785acc7f8c1bf4ac.png";
        },
        901: (t, e, n) => {
            "use strict";
            t.exports = n.p + "bfc0aaa54b3fd8130101.png";
        }
    }, n = {};
    function r(t) {
        var i = n[t];
        if (void 0 !== i) return i.exports;
        var a = n[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, r), a.loaded = !0, a.exports;
    }
    r.m = e, t = [], r.O = (e, n, i, a) => {
        if (!n) {
            var s = 1 / 0;
            for (d = 0; d < t.length; d++) {
                for (var [n, i, a] = t[d], o = !0, l = 0; l < n.length; l++) (!1 & a || s >= a) && Object.keys(r.O).every((t => r.O[t](n[l]))) ? n.splice(l--, 1) : (o = !1, 
                a < s && (s = a));
                if (o) {
                    t.splice(d--, 1);
                    var c = i();
                    void 0 !== c && (e = c);
                }
            }
            return e;
        }
        a = a || 0;
        for (var d = t.length; d > 0 && t[d - 1][2] > a; d--) t[d] = t[d - 1];
        t[d] = [ n, i, a ];
    }, r.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, {
            a: e
        }), e;
    }, r.d = (t, e) => {
        for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        });
    }, r.u = t => "tmworker.js", r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (t) {
            if ("object" == typeof window) return window;
        }
    }(), r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, r.nmd = t => (t.paths = [], t.children || (t.children = []), t), r.j = 179, r.p = "/", 
    (() => {
        r.b = document.baseURI || self.location.href;
        var t = {
            179: 0
        };
        r.O.j = e => 0 === t[e];
        var e = (e, n) => {
            var i, a, [s, o, l] = n, c = 0;
            if (s.some((e => 0 !== t[e]))) {
                for (i in o) r.o(o, i) && (r.m[i] = o[i]);
                if (l) var d = l(r);
            }
            for (e && e(n); c < s.length; c++) a = s[c], r.o(t, a) && t[a] && t[a][0](), t[a] = 0;
            return r.O(d);
        }, n = self.webpackChunkmmseqs_app = self.webpackChunkmmseqs_app || [];
        n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n));
    })();
    var i = r.O(void 0, [ 736 ], (() => r(3957)));
    i = r.O(i);
})();
//# sourceMappingURL=main.js.map