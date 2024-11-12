(() => {
    var e, n = {
        5106: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => r
            });
            const r = {
                APP_NAME: "FoldMason",
                APP_DESCRIPTION: "FoldMason offers fast and sensitive multiple protein structure alignments",
                CITATION: 'van Kempen M, Kim S, Tumescheit C, Mirdita M, Lee J, Gilchrist CLM, Söding J, and Steinegger M. <a href="https://www.nature.com/articles/s41587-023-01773-0" target="_blank" rel="noopener">Fast and accurate protein structure search with Foldseek</a>. Nature Biotechnology, 2023.',
                NAV_URL_COUNT: "3",
                NAV_TITLE_1: "GitHub",
                NAV_URL_1: "https://foldseek.com",
                NAV_TITLE_2: "Söding Lab",
                NAV_URL_2: "https://www.mpinat.mpg.de/soeding",
                NAV_TITLE_3: "Steinegger Lab",
                NAV_URL_3: "https://steineggerlab.com/",
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
        5473: (e, n, t) => {
            "use strict";
            t.d(n, {
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
        8615: (e, n, t) => {
            "use strict";
            t.d(n, {
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
        509: (e, n, t) => {
            "use strict";
            var r = t(144), i = t(123), a = t(1002), s = {
                selector: "vue-portal-target"
            };
            const o = s;
            var l = "undefined" != typeof window && void 0 !== ("undefined" == typeof document ? "undefined" : (0, 
            a.Z)(document));
            const c = r.Z.extend({
                abstract: !0,
                name: "PortalOutlet",
                props: [ "nodes", "tag" ],
                data: function(e) {
                    return {
                        updatedNodes: e.nodes
                    };
                },
                render: function(e) {
                    var n = this.updatedNodes && this.updatedNodes();
                    return n ? 1 !== n.length || n[0].text ? e(this.tag || "DIV", n) : n : e();
                },
                destroyed: function() {
                    var e = this.$el;
                    e && e.parentNode.removeChild(e);
                }
            }), u = r.Z.extend({
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
                render: function(e) {
                    if (this.disabled) {
                        var n = this.$scopedSlots && this.$scopedSlots.default();
                        return n ? n.length < 2 && !n[0].text ? n : e(this.tag, n) : e();
                    }
                    return e();
                },
                created: function() {
                    this.getTargetEl() || this.insertTargetEl();
                },
                updated: function() {
                    var e = this;
                    this.$nextTick((function() {
                        e.disabled || e.slotFn === e.$scopedSlots.default || (e.container.updatedNodes = e.$scopedSlots.default), 
                        e.slotFn = e.$scopedSlots.default;
                    }));
                },
                beforeDestroy: function() {
                    this.unmount();
                },
                watch: {
                    disabled: {
                        immediate: !0,
                        handler: function(e) {
                            e ? this.unmount() : this.$nextTick(this.mount);
                        }
                    }
                },
                methods: {
                    getTargetEl: function() {
                        if (l) return document.querySelector(this.selector);
                    },
                    insertTargetEl: function() {
                        if (l) {
                            var e = document.querySelector("body"), n = document.createElement(this.tag);
                            n.id = this.selector.substring(1), e.appendChild(n);
                        }
                    },
                    mount: function() {
                        if (l) {
                            var e = this.getTargetEl(), n = document.createElement("DIV");
                            this.prepend && e.firstChild ? e.insertBefore(n, e.firstChild) : e.appendChild(n), 
                            this.container = new c({
                                el: n,
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
            function d(e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e.component(t.name || "portal", u), t.defaultSelector && (n = t.defaultSelector, 
                s.selector = n);
            }
            "undefined" != typeof window && window.Vue && window.Vue === r.Z && r.Z.use(d);
            const h = d;
            var A = t(5317);
            const p = {
                AlertCircleOutline: A._gM,
                ApplicationBracesOutline: "M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 20H3V6H21V20M9 8C7.9 8 7 8.9 7 10C7 11.1 6.1 12 5 12V14C6.1 14 7 14.9 7 16C7 17.1 7.9 18 9 18H11V16H9V15C9 13.9 8.1 13 7 13C8.1 13 9 12.1 9 11V10H11V8M15 8C16.1 8 17 8.9 17 10C17 11.1 17.9 12 19 12V14C17.9 14 17 14.9 17 16C17 17.1 16.1 18 15 18H13V16H15V15C15 13.9 15.9 13 17 13C15.9 13 15 12.1 15 11V10H13V8H15Z",
                ArrowRightCircle: A.BzZ,
                ArrowRightCircleOutline: A.LHZ,
                AxisZRotateCounterclockwise: A.LDS,
                ChevronLeft: A.gAv,
                ChevronRight: A.zrb,
                Circle: A.mdD,
                CircleHalf: A.dMH,
                CircleOneThird: "M12 12 V2 A10 10 0 0 0 3.858 17.806 Z",
                CircleTwoThird: "M12 12 V2 A10 10 0 1 0 20.142 17.806 Z",
                ClockOutline: A.R1X,
                CloudDownloadOutline: A.REA,
                Delete: A.x9U,
                Dns: A.cfj,
                File: A.iA5,
                FileDownloadOutline: A.wLz,
                FileUpload: A.ruG,
                FormatListBulleted: A.Ir0,
                Fullscreen: A.h40,
                HelpCircleOutline: A.Gir,
                History: A.BBX,
                Label: A.KB_,
                LabelOutline: A.iz_,
                Magnify: A.I0v,
                MinusBox: A.PeF,
                NotificationClearAll: A.Tal,
                PlusBox: A.U1m,
                ProgressWrench: A.Oy8,
                ReorderHorizontal: A.Qjn,
                Restore: A.mBz,
                SavePDB: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14Zm0 8v-.8c0-.7-.6-1.2-1.3-1.2h-2.4v6h2.4c.7 0 1.2-.5 1.2-1.2v-1c0-.4-.4-.8-.9-.8.5 0 1-.4 1-1Zm-9.7.5v-1c0-.8-.7-1.5-1.5-1.5H5.3v6h1.5v-2h1c.8 0 1.5-.7 1.5-1.5Zm5 2v-3c0-.8-.7-1.5-1.5-1.5h-2.5v6h2.5c.8 0 1.5-.7 1.5-1.5Zm3.4.3h-1.2v-1.2h1.2v1.2Zm-5.9-3.3v3h1v-3h-1Zm-5 0v1h1v-1h-1Zm11 .9h-1.3v-1.2h1.2v1.2Z",
                SavePNG: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9 11.5C9 12.3 8.3 13 7.5 13H6.5V15H5V9H7.5C8.3 9 9 9.7 9 10.5V11.5M14 15H12.5L11.5 12.5V15H10V9H11.5L12.5 11.5V9H14V15M19 10.5H16.5V13.5H17.5V12H19V13.7C19 14.4 18.5 15 17.7 15H16.4C15.6 15 15.1 14.3 15.1 13.7V10.4C15 9.7 15.5 9 16.3 9H17.6C18.4 9 18.9 9.7 18.9 10.3V10.5H19M6.5 10.5H7.5V11.5H6.5V10.5Z",
                TableLarge: A.bgG,
                Tune: A.S3d,
                LayersSearchOutline: A.Qpb,
                API: "M 22.23 1.96 c -0.98 0 -1.77 0.8 -1.77 1.77 c 0 0.21 0.05 0.4 0.12 0.6 l -8.31 14.23 c -0.8 0.17 -1.42 0.85 -1.42 1.7 a 1.77 1.77 0 0 0 3.54 0 c 0 -0.2 -0.05 -0.37 -0.1 -0.55 l 8.34 -14.29 a 1.75 1.75 0 0 0 1.37 -1.69 c 0 -0.97 -0.8 -1.77 -1.77 -1.77 M 14.98 1.96 c -0.98 0 -1.77 0.8 -1.77 1.77 c 0 0.21 0.05 0.4 0.12 0.6 l -8.3 14.24 c -0.81 0.16 -1.43 0.84 -1.43 1.7 a 1.77 1.77 0 0 0 3.55 0 c 0 -0.2 -0.06 -0.38 -0.12 -0.56 L 15.4 5.42 a 1.75 1.75 0 0 0 1.37 -1.69 c 0 -0.97 -0.8 -1.77 -1.78 -1.77 M 1.75 6 a 1.75 1.75 0 1 0 0 3.5 a 1.75 1.75 0 0 0 0 -3.5 z m 0 6 a 1.75 1.75 0 1 0 0 3.5 a 1.75 1.75 0 0 0 0 -3.5 z",
                CloseCircle: A.lY3,
                CloseCircleOutline: A.DNZ,
                Monomer: "m13.9 4.4.8.5a7.7 7.7 90 0 0 1.3.6 2.3 2.3 90 0 1 .5.2l.5.2.4.2.1.2a.4.4 90 0 1-.1.3A6.2 6.2 90 0 1 16 7a11.3 11.3 0 0 0-1.2.6l-.5-.2-1.1-.6a2 2 0 0 1-.5-.6 1.8 1.8 90 0 1-.2-1V3A5.3 5.3 90 0 0 14 4.4Zm-1.6-2c-.4-.8-1-1.3-1.6-1.3-1-.1-1.7.3-2.2 1.2a4.2 4.2 90 0 0-.3 1.3H10v12.9h2l-3.4 3.4.1 1.6c0 .4-.1.5-.4.5-.2 0 1.2-1-.4-.4L7.6 20l-3.3-3.4h1.9V3.6h1.1a7.4 7.4 90 0 1 .5-1.7C8.3.7 9.3.1 10.8.2a2.2 2.2 90 0 1 1.2.6A4.3 4.3 90 0 1 13 2v.3c0 .2 0 .4-.3.4-.2 0-.3 0-.4-.2Zm4.3 20.8a3 3 0 0 1-2.6-.5c-.8-.5-1.2-1.4-1.2-2.7 0-.3.1-.4.4-.4.3 0 .4.1.4.4 0 1 .3 1.7.8 2a2.5 2.5 90 0 0 2 .3h.1c.3 0 .5.2.5.5 0 .2-.1.3-.4.4Zm1.4-8v1a2.1 2.1 90 0 1-.3.5 2.6 2.6 90 0 1-.8.5l-.7.3-.6.3c-1.3.4-2 .7-2 .8a2.5 2.5 90 0 0-.8.5l-.2.3a3.3 3.3 90 0 1-.1-.8 5 5 90 0 1 0-1.3 2.4 2.4 90 0 1 .4-.8 3.6 3.6 90 0 1 .6-.4 38.4 38.4 0 0 1 4-1.9l.2-.3a2.6 2.6 90 0 1 .2.3 3.2 3.2 90 0 1 0 1Zm-5.2-1.8V13l.2-.4.7-.5 1-.3a7.7 7.7 90 0 0 1.3.6l.5.2.5.2.4.2.1.2-.1.2a2.4 2.4 90 0 1-.8.4 3 3 90 0 0-.5.2 1.9 1.9 90 0 1-.6.2l-.7.4-.5-.3a4.6 4.6 90 0 1-1.1-.5l-.2-.3-.2-.2ZM18 8.2a5.8 5.8 90 0 1 0 1 1.2 1.2 90 0 1-.3.5l-.5.3a189.3 189.3 90 0 0-3.6 1.5 2.5 2.5 90 0 0-.8.6l-.2.3-.1-.7v-1.3l.4-.9.5-.3L15.6 8l.6-.3a3.5 3.5 90 0 1 .5-.2l.9-.4.2-.3v.2l.2 1.1Z",
                Multimer: "M14 19.3c0-.3.2-.4.3-.5h.2c.3 0 .4.1.4.3.1.8.4 1.4 1 1.7.5.2 1 .3 1.5.1H17.7c.2-.1.4 0 .5.2 0 .3 0 .4-.3.5l-.4.2h-.3c-.5.1-1 0-1.7-.3-.4-.1-.7-.4-.9-.8a2.4 2.4 0 0 1-.4-1l-.1-.4Zm3.2-2h-.4a18.4 18.4 0 0 0-2.6.8l-.2.3v-.7c0-.5.1-.8.3-1l.6-.7.5-.3A63.2 63.2 0 0 1 18 15l.5-.2h.3l.3-.1.1-.1.3-.3v.2a7.5 7.5 0 0 1-.2 1.9l-.2.4-.8.4a15 15 0 0 0-.8.1h-.2Zm-5.1-.1v.6h-.6l-.4-.5-.6-.7-4.6-.8 1.5-1-5.9-8 .9-.7-.6-1.5c-.3-1.3.2-2.4 1.3-3.1l1.3-.3h.4l.4.1.2.1.6.4c.2 0 .3.2.2.5l-.4.2h-.2l-.4-.2-.8-.2c-.3 0-.6 0-.9.2a2 2 0 0 0-1 2.2l.6 1.1 1.3-1 1 1.4L5 8.6l1.4-1 3.8 5 1.5-1-.6 4.6.9 1Zm7-4-.1.3-.8.3a9 9 0 0 0-1.7.4 100.6 100.6 0 0 1-1.4-1.1v-.5c0-.1 0-.3.2-.4l.7-.3.8-.2.1.1.5.3.6.3a2092.6 2092.6 0 0 0 1.1.8Zm-8-2L7.2 6l-1.1.8.6-4 4 .7-1.1.8 4.2 5.7c-.4.5-.5 1.5-.4 3l-.6.4-.7-.9.2-2.2-1.2 1Zm9.2-3.7v1.2l-.2.8c0 .3-.2.4-.2.4l-.5.3a49.2 49.2 0 0 1-4.1 1l-.2.3V11c0-.4 0-.8.2-1.1l.5-.7.4-.3a19.2 19.2 0 0 1 4-1V7.4Zm-3.9-4.2c.3.5.6.9 1 1.1.2.4.5.6.6.6l.5.3a15.8 15.8 0 0 1 .8.6h.3l.1.2h.2c0 .2.2.3.3.3V7h-.5a2 2 0 0 0-.3.2l-.5.1-.5.1h-.1l-.3.1a1 1 0 0 0-.3 0l-.5-.2a4.7 4.7 0 0 1-1-1l-.2-.2V5l.4-2v.3Zm1.9-1.8c.1 0 .9-1.4 0-1.1-.9.2-1.5.7-1.8 1.5 0 .4 0 .7.5.8.4 0 .6-.1.7-.5 0-.3.3-.5.6-.7Z",
                Wall: A.MxW,
                TextBoxOutline: A.eLz
            };
            var g = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("v-app", {
                    class: {
                        electron: e.$ELECTRON
                    },
                    attrs: {
                        id: "app"
                    }
                }, [ t("v-main", [ "foldmason" === e.$APP ? t("MSALocal") : t("ResultLocal") ], 1) ], 1);
            };
            g._withStripped = !0;
            var m = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("Local", {
                    attrs: {
                        title: e.appTitle
                    },
                    on: {
                        uploadData: e.handleUploadData,
                        downloadData: e.handleDownloadData
                    },
                    scopedSlots: e._u([ {
                        key: "default",
                        fn: function() {
                            return [ e.hits ? t("v-tabs", {
                                staticStyle: {
                                    "margin-bottom": "1em"
                                },
                                attrs: {
                                    "center-active": "",
                                    grow: "",
                                    "show-arrows": ""
                                }
                            }, e._l(e.hits, (function(n, r) {
                                return t("v-tab", {
                                    key: n.query.header,
                                    on: {
                                        click: function(n) {
                                            return e.changeResult(r);
                                        }
                                    }
                                }, [ e._v("\n                " + e._s(n.query.header) + " (" + e._s(n.results[0].alignments ? n.results[0].alignments.length : 0) + ")\n            ") ]);
                            })), 1) : e._e(), e._v(" "), t("ResultView", {
                                key: e.currentIndex,
                                attrs: {
                                    ticket: e.ticket,
                                    error: e.error,
                                    mode: e.mode,
                                    hits: e.currentResult,
                                    selectedDatabases: e.selectedDatabases,
                                    tableMode: e.tableMode
                                }
                            }) ];
                        },
                        proxy: !0
                    } ])
                });
            };
            m._withStripped = !0;
            var f = t(9062), b = t(3324), v = t(8197);
            function y(e, n) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                        if (!e) return;
                        if ("string" == typeof e) return C(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return C(e, n);
                    }(e)) || n && e && "number" == typeof e.length) {
                        t && (e = t);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        t = t.call(e);
                    },
                    n: function() {
                        var e = t.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        o = !0, a = e;
                    },
                    f: function() {
                        try {
                            s || null == t.return || t.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function C(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            function w(e, n) {
                try {
                    var t = n.toLowerCase();
                    return t.startsWith("pfam") ? "https://www.ebi.ac.uk/interpro/entry/pfam/" + e : t.startsWith("pdb") ? "https://www.rcsb.org/pdb/explore.do?structureId=" + e.replaceAll(/-assembly[0-9]+/g, "").replaceAll(/\.(cif|pdb)(\.gz)?/g, "").split("_")[0] : t.startsWith("uniclust") || t.startsWith("uniprot") || t.startsWith("sprot") || t.startsWith("swissprot") ? "https://www.uniprot.org/uniprot/" + e : t.startsWith("eggnog_") ? "http://eggnogdb.embl.de/#/app/results?target_nogs=" + e : t.startsWith("cdd") ? "https://www.ncbi.nlm.nih.gov/Structure/cdd/cddsrv.cgi?uid=" + e : null;
                } catch (e) {
                    return null;
                }
            }
            function x(e, n) {
                n.toLowerCase();
                return e;
            }
            function S(e) {
                return e.startsWith("AF-") && (e = e.replaceAll(/(AF[-_]|[-_]F[0-9]+[-_]model[-_]v[0-9]+)/g, "")), 
                e.replaceAll(/\.(cif|pdb|gz)/g, "");
            }
            function M(e) {
                var n = 0, t = 0;
                for (var r in e.results) {
                    var i = e.results[r], a = i.db;
                    i.hasDescription = !1, i.hasTaxonomy = !1, null == i.alignments && n++, t++;
                    var s = {};
                    for (var o in i.alignments) for (var l in i.alignments[o]) {
                        var c, u = i.alignments[o][l], d = u.target.split(" ");
                        u.target = d[0], u.description = d.slice(1).join(" "), u.description.length > 1 && (i.hasDescription = !0), 
                        u.href = w(u.target, a), u.target = x(u.target, a), u.id = "result-" + r + "-" + o, 
                        u.active = !1, u.eval = "string" == typeof u.eval ? u.eval : u.eval.toExponential(2), 
                        "taxId" in u && (i.hasTaxonomy = !0);
                        var h = null !== (c = u.complexid) && void 0 !== c ? c : l;
                        s[h] || (s[h] = []), s[h].push(u);
                    }
                    i.alignments = s;
                }
                return 0 != t && n / t == 1 ? {
                    results: [],
                    mode: e.mode
                } : e;
            }
            function T() {
                return (new Date).toLocaleString("sv").replace(" ", "_").replaceAll("-", "_").replaceAll(":", "_");
            }
            function I(e, n) {
                var t = JSON.stringify(e), r = new Blob([ t ], {
                    type: "application/json"
                }), i = document.createElement("a");
                i.href = URL.createObjectURL(r), i.download = n, i.click(), URL.revokeObjectURL(i.href);
            }
            function k(e, n) {
                for (var t = Array(n.length), r = 0, i = 0; r < n.length; r++) "-" === n[r] ? (t[r] = null, 
                i++) : t[r] = e + r - i;
                return t;
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
            function L(e, n) {
                var t = [];
                return e.eachAtom((function(e) {
                    t.push(function(e) {
                        var n = e.serial, t = e.atomname, r = e.resname, i = e.chainname, a = e.resno, s = e.inscode, o = e.x, l = e.y, c = e.z;
                        return "ATOM  ".concat(n.toString().padStart(5)).concat(t.padStart(4), "  ").concat(r.padStart(3), " ").concat(i.padStart(1)).concat(a.toString().padStart(4), " ").concat(s.padStart(1), "  ").concat(o.toFixed(3).padStart(8)).concat(l.toFixed(3).padStart(8)).concat(c.toFixed(3).padStart(8));
                    }(e));
                }), new v.Y1(n)), t.join("\n");
            }
            function O(e, n, t) {
                for (var r = e.split(","), i = new Array, a = 1, s = 0; s < r.length; s += 3, a++) {
                    var o = r.slice(s, s + 3).map((function(e) {
                        return parseFloat(e);
                    })), l = (0, b.Z)(o, 3), c = l[0], u = l[1], d = l[2];
                    i.push("ATOM  " + a.toString().padStart(5) + "  CA  " + E["" != n && r.length / 3 == n.length ? n[s / 3] : "A"] + t.toString().padStart(2) + a.toString().padStart(4) + "    " + c.toFixed(3).padStart(8) + u.toFixed(3).padStart(8) + d.toFixed(3).padStart(8) + "  1.00  0.00           C  ");
                }
                return i.join("\n");
            }
            function R(e, n, t) {
                e.eachAtom((function(e) {
                    var r = [ e.x, e.y, e.z ], i = r[0], a = r[1], s = r[2];
                    e.x = n[0] + t[0][0] * i + t[0][1] * a + t[0][2] * s, e.y = n[1] + t[1][0] * i + t[1][1] * a + t[1][2] * s, 
                    e.z = n[2] + t[2][0] * i + t[2][1] * a + t[2][2] * s;
                }));
            }
            function N(e, n) {
                var t;
                return function() {
                    var r = this, i = arguments;
                    clearTimeout(t), t = setTimeout((function() {
                        e.apply(r, i);
                    }), n);
                };
            }
            function B(e, n) {
                for (var t, r = n.slice(), i = 0; i < 3; i++) r[i].push(e[i]);
                var a = new v.yG, s = (t = []).concat.apply(t, (0, f.Z)(r).concat([ [ 0, 0, 0, 1 ] ]));
                return a.set.apply(a, (0, f.Z)(s)), a;
            }
            var D = "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5".match(/.{6}/g).map((function(e) {
                return "#" + e;
            }));
            function q(e) {
                e = function(e) {
                    var n = function(e) {
                        return parseInt(e, 16) / 255;
                    };
                    return [ n(e.slice(1, 3)), n(e.slice(3, 5)), n(e.slice(5, 7)) ];
                }(e);
                var n = e[0], t = e[1], r = e[2], i = Math.min(n, t, r), a = Math.max(n, t, r), s = NaN, o = a - i, l = (a + i) / 2;
                return o ? (s = n === a ? (t - r) / o + 6 * (t < r) : t === a ? (r - n) / o + 2 : (n - t) / o + 4, 
                o /= l < .5 ? a + i : 2 - a - i, s *= 60) : o = l > 0 && l < 1 ? 0 : s, [ s, o, l ];
            }
            function P(e, n) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                        if (!e) return;
                        if ("string" == typeof e) return _(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return _(e, n);
                    }(e)) || n && e && "number" == typeof e.length) {
                        t && (e = t);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        t = t.call(e);
                    },
                    n: function() {
                        var e = t.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        o = !0, a = e;
                    },
                    f: function() {
                        try {
                            s || null == t.return || t.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function _(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
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
                            var e, n, t, r, i, a, s, o, l, c = (e = [], n = 1, function(t) {
                                var r = t + "", i = e[r];
                                return i || (i = e[r] = n++), D[(i - 1) % D.length];
                            }), u = P(this.currentResult.results);
                            try {
                                for (u.s(); !(t = u.n()).done; ) {
                                    var d = t.value;
                                    d.color = c(d.db ? d.db : 0);
                                    for (var h = q(d.color), A = {
                                        score: Number.MIN_VALUE
                                    }, p = {
                                        score: Number.MAX_VALUE
                                    }, g = 0, m = Object.values(d.alignments); g < m.length; g++) {
                                        var f, b = P(m[g]);
                                        try {
                                            for (b.s(); !(f = b.n()).done; ) {
                                                var v = f.value;
                                                for (var y in p) p[y] = v[y] < p[y] ? v[y] : p[y], A[y] = v[y] > A[y] ? v[y] : A[y];
                                            }
                                        } catch (e) {
                                            b.e(e);
                                        } finally {
                                            b.f();
                                        }
                                    }
                                    for (var C = 0, w = Object.values(d.alignments); C < w.length; C++) {
                                        var x, S = P(w[C]);
                                        try {
                                            for (S.s(); !(x = S.n()).done; ) {
                                                var M = x.value, T = (s = p.score / A.score, o = 1, l = M.score / A.score, s * (1 - l) + o * l), I = (r = h[2] * Math.pow(.55, -(1 - T)), 
                                                i = .1, a = .9, Math.max(i, Math.min(a, r)));
                                                M.color = "hsl(".concat(h[0], ", ").concat(100 * h[1], "%, ").concat(100 * I, "%)");
                                            }
                                        } catch (e) {
                                            S.e(e);
                                        } finally {
                                            S.f();
                                        }
                                    }
                                }
                            } catch (e) {
                                u.e(e);
                            } finally {
                                u.f();
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
            var V = t(1900), j = (0, V.Z)(F, undefined, undefined, !1, null, null, null);
            j.options.__file = "frontend/ResultMixin.vue";
            const U = j.exports;
            var z = function() {
                var e = this, n = e.$createElement, r = e._self._c || n;
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
                }, [ e.$LOCAL || e.hits && e.hits.query ? [ r("span", {
                    staticClass: "hidden-sm-and-down"
                }, [ e._v("Results: ") ]), e._v(" "), r("small", {
                    staticClass: "ticket"
                }, [ e._v(e._s(e.hits.query.header)) ]) ] : [ r("span", {
                    staticClass: "hidden-sm-and-down"
                }, [ e._v("Results for job: ") ]), e._v(" "), r("small", {
                    staticClass: "ticket"
                }, [ e._v(e._s(e.ticket)) ]) ] ], 2), e._v(" "), e.$LOCAL || "PENDING" != e.resultState ? e.$LOCAL || "EMPTY" != e.resultState ? e.$LOCAL || "RESULT" == e.resultState ? e._e() : r("div", {
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
                        src: t(4833),
                        srcset: t(4833) + " 2x, " + t(5904) + " 3x"
                    }
                }) ]), e._v(" "), r("v-flex", {
                    attrs: {
                        xs8: ""
                    }
                }, [ r("h3", [ e._v("Error! ") ]), e._v(" "), r("p", [ e._v("Start a "), r("v-btn", {
                    attrs: {
                        to: "/search"
                    }
                }, [ e._v("New Search") ]), e._v("?") ], 1) ]) ], 1) ], 1) ], 1) : r("div", {
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
                        src: t(7969),
                        srcset: t(7969) + " 2x, " + t(5515) + " 3x"
                    }
                }) ]), e._v(" "), r("v-flex", {
                    attrs: {
                        xs8: ""
                    }
                }, [ r("h3", [ e._v("No hits found!") ]), e._v(" "), r("p", [ e._v("Start a "), r("v-btn", {
                    attrs: {
                        to: "/search"
                    }
                }, [ e._v("New Search") ]), e._v("?") ], 1) ]) ], 1) ], 1) ], 1) : r("div", {
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
                        src: t(4484),
                        srcset: t(4484) + " 2x, " + t(7940) + " 3x"
                    }
                }) ]), e._v(" "), r("v-flex", {
                    attrs: {
                        xs8: ""
                    }
                }, [ r("h3", [ e._v("Still Pending") ]), e._v(" "), r("p", [ e._v("Please wait a moment") ]) ]) ], 1) ], 1) ], 1), e._v(" "), "RESULT" == e.resultState && e.hits && e.hits.results ? r("template", {
                    slot: "content"
                }, [ r("v-menu", {
                    ref: "menuwrapper",
                    attrs: {
                        "offset-y": "",
                        absolute: ""
                    },
                    scopedSlots: e._u([ {
                        key: "activator",
                        fn: function(n) {
                            var t = n.on;
                            n.attrs;
                            return [ r("div", {
                                staticStyle: {
                                    display: "none"
                                }
                            }, [ e._v(e._s(e.menuActivator = t)) ]) ];
                        }
                    } ], null, !1, 3471006822)
                }, [ e._v(" "), r("v-list", e._l(e.menuItems, (function(n, t) {
                    return r("v-list-item", {
                        key: t,
                        attrs: {
                            "two-line": "",
                            href: n.href,
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [ r("v-list-item-content", [ r("v-list-item-title", [ e._v(e._s(n.label)) ]), e._v(" "), r("v-list-item-subtitle", [ e._v("\n                                    " + e._s(n.accession) + "\n                                ") ]) ], 1) ], 1);
                })), 1) ], 1), e._v(" "), e.hits.results.length > 1 ? r("v-tabs", {
                    staticStyle: {
                        "margin-bottom": "2em"
                    },
                    attrs: {
                        color: e.selectedDatabases > 0 ? e.hits.results[e.selectedDatabases - 1].color : null,
                        "center-active": "",
                        grow: "",
                        "show-arrows": ""
                    },
                    on: {
                        change: function(n) {
                            return e.closeAlignment();
                        }
                    },
                    model: {
                        value: e.selectedDatabases,
                        callback: function(n) {
                            e.selectedDatabases = n;
                        },
                        expression: "selectedDatabases"
                    }
                }, [ r("v-tab", [ e._v("All databases") ]), e._v(" "), e._l(e.hits.results, (function(n) {
                    return r("v-tab", {
                        key: n.db
                    }, [ e._v(e._s(n.db) + " (" + e._s(n.alignments ? Object.values(n.alignments).length : 0) + ")") ]);
                })) ], 2) : e._e(), e._v(" "), e._l(e.hits.results, (function(n, t) {
                    return 0 == e.selectedDatabases || t + 1 == e.selectedDatabases ? r("div", {
                        key: n.db
                    }, [ r("v-flex", {
                        staticClass: "d-flex",
                        style: {
                            "flex-direction": e.$vuetify.breakpoint.xsOnly ? "column" : null
                        }
                    }, [ r("h2", {
                        staticStyle: {
                            "margin-top": "0.5em",
                            "margin-bottom": "1em",
                            display: "inline-block"
                        }
                    }, [ r("span", {
                        staticStyle: {
                            "text-transform": "uppercase"
                        }
                    }, [ e._v(e._s(n.db)) ]), e._v(" "), r("small", [ e._v(e._s(n.alignments ? Object.values(n.alignments).length : 0) + " hits") ]) ]), e._v(" "), r("v-btn-toggle", {
                        staticClass: "ml-auto",
                        attrs: {
                            mandatory: ""
                        },
                        model: {
                            value: e.tableMode,
                            callback: function(n) {
                                e.tableMode = n;
                            },
                            expression: "tableMode"
                        }
                    }, [ r("v-btn", [ e._v("\n                            Graphical\n                        ") ]), e._v(" "), r("v-btn", [ e._v("\n                            Numeric\n                        ") ]) ], 1) ], 1), e._v(" "), r("table", {
                        staticClass: "v-table result-table",
                        staticStyle: {
                            position: "relativ",
                            "margin-bottom": "3em"
                        }
                    }, [ r("colgroup", [ e.isComplex ? [ r("col", {
                        staticStyle: {
                            width: "6.5%"
                        }
                    }), e._v(" "), r("col", {
                        staticStyle: {
                            width: "6.5%"
                        }
                    }) ] : e._e(), e._v(" "), r("col", {
                        staticStyle: {
                            width: "20%"
                        }
                    }), e._v(" "), n.hasDescription ? r("col", {
                        staticStyle: {
                            width: "30%"
                        }
                    }) : e._e(), e._v(" "), n.hasTaxonomy ? r("col", {
                        staticStyle: {
                            width: "20%"
                        }
                    }) : e._e(), e._v(" "), r("col", {
                        staticStyle: {
                            width: "6.5%"
                        }
                    }), e._v(" "), r("col", {
                        staticStyle: {
                            width: "6.5%"
                        }
                    }), e._v(" "), r("col", {
                        staticStyle: {
                            width: "8.5%"
                        }
                    }), e._v(" "), 0 == e.tableMode ? [ r("col", {
                        staticStyle: {
                            width: "26.5%"
                        }
                    }) ] : [ r("col", {
                        staticStyle: {
                            width: "6.5%"
                        }
                    }), e._v(" "), r("col", {
                        staticStyle: {
                            width: "10%"
                        }
                    }), e._v(" "), r("col", {
                        staticStyle: {
                            width: "10%"
                        }
                    }) ], e._v(" "), r("col", {
                        staticStyle: {
                            width: "10%"
                        }
                    }) ], 2), e._v(" "), r("thead", [ e.isComplex ? r("tr", [ r("th", {
                        staticStyle: {
                            "text-align": "center",
                            width: "10%",
                            "border-right": "1px solid #333",
                            "border-bottom": "1px solid #333"
                        },
                        attrs: {
                            colspan: "2"
                        }
                    }, [ e._v("Complex") ]), e._v(" "), r("th", {
                        staticStyle: {
                            "text-align": "center",
                            "border-bottom": "1px solid #333"
                        },
                        attrs: {
                            colspan: 6 + n.hasDescription + n.hasTaxonomy + (1 == e.tableMode ? 2 : 0)
                        }
                    }, [ e._v("Chain") ]) ]) : e._e(), e._v(" "), r("tr", [ e.isComplex ? [ r("th", {
                        staticClass: "thin"
                    }, [ e._v("qTM") ]), e._v(" "), r("th", {
                        staticClass: "thin",
                        staticStyle: {
                            "border-right": "1px solid #333"
                        }
                    }, [ e._v("tTM") ]) ] : e._e(), e._v(" "), r("th", {
                        class: "wide-" + (3 - n.hasDescription - n.hasTaxonomy)
                    }, [ e.isComplex ? [ e._v("\n                                    Chain paring\n                                ") ] : [ e._v("\n                                    Target\n                                ") ] ], 2), e._v(" "), n.hasDescription ? r("th", [ e._v("\n                                Description\n                                "), r("v-tooltip", {
                        attrs: {
                            "open-delay": "300",
                            top: ""
                        },
                        scopedSlots: e._u([ {
                            key: "activator",
                            fn: function(n) {
                                var t = n.on;
                                return [ r("v-icon", e._g({
                                    staticStyle: {
                                        "font-size": "16px",
                                        float: "right"
                                    }
                                }, t), [ e._v(e._s(e.$MDI.HelpCircleOutline)) ]) ];
                            }
                        } ], null, !0)
                    }, [ e._v(" "), r("span", [ e._v("Triple click to select whole cell (for very long identifiers)") ]) ]) ], 1) : e._e(), e._v(" "), n.hasTaxonomy ? r("th", [ e._v("Scientific Name") ]) : e._e(), e._v(" "), r("th", {
                        staticClass: "thin"
                    }, [ e._v("Prob.") ]), e._v(" "), r("th", {
                        staticClass: "thin"
                    }, [ e._v("Seq. Id.") ]), e._v(" "), r("th", {
                        staticClass: "thin"
                    }, [ e._v(e._s("foldseek" == e.$APP && "tmalign" == e.mode ? "TM-score" : "E-Value")) ]), e._v(" "), 1 == e.tableMode ? r("th", {
                        staticClass: "thin"
                    }, [ e._v("Score") ]) : e._e(), e._v(" "), 1 == e.tableMode ? r("th", [ e._v("Query Pos.") ]) : e._e(), e._v(" "), 1 == e.tableMode ? r("th", [ e._v("Target Pos.") ]) : e._e(), e._v(" "), 0 == e.tableMode ? r("th", [ e._v("\n                                Position in query\n                                "), r("v-tooltip", {
                        attrs: {
                            "open-delay": "300",
                            top: ""
                        },
                        scopedSlots: e._u([ {
                            key: "activator",
                            fn: function(n) {
                                var t = n.on;
                                return [ r("v-icon", e._g({
                                    staticStyle: {
                                        "font-size": "16px",
                                        float: "right"
                                    }
                                }, t), [ e._v(e._s(e.$MDI.HelpCircleOutline)) ]) ];
                            }
                        } ], null, !0)
                    }, [ e._v(" "), r("span", [ e._v("The position of the aligned region of the target sequence in the query") ]) ]) ], 1) : e._e(), e._v(" "), r("th", {
                        staticClass: "alignment-action thin"
                    }, [ e._v("Alignment") ]) ], 2) ]), e._v(" "), r("tbody", [ e._l(n.alignments, (function(t, i) {
                        return [ e._l(t, (function(i, a) {
                            return r("tr", {
                                class: [ "hit", {
                                    active: i.active
                                } ]
                            }, [ 0 == a && e.isComplex ? [ r("td", {
                                staticClass: "thin",
                                attrs: {
                                    "data-label": "Query TM-score",
                                    rowspan: t.length
                                }
                            }, [ e._v(e._s(t[0].complexqtm.toFixed(2))) ]), e._v(" "), r("td", {
                                staticClass: "thin",
                                attrs: {
                                    "data-label": "Target TM-score",
                                    rowspan: t.length
                                }
                            }, [ e._v(e._s(t[0].complexttm.toFixed(2))) ]) ] : e._e(), e._v(" "), r("td", {
                                staticClass: "db long",
                                style: {
                                    "border-width": e.isComplex ? "5px" : null,
                                    "border-color": n.color
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
                            }), e._v(" "), e.isComplex ? [ e._v("\n                                    " + e._s(-1 != i.query.lastIndexOf("_") ? i.query.substring(i.query.lastIndexOf("_") + 1) : "") + " ➔ \n                                ") ] : e._e(), e._v(" "), Array.isArray(i.href) ? r("a", {
                                staticStyle: {
                                    "text-decoration": "underline",
                                    color: "#2196f3"
                                },
                                attrs: {
                                    rel: "noopener",
                                    title: i.target
                                },
                                on: {
                                    click: function(n) {
                                        return e.forwardDropdown(n, i.href);
                                    }
                                }
                            }, [ e._v(e._s(i.target)) ]) : r("a", {
                                attrs: {
                                    href: i.href,
                                    target: "_blank",
                                    rel: "noopener",
                                    title: i.target
                                }
                            }, [ e._v(e._s(i.target)) ]) ], 2), e._v(" "), n.hasDescription ? r("td", {
                                staticClass: "long",
                                attrs: {
                                    "data-label": "Description"
                                }
                            }, [ r("span", {
                                attrs: {
                                    title: i.description
                                }
                            }, [ e._v(e._s(i.description)) ]) ]) : e._e(), e._v(" "), n.hasTaxonomy ? r("td", {
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
                            }, [ e._v(e._s(i.taxName)) ]) ]) : e._e(), e._v(" "), r("td", {
                                staticClass: "thin",
                                attrs: {
                                    "data-label": "Probability"
                                }
                            }, [ e._v(e._s(i.prob)) ]), e._v(" "), r("td", {
                                staticClass: "thin",
                                attrs: {
                                    "data-label": "Sequence Identity"
                                }
                            }, [ e._v(e._s(i.seqId)) ]), e._v(" "), r("td", {
                                staticClass: "thin",
                                attrs: {
                                    "data-label": "foldseek" == e.$APP && "tmalign" == e.mode ? "TM-score" : "E-Value"
                                }
                            }, [ e._v(e._s(i.eval)) ]), e._v(" "), 1 == e.tableMode ? r("td", {
                                staticClass: "thin",
                                attrs: {
                                    "data-label": "Score"
                                }
                            }, [ e._v(e._s(i.score)) ]) : e._e(), e._v(" "), 1 == e.tableMode ? r("td", {
                                attrs: {
                                    "data-label": "Query Position"
                                }
                            }, [ e._v(e._s(i.qStartPos) + "-" + e._s(i.qEndPos) + " (" + e._s(i.qLen) + ")") ]) : e._e(), e._v(" "), 1 == e.tableMode ? r("td", {
                                attrs: {
                                    "data-label": "Target Position"
                                }
                            }, [ e._v(e._s(i.dbStartPos) + "-" + e._s(i.dbEndPos) + " (" + e._s(i.dbLen) + ")") ]) : e._e(), e._v(" "), 0 == e.tableMode ? r("td", {
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
                            }) ], 1) : e._e(), e._v(" "), 0 == a ? r("td", {
                                staticClass: "alignment-action",
                                attrs: {
                                    rowspan: e.isComplex ? t.length : 1
                                }
                            }, [ r("button", {
                                staticClass: "v-btn v-btn--icon v-btn--round v-btn--text v-size--default",
                                class: {
                                    "v-btn--outlined": e.alignment && i.target == e.alignment.target,
                                    "theme--dark": e.$vuetify.theme.dark
                                },
                                attrs: {
                                    type: "button"
                                },
                                on: {
                                    click: function(r) {
                                        return e.showAlignment(t, n.db, r);
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
                            }) ]) ]) ]) ]) ]) : e._e() ], 2);
                        })), e._v(" "), e.isComplex ? r("tr", {
                            staticStyle: {
                                height: "15px"
                            },
                            attrs: {
                                "aria-hidden": "true"
                            }
                        }) : e._e() ];
                    })) ], 2) ]) ], 1) : e._e();
                })) ], 2) : e._e() ], 2) ], 1) ], 1), e._v(" "), r("portal", [ null != e.alignment ? r("panel", {
                    staticClass: "alignment",
                    style: "top: " + e.alnBoxOffset + "px;"
                }, [ r("AlignmentPanel", {
                    key: "ap-" + e.alignment.id,
                    attrs: {
                        slot: "content",
                        alignments: e.alignment,
                        lineLen: e.fluidLineLen,
                        hits: e.hits
                    },
                    slot: "content"
                }) ], 1) : e._e() ], 1) ], 1);
            };
            z._withStripped = !0;
            var G = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("div", {
                    class: [ "panel-root", null != e.elevation ? "elevation-" + e.elevation : null ]
                }, [ e.$slots.header || e.header ? t("v-toolbar", {
                    attrs: {
                        text: "",
                        dense: "",
                        dark: ""
                    }
                }, [ e.collapsible ? t("v-btn", {
                    staticStyle: {
                        "margin-top": "0",
                        "margin-left": "-15px"
                    },
                    attrs: {
                        icon: "",
                        plain: "",
                        "aria-expanded": e.isCollapsed ? "false" : "true",
                        "aria-controls": e.uuid
                    },
                    on: {
                        click: function(n) {
                            e.isCollapsed = !e.isCollapsed;
                        }
                    }
                }, [ e.isCollapsed ? t("v-icon", [ e._v("\n                " + e._s(e.$MDI.PlusBox) + "\n            ") ]) : t("v-icon", [ e._v("\n                " + e._s(e.$MDI.MinusBox) + "\n            ") ]) ], 1) : e._e(), e._v(" "), t("span", {
                    staticClass: "text-h6 align-end"
                }, [ e.$slots.header ? e._t("header") : [ e._v(e._s(e.header)) ] ], 2), e._v(" "), t("v-spacer"), e._v(" "), e._t("toolbar-extra") ], 2) : e._e(), e._v(" "), !e.isCollapsed || e.renderCollapsed ? t("v-card", {
                    class: [ "panel", {
                        "d-flex": e.flex
                    }, {
                        "force-fill-height": e.fillHeight
                    } ],
                    style: [ {
                        display: e.isCollapsed ? "none !important" : null
                    } ],
                    attrs: {
                        rounded: "0",
                        id: e.uuid
                    }
                }, [ e.$slots.desc ? t("v-card-text", {
                    staticClass: "subheading justify"
                }, [ e._t("desc") ], 2) : e._e(), e._v(" "), e.$slots.content ? t("v-card-text", {
                    class: [ "panel-content", "justify", {
                        "d-flex": e.flex
                    } ]
                }, [ e._t("content") ], 2) : e._e() ], 1) : e._e() ], 1);
            };
            G._withStripped = !0;
            var Q = 0;
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
                    this.uuid = "panel-" + Q.toString(), Q += 1;
                }
            };
            t(9146);
            var Z = t(3453), $ = t.n(Z), Y = t(920), W = t(5893), K = t(5255), J = t(4786), X = t(2515), ee = t(241), ne = (0, 
            V.Z)(H, G, [], !1, null, "0d9b5935", null);
            $()(ne, {
                VBtn: Y.Z,
                VCard: W.Z,
                VCardText: K.ZB,
                VIcon: J.Z,
                VSpacer: X.Z,
                VToolbar: ee.Z
            }), ne.options.__file = "frontend/Panel.vue";
            const te = ne.exports;
            var re = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("div", {
                    staticClass: "alignment-panel",
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                }, [ t("div", {
                    staticClass: "alignment-wrapper-outer"
                }, [ t("div", {
                    staticStyle: {
                        "line-height": "1.2em",
                        display: "flex",
                        "flex-direction": "row",
                        width: "100%",
                        "justify-content": "space-between",
                        "margin-bottom": "1em"
                    }
                }, [ "foldseek" == e.$APP ? t("small", [ e._v("\n                Select target residues to highlight their structure."), t("br", {
                    staticStyle: {
                        height: "0.2em"
                    }
                }), e._v("\n                Click on highlighted sequences to dehighlight the corresponding chain.\n            ") ]) : e._e(), e._v(" "), t("v-btn", {
                    attrs: {
                        small: "",
                        title: "Clear sequence selection",
                        disabled: e.hasSelection
                    },
                    on: {
                        click: e.clearAllSelection
                    }
                }, [ e._v("\n                " + e._s(e.alignments[0].hasOwnProperty("complexu") ? "Clear all selections" : "Clear selection") + " \n                "), t("v-icon", {
                    staticStyle: {
                        width: "16px"
                    }
                }, [ e._v(e._s(e.$MDI.CloseCircle)) ]) ], 1) ], 1), e._v(" "), e._l(e.alignments, (function(n, r) {
                    return [ e._v("\n            " + e._s(-1 != n.query.lastIndexOf("_") ? n.query.substring(n.query.lastIndexOf("_") + 1) : "") + " ➔ " + e._s(n.target) + "\n            "), t("Alignment", {
                        key: "aln2-" + n.id,
                        ref: "alignments",
                        refInFor: !0,
                        attrs: {
                            alnIndex: r,
                            alignment: n,
                            lineLen: e.lineLen,
                            queryMap: e.queryMaps[r],
                            targetMap: e.targetMaps[r],
                            showhelp: r == e.alignments.length - 1,
                            highlights: e.highlights[r]
                        },
                        on: {
                            residueSelectStart: e.onResidueSelectStart,
                            residuePointerUp: e.onResiduePointerUp
                        }
                    }) ];
                })) ], 2), e._v(" "), "foldseek" == e.$APP ? t("div", {
                    staticClass: "alignment-structure-wrapper"
                }, [ t("StructureViewer", {
                    key: "struc2-" + e.alignments[0].id,
                    ref: "structureViewer",
                    attrs: {
                        alignments: e.alignments,
                        highlights: e.structureHighlights,
                        hits: e.hits,
                        bgColorLight: "white",
                        bgColorDark: "#1E1E1E",
                        qColor: "lightgrey",
                        tColor: "red",
                        qRepr: "cartoon",
                        tRepr: "cartoon"
                    }
                }) ], 1) : e._e() ]);
            };
            re._withStripped = !0;
            var ie = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("div", {
                    staticClass: "alignment-wrapper-inner",
                    attrs: {
                        id: e.alnIndex
                    }
                }, e._l(Math.max(1, Math.ceil(e.alignment.alnLength / e.lineLen)), (function(n) {
                    return t("span", {
                        key: n,
                        staticClass: "monospace"
                    }, [ t("span", {
                        ref: "lines",
                        refInFor: !0,
                        staticClass: "line",
                        attrs: {
                            id: n
                        }
                    }, [ t("span", [ e._v("Q " + e._s(e.padNumber(e.getQueryRowStartPos(n), (Math.max(e.alignment.qStartPos, e.alignment.dbStartPos) + e.alignment.alnLength + "").length, " "))) ]), e._v(" "), t("ResidueSpan", {
                        attrs: {
                            sequenceType: "query"
                        }
                    }, [ e._v(e._s(e.alignment.qAln.substring((n - 1) * e.lineLen, (n - 1) * e.lineLen + e.lineLen))) ]), t("br"), t("span", [ e._v(e._s(" ".repeat(3 + (Math.max(e.alignment.qStartPos, e.alignment.dbStartPos) + e.alignment.alnLength + "").length))) ]), t("span", {
                        staticClass: "residues diff"
                    }, [ e._v(e._s(e.formatAlnDiff(e.alignment.qAln.substring((n - 1) * e.lineLen, (n - 1) * e.lineLen + e.lineLen), e.alignment.dbAln.substring((n - 1) * e.lineLen, (n - 1) * e.lineLen + e.lineLen)))) ]), t("br"), t("span", [ e._v("T " + e._s(e.padNumber(e.getTargetRowStartPos(n), (Math.max(e.alignment.qStartPos, e.alignment.dbStartPos) + e.alignment.alnLength + "").length, " "))) ]), e._v(" "), t("ResidueSpan", {
                        attrs: {
                            sequenceType: "target",
                            selectionStart: e.getSelectionStart(n),
                            selectionEnd: e.getSelectionEnd(n)
                        },
                        on: {
                            selectstart: function(t) {
                                return e.onSelectStart(t, e.alnIndex, n);
                            },
                            pointerup: function(t) {
                                return e.onPointerUp(t, e.alnIndex, n);
                            }
                        }
                    }, [ e._v(e._s(e.alignment.dbAln.substring((n - 1) * e.lineLen, (n - 1) * e.lineLen + e.lineLen))) ]) ], 1), t("br") ]);
                })), 0);
            };
            ie._withStripped = !0;
            var ae = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return e.selectionStart || e.selectionEnd ? t("span", {
                    staticClass: "residues",
                    class: e.sequenceType,
                    on: {
                        pointerup: e.emitPointerUpEvent,
                        selectstart: e.emitSelectStartEvent
                    }
                }, [ t("span", [ e._v(e._s(e.$slots.default[0].text.slice(0, e.selectionStart))) ]), t("span", {
                    staticClass: "selected",
                    on: {
                        click: e.emitClickHighlight
                    }
                }, [ e._v(e._s(e.$slots.default[0].text.slice(e.selectionStart, e.selectionEnd))) ]), t("span", [ e._v(e._s(e.$slots.default[0].text.slice(e.selectionEnd, e.$slots.default[0].text.length))) ]) ]) : t("span", {
                    staticClass: "residues",
                    class: e.sequenceType,
                    on: {
                        pointerup: e.emitPointerUpEvent,
                        selectstart: e.emitSelectStartEvent
                    }
                }, [ e._t("default") ], 2);
            };
            ae._withStripped = !0;
            const se = {
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
                    emitPointerUpEvent: function(e) {
                        this.$emit("pointerup", e);
                    },
                    emitSelectStartEvent: function(e) {
                        this.$emit("selectstart", e);
                    },
                    emitClickHighlight: function(e) {
                        this.$emit("clickHighlight", e);
                    }
                }
            };
            t(5367);
            var oe = (0, V.Z)(se, ae, [], !1, null, null, null);
            oe.options.__file = "frontend/ResidueSpan.vue";
            const le = oe.exports;
            var ce = [ "AG", "AS", "DE", "DN", "ED", "EK", "EQ", "FL", "FM", "FW", "FY", "GA", "HN", "HQ", "HY", "IL", "IM", "IV", "KE", "KQ", "KR", "LF", "LI", "LM", "LV", "MF", "MI", "ML", "MV", "ND", "NH", "NQ", "NS", "QE", "QH", "QK", "QN", "QR", "RK", "RQ", "SA", "SN", "ST", "TS", "VI", "VL", "VM", "WF", "WY", "YF", "YH", "YW" ];
            const ue = {
                props: [ "alignment", "lineLen", "queryMap", "targetMap", "showhelp", "alnIndex", "highlights" ],
                components: {
                    ResidueSpan: le
                },
                methods: {
                    getSelectionStart: function(e) {
                        return e > 0 && e <= this.highlights.length ? this.highlights[e - 1][0] : 0;
                    },
                    getSelectionEnd: function(e) {
                        return e > 0 && e <= this.highlights.length ? this.highlights[e - 1][1] : 0;
                    },
                    getQueryIndex: function(e) {
                        return this.queryMap[e];
                    },
                    getTargetIndex: function(e) {
                        return this.targetMap[e];
                    },
                    getFirstResidueNumber: function(e, n) {
                        for (var t = this.lineLen * (n - 1); null === e[t]; ) t--;
                        return e[t];
                    },
                    getQueryRowStartPos: function(e) {
                        return this.getFirstResidueNumber(this.queryMap, e);
                    },
                    getTargetRowStartPos: function(e) {
                        return this.getFirstResidueNumber(this.targetMap, e);
                    },
                    formatAlnDiff: function(e, n) {
                        if (e.length != n.length) return "";
                        for (var t = "", r = 0; r < e.length; r++) e[r] == n[r] ? t += e[r] : -1 != ce.indexOf(e[r] + n[r]) ? t += "+" : t += " ";
                        return t;
                    },
                    padNumber: function(e, n, t) {
                        return Array(n - String(e).length + 1).join(t || "0") + e;
                    },
                    onSelectStart: function(e, n, t) {
                        this.$emit("residueSelectStart", e, n, t);
                    },
                    onPointerUp: function(e, n, t) {
                        this.$emit("residuePointerUp", e, n, t);
                    }
                }
            };
            t(603);
            var de = (0, V.Z)(ue, ie, [], !1, null, null, null);
            de.options.__file = "frontend/Alignment.vue";
            function he(e, n) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                        if (!e) return;
                        if ("string" == typeof e) return Ae(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ae(e, n);
                    }(e)) || n && e && "number" == typeof e.length) {
                        t && (e = t);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        t = t.call(e);
                    },
                    n: function() {
                        var e = t.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        o = !0, a = e;
                    },
                    f: function() {
                        try {
                            s || null == t.return || t.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function Ae(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            function pe(e) {
                var n, t = 0, r = he(e.closest("span.residues").querySelectorAll("span"));
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var i = n.value;
                        if (i === e) break;
                        t += i.textContent.length;
                    }
                } catch (e) {
                    r.e(e);
                } finally {
                    r.f();
                }
                return t;
            }
            function ge(e, n) {
                var t, r = 0, i = he(e);
                try {
                    for (i.s(); !(t = i.n()).done; ) {
                        t.value === n && r++;
                    }
                } catch (e) {
                    i.e(e);
                } finally {
                    i.f();
                }
                return r;
            }
            const me = {
                components: {
                    StructureViewer: function() {
                        return null;
                    },
                    Alignment: de.exports
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
                        return !this.structureHighlights.some((function(e) {
                            return null !== e;
                        }));
                    }
                },
                methods: {
                    getFirstResidueNumber: function(e, n) {
                        for (var t = this.lineLen * (n - 1); null === e[t]; ) t--;
                        return e[t];
                    },
                    getQueryRowStartPos: function(e, n) {
                        return this.getFirstResidueNumber(this.queryMaps[e], n);
                    },
                    getTargetRowStartPos: function(e, n) {
                        return this.getFirstResidueNumber(this.targetMaps[e], n);
                    },
                    setEmptyHighlight: function() {
                        var e = this;
                        this.highlights = this.alignments.map((function(n) {
                            return new Array(Math.ceil(n.qAln.length / e.lineLen)).fill([ void 0, void 0 ]);
                        }));
                    },
                    setEmptyStructureHighlight: function() {
                        this.structureHighlights = new Array(this.alignments.length).fill(null);
                    },
                    clearAllSelection: function() {
                        this.setEmptyHighlight(), this.setEmptyStructureHighlight();
                    },
                    setAlignmentSelection: function(e) {
                        this.setEmptyHighlight();
                        var n, t = he(e);
                        try {
                            for (t.s(); !(n = t.n()).done; ) for (var r = (0, b.Z)(n.value, 6), i = r[0], a = r[1], s = r[2], o = r[3], l = r[4], c = (r[5], 
                            a); c <= o; c++) this.highlights[i][c] = c === a ? [ s, c === o ? l : this.lineLen ] : c === o ? [ 0, l ] : [ 0, this.lineLen ];
                        } catch (e) {
                            t.e(e);
                        } finally {
                            t.f();
                        }
                    },
                    updateMaps: function() {
                        if (this.alignments) {
                            this.queryMaps = [], this.targetMaps = [];
                            var e, n = he(this.alignments);
                            try {
                                for (n.s(); !(e = n.n()).done; ) {
                                    var t = e.value;
                                    this.queryMaps.push(k(t.qStartPos, t.qAln)), this.targetMaps.push(k(t.dbStartPos, t.dbAln));
                                }
                            } catch (e) {
                                n.e(e);
                            } finally {
                                n.f();
                            }
                        }
                    },
                    onResidueSelectStart: function(e, n, t) {
                        this.isSelecting = !0, document.querySelector(".alignment-wrapper-outer").classList.add("inselection");
                    },
                    onResiduePointerUp: function(e, n, t) {
                        if (!this.isSelecting) {
                            var r = this.alignments[n];
                            return this.highlights.splice(n, 1, new Array(Math.ceil(r.qAln.length / this.lineLen)).fill([ void 0, void 0 ])), 
                            this.structureHighlights.splice(n, 1, null), void window.getSelection().removeAllRanges();
                        }
                        for (var i = window.getSelection(), a = [], s = "", o = null, l = null, c = 0, u = 0, d = {}, h = 0; h < i.rangeCount; h++) {
                            var A = i.getRangeAt(h);
                            l = A.startContainer.parentElement.closest(".alignment-wrapper-inner"), u = parseInt(l.id), 
                            c = parseInt(A.startContainer.parentElement.closest(".line").id);
                            var p = A.startContainer, g = A.endContainer, m = 3 === p.nodeType ? A.startOffset + pe(p.parentElement) : 0, f = 3 === g.nodeType ? A.endOffset + pe(g.parentElement) : this.lineLen;
                            if (o) {
                                if (l != o) {
                                    a.push([ parseInt(o.id), d, s ]), s = "", o = l;
                                    var v = A.startContainer.textContent.slice(0, m);
                                    d = {
                                        startLine: c,
                                        startOffset: m,
                                        seqStart: this.getTargetRowStartPos(u, c) + m - ge(v, "-")
                                    };
                                }
                            } else {
                                o = l;
                                var y = A.startContainer.textContent.slice(0, A.startOffset);
                                d = {
                                    startLine: c,
                                    startOffset: m,
                                    seqStart: this.getTargetRowStartPos(u, c) + m - ge(y, "-")
                                };
                            }
                            s += A.toString(), d.endLine = c, d.endOffset = f;
                        }
                        a.push([ parseInt(o.id), d, s ]);
                        for (var C = 0, w = a; C < w.length; C++) {
                            var x = (0, b.Z)(w[C], 3), S = x[0], M = x[1].seqStart, T = x[2];
                            this.structureHighlights.splice(S, 1, [ M, T.replace(/[-]/g, "").length ]);
                        }
                        this.setAlignmentSelection(a.map((function(e) {
                            var n = (0, b.Z)(e, 3), t = n[0], r = n[1];
                            return [ t, r.startLine - 1, r.startOffset, r.endLine - 1, r.endOffset, n[2].length ];
                        }))), this.resetUserSelect(), window.getSelection().removeAllRanges();
                    },
                    resetUserSelect: function() {
                        this.isSelecting = !1, document.querySelectorAll(".inselection").forEach((function(e) {
                            e.classList.remove("inselection");
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
            t(5685), t(2237);
            var fe = (0, V.Z)(me, re, [], !1, null, "89abb500", null);
            $()(fe, {
                VBtn: Y.Z,
                VIcon: J.Z
            }), fe.options.__file = "frontend/AlignmentPanel.vue";
            const be = fe.exports;
            var ve = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("div", {
                    staticClass: "ruler"
                }, [ t("div", {
                    staticClass: "query",
                    class: {
                        reversed: e.reversed
                    },
                    style: {
                        left: e.queryLeft + "%",
                        right: e.queryRight + "%"
                    }
                }, [ t("div", {
                    staticClass: "chevron-start",
                    style: {
                        "background-color": e.color
                    }
                }), e._v(" "), t("div", {
                    staticClass: "chevron-mid",
                    style: {
                        "background-color": e.color
                    }
                }), e._v(" "), t("div", {
                    staticClass: "chevron-end",
                    style: {
                        "background-color": e.color
                    }
                }) ]), e._v(" "), t("div", {
                    staticClass: "tick-label",
                    style: {
                        left: e.queryLeft + "%"
                    }
                }, [ e._v(e._s(e.minStart)) ]), e._v(" "), t("div", {
                    staticClass: "tick-label",
                    style: {
                        right: e.queryRight + "%",
                        "margin-left": 0,
                        "margin-right": "-25px"
                    }
                }, [ e._v(e._s(e.maxEnd)) ]) ]);
            };
            ve._withStripped = !0;
            const ye = {
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
                        var e = this;
                        return Array.from({
                            length: this.numTicks + 1
                        }, (function(n, t) {
                            return t / e.numTicks * 100;
                        }));
                    }
                }
            };
            t(5941);
            var Ce = (0, V.Z)(ye, ve, [], !1, null, "2b7861b2", null);
            Ce.options.__file = "frontend/Ruler.vue";
            function we(e) {
                for (var n = 0; e; ) n += e.offsetTop, e = e.offsetParent;
                return n;
            }
            var xe, Se, Me, Te;
            const Ie = {
                name: "ResultView",
                components: {
                    Panel: te,
                    AlignmentPanel: be,
                    Ruler: Ce.exports
                },
                data: function() {
                    return {
                        alignment: null,
                        activeTarget: null,
                        alnBoxOffset: 0,
                        selectedDatabases: 0,
                        tableMode: 0,
                        menuActivator: null,
                        menuItems: []
                    };
                },
                props: {
                    ticket: "",
                    error: "",
                    hits: null
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
                        var e, n;
                        return null !== (e = null === (n = this.hits) || void 0 === n ? void 0 : n.mode) && void 0 !== e ? e : "";
                    },
                    isComplex: function() {
                        var e;
                        return null != (null === (e = this.hits) || void 0 === e || null === (e = e.results) || void 0 === e || null === (e = e[0]) || void 0 === e || null === (e = e.alignments) || void 0 === e || null === (e = e[0]) || void 0 === e || null === (e = e[0]) || void 0 === e ? void 0 : e.complexqtm);
                    },
                    fluidLineLen: function() {
                        return this.$vuetify.breakpoint.xsOnly ? 30 : this.$vuetify.breakpoint.smAndDown ? 45 : this.$vuetify.breakpoint.mdAndDown ? 60 : 80;
                    },
                    resultState: function() {
                        if ("" != this.error) return "ERROR";
                        if (null == this.hits) return "PENDING";
                        if (!this.hits.results) return "ERROR";
                        if (0 == this.hits.results.length) return "EMPTY";
                        for (var e in this.hits.results) if (null != this.hits.results[e].alignments) return "RESULT";
                        return "ERROR";
                    }
                },
                methods: {
                    log: function(e) {
                        return console.log(e), e;
                    },
                    showAlignment: function(e, n, t) {
                        var r = this;
                        this.alignment === e ? this.closeAlignment() : (this.alignment = null, this.$nextTick((function() {
                            e.map((function(e) {
                                return e.db = n;
                            })), r.alignment = e, r.activeTarget = t.target.closest(".alignment-action"), r.alnBoxOffset = we(r.activeTarget) + r.activeTarget.offsetHeight;
                        })));
                    },
                    closeAlignment: function() {
                        this.alignment = null, this.activeTarget = null;
                    },
                    handleAlignmentBoxResize: (xe = function() {
                        null != this.activeTarget && (this.alnBoxOffset = we(this.activeTarget) + this.activeTarget.offsetHeight);
                    }, Se = 32, Me = !1, function() {
                        var e = this, n = arguments, t = Me && !Te;
                        clearTimeout(Te), Te = setTimeout((function() {
                            Te = null, Me || xe.apply(e, n);
                        }), Se), t && xe.apply(e, n);
                    }),
                    forwardDropdown: function(e, n) {
                        this.menuActivator && (this.menuItems = n, this.menuActivator.click(e));
                    }
                }
            };
            t(5264);
            var ke = t(6584), Ee = t(6530), Le = t(683), Oe = t(9456), Re = t(2545), Ne = t(3347), Be = t(2641), De = t(245), qe = t(756), Pe = t(7259), _e = t(6640), Fe = (0, 
            V.Z)(Ie, z, [], !1, null, null, null);
            $()(Fe, {
                VBtn: Y.Z,
                VBtnToggle: ke.Z,
                VContainer: Ee.Z,
                VFlex: Le.Z,
                VIcon: J.Z,
                VLayout: Oe.Z,
                VList: Re.Z,
                VListItem: Ne.Z,
                VListItemContent: Be.km,
                VListItemSubtitle: Be.oZ,
                VListItemTitle: Be.V9,
                VMenu: De.Z,
                VTab: qe.Z,
                VTabs: Pe.Z,
                VTooltip: _e.Z
            }), Fe.options.__file = "frontend/ResultView.vue";
            const Ve = Fe.exports;
            var je = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("div", {
                    staticStyle: {
                        overflow: "visible",
                        height: "100%"
                    }
                }, [ t("v-app-bar", {
                    attrs: {
                        app: "",
                        height: "48px",
                        fixed: "",
                        "clipped-left": ""
                    }
                }, [ t("img", {
                    attrs: {
                        height: "28px",
                        src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTAiIHZpZXdCb3g9IjAgMCA0NjggMzA2Ij48cGF0aCBkPSJNMzcyIDIwMnMxNC0xIDM3LTE5YzIzLTE3IDQwLTQ5IDU1LTU1bC0xMTQgMjQtNCAzMiAyNiAxOFoiIHN0eWxlPSJmaWxsOiNmN2QxOGE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik02MiAxMzlTODcgMjEgMjY5IDJsMSAxLTQ2IDYxcy00MC0zLTU1IDdjMCAwIDE5LTEzIDY5LTRzNTAtMjAgNTAtMjAgOCAyMiAwIDI5bDI5IDE0LTE4IDRzMTI1LTEyIDE2NyAzM2MwIDAtMjYgMTctNjAgMjAtNTYgNS02MiAyMi02MiAyMnMyNS0xMCA0MyA0bC0yMiA5czE1IDggMTUgMjNsLTI2IDEwczM2LTE4IDUyLTdsLTI0IDE4czIzIDMgMzggMTVsLTMyIDhzMTUgMiAyNyAzMWwtNDUtNnM3IDkgNCAzMGwtMjUtMjJzLTE3IDQ2LTE1OCAyQzQ5IDI0MCA1NiAyMjEgNTAgMTkxbC0yNi0xczItMTUgMTgtMjFMMiAxNDJzMjQtMTMgNDItOGwtOC0yNXMyOSAxMSAyNiAzMFoiIHN0eWxlPSJmaWxsOiNlMTMyMTM7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0xMDEgMjUzYy00Ni0yMyA4LTEzNCAzNy0xNTEgMjgtMTYgNTcgNyA2MyAxOSAwIDAgMjMtMTggNTctN3M0OSA0NyAzNiAxMTVjLTggNDEtMjQgNTgtMzUgNjUtNyA0LTE0IDUtMjEgMy0yNS02LTEwNS0yNy0xMzctNDRaIiBzdHlsZT0iZmlsbDojZjdkMThhO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0LjQ4cHgiLz48cGF0aCBkPSJNMTM2IDExMnMtNDEtMTAtNTYgMThjLTE1IDI3IDEyIDM4IDI3IDQzIDE2IDQgNDcgNCA1Ny0xM3MtMS0zOC0yOC00OFoiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0xMTYgMTYwYzE2IDggMzQtMzcgMjAtNDQtMTQtNi00MCAzNS0yMCA0NFoiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NC40OHB4Ii8+PHBhdGggZD0iTTI4NCAxNDhjLTQxLTE1LTU5IDUtNjUgMjJzMiA0NCA0MiA1MyA1MC00IDU2LTE5YzUtMTYgNi00MS0zMy01NloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0yNDggMTk5YzE5IDkgNDctNDEgMjMtNTJzLTQzIDQzLTIzIDUyWm0tODUtMTVjMS04IDIwLTEgMjAgNSAwIDctOSA4LTEyIDctNC0xLTktNi04LTEyWiIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0LjQ4cHgiLz48cGF0aCBkPSJNMTMyIDEyMGM3IDMtMiAxNS02IDEyczMtMTQgNi0xMlptMTI4IDMwYzcgMy0yIDE1LTYgMTItNC0yIDMtMTQgNi0xMloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm8iLz48cGF0aCBkPSJtMTE1IDIxMiA5LTRzLTggNyAwIDEzYzggNyAyNS00IDQ2LTEgMjEgNCA0MCAxOSA1NSAyMSAxNiAzIDI0IDEgMjMtNC0xLTYgNSA3IDUgNyIgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NC40OHB4Ii8+PC9zdmc+"
                    }
                }), e._v("\n         \n        "), t("v-app-bar-title", {
                    staticClass: "ml-2"
                }, [ e._v(e._s(e.title)) ]), e._v(" "), t("v-spacer"), e._v(" "), t("v-file-input", {
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
                        change: e.uploadData
                    }
                }), e._v(" "), t("v-toolbar-items", [ t("v-btn", {
                    attrs: {
                        text: ""
                    },
                    on: {
                        click: e.downloadData
                    }
                }, [ t("v-icon", [ e._v("\n                    " + e._s(e.$MDI.FileDownloadOutline) + "\n                ") ]) ], 1), e._v(" "), e._l(e.$STRINGS.NAV_URL_COUNT - 0, (function(n) {
                    return t("v-btn", {
                        key: n,
                        staticClass: "hidden-sm-and-down",
                        attrs: {
                            text: "",
                            rel: "external noopener",
                            target: "_blank",
                            href: e.$STRINGS["NAV_URL_" + n]
                        }
                    }, [ e._v(e._s(e.$STRINGS["NAV_TITLE_" + n])) ]);
                })) ], 2) ], 1), e._v(" "), e.hasMainContent ? [ e._t("default") ] : [ t("v-container", {
                    attrs: {
                        "grid-list-md": "",
                        fluid: "",
                        "pa-2": ""
                    }
                }, [ t("v-layout", {
                    attrs: {
                        wrap: ""
                    }
                }, [ t("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [ t("v-card", {
                    attrs: {
                        rounded: "0"
                    }
                }, [ t("v-card-title", {
                    staticClass: "mb-0 pa-4",
                    attrs: {
                        "primary-title": ""
                    }
                }, [ e._v("\n                            No data loaded\n                        ") ]) ], 1) ], 1) ], 1) ], 1) ], e._v(" "), t("v-container", {
                    staticStyle: {
                        "margin-bottom": "500px"
                    },
                    attrs: {
                        "grid-list-md": "",
                        fluid: "",
                        "pa-2": ""
                    }
                }, [ t("v-layout", {
                    attrs: {
                        wrap: ""
                    }
                }, [ t("v-flex", {
                    attrs: {
                        xs12: ""
                    }
                }, [ t("v-card", {
                    attrs: {
                        rounded: "0"
                    }
                }, [ t("v-card-title", {
                    staticClass: "pb-0 mb-0",
                    attrs: {
                        "primary-title": ""
                    }
                }, [ t("div", {
                    staticClass: "text-h5 mb-0"
                }, [ e._v("Reference") ]) ]), e._v(" "), t("v-card-title", {
                    staticClass: "pt-0 mt-0",
                    attrs: {
                        "primary-title": ""
                    }
                }, [ t("p", {
                    staticClass: "text-subtitle-2 mb-0",
                    domProps: {
                        innerHTML: e._s(e.$STRINGS.CITATION)
                    }
                }) ]) ], 1) ], 1) ], 1) ], 1) ], 2);
            };
            je._withStripped = !0;
            const Ue = {
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
                    uploadData: function(e) {
                        var n = this;
                        if (e) {
                            var t = new FileReader;
                            t.addEventListener("load", (function(e) {
                                var t = JSON.parse(e.target.result);
                                n.$emit("uploadData", t);
                            })), t.readAsText(e);
                        }
                    },
                    downloadData: function() {
                        this.$emit("downloadData");
                    }
                }
            };
            t(4869), t(55);
            var ze = t(1690), Ge = t(8895), Qe = t(9955), He = t(3845), Ze = (0, V.Z)(Ue, je, [], !1, null, "1e22231c", null);
            $()(Ze, {
                VAppBar: ze.Z,
                VAppBarTitle: Ge.Z,
                VBtn: Y.Z,
                VCard: W.Z,
                VCardTitle: K.EB,
                VContainer: Ee.Z,
                VFileInput: Qe.Z,
                VFlex: Le.Z,
                VIcon: J.Z,
                VLayout: Oe.Z,
                VSpacer: X.Z,
                VToolbarItems: He.lj
            }), Ze.options.__file = "frontend/Local.vue";
            const $e = Ze.exports, Ye = {
                name: "ResultLocal",
                mixins: [ U ],
                components: {
                    ResultView: Ve,
                    Local: $e
                },
                data: function() {
                    return {
                        currentIndex: 0
                    };
                },
                mounted: function() {
                    var e = this;
                    document.onreadystatechange = function() {
                        if ("complete" == document.readyState) {
                            var n = document.getElementById("data");
                            if (!n) return null;
                            var t = JSON.parse(n.textContent);
                            e.fetchData(t);
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
                    changeResult: function(e) {
                        this.currentIndex = e, this.setColorScheme();
                    },
                    handleUploadData: function(e) {
                        this.fetchData(e);
                    },
                    handleDownloadData: function() {
                        if (!this.hits) return null;
                        I(this.hits, "".concat("foldmason", "-").concat(T(), ".json"));
                    },
                    resetProperties: function() {
                        this.ticket = "", this.error = "", this.mode = "", this.hits = null, this.selectedDatabases = 0, 
                        this.tableMode = 0;
                    },
                    fetchData: function(e) {
                        this.resetProperties(), this.hits = function(e) {
                            var n, t = [], r = y(e);
                            try {
                                for (r.s(); !(n = r.n()).done; ) {
                                    var i = n.value;
                                    t.push(M(i));
                                }
                            } catch (e) {
                                r.e(e);
                            } finally {
                                r.f();
                            }
                            return t;
                        }(e);
                    }
                }
            };
            t(2556), t(8973);
            var We = (0, V.Z)(Ye, m, [], !1, null, "54679682", null);
            $()(We, {
                VTab: qe.Z,
                VTabs: Pe.Z
            }), We.options.__file = "frontend/ResultLocal.vue";
            const Ke = We.exports;
            var Je = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("Local", {
                    attrs: {
                        title: "FoldMason Results"
                    },
                    on: {
                        uploadData: e.handleUploadData,
                        downloadData: e.handleDownloadData
                    },
                    scopedSlots: e._u([ {
                        key: "default",
                        fn: function() {
                            return [ e.entries.length > 0 ? t("MSA", {
                                key: e.key,
                                attrs: {
                                    entries: e.entries,
                                    scores: e.scores,
                                    statistics: e.statistics,
                                    tree: e.tree
                                }
                            }) : e._e() ];
                        },
                        proxy: !0
                    } ])
                });
            };
            Je._withStripped = !0;
            var Xe = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("div", [ t("v-container", {
                    staticStyle: {
                        overflow: "visible",
                        height: "100%"
                    },
                    attrs: {
                        fluid: "",
                        "pa-2": ""
                    }
                }, [ t("v-row", [ t("v-col", {
                    staticClass: "flex-col"
                }, [ t("v-card", {
                    staticStyle: {
                        height: "100%"
                    }
                }, [ t("v-card-title", [ e._v("Summary") ]), e._v(" "), t("v-card-text", [ t("v-simple-table", {
                    staticClass: "settings auto-height-table",
                    staticStyle: {
                        height: "100%"
                    },
                    attrs: {
                        id: "settings"
                    }
                }, [ t("tbody", [ e.$LOCAL && e.statistics.hasOwnProperty("db") ? t("tr", [ t("td", [ e._v("Database") ]), e._v(" "), t("td", {
                    attrs: {
                        id: "msa-database"
                    }
                }, [ e._v(e._s(e.statistics.db)) ]) ]) : e._e(), e._v(" "), e.$LOCAL && e.statistics.hasOwnProperty("msaFile") ? t("tr", [ t("td", [ e._v("MSA file") ]), e._v(" "), t("td", {
                    attrs: {
                        id: "msa-file"
                    }
                }, [ e._v(e._s(e.statistics.msaFile)) ]) ]) : e._e(), e._v(" "), e.statistics.hasOwnProperty("msaLDDT") ? t("tr", [ t("td", [ e._v("MSA LDDT") ]), e._v(" "), t("td", {
                    attrs: {
                        id: "msa-lddt"
                    }
                }, [ e._v(e._s(e.statistics.msaLDDT.toFixed(3))) ]) ]) : e._e(), e._v(" "), e.statistics.hasOwnProperty("cmdString") ? t("tr", [ t("td", [ e._v("Command") ]), e._v(" "), t("td", {
                    attrs: {
                        id: "msa-cmd"
                    }
                }, [ e._v(e._s(e.statistics.cmdString)) ]) ]) : e._e() ]) ]) ], 1) ], 1) ], 1), e._v(" "), e.tree ? t("v-col", {
                    staticClass: "flex-col"
                }, [ t("v-card", {
                    staticClass: "fill-height",
                    staticStyle: {
                        position: "relative"
                    }
                }, [ t("v-card-title", {
                    staticStyle: {
                        position: "absolute",
                        left: "0",
                        top: "0",
                        margin: "0",
                        padding: "16px",
                        "z-index": "1"
                    }
                }, [ e._v("Guide Tree") ]), e._v(" "), t("Tree", {
                    attrs: {
                        newick: e.tree,
                        order: e.entries.map((function(e) {
                            return e.name;
                        })),
                        selection: e.structureViewerSelection.map((function(n) {
                            return e.entries[n].name;
                        })),
                        reference: e.structureViewerReference
                    },
                    on: {
                        newStructureSelection: e.handleNewStructureViewerSelection,
                        newStructureReference: e.handleNewStructureViewerReference
                    }
                }) ], 1) ], 1) : e._e(), e._v(" "), t("v-col", {
                    staticClass: "flex-col"
                }, [ t("v-card", {
                    staticClass: "fill-height",
                    staticStyle: {
                        position: "relative"
                    }
                }, [ t("v-card-title", {
                    staticStyle: {
                        position: "absolute",
                        left: "0",
                        top: "0",
                        margin: "0",
                        padding: "16px",
                        "z-index": "1"
                    }
                }, [ e._v("Structure") ]), e._v(" "), e.structureViewerSelection ? t("div", {
                    staticStyle: {
                        padding: "10px",
                        height: "100%",
                        width: "100%"
                    }
                }, [ t("StructureViewerMSA", {
                    attrs: {
                        entries: e.entries,
                        selection: e.structureViewerSelection,
                        reference: e.structureViewerReference
                    },
                    on: {
                        loadingChange: e.handleStructureLoadingChange
                    }
                }) ], 1) : t("v-card-text", [ e._v("\n                        No structures loaded.\n                    ") ]) ], 1) ], 1) ], 1), e._v(" "), t("v-card", {
                    staticClass: "minimap fill-height"
                }, [ e.cssGradients ? t("v-row", {
                    staticStyle: {
                        "align-items": "center"
                    },
                    attrs: {
                        dense: ""
                    }
                }, [ t("v-col", {
                    staticStyle: {
                        "max-width": "fit-content",
                        "margin-right": "4px",
                        position: "relative"
                    },
                    attrs: {
                        align: "center",
                        "no-gutters": ""
                    }
                }, [ t("div", {
                    staticStyle: {
                        display: "flex",
                        "flex-direction": "row"
                    }
                }, [ t("div", {
                    staticClass: "input-div-wrapper expansion-panel",
                    class: {
                        "is-expanded": e.settingsPanelOpen
                    }
                }, [ t("div", {
                    staticClass: "input-div"
                }, [ t("label", {
                    staticClass: "input-label",
                    attrs: {
                        title: "Toggle between AA and 3Di alphabets"
                    }
                }, [ e._v("Alphabet") ]), e._v(" "), t("v-btn-toggle", {
                    attrs: {
                        dense: "",
                        mandatory: "",
                        color: "primary"
                    },
                    model: {
                        value: e.alphabet,
                        callback: function(n) {
                            e.alphabet = n;
                        },
                        expression: "alphabet"
                    }
                }, [ t("v-btn", {
                    staticStyle: {
                        width: "40px"
                    },
                    attrs: {
                        "x-small": "",
                        value: "aa"
                    }
                }, [ e._v("AA") ]), e._v(" "), t("v-btn", {
                    staticStyle: {
                        width: "40px"
                    },
                    attrs: {
                        "x-small": "",
                        value: "ss"
                    }
                }, [ e._v("3Di") ]) ], 1) ], 1), e._v(" "), t("div", {
                    staticClass: "input-div"
                }, [ t("label", {
                    staticClass: "input-label",
                    attrs: {
                        title: "Hide columns with percentage of gaps above this cutoff"
                    }
                }, [ e._v("Gaps") ]), e._v(" "), t("v-text-field", {
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
                        value: e.matchRatio,
                        callback: function(n) {
                            e.matchRatio = n;
                        },
                        expression: "matchRatio"
                    }
                }) ], 1), e._v(" "), t("div", {
                    staticClass: "input-div"
                }, [ t("label", {
                    staticClass: "input-label",
                    attrs: {
                        title: "Toggle between per-column LDDT and 3Di score matrix-based colorschemes"
                    }
                }, [ e._v("Colours") ]), e._v(" "), t("v-btn-toggle", {
                    attrs: {
                        dense: "",
                        mandatory: "",
                        color: "primary"
                    },
                    model: {
                        value: e.colorScheme,
                        callback: function(n) {
                            e.colorScheme = n;
                        },
                        expression: "colorScheme"
                    }
                }, [ t("v-btn", {
                    staticStyle: {
                        width: "40px"
                    },
                    attrs: {
                        "x-small": "",
                        value: "lddt"
                    }
                }, [ e._v("LDDT") ]), e._v(" "), t("v-btn", {
                    staticStyle: {
                        width: "40px"
                    },
                    attrs: {
                        "x-small": "",
                        value: "3di"
                    }
                }, [ e._v("3Di") ]) ], 1) ], 1) ]), e._v(" "), t("div", {
                    staticStyle: {
                        position: "relative",
                        display: "flex",
                        "justify-content": "center",
                        "align-items": "center",
                        width: "fit-content",
                        height: "80px"
                    }
                }, [ t("v-btn", {
                    staticClass: "toggle-button",
                    attrs: {
                        small: "",
                        icon: "",
                        title: "Toggle MSA viewing options"
                    },
                    on: {
                        click: e.toggleSettingsPanel
                    }
                }, [ t("v-icon", [ e._v(e._s(e.settingsBtnIcon)) ]) ], 1) ], 1) ]) ]), e._v(" "), t("v-col", {
                    staticClass: "minimap-col"
                }, e._l(e.cssGradients, (function(n, r) {
                    return t("div", {
                        key: "col-" + r,
                        staticClass: "gradient-block-col",
                        style: e.minimapBlock(r),
                        on: {
                            click: function(n) {
                                return e.handleMapBlockClick(r);
                            }
                        }
                    }, [ t("div", {
                        staticClass: "gradient-block"
                    }, e._l(n, (function(e, n) {
                        return t("div", {
                            key: "gradient-" + n,
                            staticClass: "gradient-row",
                            style: {
                                "background-image": e
                            }
                        });
                    })), 0) ]);
                })), 0) ], 1) : e._e() ], 1), e._v(" "), t("v-card", {
                    attrs: {
                        "pa-2": ""
                    }
                }, [ t("MSAView", {
                    ref: "msaView",
                    attrs: {
                        entries: e.msaViewEntries,
                        scores: e.msaViewScores,
                        alnLen: e.alnLen,
                        alphabet: e.alphabet,
                        colorScheme: e.colorScheme,
                        selectedStructures: e.structureViewerSelection,
                        referenceStructure: e.structureViewerReference,
                        matchRatio: parseFloat(e.matchRatio)
                    },
                    on: {
                        cssGradients: e.handleCSSGradient,
                        lineLen: e.handleLineLen,
                        newStructureSelection: e.handleNewStructureViewerSelection,
                        newStructureReference: e.handleNewStructureViewerReference
                    }
                }) ], 1) ], 1) ], 1);
            };
            Xe._withStripped = !0;
            var en = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("div", {
                    ref: "msaWrapper",
                    staticClass: "msa-wrapper"
                }, e._l(e.blockRanges, (function(n, r) {
                    var i = n[0], a = n[1];
                    return t("div", {
                        staticClass: "msa-block"
                    }, [ e._l(e.getEntryRanges(i, a), (function(n, r) {
                        var i = n.name, a = n.aa, s = n.ss, o = n.seqStart, l = n.css;
                        return [ t("span", {
                            staticClass: "header",
                            style: e.headerStyle(r),
                            attrs: {
                                title: i
                            },
                            on: {
                                click: function(n) {
                                    return e.handleClickHeader(n, r);
                                }
                            }
                        }, [ e._v(e._s(i)) ]), e._v(" "), t("div", {
                            staticClass: "sequence-wrapper"
                        }, [ t("span", {
                            staticClass: "sequence",
                            style: l
                        }, [ e._v(e._s("aa" === e.alphabet ? a : s)) ]) ]), e._v(" "), t("span", {
                            staticClass: "count"
                        }, [ e._v(e._s(e.countSequence(a, o).toString())) ]) ];
                    })) ], 2);
                })), 0);
            };
            en._withStripped = !0;
            var nn = t(4942), tn = function() {
                var e = this.$createElement, n = this._self._c || e;
                return n("div", {
                    staticClass: "canvas-wrapper"
                }, [ n("canvas", {
                    ref: "canvas"
                }) ]);
            };
            function rn(e, n) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                        if (!e) return;
                        if ("string" == typeof e) return an(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return an(e, n);
                    }(e)) || n && e && "number" == typeof e.length) {
                        t && (e = t);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        t = t.call(e);
                    },
                    n: function() {
                        var e = t.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        o = !0, a = e;
                    },
                    f: function() {
                        try {
                            s || null == t.return || t.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function an(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            tn._withStripped = !0;
            const sn = {
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
                    sequences: function(e) {
                        var n = this.$refs.canvas, t = n.getContext("2d");
                        t.clearRect(0, 0, n.width, n.height);
                        for (var r = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "aa";
                            if (0 !== e.length) {
                                for (var t = [], r = e[0].aa.length, i = e.length, a = Math.log(20) - 1 / Math.log(2) * 19 / (2 * i), s = 0; s < r; s++) {
                                    for (var o = [], l = 0; l < i; l++) {
                                        var c = e[l][n][s];
                                        "-" !== c && (void 0 !== o[c] ? o[c]++ : o[c] = 1);
                                    }
                                    var u = 0;
                                    for (var d in o) o[d] = o[d] / i, u -= o[d] * Math.log(o[d]);
                                    var h = Math.abs(a - u), A = [];
                                    for (var p in o) A.push([ p, o[p] * h ]);
                                    A.sort((function(e, n) {
                                        return e[1] > n[1] ? 1 : -1;
                                    })), t.push(A);
                                }
                                return t;
                            }
                        }(e, this.alphabet), i = r.map((function(e) {
                            return e.reduce((function(e, n) {
                                var t = (0, b.Z)(n, 2);
                                t[0];
                                return e + t[1];
                            }), 0);
                        })), a = Math.max.apply(Math, (0, f.Z)(i)), s = 10, o = n.width / this.lineLen, l = 0; l < r.length; l++) {
                            var c, u = n.height, d = rn(r[l]);
                            try {
                                for (d.s(); !(c = d.n()).done; ) {
                                    var h = (0, b.Z)(c.value, 2), A = h[0], p = h[1] / a * n.height;
                                    t.save(), t.translate(s, u), t.scale(1, p / 16), t.fillStyle = this.$vuetify.theme.dark ? "white" : "black", 
                                    t.fillText(A, 0, 0), t.restore(), u -= p;
                                }
                            } catch (e) {
                                d.e(e);
                            } finally {
                                d.f();
                            }
                            s += o;
                        }
                    }
                },
                mounted: function() {
                    var e = this.$refs.canvas, n = e.getContext("2d");
                    e.width = 16 * this.lineLen, e.height = 100, n.font = "16px monospace", n.fillStyle = "red", 
                    n.clearRect(0, 0, e.width, e.height);
                }
            };
            t(5877);
            var on = (0, V.Z)(sn, tn, [], !1, null, null, null);
            on.options.__file = "frontend/SequenceLogo.vue";
            const ln = on.exports;
            function cn(e, n) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                        if (!e) return;
                        if ("string" == typeof e) return un(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return un(e, n);
                    }(e)) || n && e && "number" == typeof e.length) {
                        t && (e = t);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        t = t.call(e);
                    },
                    n: function() {
                        var e = t.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        o = !0, a = e;
                    },
                    f: function() {
                        try {
                            s || null == t.return || t.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function un(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            var dn = {
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
            const hn = {
                components: (0, nn.Z)({
                    SequenceLogo: ln
                }, "SequenceLogo", ln),
                data: function() {
                    return {
                        mask: [],
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
                    }
                },
                mounted: function() {
                    this.resizeObserver = new ResizeObserver(N(this.handleResize, 100)).observe(this.$refs.msaWrapper), 
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
                    firstSequenceWidth: function() {
                        var e = document.querySelector(".msa-block");
                        return e ? e.querySelector(".sequence").scrollWidth : 0;
                    },
                    blockRanges: function() {
                        var e = this, n = Math.max(1, Math.ceil(this.alnLen / this.lineLen));
                        return Array.from({
                            length: n
                        }, (function(n, t) {
                            return [ t * e.lineLen, Math.min(e.alnLen, t * e.lineLen + e.lineLen) ];
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
                    handleClickHeader: function(e, n) {
                        0 === this.selectedStructures.length || e.altKey ? this.$emit("newStructureReference", n) : this.$emit("newStructureSelection", n);
                    },
                    getSequenceWidth: function() {
                        return document.querySelector(".msa-block").querySelector(".sequence").scrollWidth;
                    },
                    headerStyle: function(e) {
                        var n = this.selectedStructures.length > 0 && this.selectedStructures.includes(e);
                        return {
                            fontWeight: n ? "bold" : "normal",
                            color: this.selectedStructures.length > 0 && this.referenceStructure === e ? "#1E88E5" : n ? "#e6ac00" : this.$vuetify.theme.dark ? "rgba(180, 180, 180, 1)" : "black"
                        };
                    },
                    handleUpdateEntries: function() {
                        var e = this;
                        this.headerLen = 0, this.countLen = 0, this.entries.forEach((function(n, t) {
                            e.headerLen = Math.min(30, Math.max(e.headerLen, n.name.length));
                            var r, i = 0, a = cn(n.aa);
                            try {
                                for (a.s(); !(r = a.n()).done; ) {
                                    "-" !== r.value && i++;
                                }
                            } catch (e) {
                                a.e(e);
                            } finally {
                                a.f();
                            }
                            e.countLen = Math.max(e.countLen, i.toString().length);
                        }));
                    },
                    handleResize: function() {
                        var e = document.querySelector(".msa-block");
                        if (e) {
                            var n = e.querySelector(".header"), t = e.querySelector(".count"), r = e.querySelector(".sequence"), i = e.offsetWidth - n.offsetWidth - t.offsetWidth - 32, a = r.textContent, s = Math.abs(Math.ceil(a.length * (r.scrollWidth - i) / r.scrollWidth));
                            r.scrollWidth > i ? this.lineLen = Math.min(this.lineLen - s, this.entries[0].aa.length) : r.scrollWidth < i && (this.lineLen = Math.min(this.lineLen + s, this.entries[0].aa.length));
                        }
                    },
                    emitGradients: function() {
                        var e = document.getElementsByClassName("sequence");
                        this.$emit("cssGradients", Array.prototype.map.call(e, (function(e) {
                            return e.style["background-image"];
                        })));
                    },
                    percentageToColor: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 120, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return -1 === e ? this.$vuetify.theme.dark ? "rgba(180, 180, 180, 1)" : "rgba(0, 0, 0, 0)" : "hsl(".concat(e * (n - t) + t, ", 100%, 50%)");
                    },
                    getEntryRange: function(e, n, t) {
                        for (var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = {
                            name: e.name,
                            aa: e.aa.slice(n, t),
                            ss: e.ss.slice(n, t),
                            seqStart: 0
                        }, a = 0; a < n; a++) "-" !== e.aa[a] && i.seqStart++;
                        return r && (i.css = this.generateCSSGradient(n, t, i.ss)), i;
                    },
                    getEntryRanges: function(e, n) {
                        var t = this, r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        return Array.from(this.entries, (function(i) {
                            return t.getEntryRange(i, e, n, r);
                        }));
                    },
                    countSequence: function(e, n) {
                        var t = e.split("-").length - 1;
                        return n + this.lineLen - t;
                    },
                    generateCSSGradient: function(e, n, t) {
                        var r = this;
                        if (!this.scores) return null;
                        var i = [];
                        if ("3di" === this.colorScheme) {
                            var a, s = cn(t);
                            try {
                                for (s.s(); !(a = s.n()).done; ) {
                                    var o = a.value;
                                    i.push(dn[o]);
                                }
                            } catch (e) {
                                s.e(e);
                            } finally {
                                s.f();
                            }
                        } else i = this.scores.slice(e, n).map((function(e) {
                            return r.percentageToColor(parseFloat(e));
                        }));
                        for (var l = 0; l < t.length; l++) "-" === t[l] && (i[l] = this.$vuetify.theme.dark ? "rgba(100, 100, 100, 0.4)" : "rgba(0, 0, 0, 0)");
                        for (var c = 100 / i.length, u = "linear-gradient(to right", d = 0, h = c, A = 0; A < i.length; A++) h = A === i.length - 1 ? 100 : d + c, 
                        u += ", ".concat(i[A], " ").concat(d, "%, ").concat(i[A], " ").concat(h, "%"), d = h;
                        return {
                            backgroundImage: u += ")",
                            backgroundSize: "calc(100% - 2px) 100%",
                            backgroundPosition: "left top",
                            backgroundAttachment: "scroll",
                            backgroundClip: this.backgroundClip,
                            color: this.sequenceColor,
                            fontWeight: this.fontWeight
                        };
                    }
                }
            }, An = hn;
            t(1574);
            var pn = (0, V.Z)(An, en, [], !1, null, null, null);
            pn.options.__file = "frontend/MSAView.vue";
            const gn = pn.exports;
            var mn = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return e.alignments.length > 0 && "tCa" in e.alignments[0] ? t("div", {
                    staticClass: "structure-panel"
                }, [ t("StructureViewerTooltip", {
                    attrs: {
                        attach: ".structure-panel"
                    }
                }), e._v(" "), t("div", {
                    ref: "structurepanel",
                    staticClass: "structure-wrapper"
                }, [ e.tmAlignResults ? t("table", e._b({
                    staticClass: "tmscore-panel"
                }, "table", e.tmPanelBindings, !1), [ t("tr", [ t("td", {
                    staticClass: "left-cell"
                }, [ e._v("TM-Score:") ]), e._v(" "), t("td", {
                    staticClass: "right-cell"
                }, [ e._v(e._s(e.tmAlignResults.tmScore)) ]) ]), e._v(" "), t("tr", [ t("td", {
                    staticClass: "left-cell"
                }, [ e._v("RMSD:") ]), e._v(" "), t("td", {
                    staticClass: "right-cell"
                }, [ e._v(e._s(e.tmAlignResults.rmsd)) ]) ]) ]) : e._e(), e._v(" "), t("StructureViewerToolbar", {
                    attrs: {
                        isFullscreen: e.isFullscreen,
                        isSpinning: e.isSpinning,
                        showQuery: e.showQuery,
                        showTarget: e.showTarget,
                        showArrows: e.showArrows,
                        disableQueryButton: !e.hasQuery,
                        disableArrowButton: !e.hasQuery
                    },
                    on: {
                        makeImage: e.handleMakeImage,
                        makePDB: e.handleMakePDB,
                        resetView: e.handleResetView,
                        toggleFullscreen: e.handleToggleFullscreen,
                        toggleTarget: e.handleToggleTarget,
                        toggleQuery: e.handleToggleQuery,
                        toggleArrows: e.handleToggleArrows,
                        toggleSpin: e.handleToggleSpin
                    }
                }), e._v(" "), t("div", {
                    ref: "viewport",
                    staticClass: "structure-viewer"
                }) ], 1) ], 1) : e._e();
            };
            mn._withStripped = !0;
            var fn = t(531), bn = t(4687), vn = t.n(bn), yn = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("v-tooltip", {
                    attrs: {
                        "open-delay": "300",
                        top: "",
                        attach: e.attach,
                        "nudge-left": "25",
                        "background-color": "transparent"
                    },
                    scopedSlots: e._u([ {
                        key: "activator",
                        fn: function(n) {
                            var r = n.on;
                            return [ t("v-icon", e._g({
                                staticStyle: {
                                    position: "absolute",
                                    "z-index": "999",
                                    right: "0"
                                },
                                attrs: {
                                    light: e.isFullscreen
                                }
                            }, r), [ e._v(e._s(e.$MDI.HelpCircleOutline)) ]) ];
                        }
                    } ])
                }, [ e._v(" "), t("span", [ t("dl", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [ t("dt", [ t("svg", e._b({}, "svg", e.svgProps, !1), [ t("title", [ e._v("Left click") ]), e._v(" "), t("path", {
                    attrs: {
                        d: "M25.6 5.8a5 5 0 0 0-5-4.8h-9.1a5 5 0 0 0-5.1 4.8v20.4a5 5 0 0 0 5 4.8h9.1a5 5 0 0 0 5.1-4.8V5.8Zm-1 9.5v10.9a4 4 0 0 1-4 3.8h-9.1a4 4 0 0 1-4-3.8V15.3h17ZM15.5 2v12.3h-8V5.8a4 4 0 0 1 4-3.8h4Zm1 0h4a4 4 0 0 1 4 3.8v8.5h-8V2Z"
                    }
                }), e._v(" "), t("path", {
                    staticStyle: {
                        fill: "red"
                    },
                    attrs: {
                        id: "left",
                        d: "M15.5 2v12.3h-8V5.8a4 4 0 0 1 4-3.8h4Z"
                    }
                }), e._v(" "), t("path", {
                    attrs: {
                        id: "middle-inactive",
                        d: "M14.6 4h2.8v8h-2.8z"
                    }
                }) ]) ]), e._v(" "), t("dd", [ e._v("\n                Rotate\n            ") ]), e._v(" "), t("dt", [ t("svg", e._b({}, "svg", e.svgProps, !1), [ t("title", [ e._v("Right click") ]), e._v(" "), t("path", {
                    attrs: {
                        d: "M25.6 5.8a5 5 0 0 0-5-4.8h-9.1a5 5 0 0 0-5.1 4.8v20.4a5 5 0 0 0 5 4.8h9.1a5 5 0 0 0 5.1-4.8V5.8Zm-1 9.5v10.9a4 4 0 0 1-4 3.8h-9.1a4 4 0 0 1-4-3.8V15.3h17ZM15.5 2v12.3h-8V5.8a4 4 0 0 1 4-3.8h4Zm1 0h4a4 4 0 0 1 4 3.8v8.5h-8V2Z"
                    }
                }), e._v(" "), t("path", {
                    staticStyle: {
                        fill: "red"
                    },
                    attrs: {
                        id: "right",
                        d: "M16.5 2h4a4 4 0 0 1 4 3.8v8.5h-8V2Z"
                    }
                }), e._v(" "), t("path", {
                    attrs: {
                        id: "middle-inactive",
                        d: "M14.6 4h2.8v8h-2.8z"
                    }
                }) ]) ]), e._v(" "), t("dd", [ e._v("\n                Pan\n            ") ]), e._v(" "), t("dt", [ t("svg", e._b({}, "svg", e.svgProps, !1), [ t("title", [ e._v("Scroll wheel") ]), e._v(" "), t("path", {
                    attrs: {
                        d: "M25.6 5.8a5 5 0 0 0-5-4.8h-9.1a5 5 0 0 0-5.1 4.8v20.4a5 5 0 0 0 5 4.8h9.1a5 5 0 0 0 5.1-4.8V5.8Zm-1 9.5v10.9a4 4 0 0 1-4 3.8h-9.1a4 4 0 0 1-4-3.8V15.3h17ZM15.5 2v12.3h-8V5.8a4 4 0 0 1 4-3.8h4Zm1 0h4a4 4 0 0 1 4 3.8v8.5h-8V2Z"
                    }
                }), e._v(" "), t("path", {
                    staticStyle: {
                        fill: "red"
                    },
                    attrs: {
                        id: "middle-active",
                        d: "M14.6 4h2.8v8h-2.8z"
                    }
                }) ]) ]), e._v(" "), t("dd", [ e._v("\n                Zoom\n            ") ]) ]) ]) ]);
            };
            yn._withStripped = !0;
            const Cn = {
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
            var wn = (0, V.Z)(Cn, yn, [], !1, null, null, null);
            $()(wn, {
                VIcon: J.Z,
                VTooltip: _e.Z
            }), wn.options.__file = "frontend/StructureViewerTooltip.vue";
            const xn = wn.exports;
            var Sn = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("div", {
                    staticClass: "toolbar-panel"
                }, [ t("v-item-group", {
                    staticClass: "v-btn-toggle",
                    attrs: {
                        light: e.isFullscreen
                    }
                }, [ e.disablePDBButton ? e._e() : t("v-btn", e._b({
                    attrs: {
                        title: "Save PDB"
                    },
                    on: {
                        click: e.handleClickMakePDB
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ t("v-icon", e._b({}, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.SavePDB)) ]), e._v(" "), e.isFullscreen ? t("span", [ e._v(" Save PDB") ]) : e._e() ], 1), e._v(" "), e.disableImageButton ? e._e() : t("v-btn", e._b({
                    attrs: {
                        title: "Save image"
                    },
                    on: {
                        click: e.handleClickMakeImage
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ t("v-icon", e._b({}, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.SavePNG)) ]), e._v(" "), e.isFullscreen ? t("span", [ e._v(" Save image") ]) : e._e() ], 1), e._v(" "), e.disableQueryButton ? e._e() : t("v-btn", e._b({
                    attrs: {
                        title: "Toggle between the entire query structure and aligned region"
                    },
                    on: {
                        click: e.handleClickCycleQuery
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ 0 === e.showQuery ? t("v-icon", e._b({
                    staticStyle: {
                        color: "#1E88E5"
                    }
                }, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$LOCAL ? e.$MDI.CircleHalf : e.$MDI.CircleOneThird)) ]) : e.$LOCAL || 1 !== e.showQuery ? t("v-icon", e._b({
                    staticStyle: {
                        color: "#1E88E5"
                    }
                }, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.Circle)) ]) : t("v-icon", e._b({
                    staticStyle: {
                        color: "#1E88E5"
                    }
                }, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.CircleTwoThird)) ]), e._v(" "), e.isFullscreen ? t("span", [ e._v(" Toggle full query") ]) : e._e() ], 1), e._v(" "), e.disableTargetButton ? e._e() : t("v-btn", e._b({
                    attrs: {
                        title: "Toggle between the entire target structure and aligned region"
                    },
                    on: {
                        click: e.handleClickToggleTarget
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ 0 === e.showTarget ? t("v-icon", e._b({
                    staticStyle: {
                        color: "#FFC107"
                    }
                }, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$LOCAL ? e.$MDI.CircleHalf : e.$MDI.CircleOneThird)) ]) : e.$LOCAL || 1 !== e.showTarget ? t("v-icon", e._b({
                    staticStyle: {
                        color: "#FFC107"
                    }
                }, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.Circle)) ]) : t("v-icon", e._b({
                    staticStyle: {
                        color: "#FFC107"
                    }
                }, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.CircleTwoThird)) ]), e._v(" "), e.isFullscreen ? t("span", [ e._v(" Toggle full target") ]) : e._e() ], 1), e._v(" "), e.disableArrowButton ? e._e() : t("v-btn", e._b({
                    attrs: {
                        title: "Draw arrows between aligned residues"
                    },
                    on: {
                        click: e.handleClickToggleArrows
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ e.showArrows ? t("v-icon", e._b({}, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.ArrowRightCircle)) ]) : t("v-icon", e._b({}, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.ArrowRightCircleOutline)) ]), e._v(" "), e.isFullscreen ? t("span", [ e._v(" Toggle arrows") ]) : e._e() ], 1), e._v(" "), e.disableResetButton ? e._e() : t("v-btn", e._b({
                    attrs: {
                        title: "Reset the view to the original position and zoom level"
                    },
                    on: {
                        click: e.handleClickResetView
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ t("v-icon", e._b({}, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.Restore)) ]), e._v(" "), e.isFullscreen ? t("span", [ e._v(" Reset view") ]) : e._e() ], 1), e._v(" "), e.disableSpinButton ? e._e() : t("v-btn", e._b({
                    attrs: {
                        disabled: e.isSpinning,
                        title: "Toggle spinning structure"
                    },
                    on: {
                        click: e.handleClickSpin
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ t("v-icon", e._b({}, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.AxisZRotateCounterclockwise)) ]), e._v(" "), e.isFullscreen ? t("span", [ e._v(" Toggle spin") ]) : e._e() ], 1), e._v(" "), e.disableFullscreenButton ? e._e() : t("v-btn", e._b({
                    attrs: {
                        title: "Enter fullscreen mode - press ESC to exit"
                    },
                    on: {
                        click: e.handleClickFullscreen
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ t("v-icon", e._b({}, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.Fullscreen)) ]), e._v(" "), e.isFullscreen ? t("span", [ e._v(" Fullscreen") ]) : e._e() ], 1) ], 1) ], 1);
            };
            Sn._withStripped = !0;
            const Mn = {
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
            t(7539);
            var Tn = t(7309), In = (0, V.Z)(Mn, Sn, [], !1, null, null, null);
            $()(In, {
                VBtn: Y.Z,
                VIcon: J.Z,
                VItemGroup: Tn.Z
            }), In.options.__file = "frontend/StructureViewerToolbar.vue";
            const kn = In.exports, En = {
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
                        var e = this;
                        window.addEventListener("resize", this.handleResize, {
                            passive: !0
                        }), this.stage = new v.Hf(this.$refs.viewport, this.stageParameters), this.stage.signals.fullscreenChanged.add((function(n) {
                            n ? (e.stage.viewer.setBackground("#ffffff"), e.stage.viewer.setLight(void 0, void 0, void 0, .2), 
                            e.isFullscreen = !0) : (e.stage.viewer.setBackground(e.bgColor), e.stage.viewer.setLight(void 0, void 0, void 0, e.ambientIntensity), 
                            e.isFullscreen = !1);
                        })), this.stage.setSpin(this.isSpinning), this.stage.viewer.renderer.domElement.addEventListener("mousedown", (function(n) {
                            e.isSpinning = !1;
                        }));
                    },
                    teardownStage: function() {
                        window.removeEventListener("resize", this.handleResize), this.stage && (this.stage.dispose(), 
                        this.stage = null, this.$refs.viewport.innerHTML = "");
                    },
                    handleMakeImage: function() {
                        this.makeImage();
                    },
                    handleMakePDB: function() {
                        this.makePDB();
                    }
                }
            };
            var Ln = (0, V.Z)(En, undefined, undefined, !1, null, null, null);
            Ln.options.__file = "frontend/StructureViewerMixin.vue";
            const On = Ln.exports;
            var Rn = t(7895), Nn = t(1434);
            function Bn(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable;
                    }))), t.push.apply(t, r);
                }
                return t;
            }
            function Dn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Bn(Object(t), !0).forEach((function(n) {
                        (0, nn.Z)(e, n, t[n]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Bn(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                    }));
                }
                return e;
            }
            function qn(e, n) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                        if (!e) return;
                        if ("string" == typeof e) return Pn(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Pn(e, n);
                    }(e)) || n && e && "number" == typeof e.length) {
                        t && (e = t);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        t = t.call(e);
                    },
                    n: function() {
                        var e = t.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        o = !0, a = e;
                    },
                    f: function() {
                        try {
                            s || null == t.return || t.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function Pn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            var _n = function(e) {
                for (var n = [], t = [], r = e.qStartPos, i = e.dbStartPos, a = 0; a < e.qAln.length; a++) "-" === e.qAln[a] || "-" === e.dbAln[a] ? "-" === e.qAln[a] ? i++ : r++ : (n.push(r), 
                t.push(i), r++, i++);
                return [ n, t ];
            }, Fn = function(e) {
                if (/_v[0-9]+$/.test(e)) return "A";
                var n = e.lastIndexOf("_");
                if (-1 != n) {
                    var t = e.substring(n + 1);
                    return t.length >= 1 ? t[0] : "A";
                }
                return "A";
            }, Vn = function(e) {
                if (/_v[0-9]+$/.test(e)) return e;
                var n = e.lastIndexOf("_");
                return -1 != n ? e.substring(0, n) : e;
            }, jn = function(e, n) {
                var t = [], r = -1;
                return e.eachAtom((function(e) {
                    e.resno !== r && (t.push([ e.x, e.y, e.z ]), r = e.resno);
                }), n), t;
            }, Un = v.Ub.addScheme((function() {
                var e = [ 10033561, 49087, 15308410, 40563, 15787074, 29362, 13983232, 13400487 ];
                this.atomColor = function(n) {
                    return e[n.chainIndex % e.length];
                };
            }), "colorblindColors"), zn = function(e) {
                return new v.p8(e.structure, {
                    renumberSerial: !1
                }).getData().split("\n").filter((function(e) {
                    return e.startsWith("ATOM");
                })).join("\n");
            };
            const Gn = {
                name: "StructureViewer",
                components: {
                    Panel: te,
                    StructureViewerTooltip: xn,
                    StructureViewerToolbar: kn
                },
                mixins: [ On ],
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
                    drawArrows: function(e, n) {
                        var t = this;
                        return (0, fn.Z)(vn().mark((function r() {
                            var i, a;
                            return vn().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return i = new v.bn("arrows"), r.next = 3, Promise.all(t.alignments.map(function() {
                                        var t = (0, fn.Z)(vn().mark((function t(r) {
                                            var a, s, o, l, c, u, d, h, A;
                                            return vn().wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                  case 0:
                                                    for (a = Fn(r.query), s = Fn(r.target), o = _n(r).map((function(e) {
                                                        return e.join(" or ");
                                                    })), l = (0, b.Z)(o, 2), c = l[0], u = l[1], d = jn(e, new v.Y1("(".concat(c, ") and :").concat(a, ".CA"))), 
                                                    h = jn(n, new v.Y1("(".concat(u, ") and :").concat(s, ".CA"))), d.length != h.length && console.warn("Different number of CA atoms in query and target", d.length, h.length), 
                                                    A = 0; A < Math.min(d.length, h.length); A++) i.addArrow(d[A], h[A], [ 0, 1, 1 ], .4);

                                                  case 7:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }), t);
                                        })));
                                        return function(e) {
                                            return t.apply(this, arguments);
                                        };
                                    }()));

                                  case 3:
                                    (a = t.stage.addComponentFromObject(i)).addRepresentation("buffer"), a.setVisibility(t.showArrows);

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
                            var e = this.stage.getRepresentationsByName("targetHighlight");
                            e.setSelection(), e.setVisibility(!1);
                        }
                    },
                    setSelectionData: function(e) {
                        if (this.alignments && this.stage) {
                            var n = this.stage.getRepresentationsByName("targetHighlight");
                            if (n.setSelection(), 0 !== e.length) {
                                var t, r = [], i = qn(e);
                                try {
                                    for (i.s(); !(t = i.n()).done; ) {
                                        var a = (0, b.Z)(t.value, 3), s = a[0], o = a[1], l = a[2], c = Fn(this.alignments[s].target), u = o + l;
                                        r.push("".concat(o, "-").concat(u, ":").concat(c));
                                    }
                                } catch (e) {
                                    i.e(e);
                                } finally {
                                    i.f();
                                }
                                var d = r.join(" or ");
                                n.setSelection(d), n.setVisibility(!0);
                            } else n.setVisibility(!1);
                        }
                    },
                    setQuerySelection: function() {
                        var e = this.stage.getRepresentationsByName("queryStructure");
                        if (e) {
                            var n = this.querySele;
                            e.setSelection(n), e.list[0].parent.autoView(n, this.autoViewTime), 0 === this.showQuery ? (this.stage.getRepresentationsByName("querySurface-1").setVisibility(!1), 
                            this.stage.getRepresentationsByName("querySurface-2").setVisibility(!1)) : 1 === this.showQuery ? (this.stage.getRepresentationsByName("querySurface-1").setVisibility(!0), 
                            this.stage.getRepresentationsByName("querySurface-2").setVisibility(!1)) : (this.stage.getRepresentationsByName("querySurface-1").setVisibility(!0), 
                            this.stage.getRepresentationsByName("querySurface-2").setVisibility(!0));
                        }
                    },
                    setTargetSelection: function() {
                        var e = this.stage.getRepresentationsByName("targetStructure");
                        if (e) {
                            var n = this.targetSele;
                            e.setSelection(n);
                        }
                    },
                    handleMakeImage: function() {
                        var e = this;
                        return (0, fn.Z)(vn().mark((function n() {
                            var t, r, i;
                            return vn().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (e.stage) {
                                        n.next = 2;
                                        break;
                                    }
                                    return n.abrupt("return");

                                  case 2:
                                    return t = e.isSpinning, e.isSpinning = !1, r = e.alignments.map((function(n) {
                                        return e.hasQuery ? "".concat(n.query, "-").concat(n.target) : n.target;
                                    })).join("_"), e.stage.viewer.setLight(void 0, void 0, void 0, .2), n.next = 8, 
                                    e.stage.makeImage({
                                        trim: !0,
                                        factor: e.isFullscreen ? 1 : 8,
                                        antialias: !0,
                                        transparent: !0
                                    });

                                  case 8:
                                    i = n.sent, e.stage.viewer.setLight(void 0, void 0, void 0, e.$vuetify.theme.dark ? .4 : .2), 
                                    (0, v.LR)(i, "".concat(r, ".png")), e.isSpinning = t;

                                  case 12:
                                  case "end":
                                    return n.stop();
                                }
                            }), n);
                        })))();
                    },
                    handleMakePDB: function() {
                        if (this.stage) {
                            var e = this.stage.getComponentsByName("queryStructure").list.map(zn), n = this.stage.getComponentsByName("targetStructure").list.map(zn);
                            if (e || n) {
                                var t = this.alignments.map((function(n) {
                                    return e ? "".concat(n.query, "-").concat(n.target) : n.target;
                                })), r = null;
                                r = e && n ? "TITLE     ".concat(t.join(" "), "\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms might have been re-generated by PULCHRA,\nREMARK              if they are not present in the original PDB file.\nMODEL        1\n").concat(e.join("\n"), "\nENDMDL\nMODEL        2\n").concat(n.join("\n"), "\nENDMDL\nEND\n") : "TITLE     ".concat(t.join(" "), "\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms were re-generated by PULCHRA.\nMODEL        1\n").concat(n.join("\n"), "\nENDMDL\nEND\n"), 
                                (0, v.LR)(new Blob([ r ], {
                                    type: "text/plain"
                                }), t.join("_") + ".pdb");
                            }
                        }
                    }
                },
                watch: {
                    showArrows: function(e, n) {
                        this.stage && this.stage.getComponentsByName("arrows").forEach((function(n) {
                            n.setVisibility(e);
                        }));
                    },
                    showQuery: function() {
                        this.stage && this.setQuerySelection();
                    },
                    showTarget: function(e, n) {
                        this.stage && this.setTargetSelection();
                    },
                    highlights: function(e) {
                        if (this.stage && e) {
                            var n = [];
                            e.forEach((function(e, t) {
                                if (e) {
                                    var r = (0, b.Z)(e, 2), i = r[0], a = r[1];
                                    n.push([ t, i, a ]);
                                }
                            })), this.setSelectionData(n);
                        }
                    }
                },
                computed: {
                    querySele: function() {
                        return 0 === this.alignments.length || 2 == this.showQuery ? "" : 0 === this.showQuery ? this.alignments.map((function(e) {
                            return "".concat(e.qStartPos, "-").concat(e.qEndPos, ":").concat(Fn(e.query));
                        })).join(" or ") : 1 === this.showQuery ? this.alignments.map((function(e) {
                            return ":".concat(Fn(e.query));
                        })).join(" or ") : void 0;
                    },
                    targetSele: function() {
                        return 0 === this.alignments.length || 2 == this.showTarget ? "" : 0 === this.showTarget ? this.alignments.map((function(e) {
                            return "".concat(e.dbStartPos, "-").concat(e.dbEndPos, ":").concat(Fn(e.target));
                        })).join(" or ") : 1 === this.showTarget ? this.alignments.map((function(e) {
                            return ":".concat(Fn(e.target));
                        })).join(" or ") : void 0;
                    },
                    tmPanelBindings: function() {
                        return this.isFullscreen ? {
                            style: "margin-top: 10px; font-size: 2em; line-height: 2em"
                        } : {};
                    }
                },
                mounted: function() {
                    var e = this;
                    return (0, fn.Z)(vn().mark((function n() {
                        var t, r, i, a, s, o, l, c, u, d, h, A, p, g, m, b, y, C, w, x, S, M, T, I, k, E, N, B, D, q, P, _, F, V, j, U, z, G, Q, H, Z, $, Y;
                        return vn().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (void 0 !== e.alignments[0].tCa) {
                                    n.next = 2;
                                    break;
                                }
                                return n.abrupt("return");

                              case 2:
                                if (t = "", e.hasQuery = !0, !e.$LOCAL) {
                                    n.next = 8;
                                    break;
                                }
                                t = e.hits.queries[0].hasOwnProperty("pdb") ? JSON.parse(e.hits.queries[0].pdb) : O(e.hits.queries[0].qCa, e.hits.queries[0].sequence, "A"), 
                                n.next = 23;
                                break;

                              case 8:
                                if (!e.$route.params.ticket.startsWith("user-")) {
                                    n.next = 12;
                                    break;
                                }
                                e.hits.queries[0].hasOwnProperty("pdb") ? t = JSON.parse(e.hits.queries[0].pdb) : (r = e.$root.userData[e.$route.params.entry], 
                                t = O(r.queries[0].qCa, r.queries[0].sequence, "A")), n.next = 23;
                                break;

                              case 12:
                                return n.prev = 12, n.next = 15, e.$axios.get("api/result/" + e.$route.params.ticket + "/query");

                              case 15:
                                i = n.sent, t = i.data, n.next = 23;
                                break;

                              case 19:
                                n.prev = 19, n.t0 = n.catch(12), t = "", e.hasQuery = !1;

                              case 23:
                                a = [], s = [], o = 0, l = null, c = null, u = 0, d = qn(e.alignments), n.prev = 30, 
                                A = vn().mark((function n() {
                                    var t, r, i, d, A, p, g, m, f, b, v;
                                    return vn().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                          case 0:
                                            if (t = h.value, r = Fn(t.target), i = t.tSeq, d = t.tCa, !Number.isInteger(t.tCa) || !Number.isInteger(t.tSeq)) {
                                                n.next = 17;
                                                break;
                                            }
                                            if (A = t.db, (p = t.tCa) == l) {
                                                n.next = 14;
                                                break;
                                            }
                                            return g = e.$route.params.ticket, n.next = 11, e.$axios.get("api/result/" + g + "/" + e.$route.params.entry + "?format=brief&index=" + p + "&database=" + A);

                                          case 11:
                                            m = n.sent, c = m.data, l = p;

                                          case 14:
                                            i = c[u].tSeq, d = c[u].tCa, u++;

                                          case 17:
                                            return f = O(d, i, r), n.next = 20, (0, Rn.n)(f);

                                          case 20:
                                            return b = n.sent, n.next = 23, e.stage.loadFile(new Blob([ b ], {
                                                type: "text/plain"
                                            }), {
                                                ext: "pdb",
                                                firstModelOnly: !0
                                            });

                                          case 23:
                                            (v = n.sent).structure.eachChain((function(e) {
                                                e.chainname = r;
                                            })), v.structure.eachAtom((function(e) {
                                                e.serial = o++;
                                            })), a.push(v), s.push("".concat(t.dbStartPos, "-").concat(t.dbEndPos, ":").concat(r));

                                          case 28:
                                          case "end":
                                            return n.stop();
                                        }
                                    }), n);
                                })), d.s();

                              case 33:
                                if ((h = d.n()).done) {
                                    n.next = 37;
                                    break;
                                }
                                return n.delegateYield(A(), "t1", 35);

                              case 35:
                                n.next = 33;
                                break;

                              case 37:
                                n.next = 42;
                                break;

                              case 39:
                                n.prev = 39, n.t2 = n.catch(30), d.e(n.t2);

                              case 42:
                                return n.prev = 42, d.f(), n.finish(42);

                              case 45:
                                if (p = v.Z9.apply(void 0, [ Vn(e.alignments[0].target) ].concat((0, f.Z)(a.map((function(e) {
                                    return e.structure;
                                }))))), (g = e.stage.addComponentFromObject(p, {
                                    name: "targetStructure"
                                })).addRepresentation("tube", {
                                    color: 1179630,
                                    side: "front",
                                    opacity: .5,
                                    radius: .8,
                                    visible: !1,
                                    name: "targetHighlight"
                                }), v.Ub.hasScheme("_targetScheme") && v.Ub.removeScheme("_targetScheme"), e.targetSchemeId = v.Ub.addSelectionScheme([ [ e.targetAlignedColor, s.join(" or ") ], [ e.targetUnalignedColor, "*" ] ], "_targetScheme"), 
                                !e.hasQuery) {
                                    n.next = 122;
                                    break;
                                }
                                if (m = "", b = "pdb", "#" == (t = t.trimStart())[0] || t.startsWith("data_")) b = "cif", 
                                t = t.replaceAll("_chem_comp.", "_chem_comp_SKIP_HACK."); else {
                                    y = qn(t.split("\n"));
                                    try {
                                        for (y.s(); !(C = y.n()).done; ) w = C.value, x = Math.max(0, 80 - w.length), S = w + " ".repeat(x) + "\n", 
                                        m += S;
                                    } catch (e) {
                                        y.e(e);
                                    } finally {
                                        y.f();
                                    }
                                    t = m;
                                }
                                return n.next = 57, e.stage.loadFile(new Blob([ t ], {
                                    type: "text/plain"
                                }), {
                                    ext: b,
                                    firstModelOnly: !0,
                                    name: "queryStructure"
                                });

                              case 57:
                                if (!(M = n.sent) || !M.structure.getAtomProxy().isCg()) {
                                    n.next = 67;
                                    break;
                                }
                                return "cif" == b && (t = zn(M)), n.next = 62, (0, Rn.n)(t);

                              case 62:
                                return t = n.sent, e.stage.removeComponent(M), n.next = 66, e.stage.loadFile(new Blob([ t ], {
                                    type: "text/plain"
                                }), {
                                    ext: "pdb",
                                    firstModelOnly: !0,
                                    name: "queryStructure"
                                });

                              case 66:
                                M = n.sent;

                              case 67:
                                T = [], I = qn(e.alignments), n.prev = 69, E = vn().mark((function e() {
                                    var n, t, r;
                                    return vn().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            n = k.value, t = Fn(n.query), T.push("".concat(n.qStartPos, "-").concat(n.qEndPos, " and :").concat(t)), 
                                            r = 1, M.structure.eachResidue((function(e) {
                                                e.resno = r++;
                                            }), new v.Y1(":".concat(t)));

                                          case 5:
                                          case "end":
                                            return e.stop();
                                        }
                                    }), e);
                                })), I.s();

                              case 72:
                                if ((k = I.n()).done) {
                                    n.next = 76;
                                    break;
                                }
                                return n.delegateYield(E(), "t3", 74);

                              case 74:
                                n.next = 72;
                                break;

                              case 76:
                                n.next = 81;
                                break;

                              case 78:
                                n.prev = 78, n.t4 = n.catch(69), I.e(n.t4);

                              case 81:
                                return n.prev = 81, I.f(), n.finish(81);

                              case 84:
                                if (v.Ub.hasScheme("_queryScheme") && v.Ub.removeScheme("_queryScheme"), e.querySchemeId = v.Ub.addSelectionScheme([ [ e.queryAlignedColor, T.join(" or ") ], [ e.queryUnalignedColor, "*" ] ], "_queryScheme"), 
                                !e.alignments[0].hasOwnProperty("complexu") || !e.alignments[0].hasOwnProperty("complext")) {
                                    n.next = 104;
                                    break;
                                }
                                N = e.alignments[0].complext.split(",").map((function(e) {
                                    return parseFloat(e);
                                })), B = [ [ (B = e.alignments[0].complexu.split(",").map((function(e) {
                                    return parseFloat(e);
                                })))[0], B[1], B[2] ], [ B[3], B[4], B[5] ], [ B[6], B[7], B[8] ] ], R(g.structure, N, B), 
                                M.addRepresentation(e.qRepr, {
                                    color: e.querySchemeId,
                                    smoothSheet: !0,
                                    name: "queryStructure"
                                }), g.addRepresentation(e.tRepr, {
                                    color: e.targetSchemeId,
                                    smoothSheet: !0,
                                    name: "targetStructure"
                                }), D = [], q = [], P = [], _ = qn(e.alignments);
                                try {
                                    for (_.s(); !(F = _.n()).done; ) V = F.value, j = Fn(V.query), D.push("".concat(V.qStartPos, "-").concat(V.qEndPos, ":").concat(j)), 
                                    q.push("(not ".concat(V.qStartPos, "-").concat(V.qEndPos, " and :").concat(j, ")")), 
                                    P.push(":".concat(j));
                                } catch (e) {
                                    _.e(e);
                                } finally {
                                    _.f();
                                }
                                U = {
                                    color: Un,
                                    opacity: .1,
                                    opaqueBack: !1,
                                    useWorker: !1
                                }, M.addRepresentation("surface", Dn({
                                    sele: D.join(" or "),
                                    name: "querySurface-0"
                                }, U)), M.addRepresentation("surface", Dn({
                                    sele: q.join(" or "),
                                    name: "querySurface-1",
                                    visible: !1
                                }, U)), M.addRepresentation("surface", Dn({
                                    sele: "not (".concat(P.join(" or "), ")"),
                                    name: "querySurface-2",
                                    visible: !1
                                }, U)), n.next = 115;
                                break;

                              case 104:
                                return z = L(M.structure, e.querySele), G = L(g.structure, e.targetSele), Q = ">target\n".concat(e.alignments[0].dbAln, "\n\n>query\n").concat(e.alignments[0].qAln), 
                                n.next = 109, (0, Nn.Mb)(G, z, Q);

                              case 109:
                                H = n.sent, e.tmAlignResults = (0, Nn.Qc)(H.output), Z = (0, Nn.im)(H.matrix), $ = Z.t, 
                                Y = Z.u, R(g.structure, $, Y), M.addRepresentation(e.qRepr, {
                                    color: e.querySchemeId,
                                    name: "queryStructure"
                                }), g.addRepresentation(e.tRepr, {
                                    color: e.targetSchemeId,
                                    name: "targetStructure"
                                });

                              case 115:
                                return n.next = 117, e.drawArrows(M.structure, g.structure);

                              case 117:
                                e.setQuerySelection(), e.setTargetSelection(), M.autoView(e.querySele, e.autoViewTime), 
                                n.next = 125;
                                break;

                              case 122:
                                g.addRepresentation(e.tRepr, {
                                    color: e.targetSchemeId,
                                    name: "targetStructure"
                                }), e.setTargetSelection(), e.stage.autoView(e.autoViewTime);

                              case 125:
                              case "end":
                                return n.stop();
                            }
                        }), n, null, [ [ 12, 19 ], [ 30, 39, 42, 45 ], [ 69, 78, 81, 84 ] ]);
                    })))();
                }
            }, Qn = Gn;
            t(9121), t(6226);
            var Hn = (0, V.Z)(Qn, mn, [], !1, null, "739834d6", null);
            Hn.options.__file = "frontend/StructureViewer.vue";
            const Zn = Hn.exports;
            var $n = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("div", {
                    staticClass: "structure-panel"
                }, [ t("StructureViewerTooltip", {
                    attrs: {
                        attach: ".structure-panel"
                    }
                }), e._v(" "), t("div", {
                    ref: "structurepanel",
                    staticClass: "structure-wrapper"
                }, [ t("StructureViewerToolbar", {
                    staticStyle: {
                        position: "absolute",
                        bottom: "8px"
                    },
                    attrs: {
                        isFullscreen: e.isFullscreen,
                        isSpinning: e.isSpinning,
                        disableArrowButton: "",
                        disableQueryButton: "",
                        disableTargetButton: ""
                    },
                    on: {
                        makeImage: e.handleMakeImage,
                        makePDB: e.handleMakePDB,
                        resetView: e.handleResetView,
                        toggleFullscreen: e.handleToggleFullscreen,
                        toggleSpin: e.handleToggleSpin
                    }
                }), e._v(" "), t("div", {
                    ref: "viewport",
                    staticClass: "structure-viewer"
                }) ], 1) ], 1);
            };
            function Yn(e, n) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                        if (!e) return;
                        if ("string" == typeof e) return Wn(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Wn(e, n);
                    }(e)) || n && e && "number" == typeof e.length) {
                        t && (e = t);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        t = t.call(e);
                    },
                    n: function() {
                        var e = t.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        o = !0, a = e;
                    },
                    f: function() {
                        try {
                            s || null == t.return || t.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function Wn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            function Kn(e, n) {
                for (var t = {
                    backtrace: "",
                    qAln: "",
                    dbAln: ""
                }, r = !1, i = 0, a = 0, s = 0, o = "", l = ""; i < e.length; ) {
                    var c = e[i], u = n[i];
                    "-" === c && "-" === u || ("-" === c ? (r && (t.backtrace += "D", o += c, l += u), 
                    ++s) : "-" === u ? (r && (t.backtrace += "I", o += c, l += u), ++a) : (r ? (t.qAln += o, 
                    t.dbAln += l, o = "", l = "") : (r = !0, t.qStartPos = a, t.dbStartPos = s), t.backtrace += "M", 
                    o += c, l += u, t.qEndPos = a, t.dbEndPos = s, ++a, ++s)), ++i;
                }
                return t.qStartPos++, t.dbStartPos++, t.qSeq = e.replace(/-/g, ""), t.tSeq = n.replace(/-/g, ""), 
                t;
            }
            $n._withStripped = !0;
            const Jn = {
                name: "StructureViewerMSA",
                components: {
                    StructureViewerToolbar: kn,
                    StructureViewerTooltip: xn
                },
                mixins: [ On ],
                data: function() {
                    return {
                        structures: [],
                        curReferenceIndex: -1
                    };
                },
                props: {
                    entries: {
                        type: Array,
                        required: !0
                    },
                    selection: {
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
                                color: "#1E88E5",
                                opacity: 1
                            };
                        }
                    },
                    regularStyleParameters: {
                        type: Object,
                        default: function() {
                            return {
                                color: "#FFC107",
                                opacity: .5,
                                side: "front"
                            };
                        }
                    }
                },
                methods: {
                    resetView: function() {
                        this.stage && (this.selection.length > 0 ? this.getComponentByIndex(this.reference).autoView(this.transitionDuration) : this.stage.autoView(this.transitionDuration));
                    },
                    makePDB: function() {
                        var e = this;
                        if (this.stage) {
                            var n, t = "TITLE     Superposed structures from Foldmason alignment\nREMARK    This file was generated by the FoldMason webserver:\nREMARK      https://search.foldseek.com/foldmason\nREMARK    Please cite:\nREMARK      https://doi.org/10.1101/2024.08.01.606130\nREMARK    Warning: Non C-alpha atoms may have been re-generated by PULCHRA\nREMARK             if they are not present in the original PDB file.\n";
                            this.stage.eachComponent((function(r) {
                                var i = (0, v.Z9)("clone", r.structure), a = new v.yG;
                                a.fromArray(r.transform.elements), i.eachAtom((function(e) {
                                    var n = new v.P(e.x, e.y, e.z);
                                    n.applyMatrix4(a), e.x = n.x, e.y = n.y, e.z = n.z;
                                })), n = (n = new v.p8(i, {
                                    renumberSerial: !1
                                }).getData()).split("\n").filter((function(e) {
                                    return e.startsWith("ATOM");
                                })).join("\n");
                                var s = parseInt(r.structure.name.replace("key-", "")), o = e.entries[s].name;
                                t += "MODEL     ".concat(s, "\nREMARK    Name: ").concat(o, "\n").concat(n, "\nENDMDL\n");
                            }), "structure"), t += "END", (0, v.LR)(new Blob([ t ], {
                                type: "text/plain"
                            }), "foldmason.pdb");
                        }
                    },
                    makeImage: function() {
                        var e = this;
                        this.stage && (this.stage.viewer.setLight(void 0, void 0, void 0, .2), this.stage.makeImage({
                            trim: !0,
                            factor: this.isFullscreen ? 1 : 8,
                            antialias: !0,
                            transparent: !0
                        }).then((function(n) {
                            e.stage.viewer.setLight(void 0, void 0, void 0, e.$vuetify.theme.dark ? .4 : .2), 
                            (0, v.LR)(n, "foldmason.png");
                        })));
                    },
                    getComponentByIndex: function(e) {
                        if (this.stage) {
                            var n = this.stage.getComponentsByName("key-".concat(e));
                            return 0 === n.list.length ? -1 : n.list[0];
                        }
                    },
                    tmAlignToReference: function(e) {
                        var n = this;
                        return (0, fn.Z)(vn().mark((function t() {
                            var r, i, a, s, o, l, c, u, d, h, A, p, g, m, f, v, y;
                            return vn().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (e !== n.reference) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 2:
                                    return r = n.entries[n.reference], i = n.entries[e], a = n.getComponentByIndex(n.reference), 
                                    s = n.getComponentByIndex(e), o = Kn(r.aa, i.aa), l = ">target\n".concat(o.dbAln, "\n\n>query\n").concat(o.qAln), 
                                    t.next = 10, Promise.all([ L(a.structure, o ? "".concat(o.qStartPos, "-").concat(o.qEndPos) : ""), L(s.structure, o ? "".concat(o.dbStartPos, "-").concat(o.dbEndPos) : "") ]);

                                  case 10:
                                    c = t.sent, u = (0, b.Z)(c, 2), d = u[0], h = u[1], t.next = 17;
                                    break;

                                  case 17:
                                    return t.next = 19, (0, Nn.Mb)(h, d, l);

                                  case 19:
                                    return A = t.sent, p = A.output, g = A.matrix, m = (0, Nn.im)(g), f = m.t, v = m.u, 
                                    y = (0, Nn.Qc)(p), t.abrupt("return", Promise.resolve({
                                        matrix: B(f, v),
                                        tmResults: y,
                                        alignment: o
                                    }));

                                  case 25:
                                  case "end":
                                    return t.stop();
                                }
                            }), t);
                        })))();
                    },
                    addStructureToStage: function(e, n, t) {
                        var r = this;
                        return (0, fn.Z)(vn().mark((function i() {
                            var a, s, o;
                            return vn().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                  case 0:
                                    return a = O(t, n.replace(/-/g, ""), "A"), i.next = 3, (0, Rn.n)(a);

                                  case 3:
                                    return s = i.sent, o = new Blob([ s ], {
                                        type: "text/plain"
                                    }), i.abrupt("return", r.stage.loadFile(o, {
                                        ext: "pdb",
                                        firstModelOnly: !0,
                                        name: "key-".concat(e)
                                    }));

                                  case 6:
                                  case "end":
                                    return i.stop();
                                }
                            }), i);
                        })))();
                    },
                    shiftStructure: function(e, n, t) {
                        var r = this;
                        return (0, fn.Z)(vn().mark((function i() {
                            var a, s, o, l, c, u;
                            return vn().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                  case 0:
                                    a = e.structure, s = a.position, o = s.x, l = s.y, c = s.z, u = n * t, a.setPosition({
                                        x: o + u,
                                        y: l + u,
                                        z: c + u
                                    }), r.stage.viewer.requestRender();

                                  case 5:
                                  case "end":
                                    return i.stop();
                                }
                            }), i);
                        })))();
                    },
                    explode: function(e) {
                        var n = this;
                        return (0, fn.Z)(vn().mark((function t() {
                            return vn().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (n.stage) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 2:
                                    n.structures.forEach((function(t, r) {
                                        return n.shiftStructure(t, r, e);
                                    })), n.stage.autoView();

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }), t);
                        })))();
                    },
                    updateEntries: function(e, n) {
                        var t = this;
                        return (0, fn.Z)(vn().mark((function r() {
                            var i, a, s, o, l, c, u, d, h, A, p, g, m, f, y, C;
                            return vn().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    if (t.stage) {
                                        r.next = 2;
                                        break;
                                    }
                                    return r.abrupt("return");

                                  case 2:
                                    if (i = new Set(e), a = new Set(n), 0 !== i.size) {
                                        r.next = 7;
                                        break;
                                    }
                                    return t.stage.removeAllComponents(), r.abrupt("return");

                                  case 7:
                                    s = [], o = [], l = [], c = Yn(a), r.prev = 11, c.s();

                                  case 13:
                                    if ((u = c.n()).done) {
                                        r.next = 20;
                                        break;
                                    }
                                    if ((d = u.value) !== t.reference) {
                                        r.next = 17;
                                        break;
                                    }
                                    return r.abrupt("continue", 18);

                                  case 17:
                                    i.has(d) ? s.push(d) : o.push(d);

                                  case 18:
                                    r.next = 13;
                                    break;

                                  case 20:
                                    r.next = 25;
                                    break;

                                  case 22:
                                    r.prev = 22, r.t0 = r.catch(11), c.e(r.t0);

                                  case 25:
                                    return r.prev = 25, c.f(), r.finish(25);

                                  case 28:
                                    h = Yn(i), r.prev = 29, h.s();

                                  case 31:
                                    if ((A = h.n()).done) {
                                        r.next = 38;
                                        break;
                                    }
                                    if ((p = A.value) !== t.reference && !a.has(p)) {
                                        r.next = 35;
                                        break;
                                    }
                                    return r.abrupt("continue", 36);

                                  case 35:
                                    l.push(p);

                                  case 36:
                                    r.next = 31;
                                    break;

                                  case 38:
                                    r.next = 43;
                                    break;

                                  case 40:
                                    r.prev = 40, r.t1 = r.catch(29), h.e(r.t1);

                                  case 43:
                                    return r.prev = 43, h.f(), r.finish(43);

                                  case 46:
                                    if (g = t.reference !== t.curReferenceIndex, m = !a.has(t.reference), f = g || m, 
                                    t.curReferenceIndex = t.reference, !f) {
                                        r.next = 65;
                                        break;
                                    }
                                    if (y = t.entries[t.reference], !m) {
                                        r.next = 59;
                                        break;
                                    }
                                    return r.next = 55, t.addStructureToStage(t.reference, y.aa, y.ca);

                                  case 55:
                                    (C = r.sent).addRepresentation(t.representationStyle, t.referenceStyleParameters), 
                                    r.next = 64;
                                    break;

                                  case 59:
                                    (C = t.getComponentByIndex(t.reference)).reprList[0].setVisibility(!1), C.reprList[0].setParameters(t.referenceStyleParameters), 
                                    C.setTransform(new v.yG), C.reprList[0].setVisibility(!0);

                                  case 64:
                                    C.autoView();

                                  case 65:
                                    return r.next = 67, Promise.all(l.map(function() {
                                        var e = (0, fn.Z)(vn().mark((function e(n) {
                                            var r, i, a, s;
                                            return vn().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return r = t.entries[n], e.next = 3, t.addStructureToStage(n, r.aa, r.ca);

                                                  case 3:
                                                    return i = e.sent, e.next = 6, t.tmAlignToReference(n);

                                                  case 6:
                                                    a = e.sent, s = a.matrix, i.setTransform(s), i.addRepresentation(t.representationStyle, t.regularStyleParameters);

                                                  case 10:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }), e);
                                        })));
                                        return function(n) {
                                            return e.apply(this, arguments);
                                        };
                                    }()));

                                  case 67:
                                    return r.next = 69, Promise.all(o.map(function() {
                                        var e = (0, fn.Z)(vn().mark((function e(n) {
                                            var r;
                                            return vn().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    r = t.getComponentByIndex(n), t.stage.removeComponent(r);

                                                  case 2:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }), e);
                                        })));
                                        return function(n) {
                                            return e.apply(this, arguments);
                                        };
                                    }()));

                                  case 69:
                                    if (f) {
                                        r.next = 71;
                                        break;
                                    }
                                    return r.abrupt("return");

                                  case 71:
                                    return r.next = 73, Promise.all(s.map(function() {
                                        var e = (0, fn.Z)(vn().mark((function e(n) {
                                            var r, i, a, s, o;
                                            return vn().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    if ((r = t.getComponentByIndex(n)) && 0 !== r.reprList.length) {
                                                        e.next = 3;
                                                        break;
                                                    }
                                                    return e.abrupt("return");

                                                  case 3:
                                                    return i = (0, b.Z)(r.reprList, 1), (a = i[0]).setVisibility(!1), e.next = 7, t.tmAlignToReference(n);

                                                  case 7:
                                                    s = e.sent, o = s.matrix, a.setParameters(t.regularStyleParameters), r.setTransform(o), 
                                                    a.setVisibility(!0);

                                                  case 12:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }), e);
                                        })));
                                        return function(n) {
                                            return e.apply(this, arguments);
                                        };
                                    }()));

                                  case 73:
                                  case "end":
                                    return r.stop();
                                }
                            }), r, null, [ [ 11, 22, 25, 28 ], [ 29, 40, 43, 46 ] ]);
                        })))();
                    }
                },
                watch: {
                    "$vuetify.theme.dark": function() {
                        this.stage.viewer.setBackground(this.bgColor);
                    },
                    selection: function(e, n) {
                        this.updateEntries(e, n);
                    }
                },
                computed: {
                    bgColor: function() {
                        return this.$vuetify.theme.dark ? this.bgColorDark : this.bgColorLight;
                    },
                    ambientIntensity: function() {
                        this.$vuetify.theme.dark;
                    }
                }
            };
            t(4678);
            var Xn = (0, V.Z)(Jn, $n, [], !1, null, "06a02575", null);
            Xn.options.__file = "frontend/StructureViewerMSA.vue";
            const et = Xn.exports;
            var nt = function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("div", {
                    ref: "parentDiv",
                    staticStyle: {
                        padding: "10px",
                        height: "inherit",
                        width: "100%",
                        "overflow-y": "auto"
                    }
                }, [ t("canvas", {
                    class: e.canvasClass,
                    attrs: {
                        id: "tree"
                    },
                    on: {
                        click: e.handleClick,
                        mousemove: e.handleMouseOver,
                        mouseleave: e.handleMouseLeave
                    }
                }) ]);
            };
            function tt(e, n) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                        if (!e) return;
                        if ("string" == typeof e) return rt(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return rt(e, n);
                    }(e)) || n && e && "number" == typeof e.length) {
                        t && (e = t);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        t = t.call(e);
                    },
                    n: function() {
                        var e = t.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        o = !0, a = e;
                    },
                    f: function() {
                        try {
                            s || null == t.return || t.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function rt(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            function it(e, n) {
                var t, r = [], i = {}, a = i, s = [], o = tt(e.split(/\s*(;|\(|\)|,|:)\s*/));
                try {
                    for (o.s(); !(t = o.n()).done; ) {
                        var l = t.value;
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
                            (a = r.pop()).branches && (a.height = at(a));
                            break;

                          default:
                            l.length > 0 && (a.name = S(l), s.push(a.name));
                        }
                    }
                } catch (e) {
                    o.e(e);
                } finally {
                    o.f();
                }
                return {
                    tree: i = function(e, n) {
                        function t(e) {
                            return e.branches && 0 !== e.branches.length ? Math.min.apply(Math, (0, f.Z)(e.branches.map(t))) : n.indexOf(e.name);
                        }
                        return function e(n) {
                            if (n.branches && 0 !== n.branches.length && (n.branches.forEach(e), t(n.branches[0]) > t(n.branches[1]))) {
                                var r = [ n.branches[1], n.branches[0] ];
                                n.branches[0] = r[0], n.branches[1] = r[1];
                            }
                        }(e), e;
                    }(i, n),
                    headers: s
                };
            }
            function at(e) {
                if (!e.branches || 0 === e.branches.length) return 1;
                var n = 0;
                return e.branches.forEach((function(e) {
                    n += at(e);
                })), n;
            }
            function st(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (!e) return n;
                if (!e.branches || 0 === e.branches.length) return n;
                var t = n;
                return e.branches.forEach((function(e) {
                    t = Math.max(t, st(e, n + 1));
                })), t;
            }
            nt._withStripped = !0;
            const ot = {
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
                    drawElbowConnector: function(e, n, t, r, i) {
                        e.beginPath(), e.moveTo(n, t), e.lineTo(n, i), e.lineTo(r, i), e.strokeStyle = this.strokeStyle, 
                        e.stroke(), e.closePath();
                    },
                    isSelection: function(e) {
                        return !!this.selection && this.selection.includes(e.name);
                    },
                    isReference: function(e) {
                        return void 0 !== this.reference && -1 !== this.reference && e.name === this.order[this.reference];
                    },
                    drawTree: function(e, n, t, r, i, a) {
                        var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 100, c = n.branches ? t + i : l, u = r + a * (0 === o ? -(n.branches ? n.branches[1].height : .5) : +(n.branches ? n.branches[0].height : .5));
                        if (this.drawElbowConnector(e, t, r, c, u), n.branches) for (var d = 0; d < n.branches.length; d++) this.drawTree(e, n.branches[d], c, u, i, a, s + 1, d, l); else {
                            this.selection && (e.font = this.isSelection(n) ? this.fontSelected : this.fontNormal, 
                            e.fillStyle = this.isSelection(n) ? this.isReference(n) ? this.referenceColor : this.selectionColor : this.strokeStyle);
                            var h = n.name.length > this.maxHeaderChars ? "".concat(n.name.substring(0, this.maxHeaderChars), "…") : n.name;
                            e.fillText(h, c + 5, u + 4);
                        }
                    },
                    clearTree: function() {
                        var e = document.getElementById("tree");
                        e.getContext("2d").clearRect(0, 0, e.width, e.height);
                    },
                    visualiseTree: function() {
                        var e = this, n = document.getElementById("tree");
                        if (n) {
                            var t = n.getContext("2d");
                            t.clearRect(0, 0, n.width, n.height), t.strokeStyle = this.strokeStyle, t.font = this.fontSelected;
                            var r = 0, i = 0;
                            this.headers.forEach((function(n) {
                                var a = t.measureText(n.substring(0, e.maxHeaderChars + 3)), s = a.width, o = a.fontBoundingBoxAscent;
                                r = Math.max(r, s), i = Math.max(i, o);
                            })), i *= 2, n.style.width = "100%", n.style.height = "".concat(this.headers.length * i, "px");
                            var a = st(this.tree), s = n.offsetWidth - r, o = s / (a + 1);
                            this.headerStartX = s;
                            var l = window.devicePixelRatio;
                            n.height = this.headers.length * i * l, n.width = n.offsetWidth * l, t.scale(l, l), 
                            t.font = this.fontNormal, this.drawTree(t, this.tree, -5, this.headers.length * i, o, i, 0, 0, s);
                        }
                    },
                    handleClick: function(e) {
                        if (e.layerX > this.headerStartX) {
                            var n = e.target.height / this.headers.length, t = Math.floor(e.offsetY * window.devicePixelRatio / n), r = 0 === this.selection.length || e.altKey ? "newStructureReference" : "newStructureSelection";
                            this.$emit(r, t);
                        }
                    },
                    handleMouseOver: function(e) {
                        this.isHovering = e.layerX > this.headerStartX;
                    },
                    handleMouseLeave: function() {
                        this.isHovering = !1;
                    }
                },
                mounted: function() {
                    var e = it(this.newick, this.order), n = e.tree, t = e.headers;
                    this.tree = n, this.headers = t, this.resizeObserver = new ResizeObserver(N(this.visualiseTree, 200)).observe(this.$refs.parentDiv);
                },
                beforeDestroy: function() {
                    this.resizeObserver && this.resizeObserver.disconnect();
                }
            };
            t(6406);
            var lt = (0, V.Z)(ot, nt, [], !1, null, null, null);
            lt.options.__file = "frontend/Tree.vue";
            function ct(e, n) {
                var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                        if (!e) return;
                        if ("string" == typeof e) return ut(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ut(e, n);
                    }(e)) || n && e && "number" == typeof e.length) {
                        t && (e = t);
                        var r = 0, i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: i
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a, s = !0, o = !1;
                return {
                    s: function() {
                        t = t.call(e);
                    },
                    n: function() {
                        var e = t.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        o = !0, a = e;
                    },
                    f: function() {
                        try {
                            s || null == t.return || t.return();
                        } finally {
                            if (o) throw a;
                        }
                    }
                };
            }
            function ut(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r;
            }
            const dt = {
                components: {
                    MSAView: gn,
                    StructureViewer: Zn,
                    StructureViewerMSA: et,
                    Tree: lt.exports
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
                        matchRatio: 0,
                        structureViewerSelection: [],
                        structureViewerReference: 0,
                        isLoadingStructure: !1,
                        numMinimapGradients: 30,
                        settingsPanelOpen: !0
                    };
                },
                watch: {
                    matchRatio: N((function() {
                        this.handleUpdateMatchRatio();
                    }), 400)
                },
                beforeMount: function() {
                    this.handleUpdateMatchRatio();
                    var e, n = ct(this.entries);
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            var t = e.value;
                            t.name = S(t.name);
                        }
                    } catch (e) {
                        n.e(e);
                    } finally {
                        n.f();
                    }
                },
                mounted: function() {
                    window.addEventListener("scroll", this.handleScroll), this.structureViewerSelection = [ 0, 1 ];
                },
                beforeDestroy: function() {
                    window.removeEventListener("scroll", this.handleScroll);
                },
                computed: {
                    alnLen: function() {
                        return this.entries.length > 0 ? this.mask.reduce((function(e, n) {
                            return e + n;
                        }), 0) : 0;
                    },
                    structureViewerProps: function() {
                        return {
                            structures: this.entries
                        };
                    },
                    structureViewerEntries: function() {
                        var e = this;
                        return this.structureViewerSelection.map((function(n) {
                            return e.entries[n];
                        }));
                    },
                    msaViewEntries: function() {
                        var e = this;
                        return this.entries.map((function(n) {
                            for (var t = {
                                name: n.name,
                                aa: "",
                                ss: ""
                            }, r = 0; r < e.mask.length; r++) 1 === e.mask[r] && (t.aa += n.aa[r], t.ss += n.ss[r]);
                            return t;
                        }));
                    },
                    msaViewScores: function() {
                        var e = this;
                        return this.scores.filter((function(n, t) {
                            return 1 === e.mask[t];
                        }));
                    },
                    settingsBtnIcon: function() {
                        return this.settingsPanelOpen ? p.ChevronLeft : p.ChevronRight;
                    }
                },
                methods: {
                    toggleSettingsPanel: function() {
                        this.settingsPanelOpen = !this.settingsPanelOpen;
                    },
                    handleUpdateMatchRatio: function() {
                        0 === this.matchRatio ? this.mask = new Array(this.entries[0].aa.length).fill(1) : this.mask = function(e, n) {
                            for (var t = e[0].aa.length, r = new Array(t).fill(0), i = 0; i < t; i++) {
                                for (var a = 0, s = 0, o = 0; o < e.length; o++) "-" === e[o].aa[i] ? a++ : s++;
                                s / (a + s) >= n && (r[i] = 1);
                            }
                            return r;
                        }(this.entries, this.matchRatio);
                    },
                    handleStructureLoadingChange: function(e) {
                        this.isLoadingStructure = e;
                    },
                    handleNewStructureViewerReference: function(e) {
                        if (e === this.structureViewerReference) return this.structureViewerSelection = [], 
                        void (this.structureViewerReference = -1);
                        var n = this.structureViewerSelection.slice();
                        -1 === n.indexOf(e) && n.push(e), this.structureViewerSelection = n, this.structureViewerReference = e;
                    },
                    handleNewStructureViewerSelection: function(e) {
                        if (e === this.structureViewerReference) return this.structureViewerSelection = [], 
                        void (this.structureViewerReference = -1);
                        var n = this.structureViewerSelection.slice(), t = n.indexOf(e);
                        -1 !== t ? n.splice(t, 1) : n.push(e), this.structureViewerSelection = n;
                    },
                    getEntry: function(e) {
                        return this.entries.find((function(n) {
                            return n.name === e;
                        }));
                    },
                    makeMockAlignment: function(e, n) {
                        var t = this.entries[e], r = this.entries[n];
                        if (t && r) {
                            var i = function(e, n) {
                                for (var t = {
                                    backtrace: ""
                                }, r = !1, i = 0, a = 0, s = 0; i < e.length; ) {
                                    var o = e[i], l = n[i];
                                    "-" === o && "-" === l || ("-" === o ? (r && (t.backtrace += "D"), ++s) : "-" === l ? (r && (t.backtrace += "I"), 
                                    ++a) : (r || (r = !0, t.qStartPos = a, t.dbStartPos = s), t.backtrace += "M", t.qEndPos = a, 
                                    t.dbEndPos = s, ++a, ++s)), ++i;
                                }
                                return t.qStartPos++, t.dbStartPos++, t;
                            }(t.aa, r.aa);
                            return i.query = t.name, i.target = r.name, i.qCa = t.ca, i.tCa = r.ca, i.qSeq = t.aa.replace(/-/g, ""), 
                            i.qAln = t.aa, i.tSeq = r.aa.replace(/-/g, ""), i.dbAln = r.aa, {
                                queryMap: k(i.qStartPos, i.qAln),
                                targetMap: k(i.dbStartPos, i.dbAln),
                                alignment: i
                            };
                        }
                    },
                    handleMapBlockClick: function(e) {
                        var n = document.querySelector(".minimap").offsetHeight + 60, t = this.$refs.msaView.$el.children[e].getBoundingClientRect();
                        window.scrollTo({
                            behavior: "smooth",
                            top: t.top + window.scrollY - n
                        });
                    },
                    handleAlphabetChange: function(e) {
                        this.alphabet = e.target.value;
                    },
                    gradientBlockCSS: function(e) {
                        return {
                            width: "100%"
                        };
                    },
                    handleLineLenChange: function(e) {
                        this.lineLen = parseInt(e.target.value);
                    },
                    minimapBlock: function(e) {
                        return {
                            "--bg-color": this.blockIndex === e ? "rgba(255, 0, 0, 0.3)" : null,
                            "--bg-color-hover": this.$vuetify.theme.dark ? "rgba(255, 255, 255, 0.5)" : "rgba(100, 100, 100, 0.5)",
                            "flex-basis": "".concat(this.gradientRatio[e], "%")
                        };
                    },
                    handleScroll: function() {
                        var e = this.$refs.msaView.$el.getBoundingClientRect(), n = Math.ceil(this.alnLen / this.lineLen), t = e.height / n, r = window.scrollY + e.top, i = r + e.height, a = window.scrollY + 180;
                        this.blockIndex = a < r ? 0 : a > i ? n : Math.floor((a - r) / t);
                    },
                    handleLineLen: function(e) {
                        this.lineLen = e;
                    },
                    handleCSSGradient: function(e) {
                        var n = Math.ceil(this.alnLen / this.lineLen), t = e.length / n;
                        if (this.cssGradients = Array.from({
                            length: n
                        }, (function() {
                            return [];
                        })), t < this.numMinimapGradients) this.cssGradients.forEach((function(n, r) {
                            var i = r * t, a = e.slice(i, i + t);
                            n.push.apply(n, (0, f.Z)(a));
                        })); else for (var r = (t - 1) / (this.numMinimapGradients - 1), i = 0; i < n; i++) for (var a = 0; a < this.numMinimapGradients; a++) this.cssGradients[i].push(e[Math.round(a * r) + i * t]);
                        var s = this.cssGradients[n - 1][0].split("%,").length / 2, o = (n - 1) * this.lineLen + s;
                        this.gradientRatio = new Array(n - 1).fill(this.lineLen / o * 100), this.gradientRatio.push(s / o * 100);
                    }
                }
            };
            t(7316);
            var ht = t(7024), At = t(7894), pt = t(4317), gt = t(9866), mt = (0, V.Z)(dt, Xe, [], !1, null, null, null);
            $()(mt, {
                VBtn: Y.Z,
                VBtnToggle: ke.Z,
                VCard: W.Z,
                VCardText: K.ZB,
                VCardTitle: K.EB,
                VCol: ht.Z,
                VContainer: Ee.Z,
                VIcon: J.Z,
                VRow: At.Z,
                VSimpleTable: pt.Z,
                VTextField: gt.Z
            }), mt.options.__file = "frontend/MSA.vue";
            const ft = {
                components: {
                    MSA: mt.exports,
                    Local: $e
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
                    var e = this;
                    document.onreadystatechange = function() {
                        if ("complete" == document.readyState) {
                            var n = document.getElementById("data");
                            if (!n) return null;
                            var t = JSON.parse(n.textContent);
                            e.handleUploadData(t);
                        }
                    };
                },
                methods: {
                    clearData: function() {
                        this.key = "", this.entries = [], this.scores = [], this.statistics = {};
                    },
                    handleUploadData: function(e) {
                        this.clearData(), this.key = T(), this.entries = e.entries, this.scores = e.scores, 
                        this.statistics = e.statistics, this.tree = e.tree, this.entries.forEach((function(e) {
                            e.name = S(e.name);
                        }));
                    },
                    handleDownloadData: function() {
                        this.entries && I({
                            entries: this.entries,
                            scores: this.scores,
                            statistics: this.statistics,
                            tree: this.tree
                        }, "FoldMason-".concat(T(), ".json"));
                    }
                }
            };
            var bt = (0, V.Z)(ft, Je, [], !1, null, null, null);
            bt.options.__file = "frontend/MSALocal.vue";
            const vt = {
                components: {
                    ResultLocal: Ke,
                    MSALocal: bt.exports
                }
            };
            var yt = t(1095), Ct = t(5091), wt = (0, V.Z)(vt, g, [], !1, null, null, null);
            $()(wt, {
                VApp: yt.Z,
                VMain: Ct.Z
            }), wt.options.__file = "frontend/AppLocal.vue";
            const xt = wt.exports;
            t(654);
            r.Z.use(i.Z), r.Z.use(h);
            var St = {
                mmseqs: t(8615).Z,
                foldseek: t(5473).Z,
                foldmason: t(5106).Z
            };
            window.document.title = St.foldmason.APP_NAME + " Search Server";
            var Mt = window.matchMedia("(prefers-color-scheme: dark)"), Tt = new i.Z({
                icons: {
                    iconfont: "mdiSvg"
                },
                theme: {
                    dark: Mt.matches
                }
            });
            Mt.addEventListener("change", (function(e) {
                Tt.framework.theme.dark = e.matches;
            })), r.Z.use({
                install: function(e, n) {
                    e.prototype.$APP = "foldmason", e.prototype.$STRINGS = St.foldmason, e.prototype.$ELECTRON = !1, 
                    e.prototype.$LOCAL = !0, e.prototype.$MDI = p, e.prototype.__OS__ = {
                        arch: "web",
                        platform: "web"
                    }, e.prototype.mmseqsVersion = "web", e.prototype.saveResult = function() {}, e.prototype.handleTitleBarDoubleClick = function() {};
                }
            });
            new r.Z({
                el: "#app",
                vuetify: Tt,
                render: function(e) {
                    return e(xt);
                }
            });
        },
        9837: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, 'body, svg text, #app.electron {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif !important;\n}\n\nbody {\n    background-color: #fff;\n}\n\n@media screen and (prefers-color-scheme: dark) {\n    html, body {\n        background-color: #121212;\n        color-scheme: dark;\n    }\n}\n\nsvg a {\n    cursor: pointer;\n}\n\n.monospace, .mono, pre {\n    font-family: ui-monospace, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n}\n\n.loading {\n    -webkit-animation: spin 1000ms infinite linear;\n    animation: spin 1000ms infinite linear;\n}\n\n@-webkit-keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n@keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n\n.input-group .tooltip label {\n    max-width: 100%;\n}\n\nmain.content {\n    max-width: 1536px;\n}\n\n@media print {\n    nav.v-navigation-drawer, header.v-app-bar {\n        display: none !important;\n    }\n    main {\n        padding: 1cm !important;\n    }\n    .v-card, .v-sheet {\n        border: 0px solid transparent !important;\n        outline: 0px solid transparent !important;\n        box-shadow: none !important;\n    }\n}\n\n#app.electron a {\n    -webkit-user-drag: none;\n}\n\n#app.electron .v-toolbar__content, #app.electron .v-input label {\n    user-select: none;\n}', "", {
                version: 3,
                sources: [ "webpack://./frontend/assets/style.css" ],
                names: [],
                mappings: "AAAA;IACI,8JAA8J;AAClK;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI;QACI,yBAAyB;QACzB,kBAAkB;IACtB;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gOAAgO;AACpO;;AAEA;IACI,8CAA8C;IAC9C,sCAAsC;AAC1C;;AAEA;IACI;QACI,+BAA+B;QAC/B,uBAAuB;IAC3B;IACA;QACI,iCAAiC;QACjC,yBAAyB;IAC7B;AACJ;AACA;IACI;QACI,+BAA+B;QAC/B,uBAAuB;IAC3B;IACA;QACI,iCAAiC;QACjC,yBAAyB;IAC7B;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI;QACI,wBAAwB;IAC5B;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,wCAAwC;QACxC,yCAAyC;QACzC,2BAA2B;IAC/B;AACJ;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB",
                sourcesContent: [ 'body, svg text, #app.electron {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif !important;\n}\n\nbody {\n    background-color: #fff;\n}\n\n@media screen and (prefers-color-scheme: dark) {\n    html, body {\n        background-color: #121212;\n        color-scheme: dark;\n    }\n}\n\nsvg a {\n    cursor: pointer;\n}\n\n.monospace, .mono, pre {\n    font-family: ui-monospace, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n}\n\n.loading {\n    -webkit-animation: spin 1000ms infinite linear;\n    animation: spin 1000ms infinite linear;\n}\n\n@-webkit-keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n@keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n\n.input-group .tooltip label {\n    max-width: 100%;\n}\n\nmain.content {\n    max-width: 1536px;\n}\n\n@media print {\n    nav.v-navigation-drawer, header.v-app-bar {\n        display: none !important;\n    }\n    main {\n        padding: 1cm !important;\n    }\n    .v-card, .v-sheet {\n        border: 0px solid transparent !important;\n        outline: 0px solid transparent !important;\n        box-shadow: none !important;\n    }\n}\n\n#app.electron a {\n    -webkit-user-drag: none;\n}\n\n#app.electron .v-toolbar__content, #app.electron .v-input label {\n    user-select: none;\n}' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        5426: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, '\n.residues {\n    font-family: InconsolataClustal, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n    white-space: pre;\n}\n.alignment-wrapper-outer {\n    display: inline-block;\n    overflow-x: auto;\n}\n.inselection, .inselection * {\n    user-select: none;\n}\n.inselection span.target, span.target * {\n    user-select: text !important;\n}\n.alignment-wrapper-inner .line {\n    display: inline-block;\n    margin-bottom: 0.5em;\n    white-space: nowrap;\n}\n', "", {
                version: 3,
                sources: [ "webpack://./frontend/Alignment.vue" ],
                names: [],
                mappings: ";AA0FA;IACA,sOAAA;IACA,gBAAA;AACA;AACA;IACA,qBAAA;IACA,gBAAA;AACA;AACA;IACA,iBAAA;AACA;AACA;IACA,4BAAA;AACA;AACA;IACA,qBAAA;IACA,oBAAA;IACA,mBAAA;AACA",
                sourcesContent: [ '<template>\n    <div :id="alnIndex" class="alignment-wrapper-inner">\n        <span class="monospace" v-for="i in Math.max(1, Math.ceil(alignment.alnLength / lineLen))" :key="i">\n            <span :id="i" class="line" ref="lines">\n                <span>Q&nbsp;{{padNumber(getQueryRowStartPos(i), (Math.max(alignment.qStartPos, alignment.dbStartPos) + alignment.alnLength+"").length, \'&nbsp;\')}}</span>&nbsp;\x3c!--\n                --\x3e<ResidueSpan sequenceType="query">\x3c!--\n                    --\x3e{{alignment.qAln.substring((i-1)*lineLen,  (i-1)*lineLen+lineLen)}}\x3c!--\n                --\x3e</ResidueSpan><br>\x3c!--\n                --\x3e<span>{{\'&nbsp;\'.repeat(3+(Math.max(alignment.qStartPos, alignment.dbStartPos) + alignment.alnLength+"").length)}}</span>\x3c!--\n                --\x3e<span class="residues diff">{{formatAlnDiff(alignment.qAln.substring((i-1)*lineLen,  (i-1)*lineLen+lineLen), alignment.dbAln.substring((i-1)*lineLen, (i-1)*lineLen+lineLen))}}</span><br>\x3c!--\n                --\x3e<span>T&nbsp;{{padNumber(getTargetRowStartPos(i), (Math.max(alignment.qStartPos, alignment.dbStartPos) + alignment.alnLength+"").length, \'&nbsp;\')}}</span>&nbsp;\x3c!--\n                --\x3e<ResidueSpan\n                    sequenceType="target"\n                    :selectionStart="getSelectionStart(i)"\n                    :selectionEnd="getSelectionEnd(i)"\n                    @selectstart="onSelectStart($event, alnIndex, i)"\n                    @pointerup="onPointerUp($event, alnIndex, i)"\n                >{{alignment.dbAln.substring((i-1)*lineLen, (i-1)*lineLen+lineLen)}}\x3c!--\n                --\x3e</ResidueSpan>\n            </span><br>\n        </span>\n    </div>\n</template>\n\n<script>\n    \nimport ResidueSpan from \'./ResidueSpan.vue\'\n\n// cat blosum62.out  | grep -v \'^#\' | awk \'NR == 1 { for (i = 1; i <= NF; i++) { r[i] = $i; } next; } { col = $1; for (i = 2; i <= NF; i++) { print col,r[i-1],$i; } }\' | awk \'$3 > 0 && $1 != $2 { printf "\\""$1""$2"\\",";}\'\nconst blosum62Sim = [\n    "AG", "AS", "DE", "DN",\n    "ED", "EK", "EQ", "FL",\n    "FM", "FW", "FY", "GA",\n    "HN", "HQ", "HY", "IL",\n    "IM", "IV", "KE", "KQ",\n    "KR", "LF", "LI", "LM",\n    "LV", "MF", "MI", "ML",\n    "MV", "ND", "NH", "NQ",\n    "NS", "QE", "QH", "QK",\n    "QN", "QR", "RK", "RQ",\n    "SA", "SN", "ST", "TS",\n    "VI", "VL", "VM", "WF",\n    "WY", "YF", "YH", "YW"\n]\n\nexport default {\n    props: [\'alignment\', \'lineLen\', \'queryMap\', \'targetMap\', \'showhelp\', \'alnIndex\', \'highlights\'],\n    components: { ResidueSpan },\n    methods: {\n        getSelectionStart(i) {\n            return (i > 0 && i <= this.highlights.length) ? this.highlights[i-1][0] : 0;\n        },\n        getSelectionEnd(i) {\n            return (i > 0 && i <= this.highlights.length) ? this.highlights[i-1][1] : 0;\n        },\n\n        // Get the index of a given residue in the alignment\n        getQueryIndex(index) { return this.queryMap[index] },\n        getTargetIndex(index) { return this.targetMap[index] },\n        getFirstResidueNumber(map, i) {\n            let start = this.lineLen * (i - 1)\n            while (map[start] === null) start--\n            return map[start]\n        },\n        getQueryRowStartPos(i) { return this.getFirstResidueNumber(this.queryMap, i) },\n        getTargetRowStartPos(i) { return this.getFirstResidueNumber(this.targetMap, i) },\n        formatAlnDiff(seq1, seq2) {\n            if (seq1.length != seq2.length) return \'\'\n            var res = \'\'\n            for (var i = 0; i < seq1.length; i++) {\n                if (seq1[i] == seq2[i]) res += seq1[i];\n                else if (blosum62Sim.indexOf(seq1[i] + seq2[i]) != -1) res += \'+\';\n                else res += \' \';\n            }\n            return res;\n        },\n        padNumber(nr, n, str){\n            return Array(n - String(nr).length + 1).join(str || \'0\') + nr\n        },\n        onSelectStart(event, alnIndex, lineNo) {\n            this.$emit(\'residueSelectStart\', event, alnIndex, lineNo);\n        },\n        onPointerUp(event, alnIndex, lineNo) {\n            this.$emit(\'residuePointerUp\', event, alnIndex, lineNo);\n        }\n    }, \n}\n<\/script>\n\n<style>\n.residues {\n    font-family: InconsolataClustal, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n    white-space: pre;\n}\n.alignment-wrapper-outer {\n    display: inline-block;\n    overflow-x: auto;\n}\n.inselection, .inselection * {\n    user-select: none;\n}\n.inselection span.target, span.target * {\n    user-select: text !important; \n}\n.alignment-wrapper-inner .line {\n    display: inline-block;\n    margin-bottom: 0.5em;\n    white-space: nowrap;\n}\n</style>\n' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        7562: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, "\n.alignment-panel[data-v-89abb500] {\n    display: inline-flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    width: 100%;\n}\n.alignment-wrapper-outer[data-v-89abb500] {\n    display: inline-flex;\n    flex-direction: column;\n}\n.alignment-wrapper-inner[data-v-89abb500] {\n    padding-bottom: 1em;\n}\n.alignment-structure-wrapper[data-v-89abb500] {\n    min-width:450px;\n    margin: 0;\n    margin-bottom: auto;\n}\n@media screen and (max-width: 960px) {\n.alignment-wrapper-outer[data-v-89abb500], .alignment-panel[data-v-89abb500]  {\n        display: flex;\n}\n.alignment-panel[data-v-89abb500] {\n        flex-direction: column-reverse;\n}\n.alignment-structure-wrapper[data-v-89abb500] {\n        padding-bottom: 1em;\n}\n.alignment-wrapper-outer[data-v-89abb500], .alignment-structure-wrapper[data-v-89abb500] {\n        align-self: center;\n}\n}\n@media screen and (min-width: 961px) {\n.alignment-structure-wrapper[data-v-89abb500] {\n        padding-left: 2em;\n}\n}\n\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/AlignmentPanel.vue" ],
                names: [],
                mappings: ";AAwPA;IACA,oBAAA;IACA,iBAAA;IACA,uBAAA;IACA,WAAA;AACA;AAEA;IACA,oBAAA;IACA,sBAAA;AACA;AAEA;IACA,mBAAA;AACA;AAEA;IACA,eAAA;IACA,SAAA;IACA,mBAAA;AACA;AAEA;AACA;QACA,aAAA;AACA;AACA;QACA,8BAAA;AACA;AACA;QACA,mBAAA;AACA;AAEA;QACA,kBAAA;AACA;AACA;AAEA;AACA;QACA,iBAAA;AACA;AACA",
                sourcesContent: [ '<template>\n    <div class="alignment-panel" slot="content">\n        <div class="alignment-wrapper-outer">\n            <div style="line-height: 1.2em; display: flex; flex-direction: row; width: 100%; justify-content: space-between; margin-bottom: 1em;">\n                <small v-if="$APP == \'foldseek\'">\n                    Select target residues to highlight their structure.<br style="height: 0.2em">\n                    Click on highlighted sequences to dehighlight the corresponding chain.\n                </small>\n                <v-btn\n                    small\n                    title="Clear sequence selection"\n                    @click="clearAllSelection"\n                    :disabled="hasSelection"\n                >\n                    {{ (alignments[0].hasOwnProperty("complexu")) ? "Clear all selections" : "Clear selection" }}&nbsp;\n                    <v-icon style="width: 16px;">{{ $MDI.CloseCircle }}</v-icon>\n                </v-btn>\n            </div>\n\n            <template v-for="(alignment, index) in alignments">\n                {{ alignment.query.lastIndexOf(\'_\') != -1 ? alignment.query.substring(alignment.query.lastIndexOf(\'_\')+1) : \'\' }} ➔ {{ alignment.target }}\n                <Alignment\n                    :key="`aln2-${alignment.id}`"\n                    :alnIndex="index"\n                    :alignment="alignment"\n                    :lineLen="lineLen"\n                    :queryMap="queryMaps[index]"\n                    :targetMap="targetMaps[index]"\n                    :showhelp="index == alignments.length - 1"\n                    :highlights="highlights[index]"\n                    ref="alignments"\n                    @residueSelectStart="onResidueSelectStart"\n                    @residuePointerUp="onResiduePointerUp"\n                />\n            </template>\n        </div>\n        <div v-if=" $APP == \'foldseek\'" class="alignment-structure-wrapper">\n            <StructureViewer\n                :key="`struc2-${alignments[0].id}`"\n                :alignments="alignments"\n                :highlights="structureHighlights" \n                :hits="hits"\n                bgColorLight="white"\n                bgColorDark="#1E1E1E"\n                qColor="lightgrey"\n                tColor="red"\n                qRepr="cartoon"\n                tRepr="cartoon"\n                ref="structureViewer"\n            />\n        </div>\n    </div>\n</template>\n\n<script>\nimport Alignment from \'./Alignment.vue\'\nimport { makePositionMap } from \'./Utilities.js\'\n\n/**\n * Count characters up until the given node in the parent span.\n * e.g. with layout <span 1/><span 2/><span 3/>\n * Text selection which starts/ends in span 3 will have offset relative only to span 3,\n * so we need to include length of spans 1 + 2\n */\nfunction calculateOffset(node) {\n    let container = node.closest("span.residues")\n    let children = container.querySelectorAll("span");\n    let length = 0;\n    for (let child of children) {\n        if (child === node)\n            break;\n        length += child.textContent.length;\n    }\n    return length;\n}\n\nfunction countCharacter(string, char) {\n    let count = 0;\n    for (let c of string) {\n        if (c === char) count++;\n    }\n    return count;\n}\n\nexport default {\n    components: { StructureViewer: () => __APP__ == "foldseek" ? import(\'./StructureViewer.vue\') : null, Alignment },\n    data: () => ({\n        queryMap: null,\n        targetMap: null,\n        highlights: [],\n        structureHighlights: [],\n        isSelecting: false,\n    }),\n    props: {\n        alignments: { type: Array, required: true, },\n        lineLen: { type: Number, required: true, },\n        hits: { type: Object }\n    },\n    computed: {\n        hasSelection() {\n            return !this.structureHighlights.some(e => e !== null);\n        }\n    },\n    methods: {\n        getFirstResidueNumber(map, i) {\n            let start = this.lineLen * (i - 1);\n            while (map[start] === null) start--;\n            return map[start];\n        },\n        getQueryRowStartPos(alnIndex, i) { return this.getFirstResidueNumber(this.queryMaps[alnIndex], i) },\n        getTargetRowStartPos(alnIndex, i) { return this.getFirstResidueNumber(this.targetMaps[alnIndex], i) },\n        setEmptyHighlight() {\n            this.highlights = this.alignments.map(a => new Array(Math.ceil(a.qAln.length / this.lineLen)).fill([undefined, undefined]))\n        },\n        setEmptyStructureHighlight() {\n            this.structureHighlights = new Array(this.alignments.length).fill(null);\n        },\n        clearAllSelection() {\n            this.setEmptyHighlight();\n            this.setEmptyStructureHighlight();\n        },\n        setAlignmentSelection(selections) {\n            // array per alignment, then array per line in alignment\n            this.setEmptyHighlight();\n            for (let [ alnId, startLine, startOffset, endLine, endOffset, _ ] of selections) {\n                for (let i = startLine; i <= endLine; i++) {\n                    if (i === startLine) {\n                        this.highlights[alnId][i] = [startOffset, (i === endLine) ? endOffset : this.lineLen];\n                    } else if (i === endLine) {\n                        this.highlights[alnId][i] = [0, endOffset];\n                    } else {\n                        this.highlights[alnId][i] = [0, this.lineLen];\n                    }\n                }\n            }\n        },\n        updateMaps() {\n            if (!this.alignments) return\n            this.queryMaps = [];\n            this.targetMaps = [];\n            for (let alignment of this.alignments) {\n                this.queryMaps.push(makePositionMap(alignment.qStartPos, alignment.qAln));\n                this.targetMaps.push(makePositionMap(alignment.dbStartPos, alignment.dbAln));\n            }\n\n        },\n        onResidueSelectStart(event, alnIndex, lineNo) {\n            this.isSelecting = true;\n            document.querySelector(".alignment-wrapper-outer")\n                .classList.add("inselection");\n        },\n        onResiduePointerUp(event, targetAlnIndex, targetLineNo) {\n            if (!this.isSelecting) {\n                // handle as click\n                // this.highlights[targetAlnIndex].splice(targetLineNo - 1, 1, [undefined, undefined]);\n                let a = this.alignments[targetAlnIndex];\n                this.highlights.splice(targetAlnIndex, 1, new Array(Math.ceil(a.qAln.length / this.lineLen)).fill([undefined, undefined]));\n                this.structureHighlights.splice(targetAlnIndex, 1, null);\n                window.getSelection().removeAllRanges();\n                return;\n            }\n            var selection = window.getSelection()\n            \n            // Get text and (sequence) starting position for each selected alignment\n            let chunks = [];\n            let chunk = "";\n            let prevWrapper = null;\n            let currWrapper = null;\n            let lineNo = 0;\n            let alnIndex = 0;\n            let start = {};\n            for (let i = 0; i < selection.rangeCount; i++) {\n                let range = selection.getRangeAt(i);\n                currWrapper = range.startContainer.parentElement.closest(".alignment-wrapper-inner");\n                alnIndex = parseInt(currWrapper.id);\n                lineNo = parseInt(range.startContainer.parentElement.closest(".line").id);\n                \n                // Start/end containers will either be:\n                // #text  - Start/end inside a span, so calculate lengths of spans until that point\n                // <span> - Start/end of entire span (e.g. multiline selection). Start = 0, end = line length\n                let sc = range.startContainer;\n                let ec = range.endContainer;\n                let startOffset = (sc.nodeType === 3) ? range.startOffset + calculateOffset(sc.parentElement) : 0;\n                let endOffset = (ec.nodeType === 3) ? range.endOffset + calculateOffset(ec.parentElement) : this.lineLen;\n                \n                // Test for new container (alignment), store starting line/offset & calculate position in sequence\n                // If in the same alignment, extend sequence and update end line/offset\n                if (!prevWrapper) {\n                    prevWrapper = currWrapper;\n                    let preText = range.startContainer.textContent.slice(0, range.startOffset);\n                    start = {\n                        startLine: lineNo,\n                        startOffset: startOffset,\n                        seqStart: this.getTargetRowStartPos(alnIndex, lineNo) + startOffset - countCharacter(preText, \'-\')\n                    }\n                } else if (currWrapper != prevWrapper) {\n                    chunks.push([parseInt(prevWrapper.id), start, chunk]);\n                    chunk = "";\n                    prevWrapper = currWrapper;\n                    let preText = range.startContainer.textContent.slice(0, startOffset);\n                    start = {\n                        startLine: lineNo,\n                        startOffset: startOffset,\n                        seqStart: this.getTargetRowStartPos(alnIndex, lineNo) + startOffset - countCharacter(preText, \'-\')\n                    }\n                }\n                chunk += range.toString();\n                start.endLine = lineNo;\n                start.endOffset = endOffset;\n            }\n            chunks.push([parseInt(prevWrapper.id), start, chunk])\n\n            // For structure: aln Id, start in sequence, selection length\n            for (let [ alnId, { seqStart }, text ] of chunks) {\n                this.structureHighlights.splice(alnId, 1, [seqStart, text.replace(/[-]/g, \'\').length]);\n            }\n            \n            // For sequence: aln Id, line and start position (in start line), line and end position (in end line)\n            this.setAlignmentSelection(chunks.map(([ alnId, { startLine, startOffset, endLine, endOffset }, chunk ]) => (\n                [ alnId, startLine - 1, startOffset, endLine - 1, endOffset, chunk.length ]\n            )));\n\n            // Make everything else selectable again\n            this.resetUserSelect();\n\n            // Clear selection afterwards to prevent weird highlighting after inserting spans\n            window.getSelection().removeAllRanges();\n        },\n        resetUserSelect() {\n            this.isSelecting = false;\n            let noselects = document.querySelectorAll(".inselection");\n            noselects.forEach(el => { el.classList.remove("inselection") });\n        }\n    },\n    watch: {\n        \'alignment\': function() {\n            this.updateMaps()\n        }\n    },\n    beforeMount() {\n        this.updateMaps()\n        this.setEmptyHighlight();\n        this.setEmptyStructureHighlight();\n    },\n}\n<\/script>\n\n<style scoped>\n.alignment-panel {\n    display: inline-flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    width: 100%;\n}\n\n.alignment-wrapper-outer {\n    display: inline-flex;\n    flex-direction: column;\n}\n\n.alignment-wrapper-inner {\n    padding-bottom: 1em;\n}\n\n.alignment-structure-wrapper {\n    min-width:450px;\n    margin: 0;\n    margin-bottom: auto;\n}\n\n@media screen and (max-width: 960px) {\n    .alignment-wrapper-outer, .alignment-panel  {\n        display: flex;\n    }\n    .alignment-panel {\n        flex-direction: column-reverse;\n    }\n    .alignment-structure-wrapper {\n        padding-bottom: 1em;\n    }\n\n    .alignment-wrapper-outer, .alignment-structure-wrapper {\n        align-self: center;\n    }\n}\n\n@media screen and (min-width: 961px) {\n    .alignment-structure-wrapper {\n        padding-left: 2em;\n    }\n}\n\n</style>\n\n<style>\nspan.selected {\n    border-radius: 4px;\n    background-color: rgba(0, 255, 255, 0.1);\n    box-shadow: 0 0 .4em .1em rgba(0, 255, 255, 0.5);\n    cursor: pointer;\n}\n/* TODO Some sort of banding thing here? */\n/* .alignment-wrapper-inner:nth-child(odd) span.selected {\n    background-color: rgba(0, 255, 100, 0.1);\n    box-shadow: 0 0 .4em .1em rgba(0, 255, 100, 0.5);\n} */\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        5229: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, "\nspan.selected {\n    border-radius: 4px;\n    background-color: rgba(0, 255, 255, 0.1);\n    box-shadow: 0 0 .4em .1em rgba(0, 255, 255, 0.5);\n    cursor: pointer;\n}\n/* TODO Some sort of banding thing here? */\n/* .alignment-wrapper-inner:nth-child(odd) span.selected {\n    background-color: rgba(0, 255, 100, 0.1);\n    box-shadow: 0 0 .4em .1em rgba(0, 255, 100, 0.5);\n} */\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/AlignmentPanel.vue" ],
                names: [],
                mappings: ";AAuSA;IACA,kBAAA;IACA,wCAAA;IACA,gDAAA;IACA,eAAA;AACA;AACA,0CAAA;AACA;;;GAGA",
                sourcesContent: [ '<template>\n    <div class="alignment-panel" slot="content">\n        <div class="alignment-wrapper-outer">\n            <div style="line-height: 1.2em; display: flex; flex-direction: row; width: 100%; justify-content: space-between; margin-bottom: 1em;">\n                <small v-if="$APP == \'foldseek\'">\n                    Select target residues to highlight their structure.<br style="height: 0.2em">\n                    Click on highlighted sequences to dehighlight the corresponding chain.\n                </small>\n                <v-btn\n                    small\n                    title="Clear sequence selection"\n                    @click="clearAllSelection"\n                    :disabled="hasSelection"\n                >\n                    {{ (alignments[0].hasOwnProperty("complexu")) ? "Clear all selections" : "Clear selection" }}&nbsp;\n                    <v-icon style="width: 16px;">{{ $MDI.CloseCircle }}</v-icon>\n                </v-btn>\n            </div>\n\n            <template v-for="(alignment, index) in alignments">\n                {{ alignment.query.lastIndexOf(\'_\') != -1 ? alignment.query.substring(alignment.query.lastIndexOf(\'_\')+1) : \'\' }} ➔ {{ alignment.target }}\n                <Alignment\n                    :key="`aln2-${alignment.id}`"\n                    :alnIndex="index"\n                    :alignment="alignment"\n                    :lineLen="lineLen"\n                    :queryMap="queryMaps[index]"\n                    :targetMap="targetMaps[index]"\n                    :showhelp="index == alignments.length - 1"\n                    :highlights="highlights[index]"\n                    ref="alignments"\n                    @residueSelectStart="onResidueSelectStart"\n                    @residuePointerUp="onResiduePointerUp"\n                />\n            </template>\n        </div>\n        <div v-if=" $APP == \'foldseek\'" class="alignment-structure-wrapper">\n            <StructureViewer\n                :key="`struc2-${alignments[0].id}`"\n                :alignments="alignments"\n                :highlights="structureHighlights" \n                :hits="hits"\n                bgColorLight="white"\n                bgColorDark="#1E1E1E"\n                qColor="lightgrey"\n                tColor="red"\n                qRepr="cartoon"\n                tRepr="cartoon"\n                ref="structureViewer"\n            />\n        </div>\n    </div>\n</template>\n\n<script>\nimport Alignment from \'./Alignment.vue\'\nimport { makePositionMap } from \'./Utilities.js\'\n\n/**\n * Count characters up until the given node in the parent span.\n * e.g. with layout <span 1/><span 2/><span 3/>\n * Text selection which starts/ends in span 3 will have offset relative only to span 3,\n * so we need to include length of spans 1 + 2\n */\nfunction calculateOffset(node) {\n    let container = node.closest("span.residues")\n    let children = container.querySelectorAll("span");\n    let length = 0;\n    for (let child of children) {\n        if (child === node)\n            break;\n        length += child.textContent.length;\n    }\n    return length;\n}\n\nfunction countCharacter(string, char) {\n    let count = 0;\n    for (let c of string) {\n        if (c === char) count++;\n    }\n    return count;\n}\n\nexport default {\n    components: { StructureViewer: () => __APP__ == "foldseek" ? import(\'./StructureViewer.vue\') : null, Alignment },\n    data: () => ({\n        queryMap: null,\n        targetMap: null,\n        highlights: [],\n        structureHighlights: [],\n        isSelecting: false,\n    }),\n    props: {\n        alignments: { type: Array, required: true, },\n        lineLen: { type: Number, required: true, },\n        hits: { type: Object }\n    },\n    computed: {\n        hasSelection() {\n            return !this.structureHighlights.some(e => e !== null);\n        }\n    },\n    methods: {\n        getFirstResidueNumber(map, i) {\n            let start = this.lineLen * (i - 1);\n            while (map[start] === null) start--;\n            return map[start];\n        },\n        getQueryRowStartPos(alnIndex, i) { return this.getFirstResidueNumber(this.queryMaps[alnIndex], i) },\n        getTargetRowStartPos(alnIndex, i) { return this.getFirstResidueNumber(this.targetMaps[alnIndex], i) },\n        setEmptyHighlight() {\n            this.highlights = this.alignments.map(a => new Array(Math.ceil(a.qAln.length / this.lineLen)).fill([undefined, undefined]))\n        },\n        setEmptyStructureHighlight() {\n            this.structureHighlights = new Array(this.alignments.length).fill(null);\n        },\n        clearAllSelection() {\n            this.setEmptyHighlight();\n            this.setEmptyStructureHighlight();\n        },\n        setAlignmentSelection(selections) {\n            // array per alignment, then array per line in alignment\n            this.setEmptyHighlight();\n            for (let [ alnId, startLine, startOffset, endLine, endOffset, _ ] of selections) {\n                for (let i = startLine; i <= endLine; i++) {\n                    if (i === startLine) {\n                        this.highlights[alnId][i] = [startOffset, (i === endLine) ? endOffset : this.lineLen];\n                    } else if (i === endLine) {\n                        this.highlights[alnId][i] = [0, endOffset];\n                    } else {\n                        this.highlights[alnId][i] = [0, this.lineLen];\n                    }\n                }\n            }\n        },\n        updateMaps() {\n            if (!this.alignments) return\n            this.queryMaps = [];\n            this.targetMaps = [];\n            for (let alignment of this.alignments) {\n                this.queryMaps.push(makePositionMap(alignment.qStartPos, alignment.qAln));\n                this.targetMaps.push(makePositionMap(alignment.dbStartPos, alignment.dbAln));\n            }\n\n        },\n        onResidueSelectStart(event, alnIndex, lineNo) {\n            this.isSelecting = true;\n            document.querySelector(".alignment-wrapper-outer")\n                .classList.add("inselection");\n        },\n        onResiduePointerUp(event, targetAlnIndex, targetLineNo) {\n            if (!this.isSelecting) {\n                // handle as click\n                // this.highlights[targetAlnIndex].splice(targetLineNo - 1, 1, [undefined, undefined]);\n                let a = this.alignments[targetAlnIndex];\n                this.highlights.splice(targetAlnIndex, 1, new Array(Math.ceil(a.qAln.length / this.lineLen)).fill([undefined, undefined]));\n                this.structureHighlights.splice(targetAlnIndex, 1, null);\n                window.getSelection().removeAllRanges();\n                return;\n            }\n            var selection = window.getSelection()\n            \n            // Get text and (sequence) starting position for each selected alignment\n            let chunks = [];\n            let chunk = "";\n            let prevWrapper = null;\n            let currWrapper = null;\n            let lineNo = 0;\n            let alnIndex = 0;\n            let start = {};\n            for (let i = 0; i < selection.rangeCount; i++) {\n                let range = selection.getRangeAt(i);\n                currWrapper = range.startContainer.parentElement.closest(".alignment-wrapper-inner");\n                alnIndex = parseInt(currWrapper.id);\n                lineNo = parseInt(range.startContainer.parentElement.closest(".line").id);\n                \n                // Start/end containers will either be:\n                // #text  - Start/end inside a span, so calculate lengths of spans until that point\n                // <span> - Start/end of entire span (e.g. multiline selection). Start = 0, end = line length\n                let sc = range.startContainer;\n                let ec = range.endContainer;\n                let startOffset = (sc.nodeType === 3) ? range.startOffset + calculateOffset(sc.parentElement) : 0;\n                let endOffset = (ec.nodeType === 3) ? range.endOffset + calculateOffset(ec.parentElement) : this.lineLen;\n                \n                // Test for new container (alignment), store starting line/offset & calculate position in sequence\n                // If in the same alignment, extend sequence and update end line/offset\n                if (!prevWrapper) {\n                    prevWrapper = currWrapper;\n                    let preText = range.startContainer.textContent.slice(0, range.startOffset);\n                    start = {\n                        startLine: lineNo,\n                        startOffset: startOffset,\n                        seqStart: this.getTargetRowStartPos(alnIndex, lineNo) + startOffset - countCharacter(preText, \'-\')\n                    }\n                } else if (currWrapper != prevWrapper) {\n                    chunks.push([parseInt(prevWrapper.id), start, chunk]);\n                    chunk = "";\n                    prevWrapper = currWrapper;\n                    let preText = range.startContainer.textContent.slice(0, startOffset);\n                    start = {\n                        startLine: lineNo,\n                        startOffset: startOffset,\n                        seqStart: this.getTargetRowStartPos(alnIndex, lineNo) + startOffset - countCharacter(preText, \'-\')\n                    }\n                }\n                chunk += range.toString();\n                start.endLine = lineNo;\n                start.endOffset = endOffset;\n            }\n            chunks.push([parseInt(prevWrapper.id), start, chunk])\n\n            // For structure: aln Id, start in sequence, selection length\n            for (let [ alnId, { seqStart }, text ] of chunks) {\n                this.structureHighlights.splice(alnId, 1, [seqStart, text.replace(/[-]/g, \'\').length]);\n            }\n            \n            // For sequence: aln Id, line and start position (in start line), line and end position (in end line)\n            this.setAlignmentSelection(chunks.map(([ alnId, { startLine, startOffset, endLine, endOffset }, chunk ]) => (\n                [ alnId, startLine - 1, startOffset, endLine - 1, endOffset, chunk.length ]\n            )));\n\n            // Make everything else selectable again\n            this.resetUserSelect();\n\n            // Clear selection afterwards to prevent weird highlighting after inserting spans\n            window.getSelection().removeAllRanges();\n        },\n        resetUserSelect() {\n            this.isSelecting = false;\n            let noselects = document.querySelectorAll(".inselection");\n            noselects.forEach(el => { el.classList.remove("inselection") });\n        }\n    },\n    watch: {\n        \'alignment\': function() {\n            this.updateMaps()\n        }\n    },\n    beforeMount() {\n        this.updateMaps()\n        this.setEmptyHighlight();\n        this.setEmptyStructureHighlight();\n    },\n}\n<\/script>\n\n<style scoped>\n.alignment-panel {\n    display: inline-flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    width: 100%;\n}\n\n.alignment-wrapper-outer {\n    display: inline-flex;\n    flex-direction: column;\n}\n\n.alignment-wrapper-inner {\n    padding-bottom: 1em;\n}\n\n.alignment-structure-wrapper {\n    min-width:450px;\n    margin: 0;\n    margin-bottom: auto;\n}\n\n@media screen and (max-width: 960px) {\n    .alignment-wrapper-outer, .alignment-panel  {\n        display: flex;\n    }\n    .alignment-panel {\n        flex-direction: column-reverse;\n    }\n    .alignment-structure-wrapper {\n        padding-bottom: 1em;\n    }\n\n    .alignment-wrapper-outer, .alignment-structure-wrapper {\n        align-self: center;\n    }\n}\n\n@media screen and (min-width: 961px) {\n    .alignment-structure-wrapper {\n        padding-left: 2em;\n    }\n}\n\n</style>\n\n<style>\nspan.selected {\n    border-radius: 4px;\n    background-color: rgba(0, 255, 255, 0.1);\n    box-shadow: 0 0 .4em .1em rgba(0, 255, 255, 0.5);\n    cursor: pointer;\n}\n/* TODO Some sort of banding thing here? */\n/* .alignment-wrapper-inner:nth-child(odd) span.selected {\n    background-color: rgba(0, 255, 100, 0.1);\n    box-shadow: 0 0 .4em .1em rgba(0, 255, 100, 0.5);\n} */\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        5479: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, "\n[data-v-1e22231c] .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/Local.vue" ],
                names: [],
                mappings: ";AAmGA;IACA,gCAAA;AACA",
                sourcesContent: [ '<template>\n<div style="overflow: visible; height: 100%;">\n    <v-app-bar app :height="\'48px\'" fixed clipped-left>\n        <img height="28px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTAiIHZpZXdCb3g9IjAgMCA0NjggMzA2Ij48cGF0aCBkPSJNMzcyIDIwMnMxNC0xIDM3LTE5YzIzLTE3IDQwLTQ5IDU1LTU1bC0xMTQgMjQtNCAzMiAyNiAxOFoiIHN0eWxlPSJmaWxsOiNmN2QxOGE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik02MiAxMzlTODcgMjEgMjY5IDJsMSAxLTQ2IDYxcy00MC0zLTU1IDdjMCAwIDE5LTEzIDY5LTRzNTAtMjAgNTAtMjAgOCAyMiAwIDI5bDI5IDE0LTE4IDRzMTI1LTEyIDE2NyAzM2MwIDAtMjYgMTctNjAgMjAtNTYgNS02MiAyMi02MiAyMnMyNS0xMCA0MyA0bC0yMiA5czE1IDggMTUgMjNsLTI2IDEwczM2LTE4IDUyLTdsLTI0IDE4czIzIDMgMzggMTVsLTMyIDhzMTUgMiAyNyAzMWwtNDUtNnM3IDkgNCAzMGwtMjUtMjJzLTE3IDQ2LTE1OCAyQzQ5IDI0MCA1NiAyMjEgNTAgMTkxbC0yNi0xczItMTUgMTgtMjFMMiAxNDJzMjQtMTMgNDItOGwtOC0yNXMyOSAxMSAyNiAzMFoiIHN0eWxlPSJmaWxsOiNlMTMyMTM7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0xMDEgMjUzYy00Ni0yMyA4LTEzNCAzNy0xNTEgMjgtMTYgNTcgNyA2MyAxOSAwIDAgMjMtMTggNTctN3M0OSA0NyAzNiAxMTVjLTggNDEtMjQgNTgtMzUgNjUtNyA0LTE0IDUtMjEgMy0yNS02LTEwNS0yNy0xMzctNDRaIiBzdHlsZT0iZmlsbDojZjdkMThhO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0LjQ4cHgiLz48cGF0aCBkPSJNMTM2IDExMnMtNDEtMTAtNTYgMThjLTE1IDI3IDEyIDM4IDI3IDQzIDE2IDQgNDcgNCA1Ny0xM3MtMS0zOC0yOC00OFoiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0xMTYgMTYwYzE2IDggMzQtMzcgMjAtNDQtMTQtNi00MCAzNS0yMCA0NFoiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NC40OHB4Ii8+PHBhdGggZD0iTTI4NCAxNDhjLTQxLTE1LTU5IDUtNjUgMjJzMiA0NCA0MiA1MyA1MC00IDU2LTE5YzUtMTYgNi00MS0zMy01NloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0yNDggMTk5YzE5IDkgNDctNDEgMjMtNTJzLTQzIDQzLTIzIDUyWm0tODUtMTVjMS04IDIwLTEgMjAgNSAwIDctOSA4LTEyIDctNC0xLTktNi04LTEyWiIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0LjQ4cHgiLz48cGF0aCBkPSJNMTMyIDEyMGM3IDMtMiAxNS02IDEyczMtMTQgNi0xMlptMTI4IDMwYzcgMy0yIDE1LTYgMTItNC0yIDMtMTQgNi0xMloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm8iLz48cGF0aCBkPSJtMTE1IDIxMiA5LTRzLTggNyAwIDEzYzggNyAyNS00IDQ2LTEgMjEgNCA0MCAxOSA1NSAyMSAxNiAzIDI0IDEgMjMtNC0xLTYgNSA3IDUgNyIgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NC40OHB4Ii8+PC9zdmc+" />\n        &nbsp;\n        <v-app-bar-title class="ml-2">{{ title }}</v-app-bar-title>\n        <v-spacer />\n        <v-file-input\n            id="input-uploadData"\n            class="shrink"\n            type="file"\n            accept="application/json"\n            placeholder="Load JSON data file"\n            style="position: relative; top: 30%;"\n            @change="uploadData" \n            single-line\n            outlined\n            filled\n            flat\n            dense\n        />\n        <v-toolbar-items>\n            <v-btn text @click="downloadData">\n                <v-icon>\n                    {{ $MDI.FileDownloadOutline }}\n                </v-icon>\n            </v-btn>\n            <v-btn text rel="external noopener" target="_blank" class="hidden-sm-and-down"\n                   v-for="i in ($STRINGS.NAV_URL_COUNT - 0)" :key="i" :href="$STRINGS[\'NAV_URL_\' + i]">{{ $STRINGS["NAV_TITLE_" + i]}}</v-btn>\n        </v-toolbar-items>\n    </v-app-bar>\n\n    <template v-if="hasMainContent">\n        <slot></slot>\n    </template>\n    <template v-else>\n        <v-container grid-list-md fluid pa-2>\n            <v-layout wrap>\n                <v-flex xs12>\n                    <v-card rounded="0">\n                        <v-card-title primary-title class="mb-0 pa-4">\n                            No data loaded\n                        </v-card-title>\n                    </v-card>\n                </v-flex>\n            </v-layout>\n        </v-container>       \n    </template>\n\n    <v-container grid-list-md fluid pa-2 style="margin-bottom: 500px;">\n        <v-layout wrap>\n            <v-flex xs12>\n                <v-card rounded="0">\n                <v-card-title primary-title class="pb-0 mb-0">\n                    <div class="text-h5 mb-0">Reference</div>\n                </v-card-title>\n                <v-card-title primary-title class="pt-0 mt-0">\n                    <p class="text-subtitle-2 mb-0" v-html="$STRINGS.CITATION"></p>\n                </v-card-title>\n                </v-card>\n            </v-flex>\n        </v-layout>\n    </v-container>\n</div>\n</template>\n\n<script>\nexport default {\n    props: {\n        title: { type: String, required: true }\n    },\n    computed: {\n        hasMainContent() {\n            return this.$slots.default !== undefined && this.$slots.default.length > 0;\n        }\n    },\n    methods: {\n        uploadData(file) {\n            if (!file) {\n                return;\n            }\n            let fr = new FileReader();\n            fr.addEventListener(\n                "load",\n                (e) => {\n                    let data = JSON.parse(e.target.result);\n                    this.$emit("uploadData", data);\n                }\n            );\n            fr.readAsText(file)\n        },\n        downloadData() {\n            this.$emit("downloadData");\n        },\n    }\n}\n<\/script>\n\n<style scoped>\n::v-deep .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n</style>\n<style>\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        7212: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, "\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/Local.vue" ],
                names: [],
                mappings: ";AAwGA;IACA,oCAAA;AACA;AAEA;IACA,oCAAA;AACA",
                sourcesContent: [ '<template>\n<div style="overflow: visible; height: 100%;">\n    <v-app-bar app :height="\'48px\'" fixed clipped-left>\n        <img height="28px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTAiIHZpZXdCb3g9IjAgMCA0NjggMzA2Ij48cGF0aCBkPSJNMzcyIDIwMnMxNC0xIDM3LTE5YzIzLTE3IDQwLTQ5IDU1LTU1bC0xMTQgMjQtNCAzMiAyNiAxOFoiIHN0eWxlPSJmaWxsOiNmN2QxOGE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik02MiAxMzlTODcgMjEgMjY5IDJsMSAxLTQ2IDYxcy00MC0zLTU1IDdjMCAwIDE5LTEzIDY5LTRzNTAtMjAgNTAtMjAgOCAyMiAwIDI5bDI5IDE0LTE4IDRzMTI1LTEyIDE2NyAzM2MwIDAtMjYgMTctNjAgMjAtNTYgNS02MiAyMi02MiAyMnMyNS0xMCA0MyA0bC0yMiA5czE1IDggMTUgMjNsLTI2IDEwczM2LTE4IDUyLTdsLTI0IDE4czIzIDMgMzggMTVsLTMyIDhzMTUgMiAyNyAzMWwtNDUtNnM3IDkgNCAzMGwtMjUtMjJzLTE3IDQ2LTE1OCAyQzQ5IDI0MCA1NiAyMjEgNTAgMTkxbC0yNi0xczItMTUgMTgtMjFMMiAxNDJzMjQtMTMgNDItOGwtOC0yNXMyOSAxMSAyNiAzMFoiIHN0eWxlPSJmaWxsOiNlMTMyMTM7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0xMDEgMjUzYy00Ni0yMyA4LTEzNCAzNy0xNTEgMjgtMTYgNTcgNyA2MyAxOSAwIDAgMjMtMTggNTctN3M0OSA0NyAzNiAxMTVjLTggNDEtMjQgNTgtMzUgNjUtNyA0LTE0IDUtMjEgMy0yNS02LTEwNS0yNy0xMzctNDRaIiBzdHlsZT0iZmlsbDojZjdkMThhO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0LjQ4cHgiLz48cGF0aCBkPSJNMTM2IDExMnMtNDEtMTAtNTYgMThjLTE1IDI3IDEyIDM4IDI3IDQzIDE2IDQgNDcgNCA1Ny0xM3MtMS0zOC0yOC00OFoiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0xMTYgMTYwYzE2IDggMzQtMzcgMjAtNDQtMTQtNi00MCAzNS0yMCA0NFoiIHN0eWxlPSJmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NC40OHB4Ii8+PHBhdGggZD0iTTI4NCAxNDhjLTQxLTE1LTU5IDUtNjUgMjJzMiA0NCA0MiA1MyA1MC00IDU2LTE5YzUtMTYgNi00MS0zMy01NloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQuNDhweCIvPjxwYXRoIGQ9Ik0yNDggMTk5YzE5IDkgNDctNDEgMjMtNTJzLTQzIDQzLTIzIDUyWm0tODUtMTVjMS04IDIwLTEgMjAgNSAwIDctOSA4LTEyIDctNC0xLTktNi04LTEyWiIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0LjQ4cHgiLz48cGF0aCBkPSJNMTMyIDEyMGM3IDMtMiAxNS02IDEyczMtMTQgNi0xMlptMTI4IDMwYzcgMy0yIDE1LTYgMTItNC0yIDMtMTQgNi0xMloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm8iLz48cGF0aCBkPSJtMTE1IDIxMiA5LTRzLTggNyAwIDEzYzggNyAyNS00IDQ2LTEgMjEgNCA0MCAxOSA1NSAyMSAxNiAzIDI0IDEgMjMtNC0xLTYgNSA3IDUgNyIgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NC40OHB4Ii8+PC9zdmc+" />\n        &nbsp;\n        <v-app-bar-title class="ml-2">{{ title }}</v-app-bar-title>\n        <v-spacer />\n        <v-file-input\n            id="input-uploadData"\n            class="shrink"\n            type="file"\n            accept="application/json"\n            placeholder="Load JSON data file"\n            style="position: relative; top: 30%;"\n            @change="uploadData" \n            single-line\n            outlined\n            filled\n            flat\n            dense\n        />\n        <v-toolbar-items>\n            <v-btn text @click="downloadData">\n                <v-icon>\n                    {{ $MDI.FileDownloadOutline }}\n                </v-icon>\n            </v-btn>\n            <v-btn text rel="external noopener" target="_blank" class="hidden-sm-and-down"\n                   v-for="i in ($STRINGS.NAV_URL_COUNT - 0)" :key="i" :href="$STRINGS[\'NAV_URL_\' + i]">{{ $STRINGS["NAV_TITLE_" + i]}}</v-btn>\n        </v-toolbar-items>\n    </v-app-bar>\n\n    <template v-if="hasMainContent">\n        <slot></slot>\n    </template>\n    <template v-else>\n        <v-container grid-list-md fluid pa-2>\n            <v-layout wrap>\n                <v-flex xs12>\n                    <v-card rounded="0">\n                        <v-card-title primary-title class="mb-0 pa-4">\n                            No data loaded\n                        </v-card-title>\n                    </v-card>\n                </v-flex>\n            </v-layout>\n        </v-container>       \n    </template>\n\n    <v-container grid-list-md fluid pa-2 style="margin-bottom: 500px;">\n        <v-layout wrap>\n            <v-flex xs12>\n                <v-card rounded="0">\n                <v-card-title primary-title class="pb-0 mb-0">\n                    <div class="text-h5 mb-0">Reference</div>\n                </v-card-title>\n                <v-card-title primary-title class="pt-0 mt-0">\n                    <p class="text-subtitle-2 mb-0" v-html="$STRINGS.CITATION"></p>\n                </v-card-title>\n                </v-card>\n            </v-flex>\n        </v-layout>\n    </v-container>\n</div>\n</template>\n\n<script>\nexport default {\n    props: {\n        title: { type: String, required: true }\n    },\n    computed: {\n        hasMainContent() {\n            return this.$slots.default !== undefined && this.$slots.default.length > 0;\n        }\n    },\n    methods: {\n        uploadData(file) {\n            if (!file) {\n                return;\n            }\n            let fr = new FileReader();\n            fr.addEventListener(\n                "load",\n                (e) => {\n                    let data = JSON.parse(e.target.result);\n                    this.$emit("uploadData", data);\n                }\n            );\n            fr.readAsText(file)\n        },\n        downloadData() {\n            this.$emit("downloadData");\n        },\n    }\n}\n<\/script>\n\n<style scoped>\n::v-deep .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n</style>\n<style>\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        6791: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, "\n.gradient-block-col {\n    position: relative;\n    display: inline-block;\n    border: 1px solid grey; \n    height: 80px;\n}\n.gradient-block {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n.gradient-row {\n    flex: 1;\n}\n.minimap {\n    position: sticky;\n    top: 48px;\n    padding: 16px;\n    margin-top: 1em;\n    margin-bottom: 2px;\n    height: fit-content;\n    z-index: 1;\n}\n.minimap-col {\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n}\n.gradient-block-col::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--bg-color);\n    z-index: 2;\n}\n.gradient-block-col:hover:before {\n    background-color: var(--bg-color-hover);\n    cursor: pointer;\n}\n.input-label {\n    margin: 0 8px 0 0 !important;\n}\n.input-btn {\n    height: 25px;\n}\ndiv.input-div-wrapper {\n    display: flex;\n    flex-direction: column;\n    font-size: 13px;\n    height: 80px;\n    text-align: center;\n    align-items: center;\n    justify-content: space-between;\n    padding: 2px 0;\n}\ndiv.input-div {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n}\ndiv.input-div .v-text-field {\n    min-height: 0 !important;\n    max-height: 20px;\n    max-width: 80px;\n    padding: 0 !important;\n}\ndiv.input-div .v-input__control, div.input-div .v-input__control * {\n    padding: 0;\n    min-height: 0 !important;\n    max-height: 20px;\n}\ndiv.input-div .v-input__slot {\n    padding: 0 4px !important;\n}\n@media only screen and (min-width: 800px) {\n.flex-col {\n        flex: 1 1 0px;\n        height: 500px;\n}\n.flex-col:nth-child(1) {\n        flex: 3;\n        padding-right: 6px;\n}\n.flex-col:nth-child(2),\n    .flex-col:nth-child(3) {\n        flex: 4.5;\n}\n.flex-col:nth-child(3) {\n        padding-left: 6px;\n}\n}\n@media only screen and (max-width: 800px) {\n.flex-col {\n        height: 400px;\n        flex-basis: 100%;\n        padding-bottom: 6px;\n        padding-top: 6px;\n}\n.flex-col:nth-child(1) {\n        height: 300px;\n}\n}\n.expansion-panel {\n    /* transition: width 0.3s ease; */\n    overflow: hidden;\n    width: 100%;\n    position: relative;\n}\n.expansion-panel:not(.is-expanded) {\n    width: 0;\n}\n.toggle-button {\n    color: black;\n    z-index: 2;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/MSA.vue" ],
                names: [],
                mappings: ";AAocA;IACA,kBAAA;IACA,qBAAA;IACA,sBAAA;IACA,YAAA;AACA;AACA;IACA,aAAA;IACA,sBAAA;IACA,YAAA;AACA;AACA;IACA,OAAA;AACA;AACA;IACA,gBAAA;IACA,SAAA;IACA,aAAA;IACA,eAAA;IACA,kBAAA;IACA,mBAAA;IACA,UAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,YAAA;IACA,WAAA;IACA,UAAA;IACA,SAAA;AACA;AACA;IACA,WAAA;IACA,kBAAA;IACA,MAAA;IACA,OAAA;IACA,WAAA;IACA,YAAA;IACA,iCAAA;IACA,UAAA;AACA;AACA;IACA,uCAAA;IACA,eAAA;AACA;AACA;IACA,4BAAA;AACA;AACA;IACA,YAAA;AACA;AACA;IACA,aAAA;IACA,sBAAA;IACA,eAAA;IACA,YAAA;IACA,kBAAA;IACA,mBAAA;IACA,8BAAA;IACA,cAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,8BAAA;IACA,WAAA;AACA;AACA;IACA,wBAAA;IACA,gBAAA;IACA,eAAA;IACA,qBAAA;AACA;AACA;IACA,UAAA;IACA,wBAAA;IACA,gBAAA;AACA;AACA;IACA,yBAAA;AACA;AACA;AACA;QACA,aAAA;QACA,aAAA;AACA;AACA;QACA,OAAA;QACA,kBAAA;AACA;AACA;;QAEA,SAAA;AACA;AACA;QACA,iBAAA;AACA;AACA;AACA;AACA;QACA,aAAA;QACA,gBAAA;QACA,mBAAA;QACA,gBAAA;AACA;AACA;QACA,aAAA;AACA;AACA;AACA;IACA,iCAAA;IACA,gBAAA;IACA,WAAA;IACA,kBAAA;AACA;AACA;IACA,QAAA;AACA;AACA;IACA,YAAA;IACA,UAAA;AACA",
                sourcesContent: [ '<template>\n<div>\n    <v-container fluid pa-2 style="overflow: visible; height: 100%;">\n        <v-row>\n            <v-col class="flex-col">\n                <v-card style="height: 100%">\n                    <v-card-title>Summary</v-card-title>\n                    <v-card-text>\n                        <v-simple-table style="height: 100%;" id="settings" class="settings auto-height-table">\n                            <tbody>\n                                <tr v-if="$LOCAL && statistics.hasOwnProperty(\'db\')">\n                                    <td>Database</td>\n                                    <td id="msa-database">{{ statistics.db }}</td>\n                                </tr>\n                                <tr v-if="$LOCAL && statistics.hasOwnProperty(\'msaFile\')">\n                                    <td>MSA file</td>\n                                    <td id="msa-file">{{ statistics.msaFile }}</td>\n                                </tr>\n                                <tr v-if="statistics.hasOwnProperty(\'msaLDDT\')">\n                                    <td>MSA LDDT</td>\n                                    <td id="msa-lddt">{{ statistics.msaLDDT.toFixed(3) }}</td>\n                                </tr>\n                                <tr v-if="statistics.hasOwnProperty(\'cmdString\')">\n                                    <td>Command</td>\n                                    <td id="msa-cmd">{{ statistics.cmdString }}</td>\n                                </tr>\n                            </tbody>\n                        </v-simple-table>\n                    </v-card-text>\n                </v-card>\n            </v-col>\n            <v-col class="flex-col" v-if="tree">\n                <v-card class="fill-height" style="position: relative;">\n                    <v-card-title style="position: absolute; left: 0; top: 0; margin: 0; padding: 16px; z-index: 1;">Guide Tree</v-card-title>\n                    <Tree\n                        :newick="tree"\n                        :order="entries.map(e => e.name)"\n                        :selection="structureViewerSelection.map(i => entries[i].name)"\n                        :reference="structureViewerReference"\n                        @newStructureSelection="handleNewStructureViewerSelection"\n                        @newStructureReference="handleNewStructureViewerReference"\n                    />\n                </v-card>\n            </v-col>\n            <v-col class="flex-col">\n                <v-card class="fill-height" style="position: relative;">\n                    <v-card-title style="position: absolute; left: 0; top: 0; margin: 0; padding: 16px; z-index: 1;">Structure</v-card-title>\n                    <div v-if="structureViewerSelection" style="padding: 10px; height: 100%; width: 100%;">\n                        <StructureViewerMSA\n                            :entries="entries"\n                            :selection="structureViewerSelection"\n                            :reference="structureViewerReference"\n                            @loadingChange="handleStructureLoadingChange"\n                        />\n                    </div>\n                    <v-card-text v-else>\n                        No structures loaded.\n                    </v-card-text>\n                </v-card>\n            </v-col>\n        </v-row>\n        <v-card class="minimap fill-height">\n            <v-row dense v-if="cssGradients" style="align-items: center;">\n                <v-col align="center" no-gutters style="max-width: fit-content; margin-right: 4px; position: relative;">\n                    <div style="display: flex; flex-direction: row;">\n                        <div class="input-div-wrapper expansion-panel" :class="{ \'is-expanded\': settingsPanelOpen }">\n                            <div class="input-div">\n                                <label\n                                    title="Toggle between AA and 3Di alphabets"\n                                    class="input-label"\n                                >Alphabet</label>\n                                <v-btn-toggle dense mandatory color="primary" v-model="alphabet">\n                                    <v-btn x-small value="aa" style="width: 40px;">AA</v-btn>\n                                    <v-btn x-small value="ss" style="width: 40px;">3Di</v-btn>\n                                </v-btn-toggle>\n                            </div>\n                            <div class="input-div">\n                                <label\n                                    title="Hide columns with percentage of gaps above this cutoff"\n                                    class="input-label"\n                                >Gaps</label>\n                                <v-text-field\n                                    v-model="matchRatio"\n                                    label="0.0"\n                                    default="0.00"\n                                    type="number"\n                                    min="0"\n                                    max="1"\n                                    step="0.01"\n                                    single-line\n                                    hide-details\n                                    solo\n                                    flat\n                                    dense\n                                    style="max-width: 80px; max-height: 20px;"\n                                />                       \n                            </div>\n                            <div class="input-div">\n                                <label\n                                    title="Toggle between per-column LDDT and 3Di score matrix-based colorschemes"\n                                    class="input-label"\n                                >Colours</label>\n                                <v-btn-toggle dense mandatory color="primary" v-model="colorScheme">\n                                    <v-btn x-small value="lddt" style="width: 40px;">LDDT</v-btn>\n                                    <v-btn x-small value="3di"  style="width: 40px;">3Di</v-btn>\n                                </v-btn-toggle>\n                            </div>\n                        </div>\n                        <div style="position: relative; display: flex; justify-content: center; align-items: center; width: fit-content; height: 80px;">\n                            <v-btn class="toggle-button" @click="toggleSettingsPanel" small icon title="Toggle MSA viewing options">\n                                <v-icon>{{ settingsBtnIcon }}</v-icon>\n                            </v-btn>\n                        </div>\n                    </div>\n                </v-col>\n                <v-col class="minimap-col">\n                    <div\n                        v-for="(block, i) in cssGradients"\n                        :key="\'col-\' + i"\n                        class="gradient-block-col"\n                        :style="minimapBlock(i)"\n                        @click="handleMapBlockClick(i)"\n                    >\n                        <div class="gradient-block">\n                            <div\n                                v-for="(gradient, j) in block"\n                                :key="\'gradient-\' + j"\n                                class="gradient-row"\n                                :style="{ \'background-image\': gradient }"\n                            />\n                        </div>\n                    </div>\n                </v-col>\n            </v-row>\n        </v-card>\n        <v-card pa-2>\n            <MSAView\n                :entries="msaViewEntries"\n                :scores="msaViewScores"\n                :alnLen="alnLen"\n                :alphabet="alphabet"\n                :colorScheme="colorScheme"\n                :selectedStructures="structureViewerSelection"\n                :referenceStructure="structureViewerReference"\n                :matchRatio="parseFloat(matchRatio)"\n                @cssGradients="handleCSSGradient"\n                @lineLen="handleLineLen"\n                @newStructureSelection="handleNewStructureViewerSelection"\n                @newStructureReference="handleNewStructureViewerReference"\n                ref="msaView"\n            />\n        </v-card>\n    </v-container>\n</div>\n</template>\n\n<script>\nimport MSAView from \'./MSAView.vue\';\nimport StructureViewer from \'./StructureViewer.vue\';\nimport StructureViewerMSA from \'./StructureViewerMSA.vue\';\nimport Tree from \'./Tree.vue\';\nimport { debounce, makePositionMap, tryFixName } from \'./Utilities.js\'\nimport MDI from \'./MDI.js\';\n\nfunction makeMatchRatioMask(entries, ratio) {\n    const columnLength = entries[0].aa.length;\n    const mask = new Array(columnLength).fill(0);\n    for (let i = 0; i < columnLength; i++) {\n        let gap = 0;\n        let nonGap = 0;\n        for (let j = 0; j < entries.length; j++) {\n            if (entries[j].aa[i] === \'-\') {\n                gap++;\n            } else {\n                nonGap++;\n            }\n        }\n        let fraction = nonGap / (gap + nonGap);\n        if (fraction >= ratio) {\n            mask[i] = 1;\n        }\n    }\n    return mask;\n}\n\nfunction mockAlignment(one, two) {\n    let res = { backtrace: "" };\n    let started = false; // flag for first Match column in backtrace\n    let m = 0;           // index in msa\n    let qr = 0;          // index in seq\n    let tr = 0;\n    while (m < one.length) {\n        const qc = one[m];\n        const tc = two[m];\n        if (qc === \'-\' && tc === \'-\') {\n            // Skip gap columns\n        } else if (qc === \'-\') {\n            if (started) res.backtrace += \'D\';\n            ++tr;\n        } else if (tc === \'-\') {\n            if (started) res.backtrace += \'I\';\n            ++qr;\n        } else {\n            if (!started) {\n                started = true;\n                res.qStartPos = qr;\n                res.dbStartPos = tr;\n            }\n            res.backtrace += \'M\';\n            res.qEndPos = qr;\n            res.dbEndPos = tr;\n            ++qr;\n            ++tr;\n        }\n        ++m;\n    }\n    res.qStartPos++;\n    res.dbStartPos++;\n    return res;\n}\n\nexport default {\n    components: {\n        MSAView,\n        StructureViewer,\n        StructureViewerMSA,\n        Tree\n    },\n    props: {\n        entries: [],\n        scores: [],\n        statistics: {},\n        tree: ""\n    },\n    data() {\n        return {\n            mask: [],\n            structures: [],       \n            lineLen: 80,\n            cssGradients: null,\n            gradientRatio: null,\n            blockIndex: 0,\n            alphabet: \'aa\',\n            colorScheme: \'lddt\',\n            matchRatio: 0.0,\n            structureViewerSelection: [],\n            structureViewerReference: 0,\n            isLoadingStructure: false,\n            numMinimapGradients: 30,\n            settingsPanelOpen: true,\n        }\n    },    \n    watch: {\n        matchRatio: debounce(function() {\n            this.handleUpdateMatchRatio();\n        }, 400)\n    },\n    beforeMount() {\n        this.handleUpdateMatchRatio();\n        for (let entry of this.entries) {\n            entry.name = tryFixName(entry.name)\n        }\n    },\n    mounted() {\n        window.addEventListener("scroll", this.handleScroll);\n        this.structureViewerSelection = [0, 1];\n    },\n    beforeDestroy() {\n        window.removeEventListener("scroll", this.handleScroll);\n    },\n    computed: {\n        alnLen() {\n            if (this.entries.length > 0) {\n                return this.mask.reduce((count, value) => count + value, 0);\n                // return this.entries[0].aa.length;\n            }\n            return 0;\n        },\n        structureViewerProps() {\n            return { structures: this.entries };\n        },\n        structureViewerEntries() {\n            return this.structureViewerSelection.map(index => this.entries[index]);\n        },\n        msaViewEntries() {\n            const entries = this.entries.map(entry => {\n                const copy = {\n                    name: entry.name,\n                    aa: "",\n                    ss: ""\n                }\n                for (let i = 0; i < this.mask.length; i++) {\n                    if (this.mask[i] === 1) {\n                        copy.aa += entry.aa[i];\n                        copy.ss += entry.ss[i];\n                    }\n                }\n                return copy;\n            })\n            return entries\n        },\n        msaViewScores() {\n            return this.scores.filter((_, index) => this.mask[index] === 1);\n        },\n        settingsBtnIcon() {\n            return this.settingsPanelOpen ? MDI.ChevronLeft : MDI.ChevronRight;\n        }\n    },\n    methods: {\n        toggleSettingsPanel() {\n            this.settingsPanelOpen = !this.settingsPanelOpen;\n        },\n        handleUpdateMatchRatio: function() {\n            if (this.matchRatio === 0.0) {\n                this.mask = new Array(this.entries[0].aa.length).fill(1);\n            } else {\n                this.mask = makeMatchRatioMask(this.entries, this.matchRatio);\n            }\n        },\n        handleStructureLoadingChange(isLoading) {\n            this.isLoadingStructure = isLoading;\n        },\n        // New reference emitted from MSAView.\n        // entryIndex is based on ALL entries, not just selection (taken from row of MSA block)\n        // Add new structure to selection if index not already in selection,\n        // otherwise just switch reference index.\n        handleNewStructureViewerReference(entryIndex) {\n            if (entryIndex === this.structureViewerReference) {\n                this.structureViewerSelection = [];\n                this.structureViewerReference = -1;\n                return;\n            }\n            const selection = this.structureViewerSelection.slice();\n            const index = selection.indexOf(entryIndex);\n            if (index === -1) {\n                selection.push(entryIndex);\n            }\n            this.structureViewerSelection = selection;\n            this.structureViewerReference = entryIndex;\n        },\n        handleNewStructureViewerSelection(entryIndex) {\n            if (entryIndex === this.structureViewerReference) {\n                this.structureViewerSelection = [];\n                this.structureViewerReference = -1;\n                return;\n            }\n            const selection = this.structureViewerSelection.slice();\n            const index = selection.indexOf(entryIndex);\n            if (index !== -1) {\n                selection.splice(index, 1);\n            } else {\n                selection.push(entryIndex);\n            }\n            this.structureViewerSelection = selection;\n        },\n        getEntry(name) {\n            return this.entries.find(item => item.name === name);\n        },\n        makeMockAlignment(one, two) {\n            const entryOne = this.entries[one];\n            const entryTwo = this.entries[two];\n            if (!entryOne || !entryTwo) {\n                return;\n            }\n            const alignment  = mockAlignment(entryOne.aa, entryTwo.aa);\n            alignment.query  = entryOne.name;\n            alignment.target = entryTwo.name;\n            alignment.qCa    = entryOne.ca;\n            alignment.tCa    = entryTwo.ca;\n            alignment.qSeq   = entryOne.aa.replace(/-/g, \'\');\n            alignment.qAln   = entryOne.aa;\n            alignment.tSeq   = entryTwo.aa.replace(/-/g, \'\');\n            alignment.dbAln  = entryTwo.aa;\n            return {\n                queryMap: makePositionMap(alignment.qStartPos, alignment.qAln), \n                targetMap: makePositionMap(alignment.dbStartPos, alignment.dbAln), \n                alignment: alignment\n            };\n        },\n        handleMapBlockClick(index) {\n            const top = document.querySelector(\'.minimap\').offsetHeight + 60;  // app-bar + minimap\n            const box = this.$refs.msaView.$el.children[index].getBoundingClientRect();\n            window.scrollTo({ behavior: \'smooth\', top: box.top + window.scrollY - top });\n        },\n        handleAlphabetChange(event) {\n            this.alphabet = event.target.value;\n        },\n        gradientBlockCSS(gradient) {\n            return { width: \'100%\' };\n        },\n        handleLineLenChange: function(event) {\n            this.lineLen = parseInt(event.target.value);\n        },\n        minimapBlock: function(index) {\n            return {\n                \'--bg-color\': (this.blockIndex === index) ? \'rgba(255, 0, 0, 0.3)\' : null,\n                \'--bg-color-hover\': this.$vuetify.theme.dark ? \'rgba(255, 255, 255, 0.5)\' : \'rgba(100, 100, 100, 0.5)\',\n                \'flex-basis\': `${this.gradientRatio[index]}%`\n            }\n        },\n        handleScroll() {\n            const box = this.$refs.msaView.$el.getBoundingClientRect()\n            const numBlocks = Math.ceil(this.alnLen / this.lineLen);\n            const blockSize = box.height / numBlocks;\n            const top = window.scrollY + box.top;  // top of the msa relative to entire document\n            const bot = top + box.height;          // bottom\n            let scroll = window.scrollY + 180;     // current scroll pos + minimap height\n            if (scroll < top) {\n                this.blockIndex = 0;\n            } else if (scroll > bot) {\n                this.blockIndex = numBlocks;\n            } else {\n                this.blockIndex = Math.floor((scroll - top) / blockSize);\n            }\n        },\n        handleLineLen(lineLen) {\n            this.lineLen = lineLen;\n        },\n        handleCSSGradient(gradients) {\n            const numBlocks = Math.ceil(this.alnLen / this.lineLen);\n            const blockSize = gradients.length / numBlocks;\n\n            // Organise into blocks. Subsetted to numMinimapGradients for large MSAs\n            // Use a step to ensure coverage over entire MSA.\n            this.cssGradients = Array.from({ length: numBlocks }, () => []);\n            if (blockSize < this.numMinimapGradients) {\n                this.cssGradients.forEach((arr, i) => {\n                    let block = i * blockSize;\n                    let slice = gradients.slice(block, block + blockSize);\n                    arr.push(...slice);\n                });\n            } else {\n                const step = (blockSize - 1) / (this.numMinimapGradients - 1);\n                for (let i = 0; i < numBlocks; i++) {\n                    for (let j = 0; j < this.numMinimapGradients; j++) {\n                        this.cssGradients[i].push(gradients[Math.round(j * step) + i * blockSize]);\n                    }\n                }\n            }\n\n            // Calculate length of last block (all others will be lineLen)\n            // Get array of %s that sum to 100%\n            const lastBlockLen = this.cssGradients[numBlocks - 1][0].split(\'%,\').length / 2;\n            const total = (numBlocks - 1) * this.lineLen + lastBlockLen;\n            this.gradientRatio = new Array(numBlocks - 1).fill(this.lineLen / total * 100);\n            this.gradientRatio.push(lastBlockLen / total * 100);\n        },\n    },\n}\n<\/script>\n\n<style>\n.gradient-block-col {\n    position: relative;\n    display: inline-block;\n    border: 1px solid grey; \n    height: 80px;\n}\n.gradient-block {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n.gradient-row {\n    flex: 1;\n}\n.minimap {\n    position: sticky;\n    top: 48px;\n    padding: 16px;\n    margin-top: 1em;\n    margin-bottom: 2px;\n    height: fit-content;\n    z-index: 1;\n}\n.minimap-col {\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n}\n.gradient-block-col::before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--bg-color);\n    z-index: 2;\n}\n.gradient-block-col:hover:before {\n    background-color: var(--bg-color-hover);\n    cursor: pointer;\n}\n.input-label {\n    margin: 0 8px 0 0 !important;\n}\n.input-btn {\n    height: 25px;\n}\ndiv.input-div-wrapper {\n    display: flex;\n    flex-direction: column;\n    font-size: 13px;\n    height: 80px;\n    text-align: center;\n    align-items: center;\n    justify-content: space-between;\n    padding: 2px 0;\n}\ndiv.input-div {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n}\ndiv.input-div .v-text-field {\n    min-height: 0 !important;\n    max-height: 20px;\n    max-width: 80px;\n    padding: 0 !important;\n}\ndiv.input-div .v-input__control, div.input-div .v-input__control * {\n    padding: 0;\n    min-height: 0 !important;\n    max-height: 20px;\n}\ndiv.input-div .v-input__slot {\n    padding: 0 4px !important;\n}\n@media only screen and (min-width: 800px) {\n    .flex-col {\n        flex: 1 1 0px;\n        height: 500px;\n    }\n    .flex-col:nth-child(1) {\n        flex: 3;\n        padding-right: 6px;\n    }\n    .flex-col:nth-child(2),\n    .flex-col:nth-child(3) {\n        flex: 4.5;\n    }\n    .flex-col:nth-child(3) {\n        padding-left: 6px;\n    }\n}\n@media only screen and (max-width: 800px) {\n    .flex-col {\n        height: 400px;\n        flex-basis: 100%;\n        padding-bottom: 6px;\n        padding-top: 6px;\n    }\n    .flex-col:nth-child(1) {\n        height: 300px;\n    }\n}\n.expansion-panel {\n    /* transition: width 0.3s ease; */\n    overflow: hidden;\n    width: 100%;\n    position: relative;\n}\n.expansion-panel:not(.is-expanded) {\n    width: 0;\n}\n.toggle-button {\n    color: black;\n    z-index: 2;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        1229: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, "\n.msa-wrapper {\n    padding: 16px; /* equivalent to pa-4 */\n    display: flex;\n    flex-direction: column;\n    font-family: monospace;\n    white-space: nowrap;\n    width: 100%;\n}\n.msa-block {\n    margin-bottom: 1.5em;\n    display: grid;\n    grid-template-columns: fit-content(20%) 5fr auto;\n    width: 100%;\n    justify-content: space-between;\n    gap: 0px 16px;\n    line-height: 1em;\n}\n.msa-block:last-child {\n    margin-bottom: 0;\n}\n.msa-block .sequence {\n    display: inline-block;\n    padding: 0px;\n    margin: 0px;\n    letter-spacing: 4px;\n    color: transparent;\n    z-index: 0;\n}\n.msa-block .sequence::selection {\n    background: rgba(100, 100, 255, 1);\n    color: white;\n}\n.msa-row {\n    display: contents;\n/*     padding: 0;\n    margin: 0;\n    display: grid;\n    grid-template-columns: fit-content(20%) 5fr auto;\n    width: 100%;\n    justify-content: space-between;\n    gap: 16px;\n    line-height: 1em; */\n}\n.sequence-wrapper {\n    overflow: hidden;\n    align-content: left;\n    align-items: center;\n    display: flex;\n    flex-grow: 1;\n    text-align: left;\n}\n.sequence {\n    margin-left: auto;\n    margin: 0;\n    padding: 0;\n    line-height: 1em;\n}\n.header {\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n}\n.header:hover {\n    cursor: pointer;\n}\n.count {\n    text-align: right;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/MSAView.vue" ],
                names: [],
                mappings: ";AA2SA;IACA,aAAA,EAAA,uBAAA;IACA,aAAA;IACA,sBAAA;IACA,sBAAA;IACA,mBAAA;IACA,WAAA;AACA;AACA;IACA,oBAAA;IACA,aAAA;IACA,gDAAA;IACA,WAAA;IACA,8BAAA;IACA,aAAA;IACA,gBAAA;AACA;AACA;IACA,gBAAA;AACA;AACA;IACA,qBAAA;IACA,YAAA;IACA,WAAA;IACA,mBAAA;IACA,kBAAA;IACA,UAAA;AACA;AACA;IACA,kCAAA;IACA,YAAA;AACA;AACA;IACA,iBAAA;AACA;;;;;;;uBAOA;AACA;AACA;IACA,gBAAA;IACA,mBAAA;IACA,mBAAA;IACA,aAAA;IACA,YAAA;IACA,gBAAA;AACA;AACA;IACA,iBAAA;IACA,SAAA;IACA,UAAA;IACA,gBAAA;AACA;AACA;IACA,gBAAA;IACA,gBAAA;IACA,uBAAA;AACA;AACA;IACA,eAAA;AACA;AACA;IACA,iBAAA;AACA",
                sourcesContent: [ '<template>\n<div class="msa-wrapper" ref="msaWrapper">\n    <div class="msa-block" v-for="([start, end], i) in blockRanges">\n        \x3c!-- <SequenceLogo\n            :sequences="getEntryRanges(start, end, makeGradients=false)"\n            :alphabet="alphabet"\n            :lineLen="lineLen"\n        /> --\x3e\n        \x3c!--\n            <div class="msa-row" v-for="({name, aa, ss, seqStart, css}, j) in getEntryRanges(start, end)">\n        --\x3e\n        <template v-for="({name, aa, ss, seqStart, css}, j) in getEntryRanges(start, end)">\n            <span\n                class="header"\n                :title="name"\n                :style="headerStyle(j)"\n                @click="handleClickHeader($event, j)"\n            >{{ name }}</span>\n            <div class="sequence-wrapper">\n                <span class="sequence" :style="css">{{ alphabet === \'aa\' ? aa : ss }}</span>\n            </div>\n            <span class="count">{{ countSequence(aa, seqStart).toString()  }}</span>\n        </template>\n        \x3c!-- </div> --\x3e\n    </div>\n</div>\n</template>\n\n<script>\nimport SequenceLogo from \'./SequenceLogo.vue\';\nimport { debounce } from \'./Utilities.js\';\n\nconst colorsAa = {\n    "A": "#80A0F0FF",\n    "R": "#F01505FF",\n    "N": "#00FF00FF",\n    "D": "#C048C0FF",\n    "C": "#F08080FF",\n    "Q": "#00FF00FF",\n    "E": "#C048C0FF",\n    "G": "#F09048FF",\n    "H": "#15A4A4FF",\n    "I": "#80A0F0FF",\n    "L": "#80A0F0FF",\n    "K": "#F01505FF",\n    "M": "#80A0F0FF",\n    "F": "#80A0F0FF",\n    "P": "#FFD700FF",\n    "S": "#00FF00FF",\n    "T": "#00FF00FF",\n    "W": "#80A0F0FF",\n    "Y": "#15A4A4FF",\n    "V": "#80A0F0FF",\n    "B": "#FFFFFFFF",\n    "X": "#FFFFFFFF",\n    "Z": "#FFFFFFFF",\n    "-": "#ffffff"\n}\n\nconst colors3di = {\n    "A": "#df9a8c",\n    "C": "#fb72c5",\n    "D": "#b4a3d8",\n    "E": "#ff5701",\n    "F": "#d99e81",\n    "G": "#7491c5",\n    "H": "#94abe1",\n    "I": "#609d7b",\n    "K": "#d7a304",\n    "L": "#fe4c8b",\n    "M": "#12a564",\n    "N": "#d570fd",\n    "P": "#cb99c4",\n    "Q": "#da8e99",\n    "R": "#9487d0",\n    "S": "#e842fe",\n    "T": "#42a299",\n    "V": "#fb7edd",\n    "W": "#d1a368",\n    "Y": "#17a8fd",\n    "X": "#c0c0c0",\n    "-": "#ffffff"\n}\n\nexport default {\n    components: { SequenceLogo, SequenceLogo },\n    data() {\n        return {\n            mask: [],\n            lineLen: 80,\n            headerLen: null,\n            countLen: null,\n            resizeObserver: null,\n        }\n    },\n    props: {\n        matchRatio: Number,\n        entries: Array,\n        scores: Array,\n        alnLen: Number,\n        alphabet: String,\n        selectedStructures: { type: Array, required: false },\n        referenceStructure: { type: Number },\n        colorScheme: { type: String, default: \'lddt\' },\n        maxHeaderWidth: { type: Number, default: 30 }\n    },\n    mounted() {\n        this.resizeObserver = new ResizeObserver(debounce(this.handleResize, 100)).observe(this.$refs.msaWrapper);\n        this.handleUpdateEntries();\n        this.handleResize();\n        this.emitGradients();\n    },\n    updated() {\n        this.handleResize();\n        this.emitGradients();\n    },\n    beforeDestroy() {\n        if (this.resizeObserver)\n            this.resizeObserver.disconnect();\n    },\n    watch: {\n        entries: function() {\n            this.handleUpdateEntries();\n        },\n        lineLen: function() {\n            this.$emit("lineLen", this.lineLen);\n        },\n    },\n    computed: {\n        firstSequenceWidth() {\n            const container = document.querySelector(".msa-block");\n            if (!container)\n                return 0\n            const sequence = container.querySelector(".sequence");\n            return sequence.scrollWidth;\n        },\n        blockRanges() {\n            const maxVal = Math.max(1, Math.ceil(this.alnLen / this.lineLen));\n            return Array.from({ length: maxVal }, (_, i) => {\n                let start = i * this.lineLen;\n                let end = Math.min(this.alnLen, i * this.lineLen + this.lineLen);\n                return [start, end];\n            });\n        },\n        backgroundClip() {\n            return this.$vuetify.theme.dark ? \'text\' : \'border-box\';\n        },\n        sequenceColor() {\n            return this.$vuetify.theme.dark ? \'transparent\' : \'black\';\n        },\n        fontWeight() {\n            return this.$vuetify.theme.dark ? \'bolder\' : \'normal\';\n        },\n    },\n    methods: {\n        handleClickHeader(event, index) {\n            if (this.selectedStructures.length === 0 || event.altKey) {\n                this.$emit("newStructureReference", index);\n            } else {\n                this.$emit("newStructureSelection", index);\n            }\n        },\n        getSequenceWidth() {\n            const container = document.querySelector(".msa-block");\n            const sequence  = container.querySelector(".sequence");\n            return sequence.scrollWidth;\n        },\n        headerStyle(index) {\n            const isSelected  = this.selectedStructures.length > 0 && this.selectedStructures.includes(index);\n            const isReference = this.selectedStructures.length > 0 && this.referenceStructure === index;\n            return {\n                fontWeight: isSelected ? \'bold\' : \'normal\',                \n                color: isReference\n                    ? \'#1E88E5\'\n                    : (isSelected\n                        ? \'#e6ac00\'\n                        : this.$vuetify.theme.dark ? \'rgba(180, 180, 180, 1)\' : \'black\'),\n            }\n        },\n        handleUpdateEntries() {\n            this.headerLen = 0;\n            this.countLen = 0;\n            this.entries.forEach((e, i) => {\n                this.headerLen = Math.min(30, Math.max(this.headerLen, e.name.length));\n                let count = 0;\n                for (const char of e.aa) {\n                    if (char !== \'-\') count++;\n                }\n                this.countLen = Math.max(this.countLen, count.toString().length);\n            })\n        },\n        handleResize() {\n            // Resize based on first row\n            const container = document.querySelector(".msa-block");\n            if (!container) {\n                return\n            }\n            const header    = container.querySelector(".header");\n            const count     = container.querySelector(".count");\n            const sequence  = container.querySelector(".sequence");\n            const containerWidth = container.offsetWidth - header.offsetWidth - count.offsetWidth - 32;\n            \n            // calculate #chars difference\n            const content = sequence.textContent;\n            const charDiff = Math.abs(Math.ceil(content.length * (sequence.scrollWidth - containerWidth) / sequence.scrollWidth));\n\n            if (sequence.scrollWidth > containerWidth) {\n                this.lineLen = Math.min(this.lineLen - charDiff, this.entries[0].aa.length);\n            } else if (sequence.scrollWidth < containerWidth) {\n                this.lineLen = Math.min(this.lineLen + charDiff, this.entries[0].aa.length);\n            }\n        },\n        emitGradients() {\n            const elements = document.getElementsByClassName("sequence"); \n            this.$emit(\n                "cssGradients",\n                Array.prototype.map.call(elements, element => element.style[\'background-image\'])\n            );\n        },\n        percentageToColor(percentage, maxHue = 120, minHue = 0) {\n            if (percentage === -1) {\n                return this.$vuetify.theme.dark ? \'rgba(180, 180, 180, 1)\' : \'rgba(0, 0, 0, 0)\';\n            }\n            const hue = percentage * (maxHue - minHue) + minHue;\n            // const hue = (1 - percentage) * 120;\n            // const lightness = this.$vuetify.theme.dark ? 50 : 30;\n            return `hsl(${hue}, 100%, 50%)`;\n        },\n        getEntryRange(entry, start, end, makeGradients=true) {\n            let result = {\n                name: entry.name,\n                aa: entry.aa.slice(start, end),\n                ss: entry.ss.slice(start, end),\n                seqStart: 0\n            };\n            for (let i = 0; i < start; i++) {\n                if (entry.aa[i] === \'-\') continue;\n                result.seqStart++;\n            }\n            if (makeGradients) {\n                result.css = this.generateCSSGradient(start, end, result.ss);\n            }\n            return result;\n        },\n        getEntryRanges(start, end, makeGradients=true) {\n            return Array.from(this.entries, entry => this.getEntryRange(entry, start, end, makeGradients));\n        },\n        countSequence(sequence, start) {\n            let gaps = sequence.split(\'-\').length - 1;\n            return start + this.lineLen - gaps;\n        },\n        generateCSSGradient(start, end, sequence) {\n            if (!this.scores) {\n                return null;\n            }\n            let colors = [];\n            if (this.colorScheme === \'3di\') {\n                for (const residue of sequence) {\n                    colors.push(colors3di[residue]); \n                }\n            } else {\n                colors = this.scores\n                    .slice(start, end)\n                    .map(score => this.percentageToColor(parseFloat(score)));\n            }\n            for (let i = 0; i < sequence.length; i++) {\n                if (sequence[i] === \'-\') {\n                    colors[i] = this.$vuetify.theme.dark ? "rgba(100, 100, 100, 0.4)" : "rgba(0, 0, 0, 0)";\n                }\n            }\n            \n            const step = 100 / colors.length;\n            let gradient = \'linear-gradient(to right\';\n            \n            let preStep = 0;\n            let curStep = step;\n            for (let i = 0; i < colors.length; i++) {\n                curStep = (i === colors.length - 1) ? 100 : preStep + step;\n                gradient += `, ${colors[i]} ${preStep}%, ${colors[i]} ${curStep}%`;\n                preStep = curStep;\n            }\n            gradient += \')\';\n\n            return {\n                backgroundImage: gradient,\n                // decrease width to account for weird font glyph spacing\n                backgroundSize: `calc(100% - 2px) 100%`,\n                backgroundPosition: \'left top\',\n                backgroundAttachment: \'scroll\',\n                backgroundClip: this.backgroundClip,\n                color: this.sequenceColor,\n                fontWeight: this.fontWeight,\n            };\n        }\n    },\n}\n<\/script>\n\n<style>\n.msa-wrapper {\n    padding: 16px; /* equivalent to pa-4 */\n    display: flex;\n    flex-direction: column;\n    font-family: monospace;\n    white-space: nowrap;\n    width: 100%;\n}\n.msa-block {\n    margin-bottom: 1.5em;\n    display: grid;\n    grid-template-columns: fit-content(20%) 5fr auto;\n    width: 100%;\n    justify-content: space-between;\n    gap: 0px 16px;\n    line-height: 1em;\n}\n.msa-block:last-child {\n    margin-bottom: 0;\n}\n.msa-block .sequence {\n    display: inline-block;\n    padding: 0px;\n    margin: 0px;\n    letter-spacing: 4px;\n    color: transparent;\n    z-index: 0;\n}\n.msa-block .sequence::selection {\n    background: rgba(100, 100, 255, 1);\n    color: white;\n}\n.msa-row {\n    display: contents;\n/*     padding: 0;\n    margin: 0;\n    display: grid;\n    grid-template-columns: fit-content(20%) 5fr auto;\n    width: 100%;\n    justify-content: space-between;\n    gap: 16px;\n    line-height: 1em; */\n}\n.sequence-wrapper {\n    overflow: hidden;\n    align-content: left;\n    align-items: center;\n    display: flex;\n    flex-grow: 1;\n    text-align: left;\n}\n.sequence {\n    margin-left: auto;\n    margin: 0;\n    padding: 0;\n    line-height: 1em;\n}\n.header {\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n}\n.header:hover {\n    cursor: pointer;\n}\n.count {\n    text-align: right;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        4569: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => p
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a), o = t(1667), l = t.n(o), c = new URL(t(42), t.b), u = new URL(t(901), t.b), d = s()(i()), h = l()(c), A = l()(u);
            d.push([ e.id, "\n.panel-root[data-v-0d9b5935], .panel-content[data-v-0d9b5935] {\n    flex-direction: column;\n}\n.panel-root header[data-v-0d9b5935], .panel-content[data-v-0d9b5935] {\n    contain: content;\n}\n.panel-root nav[data-v-0d9b5935] {\n    flex: 0;\n}\n.panel-root .force-fill-height[data-v-0d9b5935] {\n    display: flex;\n    height: 100% !important;\n}\n.panel-root[data-v-0d9b5935] .v-toolbar {\n    background-repeat: repeat;\n}\n.theme--light .panel-root[data-v-0d9b5935] .v-toolbar {\n    background: url(" + h + ");\n}\n.theme--dark .panel-root[data-v-0d9b5935] .v-toolbar {\n    background: url(" + A + ");\n}\n.panel-root[data-v-0d9b5935] .text-h6 {\n    margin-bottom: -5px;\n}\n.panel-root[data-v-0d9b5935] .text-h6 i.v-icon {\n    font-size: 1em;\n    vertical-align: bottom;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/Panel.vue" ],
                names: [],
                mappings: ";AAuDA;IACA,sBAAA;AACA;AAEA;IACA,gBAAA;AACA;AAEA;IACA,OAAA;AACA;AAEA;IACA,aAAA;IACA,uBAAA;AACA;AAEA;IACA,yBAAA;AACA;AAEA;IACA,mDAAA;AAEA;AAEA;IACA,mDAAA;AACA;AAEA;IACA,mBAAA;AACA;AAEA;IACA,cAAA;IACA,sBAAA;AACA",
                sourcesContent: [ "<template>\n    <div :class=\"['panel-root', elevation != null ? 'elevation-' + elevation : null ]\">\n        <v-toolbar v-if=\"!!$slots['header'] || !!header\" text dense dark>\n            <v-btn v-if=\"collapsible\" style=\"margin-top:0;margin-left:-15px;\" icon plain  @click=\"isCollapsed = !isCollapsed\" :aria-expanded=\"isCollapsed ? 'false' : 'true'\" :aria-controls=\"uuid\">\n                <v-icon v-if=\"isCollapsed\">\n                    {{ $MDI.PlusBox }}\n                </v-icon>\n                <v-icon v-else>\n                    {{ $MDI.MinusBox }}\n                </v-icon>\n            </v-btn>\n            <span class=\"text-h6 align-end\">\n                <slot v-if=\"$slots['header']\" name=\"header\"></slot>\n                <template v-else>{{ header }}</template>\n            </span>\n            <v-spacer></v-spacer>\n            <slot name=\"toolbar-extra\"></slot>\n        </v-toolbar>\n        <v-card rounded=\"0\" :class=\"['panel', { 'd-flex' : flex }, { 'force-fill-height' : fillHeight }]\" :style=\"[{ 'display' : isCollapsed ? 'none !important' : null }]\" v-if=\"!isCollapsed || renderCollapsed\" :id=\"uuid\">\n            <v-card-text v-if=\"$slots['desc']\" class=\"subheading justify\">\n                <slot name=\"desc\"></slot>\n            </v-card-text>\n            <v-card-text v-if=\"$slots['content']\" :class=\"['panel-content', 'justify', { 'd-flex' : flex }]\">\n                <slot name=\"content\"></slot>\n            </v-card-text>\n        </v-card>\n    </div>\n</template>\n\n<script>\nlet uuid = 0;\nexport default {\n    name: 'panel',\n    props: { \n        header : { default: '', type: String }, \n        'fillHeight' : { default: false, type: Boolean }, \n        'collapsible' : { default: false, type: Boolean },\n        'collapsed' : { default: false, type: Boolean },\n        'flex' : { default: true, type: Boolean },\n        'elevation' : { default: null, type: Number },\n        'renderCollapsed' : { default: false, type: Boolean },\n    },\n    data() {\n        return {\n            isCollapsed: this.collapsed,\n        }\n    },\n    beforeCreate() {\n        this.uuid = 'panel-' + uuid.toString();\n        uuid += 1;\n    },\n}\n<\/script>\n\n<style scoped>\n.panel-root, .panel-content {\n    flex-direction: column;\n}\n\n.panel-root header, .panel-content {\n    contain: content;\n}\n\n.panel-root nav {\n    flex: 0;\n}\n\n.panel-root .force-fill-height {\n    display: flex;\n    height: 100% !important;\n}\n\n.panel-root >>> .v-toolbar {\n    background-repeat: repeat;\n}\n\n.theme--light .panel-root >>> .v-toolbar {\n    background: url('./assets/spiration-dark.png');\n    \n}\n\n.theme--dark .panel-root >>> .v-toolbar {\n    background: url('./assets/spiration-darker.png');\n}\n\n.panel-root >>> .text-h6 {\n    margin-bottom: -5px;\n}\n\n.panel-root >>> .text-h6 i.v-icon {\n    font-size: 1em;\n    vertical-align: bottom;\n}\n</style>" ],
                sourceRoot: ""
            } ]);
            const p = d;
        },
        6686: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, '\n.residues {\n    font-family:\n        InconsolataClustal, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono",\n        "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n    white-space: pre;\n}\n', "", {
                version: 3,
                sources: [ "webpack://./frontend/ResidueSpan.vue" ],
                names: [],
                mappings: ";AA8CA;IACA;;sHAEA;IACA,gBAAA;AACA",
                sourcesContent: [ '\x3c!--\nA span of residues in a sequence alignment. If a selection start/end is specified, this\nwill render a span with three child spans (before, highlight, after).\n--\x3e\n\n<template>\n    <span\n        v-if="!selectionStart && !selectionEnd"\n        @pointerup="emitPointerUpEvent"\n        @selectstart="emitSelectStartEvent"\n        class="residues"\n        :class="sequenceType"\n    ><slot></slot></span>\n    <span\n        v-else\n        @pointerup="emitPointerUpEvent"\n        @selectstart="emitSelectStartEvent"\n        class="residues"\n        :class="sequenceType"\n    >\x3c!--\n        --\x3e<span>{{ $slots.default[0].text.slice(0, selectionStart) }}</span>\x3c!--\n        --\x3e<span\n            class="selected"\n            @click="emitClickHighlight"\n           >{{ $slots.default[0].text.slice(selectionStart, selectionEnd) }}</span>\x3c!--\n        --\x3e<span>{{ $slots.default[0].text.slice(selectionEnd, $slots.default[0].text.length) }}</span>\n    </span>\n</template>\n\n<script>\nexport default {\n    name: \'ResidueSpan\',\n    props: {\n        sequenceType: { type: String },\n        selectionStart: { type: Number },\n        selectionEnd: { type: Number },\n    },\n    methods: {\n        emitPointerUpEvent(event) { this.$emit(\'pointerup\', event) },\n        emitSelectStartEvent(event) { this.$emit(\'selectstart\', event) },\n        emitClickHighlight(event) { this.$emit(\'clickHighlight\', event) },\n    }\n}\n<\/script>\n\n<style>\n.residues {\n    font-family:\n        InconsolataClustal, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono",\n        "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n    white-space: pre;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        864: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, "\n[data-v-54679682] .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/ResultLocal.vue" ],
                names: [],
                mappings: ";AAkGA;IACA,gCAAA;AACA",
                sourcesContent: [ '<template>\n<Local \n    :title="appTitle"\n    @uploadData="handleUploadData"\n    @downloadData="handleDownloadData"\n>\n    <template v-slot:default>\n        <v-tabs v-if="hits" center-active grow style="margin-bottom: 1em" show-arrows>\n            <v-tab v-for="(entry, index) in hits" :key="entry.query.header" @click="changeResult(index)">\n                {{ entry.query.header }} ({{ entry.results[0].alignments ? entry.results[0].alignments.length : 0 }})\n            </v-tab>\n        </v-tabs>\n        <ResultView\n            :key="currentIndex"\n            :ticket="ticket"\n            :error="error"\n            :mode="mode"\n            :hits="currentResult"\n            :selectedDatabases="selectedDatabases"\n            :tableMode="tableMode"\n        />       \n    </template>\n</Local>\n</template>\n\n<script>\nimport { parseResultsList, download, dateTime } from \'./Utilities.js\';\nimport ResultMixin from \'./ResultMixin.vue\';\nimport ResultView from \'./ResultView.vue\';\nimport Local from \'./Local.vue\';\n\nexport default {\n    name: \'ResultLocal\',\n    mixins: [ResultMixin],\n    components: { ResultView, Local },\n    data() {\n        return {\n            currentIndex: 0\n        };\n    },\n    mounted() {\n        document.onreadystatechange = () => {\n            if (document.readyState == "complete") {\n                let div = document.getElementById("data");\n                if (!div) {\n                    return null;\n                }\n                let data = JSON.parse(div.textContent);\n                this.fetchData(data);\n            }\n        }\n    },\n    computed: {\n        appTitle() {\n            return `${__STRINGS__.APP_NAME} Search`;\n        },\n        currentResult() {\n            if (this.hits === null)\n                return null;\n            return this.hits[this.currentIndex];\n        },\n        currentQuery() {\n            if (this.hits === null)\n                return "";\n            return this.hits[this.currentIndex].query.header;\n        }\n    },\n    methods: {\n        changeResult(newRes) {\n            this.currentIndex = newRes;\n            this.setColorScheme();\n        },\n        handleUploadData(data) {\n            this.fetchData(data);\n        },\n        handleDownloadData() {\n            if (!this.hits) {\n                return null;\n            }\n            download(this.hits, `${__APP__}-${dateTime()}.json`);\n        },\n        resetProperties() {\n            this.ticket = "";\n            this.error = "";\n            this.mode = "";\n            this.hits = null;\n            this.selectedDatabases = 0;\n            this.tableMode = 0;\n        },\n        fetchData(data) {\n            this.resetProperties();\n            this.hits = parseResultsList(data);\n        }\n    }\n};\n<\/script>\n\n<style scoped>\n::v-deep .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n</style>\n<style>\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        8742: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, "\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/ResultLocal.vue" ],
                names: [],
                mappings: ";AAuGA;IACA,oCAAA;AACA;AAEA;IACA,oCAAA;AACA",
                sourcesContent: [ '<template>\n<Local \n    :title="appTitle"\n    @uploadData="handleUploadData"\n    @downloadData="handleDownloadData"\n>\n    <template v-slot:default>\n        <v-tabs v-if="hits" center-active grow style="margin-bottom: 1em" show-arrows>\n            <v-tab v-for="(entry, index) in hits" :key="entry.query.header" @click="changeResult(index)">\n                {{ entry.query.header }} ({{ entry.results[0].alignments ? entry.results[0].alignments.length : 0 }})\n            </v-tab>\n        </v-tabs>\n        <ResultView\n            :key="currentIndex"\n            :ticket="ticket"\n            :error="error"\n            :mode="mode"\n            :hits="currentResult"\n            :selectedDatabases="selectedDatabases"\n            :tableMode="tableMode"\n        />       \n    </template>\n</Local>\n</template>\n\n<script>\nimport { parseResultsList, download, dateTime } from \'./Utilities.js\';\nimport ResultMixin from \'./ResultMixin.vue\';\nimport ResultView from \'./ResultView.vue\';\nimport Local from \'./Local.vue\';\n\nexport default {\n    name: \'ResultLocal\',\n    mixins: [ResultMixin],\n    components: { ResultView, Local },\n    data() {\n        return {\n            currentIndex: 0\n        };\n    },\n    mounted() {\n        document.onreadystatechange = () => {\n            if (document.readyState == "complete") {\n                let div = document.getElementById("data");\n                if (!div) {\n                    return null;\n                }\n                let data = JSON.parse(div.textContent);\n                this.fetchData(data);\n            }\n        }\n    },\n    computed: {\n        appTitle() {\n            return `${__STRINGS__.APP_NAME} Search`;\n        },\n        currentResult() {\n            if (this.hits === null)\n                return null;\n            return this.hits[this.currentIndex];\n        },\n        currentQuery() {\n            if (this.hits === null)\n                return "";\n            return this.hits[this.currentIndex].query.header;\n        }\n    },\n    methods: {\n        changeResult(newRes) {\n            this.currentIndex = newRes;\n            this.setColorScheme();\n        },\n        handleUploadData(data) {\n            this.fetchData(data);\n        },\n        handleDownloadData() {\n            if (!this.hits) {\n                return null;\n            }\n            download(this.hits, `${__APP__}-${dateTime()}.json`);\n        },\n        resetProperties() {\n            this.ticket = "";\n            this.error = "";\n            this.mode = "";\n            this.hits = null;\n            this.selectedDatabases = 0;\n            this.tableMode = 0;\n        },\n        fetchData(data) {\n            this.resetProperties();\n            this.hits = parseResultsList(data);\n        }\n    }\n};\n<\/script>\n\n<style scoped>\n::v-deep .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n</style>\n<style>\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        405: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, "\n.canvas-wrapper {\n    /* display: block; */\n    border: 1px solid black;\n    margin-left: 80px;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/SequenceLogo.vue" ],
                names: [],
                mappings: ";AAyGA;IACA,oBAAA;IACA,uBAAA;IACA,iBAAA;AACA",
                sourcesContent: [ "<template>\n<div class=\"canvas-wrapper\">\n    <canvas ref=\"canvas\"></canvas>\n</div>\n</template>\n\n<script>\nfunction generateColumnCounts(sequences, alphabet='aa') {\n    // e_n:  small-sample correction for alignment of n letters\n    // H_i:  uncertainty (Shannon entropy) of position i\n    // R_i:  information content (y-axis) of position i\n    // F_bi: relative frequency of base/aa b at position i\n    if (sequences.length === 0)\n        return;\n    const counts = [];\n    const seqLength = sequences[0].aa.length;\n    const numSequences = sequences.length;\n    const e_n = Math.log(20) - ((1 / Math.log(2)) * (20 - 1) / (2 * numSequences));\n    for (let i = 0; i < seqLength; i++) {\n        let frequency = [];\n        for (let j = 0; j < numSequences; j++) {\n            let char = sequences[j][alphabet][i];\n            if (char === '-') {\n                continue;\n            }\n            if (typeof frequency[char] !== 'undefined') {\n                frequency[char]++;\n            } else {\n                frequency[char] = 1;\n            }\n        }\n        let H_i = 0.0;\n        for (let j in frequency) {\n            frequency[j] = frequency[j] / numSequences;\n            H_i -= frequency[j] * Math.log(frequency[j]);\n        }\n        let R_i = Math.abs(e_n - H_i);\n        let height = [];\n        for (let j in frequency) {\n            height.push([j, frequency[j] * R_i]);\n        }\n        height.sort(function(a, b) {\n            return (a[1] > b[1] ? 1 : -1);\n        });\n        counts.push(height);\n    }\n    return counts;\n}\n\nexport default {\n    props: {\n        sequences: { type: Array, default: () => ([]) },\n        alphabet: { type: String, default: 'aa' },\n        lineLen: { type: Number },\n        width: { type: Number },\n    },\n    watch: {\n        sequences: function(newSequences) {\n            const canvas = this.$refs.canvas;\n            const ctx = canvas.getContext(\"2d\");         \n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n            const counts = generateColumnCounts(newSequences, this.alphabet);\n            const sums = counts.map(item => item.reduce((sum, [_, a]) => sum + a, 0))\n            let max = Math.max(...sums);\n            \n            const fontSize = 16;\n            let x = 10;\n            const charWidth = canvas.width / this.lineLen;\n            // const charWidth = 10;\n            \n            for (let i = 0; i < counts.length; i++) {\n                let y = canvas.height;\n                // let max = counts[i].reduce((sum, [, e]) => sum + e, 0)\n                \n                for (const [char, count] of counts[i]) {\n                    const charHeight = count / max * canvas.height;\n                    \n                    ctx.save();\n                    ctx.translate(x, y);\n                    ctx.scale(1, charHeight / fontSize);\n                    ctx.fillStyle = this.$vuetify.theme.dark ? 'white' : 'black';\n                    ctx.fillText(char, 0, 0);\n                    ctx.restore();\n\n                    y -= charHeight;\n\n                }\n                x += charWidth;\n            }\n        }\n    },\n    mounted() {\n        const canvas = this.$refs.canvas;\n        const ctx = canvas.getContext(\"2d\");         \n        canvas.width = 16 * this.lineLen; //window.innerWidth;\n        canvas.height = 100;\n        ctx.font = '16px monospace'\n        ctx.fillStyle = 'red';\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n    }\n}\n<\/script>\n\n<style>\n.canvas-wrapper {\n    /* display: block; */\n    border: 1px solid black;\n    margin-left: 80px;\n}\n</style>" ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        7866: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, "\n.structure-wrapper[data-v-739834d6] {\n    width: 500px;\n    height: 400px;\n    margin: 0 auto;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/StructureViewer.vue" ],
                names: [],
                mappings: ";AAqjBA;IACA,YAAA;IACA,aAAA;IACA,cAAA;AACA",
                sourcesContent: [ '<template>\n<div class="structure-panel" v-if="alignments.length > 0 && \'tCa\' in alignments[0]">\n    <StructureViewerTooltip attach=".structure-panel" />\n    <div class="structure-wrapper" ref="structurepanel">\n        <table v-if="tmAlignResults" class="tmscore-panel" v-bind="tmPanelBindings">\n            <tr>\n                <td class="left-cell">TM-Score:</td>\n                <td class="right-cell">{{ tmAlignResults.tmScore }}</td>\n            </tr>\n            <tr>\n                <td class="left-cell">RMSD:</td>\n                <td class="right-cell">{{ tmAlignResults.rmsd  }}</td>\n            </tr>\n        </table>\n        <StructureViewerToolbar\n            :isFullscreen="isFullscreen"\n            :isSpinning="isSpinning"\n            :showQuery="showQuery"\n            :showTarget="showTarget"\n            :showArrows="showArrows"\n            :disableQueryButton="!hasQuery"\n            :disableArrowButton="!hasQuery"\n            @makeImage="handleMakeImage"\n            @makePDB="handleMakePDB"\n            @resetView="handleResetView"\n            @toggleFullscreen="handleToggleFullscreen"\n            @toggleTarget="handleToggleTarget"\n            @toggleQuery="handleToggleQuery"\n            @toggleArrows="handleToggleArrows"\n            @toggleSpin="handleToggleSpin"\n        />\n        <div class="structure-viewer" ref="viewport"></div>\n    </div>\n</div>\n</template>\n\n<script>\nimport StructureViewerTooltip from \'./StructureViewerTooltip.vue\';\nimport StructureViewerToolbar from \'./StructureViewerToolbar.vue\';\nimport StructureViewerMixin from \'./StructureViewerMixin.vue\';\nimport { mockPDB, makeSubPDB, transformStructure, makeMatrix4  } from \'./Utilities.js\';\nimport { pulchra } from \'pulchra-wasm\';\nimport { tmalign, parse as parseTMOutput, parseMatrix as parseTMMatrix } from \'tmalign-wasm\';\n\nimport Panel from \'./Panel.vue\';\nimport { Shape, Selection, download, ColormakerRegistry, PdbWriter, Color, concatStructures, StructureComponent } from \'ngl\';\n\n// Create NGL arrows from array of ([X, Y, Z], [X, Y, Z]) pairs\n// Get XYZ coordinates of CA of a given residue\nconst xyz = (structure, resIndex) => {\n    var rp = structure.getResidueProxy();\n    var ap = structure.getAtomProxy();\n    rp.index = resIndex;\n    ap.index = rp.getAtomIndexByName(\'CA\');\n    return [ap.x, ap.y, ap.z];\n}\n\n// Save indices of matching columns in an alignment\nconst getMatchingColumns = (alignment) => {\n    let cols_q = [];\n    let cols_t = [];\n    let id_q = alignment.qStartPos;\n    let id_t = alignment.dbStartPos;\n    for (let i = 0; i < alignment.qAln.length; i++) {\n        if (alignment.qAln[i] === \'-\' || alignment.dbAln[i] === \'-\') {\n            if (alignment.qAln[i] === \'-\') id_t++;\n            else id_q++;\n        } else {\n            cols_q.push(id_q);\n            cols_t.push(id_t);\n            id_q++;\n            id_t++;\n        }\n    }\n    return [cols_q, cols_t]\n}\n\n// Get chain from structure name like Structure_A\nconst getChainName = (name) => {\n    // HACK FIXME fix AF chain names\n    if (/_v[0-9]+$/.test(name)) {\n        return \'A\';\n    }\n    let pos = name.lastIndexOf(\'_\');\n    if (pos != -1) {\n        let match = name.substring(pos + 1);\n        return match.length >= 1 ? match[0] : \'A\';\n    }\n    // fallback\n    return \'A\';\n}\n\nconst getAccession = (name) => {\n    // HACK FIXME fix AF chain names\n    if (/_v[0-9]+$/.test(name)) {\n        return name;\n    }\n    let pos = name.lastIndexOf(\'_\');\n    return pos != -1 ? name.substring(0, pos) : name;\n}\n\n// Get coordinates of all atoms found in given selection\n// skip consecutive res indices as they are most likely alternative locations\n// foldseek always chooses the first alt locations, so we mimic this behavior\nconst getAtomXYZ = (structure, sele) => {\n    const xyz = [];\n    let lastResidueIndex = -1;\n\n    structure.eachAtom(ap => {\n        if (ap.resno !== lastResidueIndex) {\n            xyz.push([ap.x, ap.y, ap.z]);\n            lastResidueIndex = ap.resno;\n        }\n    }, sele); \n\n    return xyz;\n}\n\nconst colorblindColors = ColormakerRegistry.addScheme(function() {\n    let colors = [0x991999, 0x00BFBF, 0xE9967A, 0x009E73, 0xF0E442, 0x0072B2, 0xD55E00, 0xCC79A7];\n    this.atomColor = function(atom) {\n        return colors[atom.chainIndex % colors.length];\n    }\n}, "colorblindColors")\n\nconst getPdbText = comp => {\n    let pw = new PdbWriter(comp.structure, { renumberSerial: false });\n    return pw.getData().split(\'\\n\').filter(line => line.startsWith(\'ATOM\')).join(\'\\n\');\n}\n\nexport default {\n    name: "StructureViewer",\n    components: {\n        Panel,\n        StructureViewerTooltip,\n        StructureViewerToolbar,\n    },\n    mixins: [\n        StructureViewerMixin,\n    ],\n    data() {\n        return {\n            selection: null,\n            showArrows: false,\n            showQuery: 0,\n            showTarget: 0,\n            tmAlignResults: null,\n            hasQuery: true,\n        }\n    },\n    props: {\n        alignments: { type: Array },\n        highlights: { type: Array },\n        queryFile: { type: String },\n        queryAlignedColor: { type: String, default: "#1E88E5" },\n        queryUnalignedColor: { type: String, default: "#A5CFF5" },\n        targetAlignedColor: { type: String, default: "#FFC107" },\n        targetUnalignedColor: { type: String, default: "#FFE699" },\n        qRepr: { type: String, default: "cartoon" },\n        tRepr: { type: String, default: "cartoon" },\n        hits: { type: Object },\n        autoViewTime: { type: Number, default: 100 }\n    },\n    methods: {\n        // Create arrows connecting CA coordinates for query/target in match columns\n        async drawArrows(str1, str2) {\n            const shape = new Shape(\'arrows\');\n            await Promise.all(this.alignments.map(async (alignment) => {\n                const chain_q = getChainName(alignment.query);\n                const chain_t = getChainName(alignment.target);\n                const [sele_q, sele_t] = getMatchingColumns(alignment).map(arr => arr.join(" or "));\n\n                const str1_xyz = getAtomXYZ(str1, new Selection(`(${sele_q}) and :${chain_q}.CA`));\n                const str2_xyz = getAtomXYZ(str2, new Selection(`(${sele_t}) and :${chain_t}.CA`));\n\n                if (str1_xyz.length != str2_xyz.length) {\n                    console.warn("Different number of CA atoms in query and target", str1_xyz.length, str2_xyz.length);\n                }\n                for (let i = 0; i < Math.min(str1_xyz.length, str2_xyz.length); i++) {\n                    shape.addArrow(str1_xyz[i], str2_xyz[i], [0, 1, 1], 0.4);\n                }\n            }));\n            let component = this.stage.addComponentFromObject(shape);\n            component.addRepresentation(\'buffer\');\n            component.setVisibility(this.showArrows);\n        },\n        handleToggleArrows() {\n            if (!this.stage) return;\n            this.showArrows = !this.showArrows;\n        },\n        handleToggleQuery() {\n            if (!this.stage) return;\n            if (__LOCAL__) {\n                this.showQuery = (this.showQuery === 0) ? 1 : 0;\n            } else {\n                this.showQuery = (this.showQuery === 2) ? 0 : this.showQuery + 1;\n            }\n        },\n        handleResetView() {\n            if (!this.stage) return;\n            this.setQuerySelection();\n        },\n        handleToggleTarget() {\n            if (!this.stage) return;\n            if (__LOCAL__) {\n                this.showTarget = (this.showTarget === 0) ? 1 : 0;\n            } else {\n                this.showTarget = (this.showTarget === 2) ? 0 : this.showTarget + 1; \n            }\n        },\n        clearSelection() {\n            if (!this.alignments || !this.stage) return;\n            let repr = this.stage.getRepresentationsByName("targetHighlight");\n            repr.setSelection()\n            repr.setVisibility(false)\n        },\n        setSelectionData(selection) {\n            // FIXME tube/cartoon representation cannot visualise <3 residues\n            //       https://github.com/nglviewer/ngl/issues/759\n            //       use licorice representation for this case? or just +1 to make 3\n            if (!this.alignments || !this.stage) return;\n            let repr = this.stage.getRepresentationsByName("targetHighlight");\n            repr.setSelection()\n            if (selection.length === 0) {\n                repr.setVisibility(false);\n                return;\n            }\n            let seles = [];\n            for (let [i, start, length] of selection) {\n                let chain = getChainName(this.alignments[i].target);\n                let end = start + length;\n                seles.push(`${start}-${end}:${chain}`);\n            } \n            let sele = seles.join(" or ");\n            repr.setSelection(sele);\n            repr.setVisibility(true);\n        },\n        setQuerySelection() {\n            let repr = this.stage.getRepresentationsByName("queryStructure");\n            if (!repr) return;\n            let sele = this.querySele;\n            repr.setSelection(sele);\n            repr.list[0].parent.autoView(sele, this.autoViewTime);\n            if (this.showQuery === 0) {\n                this.stage.getRepresentationsByName("querySurface-1").setVisibility(false);\n                this.stage.getRepresentationsByName("querySurface-2").setVisibility(false);\n            } else if (this.showQuery === 1) {\n                this.stage.getRepresentationsByName("querySurface-1").setVisibility(true);\n                this.stage.getRepresentationsByName("querySurface-2").setVisibility(false);\n            } else {\n                this.stage.getRepresentationsByName("querySurface-1").setVisibility(true);\n                this.stage.getRepresentationsByName("querySurface-2").setVisibility(true);\n            }\n        },\n        setTargetSelection() {\n            let repr = this.stage.getRepresentationsByName("targetStructure");\n            if (!repr) return;\n            let sele = this.targetSele;\n            repr.setSelection(sele);\n        },\n        async handleMakeImage() {\n            if (!this.stage)\n                return;\n            let wasSpinning = this.isSpinning;\n            this.isSpinning = false;\n            let title = this.alignments.map(aln => this.hasQuery ? `${aln.query}-${aln.target}` : aln.target).join("_");\n            this.stage.viewer.setLight(undefined, undefined, undefined, 0.2)\n            const blob = await this.stage.makeImage({\n                trim: true,\n                factor: (this.isFullscreen) ? 1 : 8,\n                antialias: true,\n                transparent: true,\n            });\n            this.stage.viewer.setLight(undefined, undefined, undefined, this.$vuetify.theme.dark ? 0.4 : 0.2)\n            download(blob, `${title}.png`)\n            this.isSpinning = wasSpinning;\n        },\n        handleMakePDB() {\n            if (!this.stage)\n                return;\n            let qPDB = this.stage.getComponentsByName("queryStructure").list.map(getPdbText); \n            let tPDB = this.stage.getComponentsByName("targetStructure").list.map(getPdbText);\n            if (!qPDB && !tPDB) \n                return;\n            let title = this.alignments.map(aln => qPDB ? `${aln.query}-${aln.target}` : aln.target);\n            let result = null;\n            if (qPDB && tPDB) {\n                result =\n`TITLE     ${title.join(" ")}\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms might have been re-generated by PULCHRA,\nREMARK              if they are not present in the original PDB file.\nMODEL        1\n${qPDB.join(\'\\n\')}\nENDMDL\nMODEL        2\n${tPDB.join(\'\\n\')}\nENDMDL\nEND\n`\n            } else {\n                result =\n`TITLE     ${title.join(" ")}\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms were re-generated by PULCHRA.\nMODEL        1\n${tPDB.join(\'\\n\')}\nENDMDL\nEND\n`\n            }\n            download(new Blob([result], { type: \'text/plain\' }), (title.join("_") + ".pdb"));\n        }\n    },\n    watch: {\n        \'showArrows\': function(val, _) {\n            if (!this.stage) return\n            this.stage.getComponentsByName("arrows").forEach(comp => { comp.setVisibility(val) });\n        },\n        \'showQuery\': function() {\n            if (!this.stage) return;\n            this.setQuerySelection();\n        },\n        \'showTarget\': function(val, _) {\n            if (!this.stage) return;\n            this.setTargetSelection();\n        },\n        \'highlights\': function(values) {\n            if (!this.stage || !values) return;\n            let selections = []\n            values.forEach((value, i) => {\n                if (!value) return;\n                let [start, length] = value;\n                selections.push([i, start, length]);\n            })\n            this.setSelectionData(selections)\n        }\n    },\n    computed: {\n        querySele: function() {\n            if (this.alignments.length === 0 || this.showQuery == 2)\n                return \'\';\n            if (this.showQuery === 0)\n                return this.alignments.map(a => `${a.qStartPos}-${a.qEndPos}:${getChainName(a.query)}`).join(" or ");\n            if (this.showQuery === 1)\n                return this.alignments.map(a => `:${getChainName(a.query)}`).join(" or ");\n        },\n        targetSele: function() {\n            if (this.alignments.length === 0 || this.showTarget == 2)\n                return \'\';\n            if (this.showTarget === 0)\n                return this.alignments.map(a => `${a.dbStartPos}-${a.dbEndPos}:${getChainName(a.target)}`).join(" or ");\n            if (this.showTarget === 1)\n                return this.alignments.map(a => `:${getChainName(a.target)}`).join(" or ");\n        },\n        tmPanelBindings: function() {\n            return (this.isFullscreen) ? { \'style\': \'margin-top: 10px; font-size: 2em; line-height: 2em\' } : {  }\n        },\n    },\n    async mounted() {\n        if (typeof(this.alignments[0].tCa) == "undefined")\n            return;\n\n        // Download from server --\x3e full input PDB from /result/query endpoint, saved with JSON.stringify\n        //                local --\x3e qCa string\n        // Tickets prefixed with \'user-\' only occur on user uploaded files\n        let queryPdb = "";\n        this.hasQuery = true;\n        if (this.$LOCAL) {\n            if (this.hits.queries[0].hasOwnProperty(\'pdb\')) {\n                queryPdb = JSON.parse(this.hits.queries[0].pdb);\n            } else {\n                queryPdb = mockPDB(this.hits.queries[0].qCa, this.hits.queries[0].sequence, \'A\');\n            }\n        } else if (this.$route.params.ticket.startsWith(\'user-\')) {\n            // Check for special \'user\' ticket for when users have uploaded JSON\n            if (this.hits.queries[0].hasOwnProperty(\'pdb\')) {\n                queryPdb = JSON.parse(this.hits.queries[0].pdb);\n            } else {\n                const localData = this.$root.userData[this.$route.params.entry];\n                queryPdb = mockPDB(localData.queries[0].qCa, localData.queries[0].sequence, \'A\');\n            }\n        } else {\n            try {\n                const request = await this.$axios.get("api/result/" + this.$route.params.ticket + \'/query\');\n                queryPdb = request.data;\n            } catch (e) {\n                queryPdb = "";\n                this.hasQuery = false;\n            }\n        }\n\n        // Run PULCHRA per chain then concatenate Structure objects in first StructureComponent\n        const targets = [];\n        const selections_t = [];\n        let renumber = 0;\n        let lastIdx = null;\n        let remoteData = null;\n        let i = 0;\n        for (let alignment of this.alignments) {\n            const chain = getChainName(alignment.target);\n            let tSeq = alignment.tSeq;\n            let tCa = alignment.tCa;\n            if (Number.isInteger(alignment.tCa) && Number.isInteger(alignment.tSeq)) {\n                const db = alignment.db;\n                const idx = alignment.tCa;\n                if (idx != lastIdx) {\n                    const ticket =  this.$route.params.ticket;\n                    const response = await this.$axios.get("api/result/" + ticket + \'/\' + this.$route.params.entry + \'?format=brief&index=\' + idx + \'&database=\' + db);\n                    remoteData = response.data;\n                    lastIdx = idx;\n                }\n                tSeq = remoteData[i].tSeq;\n                tCa = remoteData[i].tCa;\n                i++;\n            }\n            const mock = mockPDB(tCa, tSeq, chain);\n            const pdb = await pulchra(mock);\n            const component = await this.stage.loadFile(new Blob([pdb], { type: \'text/plain\' }), {ext: \'pdb\', firstModelOnly: true});\n            component.structure.eachChain(c => { c.chainname = chain; });\n            component.structure.eachAtom(a => { a.serial = renumber++; });\n            targets.push(component);\n            selections_t.push(`${alignment.dbStartPos}-${alignment.dbEndPos}:${chain}`);\n        }\n        const structure = concatStructures(getAccession(this.alignments[0].target), ...targets.map(t => t.structure));\n        const target = this.stage.addComponentFromObject(structure, { name: "targetStructure" });\n        \n        target.addRepresentation(\'tube\', {\n            color: 0x11FFEE,\n            side: \'front\',\n            opacity: 0.5,\n            radius: 0.8,\n            visible: false,\n            name: \'targetHighlight\'\n        });\n\n        if (ColormakerRegistry.hasScheme("_targetScheme")) {\n            ColormakerRegistry.removeScheme("_targetScheme")\n        }\n        this.targetSchemeId = ColormakerRegistry.addSelectionScheme([\n            [this.targetAlignedColor, selections_t.join(" or ")],\n            [this.targetUnalignedColor, "*"]\n        ], "_targetScheme")\n\n        if (this.hasQuery) {\n            let data = \'\';\n            let ext = \'pdb\';\n            queryPdb = queryPdb.trimStart();\n            if (queryPdb[0] == "#" || queryPdb.startsWith("data_")) {\n                ext = \'cif\';\n                // NGL doesn\'t like AF3\'s _chem_comp entries\n                queryPdb = queryPdb.replaceAll("_chem_comp.", "_chem_comp_SKIP_HACK.");\n            } else {\n                for (let line of queryPdb.split(\'\\n\')) {\n                    let numCols = Math.max(0, 80 - line.length);\n                    let newLine = line + \' \'.repeat(numCols) + \'\\n\';\n                    data += newLine\n                }\n                queryPdb = data;\n            }\n\n            let query = await this.stage.loadFile(new Blob([queryPdb], { type: \'text/plain\' }), { ext: ext, firstModelOnly: true, name: \'queryStructure\'});\n            if (query && query.structure.getAtomProxy().isCg()) {\n                if (ext == "cif") {\n                    // FIXME: pulchra probably should learn mmCIF\n                    queryPdb = getPdbText(query);\n                }\n                queryPdb = await pulchra(queryPdb);\n                this.stage.removeComponent(query);\n                query = await this.stage.loadFile(new Blob([queryPdb], { type: \'text/plain\' }), {ext: \'pdb\', firstModelOnly: true, name: \'queryStructure\'}); \n            }\n\n            // Map 1-based indices to residue index/resno; only need for query structure\n            // Use queryChainSele to make all selections based on actual query chain\n            const selections_q = [];\n            for (let alignment of this.alignments) {\n                const chain = getChainName(alignment.query);\n\n                selections_q.push(`${alignment.qStartPos}-${alignment.qEndPos} and :${chain}`);\n\n                // Renumber to avoid residue gaps\n                let renumber = 1;\n                query.structure.eachResidue(function(rp) {\n                    rp.resno = renumber++;\n                }, new Selection(`:${chain}`))\n            }\n            if (ColormakerRegistry.hasScheme("_queryScheme")) {\n                ColormakerRegistry.removeScheme("_queryScheme")\n            }\n            this.querySchemeId = ColormakerRegistry.addSelectionScheme([\n                [this.queryAlignedColor, selections_q.join(" or ")],\n                [this.queryUnalignedColor, "*"],\n            ], "_queryScheme")\n\n            // Re-align target to query using TM-align for better superposition\n            // Target 1st since TM-align generates superposition matrix for 1st structure\n            if (this.alignments[0].hasOwnProperty("complexu") && this.alignments[0].hasOwnProperty("complext")) {\n                const t = this.alignments[0].complext.split(\',\').map(x => parseFloat(x));\n                let u = this.alignments[0].complexu.split(\',\').map(x => parseFloat(x));\n                u = [\n                    [u[0], u[1], u[2]],\n                    [u[3], u[4], u[5]],\n                    [u[6], u[7], u[8]],\n                ];\n                // Can\'t use setTransform since we need the actual transformed coordinates for arrows\n                transformStructure(target.structure, t, u);\n                query.addRepresentation(this.qRepr, { color: this.querySchemeId, smoothSheet: true, name: "queryStructure"});\n                target.addRepresentation(this.tRepr, { color: this.targetSchemeId, smoothSheet: true, name: "targetStructure" });\n\n                // Make three separate surface representations based on query toggle state:\n                //   0: Aligned regions of aligned chains\n                //   1: Unaligned regions of aligned chains (shown with 0)\n                //   2: Full structure (all chains; shown with 0 and 1)\n                // Then toggle visibility when showQuery is changed by the user.\n                const surfaceSele0 = [];\n                const surfaceSele1 = [];\n                const surfaceSele2 = [];\n                for (let alignment of this.alignments) {\n                    let chain = getChainName(alignment.query);\n                    surfaceSele0.push(`${alignment.qStartPos}-${alignment.qEndPos}:${chain}`);\n                    surfaceSele1.push(`(not ${alignment.qStartPos}-${alignment.qEndPos} and :${chain})`);\n                    surfaceSele2.push(`:${chain}`);\n                }\n                const surfaceParams = {\n                    color: colorblindColors,\n                    opacity: 0.1,\n                    opaqueBack: false,\n                    useWorker: false\n                }\n                query.addRepresentation("surface", { sele: surfaceSele0.join(" or "), name: "querySurface-0", ...surfaceParams });\n                query.addRepresentation("surface", { sele: surfaceSele1.join(" or "), name: "querySurface-1", visible: false, ...surfaceParams });\n                query.addRepresentation("surface", { sele: `not (${surfaceSele2.join(" or ")})`, name: "querySurface-2", visible: false, ...surfaceParams });\n            } else {\n                // Generate subsetted PDBs for TM-align\n                let qSubPdb = makeSubPDB(query.structure, this.querySele);\n                let tSubPdb = makeSubPDB(target.structure, this.targetSele);\n                let alnFasta = `>target\\n${this.alignments[0].dbAln}\\n\\n>query\\n${this.alignments[0].qAln}`\n                const tm = await tmalign(tSubPdb, qSubPdb, alnFasta);\n                this.tmAlignResults = parseTMOutput(tm.output)\n                let { t, u } = parseTMMatrix(tm.matrix)\n                transformStructure(target.structure, t, u)\n                query.addRepresentation(this.qRepr, {color: this.querySchemeId, name: "queryStructure"});\n                target.addRepresentation(this.tRepr, {color: this.targetSchemeId, name: "targetStructure"});\n            }\n            await this.drawArrows(query.structure, target.structure)\n            this.setQuerySelection();\n            this.setTargetSelection();\n            query.autoView(this.querySele, this.autoViewTime)\n        } else {\n            target.addRepresentation(this.tRepr, {color: this.targetSchemeId, name: "targetStructure"})\n            this.setTargetSelection();\n            this.stage.autoView(this.autoViewTime)\n        }\n        \n    },\n}\n<\/script>\n\n<style scoped>\n.structure-wrapper {\n    width: 500px;\n    height: 400px;\n    margin: 0 auto;\n}\n</style>\n\n<style>\n.theme--dark .structure-wrapper .v-tooltip__content {\n    background: rgba(97, 97, 97, 0.3);\n}\n/* @media only screen and (max-width: 600px) {\n    .structure-wrapper {\n        width: 300px;\n    }\n} */\n.structure-viewer {\n    width: 100%;\n    height: 100%;\n}\n.structure-viewer canvas {\n    border-radius: 2px;\n}\n.structure-panel {\n    position: relative;\n}\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n.tmscore-panel {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    font-family: monospace;\n    color: rgb(31, 119, 180);\n}\n.left-cell {\n    text-align: right;\n    width: 50%;\n}\n.right-cell {\n    text-align: left;\n    width: 50%;\n    padding-left: 0.3em;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        6732: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, "\n.theme--dark .structure-wrapper .v-tooltip__content {\n    background: rgba(97, 97, 97, 0.3);\n}\n/* @media only screen and (max-width: 600px) {\n    .structure-wrapper {\n        width: 300px;\n    }\n} */\n.structure-viewer {\n    width: 100%;\n    height: 100%;\n}\n.structure-viewer canvas {\n    border-radius: 2px;\n}\n.structure-panel {\n    position: relative;\n}\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n.tmscore-panel {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    font-family: monospace;\n    color: rgb(31, 119, 180);\n}\n.left-cell {\n    text-align: right;\n    width: 50%;\n}\n.right-cell {\n    text-align: left;\n    width: 50%;\n    padding-left: 0.3em;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/StructureViewer.vue" ],
                names: [],
                mappings: ";AA6jBA;IACA,iCAAA;AACA;AACA;;;;GAIA;AACA;IACA,WAAA;IACA,YAAA;AACA;AACA;IACA,kBAAA;AACA;AACA;IACA,kBAAA;AACA;AACA;IACA,oBAAA;IACA,mBAAA;IACA,kBAAA;IACA,uBAAA;IACA,WAAA;IACA,SAAA;IACA,UAAA;IACA,OAAA;AACA;AACA;IACA,kBAAA;IACA,WAAA;IACA,MAAA;IACA,OAAA;IACA,UAAA;IACA,sBAAA;IACA,wBAAA;AACA;AACA;IACA,iBAAA;IACA,UAAA;AACA;AACA;IACA,gBAAA;IACA,UAAA;IACA,mBAAA;AACA",
                sourcesContent: [ '<template>\n<div class="structure-panel" v-if="alignments.length > 0 && \'tCa\' in alignments[0]">\n    <StructureViewerTooltip attach=".structure-panel" />\n    <div class="structure-wrapper" ref="structurepanel">\n        <table v-if="tmAlignResults" class="tmscore-panel" v-bind="tmPanelBindings">\n            <tr>\n                <td class="left-cell">TM-Score:</td>\n                <td class="right-cell">{{ tmAlignResults.tmScore }}</td>\n            </tr>\n            <tr>\n                <td class="left-cell">RMSD:</td>\n                <td class="right-cell">{{ tmAlignResults.rmsd  }}</td>\n            </tr>\n        </table>\n        <StructureViewerToolbar\n            :isFullscreen="isFullscreen"\n            :isSpinning="isSpinning"\n            :showQuery="showQuery"\n            :showTarget="showTarget"\n            :showArrows="showArrows"\n            :disableQueryButton="!hasQuery"\n            :disableArrowButton="!hasQuery"\n            @makeImage="handleMakeImage"\n            @makePDB="handleMakePDB"\n            @resetView="handleResetView"\n            @toggleFullscreen="handleToggleFullscreen"\n            @toggleTarget="handleToggleTarget"\n            @toggleQuery="handleToggleQuery"\n            @toggleArrows="handleToggleArrows"\n            @toggleSpin="handleToggleSpin"\n        />\n        <div class="structure-viewer" ref="viewport"></div>\n    </div>\n</div>\n</template>\n\n<script>\nimport StructureViewerTooltip from \'./StructureViewerTooltip.vue\';\nimport StructureViewerToolbar from \'./StructureViewerToolbar.vue\';\nimport StructureViewerMixin from \'./StructureViewerMixin.vue\';\nimport { mockPDB, makeSubPDB, transformStructure, makeMatrix4  } from \'./Utilities.js\';\nimport { pulchra } from \'pulchra-wasm\';\nimport { tmalign, parse as parseTMOutput, parseMatrix as parseTMMatrix } from \'tmalign-wasm\';\n\nimport Panel from \'./Panel.vue\';\nimport { Shape, Selection, download, ColormakerRegistry, PdbWriter, Color, concatStructures, StructureComponent } from \'ngl\';\n\n// Create NGL arrows from array of ([X, Y, Z], [X, Y, Z]) pairs\n// Get XYZ coordinates of CA of a given residue\nconst xyz = (structure, resIndex) => {\n    var rp = structure.getResidueProxy();\n    var ap = structure.getAtomProxy();\n    rp.index = resIndex;\n    ap.index = rp.getAtomIndexByName(\'CA\');\n    return [ap.x, ap.y, ap.z];\n}\n\n// Save indices of matching columns in an alignment\nconst getMatchingColumns = (alignment) => {\n    let cols_q = [];\n    let cols_t = [];\n    let id_q = alignment.qStartPos;\n    let id_t = alignment.dbStartPos;\n    for (let i = 0; i < alignment.qAln.length; i++) {\n        if (alignment.qAln[i] === \'-\' || alignment.dbAln[i] === \'-\') {\n            if (alignment.qAln[i] === \'-\') id_t++;\n            else id_q++;\n        } else {\n            cols_q.push(id_q);\n            cols_t.push(id_t);\n            id_q++;\n            id_t++;\n        }\n    }\n    return [cols_q, cols_t]\n}\n\n// Get chain from structure name like Structure_A\nconst getChainName = (name) => {\n    // HACK FIXME fix AF chain names\n    if (/_v[0-9]+$/.test(name)) {\n        return \'A\';\n    }\n    let pos = name.lastIndexOf(\'_\');\n    if (pos != -1) {\n        let match = name.substring(pos + 1);\n        return match.length >= 1 ? match[0] : \'A\';\n    }\n    // fallback\n    return \'A\';\n}\n\nconst getAccession = (name) => {\n    // HACK FIXME fix AF chain names\n    if (/_v[0-9]+$/.test(name)) {\n        return name;\n    }\n    let pos = name.lastIndexOf(\'_\');\n    return pos != -1 ? name.substring(0, pos) : name;\n}\n\n// Get coordinates of all atoms found in given selection\n// skip consecutive res indices as they are most likely alternative locations\n// foldseek always chooses the first alt locations, so we mimic this behavior\nconst getAtomXYZ = (structure, sele) => {\n    const xyz = [];\n    let lastResidueIndex = -1;\n\n    structure.eachAtom(ap => {\n        if (ap.resno !== lastResidueIndex) {\n            xyz.push([ap.x, ap.y, ap.z]);\n            lastResidueIndex = ap.resno;\n        }\n    }, sele); \n\n    return xyz;\n}\n\nconst colorblindColors = ColormakerRegistry.addScheme(function() {\n    let colors = [0x991999, 0x00BFBF, 0xE9967A, 0x009E73, 0xF0E442, 0x0072B2, 0xD55E00, 0xCC79A7];\n    this.atomColor = function(atom) {\n        return colors[atom.chainIndex % colors.length];\n    }\n}, "colorblindColors")\n\nconst getPdbText = comp => {\n    let pw = new PdbWriter(comp.structure, { renumberSerial: false });\n    return pw.getData().split(\'\\n\').filter(line => line.startsWith(\'ATOM\')).join(\'\\n\');\n}\n\nexport default {\n    name: "StructureViewer",\n    components: {\n        Panel,\n        StructureViewerTooltip,\n        StructureViewerToolbar,\n    },\n    mixins: [\n        StructureViewerMixin,\n    ],\n    data() {\n        return {\n            selection: null,\n            showArrows: false,\n            showQuery: 0,\n            showTarget: 0,\n            tmAlignResults: null,\n            hasQuery: true,\n        }\n    },\n    props: {\n        alignments: { type: Array },\n        highlights: { type: Array },\n        queryFile: { type: String },\n        queryAlignedColor: { type: String, default: "#1E88E5" },\n        queryUnalignedColor: { type: String, default: "#A5CFF5" },\n        targetAlignedColor: { type: String, default: "#FFC107" },\n        targetUnalignedColor: { type: String, default: "#FFE699" },\n        qRepr: { type: String, default: "cartoon" },\n        tRepr: { type: String, default: "cartoon" },\n        hits: { type: Object },\n        autoViewTime: { type: Number, default: 100 }\n    },\n    methods: {\n        // Create arrows connecting CA coordinates for query/target in match columns\n        async drawArrows(str1, str2) {\n            const shape = new Shape(\'arrows\');\n            await Promise.all(this.alignments.map(async (alignment) => {\n                const chain_q = getChainName(alignment.query);\n                const chain_t = getChainName(alignment.target);\n                const [sele_q, sele_t] = getMatchingColumns(alignment).map(arr => arr.join(" or "));\n\n                const str1_xyz = getAtomXYZ(str1, new Selection(`(${sele_q}) and :${chain_q}.CA`));\n                const str2_xyz = getAtomXYZ(str2, new Selection(`(${sele_t}) and :${chain_t}.CA`));\n\n                if (str1_xyz.length != str2_xyz.length) {\n                    console.warn("Different number of CA atoms in query and target", str1_xyz.length, str2_xyz.length);\n                }\n                for (let i = 0; i < Math.min(str1_xyz.length, str2_xyz.length); i++) {\n                    shape.addArrow(str1_xyz[i], str2_xyz[i], [0, 1, 1], 0.4);\n                }\n            }));\n            let component = this.stage.addComponentFromObject(shape);\n            component.addRepresentation(\'buffer\');\n            component.setVisibility(this.showArrows);\n        },\n        handleToggleArrows() {\n            if (!this.stage) return;\n            this.showArrows = !this.showArrows;\n        },\n        handleToggleQuery() {\n            if (!this.stage) return;\n            if (__LOCAL__) {\n                this.showQuery = (this.showQuery === 0) ? 1 : 0;\n            } else {\n                this.showQuery = (this.showQuery === 2) ? 0 : this.showQuery + 1;\n            }\n        },\n        handleResetView() {\n            if (!this.stage) return;\n            this.setQuerySelection();\n        },\n        handleToggleTarget() {\n            if (!this.stage) return;\n            if (__LOCAL__) {\n                this.showTarget = (this.showTarget === 0) ? 1 : 0;\n            } else {\n                this.showTarget = (this.showTarget === 2) ? 0 : this.showTarget + 1; \n            }\n        },\n        clearSelection() {\n            if (!this.alignments || !this.stage) return;\n            let repr = this.stage.getRepresentationsByName("targetHighlight");\n            repr.setSelection()\n            repr.setVisibility(false)\n        },\n        setSelectionData(selection) {\n            // FIXME tube/cartoon representation cannot visualise <3 residues\n            //       https://github.com/nglviewer/ngl/issues/759\n            //       use licorice representation for this case? or just +1 to make 3\n            if (!this.alignments || !this.stage) return;\n            let repr = this.stage.getRepresentationsByName("targetHighlight");\n            repr.setSelection()\n            if (selection.length === 0) {\n                repr.setVisibility(false);\n                return;\n            }\n            let seles = [];\n            for (let [i, start, length] of selection) {\n                let chain = getChainName(this.alignments[i].target);\n                let end = start + length;\n                seles.push(`${start}-${end}:${chain}`);\n            } \n            let sele = seles.join(" or ");\n            repr.setSelection(sele);\n            repr.setVisibility(true);\n        },\n        setQuerySelection() {\n            let repr = this.stage.getRepresentationsByName("queryStructure");\n            if (!repr) return;\n            let sele = this.querySele;\n            repr.setSelection(sele);\n            repr.list[0].parent.autoView(sele, this.autoViewTime);\n            if (this.showQuery === 0) {\n                this.stage.getRepresentationsByName("querySurface-1").setVisibility(false);\n                this.stage.getRepresentationsByName("querySurface-2").setVisibility(false);\n            } else if (this.showQuery === 1) {\n                this.stage.getRepresentationsByName("querySurface-1").setVisibility(true);\n                this.stage.getRepresentationsByName("querySurface-2").setVisibility(false);\n            } else {\n                this.stage.getRepresentationsByName("querySurface-1").setVisibility(true);\n                this.stage.getRepresentationsByName("querySurface-2").setVisibility(true);\n            }\n        },\n        setTargetSelection() {\n            let repr = this.stage.getRepresentationsByName("targetStructure");\n            if (!repr) return;\n            let sele = this.targetSele;\n            repr.setSelection(sele);\n        },\n        async handleMakeImage() {\n            if (!this.stage)\n                return;\n            let wasSpinning = this.isSpinning;\n            this.isSpinning = false;\n            let title = this.alignments.map(aln => this.hasQuery ? `${aln.query}-${aln.target}` : aln.target).join("_");\n            this.stage.viewer.setLight(undefined, undefined, undefined, 0.2)\n            const blob = await this.stage.makeImage({\n                trim: true,\n                factor: (this.isFullscreen) ? 1 : 8,\n                antialias: true,\n                transparent: true,\n            });\n            this.stage.viewer.setLight(undefined, undefined, undefined, this.$vuetify.theme.dark ? 0.4 : 0.2)\n            download(blob, `${title}.png`)\n            this.isSpinning = wasSpinning;\n        },\n        handleMakePDB() {\n            if (!this.stage)\n                return;\n            let qPDB = this.stage.getComponentsByName("queryStructure").list.map(getPdbText); \n            let tPDB = this.stage.getComponentsByName("targetStructure").list.map(getPdbText);\n            if (!qPDB && !tPDB) \n                return;\n            let title = this.alignments.map(aln => qPDB ? `${aln.query}-${aln.target}` : aln.target);\n            let result = null;\n            if (qPDB && tPDB) {\n                result =\n`TITLE     ${title.join(" ")}\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms might have been re-generated by PULCHRA,\nREMARK              if they are not present in the original PDB file.\nMODEL        1\n${qPDB.join(\'\\n\')}\nENDMDL\nMODEL        2\n${tPDB.join(\'\\n\')}\nENDMDL\nEND\n`\n            } else {\n                result =\n`TITLE     ${title.join(" ")}\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms were re-generated by PULCHRA.\nMODEL        1\n${tPDB.join(\'\\n\')}\nENDMDL\nEND\n`\n            }\n            download(new Blob([result], { type: \'text/plain\' }), (title.join("_") + ".pdb"));\n        }\n    },\n    watch: {\n        \'showArrows\': function(val, _) {\n            if (!this.stage) return\n            this.stage.getComponentsByName("arrows").forEach(comp => { comp.setVisibility(val) });\n        },\n        \'showQuery\': function() {\n            if (!this.stage) return;\n            this.setQuerySelection();\n        },\n        \'showTarget\': function(val, _) {\n            if (!this.stage) return;\n            this.setTargetSelection();\n        },\n        \'highlights\': function(values) {\n            if (!this.stage || !values) return;\n            let selections = []\n            values.forEach((value, i) => {\n                if (!value) return;\n                let [start, length] = value;\n                selections.push([i, start, length]);\n            })\n            this.setSelectionData(selections)\n        }\n    },\n    computed: {\n        querySele: function() {\n            if (this.alignments.length === 0 || this.showQuery == 2)\n                return \'\';\n            if (this.showQuery === 0)\n                return this.alignments.map(a => `${a.qStartPos}-${a.qEndPos}:${getChainName(a.query)}`).join(" or ");\n            if (this.showQuery === 1)\n                return this.alignments.map(a => `:${getChainName(a.query)}`).join(" or ");\n        },\n        targetSele: function() {\n            if (this.alignments.length === 0 || this.showTarget == 2)\n                return \'\';\n            if (this.showTarget === 0)\n                return this.alignments.map(a => `${a.dbStartPos}-${a.dbEndPos}:${getChainName(a.target)}`).join(" or ");\n            if (this.showTarget === 1)\n                return this.alignments.map(a => `:${getChainName(a.target)}`).join(" or ");\n        },\n        tmPanelBindings: function() {\n            return (this.isFullscreen) ? { \'style\': \'margin-top: 10px; font-size: 2em; line-height: 2em\' } : {  }\n        },\n    },\n    async mounted() {\n        if (typeof(this.alignments[0].tCa) == "undefined")\n            return;\n\n        // Download from server --\x3e full input PDB from /result/query endpoint, saved with JSON.stringify\n        //                local --\x3e qCa string\n        // Tickets prefixed with \'user-\' only occur on user uploaded files\n        let queryPdb = "";\n        this.hasQuery = true;\n        if (this.$LOCAL) {\n            if (this.hits.queries[0].hasOwnProperty(\'pdb\')) {\n                queryPdb = JSON.parse(this.hits.queries[0].pdb);\n            } else {\n                queryPdb = mockPDB(this.hits.queries[0].qCa, this.hits.queries[0].sequence, \'A\');\n            }\n        } else if (this.$route.params.ticket.startsWith(\'user-\')) {\n            // Check for special \'user\' ticket for when users have uploaded JSON\n            if (this.hits.queries[0].hasOwnProperty(\'pdb\')) {\n                queryPdb = JSON.parse(this.hits.queries[0].pdb);\n            } else {\n                const localData = this.$root.userData[this.$route.params.entry];\n                queryPdb = mockPDB(localData.queries[0].qCa, localData.queries[0].sequence, \'A\');\n            }\n        } else {\n            try {\n                const request = await this.$axios.get("api/result/" + this.$route.params.ticket + \'/query\');\n                queryPdb = request.data;\n            } catch (e) {\n                queryPdb = "";\n                this.hasQuery = false;\n            }\n        }\n\n        // Run PULCHRA per chain then concatenate Structure objects in first StructureComponent\n        const targets = [];\n        const selections_t = [];\n        let renumber = 0;\n        let lastIdx = null;\n        let remoteData = null;\n        let i = 0;\n        for (let alignment of this.alignments) {\n            const chain = getChainName(alignment.target);\n            let tSeq = alignment.tSeq;\n            let tCa = alignment.tCa;\n            if (Number.isInteger(alignment.tCa) && Number.isInteger(alignment.tSeq)) {\n                const db = alignment.db;\n                const idx = alignment.tCa;\n                if (idx != lastIdx) {\n                    const ticket =  this.$route.params.ticket;\n                    const response = await this.$axios.get("api/result/" + ticket + \'/\' + this.$route.params.entry + \'?format=brief&index=\' + idx + \'&database=\' + db);\n                    remoteData = response.data;\n                    lastIdx = idx;\n                }\n                tSeq = remoteData[i].tSeq;\n                tCa = remoteData[i].tCa;\n                i++;\n            }\n            const mock = mockPDB(tCa, tSeq, chain);\n            const pdb = await pulchra(mock);\n            const component = await this.stage.loadFile(new Blob([pdb], { type: \'text/plain\' }), {ext: \'pdb\', firstModelOnly: true});\n            component.structure.eachChain(c => { c.chainname = chain; });\n            component.structure.eachAtom(a => { a.serial = renumber++; });\n            targets.push(component);\n            selections_t.push(`${alignment.dbStartPos}-${alignment.dbEndPos}:${chain}`);\n        }\n        const structure = concatStructures(getAccession(this.alignments[0].target), ...targets.map(t => t.structure));\n        const target = this.stage.addComponentFromObject(structure, { name: "targetStructure" });\n        \n        target.addRepresentation(\'tube\', {\n            color: 0x11FFEE,\n            side: \'front\',\n            opacity: 0.5,\n            radius: 0.8,\n            visible: false,\n            name: \'targetHighlight\'\n        });\n\n        if (ColormakerRegistry.hasScheme("_targetScheme")) {\n            ColormakerRegistry.removeScheme("_targetScheme")\n        }\n        this.targetSchemeId = ColormakerRegistry.addSelectionScheme([\n            [this.targetAlignedColor, selections_t.join(" or ")],\n            [this.targetUnalignedColor, "*"]\n        ], "_targetScheme")\n\n        if (this.hasQuery) {\n            let data = \'\';\n            let ext = \'pdb\';\n            queryPdb = queryPdb.trimStart();\n            if (queryPdb[0] == "#" || queryPdb.startsWith("data_")) {\n                ext = \'cif\';\n                // NGL doesn\'t like AF3\'s _chem_comp entries\n                queryPdb = queryPdb.replaceAll("_chem_comp.", "_chem_comp_SKIP_HACK.");\n            } else {\n                for (let line of queryPdb.split(\'\\n\')) {\n                    let numCols = Math.max(0, 80 - line.length);\n                    let newLine = line + \' \'.repeat(numCols) + \'\\n\';\n                    data += newLine\n                }\n                queryPdb = data;\n            }\n\n            let query = await this.stage.loadFile(new Blob([queryPdb], { type: \'text/plain\' }), { ext: ext, firstModelOnly: true, name: \'queryStructure\'});\n            if (query && query.structure.getAtomProxy().isCg()) {\n                if (ext == "cif") {\n                    // FIXME: pulchra probably should learn mmCIF\n                    queryPdb = getPdbText(query);\n                }\n                queryPdb = await pulchra(queryPdb);\n                this.stage.removeComponent(query);\n                query = await this.stage.loadFile(new Blob([queryPdb], { type: \'text/plain\' }), {ext: \'pdb\', firstModelOnly: true, name: \'queryStructure\'}); \n            }\n\n            // Map 1-based indices to residue index/resno; only need for query structure\n            // Use queryChainSele to make all selections based on actual query chain\n            const selections_q = [];\n            for (let alignment of this.alignments) {\n                const chain = getChainName(alignment.query);\n\n                selections_q.push(`${alignment.qStartPos}-${alignment.qEndPos} and :${chain}`);\n\n                // Renumber to avoid residue gaps\n                let renumber = 1;\n                query.structure.eachResidue(function(rp) {\n                    rp.resno = renumber++;\n                }, new Selection(`:${chain}`))\n            }\n            if (ColormakerRegistry.hasScheme("_queryScheme")) {\n                ColormakerRegistry.removeScheme("_queryScheme")\n            }\n            this.querySchemeId = ColormakerRegistry.addSelectionScheme([\n                [this.queryAlignedColor, selections_q.join(" or ")],\n                [this.queryUnalignedColor, "*"],\n            ], "_queryScheme")\n\n            // Re-align target to query using TM-align for better superposition\n            // Target 1st since TM-align generates superposition matrix for 1st structure\n            if (this.alignments[0].hasOwnProperty("complexu") && this.alignments[0].hasOwnProperty("complext")) {\n                const t = this.alignments[0].complext.split(\',\').map(x => parseFloat(x));\n                let u = this.alignments[0].complexu.split(\',\').map(x => parseFloat(x));\n                u = [\n                    [u[0], u[1], u[2]],\n                    [u[3], u[4], u[5]],\n                    [u[6], u[7], u[8]],\n                ];\n                // Can\'t use setTransform since we need the actual transformed coordinates for arrows\n                transformStructure(target.structure, t, u);\n                query.addRepresentation(this.qRepr, { color: this.querySchemeId, smoothSheet: true, name: "queryStructure"});\n                target.addRepresentation(this.tRepr, { color: this.targetSchemeId, smoothSheet: true, name: "targetStructure" });\n\n                // Make three separate surface representations based on query toggle state:\n                //   0: Aligned regions of aligned chains\n                //   1: Unaligned regions of aligned chains (shown with 0)\n                //   2: Full structure (all chains; shown with 0 and 1)\n                // Then toggle visibility when showQuery is changed by the user.\n                const surfaceSele0 = [];\n                const surfaceSele1 = [];\n                const surfaceSele2 = [];\n                for (let alignment of this.alignments) {\n                    let chain = getChainName(alignment.query);\n                    surfaceSele0.push(`${alignment.qStartPos}-${alignment.qEndPos}:${chain}`);\n                    surfaceSele1.push(`(not ${alignment.qStartPos}-${alignment.qEndPos} and :${chain})`);\n                    surfaceSele2.push(`:${chain}`);\n                }\n                const surfaceParams = {\n                    color: colorblindColors,\n                    opacity: 0.1,\n                    opaqueBack: false,\n                    useWorker: false\n                }\n                query.addRepresentation("surface", { sele: surfaceSele0.join(" or "), name: "querySurface-0", ...surfaceParams });\n                query.addRepresentation("surface", { sele: surfaceSele1.join(" or "), name: "querySurface-1", visible: false, ...surfaceParams });\n                query.addRepresentation("surface", { sele: `not (${surfaceSele2.join(" or ")})`, name: "querySurface-2", visible: false, ...surfaceParams });\n            } else {\n                // Generate subsetted PDBs for TM-align\n                let qSubPdb = makeSubPDB(query.structure, this.querySele);\n                let tSubPdb = makeSubPDB(target.structure, this.targetSele);\n                let alnFasta = `>target\\n${this.alignments[0].dbAln}\\n\\n>query\\n${this.alignments[0].qAln}`\n                const tm = await tmalign(tSubPdb, qSubPdb, alnFasta);\n                this.tmAlignResults = parseTMOutput(tm.output)\n                let { t, u } = parseTMMatrix(tm.matrix)\n                transformStructure(target.structure, t, u)\n                query.addRepresentation(this.qRepr, {color: this.querySchemeId, name: "queryStructure"});\n                target.addRepresentation(this.tRepr, {color: this.targetSchemeId, name: "targetStructure"});\n            }\n            await this.drawArrows(query.structure, target.structure)\n            this.setQuerySelection();\n            this.setTargetSelection();\n            query.autoView(this.querySele, this.autoViewTime)\n        } else {\n            target.addRepresentation(this.tRepr, {color: this.targetSchemeId, name: "targetStructure"})\n            this.setTargetSelection();\n            this.stage.autoView(this.autoViewTime)\n        }\n        \n    },\n}\n<\/script>\n\n<style scoped>\n.structure-wrapper {\n    width: 500px;\n    height: 400px;\n    margin: 0 auto;\n}\n</style>\n\n<style>\n.theme--dark .structure-wrapper .v-tooltip__content {\n    background: rgba(97, 97, 97, 0.3);\n}\n/* @media only screen and (max-width: 600px) {\n    .structure-wrapper {\n        width: 300px;\n    }\n} */\n.structure-viewer {\n    width: 100%;\n    height: 100%;\n}\n.structure-viewer canvas {\n    border-radius: 2px;\n}\n.structure-panel {\n    position: relative;\n}\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n.tmscore-panel {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    font-family: monospace;\n    color: rgb(31, 119, 180);\n}\n.left-cell {\n    text-align: right;\n    width: 50%;\n}\n.right-cell {\n    text-align: left;\n    width: 50%;\n    padding-left: 0.3em;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        8786: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, "\n.structure-panel[data-v-06a02575] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n.structure-viewer[data-v-06a02575] {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/StructureViewerMSA.vue" ],
                names: [],
                mappings: ";AA+VA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;AACA;AACA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;IACA,SAAA;IACA,OAAA;IACA,QAAA;IACA,MAAA;IACA,SAAA;IACA,UAAA;IACA,gBAAA;AACA",
                sourcesContent: [ '<template>\n<div class="structure-panel">\n    <StructureViewerTooltip attach=".structure-panel" />\n    <div class="structure-wrapper" ref="structurepanel">\n        <StructureViewerToolbar\n            :isFullscreen="isFullscreen"\n            :isSpinning="isSpinning"\n            @makeImage="handleMakeImage"\n            @makePDB="handleMakePDB"\n            @resetView="handleResetView"\n            @toggleFullscreen="handleToggleFullscreen"\n            @toggleSpin="handleToggleSpin"\n            disableArrowButton\n            disableQueryButton\n            disableTargetButton\n            style="position: absolute; bottom: 8px;"\n        />\n        <div class="structure-viewer" ref="viewport" />\n    </div>\n</div>\n</template>\n\n<script>\nimport StructureViewerTooltip from \'./StructureViewerTooltip.vue\';\nimport StructureViewerToolbar from \'./StructureViewerToolbar.vue\';\nimport StructureViewerMixin from \'./StructureViewerMixin.vue\';\nimport { tmalign, parse as parseTMOutput, parseMatrix as parseTMMatrix } from \'tmalign-wasm\';\nimport { mockPDB, makeSubPDB, makeMatrix4, interpolateMatrices, animateMatrix  } from \'./Utilities.js\';\nimport { download, PdbWriter, Matrix4, Quaternion, Vector3, concatStructures } from \'ngl\';\nimport { pulchra } from \'pulchra-wasm\';\n\n// Mock alignment object from two (MSA-derived) aligned strings\nfunction mockAlignment(one, two) {\n    let res = { backtrace: "", qAln: "", dbAln: "" };\n    let started = false; // flag for first Match column in backtrace\n    let m = 0;           // index in msa\n    let qr = 0;          // index in seq\n    let tr = 0;\n    let qBuffer = "";\n    let tBuffer = "";\n    while (m < one.length) {\n        const qc = one[m];\n        const tc = two[m];\n        if (qc === \'-\' && tc === \'-\') {\n            // Skip gap columns\n        } else if (qc === \'-\') {\n            if (started) {\n                res.backtrace += \'D\';               \n                qBuffer += qc;\n                tBuffer += tc;\n            }\n            ++tr;\n        } else if (tc === \'-\') {\n            if (started) {\n                res.backtrace += \'I\';\n                qBuffer += qc;\n                tBuffer += tc;\n            }\n            ++qr;\n        } else {\n            if (started) {\n                res.qAln += qBuffer;\n                res.dbAln += tBuffer;\n                qBuffer = "";\n                tBuffer = "";\n            } else {\n                started = true;\n                res.qStartPos = qr;\n                res.dbStartPos = tr;\n            }\n            res.backtrace += \'M\';\n            qBuffer += qc;\n            tBuffer += tc;\n            res.qEndPos = qr;\n            res.dbEndPos = tr;\n            ++qr;\n            ++tr;\n        }\n        ++m;\n    }\n    res.qStartPos++;\n    res.dbStartPos++;\n    res.qSeq  = one.replace(/-/g, \'\');\n    res.tSeq  = two.replace(/-/g, \'\');\n    return res;\n}\n\nexport default {\n    name: "StructureViewerMSA",\n    components: {\n        StructureViewerToolbar,\n        StructureViewerTooltip,\n    },\n    mixins: [\n        StructureViewerMixin,\n    ],\n    data: () => ({\n        structures: [],  // { name, aa, 3di (ss), ca, NGL structure, alignment, map }\n        curReferenceIndex: -1,  // index in ALL sequences, not just visualised subset - used as key\n    }),\n    props: {\n        entries: { type: Array, required: true },\n        selection: { type: Array, required: true },\n        reference: { type: Number, required: true },\n        bgColorLight: { type: String, default: "white" },\n        bgColorDark: { type: String, default: "#1E1E1E" },\n        representationStyle: { type: String, default: "cartoon" },\n        referenceStyleParameters: {\n            type: Object,\n            default: () => ({ color: \'#1E88E5\', opacity: 1.0 })\n        },\n        regularStyleParameters: {\n            type: Object,\n            default: () => ({ color: \'#FFC107\', opacity: 0.5, side: \'front\' })\n        },\n    },\n    methods: {\n        resetView() {\n            if (!this.stage) return;\n            if (this.selection.length > 0) {\n                this.getComponentByIndex(this.reference).autoView(this.transitionDuration);\n            } else {\n                this.stage.autoView(this.transitionDuration);\n            }\n        },\n        makePDB() {\n            if (!this.stage) return\n            let PDB;\n            let result = `\\\nTITLE     Superposed structures from Foldmason alignment\nREMARK    This file was generated by the FoldMason webserver:\nREMARK      https://search.foldseek.com/foldmason\nREMARK    Please cite:\nREMARK      https://doi.org/10.1101/2024.08.01.606130\nREMARK    Warning: Non C-alpha atoms may have been re-generated by PULCHRA\nREMARK             if they are not present in the original PDB file.\n`;\n            this.stage.eachComponent(comp => {\n                let clone = concatStructures("clone", comp.structure)\n                let matrix = new Matrix4();\n                matrix.fromArray(comp.transform.elements);\n                clone.eachAtom(ap => {\n                    let position = new Vector3(ap.x, ap.y, ap.z);\n                    position.applyMatrix4(matrix);\n                    ap.x = position.x;\n                    ap.y = position.y;\n                    ap.z = position.z;\n                });\n                PDB = new PdbWriter(clone, { renumberSerial: false }).getData();\n                PDB = PDB.split(\'\\n\').filter(line => line.startsWith("ATOM")).join(\'\\n\');\n                let index = parseInt(comp.structure.name.replace("key-", "")); \n                let name = this.entries[index].name;\n                result += `\\\nMODEL     ${index}\nREMARK    Name: ${name}\n${PDB}\nENDMDL\n`;\n            }, "structure")\n            result += "END";\n            download(new Blob([result], { type: \'text/plain\' }), "foldmason.pdb")\n        },\n        makeImage() {\n            if (!this.stage) return\n            this.stage.viewer.setLight(undefined, undefined, undefined, 0.2)\n            this.stage.makeImage({\n                trim: true,\n                factor: (this.isFullscreen) ? 1 : 8,\n                antialias: true,\n                transparent: true,\n            }).then((blob) => {\n                this.stage.viewer.setLight(undefined, undefined, undefined, this.$vuetify.theme.dark ? 0.4 : 0.2)\n                download(blob, "foldmason.png")\n            })\n        },\n        getComponentByIndex(index) {\n            if (!this.stage) return;\n            const compList = this.stage.getComponentsByName(`key-${index}`);\n            if (compList.list.length === 0) return -1;\n            return compList.list[0];\n        },\n        async tmAlignToReference(index) {\n            if (index === this.reference) {\n                return;\n            }\n            const refData = this.entries[this.reference];\n            const newData = this.entries[index];\n            const refComp = this.getComponentByIndex(this.reference);\n            const newComp = this.getComponentByIndex(index);\n            const aln = mockAlignment(refData.aa, newData.aa);\n            const fasta = `>target\\n${aln.dbAln}\\n\\n>query\\n${aln.qAln}`;\n            const [queryPDB, targetPDB] = await Promise.all([\n                makeSubPDB(refComp.structure, aln ? `${aln.qStartPos}-${aln.qEndPos}` : \'\'),\n                makeSubPDB(newComp.structure, aln ? `${aln.dbStartPos}-${aln.dbEndPos}` : \'\')\n            ]);\n            if (!__LOCAL__) {\n                const worker = new Worker(new URL("TMAlignWorker.js", import.meta.url));\n                return new Promise((resolve, reject) => {\n                    worker.onmessage = function (e) {\n                        const { t, u, tmResults } = e.data;\n                        resolve({\n                            matrix: makeMatrix4(t, u),\n                            tmResults: tmResults\n                        }); \n                        worker.terminate();\n                    }\n                    worker.onerror = function (e) {\n                        reject(e);\n                        worker.terminate();\n                    }\n                    worker.postMessage({ refPDB: targetPDB, newPDB: queryPDB, alnFasta: fasta });\n                });\n            }\n            const { output, matrix } = await tmalign(targetPDB, queryPDB, fasta);\n            const { t, u }  = parseTMMatrix(matrix);\n            const tmResults = parseTMOutput(output);\n            return Promise.resolve({\n                matrix: makeMatrix4(t, u),\n                tmResults: tmResults,\n                alignment: aln\n            });\n        },\n        async addStructureToStage(index, aa, ca) {\n            const mock = mockPDB(ca, aa.replace(/-/g, \'\'), \'A\');\n            const pdb  = await pulchra(mock);\n            const blob = new Blob([pdb], { type: \'text/plain\' })\n            return this.stage.loadFile(blob, { ext: \'pdb\', firstModelOnly: true, name: `key-${index}` });\n        },\n        async shiftStructure({ structure }, index, shiftValue) {\n            const { x, y, z } = structure.position;\n            const offset = index * shiftValue;\n            structure.setPosition({x: x + offset, y: y + offset, z: z + offset })\n            this.stage.viewer.requestRender()\n        },\n        async explode(shiftValue) {\n            if (!this.stage) return;\n            this.structures.forEach((structure, index) => this.shiftStructure(structure, index, shiftValue));\n            this.stage.autoView();\n        },\n        async updateEntries(newValues, oldValues) {\n            if (!this.stage) {\n                return;\n            }\n\n            // Selections - structures to update/remove/add\n            const newSet = new Set(newValues);\n            const oldSet = new Set(oldValues);\n            \n            if (newSet.size === 0) {\n                this.stage.removeAllComponents();\n                return;\n            }\n\n            const update = [];\n            const remove = [];\n            const add    = [];\n\n            for (const value of oldSet) {\n                if (value === this.reference) continue;\n                if (newSet.has(value)) {\n                    update.push(value);\n                } else {\n                    remove.push(value);\n                }\n            }\n            for (const value of newSet) {\n                if (value === this.reference || oldSet.has(value)) continue;\n                add.push(value);\n            }\n\n            // Changed status of reference\n            const isDiffReference = this.reference !== this.curReferenceIndex;\n            const isNewReference  = !oldSet.has(this.reference);\n            const referenceChanged = isDiffReference || isNewReference;\n\n            this.curReferenceIndex = this.reference;\n\n            // Update the reference\n            // If reference already exists, just change the colour and reset its transform\n            // Otherwise add as new structure to the NGL Stage\n            if (referenceChanged) {\n                let data = this.entries[this.reference];\n                let ref;\n                if (isNewReference) {\n                    ref = await this.addStructureToStage(this.reference, data.aa, data.ca);\n                    ref.addRepresentation(this.representationStyle, this.referenceStyleParameters);\n                } else {\n                    ref = this.getComponentByIndex(this.reference);\n                    ref.reprList[0].setVisibility(false);\n                    ref.reprList[0].setParameters(this.referenceStyleParameters)\n                    ref.setTransform(new Matrix4());\n                    ref.reprList[0].setVisibility(true);\n                }\n                ref.autoView();\n            }\n\n            await Promise.all(\n                add.map(async (idx) => {\n                    const data = this.entries[idx];\n                    const structure = await this.addStructureToStage(idx, data.aa, data.ca);\n                    const { matrix } = await this.tmAlignToReference(idx);\n                    structure.setTransform(matrix);\n                    structure.addRepresentation(this.representationStyle, this.regularStyleParameters);\n                })\n            );\n\n            await Promise.all(\n                remove.map(async (idx) => {\n                    const structure = this.getComponentByIndex(idx);\n                    this.stage.removeComponent(structure);\n                })\n            );\n            \n            if (!referenceChanged) {\n                return;\n            }\n\n            await Promise.all(\n                update.map(async (idx) => {\n                    const structure = this.getComponentByIndex(idx); \n                    if (!structure || structure.reprList.length === 0) return;\n                    const [ representation ] = structure.reprList;\n                    representation.setVisibility(false);\n                    const { matrix } = await this.tmAlignToReference(idx);\n                    representation.setParameters(this.regularStyleParameters)\n                    structure.setTransform(matrix);\n                    representation.setVisibility(true);\n                })\n            );\n        },\n    },\n    watch: {\n        \'$vuetify.theme.dark\': function() {\n            this.stage.viewer.setBackground(this.bgColor);\n        },\n        selection: function(newV, oldV) {\n            this.updateEntries(newV, oldV);\n        },\n    },\n    computed: {\n        bgColor() {\n            return this.$vuetify.theme.dark ? this.bgColorDark : this.bgColorLight;\n        },\n        ambientIntensity() {\n            this.$vuetify.theme.dark ? 0.4 : 0.2;\n        },\n    },\n}\n<\/script>\n\n<style scoped>\n.structure-panel {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n.structure-viewer {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        6237: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, "\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/StructureViewerToolbar.vue" ],
                names: [],
                mappings: ";AAsJA;IACA,oBAAA;IACA,mBAAA;IACA,kBAAA;IACA,uBAAA;IACA,WAAA;IACA,SAAA;IACA,UAAA;IACA,OAAA;AACA",
                sourcesContent: [ '<template>\n<div class="toolbar-panel">\n    <v-item-group class="v-btn-toggle" :light="isFullscreen">\n    <v-btn\n        v-if="!disablePDBButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickMakePDB"\n        title="Save PDB"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.SavePDB }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Save PDB</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableImageButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickMakeImage"\n        title="Save image"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.SavePNG }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Save image</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableQueryButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickCycleQuery"\n        title="Toggle between the entire query structure and aligned region"\n    >\n        <v-icon v-bind="toolbarIconProps" style=\'color: #1E88E5;\' v-if="showQuery === 0">{{ ($LOCAL) ? $MDI.CircleHalf : $MDI.CircleOneThird }}</v-icon>\n        <v-icon v-bind="toolbarIconProps" style=\'color: #1E88E5;\' v-else-if="!$LOCAL && showQuery === 1">{{ $MDI.CircleTwoThird }}</v-icon>\n        <v-icon v-bind="toolbarIconProps" style=\'color: #1E88E5;\' v-else>{{ $MDI.Circle }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Toggle full query</span>\n  </v-btn>\n    <v-btn\n        v-if="!disableTargetButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickToggleTarget"\n        title="Toggle between the entire target structure and aligned region"\n    >\n        <v-icon v-bind="toolbarIconProps" style=\'color: #FFC107;\' v-if="showTarget === 0">{{ ($LOCAL) ? $MDI.CircleHalf : $MDI.CircleOneThird }}</v-icon>\n        <v-icon v-bind="toolbarIconProps" style=\'color: #FFC107;\' v-else-if="!$LOCAL && showTarget === 1">{{ $MDI.CircleTwoThird }}</v-icon>\n        <v-icon v-bind="toolbarIconProps" style=\'color: #FFC107;\' v-else>{{ $MDI.Circle }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Toggle full target</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableArrowButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickToggleArrows"\n        title="Draw arrows between aligned residues"\n    >\n        <v-icon v-bind="toolbarIconProps" v-if="showArrows">{{ $MDI.ArrowRightCircle }}</v-icon>\n        <v-icon v-bind="toolbarIconProps" v-else>{{ $MDI.ArrowRightCircleOutline }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Toggle arrows</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableResetButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickResetView"\n        title="Reset the view to the original position and zoom level"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.Restore }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Reset view</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableSpinButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickSpin"\n        :disabled="isSpinning"\n        title="Toggle spinning structure"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.AxisZRotateCounterclockwise }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Toggle spin</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableFullscreenButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickFullscreen"\n        title="Enter fullscreen mode - press ESC to exit"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.Fullscreen }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Fullscreen</span>\n    </v-btn>\n    </v-item-group>\n</div>\n</template>\n\n<script>\nexport default {\n    props: {\n        showQuery: { type: Number, default: 0 },\n        showTarget: { type: Number, default: 0 },\n        showArrows: { type: Boolean, default: false },\n        isFullscreen: { type: Boolean, default: false },\n        isSpinning: { type: Boolean, default: true },\n        disablePDBButton: { type: Boolean, default: false },\n        disableSpinButton: { type: Boolean, default: false },\n        disableImageButton: { type: Boolean, default: false },\n        disableQueryButton: { type: Boolean, default: false },\n        disableTargetButton: { type: Boolean, default: false },\n        disableArrowButton: { type: Boolean, default: false },\n        disableResetButton: { type: Boolean, default: false },\n        disableFullscreenButton: { type: Boolean, default: false },\n    },\n    computed: {\n        toolbarIconProps: function() {\n            return (this.isFullscreen) ? {\n                \'right\': true\n            } : {\n                \n            }\n        },\n        toolbarButtonProps: function() {\n            return (this.isFullscreen) ? {\n                small: false,\n                style: \'margin-bottom: 15px;\',\n            } : {\n                small: true,\n                style: "width: 24px;",\n            }\n        },\n    },\n    methods: {\n        handleClickSpin() {\n            this.$emit("toggleSpin");\n        },\n        handleClickMakePDB() {\n            this.$emit("makePDB");\n        },\n        handleClickMakeImage() {\n            this.$emit("makeImage");\n        },\n        handleClickResetView() {\n            this.$emit("resetView");\n        },\n        handleClickFullscreen() {\n            this.$emit("toggleFullscreen");\n        },\n        handleClickCycleQuery() {\n            this.$emit("toggleQuery");\n        },\n        handleClickToggleTarget() {\n            this.$emit("toggleTarget");\n        },\n        handleClickToggleArrows() {\n            this.$emit("toggleArrows");\n        } \n    }\n}\n<\/script>\n\n<style>\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        5727: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = t(7537), i = t.n(r), a = t(3645), s = t.n(a)()(i());
            s.push([ e.id, "\ncanvas {\n    image-rendering: pixelated;\n    cursor: auto;\n}\ncanvas.hover {\n    cursor: pointer;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/Tree.vue" ],
                names: [],
                mappings: ";AAuRA;IACA,0BAAA;IACA,YAAA;AACA;AACA;IACA,eAAA;AACA",
                sourcesContent: [ '<template>\n<div style="padding: 10px; height: inherit; width: 100%; overflow-y: auto;" ref="parentDiv">\n    <canvas\n        id="tree"\n        :class="canvasClass"\n        @click="handleClick"\n        @mousemove="handleMouseOver"\n        @mouseleave="handleMouseLeave"\n    />\n</div>\n</template>\n\n<script>\nimport { tryFixName, debounce } from \'./Utilities\'; \n\nfunction sortTreeByLeafOrder(tree, leafOrder) {\n\n    function findDeepestLeafIndex(node) {\n        if (!node.branches || node.branches.length === 0) {\n            return leafOrder.indexOf(node.name);\n        }\n        return Math.min(...node.branches.map(findDeepestLeafIndex));\n    }\n\n    function sortNode(node) {\n        if (!node.branches || node.branches.length === 0) {\n            return; // Leaf node, no action needed\n        }\n\n        // Ensure each child is sorted\n        node.branches.forEach(sortNode);\n\n        // Compare the deepest leaf index of each child\n        let leftIndex = findDeepestLeafIndex(node.branches[0]);\n        let rightIndex = findDeepestLeafIndex(node.branches[1]);\n\n        // Swap children if necessary\n        if (leftIndex > rightIndex) {\n            [node.branches[0], node.branches[1]] = [node.branches[1], node.branches[0]];\n        }\n    }\n\n    // Start the sorting process from the root\n    sortNode(tree);\n    return tree;\n}\n\n// TODO sort by MSA order\n// highlight selected sequences\nfunction parseNewick(newick, order) {\n    let tokens = newick.split(/\\s*(;|\\(|\\)|,|:)\\s*/);\n    let stack = [];\n    let tree = {};\n    let current_node = tree;\n    let headers = [];\n    for (let token of tokens) {\n        switch (token) {\n            case \'(\': // new branch set\n                let branch = { height: 1 };\n                current_node.branches = [branch];\n                stack.push(current_node);\n                current_node = branch;\n                break;\n            case \',\': // another branch\n                branch = { height: 1 };\n                stack[stack.length - 1].branches.push(branch);\n                current_node = branch;\n                break;\n            case \')\': // end of branch set\n                current_node = stack.pop();\n                if (current_node.branches) {\n                    current_node.height = countLeaves(current_node);\n                }\n                break;\n            default: // leaf or branch name\n                if (token.length > 0) {\n                    current_node.name = tryFixName(token);\n                    headers.push(current_node.name);\n                }\n        }\n    }\n    // sortTree(tree);\n    tree = sortTreeByLeafOrder(tree, order)\n   \n    // printNode(tree)\n    return { tree, headers };\n}\n\nfunction printNode(node) {\n    console.log(node)\n    if (!node.branches) {\n        return;\n    }\n    for (let child of node.branches) {\n        printNode(child) \n    }\n}\n\nfunction countLeaves(node) {\n    if (!node.branches || node.branches.length === 0) {\n        return 1;\n    }\n    let leaves = 0;\n    node.branches.forEach(child => {\n        leaves += countLeaves(child);\n    });\n    return leaves;\n}\n\nfunction calculateTreeDepth(node, currentDepth=0) {\n    if (!node) return currentDepth;\n    if (!node.branches || node.branches.length === 0) return currentDepth;\n    let depth = currentDepth;\n    node.branches.forEach(child => {\n        depth = Math.max(depth, calculateTreeDepth(child, currentDepth + 1));\n    });\n    return depth;\n}\n   \nexport default {\n    data() {\n        return {\n            tree: {},\n            headers: [],\n            resizeObserver: null,\n            headerStartX: null,\n            isHovering: false\n        }\n    },\n    props: {\n        newick: { type: String },\n        selection: { type: Array },\n        reference: { type: Number },\n        order: { type: Array },\n        fontNormal: { type: String, default: "normal 12px sans-serif" },\n        fontSelected: { type: String, default: "normal 600 12px sans-serif" },\n        referenceColor: { type: String, default: "#1E88E5" },\n        selectionColor: { type: String, default: "#E6AC00" },\n        maxHeaderChars: { type: Number, default: 25 }\n    },\n    computed: {\n        strokeStyle() {\n            return this.$vuetify.theme.dark ? \'white\' : \'black\';\n        },\n        canvasClass() {\n            return this.isHovering ? "hover" : "";\n        }\n    },\n    watch: {\n        \'tree\': function() {\n            this.visualiseTree();\n        },\n        \'$vuetify.theme.dark\': function() {\n            this.visualiseTree();\n        },\n        \'selection\': function() {\n            this.visualiseTree();\n        },\n    },\n    methods: {\n        drawElbowConnector(ctx, startX, startY, endX, endY) {\n            ctx.beginPath();\n            ctx.moveTo(startX, startY);\n            ctx.lineTo(startX, endY); // Vertical line\n            ctx.lineTo(endX, endY);   // Horizontal line\n            ctx.strokeStyle = this.strokeStyle;\n            ctx.stroke();\n            ctx.closePath();\n        },\n        isSelection(node) {\n            if (!this.selection) return false;\n            return (this.selection.includes(node.name));\n        },\n        isReference(node) {\n            if (this.reference === undefined || this.reference === -1) return false;\n            return (node.name === this.order[this.reference]);\n        },\n        drawTree(ctx, node, startX, startY, length, headerHeight, depth=0, childIndex=0, fullWidth=100) {\n            const endX = (!node.branches ? fullWidth : startX + length);\n            const endY = startY + headerHeight * (\n                childIndex === 0\n                    ? -(node.branches ? node.branches[1].height : 0.5)\n                    : +(node.branches ? node.branches[0].height : 0.5)\n            );\n            this.drawElbowConnector(ctx, startX, startY, endX, endY);\n            if (node.branches) {\n                for (let i = 0; i < node.branches.length; i++) {\n                    this.drawTree(ctx, node.branches[i], endX, endY, length, headerHeight, depth + 1, i, fullWidth);\n                }\n            } else {\n                if (this.selection) {\n                    ctx.font = this.isSelection(node) ? this.fontSelected : this.fontNormal;\n                    ctx.fillStyle = this.isSelection(node)\n                        ? (this.isReference(node) ? this.referenceColor : this.selectionColor)\n                        : this.strokeStyle;\n                }\n                let name = (node.name.length > this.maxHeaderChars)\n                    ? `${node.name.substring(0, this.maxHeaderChars)}…`\n                    : node.name;\n                ctx.fillText(name, endX + 5, endY + 4);\n            }\n        },\n        clearTree() {\n            let canvas = document.getElementById(\'tree\');\n            let ctx = canvas.getContext(\'2d\');\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n        },\n        visualiseTree() {\n            let canvas = document.getElementById(\'tree\');\n            if (!canvas) {\n                return;\n            }\n            let ctx = canvas.getContext(\'2d\');\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            ctx.strokeStyle = this.strokeStyle;\n            ctx.font = this.fontSelected;  // Calculate width bolded\n            \n            // Calculate spacing for header substrings of length maxHeaderChars\n            // +extra to account for ellipsis\n            let headerWidth = 0;\n            let headerHeight = 0;\n            this.headers.forEach(header => {\n                let { width, fontBoundingBoxAscent } = ctx.measureText(header.substring(0, this.maxHeaderChars + 3));\n                headerWidth = Math.max(headerWidth, width);\n                headerHeight = Math.max(headerHeight, fontBoundingBoxAscent);\n            });\n            headerHeight *= 2\n            \n            canvas.style.width = \'100%\';\n            canvas.style.height = `${this.headers.length * headerHeight}px`;\n\n            let depth = calculateTreeDepth(this.tree);\n            let fullWidth = canvas.offsetWidth - headerWidth;\n            let length = fullWidth / (depth + 1);\n            \n            // Store x position where headers start being drawn\n            // Used when identifying header on click\n            this.headerStartX = fullWidth;\n\n            // Prevent blurriness on high DPI displays\n            const ratio = window.devicePixelRatio;\n            canvas.height = this.headers.length * headerHeight * ratio;\n            canvas.width = canvas.offsetWidth * ratio;\n            ctx.scale(ratio, ratio);\n\n            ctx.font = this.fontNormal;\n            this.drawTree(ctx, this.tree, -5, this.headers.length * headerHeight, length, headerHeight, 0, 0, fullWidth);           \n        },\n        handleClick(event) {\n            if (event.layerX > this.headerStartX) {\n                const canvas = event.target;\n                const divHeight = canvas.height / this.headers.length;\n                const index = Math.floor(event.offsetY * window.devicePixelRatio / divHeight);\n                const status = (this.selection.length === 0 || event.altKey) ? "newStructureReference" : "newStructureSelection";\n                this.$emit(status, index);\n            }\n        },\n        handleMouseOver(event) {\n            this.isHovering = (event.layerX > this.headerStartX);\n        },\n        handleMouseLeave() {\n            this.isHovering = false;\n        }\n    },\n    mounted() {\n        let { tree, headers } = parseNewick(this.newick, this.order)\n        this.tree = tree;\n        this.headers = headers;\n        this.resizeObserver = new ResizeObserver(debounce(this.visualiseTree, 200)).observe(this.$refs.parentDiv);\n    },\n    beforeDestroy() {\n        if (this.resizeObserver) {\n            this.resizeObserver.disconnect();\n        }\n    }\n}\n<\/script>\n\n<style>\ncanvas {\n    image-rendering: pixelated;\n    cursor: auto;\n}\ncanvas.hover {\n    cursor: pointer;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        9010: (e, n, t) => {
            var r = t(7537), i = t(3645), a = t(1667), s = t(7204), o = t(1464), l = i(r), c = a(s), u = a(o);
            l.push([ e.id, ".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12) !important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(255,255,255,.12) !important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(255,255,255,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child){border-left-width:0}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent !important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}@font-face{font-family:InconsolataClustal;src:url(" + c + "),url(" + u + ')}.hide{display:none}.db{border-left:5px solid #000}@media print,screen and (max-width: 599px){small.ticket{display:inline-block;line-height:.9}}.result-table a.anchor{display:block;position:relative;top:-125px;visibility:hidden}.result-table a:not([href]){color:#333}.result-table a:not([href]):not([href]):hover{text-decoration:none}.result-table td,.result-table th{padding:0 6px;text-align:left}.result-table .hit.active{background:#f9f9f9}.result-table .alignment-action{text-align:center;word-wrap:normal}.theme--dark .result-table a:not([href]){color:#eee}.theme--dark .result-table .hit.active{background:#333}@media print,screen and (min-width: 961px){.result-table{table-layout:fixed;border-collapse:collapse;width:100%}.result-table th.thin,.result-table td.thin{white-space:nowrap}.result-table .long{overflow:hidden;word-break:keep-all;text-overflow:ellipsis;white-space:nowrap}}@media print{.result-table .alignment-action{display:none}}@media screen and (max-width: 960px){.result-table{width:100%}.result-table col{width:auto !important}.result-table .long{height:100% !important;white-space:normal !important;min-height:48px}.result-table .hits{min-width:300px}.result-table tbody td a{min-width:100px}.result-table tbody td.graphical div.ruler{margin:10px 0}.result-table thead{display:none}.result-table tfoot th{border:0;display:inherit}.result-table tr{box-shadow:0 2px 3px rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.1);max-width:100%;position:relative;display:block;padding:.5em}.result-table tr td{border:0;display:inherit}.result-table tr td:last-child{border-bottom:0}.result-table tr:not(:last-child){margin-bottom:1rem}.result-table tr:not(.is-selected){background:inherit}.result-table tr:not(.is-selected):hover{background-color:inherit}.result-table tr.detail{margin-top:-1rem}.result-table tr:not(.detail):not(.is-empty):not(.table-footer) td{display:flex;border-bottom:1px solid #eee;flex-direction:row}.result-table tr:not(.detail):not(.is-empty):not(.table-footer) td:last-child{border-bottom:0}.result-table tr:not(.detail):not(.is-empty):not(.table-footer) td:before{content:attr(data-label);font-weight:600;margin-right:auto;padding-right:.5em;word-break:keep-all;flex:1;white-space:nowrap}.result-table tbody td a,.result-table tbody td span{flex:2;margin-left:auto;text-align:right;word-wrap:anywhere}}.alignment{position:absolute;left:4px;right:4px;z-index:999;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12) !important}.alignment .residues{font-family:InconsolataClustal,Inconsolata,Consolas,Menlo,Monaco,"Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New",monospace;white-space:pre}.theme--dark .alignment .residues{color:#fff}', "", {
                version: 3,
                sources: [ "webpack://./node_modules/vuetify/src/components/VBtnToggle/VBtnToggle.sass", "webpack://./node_modules/vuetify/src/styles/settings/_variables.scss", "webpack://./node_modules/vuetify/src/components/VBtnToggle/_variables.scss", "webpack://./node_modules/vuetify/src/styles/tools/_rtl.sass", "webpack://./frontend/ResultView.vue" ],
                names: [],
                mappings: "AAKE,qDACE,eAAA,CACA,qBAAA,CAEA,kEACE,uCAAA,CAEA,qFACE,4BAAA,CAEF,0EACE,UAAA,CAXN,oDACE,kBAAA,CACA,UAAA,CAEA,iEACE,6CAAA,CAEA,oFACE,iCAAA,CAEF,yEACE,UAAA,CAGR,cACE,iBCbmB,CDcnB,mBAAA,CACA,cAAA,CAEA,2BACE,eAAA,CACA,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,eAAA,CACA,UEvBqB,CFwBrB,cE1BqB,CAAA,8DF8BjB,8BAAA,CACA,iCAAA,CGnCN,8DHsCM,+BAAA,CACA,kCAAA,CGnCN,6DHuCM,+BAAA,CACA,kCAAA,CG5CN,6DH+CM,8BAAA,CACA,iCAAA,CAEJ,mCACE,aAAA,CACA,SAAA,CAEF,iCACE,YAAA,CAGA,oEACE,mBAAA,CAGF,mEACE,mBAAA,CAEN,2CACE,cE7DmB,CF8DnB,YAAA,CAGA,qEACE,WEpEkB,CFuEtB,uCACE,cAAA,CAGF,kCACE,aEvE2B,CFyE/B,qBACE,eAAA,CAEA,kCACE,uCAAA,CACA,wBAAA,CACA,UE9E0B,CF+E1B,cAAA,CAEJ,uBACE,kBEpF+B,CFsFjC,sBACE,sBAAA,CAEF,oBACE,eAAA,CIkRF,WACA,8BAAA,CACA,mFAAA,CAIA,MACI,YAAA,CAGJ,IACI,0BAAA,CAGJ,2CACI,aACI,oBAAA,CACA,cAAA,CAAA,CAKJ,uBACI,aAAA,CACA,iBAAA,CACA,UAAA,CACA,iBAAA,CAGJ,4BACI,UAAA,CACA,8CACI,oBAAA,CAIR,kCACI,aAAA,CACA,eAAA,CAGJ,0BACI,kBAAA,CAOJ,gCACI,iBAAA,CACA,gBAAA,CAOA,yCACI,UAAA,CAGJ,uCACI,eAAA,CASZ,2CACI,cACI,kBAAA,CACA,wBAAA,CACA,UAAA,CACA,4CACI,kBAAA,CAEJ,oBACI,eAAA,CACA,mBAAA,CACA,sBAAA,CACA,kBAAA,CAAA,CAKZ,aACI,gCACI,YAAA,CAAA,CAIR,qCACI,cACI,UAAA,CACA,kBACI,qBAAA,CAEJ,oBACI,sBAAA,CACA,6BAAA,CACA,eAAA,CAEJ,oBACI,eAAA,CAEJ,yBACI,eAAA,CAEJ,2CACI,aAAA,CAEJ,oBACI,YAAA,CAEJ,uBACI,QAAA,CACA,eAAA,CAEJ,iBACI,4DAAA,CACA,cAAA,CACA,iBAAA,CACA,aAAA,CACA,YAAA,CAEJ,oBACI,QAAA,CACA,eAAA,CAEJ,+BACI,eAAA,CAEJ,kCACI,kBAAA,CAEJ,mCACI,kBAAA,CAEJ,yCACI,wBAAA,CAEJ,wBACI,gBAAA,CAEJ,mEACI,YAAA,CACA,4BAAA,CACA,kBAAA,CAEA,8EACI,eAAA,CAGR,0EACI,wBAAA,CACA,eAAA,CACA,iBAAA,CACA,kBAAA,CACA,mBAAA,CACA,MAAA,CACA,kBAAA,CAGJ,qDACI,MAAA,CACA,gBAAA,CACA,gBAAA,CACA,kBAAA,CAAA,CAKZ,WACI,iBAAA,CACA,QAAA,CACA,SAAA,CACA,WAAA,CACA,6GAAA,CAEA,qBACI,uNAAA,CACA,eAAA,CAIA,kCACI,UAAA",
                sourcesContent: [ "// Imports\n@import './_variables.scss'\n\n// Theme\n+theme(v-btn-toggle) using ($material)\n  &:not(.v-btn-toggle--group)\n    background: map-get($material, 'cards')\n    color: map-deep-get($material, 'text', 'primary')\n\n    .v-btn.v-btn\n      border-color: map-get($material, 'dividers') !important\n\n      &:focus:not(:active)\n        border-color: map-deep-get($material, 'buttons', 'disabled')\n\n      .v-icon\n        color: map-deep-get($material, 'toggle-buttons', 'color')\n\n// Block\n.v-btn-toggle\n  border-radius: $btn-toggle-border-radius\n  display: inline-flex\n  max-width: 100%\n\n  > .v-btn.v-btn\n    border-radius: 0\n    border-style: solid\n    border-width: thin\n    box-shadow: none\n    box-shadow: none\n    opacity: $btn-toggle-btn-opacity\n    padding: $btn-toggle-btn-padding\n\n    &:first-child\n      +ltr()\n        border-top-left-radius: inherit\n        border-bottom-left-radius: inherit\n\n      +rtl()\n        border-top-right-radius: inherit\n        border-bottom-right-radius: inherit\n\n    &:last-child\n      +ltr()\n        border-top-right-radius: inherit\n        border-bottom-right-radius: inherit\n\n      +rtl()\n        border-top-left-radius: inherit\n        border-bottom-left-radius: inherit\n\n    &--active\n      color: inherit\n      opacity: 1\n\n    &:after\n      display: none\n\n    +ltr()\n      &:not(:first-child)\n        border-left-width: 0\n\n    +rtl()\n      &:not(:last-child)\n        border-left-width: 0\n\n  .v-btn.v-btn.v-size--default\n    min-width: $btn-toggle-btn-width\n    min-height: 0\n\n  &:not(.v-btn-toggle--dense)\n    .v-btn.v-btn.v-size--default\n      height: $btn-toggle-btn-height\n\n.v-btn-toggle--borderless\n  > .v-btn.v-btn\n    border-width: 0\n\n.v-btn-toggle--dense\n  > .v-btn.v-btn\n    padding: $btn-toggle-dense-btn-padding\n\n.v-btn-toggle--group\n  border-radius: 0\n\n  > .v-btn.v-btn\n    background-color: transparent !important\n    border-color: transparent\n    margin: $btn-toggle-group-btn-margin\n    min-width: auto\n\n.v-btn-toggle--rounded\n  border-radius: $btn-toggle-round-border-radius\n\n.v-btn-toggle--shaped\n  border-radius: $btn-toggle-shaped-border-radius $btn-toggle-border-radius\n\n.v-btn-toggle--tile\n  border-radius: 0\n", "@import '../tools/_functions.sass';\n\n$color-pack: true !default;\n\n$body-font-family: 'Roboto', sans-serif !default;\n$font-size-root: 16px !default;\n$line-height-root: 1.5 !default;\n$border-radius-root: 4px !default;\n\n$rounded: () !default;\n$rounded: map-deep-merge(\n  (\n    0: 0,\n    'sm': $border-radius-root / 2,\n    null: $border-radius-root,\n    'lg': $border-radius-root * 2,\n    'xl': $border-radius-root * 6,\n    'pill': 9999px,\n    'circle': 50%\n  ),\n  $rounded\n);\n\n$spacer: 4px !default;\n$spacers-steps: 16 !default; \n\n$spacers: () !default;\n@if (type-of($spacers) == list) {\n  @for $i from 0 through $spacers-steps {\n    $spacers: map-merge($spacers, ($i: $spacer * $i))\n  }\n}\n\n$negative-spacers: () !default;\n@if (type-of($negative-spacers) == list) {\n  @for $i from 1 through $spacers-steps {\n    $negative-spacers: map-merge($negative-spacers, (\"n\" + $i: -$spacer * $i))\n  }\n}\n\n$grid-breakpoints: () !default;\n$grid-breakpoints: map-deep-merge(\n  (\n    'xs': 0,\n    'sm': 600px,\n    'md': 960px,\n    'lg': 1280px - 16px,\n    'xl': 1920px - 16px\n  ),\n  $grid-breakpoints\n);\n\n$grid-gutter: $spacer * 6 !default;\n$form-grid-gutter: $spacer * 2 !default;\n$grid-columns: 12 !default;\n\n$container-padding-x: $grid-gutter / 2 !default;\n\n$grid-gutters: () !default;\n$grid-gutters: map-deep-merge(\n  (\n    'xs': $grid-gutter / 12,\n    'sm': $grid-gutter / 6,\n    'md': $grid-gutter / 3,\n    'lg': $grid-gutter * 2/3,\n    'xl': $grid-gutter\n  ),\n  $grid-gutters\n);\n\n$container-max-widths: () !default;\n$container-max-widths: map-deep-merge(\n  (\n    'md': map-get($grid-breakpoints, 'md') * 0.9375,\n    'lg': map-get($grid-breakpoints, 'lg') * 0.9375,\n    'xl': map-get($grid-breakpoints, 'xl') * 0.9375\n  ),\n  $container-max-widths\n);\n\n$display-breakpoints: () !default;\n$display-breakpoints: map-deep-merge(\n  (\n    'print-only': 'only print',\n    'screen-only': 'only screen',\n    'xs-only': 'only screen and (max-width: #{map-get($grid-breakpoints, 'sm') - 0.02})',\n    'sm-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'sm')}) and (max-width: #{map-get($grid-breakpoints, 'md') - 0.02})',\n    'sm-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'md') - 0.02})',\n    'sm-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'sm')})',\n    'md-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'md')}) and (max-width: #{map-get($grid-breakpoints, 'lg') - 0.02})',\n    'md-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'lg') - 0.02})',\n    'md-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'md')})',\n    'lg-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'lg')}) and (max-width: #{map-get($grid-breakpoints, 'xl') - 0.02})',\n    'lg-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'xl') - 0.02})',\n    'lg-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'lg')})',\n    'xl-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'xl')})'\n  ),\n  $display-breakpoints\n);\n\n$font-weights: () !default;\n$font-weights: map-deep-merge(\n  (\n    'thin': 100,\n    'light': 300,\n    'regular': 400,\n    'medium': 500,\n    'bold': 700,\n    'black': 900\n  ),\n  $font-weights\n);\n\n$heading-font-family: $body-font-family !default;\n\n$headings: () !default;\n$headings: map-deep-merge(\n  (\n    'h1': (\n      'size': 6rem,\n      'weight': 300,\n      'line-height': 6rem,\n      'letter-spacing': -.015625em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h2': (\n      'size': 3.75rem,\n      'weight': 300,\n      'line-height': 3.75rem,\n      'letter-spacing': -.0083333333em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h3': (\n      'size': 3rem,\n      'weight': 400,\n      'line-height': 3.125rem,\n      'letter-spacing': normal,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h4': (\n      'size': 2.125rem,\n      'weight': 400,\n      'line-height': 2.5rem,\n      'letter-spacing': .0073529412em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h5': (\n      'size': 1.5rem,\n      'weight': 400,\n      'line-height': 2rem,\n      'letter-spacing': normal,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h6': (\n      'size': 1.25rem,\n      'weight': 500,\n      'line-height': 2rem,\n      'letter-spacing': .0125em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'subtitle-1': (\n      'size': 1rem,\n      'weight': normal,\n      'line-height': 1.75rem,\n      'letter-spacing': .009375em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'subtitle-2': (\n      'size': .875rem,\n      'weight': 500,\n      'line-height': 1.375rem,\n      'letter-spacing': .0071428571em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'body-1': (\n      'size': 1rem,\n      'weight': 400,\n      'line-height': 1.5rem,\n      'letter-spacing': .03125em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'body-2': (\n      'size': .875rem,\n      'weight': 400,\n      'line-height': 1.25rem,\n      'letter-spacing': .0178571429em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'button': (\n      'size': .875rem,\n      'weight': 500,\n      'line-height': 2.25rem,\n      'letter-spacing': .0892857143em,\n      'font-family': $body-font-family,\n      'text-transform': uppercase\n    ),\n    'caption': (\n      'size': .75rem,\n      'weight': 400,\n      'line-height': 1.25rem,\n      'letter-spacing': .0333333333em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'overline': (\n      'size': .75rem,\n      'weight': 500,\n      'line-height': 2rem,\n      'letter-spacing': .1666666667em,\n      'font-family': $body-font-family,\n      'text-transform': uppercase\n    )\n  ),\n  $headings\n);\n\n$typography: () !default;\n@each $type, $values in $headings {\n  $typography: map-deep-merge(\n    $typography,\n    (#{$type}: map-values($values))\n  );\n}\n\n$transition: () !default;\n$transition: map-deep-merge(\n  (\n    'fast-out-slow-in': cubic-bezier(0.4, 0, 0.2, 1),\n    'linear-out-slow-in': cubic-bezier(0, 0, 0.2, 1),\n    'fast-out-linear-in': cubic-bezier(0.4, 0, 1, 1),\n    'ease-in-out': cubic-bezier(0.4, 0, 0.6, 1),\n    'fast-in-fast-out': cubic-bezier(0.25, 0.8, 0.25, 1),\n    'swing': cubic-bezier(0.25, 0.8, 0.5, 1)\n  ),\n  $transition\n);\n$primary-transition: 0.3s map-get($transition, 'swing') !default;\n$secondary-transition: 0.2s map-get($transition, 'ease-in-out') !default;\n\n// Ripples //;\n$ripple-animation-transition-in: transform 0.25s map-get($transition, 'fast-out-slow-in'), opacity 0.1s map-get($transition, 'fast-out-slow-in') !default;\n$ripple-animation-transition-out: opacity 0.3s map-get($transition, 'fast-out-slow-in') !default;\n$ripple-animation-visible-opacity: 0.25 !default;\n\n// Elements //;\n$bootable-transition: 0.2s map-get($transition, 'fast-out-slow-in') !default;\n$blockquote-font-size: 18px !default;\n$blockquote-font-weight: 300 !default;\n$code-kbd-border-radius: 3px !default;\n$code-kbd-font-size: 85% !default;\n$code-kbd-font-weight: normal !default;\n$code-padding: .2em .4em !default;\n$kbd-padding: .2em .4rem !default;\n$input-top-spacing: 16px !default;\n$text-field-active-label-height: 12px !default;\n", "@import '../../styles/styles.sass';\n\n$btn-toggle-border-radius: $border-radius-root !default;\n$btn-toggle-shaped-border-radius: 24px !default;\n$btn-toggle-btn-height: 48px !default;\n$btn-toggle-btn-padding: 0 12px !default;\n$btn-toggle-btn-width: 48px !default;\n$btn-toggle-btn-opacity: 0.8 !default;\n$btn-toggle-round-border-radius: 24px !default;\n$btn-toggle-dense-btn-padding: 0 8px !default;\n$btn-toggle-group-btn-margin: 4px !default;\n", "@mixin rtl()\n  .v-application--is-rtl &\n    @content\n\n@mixin ltr()\n  .v-application--is-ltr &\n    @content\n", '@import "_variables.scss";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@font-face {\nfont-family: InconsolataClustal;\nsrc: url(assets/InconsolataClustal2.woff2),\n     url(assets/InconsolataClustal2.woff);\n}\n\n.hide {\n    display: none;\n}\n\n.db {\n    border-left: 5px solid black;\n}\n\n@media print, screen and (max-width: 599px) {\n    small.ticket {\n        display: inline-block;\n        line-height: 0.9;\n    }\n}\n\n.result-table {\n    a.anchor {\n        display: block;\n        position: relative;\n        top: -125px;\n        visibility: hidden;\n    }\n\n    a:not([href]) {\n        color: #333;\n        &:not([href]):hover {\n            text-decoration: none;\n        }\n    }\n\n    td, th {\n        padding: 0 6px;\n        text-align: left;\n    }\n\n    .hit.active {\n        background: #f9f9f9;\n    }\n\n    // tbody:hover td[rowspan], tbody tr:hover {\n    //     background: #eee;\n    // }\n\n    .alignment-action {\n        text-align: center;\n        word-wrap: normal;\n    }\n}\n\n\n.theme--dark {\n    .result-table {\n        a:not([href])  {\n            color: #eee;\n        }\n\n        .hit.active {\n            background: #333;\n        }\n\n        // tbody:hover td[rowspan], tbody tr:hover {\n        //     background: #333;\n        // }\n    }\n}\n\n@media print, screen and (min-width: 961px) {\n    .result-table {\n        table-layout: fixed;\n        border-collapse: collapse;\n        width: 100%;\n        th.thin, td.thin {\n            white-space: nowrap;\n        }\n        .long {\n            overflow: hidden;\n            word-break: keep-all;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n        }\n    }\n}\n\n@media print {\n    .result-table .alignment-action {\n        display: none;\n    }\n}\n\n@media screen and (max-width: 960px) {\n    .result-table {\n        width: 100%;\n        col {\n            width: auto !important;\n        }\n        .long {\n            height: 100% !important;\n            white-space: normal !important;\n            min-height: 48px;\n        }\n        .hits {\n            min-width: 300px;\n        }\n        tbody td a {\n            min-width: 100px;\n        }\n        tbody td.graphical div.ruler {\n            margin: 10px 0;\n        }\n        thead {\n            display: none;\n        }\n        tfoot th {\n            border: 0;\n            display: inherit;\n        }\n        tr {\n            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);\n            max-width: 100%;\n            position: relative;\n            display: block;\n            padding: 0.5em;\n        }\n        tr td {\n            border: 0;\n            display: inherit;\n        }\n        tr td:last-child {\n            border-bottom: 0;\n        }\n        tr:not(:last-child) {\n            margin-bottom: 1rem;\n        }\n        tr:not(.is-selected) {\n            background: inherit;\n        }\n        tr:not(.is-selected):hover {\n            background-color: inherit;\n        }\n        tr.detail {\n            margin-top: -1rem;\n        }\n        tr:not(.detail):not(.is-empty):not(.table-footer) td {\n            display: flex;\n            border-bottom: 1px solid #eee;\n            flex-direction: row;\n\n            &:last-child {\n                border-bottom: 0;\n            }\n        }\n        tr:not(.detail):not(.is-empty):not(.table-footer) td:before {\n            content: attr(data-label);\n            font-weight: 600;\n            margin-right: auto;\n            padding-right: 0.5em;\n            word-break: keep-all;\n            flex: 1;\n            white-space: nowrap;\n        }\n\n        tbody td a, tbody td span {\n            flex: 2;\n            margin-left: auto;\n            text-align: right;\n            word-wrap: anywhere;\n        }\n    }\n}\n\n.alignment {\n    position:absolute;\n    left:4px;\n    right:4px;\n    z-index: 999;\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12) !important;\n\n    .residues {\n        font-family: InconsolataClustal, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n        white-space: pre;\n    }\n\n    .theme--dark & {\n        .residues {\n            color: #fff;\n        }\n    }\n}\n\n' ],
                sourceRoot: ""
            } ]), e.exports = l;
        },
        5385: (e, n, t) => {
            var r = t(7537), i = t(3645)(r);
            i.push([ e.id, ".theme--light.v-btn-toggle[data-v-2b7861b2]:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn[data-v-2b7861b2]{border-color:rgba(0,0,0,.12) !important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn[data-v-2b7861b2]:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon[data-v-2b7861b2]{color:#000}.theme--dark.v-btn-toggle[data-v-2b7861b2]:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn[data-v-2b7861b2]{border-color:rgba(255,255,255,.12) !important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn[data-v-2b7861b2]:focus:not(:active){border-color:rgba(255,255,255,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon[data-v-2b7861b2]{color:#fff}.v-btn-toggle[data-v-2b7861b2]{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]:last-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active[data-v-2b7861b2]{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]:not(:first-child){border-left-width:0}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn[data-v-2b7861b2]:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default[data-v-2b7861b2]{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default[data-v-2b7861b2]{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn[data-v-2b7861b2]{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn[data-v-2b7861b2]{padding:0 8px}.v-btn-toggle--group[data-v-2b7861b2]{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn[data-v-2b7861b2]{background-color:transparent !important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded[data-v-2b7861b2]{border-radius:24px}.v-btn-toggle--shaped[data-v-2b7861b2]{border-radius:24px 4px}.v-btn-toggle--tile[data-v-2b7861b2]{border-radius:0}.ruler[data-v-2b7861b2]{position:relative;width:100%;height:10px;border-top:1px solid #333}.tick-label[data-v-2b7861b2]{position:absolute;word-wrap:normal;font-size:9px;word-break:keep-all;line-height:1em;margin-top:7px;width:50px;margin-left:-25px;text-align:center;font-weight:bold}.tick-label-top[data-v-2b7861b2]{margin-top:-15px}.query[data-v-2b7861b2]{position:absolute;top:0;bottom:0;margin-top:-5px;--chevron-width: 5px;height:10px}.chevron-start[data-v-2b7861b2]{position:absolute;left:0;bottom:0;top:0;width:5px;clip-path:polygon(0 0, var(--chevron-width) 0, var(--chevron-width) 100%, 0 100%, var(--chevron-width) 50%)}.query.reversed .chevron-start[data-v-2b7861b2]{clip-path:polygon(var(--chevron-width) 0, 0 50%, var(--chevron-width) 100%)}.chevron-mid[data-v-2b7861b2]{position:absolute;left:5px;right:5px;bottom:0;top:0}.chevron-end[data-v-2b7861b2]{position:absolute;right:0;bottom:0;top:0;width:5px;clip-path:polygon(0 0, var(--chevron-width) 50%, 0 100%)}.query.reversed .chevron-end[data-v-2b7861b2]{clip-path:polygon(0 0, var(--chevron-width) 0, 0 50%, var(--chevron-width) 100%, 0 100%);clip-path:polygon()}.theme--dark .ruler[data-v-2b7861b2]{border-color:#aaa}", "", {
                version: 3,
                sources: [ "webpack://./node_modules/vuetify/src/components/VBtnToggle/VBtnToggle.sass", "webpack://./node_modules/vuetify/src/styles/settings/_variables.scss", "webpack://./node_modules/vuetify/src/components/VBtnToggle/_variables.scss", "webpack://./node_modules/vuetify/src/styles/tools/_rtl.sass", "webpack://./frontend/Ruler.vue" ],
                names: [],
                mappings: "AAKE,sEACE,eAAA,CACA,qBAAA,CAEA,mFACE,uCAAA,CAEA,sGACE,4BAAA,CAEF,2FACE,UAAA,CAXN,qEACE,kBAAA,CACA,UAAA,CAEA,kFACE,6CAAA,CAEA,qGACE,iCAAA,CAEF,0FACE,UAAA,CAGR,+BACE,iBCbmB,CDcnB,mBAAA,CACA,cAAA,CAEA,4CACE,eAAA,CACA,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,eAAA,CACA,UEvBqB,CFwBrB,cE1BqB,CAAA,+EF8BjB,8BAAA,CACA,iCAAA,CGnCN,+EHsCM,+BAAA,CACA,kCAAA,CGnCN,8EHuCM,+BAAA,CACA,kCAAA,CG5CN,8EH+CM,8BAAA,CACA,iCAAA,CAEJ,oDACE,aAAA,CACA,SAAA,CAEF,kDACE,YAAA,CAGA,qFACE,mBAAA,CAGF,oFACE,mBAAA,CAEN,4DACE,cE7DmB,CF8DnB,YAAA,CAGA,sFACE,WEpEkB,CFuEtB,wDACE,cAAA,CAGF,mDACE,aEvE2B,CFyE/B,sCACE,eAAA,CAEA,mDACE,uCAAA,CACA,wBAAA,CACA,UE9E0B,CF+E1B,cAAA,CAEJ,wCACE,kBEpF+B,CFsFjC,uCACE,sBAAA,CAEF,qCACE,eAAA,CI1CF,wBACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,yBAAA,CAGF,6BACE,iBAAA,CACA,gBAAA,CACA,aAAA,CACA,mBAAA,CACA,eAAA,CACA,cAAA,CACA,UAAA,CACA,iBAAA,CACA,iBAAA,CACA,gBAAA,CAGF,iCACE,gBAAA,CAGF,wBACE,iBAAA,CACA,KAAA,CACA,QAAA,CACA,eAAA,CACA,oBAAA,CACA,WAAA,CAGF,gCACE,iBAAA,CACA,MAAA,CACA,QAAA,CACA,KAAA,CACA,SAAA,CACA,2GAAA,CAGF,gDACE,2EAAA,CAGF,8BACE,iBAAA,CACA,QAAA,CACA,SAAA,CACA,QAAA,CACA,KAAA,CAGF,8BACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,KAAA,CACA,SAAA,CACA,wDAAA,CAEF,8CACE,wFAAA,CACA,mBAAA,CAIE,qCACE,iBAAA",
                sourcesContent: [ "// Imports\n@import './_variables.scss'\n\n// Theme\n+theme(v-btn-toggle) using ($material)\n  &:not(.v-btn-toggle--group)\n    background: map-get($material, 'cards')\n    color: map-deep-get($material, 'text', 'primary')\n\n    .v-btn.v-btn\n      border-color: map-get($material, 'dividers') !important\n\n      &:focus:not(:active)\n        border-color: map-deep-get($material, 'buttons', 'disabled')\n\n      .v-icon\n        color: map-deep-get($material, 'toggle-buttons', 'color')\n\n// Block\n.v-btn-toggle\n  border-radius: $btn-toggle-border-radius\n  display: inline-flex\n  max-width: 100%\n\n  > .v-btn.v-btn\n    border-radius: 0\n    border-style: solid\n    border-width: thin\n    box-shadow: none\n    box-shadow: none\n    opacity: $btn-toggle-btn-opacity\n    padding: $btn-toggle-btn-padding\n\n    &:first-child\n      +ltr()\n        border-top-left-radius: inherit\n        border-bottom-left-radius: inherit\n\n      +rtl()\n        border-top-right-radius: inherit\n        border-bottom-right-radius: inherit\n\n    &:last-child\n      +ltr()\n        border-top-right-radius: inherit\n        border-bottom-right-radius: inherit\n\n      +rtl()\n        border-top-left-radius: inherit\n        border-bottom-left-radius: inherit\n\n    &--active\n      color: inherit\n      opacity: 1\n\n    &:after\n      display: none\n\n    +ltr()\n      &:not(:first-child)\n        border-left-width: 0\n\n    +rtl()\n      &:not(:last-child)\n        border-left-width: 0\n\n  .v-btn.v-btn.v-size--default\n    min-width: $btn-toggle-btn-width\n    min-height: 0\n\n  &:not(.v-btn-toggle--dense)\n    .v-btn.v-btn.v-size--default\n      height: $btn-toggle-btn-height\n\n.v-btn-toggle--borderless\n  > .v-btn.v-btn\n    border-width: 0\n\n.v-btn-toggle--dense\n  > .v-btn.v-btn\n    padding: $btn-toggle-dense-btn-padding\n\n.v-btn-toggle--group\n  border-radius: 0\n\n  > .v-btn.v-btn\n    background-color: transparent !important\n    border-color: transparent\n    margin: $btn-toggle-group-btn-margin\n    min-width: auto\n\n.v-btn-toggle--rounded\n  border-radius: $btn-toggle-round-border-radius\n\n.v-btn-toggle--shaped\n  border-radius: $btn-toggle-shaped-border-radius $btn-toggle-border-radius\n\n.v-btn-toggle--tile\n  border-radius: 0\n", "@import '../tools/_functions.sass';\n\n$color-pack: true !default;\n\n$body-font-family: 'Roboto', sans-serif !default;\n$font-size-root: 16px !default;\n$line-height-root: 1.5 !default;\n$border-radius-root: 4px !default;\n\n$rounded: () !default;\n$rounded: map-deep-merge(\n  (\n    0: 0,\n    'sm': $border-radius-root / 2,\n    null: $border-radius-root,\n    'lg': $border-radius-root * 2,\n    'xl': $border-radius-root * 6,\n    'pill': 9999px,\n    'circle': 50%\n  ),\n  $rounded\n);\n\n$spacer: 4px !default;\n$spacers-steps: 16 !default; \n\n$spacers: () !default;\n@if (type-of($spacers) == list) {\n  @for $i from 0 through $spacers-steps {\n    $spacers: map-merge($spacers, ($i: $spacer * $i))\n  }\n}\n\n$negative-spacers: () !default;\n@if (type-of($negative-spacers) == list) {\n  @for $i from 1 through $spacers-steps {\n    $negative-spacers: map-merge($negative-spacers, (\"n\" + $i: -$spacer * $i))\n  }\n}\n\n$grid-breakpoints: () !default;\n$grid-breakpoints: map-deep-merge(\n  (\n    'xs': 0,\n    'sm': 600px,\n    'md': 960px,\n    'lg': 1280px - 16px,\n    'xl': 1920px - 16px\n  ),\n  $grid-breakpoints\n);\n\n$grid-gutter: $spacer * 6 !default;\n$form-grid-gutter: $spacer * 2 !default;\n$grid-columns: 12 !default;\n\n$container-padding-x: $grid-gutter / 2 !default;\n\n$grid-gutters: () !default;\n$grid-gutters: map-deep-merge(\n  (\n    'xs': $grid-gutter / 12,\n    'sm': $grid-gutter / 6,\n    'md': $grid-gutter / 3,\n    'lg': $grid-gutter * 2/3,\n    'xl': $grid-gutter\n  ),\n  $grid-gutters\n);\n\n$container-max-widths: () !default;\n$container-max-widths: map-deep-merge(\n  (\n    'md': map-get($grid-breakpoints, 'md') * 0.9375,\n    'lg': map-get($grid-breakpoints, 'lg') * 0.9375,\n    'xl': map-get($grid-breakpoints, 'xl') * 0.9375\n  ),\n  $container-max-widths\n);\n\n$display-breakpoints: () !default;\n$display-breakpoints: map-deep-merge(\n  (\n    'print-only': 'only print',\n    'screen-only': 'only screen',\n    'xs-only': 'only screen and (max-width: #{map-get($grid-breakpoints, 'sm') - 0.02})',\n    'sm-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'sm')}) and (max-width: #{map-get($grid-breakpoints, 'md') - 0.02})',\n    'sm-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'md') - 0.02})',\n    'sm-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'sm')})',\n    'md-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'md')}) and (max-width: #{map-get($grid-breakpoints, 'lg') - 0.02})',\n    'md-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'lg') - 0.02})',\n    'md-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'md')})',\n    'lg-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'lg')}) and (max-width: #{map-get($grid-breakpoints, 'xl') - 0.02})',\n    'lg-and-down': 'only screen and (max-width: #{map-get($grid-breakpoints, 'xl') - 0.02})',\n    'lg-and-up': 'only screen and (min-width: #{map-get($grid-breakpoints, 'lg')})',\n    'xl-only': 'only screen and (min-width: #{map-get($grid-breakpoints, 'xl')})'\n  ),\n  $display-breakpoints\n);\n\n$font-weights: () !default;\n$font-weights: map-deep-merge(\n  (\n    'thin': 100,\n    'light': 300,\n    'regular': 400,\n    'medium': 500,\n    'bold': 700,\n    'black': 900\n  ),\n  $font-weights\n);\n\n$heading-font-family: $body-font-family !default;\n\n$headings: () !default;\n$headings: map-deep-merge(\n  (\n    'h1': (\n      'size': 6rem,\n      'weight': 300,\n      'line-height': 6rem,\n      'letter-spacing': -.015625em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h2': (\n      'size': 3.75rem,\n      'weight': 300,\n      'line-height': 3.75rem,\n      'letter-spacing': -.0083333333em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h3': (\n      'size': 3rem,\n      'weight': 400,\n      'line-height': 3.125rem,\n      'letter-spacing': normal,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h4': (\n      'size': 2.125rem,\n      'weight': 400,\n      'line-height': 2.5rem,\n      'letter-spacing': .0073529412em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h5': (\n      'size': 1.5rem,\n      'weight': 400,\n      'line-height': 2rem,\n      'letter-spacing': normal,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'h6': (\n      'size': 1.25rem,\n      'weight': 500,\n      'line-height': 2rem,\n      'letter-spacing': .0125em,\n      'font-family': $heading-font-family,\n      'text-transform': false\n    ),\n    'subtitle-1': (\n      'size': 1rem,\n      'weight': normal,\n      'line-height': 1.75rem,\n      'letter-spacing': .009375em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'subtitle-2': (\n      'size': .875rem,\n      'weight': 500,\n      'line-height': 1.375rem,\n      'letter-spacing': .0071428571em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'body-1': (\n      'size': 1rem,\n      'weight': 400,\n      'line-height': 1.5rem,\n      'letter-spacing': .03125em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'body-2': (\n      'size': .875rem,\n      'weight': 400,\n      'line-height': 1.25rem,\n      'letter-spacing': .0178571429em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'button': (\n      'size': .875rem,\n      'weight': 500,\n      'line-height': 2.25rem,\n      'letter-spacing': .0892857143em,\n      'font-family': $body-font-family,\n      'text-transform': uppercase\n    ),\n    'caption': (\n      'size': .75rem,\n      'weight': 400,\n      'line-height': 1.25rem,\n      'letter-spacing': .0333333333em,\n      'font-family': $body-font-family,\n      'text-transform': false\n    ),\n    'overline': (\n      'size': .75rem,\n      'weight': 500,\n      'line-height': 2rem,\n      'letter-spacing': .1666666667em,\n      'font-family': $body-font-family,\n      'text-transform': uppercase\n    )\n  ),\n  $headings\n);\n\n$typography: () !default;\n@each $type, $values in $headings {\n  $typography: map-deep-merge(\n    $typography,\n    (#{$type}: map-values($values))\n  );\n}\n\n$transition: () !default;\n$transition: map-deep-merge(\n  (\n    'fast-out-slow-in': cubic-bezier(0.4, 0, 0.2, 1),\n    'linear-out-slow-in': cubic-bezier(0, 0, 0.2, 1),\n    'fast-out-linear-in': cubic-bezier(0.4, 0, 1, 1),\n    'ease-in-out': cubic-bezier(0.4, 0, 0.6, 1),\n    'fast-in-fast-out': cubic-bezier(0.25, 0.8, 0.25, 1),\n    'swing': cubic-bezier(0.25, 0.8, 0.5, 1)\n  ),\n  $transition\n);\n$primary-transition: 0.3s map-get($transition, 'swing') !default;\n$secondary-transition: 0.2s map-get($transition, 'ease-in-out') !default;\n\n// Ripples //;\n$ripple-animation-transition-in: transform 0.25s map-get($transition, 'fast-out-slow-in'), opacity 0.1s map-get($transition, 'fast-out-slow-in') !default;\n$ripple-animation-transition-out: opacity 0.3s map-get($transition, 'fast-out-slow-in') !default;\n$ripple-animation-visible-opacity: 0.25 !default;\n\n// Elements //;\n$bootable-transition: 0.2s map-get($transition, 'fast-out-slow-in') !default;\n$blockquote-font-size: 18px !default;\n$blockquote-font-weight: 300 !default;\n$code-kbd-border-radius: 3px !default;\n$code-kbd-font-size: 85% !default;\n$code-kbd-font-weight: normal !default;\n$code-padding: .2em .4em !default;\n$kbd-padding: .2em .4rem !default;\n$input-top-spacing: 16px !default;\n$text-field-active-label-height: 12px !default;\n", "@import '../../styles/styles.sass';\n\n$btn-toggle-border-radius: $border-radius-root !default;\n$btn-toggle-shaped-border-radius: 24px !default;\n$btn-toggle-btn-height: 48px !default;\n$btn-toggle-btn-padding: 0 12px !default;\n$btn-toggle-btn-width: 48px !default;\n$btn-toggle-btn-opacity: 0.8 !default;\n$btn-toggle-round-border-radius: 24px !default;\n$btn-toggle-dense-btn-padding: 0 8px !default;\n$btn-toggle-group-btn-margin: 4px !default;\n", "@mixin rtl()\n  .v-application--is-rtl &\n    @content\n\n@mixin ltr()\n  .v-application--is-ltr &\n    @content\n", '@import "_variables.scss";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.ruler {\n  position: relative;\n  width: 100%;\n  height: 10px;\n  border-top: 1px solid #333;\n}\n\n.tick-label {\n  position: absolute;\n  word-wrap: normal;\n  font-size: 9px;\n  word-break: keep-all;\n  line-height: 1em;\n  margin-top: 7px;\n  width: 50px;\n  margin-left: -25px;\n  text-align: center;\n  font-weight: bold;\n}\n\n.tick-label-top {\n  margin-top: -15px;\n}\n\n.query {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin-top: -5px;\n  --chevron-width: 5px;\n  height: 10px;\n}\n\n.chevron-start {\n  position: absolute;\n  left:0;\n  bottom:0;\n  top:0;\n  width:5px;\n  clip-path: polygon(0 0, var(--chevron-width) 0, var(--chevron-width) 100%, 0 100%, var(--chevron-width) 50%);\n}\n\n.query.reversed .chevron-start {\n  clip-path: polygon(var(--chevron-width) 0, 0 50%, var(--chevron-width) 100%);\n}\n\n.chevron-mid {\n  position: absolute;\n  left:5px;\n  right:5px;\n  bottom:0;\n  top:0;\n}\n\n.chevron-end {\n  position: absolute;\n  right:0;\n  bottom:0;\n  top:0;\n  width:5px;\n  clip-path: polygon(0 0, var(--chevron-width) 50%, 0 100%);\n}\n.query.reversed .chevron-end {\n  clip-path: polygon(0 0, var(--chevron-width) 0, 0 50%, var(--chevron-width) 100%, 0 100%);\n  clip-path: polygon()\n}\n\n.theme--dark {\n    .ruler {\n      border-color: #aaa;\n    }\n}\n' ],
                sourceRoot: ""
            } ]), e.exports = i;
        },
        654: (e, n, t) => {
            var r = t(9837);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("4fa110d4", r, !1, {});
        },
        603: (e, n, t) => {
            var r = t(5426);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("59383ee7", r, !1, {});
        },
        5685: (e, n, t) => {
            var r = t(7562);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("a7333c86", r, !1, {});
        },
        2237: (e, n, t) => {
            var r = t(5229);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("35bdd9d0", r, !1, {});
        },
        4869: (e, n, t) => {
            var r = t(5479);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("d70395c2", r, !1, {});
        },
        55: (e, n, t) => {
            var r = t(7212);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("08f57856", r, !1, {});
        },
        7316: (e, n, t) => {
            var r = t(6791);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("e7ce63d2", r, !1, {});
        },
        1574: (e, n, t) => {
            var r = t(1229);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("4c075a21", r, !1, {});
        },
        9146: (e, n, t) => {
            var r = t(4569);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("5d44b975", r, !1, {});
        },
        5367: (e, n, t) => {
            var r = t(6686);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("2ec3240b", r, !1, {});
        },
        2556: (e, n, t) => {
            var r = t(864);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("0a2d9f56", r, !1, {});
        },
        8973: (e, n, t) => {
            var r = t(8742);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("77ba9bdc", r, !1, {});
        },
        5877: (e, n, t) => {
            var r = t(405);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("a3a33312", r, !1, {});
        },
        9121: (e, n, t) => {
            var r = t(7866);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("802ef828", r, !1, {});
        },
        6226: (e, n, t) => {
            var r = t(6732);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("9e5866ec", r, !1, {});
        },
        4678: (e, n, t) => {
            var r = t(8786);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("0ac3d6be", r, !1, {});
        },
        7539: (e, n, t) => {
            var r = t(6237);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("4acebb77", r, !1, {});
        },
        6406: (e, n, t) => {
            var r = t(5727);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("48dc9db7", r, !1, {});
        },
        5264: (e, n, t) => {
            var r = t(9010);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("122feea2", r, !1, {});
        },
        5941: (e, n, t) => {
            var r = t(5385);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, t(7913).Z)("6d831950", r, !1, {});
        },
        1464: e => {
            "use strict";
            e.exports = "data:font/woff;base64,d09GRk9UVE8AACbwAAwAAAAANCgAAQKPAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAABJAAAIf0AAC0+9xNOmUNPTFIAACWQAAAA8QAAAdAKCgffQ1BBTAAAJoQAAABRAAAAYkH2bJpHREVGAAAm2AAAABYAAAAWABEAOE9TLzIAACPYAAAAUwAAAGBcfGcQY21hcAAAJTQAAABDAAAAVAC8AUloZWFkAAAjJAAAADYAAAA2BTCGH2hoZWEAACO4AAAAHwAAACQG8AGPaG10eAAAI1wAAABbAAAAcgpSBnVtYXhwAAABHAAAAAYAAAAGADhQAG5hbWUAACQsAAABBwAAAiIwXEM3cG9zdAAAJXgAAAAWAAAAIP+GADMAAFAAADgAAHjaYmRgYWJgZGTk98xLzs8rzs9JLEnUTakCCWn8kGb4IcP4Q5bphyzzD3GWHh7GKb+Tfrz6Fc36fQL/BFkGBq0JQt8XCDIwMzJyLN4IYGIOMBgGgiiAXuUfoDaboihACCWU9ATbZOwOMbN2Jq3cvlXQA7wXYx9iH4dGyWnF88CcasFELybBbiwZhQ36FrjqZkiyYlTxUVumgEHr0TgXxznGy78OmGmjZN92l5UavBAetwn3SvIrMPFCYnRCca/XrrOlcXULxp/u3AMgquP7+x4WdvcKuiKyVgQVxIaKBcUSY+89aKzEFhtEiTHFXmKLF2tsMWqMBbsiMfYO1qAoWJCiBg02YrBxF3dl3s/4f9/36b0/v19yMnf23plTvud7zgzRdVm+Xs8O3er+WyYKN/4vigthE6JqedGmvAg3MWMS7sJL2EUVtz2mRPc4973u5zwKzBPNUyxdLZnWQGtX6yYtq9gFr6HFm9kCbbVKDin5bckt3sLb6t26VGbpAF8P+4Iyn5b9pIJecVvFw37l/E76nfdv4O8MOFg5tEqDKrmBKUEvqxUFL6geVH12jds1vW024xfHK3tlT9tjR3V7S0dYutUWt8hexfOta5i9qqftauEo+/tRxlCrFPX9aujI31tJIZY/Z/TonhT2hklSdE94JUUVj9lS1DrUTooOCZIXu4x1ISNKH5by8vnhUnQ920HK/RWrSlGxbboUrS4fk6LC+Ay+adxBipZvW/J2+3BvZKs/O0mZcbS/FB9lh0p5ovo+KSrNmitlalojKUpvzWJ04BlazBJSpv2UpWvOUh3shsUihf+tOSxQWZ6SUj70ZVTWU8rXxY5IUe9BGynzdoZLUT7yiJR3ypfTpbw9KVzJyy4pH7dm0/S2Pqz9A495n3wj5b3ElVK+3PBKyuwok+S5sZT3M3LYz2zp6GF4smHQ5DJsGJjKO7LrBZ6L8fEL5ZmwNUukzF2G5X5RbJ2sXpR/XPpKZxz5rZSPFsRLmYLn5LWKW6V8Ove6lA9u7GLD1yFS/jlqDCtOKs7cHxfY0N9ik25dNzYujLZLufT3WVIO2XJSyr23F8qiew5vWfTUq4YUPzf2lzKu2m0pvnnxaYAU/SrGoV2vKX5ShDiLSVGnRz8CYx6q9UwwY85vh6S8lDNcygsbYrDMzyblxX4LdU3KVYkRUm5evkuK8ekDpEis0lGK0ymDpRh4s6kUUSPWSjHK+y92CP8+nR0a7V3BcgvyiFNQOSmv7gYFpm7JUrqsIVK4xedK+d4tGcvfrc/TGVduh3FzejCqFKOe/Rshi1Rg5ZtmUhYeXiaFOWIK37ddqaUfQNe7dbyl+NTzjJQ7h8RL0eRtKyk3lf5G12xpCqGjjXogtOlIgirq5e5g95SxUjTIHQXGapeUYvQcGxFpDGjCpwZJMdUUwYsbZAuk7r4aCFx6I8XknQBjS2CEFC2iY4nVohlSVK3ai3hpDaTwWPZIyjN94nWtXgd7jgVnTk/QkXtiMWBEOh7ePxjYFmB623J9cOwI8FdmDAD+qWMtzFvbazjymyFfgrB+C6WMv3IWx/d8gG2lFepO1CDqk4pA9I4CVnSamFsXqWutLba7haPtgZ62fwpHY2m2YRibbzg3G98aOalWhYrWi6TprnkowPjl3S9SdorLlzIpKEsWJTY6JYtenESPn9xIlW13pkgxvSiMsLX506KTtyGaFOVedJainfdW3OVfTzP2OYe3N8o6W1nJkWmo9LAy4Lyxao6U+fc2SnnznZ/Oc2cXMpmoC59vvcmb44HYf+adlIlHy7DagedSGvMJw+fde7NPt7Y+yLYtQKjmQ/RaJZEffi3fEZLqe6So1qoNpFG+Pz9EhkEkfZOIQOp4neeYqsiGXcmfzHIRuNNO2FM2xKC2+5J+UjrCzqhQ4/eCNHK8mHcuEKs3WEs6byamR1YC9ht5uHp6jBR1G06ScrvXfCBz8wOp3TfysPbv7MLuVjYp7rYQ7fp5QCuDdugMzz9Cuh1jbflDOKN9vowqJzGaNE1r6Lzs3G/stagPh3WSwtrqe36o3Y7nYpVC1YfZZLdcnscIzaSss5zR1izNZniweZCnzfic/3Y0Alz12V2mdbvKxu9Dceo3l6X8y78R7n/7MTyktn0YfhAe2NEAZjmRARmBJDy9bhMytbuNwNWsDWJmnsYrTfn9XVaUFJZNc8Fshh+6uQhjYWXBXO88rW9nM5SbtJ6d0rbAsBmRrO8zRoqP0xX3thv0BNlytQdx2DAC8Q2jlhuJXMUdEwnFOewU3+HYxqnxKvE7N9EcoYZ7itV24QM6/zROW5MuG0tdJrOuskNxhkfIDHIzFBzJtDma84ijnrHNSP5CN2Pe8B4Y8XwysRcv83gOGkjm23w15znnY91IMus8upNcIqod1vmGs1pxjTlVQkz77zM3oxGPVYsj+ryBRA5dxuLUfM2W84EXHO1uOPMd71SEPb/z5hvdxDcpfoixLjwycxpxUd+4t7mOWHmCuaNZrHN6OhhosUezJX1Y544jwWoEO3/bpRuhxmHddShd1wvH9NCdXZwFzo7GW7MtpcxdR7LFSHVd/YOfOivNNRtauqWrbf/shLjwBC07hTLXdSGP3yDc3SOYWwH9Sp8Q9j51RAtz7bE4Ex27W+hmmzSFmIpLt9GzLXaVQfoFKZ010XtAAvBK33iEHK4eLeX1OHJtsArq3icFUtSOmCblgTETFZOv7I1bRz+vJeXunG6y6FGzzYjOtaRYVfiWWrHaE4qf0z2AhfJz2eITvz18/10KNLrghRRDQ+tKETzoCT9vSsL3K6exd+oEHbiMOahJ6kGkdAuevcgONJrl6ODp1DfQ2MJJICcuWMo9PTCv3KgnwLWHL9aqcncsM4iYn3vog7x+eAnIbV9ZykP92kuZMwbqO5tUjmKyhsJ99NhkeLQkKfhoURyJH9VOWbTvEoqvH1iJlsL7Lyn++hnuudMKtI+cD923UTzSNTsmANb8lyxPM6rqVugJ5sK0TvjHrVICowx/CKWriU+SslD3JTkQqHDUPljlf+cGIUp6wM9ZKQ/gpziMOP7HBV4KOEPeARJRttcjIB12jhUVum/EbKVS+31sN/xUK1JLdTSVLKMIbdsIRl+kUttb4N46pmXU+6hLLPDZKZbyHqooVbRT8m1LftqeD9E6R0JhELR8drsDDqg5ha+ftWQ0uQwr9hlP2i48yH7BqjMImZ4gTcssQcShwc0ilcHf3cadxciXqldQd9eRmzQ+VXvg95HrieMotDp6BQVlYtd27OGtiHXpIxyfFhfN5Dg22h2AchvHHKSByPkBPws3KW6ayJLh17fij6qMehzuhhPl/GBZdCszSEG03ST0dDZuB0xKEf+7o4Kg/+w3RPo59g45I4Do5Cy87wyCly9BlXLltmHI0bHYu2cQ0Ch6uL4GUk5eJ8WUCyno8GsPKcaqMv3PfFojaR4q5SmPPlKUupZO99RgFzy0IQHWzCF6IS/64cGECTji226k1icNAXVkY0ldLNAWZ5ipJHVWkN9jgNaDLREoO/sH+jS78sXhCX7Itxom15syn5e2kyc1SrpL0foynvRyPqIkAUxRO2q7FNV/g3l65rNT8MBNJEizSNUkbMXyyQNUggwvrtluf8BgNhisbDUaOdNydWdz47aZVmbmKcL/mJRvvpVi2OdDL/HZqjnITrOSwJxKl7ZTwdzJRS1B51kPgNJmCd80D2Kk2NCteDKA6dsKDJQFc2X/J2KussXmWF3obScnK0Clzcg5eXgIxBbw5CDM03Uuy05f54+Mm5BLy3byIMMNrTshb+VCJt7zoNjLqj63aNgQzMUmk4UPzhNMRWljmkAKjz3KUWSWj6HcJccSj4EPwHNvQl0iHGRndJ7MWvcPeSDP1kmjWasxkfS8s0DKNXVuKpaIP/lasczb2YQnsTzvHk4hljk3pHQNFQRKhVF0w1umF76MvHOZu5jPyAKVuj09xogTgbAMbUNB/fqcajPua4PCCV34xX0sXGsveZGdAIgSDxHycrdZav+JcchWT8HK10ndGQ689y2y2qUCUFUe1DeIViX7mg8VeGkFNK+fR/yDoO11HdjVd7aFcP9TEY23APbEH1k4ULWKr+JG8cXNZiq2c8shm+ANUe9kKCtOYdRn+15dAy5tUlW3dIjQ/amiX7HgEl1EU/LdXeWic4FKHnWQeb9qFuZV59F5MoZRc8JeqKjdXe32/pAH1i7En7LZA812lLpezdOWApJdX+hW1fe9TcRFY44TroxfaLCPRzEaHY573fn893M/4Bm/miT/68pS9G1QR5WVia+QvSvG4Y0GO6WoiUKia/xglOyTgBWDTay4JpaRR7ZqK67d1RxjW7qi1HYZBwCBbLqOzF1LX/3iozeM2hDIvxT9XvrjS6D06yLQ8SNzF7erXvvCiRfIyzO+JSWqHCa9i03GafMnwSD03yIQz0qpgl/VtQcZmBmnOTpbGZnbgTrR9SKueIaPPDrgeIsq0e4lVSPTfRli+S7ECfWd5VkrpMm8SQK7bljw/iCjsNmMbrfTbAl4zlj0PjpeN+YXRjXXnW1dp5zdHafNtp0409DeR+3RDR/Hl4a368vdumEpjOqod3bNcBZzdJ6oOzVXx48c08w2R1+WIW6Eq+hvjpNydPpN6eYzYWMj9j4b85cs2qA622ZLK8qipcmxqmtdRz/l5l8dNG+iCS/6M92b0i4bdjkj3Sba50hxiDO829BnM8y2Q6wd7GnLRp82xiurS7j+0vs4Juq6IsqXK4mpKfAKMFkG6RRkNcZ/marGPdWNQkdubJLZZlgdo+0H+5nhxEEEt46qLs3X3iRN4VYR+tSlatGDNsgA+zlCppBne1mD/FbdT6ktPlAKVUr5j0zPf6Tz/DJP+26KVcoEs3rcsxA6FjcA8IltD/nu4xnMzfoejPfCGRl+a0nGyud58XzvMciEfl+QCTN7Qki3LtPbrKukQ9/mzci2nEhF2V0o1/QcgazXN1HrnWFkqbjX5gAni76sAYZdSrlljxhRM2V2mx68/tcjdk99BZqAgdx7axYbHVndAXn85S7I0xpCBujtSI1nZzTjtnOCfYxC7qMfHRK9/FlmpwtO73wChb3m0eYmwmHPl2DEVcUvtxwE8NguVYKO3ghG3nZB2SF9lNL1eu9CBn/lINFkczRtDn+2iTwqRUnVWIb6NqMwTYmkID+YA7ctLADoph4ccjIK19jfrzlr3XHDDM6TyqPcADir2Zj6cNaKJArUvM2KNaIV+cYohwxuTm6c8aKwHsmnI/ux5nek74u1xKbAIwAHrGym2DbrBZb4Ie6N98W4G8GacVK50KLw5taa5DepiJljqIQefWKYe1kdgXeEpd8C5mAsWWSpxmPBJfafXGqXLEobGGnnRuk0HDSWIiVzVJVrX6431xx/JqFAp4PMjf0cG8JvokrmHyZUibfAJDYOI/LVzia0f89/wQGDa8Ipygti+FJAVx9McAq5rzz54AJ63PHCGz6oWlx7C51Wpm8sfbQsvx6vijfLZzIH+YpGo3bgQ8d+Rw874eiFLR9ViCTo2RgUlHeNjureO7wnR0Zf5Zg330tKfaCflMOqQOFDh9OHTCgOqS6qSGBWHY8LoJN8nK8TpJvhbLDKB6KjtovGUY21QYlmHBpG8O58CaCT17HMkx+aSHnlZZ7aYS1hlgciv+E2J4ZyMfXgSSm+2zqQhkNZ2VXd6AzrsIMdBnKWUr07HHkmRx1mcKws/MOEy6O7SGnY+vGoGvC3lTjJFQtJ5rH0JIzs5uiPkbmLbSg0NhwOVe1M0F4ahkN3s5QKP5fzljR5/thPBZZh++gGWqzcDHZCeuGJ1ce5DYqYhgptE0JUvi9Bp2qfwPBV1Bm/+bi32hCVDq+jKVjiXHHiFX0arRSRv65eSruHz5zqas87bLOUskE8o6SmjN75MbJU0xYVtjfzCLsKi2cL1pgfhHl8LjyqeDCn/G1Sd1LuB8Yw9/lQ4HcW8+QK+itrzjKtATuMgZCK0j1ngLO641Sb1G7EbTL90yUU3lfxuHh0NEstfcDcsEWs168DkPvqEHonqdDJ9DJMvF+8jFl1M2WMU3TWfhh5vH4cHp9VSMEJYy6z7GdUpcsu5bgkrlVkXH4VtlzMAX9fJEauhnxFRGYgRZBQixZPDgbQwIdxoDP5t99EIGYrkteL0VJtU9cuLc92krLnhli4bNRlKX/9dbwUSy9PDiD2SzKUGb92APFxo4H5JyzfeEaYNuQI7sqe8Y4SPAi2uVb2GlraR9MlDQlVHFNnBfKnbxfTw3pFgYLf6JE3fr9Tk27f/nbIghsb49WgSL4v6r1nL3G4ioP9SRD5+A0ZusT/OykpOlhVgmDubOyhbB3aE2r0PzbUXt0Te9aaN0v3Yl85sOf3jUfY7hjHbXk//xEOEjR6ibcE/Jj9mubv/gn28XnF6GG6akdNy7RPndbOhtXVLtPRzmh91dn6oFVxYH8yXc44AjOre5XSFwluoGIZ+62WWOKvfoCcROnZnUiDi/t0kuxdJLLW2CmEqhzdZpm2q+GtT0Ix8Yg3dn12Rp27o6GNmy5g9TnaOUt4MwIr0lHyAThq1IKoPzvDF6omiMF7tAPpeDfD34HDuSaRF6azXAV1xDk5dgqcwS3sm6bSLbptBEgT6tDUqnotCKVFFKJ6PI/9VyrebfVpLBN1+xGVO7FSnn50D3F3HY8Xgv+/uR0TEXHPeEzZoL4O4TO/cYR+8vb9lPFOb3Dv6vUUrC3zQMoeDsFy7dLBAaoDsoOySqc3QCMBZEzonBuw/gQidPcaO97fGEaP36oExBO+Ugcrrr+RT9+8hBc8rlNafSqTvBPr0G1Fr4AQ6v5N2I7NBvpHJ7OEzwDVyP/zWmMfdZUQdrsU5YFyLI4uQK/fupxBT3XQHsiNuejoZvFXJJx2hyg8N4GaNsGseV4dv28NJFdO7GEUk04SKYpyLBlC4piWqZSbEol8HPYx3l8aI+WbQwsYVTCBZiiba5MxzDV4BZdPDWQH7/0bkH4cFEXl9X8TlIfqbqUhgfJQx3w71wPSYR7KZhfIBefzi4zevFexGHP7CqXucT6N6i/N4dNDVwJ0Fikzn66HbKSM5OGKCRVYM4bHijk92O1EDX54UySFpi53Kn/oxzxbRCvZBB/KyoJRmXaAu80ybXaKmVCQysKjQQjxbFREL1WV1+4UO4b/d3sQlMF7WGb+ExIBTYUPmsqUI7dVbu3Ht+8LTx8EUb7ewwHk6O0YWjaF0dFYYD9nKbvMLCQLvHMZLWahWh+6+PwwEpfaIZ3RVamvZa7ggZ/OUjV9w4lyxca498kBi4q9LQ1aTq1LUnarR7C3wcR5ww4Q7LBZuFstm9Y8jv3OdQc0y3JVXNIcyNTX8IDbiNVY4oyjKXnaRAMbYaCvlDsBL/jllKqyqofxmdkGGVwCSAQuyMeLyW9QLsqEKw821Gy5ZR4Y5y06P6rLLI/OdOzlc4MIkYpYpU+vY3rdtQTgkTpH3SdKdVVpa/Juk87k8mAlQ3HN24bfQAHuEZjUcR9OUtmTnUjBFS1eoO3yPHWi+Hmk5kzLNm5xnIGG+5I78tgmSENdtv5dey7eW5wKWLeRBc2XboTYFUSr3D8Fb+21qd6v5jHkqTP0btflGZykyn6SnKYZF9WK7i/UfWb7AEaWkYh/NmBQ9WjisaMAca0/j6qMuy+nO6GknUG61Vsvoeo1jEJiGW18x6hSqFbbYjPKO+LsNTzJB5FkTLHX5PI4lJlazNz5MAOn3diFvjUOItquBErh6YhmD/DJ7Q7MqdNllRANUR/QModQ8K2cVA5xeRqvBD9h7kgvlrpZFMDl6Wqax/vGEOuNZCPaudmMhiGjVFwsF3D6jCP+2PHbJF3JI6o0E2WeGTmnac61xg3jK2MUN7xA56DqGp+lgRLxKp9n+hNhLuGtOTc4F+mOgf8NN7yGQMvanrazZe4YbxVyyv29AqepSJb1fwcWRRIoy4wDD9VrgyuVyWW3A4oSSht7Q5WwPpmPkfZGU2ESddjTHL1hufxcwnJrDhjKfMKOI2Gp3K/PKTtqmzSXx12OSjpLky5Y7QCjB4LZRMc1lY1uLJKI7rZLE4HsNn/mXipXVxuqkxOVLyC9P+1CZlgAt6bQlRdNDhc7I9hO/WHvvbp8+/NgkUqxF2s1V/EMRwm1Xe1rGViXyVchhE0+WRGPTSq3n6tU9/81mZC3pnp7fUEUc8Jv8v3Vpv2R14/2Z8HUEN6cwHY36vC7oS6vaqsTToZd3S/1nct7Syvy9s0fHcg7485yEivwQIedx3jJuVWLPd2SG+lH/zek6ZPGVq7WA/zypJule6qdUnqRDjB2C33rZ88vSLkgHhUnl/Vkrh+g1qvS9Q2O4UwU+aa7FBP3UXGXfEvXOy+KkE8fRI7HXOawNPIquNk/M49G2aaUSkmOZe1ukXQmvYu50ETdk42nd5dTzi6S8jd1+X1i5EIOrcdyuG/dvIS5E7QJPZuz2Bz1t4jZ6i9lXdUfUTotoND2KlgQYMtwbLPHvh/1QNeNn83qhugy9WT7r/igZRhFvgGJ0qr7ig9HuyZccn35BBwOPMKp+Jw/fe2xtEMcWPotpNRNhc/X3F2njnYlK+CoM7+fg9uz9iC0Akp7YISWZZVi4U9onfQ03B7iaXP05Kyg2KkxNSKQQjto4j6OOTroiTVvxitd6Fg2c3Mru5Wju474shNeOfIrnXhbOGfSowGkQ9txZJL46B4ZWu0Qs1U+XCG+TNecu+4VjmphpVV/9YpiqalyV6+tulhr8RqY56rolq1XgZbIt4jSquKRc/4RKTgb6N/bo+n8UtQImR5djDRSl0U56uBoDB4HSmoB6Of7QcmZx95ARR1eM44G0X5c7YWv5MFpUXi/Gap0CFvCoe1H8LmoPBnXw0vhV11udLSMDrAZpXC/K+6+sVqBMoDjv3BTF6yBQfcQLk6f4Y/W0XBV+IzIl+jFMRu4ixKKfKuN91U0umgG0s9NQ51+mG/LygPN7kDf8gbkGpVUd5rcCYJQNK2pttCYcURLyDRjZALNf1XekCltfXFG/FAio5t0ELRrBvLArPNY/yfYyo5oik29crUlL7lC+tHxmZ1vVE8Y9hikHz0cS7IqNB5IqMt380r0Qu6fiNuPd01iGP+iH3LL8nGEr8VuNu79DJ2PPyFx17/AhvOE9J/rucRtUjMpX+YD9uolbNhx5Bb5uSdW3W7AAsWCcfCjgOaslXfvKPLa2Eok5/xgFLxVDgU/a6Z8v61NCXV/8+B7ji/7+rFyKwE5qIxxKQ96TKOZE3PL45e2pRk1XsDc5h6MfOLVtaEnIy7xhUXdJr3rMhNE7G73L3e1LYMGAuQmx0mdJ/UBwaX6jMYeJwDL9iQjuy4lan2HvmPY84k3MmgrauX/swnk/cXZ7izQEYE1m+DmOqlAdeUUzrvwifB60wxr5gUQhKffQZpn2d9XXRMVJHeBEfd0UWR/ORxZ6ycc0VAVskrxVUnSjEq6xsbfdtOZBgDyRk908K2Wg3qyhbKRXsp5mY3kRzHAONybUSFaOf9OZfQmnKdS6gpSg5mKyoM1kxeUJb+PoCJ+V9jQPttZ1emjL+poeKv661Cn023AV7pGrGaUu0Pdypf/UBfmQBXiizRy7eoMKkhKRQxZ0wD1K2yCA361QLqfYeaz93MJTCnVw32sNVC5S4USFQaaFBBUfTvvo315lb3SfHn73k/k3W11on5Zmnjc/3yzysipucjb6m9A9uy1IHr+ExZbMR69h7GNx47flaV98ENkmE7iHI9DtlfX4+4Dcxj5kWGWeM567VLHa0ab687WFp03rO9jYOwBONg8MR4HD1iPN7oDmeKqV9EimvGKgqDzRT9CdkZotntk7yLncbNEJw98n1sNF0w2MVpend33JjCamYszOB3IY9+ib6vjI6kcsWfY+z5AFm24ZgFY61ArcJ2JdJyeQBqMa6ctGqFW3QkaXqmLZxF0j1H1p2hUfxejAZu0hxbw+dRFZ5LKSJahbHvv/lLnec4PmuPrJs7DVlV6P25OsO5cg8sXc/h60TMSLx5gicdc1su0A4eJ3Cs8l50C7V11u6Icu7wG8m5/b+rwkyAi9nwesctsTELWx6xq/X9EnyqdmBtZXpXuWUIzjlttiXSRxijXrmTdsBvnzNAZtV50UXdilY6W4YaJnlSU2hBKzux/oLWyEFIcLhPUFeDDd1S5Q+rWNkebiKv0C1pj5wBnHUdZ5QWNPDN91YhR2whGvuE68vIUpLW4hWgdnEo8ayWRNMW+66XZtqNIgWv7bf2J8fxv5/O7uqprd7pRTOdmo4v6a0d8cmeMu8rl7YF9GVpLC+uVuQSZq1PSu3mboY/QqjQOYLwo9coMzenh8Oqvh7qKt3T4oFDR163Ymo5FynOA3oNjtzCpClSsJcXZjRTm/vIFaCtO9loTQajrtYNfRRL3Y23QTsqplB/ZnPOr/FrZlORbFIo5h7jIKXIWh/A6BGXLolevJz1ldpH6a8HVW4lSLM/nBqhBrY+e6aTzxPHSzbsBTeNuAuvmdjXVbLsCHo0o15YpI9GyIHUCsXtJgN9GE9unE3rChc0qgYFA1YsWQBZPFraHUa/58kqd5UCi0UmVXYmfIJ+/Cycre6D7+xJkinnbUEZuSYxOYJRYnY9lx8rAHjX3MTeoiza0lRmgx84ghKfp32v8sogA+6Be7fnV1H1pyn1kfaq/KLW6PQHpEAzLx1eB8gJ4vYIH4PCqSxmq+Pw7RuqOtJKxTjOaOjqzbmntDQ3gWH7xGVWD0U0+KamuUBqevaI1AkpGa2pcysIG0K3i0huKxP65gjKp0ZoW7Ix31nNUUJED+cK9M1klA1cRNI6ePH82A6ktiMaQG2MRqfn8PgBNPaMuabbHBKyNkWR1Zrmq8eeMEf+pP2ek6MYdR7CeRKXM811WWpQwCTdRRtQWDUUnMViMFfPEcZHs5u/22M1h0p0DncPaGcOcX9w0vjAGpjoHGgOtXpn6DWOMMVnPdI6+rzt3F341Rzd7OT8F0NvNXu9HO7qlOaWxyTh3y3nOmO0wpVm9OhoVXPedVTs6il1z1nI8MAJTrF5tjGHvA7ILA4yxN61exkRXF9154CF93gFjmKNzmO5s5HzlbG+8NntBHNOgxGl315GbPx6mbvXGTeEp6gKkb7KmOLot5Htw91wMtWVQtGqGa2zp6wpwVuxkPL/m9HaMsHr9/wfH3/89B8f2/xUHR68OxgBXN8ViD49OJyQzW4DWkC+gPwXeh1nQax6nO3nzZQVYq9MbAN2JupzW9OcPzVsYMjsS8qzzByXXCfMKS2EfRh9PB7xJ7O6WvpLRQjLf8ccFAv9qjta3rRmKy30GLRaWhYorxbBnOozXet9aVeJ/cCG7FHOB4PnVEOpuvEOHn2GTn1E9RJno1iwS1Edt0tl5fw/NMdvq1cmo9d7bWb+To8o1Z2jhJ/hK1FVH15jACNJOndM+Vnd+A0o8oLn9mse/ul5U/U14AKT8xzydsU8djqT3S5CZFSrREQY6gPpMDAlU5zURUcSWG96oasdhBUU4AglT30T8qq60vNRBtaI6+vrWmEgyxnYhF9V1eqVas+jiIqbqmtf/A1N3T2EAAAAAAQAAAAECj0seZy1fDzz1AAsD6AAAAADFulMWAAAAAN337JwACf8yAlYDxwAAAAgAAgAAAAAAAHjaYopgAAFAQfBg5AAAAAAsc7wOb9W2betYLtHO3qRg51FFSsvAQVTbRVXWUlrNr4FfXQ0BNZ9epP2qqRjqyKuYSti6qVg6SlhLGcq46tkaS3lS9qZ2ByikDsoAeNpjYGRgYD7+35jhBFMEAycDE1MYUAQVMAIAYeIDhQB42mNgZopg/MLAysDB1MW0h4GBoQdCMz5gMGRkYmBg4mbjZGZgZgADRgYkEJDmmsLgwKDAUMVs8t+HgYH5OMNZoLAwSI5JkOkSgwIQMgIAZzUMRQB42n2PA240ABCFv/XuGX60MWojrm1Ha5vZHqmn7MurmdEbzwAx7ggRCCcgsAjPOMBfecYECQfOMJa+CFw94/C7mgj/Aw/POOr4Om1ypOhKZxklzVD6TJEmRaEDxfuUpOvyenQoCRWEi0Id2QYD57o0RFXHUopkZbdoCHVt2+rKManourwmQ0VKihXpKjbLtGjxx92TKCNU9bWd52t7aI9w2/uLQqOcs8uB7DFNd75dMap4iYyjHelxf9EVNVllStQh46uadIUn/W1V1tcrf8wWB/J3qZOhId3xzym6kgmy3Fu+/O0PJ5mWXZX81u8KZpiVb2FatMKV/9RF7ht1dIZJ6+lHMtFQtwB42mNgYGACYmYgFgGSjGCahcEBSPMwcDAwAdkKDNoMugxRDFX//wNFITxHhsT///8//H/9/7X/h//vBelDAACwGQ/8AHjaY2BmAIP/zQxGQIqRAQ0AAChVAbkAAHjaLc8DlhwAFATAGtu219bc/2bpJPtQH/3UeEaXwtqzMgqqCgpqirGuFBvKsakSW5Jrq8WueuxpxL5mHGjFkXYc68SJbpzqxZl+XBjEpWFcGcW1cdyYxK1p3JnFvXk8WMSjZTxZxbN1vNjEG9t4Zxfv7eODQ3x0jM9O8cU5vrrENzfx3W38dBe/3MdvD/HHY7x6imVUY01JXVVDR1NNS11bQ1dLT1Nf20DRSNdYxeS370zfwsjSwMrY2tDG2BY7Y3tlByVHVScdZzUXdTca7rTca3rQ9qjoWdeLildpoOdd36eRLwPfxn4MXY3/AM6XEOsAAAB42mNgYBBlYARiBgY+BoYPCxr+s4p++M8AhAc8DvxvaICwPSZ8+L/Pd9//xUuU/4PUvF3U+F9G+i2czfD4P1id/l9NEB+kDkwDTf0PABfBNhQAAAAAAQAAAAwAAAAAAAAAAgABAAEANwABAAA=";
        },
        7204: e => {
            "use strict";
            e.exports = "data:font/woff2;base64,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";
        },
        4833: (e, n, t) => {
            "use strict";
            e.exports = t.p + "142d6904f2305dd1cce7.png";
        },
        5904: (e, n, t) => {
            "use strict";
            e.exports = t.p + "9f772eefe8d08175ff5d.png";
        },
        7969: (e, n, t) => {
            "use strict";
            e.exports = t.p + "53d2a61fad6a2df4af57.png";
        },
        5515: (e, n, t) => {
            "use strict";
            e.exports = t.p + "fb5cfc3806f721f541ad.png";
        },
        4484: (e, n, t) => {
            "use strict";
            e.exports = t.p + "cb013a3d1b5f9a2c78e2.png";
        },
        7940: (e, n, t) => {
            "use strict";
            e.exports = t.p + "753a136eb8e7d5534788.png";
        },
        42: (e, n, t) => {
            "use strict";
            e.exports = t.p + "a1ee785acc7f8c1bf4ac.png";
        },
        901: (e, n, t) => {
            "use strict";
            e.exports = t.p + "bfc0aaa54b3fd8130101.png";
        }
    }, t = {};
    function r(e) {
        var i = t[e];
        if (void 0 !== i) return i.exports;
        var a = t[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e].call(a.exports, a, a.exports, r), a.loaded = !0, a.exports;
    }
    r.m = n, e = [], r.O = (n, t, i, a) => {
        if (!t) {
            var s = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [t, i, a] = e[u], o = !0, l = 0; l < t.length; l++) (!1 & a || s >= a) && Object.keys(r.O).every((e => r.O[e](t[l]))) ? t.splice(l--, 1) : (o = !1, 
                a < s && (s = a));
                if (o) {
                    e.splice(u--, 1);
                    var c = i();
                    void 0 !== c && (n = c);
                }
            }
            return n;
        }
        a = a || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
        e[u] = [ t, i, a ];
    }, r.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return r.d(n, {
            a: n
        }), n;
    }, r.d = (e, n) => {
        for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: n[t]
        });
    }, r.u = e => "tmworker.js", r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    }(), r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e), r.j = 179, r.p = "/", 
    (() => {
        r.b = document.baseURI || self.location.href;
        var e = {
            179: 0
        };
        r.O.j = n => 0 === e[n];
        var n = (n, t) => {
            var i, a, [s, o, l] = t, c = 0;
            if (s.some((n => 0 !== e[n]))) {
                for (i in o) r.o(o, i) && (r.m[i] = o[i]);
                if (l) var u = l(r);
            }
            for (n && n(t); c < s.length; c++) a = s[c], r.o(e, a) && e[a] && e[a][0](), e[a] = 0;
            return r.O(u);
        }, t = self.webpackChunkmmseqs_app = self.webpackChunkmmseqs_app || [];
        t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t));
    })();
    var i = r.O(void 0, [ 736 ], (() => r(509)));
    i = r.O(i);
})();
//# sourceMappingURL=main.js.map