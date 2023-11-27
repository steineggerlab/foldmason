(() => {
    var e, t = {
        5106: (e, t, n) => {
            "use strict";
            n.d(t, {
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
        5473: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = {
                APP_NAME: "Foldseek",
                APP_DESCRIPTION: "Foldseek Server offers fast and sensitive protein structure alignments against large protein structure collections",
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
        8615: (e, t, n) => {
            "use strict";
            n.d(t, {
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
        5453: (e, t, n) => {
            "use strict";
            var r = n(144), a = n(8538), i = n(1002), s = {
                selector: "vue-portal-target"
            };
            const o = s;
            var l = "undefined" != typeof window && void 0 !== ("undefined" == typeof document ? "undefined" : (0, 
            i.Z)(document));
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
                    var t = this.updatedNodes && this.updatedNodes();
                    return t ? 1 !== t.length || t[0].text ? e(this.tag || "DIV", t) : t : e();
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
                        var t = this.$scopedSlots && this.$scopedSlots.default();
                        return t ? t.length < 2 && !t[0].text ? t : e(this.tag, t) : e();
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
                            var e = document.querySelector("body"), t = document.createElement(this.tag);
                            t.id = this.selector.substring(1), e.appendChild(t);
                        }
                    },
                    mount: function() {
                        if (l) {
                            var e = this.getTargetEl(), t = document.createElement("DIV");
                            this.prepend && e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t), 
                            this.container = new c({
                                el: t,
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
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e.component(n.name || "portal", u), n.defaultSelector && (t = n.defaultSelector, 
                s.selector = t);
            }
            "undefined" != typeof window && window.Vue && window.Vue === r.Z && r.Z.use(d);
            const A = d;
            var h = n(5317);
            const p = {
                AlertCircleOutline: h._gM,
                ApplicationBracesOutline: "M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 20H3V6H21V20M9 8C7.9 8 7 8.9 7 10C7 11.1 6.1 12 5 12V14C6.1 14 7 14.9 7 16C7 17.1 7.9 18 9 18H11V16H9V15C9 13.9 8.1 13 7 13C8.1 13 9 12.1 9 11V10H11V8M15 8C16.1 8 17 8.9 17 10C17 11.1 17.9 12 19 12V14C17.9 14 17 14.9 17 16C17 17.1 16.1 18 15 18H13V16H15V15C15 13.9 15.9 13 17 13C15.9 13 15 12.1 15 11V10H13V8H15Z",
                ArrowRightCircle: h.BzZ,
                ArrowRightCircleOutline: h.LHZ,
                AxisZRotateCounterclockwise: h.LDS,
                ChevronLeft: h.gAv,
                ChevronRight: h.zrb,
                Circle: h.mdD,
                CircleHalf: h.dMH,
                CircleOneThird: "M12 12 V2 A10 10 0 0 0 3.858 17.806 Z",
                CircleTwoThird: "M12 12 V2 A10 10 0 1 0 20.142 17.806 Z",
                ClockOutline: h.R1X,
                CloudDownloadOutline: h.REA,
                Delete: h.x9U,
                Dns: h.cfj,
                FileDownloadOutline: h.wLz,
                FormatListBulleted: h.Ir0,
                Fullscreen: h.h40,
                HelpCircleOutline: h.Gir,
                History: h.BBX,
                Label: h.KB_,
                LabelOutline: h.iz_,
                Magnify: h.I0v,
                MinusBox: h.PeF,
                NotificationClearAll: h.Tal,
                PlusBox: h.U1m,
                ProgressWrench: h.Oy8,
                ReorderHorizontal: h.Qjn,
                Restore: h.mBz,
                SavePDB: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14Zm0 8v-.8c0-.7-.6-1.2-1.3-1.2h-2.4v6h2.4c.7 0 1.2-.5 1.2-1.2v-1c0-.4-.4-.8-.9-.8.5 0 1-.4 1-1Zm-9.7.5v-1c0-.8-.7-1.5-1.5-1.5H5.3v6h1.5v-2h1c.8 0 1.5-.7 1.5-1.5Zm5 2v-3c0-.8-.7-1.5-1.5-1.5h-2.5v6h2.5c.8 0 1.5-.7 1.5-1.5Zm3.4.3h-1.2v-1.2h1.2v1.2Zm-5.9-3.3v3h1v-3h-1Zm-5 0v1h1v-1h-1Zm11 .9h-1.3v-1.2h1.2v1.2Z",
                SavePNG: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9 11.5C9 12.3 8.3 13 7.5 13H6.5V15H5V9H7.5C8.3 9 9 9.7 9 10.5V11.5M14 15H12.5L11.5 12.5V15H10V9H11.5L12.5 11.5V9H14V15M19 10.5H16.5V13.5H17.5V12H19V13.7C19 14.4 18.5 15 17.7 15H16.4C15.6 15 15.1 14.3 15.1 13.7V10.4C15 9.7 15.5 9 16.3 9H17.6C18.4 9 18.9 9.7 18.9 10.3V10.5H19M6.5 10.5H7.5V11.5H6.5V10.5Z",
                TableLarge: h.bgG,
                Tune: h.S3d
            };
            var g = function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("v-app", {
                    class: {
                        electron: e.$ELECTRON
                    },
                    attrs: {
                        id: "app"
                    }
                }, [ n("v-main", [ "foldmason" === e.$APP ? n("MSALocal") : n("ResultLocal") ], 1) ], 1);
            };
            g._withStripped = !0;
            var m = function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("Local", {
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
                            return [ e.hits ? n("v-tabs", {
                                staticStyle: {
                                    "margin-bottom": "1em"
                                },
                                attrs: {
                                    "center-active": "",
                                    grow: "",
                                    "show-arrows": ""
                                }
                            }, e._l(e.hits, (function(t, r) {
                                return n("v-tab", {
                                    key: t.query.header,
                                    on: {
                                        click: function(t) {
                                            return e.changeResult(r);
                                        }
                                    }
                                }, [ e._v("\n                " + e._s(t.query.header) + " (" + e._s(t.results[0].alignments ? t.results[0].alignments.length : 0) + ")\n            ") ]);
                            })), 1) : e._e(), e._v(" "), n("ResultView", {
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
            var f = n(885), v = n(8197);
            function b(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return y(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t);
                    }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0, a = function() {};
                        return {
                            s: a,
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
                            f: a
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(e);
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        o = !0, i = e;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                };
            }
            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function C(e, t) {
                var n = t.toLowerCase();
                return n.startsWith("pfam") ? "https://pfam.xfam.org/family/" + e : n.startsWith("pdb") ? "https://www.rcsb.org/pdb/explore.do?structureId=" + e.replaceAll(/\.(cif|pdb)(\.gz)?/g, "").split("_")[0] : n.startsWith("uniclust") || n.startsWith("uniprot") || n.startsWith("sprot") || n.startsWith("swissprot") ? "https://www.uniprot.org/uniprot/" + e : n.startsWith("eggnog_") ? "http://eggnogdb.embl.de/#/app/results?target_nogs=" + e : n.startsWith("cdd") ? "https://www.ncbi.nlm.nih.gov/Structure/cdd/cddsrv.cgi?uid=" + e : null;
            }
            function M(e, t) {
                t.toLowerCase();
                return e;
            }
            function w(e) {
                var t = 0, n = 0;
                for (var r in e.results) {
                    var a = e.results[r], i = a.db;
                    for (var s in a.hasDescription = !1, a.hasTaxonomy = !1, null == a.alignments && t++, 
                    n++, a.alignments) {
                        var o = a.alignments[s], l = o.target.split(" ");
                        o.target = l[0], o.description = l.slice(1).join(" "), o.description.length > 1 && (a.hasDescription = !0), 
                        o.href = C(o.target, i), o.target = M(o.target, i), o.id = "result-" + r + "-" + s, 
                        o.active = !1, o.eval = "string" == typeof o.eval ? o.eval : o.eval.toExponential(2), 
                        "taxId" in o && (a.hasTaxonomy = !0);
                    }
                }
                return 0 != n && t / n == 1 ? {
                    results: []
                } : e;
            }
            function x() {
                return (new Date).toLocaleString("sv").replace(" ", "_").replaceAll("-", "_").replaceAll(":", "_");
            }
            function S(e, t) {
                var n = JSON.stringify(e), r = new Blob([ n ], {
                    type: "application/json"
                }), a = document.createElement("a");
                a.href = URL.createObjectURL(r), a.download = t, a.click(), URL.revokeObjectURL(a.href);
            }
            function T(e, t) {
                for (var n = Array(t.length), r = 0, a = 0; r < t.length; r++) "-" === t[r] ? (n[r] = null, 
                a++) : n[r] = e + r - a;
                return n;
            }
            var I = {
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
            function L(e, t) {
                var n = [];
                return e.eachAtom((function(e) {
                    n.push(function(e) {
                        var t = e.serial, n = e.atomname, r = e.resname, a = e.chainname, i = e.resno, s = e.inscode, o = e.x, l = e.y, c = e.z;
                        return "ATOM  ".concat(t.toString().padStart(5)).concat(n.padStart(4), "  ").concat(r.padStart(3), " ").concat(a.padStart(1)).concat(i.toString().padStart(4), " ").concat(s.padStart(1), "  ").concat(o.toFixed(3).padStart(8)).concat(l.toFixed(3).padStart(8)).concat(c.toFixed(3).padStart(8));
                    }(e));
                }), new v.Y1(t)), n.join("\n");
            }
            function R(e, t) {
                for (var n = e.split(","), r = new Array, a = 1, i = 0; i < n.length; i += 3, a++) {
                    var s = n.slice(i, i + 3).map((function(e) {
                        return parseFloat(e);
                    })), o = (0, f.Z)(s, 3), l = o[0], c = o[1], u = o[2];
                    r.push("ATOM  " + a.toString().padStart(5) + "  CA  " + I["" != t && n.length / 3 == t.length ? t[i / 3] : "A"] + " A" + a.toString().padStart(4) + "    " + l.toString().padStart(8) + c.toString().padStart(8) + u.toString().padStart(8) + "  1.00  0.00           C  ");
                }
                return r.join("\n");
            }
            function O(e, t, n) {
                e.eachAtom((function(e) {
                    var r = [ e.x, e.y, e.z ], a = r[0], i = r[1], s = r[2];
                    e.x = t[0] + n[0][0] * a + n[0][1] * i + n[0][2] * s, e.y = t[1] + n[1][0] * a + n[1][1] * i + n[1][2] * s, 
                    e.z = t[2] + n[2][0] * a + n[2][1] * i + n[2][2] * s;
                }));
            }
            function k(e, t) {
                var n;
                return function() {
                    var r = this, a = arguments;
                    clearTimeout(n), n = setTimeout((function() {
                        e.apply(r, a);
                    }), t);
                };
            }
            var D = "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5".match(/.{6}/g).map((function(e) {
                return "#" + e;
            }));
            function E(e) {
                e = function(e) {
                    var t = function(e) {
                        return parseInt(e, 16) / 255;
                    };
                    return [ t(e.slice(1, 3)), t(e.slice(3, 5)), t(e.slice(5, 7)) ];
                }(e);
                var t = e[0], n = e[1], r = e[2], a = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, o = i - a, l = (i + a) / 2;
                return o ? (s = t === i ? (n - r) / o + 6 * (n < r) : n === i ? (r - t) / o + 2 : (t - n) / o + 4, 
                o /= l < .5 ? i + a : 2 - i - a, s *= 60) : o = l > 0 && l < 1 ? 0 : s, [ s, o, l ];
            }
            function N(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return B(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return B(e, t);
                    }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0, a = function() {};
                        return {
                            s: a,
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
                            f: a
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(e);
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        o = !0, i = e;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                };
            }
            function B(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            const q = {
                name: "result",
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
                            var e, t, n, r, a, i, s, o, l, c = (e = [], t = 1, function(n) {
                                var r = n + "", a = e[r];
                                return a || (a = e[r] = t++), D[(a - 1) % D.length];
                            }), u = N(this.currentResult.results);
                            try {
                                for (u.s(); !(n = u.n()).done; ) {
                                    var d = n.value;
                                    d.color = c(d.db ? d.db : 0);
                                    var A, h = E(d.color), p = {
                                        score: Number.MIN_VALUE
                                    }, g = {
                                        score: Number.MAX_VALUE
                                    }, m = N(d.alignments);
                                    try {
                                        for (m.s(); !(A = m.n()).done; ) {
                                            var f = A.value;
                                            for (var v in g) g[v] = f[v] < g[v] ? f[v] : g[v], p[v] = f[v] > p[v] ? f[v] : p[v];
                                        }
                                    } catch (e) {
                                        m.e(e);
                                    } finally {
                                        m.f();
                                    }
                                    var b, y = N(d.alignments);
                                    try {
                                        for (y.s(); !(b = y.n()).done; ) {
                                            var C = b.value, M = (s = g.score / p.score, o = 1, l = C.score / p.score, s * (1 - l) + o * l), w = (r = h[2] * Math.pow(.55, -(1 - M)), 
                                            a = .1, i = .9, Math.max(a, Math.min(i, r)));
                                            C.color = "hsl(".concat(h[0], ", ").concat(100 * h[1], "%, ").concat(100 * w, "%)");
                                        }
                                    } catch (e) {
                                        y.e(e);
                                    } finally {
                                        y.f();
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
            var P = n(1900), V = (0, P.Z)(q, undefined, undefined, !1, null, null, null);
            V.options.__file = "frontend/ResultMixin.vue";
            const _ = V.exports;
            var U = function() {
                var e = this, t = e.$createElement, r = e._self._c || t;
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
                        src: n(4833),
                        srcset: n(4833) + " 2x, " + n(5904) + " 3x"
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
                        src: n(7969),
                        srcset: n(7969) + " 2x, " + n(5515) + " 3x"
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
                        src: n(4484),
                        srcset: n(4484) + " 2x, " + n(7940) + " 3x"
                    }
                }) ]), e._v(" "), r("v-flex", {
                    attrs: {
                        xs8: ""
                    }
                }, [ r("h3", [ e._v("Still Pending") ]), e._v(" "), r("p", [ e._v("Please wait a moment") ]) ]) ], 1) ], 1) ], 1), e._v(" "), e.hits && e.hits.results ? r("template", {
                    slot: "content"
                }, [ e.hits.results.length > 1 ? r("v-tabs", {
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
                        change: function(t) {
                            return e.closeAlignment();
                        }
                    },
                    model: {
                        value: e.selectedDatabases,
                        callback: function(t) {
                            e.selectedDatabases = t;
                        },
                        expression: "selectedDatabases"
                    }
                }, [ r("v-tab", [ e._v("All databases") ]), e._v(" "), e._l(e.hits.results, (function(t) {
                    return r("v-tab", {
                        key: t.db
                    }, [ e._v(e._s(t.db) + " (" + e._s(t.alignments ? t.alignments.length : 0) + ")") ]);
                })) ], 2) : e._e(), e._v(" "), e._l(e.hits.results, (function(t, n) {
                    return 0 == e.selectedDatabases || n + 1 == e.selectedDatabases ? r("div", {
                        key: t.db
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
                    }, [ e._v(e._s(t.db)) ]), e._v(" "), r("small", [ e._v(e._s(t.alignments ? t.alignments.length : 0) + " hits") ]) ]), e._v(" "), r("v-btn-toggle", {
                        staticClass: "ml-auto",
                        attrs: {
                            mandatory: ""
                        },
                        model: {
                            value: e.tableMode,
                            callback: function(t) {
                                e.tableMode = t;
                            },
                            expression: "tableMode"
                        }
                    }, [ r("v-btn", [ e._v("\n                            Graphical\n                        ") ]), e._v(" "), r("v-btn", [ e._v("\n                            Numeric\n                        ") ]) ], 1) ], 1), e._v(" "), r("table", {
                        staticClass: "v-table result-table",
                        staticStyle: {
                            position: "relativ",
                            "margin-bottom": "3em"
                        }
                    }, [ r("thead", [ r("tr", [ r("th", {
                        class: "wide-" + (3 - t.hasDescription - t.hasTaxonomy)
                    }, [ e._v("Target") ]), e._v(" "), t.hasDescription ? r("th", {
                        staticClass: "wide-1"
                    }, [ e._v("\n                                Description\n                                "), r("v-tooltip", {
                        attrs: {
                            "open-delay": "300",
                            top: ""
                        },
                        scopedSlots: e._u([ {
                            key: "activator",
                            fn: function(t) {
                                var n = t.on;
                                return [ r("v-icon", e._g({
                                    staticStyle: {
                                        "font-size": "16px",
                                        float: "right"
                                    }
                                }, n), [ e._v(e._s(e.$MDI.HelpCircleOutline)) ]) ];
                            }
                        } ], null, !0)
                    }, [ e._v(" "), r("span", [ e._v("Triple click to select whole cell (for very long identifiers)") ]) ]) ], 1) : e._e(), e._v(" "), t.hasTaxonomy ? r("th", {
                        staticClass: "wide-1"
                    }, [ e._v("Scientific Name") ]) : e._e(), e._v(" "), r("th", {
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
                            fn: function(t) {
                                var n = t.on;
                                return [ r("v-icon", e._g({
                                    staticStyle: {
                                        "font-size": "16px",
                                        float: "right"
                                    }
                                }, n), [ e._v(e._s(e.$MDI.HelpCircleOutline)) ]) ];
                            }
                        } ], null, !0)
                    }, [ e._v(" "), r("span", [ e._v("The position of the aligned region of the target sequence in the query") ]) ]) ], 1) : e._e(), e._v(" "), r("th", {
                        staticClass: "alignment-action thin"
                    }, [ e._v("Alignment") ]) ]) ]), e._v(" "), r("tbody", e._l(t.alignments, (function(n, a) {
                        return r("tr", {
                            key: n.target + a,
                            class: [ "hit", {
                                active: n.active
                            } ]
                        }, [ r("td", {
                            staticClass: "long db",
                            style: "border-color: " + t.color,
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
                                id: n.id
                            }
                        }), e._v(" "), r("a", {
                            attrs: {
                                href: n.href,
                                target: "_blank",
                                rel: "noopener",
                                title: n.target
                            }
                        }, [ e._v(e._s(n.target)) ]) ]), e._v(" "), t.hasDescription ? r("td", {
                            staticClass: "long",
                            attrs: {
                                "data-label": "Description"
                            }
                        }, [ r("span", {
                            attrs: {
                                title: n.description
                            }
                        }, [ e._v(e._s(n.description)) ]) ]) : e._e(), e._v(" "), t.hasTaxonomy ? r("td", {
                            staticClass: "long",
                            attrs: {
                                "data-label": "Taxonomy"
                            }
                        }, [ r("a", {
                            attrs: {
                                href: "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=" + n.taxId,
                                target: "_blank",
                                rel: "noopener",
                                title: n.taxName
                            }
                        }, [ e._v(e._s(n.taxName)) ]) ]) : e._e(), e._v(" "), r("td", {
                            staticClass: "thin",
                            attrs: {
                                "data-label": "Probability"
                            }
                        }, [ e._v(e._s(n.prob)) ]), e._v(" "), r("td", {
                            staticClass: "thin",
                            attrs: {
                                "data-label": "Sequence Identity"
                            }
                        }, [ e._v(e._s(n.seqId)) ]), e._v(" "), r("td", {
                            staticClass: "thin",
                            attrs: {
                                "data-label": "foldseek" == e.$APP && "tmalign" == e.mode ? "TM-score" : "E-Value"
                            }
                        }, [ e._v(e._s(n.eval)) ]), e._v(" "), 1 == e.tableMode ? r("td", {
                            staticClass: "thin",
                            attrs: {
                                "data-label": "Score"
                            }
                        }, [ e._v(e._s(n.score)) ]) : e._e(), e._v(" "), 1 == e.tableMode ? r("td", {
                            staticClass: "thin",
                            attrs: {
                                "data-label": "Query Position"
                            }
                        }, [ e._v(e._s(n.qStartPos) + "-" + e._s(n.qEndPos) + " (" + e._s(n.qLen) + ")") ]) : e._e(), e._v(" "), 1 == e.tableMode ? r("td", {
                            staticClass: "thin",
                            attrs: {
                                "data-label": "Target Position"
                            }
                        }, [ e._v(e._s(n.dbStartPos) + "-" + e._s(n.dbEndPos) + " (" + e._s(n.dbLen) + ")") ]) : e._e(), e._v(" "), 0 == e.tableMode ? r("td", {
                            staticClass: "graphical",
                            attrs: {
                                "data-label": "Position"
                            }
                        }, [ r("Ruler", {
                            attrs: {
                                length: n.qLen,
                                start: n.qStartPos,
                                end: n.qEndPos,
                                color: n.color,
                                label: 0 == a
                            }
                        }) ], 1) : e._e(), e._v(" "), r("td", {
                            staticClass: "alignment-action thin"
                        }, [ r("button", {
                            staticClass: "v-btn v-btn--icon v-btn--round v-btn--text v-size--default",
                            class: {
                                "v-btn--outlined": e.alignment && n.target == e.alignment.target,
                                "theme--dark": e.$vuetify.theme.dark
                            },
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: function(t) {
                                    return e.showAlignment(n, t);
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
                        }) ]) ]) ]) ]) ]) ]);
                    })), 0) ]) ], 1) : e._e();
                })) ], 2) : e._e() ], 2) ], 1) ], 1), e._v(" "), r("portal", [ null != e.alignment ? r("panel", {
                    staticClass: "alignment",
                    style: "top: " + e.alnBoxOffset + "px"
                }, [ r("AlignmentPanel", {
                    key: "ap-" + e.alignment.id,
                    attrs: {
                        slot: "content",
                        alignment: e.alignment,
                        lineLen: e.fluidLineLen,
                        hits: e.hits
                    },
                    slot: "content"
                }) ], 1) : e._e() ], 1) ], 1);
            };
            U._withStripped = !0;
            var G = function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    class: [ "panel-root", null != e.elevation ? "elevation-" + e.elevation : null ]
                }, [ e.$slots.header || e.header ? n("v-toolbar", {
                    attrs: {
                        text: "",
                        dense: "",
                        dark: ""
                    }
                }, [ e.collapsible ? n("v-btn", {
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
                        click: function(t) {
                            e.isCollapsed = !e.isCollapsed;
                        }
                    }
                }, [ e.isCollapsed ? n("v-icon", [ e._v("\n                " + e._s(e.$MDI.PlusBox) + "\n            ") ]) : n("v-icon", [ e._v("\n                " + e._s(e.$MDI.MinusBox) + "\n            ") ]) ], 1) : e._e(), e._v(" "), n("span", {
                    staticClass: "text-h6 align-end"
                }, [ e.$slots.header ? e._t("header") : [ e._v(e._s(e.header)) ] ], 2), e._v(" "), n("v-spacer"), e._v(" "), e._t("toolbar-extra") ], 2) : e._e(), e._v(" "), e.isCollapsed ? e._e() : n("v-card", {
                    class: [ "panel", {
                        "d-flex": e.flex
                    }, {
                        "force-fill-height": e.fillHeight
                    } ],
                    attrs: {
                        rounded: "0",
                        id: e.uuid
                    }
                }, [ e.$slots.desc ? n("v-card-text", {
                    staticClass: "subheading justify"
                }, [ e._t("desc") ], 2) : e._e(), e._v(" "), e.$slots.content ? n("v-card-text", {
                    class: [ "panel-content", "justify", {
                        "d-flex": e.flex
                    } ]
                }, [ e._t("content") ], 2) : e._e() ], 1) ], 1);
            };
            G._withStripped = !0;
            var j = 0;
            const z = {
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
                    }
                },
                data: function() {
                    return {
                        isCollapsed: this.collapsed
                    };
                },
                beforeCreate: function() {
                    this.uuid = "panel-" + j.toString(), j += 1;
                }
            };
            n(9146);
            var Z = n(3453), Q = n.n(Z), F = n(5934), Y = n(5893), H = n(5255), W = n(4786), K = n(2515), J = n(5664), X = (0, 
            P.Z)(z, G, [], !1, null, "0d9b5935", null);
            Q()(X, {
                VBtn: F.Z,
                VCard: Y.Z,
                VCardText: H.ZB,
                VIcon: W.Z,
                VSpacer: K.Z,
                VToolbar: J.Z
            }), X.options.__file = "frontend/Panel.vue";
            const $ = X.exports;
            var ee = function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    staticClass: "alignment-wrapper-outer",
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                }, [ n("Alignment", {
                    key: "aln2-" + e.alignment.id,
                    attrs: {
                        alignment: e.alignment,
                        lineLen: e.lineLen,
                        queryMap: e.queryMap,
                        targetMap: e.targetMap
                    },
                    on: {
                        selected: e.setUserSelection
                    }
                }), e._v(" "), "foldseek" == e.$APP ? n("div", {
                    staticClass: "alignment-structure-wrapper"
                }, [ n("StructureViewer", {
                    key: "struc2-" + e.alignment.id,
                    ref: "structureViewer",
                    attrs: {
                        alignment: e.alignment,
                        queryMap: e.queryMap,
                        targetMap: e.targetMap,
                        hits: e.hits,
                        bgColorLight: "white",
                        bgColorDark: "#1E1E1E",
                        qColor: "lightgrey",
                        tColor: "red",
                        qRepr: "cartoon",
                        tRepr: "cartoon"
                    }
                }) ], 1) : e._e() ], 1);
            };
            ee._withStripped = !0;
            var te = function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    staticClass: "alignment-wrapper-inner"
                }, [ e._l(Math.max(1, Math.ceil(e.alignment.alnLength / e.lineLen)), (function(t) {
                    return n("span", {
                        key: t,
                        staticClass: "monospace"
                    }, [ n("span", {
                        staticClass: "line"
                    }, [ e._v("\n            Q " + e._s(e.padNumber(e.getQueryRowStartPos(t), (Math.max(e.alignment.qStartPos, e.alignment.dbStartPos) + e.alignment.alnLength + "").length, " ")) + " "), n("span", {
                        staticClass: "residues"
                    }, [ e._v(e._s(e.alignment.qAln.substring((t - 1) * e.lineLen, (t - 1) * e.lineLen + e.lineLen))) ]), e._v(" "), n("br"), e._v("\n            " + e._s(" ".repeat(3 + (Math.max(e.alignment.qStartPos, e.alignment.dbStartPos) + e.alignment.alnLength + "").length))), n("span", {
                        staticClass: "residues"
                    }, [ e._v(e._s(e.formatAlnDiff(e.alignment.qAln.substring((t - 1) * e.lineLen, (t - 1) * e.lineLen + e.lineLen), e.alignment.dbAln.substring((t - 1) * e.lineLen, (t - 1) * e.lineLen + e.lineLen)))) ]), e._v(" "), n("br"), e._v("\n            T " + e._s(e.padNumber(e.getTargetRowStartPos(t), (Math.max(e.alignment.qStartPos, e.alignment.dbStartPos) + e.alignment.alnLength + "").length, " ")) + " "), n("span", {
                        staticClass: "residues",
                        on: {
                            pointerup: function(n) {
                                return e.onSelectText(t);
                            }
                        }
                    }, [ e._v(e._s(e.alignment.dbAln.substring((t - 1) * e.lineLen, (t - 1) * e.lineLen + e.lineLen))) ]) ]), n("br") ]);
                })), e._v(" "), "foldseek" == e.$APP ? n("small", {
                    staticStyle: {
                        float: "right"
                    }
                }, [ e._v("Select target residues to highlight their structure") ]) : e._e() ], 2);
            };
            te._withStripped = !0;
            var ne = [ "AG", "AS", "DE", "DN", "ED", "EK", "EQ", "FL", "FM", "FW", "FY", "GA", "HN", "HQ", "HY", "IL", "IM", "IV", "KE", "KQ", "KR", "LF", "LI", "LM", "LV", "MF", "MI", "ML", "MV", "ND", "NH", "NQ", "NS", "QE", "QH", "QK", "QN", "QR", "RK", "RQ", "SA", "SN", "ST", "TS", "VI", "VL", "VM", "WF", "WY", "YF", "YH", "YW" ];
            const re = {
                props: [ "alignment", "lineLen", "queryMap", "targetMap" ],
                methods: {
                    getQueryIndex: function(e) {
                        return this.queryMap[e];
                    },
                    getTargetIndex: function(e) {
                        return this.targetMap[e];
                    },
                    getFirstResidueNumber: function(e, t) {
                        for (var n = this.lineLen * (t - 1); null === e[n]; ) n--;
                        return e[n];
                    },
                    getQueryRowStartPos: function(e) {
                        return this.getFirstResidueNumber(this.queryMap, e);
                    },
                    getTargetRowStartPos: function(e) {
                        return this.getFirstResidueNumber(this.targetMap, e);
                    },
                    formatAlnDiff: function(e, t) {
                        if (e.length != t.length) return "";
                        for (var n = "", r = 0; r < e.length; r++) e[r] == t[r] ? n += e[r] : -1 != ne.indexOf(e[r] + t[r]) ? n += "+" : n += " ";
                        return n;
                    },
                    padNumber: function(e, t, n) {
                        return Array(t - String(e).length + 1).join(n || "0") + e;
                    },
                    onSelectText: function(e) {
                        var t = window.getSelection(), n = [ t.anchorOffset, t.focusOffset ].sort((function(e, t) {
                            return e - t;
                        })), r = (0, f.Z)(n, 2), a = r[0], i = r[1] - a, s = (e - 1) * this.lineLen + a, o = s + i - 1, l = function(e, t, n) {
                            for (var r = null, a = null, i = t; i <= n; i++) {
                                var s = e[i];
                                null !== s && (null === r && (r = s), a = s);
                            }
                            return [ r, a ];
                        }(this.targetMap, s, o), c = (0, f.Z)(l, 2), u = c[0], d = c[1];
                        this.$emit("selected", [ u, d ]);
                    }
                }
            };
            n(603);
            var ae = (0, P.Z)(re, te, [], !1, null, null, null);
            ae.options.__file = "frontend/Alignment.vue";
            const ie = {
                components: {
                    StructureViewer: function() {
                        return null;
                    },
                    Alignment: ae.exports
                },
                data: function() {
                    return {
                        queryMap: null,
                        targetMap: null
                    };
                },
                props: {
                    alignment: {
                        type: Object,
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
                methods: {
                    setUserSelection: function(e) {
                        var t = (0, f.Z)(e, 2);
                        t[0], t[1];
                        this.alignment;
                    },
                    updateMaps: function() {
                        this.alignment && (this.queryMap = T(this.alignment.qStartPos, this.alignment.qAln), 
                        this.targetMap = T(this.alignment.dbStartPos, this.alignment.dbAln));
                    }
                },
                watch: {
                    alignment: function() {
                        this.updateMaps();
                    }
                },
                beforeMount: function() {
                    this.updateMaps();
                }
            };
            n(2530);
            var se = (0, P.Z)(ie, ee, [], !1, null, null, null);
            se.options.__file = "frontend/AlignmentPanel.vue";
            const oe = se.exports;
            var le = function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    staticClass: "ruler"
                }, [ n("div", {
                    staticClass: "query",
                    class: {
                        reversed: e.reversed
                    },
                    style: {
                        left: e.queryLeft + "%",
                        right: e.queryRight + "%"
                    }
                }, [ n("div", {
                    staticClass: "chevron-start",
                    style: {
                        "background-color": e.color
                    }
                }), e._v(" "), n("div", {
                    staticClass: "chevron-mid",
                    style: {
                        "background-color": e.color
                    }
                }), e._v(" "), n("div", {
                    staticClass: "chevron-end",
                    style: {
                        "background-color": e.color
                    }
                }) ]), e._v(" "), n("div", {
                    staticClass: "tick-label",
                    style: {
                        left: e.queryLeft + "%"
                    }
                }, [ e._v(e._s(e.minStart)) ]), e._v(" "), n("div", {
                    staticClass: "tick-label",
                    style: {
                        right: e.queryRight + "%",
                        "margin-left": 0,
                        "margin-right": "-25px"
                    }
                }, [ e._v(e._s(e.maxEnd)) ]) ]);
            };
            le._withStripped = !0;
            const ce = {
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
                        }, (function(t, n) {
                            return n / e.numTicks * 100;
                        }));
                    }
                }
            };
            n(5941);
            var ue = (0, P.Z)(ce, le, [], !1, null, "2b7861b2", null);
            ue.options.__file = "frontend/Ruler.vue";
            function de(e) {
                for (var t = 0; e; ) t += e.offsetTop, e = e.offsetParent;
                return t;
            }
            var Ae, he, pe, ge;
            const me = {
                name: "result",
                components: {
                    Panel: $,
                    AlignmentPanel: oe,
                    Ruler: ue.exports
                },
                data: function() {
                    return {
                        alignment: null,
                        activeTarget: null,
                        alnBoxOffset: 0,
                        selectedDatabases: 0,
                        tableMode: 0
                    };
                },
                props: {
                    ticket: "",
                    error: "",
                    mode: "",
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
                    fluidLineLen: function() {
                        return this.$vuetify.breakpoint.xsOnly ? 30 : this.$vuetify.breakpoint.smAndDown ? 40 : 80;
                    },
                    filteredResults: function() {
                        return this.hits ? 0 === this.selectedDatabases ? this.hits.results : [ this.hits.results[this.selectedDatabases - 1] ] : [];
                    },
                    resultState: function() {
                        if (null == this.hits && "" == this.error) return "PENDING";
                        if (!this.hits.results) return "ERROR";
                        if (0 == this.hits.results.length) return "EMPTY";
                        for (var e in this.hits.results) if (null != this.hits.results[e].alignments) return "RESULT";
                        return "ERROR";
                    }
                },
                methods: {
                    showAlignment: function(e, t) {
                        this.alignment === e ? this.closeAlignment() : (this.alignment = e, this.activeTarget = t.target.closest(".hit"), 
                        this.alnBoxOffset = de(this.activeTarget) + this.activeTarget.offsetHeight);
                    },
                    closeAlignment: function() {
                        this.alignment = null, this.activeTarget = null;
                    },
                    handleAlignmentBoxResize: (Ae = function() {
                        null != this.activeTarget && (this.alnBoxOffset = de(this.activeTarget) + this.activeTarget.offsetHeight);
                    }, he = 32, pe = !1, function() {
                        var e = this, t = arguments, n = pe && !ge;
                        clearTimeout(ge), ge = setTimeout((function() {
                            ge = null, pe || Ae.apply(e, t);
                        }), he), n && Ae.apply(e, t);
                    })
                }
            };
            n(5264);
            var fe = n(6584), ve = n(6530), be = n(683), ye = n(9456), Ce = n(756), Me = n(7259), we = n(6640), xe = (0, 
            P.Z)(me, U, [], !1, null, null, null);
            Q()(xe, {
                VBtn: F.Z,
                VBtnToggle: fe.Z,
                VContainer: ve.Z,
                VFlex: be.Z,
                VIcon: W.Z,
                VLayout: ye.Z,
                VTab: Ce.Z,
                VTabs: Me.Z,
                VTooltip: we.Z
            }), xe.options.__file = "frontend/ResultView.vue";
            const Se = xe.exports;
            var Te = function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
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
                }), e._v("\n         \n        "), n("v-app-bar-title", {
                    staticClass: "ml-2"
                }, [ e._v(e._s(e.title)) ]), e._v(" "), n("v-spacer"), e._v(" "), n("v-file-input", {
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
                }), e._v(" "), n("v-toolbar-items", [ n("v-btn", {
                    attrs: {
                        text: ""
                    },
                    on: {
                        click: e.downloadData
                    }
                }, [ n("v-icon", [ e._v("\n                    " + e._s(e.$MDI.FileDownloadOutline) + "\n                ") ]) ], 1), e._v(" "), e._l(e.$STRINGS.NAV_URL_COUNT - 0, (function(t) {
                    return n("v-btn", {
                        key: t,
                        staticClass: "hidden-sm-and-down",
                        attrs: {
                            text: "",
                            rel: "external noopener",
                            target: "_blank",
                            href: e.$STRINGS["NAV_URL_" + t]
                        }
                    }, [ e._v(e._s(e.$STRINGS["NAV_TITLE_" + t])) ]);
                })) ], 2) ], 1), e._v(" "), e.hasMainContent ? [ e._t("default") ] : [ n("v-container", {
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
                }, [ e._v("\n                            No data loaded\n                        ") ]) ], 1) ], 1) ], 1) ], 1) ], e._v(" "), n("v-container", {
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
                }, [ e._v("Reference") ]) ]), e._v(" "), n("v-card-title", {
                    staticClass: "pt-0 mt-0",
                    attrs: {
                        "primary-title": ""
                    }
                }, [ n("p", {
                    staticClass: "text-subtitle-2 mb-0",
                    domProps: {
                        innerHTML: e._s(e.$STRINGS.CITATION)
                    }
                }) ]) ], 1) ], 1) ], 1) ], 1) ], 2);
            };
            Te._withStripped = !0;
            const Ie = {
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
                        var t = this;
                        if (e) {
                            var n = new FileReader;
                            n.addEventListener("load", (function(e) {
                                var n = JSON.parse(e.target.result);
                                t.$emit("uploadData", n);
                            })), n.readAsText(e);
                        }
                    },
                    downloadData: function() {
                        this.$emit("downloadData");
                    }
                }
            };
            n(4869), n(55);
            var Le = n(1690), Re = n(8895), Oe = n(36), ke = n(3845), De = (0, P.Z)(Ie, Te, [], !1, null, "1e22231c", null);
            Q()(De, {
                VAppBar: Le.Z,
                VAppBarTitle: Re.Z,
                VBtn: F.Z,
                VCard: Y.Z,
                VCardTitle: H.EB,
                VContainer: ve.Z,
                VFileInput: Oe.Z,
                VFlex: be.Z,
                VIcon: W.Z,
                VLayout: ye.Z,
                VSpacer: K.Z,
                VToolbarItems: ke.lj
            }), De.options.__file = "frontend/Local.vue";
            const Ee = De.exports, Ne = {
                name: "result",
                mixins: [ _ ],
                components: {
                    ResultView: Se,
                    Local: Ee
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
                            var t = document.getElementById("data");
                            if (!t) return null;
                            var n = JSON.parse(t.textContent);
                            e.fetchData(n);
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
                        S(this.hits, "".concat("foldmason", "-").concat(x(), ".json"));
                    },
                    resetProperties: function() {
                        this.ticket = "", this.error = "", this.mode = "", this.hits = null, this.selectedDatabases = 0, 
                        this.tableMode = 0;
                    },
                    fetchData: function(e) {
                        this.resetProperties(), this.hits = function(e) {
                            var t, n = [], r = b(e);
                            try {
                                for (r.s(); !(t = r.n()).done; ) {
                                    var a = t.value;
                                    n.push(w(a));
                                }
                            } catch (e) {
                                r.e(e);
                            } finally {
                                r.f();
                            }
                            return n;
                        }(e);
                    }
                }
            };
            n(2556), n(8973);
            var Be = (0, P.Z)(Ne, m, [], !1, null, "54679682", null);
            Q()(Be, {
                VTab: Ce.Z,
                VTabs: Me.Z
            }), Be.options.__file = "frontend/ResultLocal.vue";
            const qe = Be.exports;
            var Pe = function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("Local", {
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
                            return [ e.entries.length > 0 ? n("MSA", {
                                attrs: {
                                    entries: e.entries,
                                    scores: e.scores,
                                    statistics: e.statistics
                                }
                            }) : e._e() ];
                        },
                        proxy: !0
                    } ])
                });
            };
            Pe._withStripped = !0;
            var Ve = function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [ n("v-container", {
                    staticStyle: {
                        overflow: "visible",
                        height: "100%"
                    },
                    attrs: {
                        fluid: "",
                        "pa-2": ""
                    }
                }, [ n("v-row", {
                    staticStyle: {
                        height: "400px"
                    }
                }, [ n("v-col", {
                    attrs: {
                        "fill-height": ""
                    }
                }, [ n("v-card", {
                    staticStyle: {
                        height: "100%"
                    }
                }, [ n("v-card-title", [ e._v("Settings") ]), e._v(" "), n("v-card-text", [ n("v-simple-table", {
                    staticClass: "settings auto-height-table",
                    staticStyle: {
                        height: "100%"
                    },
                    attrs: {
                        id: "settings"
                    }
                }, [ n("tbody", [ n("tr", [ n("td", {
                    staticStyle: {
                        width: "50%",
                        "vertical-align": "middle"
                    }
                }, [ e._v("Display alphabet") ]), e._v(" "), n("td", {
                    staticClass: "settings-td",
                    staticStyle: {
                        width: "0px"
                    }
                }, [ n("v-select", {
                    staticStyle: {
                        "max-width": "200px",
                        "max-height": "40px",
                        "line-height": "40px",
                        border: "none"
                    },
                    attrs: {
                        items: e.alphabetOptions,
                        default: "aa",
                        "hide-details": "",
                        "single-line": "",
                        outlined: "",
                        dense: ""
                    },
                    model: {
                        value: e.alphabet,
                        callback: function(t) {
                            e.alphabet = t;
                        },
                        expression: "alphabet"
                    }
                }) ], 1) ]), e._v(" "), n("tr", [ n("td", {
                    staticStyle: {
                        width: "50%"
                    }
                }, [ e._v("Non-gap ratio") ]), e._v(" "), n("td", {
                    staticClass: "settings-td",
                    staticStyle: {
                        width: "200px"
                    }
                }, [ n("v-text-field", {
                    staticStyle: {
                        "max-width": "200px",
                        "max-height": "40px",
                        "line-height": "40px",
                        border: "none"
                    },
                    attrs: {
                        label: "0",
                        default: "0",
                        type: "number",
                        min: "0",
                        max: "1",
                        step: "0.01",
                        "single-line": "",
                        "hide-details": "",
                        outlined: "",
                        dense: ""
                    },
                    model: {
                        value: e.matchRatio,
                        callback: function(t) {
                            e.matchRatio = t;
                        },
                        expression: "matchRatio"
                    }
                }) ], 1) ]), e._v(" "), e.statistics.db ? n("tr", [ n("td", [ e._v("Database") ]), e._v(" "), n("td", {
                    attrs: {
                        id: "msa-database"
                    }
                }, [ e._v(e._s(e.statistics.db)) ]) ]) : e._e(), e._v(" "), e.statistics.msaFile ? n("tr", [ n("td", [ e._v("MSA file") ]), e._v(" "), n("td", {
                    attrs: {
                        id: "msa-file"
                    }
                }, [ e._v(e._s(e.statistics.msaFile)) ]) ]) : e._e(), e._v(" "), e.statistics.msaLDDT ? n("tr", [ n("td", [ e._v("MSA LDDT") ]), e._v(" "), n("td", {
                    attrs: {
                        id: "msa-lddt"
                    }
                }, [ e._v(e._s(e.statistics.msaLDDT)) ]) ]) : e._e() ]) ]) ], 1) ], 1) ], 1), e._v(" "), n("v-col", [ n("v-card", {
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
                }, [ e._v("Structure") ]), e._v(" "), e.structureViewerSelection ? n("div", {
                    staticStyle: {
                        padding: "10px",
                        height: "100%",
                        width: "100%"
                    }
                }, [ n("StructureViewerMSA", {
                    attrs: {
                        entries: e.structureViewerEntries,
                        reference: e.structureViewerReference
                    },
                    on: {
                        loadingChange: e.handleStructureLoadingChange
                    }
                }) ], 1) : n("v-card-text", [ e._v("\n                        No structures loaded.\n                    ") ]) ], 1) ], 1) ], 1), e._v(" "), n("v-card", {
                    staticClass: "minimap fill-height"
                }, [ e.cssGradients ? n("v-row", {
                    attrs: {
                        dense: ""
                    }
                }, e._l(e.cssGradients, (function(t, r) {
                    return n("v-col", {
                        key: "col-" + r,
                        staticClass: "gradient-block-col",
                        style: e.minimapBlock(r),
                        on: {
                            click: function(t) {
                                return e.handleMapBlockClick(r);
                            }
                        }
                    }, [ n("div", e._l(t, (function(e, t) {
                        return n("div", {
                            key: "gradient-" + t,
                            staticClass: "gradient-block"
                        }, [ n("div", {
                            style: {
                                width: "100%",
                                height: "3px",
                                "background-image": e
                            }
                        }) ]);
                    })), 0) ]);
                })), 1) : e._e() ], 1), e._v(" "), n("v-card", {
                    attrs: {
                        "pa-2": ""
                    }
                }, [ n("MSAView", {
                    ref: "msaView",
                    attrs: {
                        entries: e.msaViewEntries,
                        scores: e.msaViewScores,
                        alnLen: e.alnLen,
                        alphabet: e.alphabet,
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
            Ve._withStripped = !0;
            var _e = function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    staticClass: "msa-wrapper"
                }, e._l(e.blockRanges, (function(t, r) {
                    var a = t[0], i = t[1];
                    return n("div", {
                        staticClass: "msa-block"
                    }, e._l(e.getEntryRanges(a, i), (function(t, s) {
                        var o = t.name, l = t.aa, c = t.ss, u = t.css;
                        return n("div", {
                            staticClass: "msa-row"
                        }, [ n("span", {
                            staticClass: "header",
                            style: e.headerStyle(s),
                            on: {
                                click: function(t) {
                                    return e.handleClickHeader(t, s);
                                }
                            }
                        }, [ e._v(e._s(o.padStart(e.headerLen, " "))) ]), e._v(" "), n("div", {
                            staticClass: "sequence-wrapper"
                        }, [ n("span", {
                            staticClass: "sequence",
                            style: u
                        }, [ e._v(e._s("aa" === e.alphabet ? l : c)) ]) ]), e._v(" "), n("span", {
                            staticClass: "count"
                        }, [ e._v(e._s(e.countSequence(r, l, a, i).toString().padStart(e.countLen, " "))) ]) ]);
                    })), 0);
                })), 0);
            };
            _e._withStripped = !0;
            var Ue = n(2167), Ge = function() {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {
                    staticClass: "canvas-wrapper"
                }, [ t("canvas", {
                    ref: "canvas"
                }) ]);
            };
            Ge._withStripped = !0;
            var je = n(2982);
            function ze(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return Ze(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ze(e, t);
                    }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0, a = function() {};
                        return {
                            s: a,
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
                            f: a
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(e);
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        o = !0, i = e;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                };
            }
            function Ze(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            const Qe = {
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
                        var t = this.$refs.canvas, n = t.getContext("2d");
                        n.clearRect(0, 0, t.width, t.height);
                        for (var r = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "aa";
                            if (0 !== e.length) {
                                for (var n = [], r = e[0].aa.length, a = e.length, i = Math.log(20) - 1 / Math.log(2) * 19 / (2 * a), s = 0; s < r; s++) {
                                    for (var o = [], l = 0; l < a; l++) {
                                        var c = e[l][t][s];
                                        "-" !== c && (void 0 !== o[c] ? o[c]++ : o[c] = 1);
                                    }
                                    var u = 0;
                                    for (var d in o) o[d] = o[d] / a, u -= o[d] * Math.log(o[d]);
                                    var A = Math.abs(i - u), h = [];
                                    for (var p in o) h.push([ p, o[p] * A ]);
                                    h.sort((function(e, t) {
                                        return e[1] > t[1] ? 1 : -1;
                                    })), n.push(h);
                                }
                                return n;
                            }
                        }(e, this.alphabet), a = r.map((function(e) {
                            return e.reduce((function(e, t) {
                                var n = (0, f.Z)(t, 2);
                                n[0];
                                return e + n[1];
                            }), 0);
                        })), i = Math.max.apply(Math, (0, je.Z)(a)), s = 10, o = t.width / this.lineLen, l = 0; l < r.length; l++) {
                            var c, u = t.height, d = ze(r[l]);
                            try {
                                for (d.s(); !(c = d.n()).done; ) {
                                    var A = (0, f.Z)(c.value, 2), h = A[0], p = A[1] / i * t.height;
                                    n.save(), n.translate(s, u), n.scale(1, p / 16), n.fillStyle = this.$vuetify.theme.dark ? "white" : "black", 
                                    n.fillText(h, 0, 0), n.restore(), u -= p;
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
                    var e = this.$refs.canvas, t = e.getContext("2d");
                    e.width = 16 * this.lineLen, e.height = 100, t.font = "16px monospace", t.fillStyle = "red", 
                    t.clearRect(0, 0, e.width, e.height);
                }
            };
            n(5877);
            var Fe = (0, P.Z)(Qe, Ge, [], !1, null, null, null);
            Fe.options.__file = "frontend/SequenceLogo.vue";
            const Ye = Fe.exports;
            function He(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return We(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return We(e, t);
                    }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0, a = function() {};
                        return {
                            s: a,
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
                            f: a
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(e);
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        o = !0, i = e;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                };
            }
            function We(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            const Ke = {
                components: (0, Ue.Z)({
                    SequenceLogo: Ye
                }, "SequenceLogo", Ye),
                data: function() {
                    return {
                        mask: [],
                        lineLen: 80,
                        headerLen: null,
                        countLen: null
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
                    }
                },
                mounted: function() {
                    window.addEventListener("resize", k(this.handleResize, 100)), this.handleUpdateEntries(), 
                    this.handleResize(), this.emitGradients();
                },
                updated: function() {
                    this.handleResize(), this.emitGradients();
                },
                beforeDestroy: function() {
                    window.removeEventListener("resize", this.handleResize);
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
                        var e = document.querySelector(".msa-row");
                        return e ? e.querySelector(".sequence").scrollWidth : 0;
                    },
                    blockRanges: function() {
                        var e = this, t = Math.max(1, Math.ceil(this.alnLen / this.lineLen));
                        return Array.from({
                            length: t
                        }, (function(t, n) {
                            return [ n * e.lineLen, Math.min(e.alnLen, n * e.lineLen + e.lineLen) ];
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
                    handleClickHeader: function(e, t) {
                        e.altKey ? this.$emit("newStructureReference", t) : this.$emit("newStructureSelection", t);
                    },
                    getSequenceWidth: function() {
                        return document.querySelector(".msa-row").querySelector(".sequence").scrollWidth;
                    },
                    headerStyle: function(e) {
                        var t = this.selectedStructures.length > 0 && this.selectedStructures.includes(e);
                        return {
                            fontWeight: t ? "bold" : "normal",
                            color: this.selectedStructures.length > 0 && this.selectedStructures[this.referenceStructure] === e ? "#1E88E5" : t ? this.$vuetify.theme.dark ? "lightBlue" : "#e6ac00" : this.$vuetify.theme.dark ? "rgba(180, 180, 180, 1)" : "black"
                        };
                    },
                    handleUpdateEntries: function() {
                        var e = this;
                        this.headerLen = 0, this.countLen = 0, this.entries.forEach((function(t) {
                            e.headerLen = Math.max(e.headerLen, t.name.length);
                            var n, r = 0, a = He(t.aa);
                            try {
                                for (a.s(); !(n = a.n()).done; ) {
                                    "-" !== n.value && r++;
                                }
                            } catch (e) {
                                a.e(e);
                            } finally {
                                a.f();
                            }
                            e.countLen = Math.max(e.countLen, r.toString().length);
                        }));
                    },
                    handleResize: function() {
                        var e = document.querySelector(".msa-row"), t = e.querySelector(".header"), n = e.querySelector(".count"), r = e.querySelector(".sequence"), a = e.offsetWidth - t.scrollWidth - n.scrollWidth - 32, i = r.textContent, s = Math.abs(Math.ceil(i.length * (r.scrollWidth - a) / r.scrollWidth));
                        r.scrollWidth > a ? this.lineLen -= s : r.scrollWidth < a && (this.lineLen += s);
                    },
                    emitGradients: function() {
                        var e = document.getElementsByClassName("sequence");
                        this.$emit("cssGradients", Array.prototype.map.call(e, (function(e) {
                            return e.style["background-image"];
                        })));
                    },
                    percentageToColor: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 120, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return -1 === e ? this.$vuetify.theme.dark ? "rgba(180, 180, 180, 1)" : "rgba(0, 0, 0, 0)" : "hsl(".concat(e * (t - n) + n, ", 100%, 50%)");
                    },
                    getEntryRange: function(e, t, n) {
                        var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], a = {
                            name: e.name,
                            aa: e.aa.slice(t, n),
                            ss: e.ss.slice(t, n)
                        };
                        return r && (a.css = this.generateCSSGradient(t, n, a.aa)), a;
                    },
                    getEntryRanges: function(e, t) {
                        var n = this, r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        return Array.from(this.entries, (function(a) {
                            return n.getEntryRange(a, e, t, r);
                        }));
                    },
                    countSequence: function(e, t) {
                        var n = t.split("-").length - 1;
                        return e * this.lineLen + this.lineLen - n;
                    },
                    generateCSSGradient: function(e, t, n) {
                        var r = this;
                        if (!this.scores) return null;
                        for (var a = this.scores.slice(e, t).map((function(e) {
                            return r.percentageToColor(parseFloat(e));
                        })), i = 0; i < n.length; i++) "-" === n[i] && (a[i] = this.$vuetify.theme.dark ? "rgba(100, 100, 100, 0.4)" : "rgba(0, 0, 0, 0)");
                        for (var s = 100 / a.length, o = "linear-gradient(to right", l = 0, c = s, u = 0; u < a.length; u++) c = u === a.length - 1 ? 100 : l + s, 
                        o += ", ".concat(a[u], " ").concat(l, "%, ").concat(a[u], " ").concat(c, "%"), l = c;
                        return {
                            backgroundImage: o += ")",
                            backgroundSize: "calc(100% - 2px) 100%",
                            backgroundPosition: "left top",
                            backgroundAttachment: "scroll",
                            backgroundClip: this.backgroundClip,
                            color: this.sequenceColor,
                            fontWeight: this.fontWeight
                        };
                    }
                }
            };
            n(1574);
            var Je = (0, P.Z)(Ke, _e, [], !1, null, null, null);
            Je.options.__file = "frontend/MSAView.vue";
            const Xe = Je.exports;
            var $e = function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return "tCa" in e.alignment ? n("div", {
                    staticClass: "structure-panel"
                }, [ n("StructureViewerTooltip", {
                    attrs: {
                        attach: ".structure-panel"
                    }
                }), e._v(" "), n("div", {
                    ref: "structurepanel",
                    staticClass: "structure-wrapper"
                }, [ e.tmAlignResults ? n("table", e._b({
                    staticClass: "tmscore-panel"
                }, "table", e.tmPanelBindings, !1), [ n("tr", [ n("td", {
                    staticClass: "left-cell"
                }, [ e._v("TM-Score:") ]), e._v(" "), n("td", {
                    staticClass: "right-cell"
                }, [ e._v(e._s(e.tmAlignResults.tmScore)) ]) ]), e._v(" "), n("tr", [ n("td", {
                    staticClass: "left-cell"
                }, [ e._v("RMSD:") ]), e._v(" "), n("td", {
                    staticClass: "right-cell"
                }, [ e._v(e._s(e.tmAlignResults.rmsd)) ]) ]) ]) : e._e(), e._v(" "), n("StructureViewerToolbar", {
                    attrs: {
                        isFullscreen: e.isFullscreen,
                        showQuery: e.showQuery,
                        showTarget: e.showTarget,
                        showArrows: e.showArrows
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
                }), e._v(" "), n("div", {
                    ref: "viewport",
                    staticClass: "structure-viewer"
                }) ], 1) ], 1) : e._e();
            };
            $e._withStripped = !0;
            var et = n(531), tt = n(4687), nt = n.n(tt), rt = function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("v-tooltip", {
                    attrs: {
                        "open-delay": "300",
                        top: "",
                        attach: e.attach,
                        "nudge-left": "25",
                        "background-color": "transparent"
                    },
                    scopedSlots: e._u([ {
                        key: "activator",
                        fn: function(t) {
                            var r = t.on;
                            return [ n("v-icon", e._g({
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
                }, [ e._v(" "), n("span", [ n("dl", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [ n("dt", [ n("svg", e._b({}, "svg", e.svgProps, !1), [ n("title", [ e._v("Left click") ]), e._v(" "), n("path", {
                    attrs: {
                        d: "M25.6 5.8a5 5 0 0 0-5-4.8h-9.1a5 5 0 0 0-5.1 4.8v20.4a5 5 0 0 0 5 4.8h9.1a5 5 0 0 0 5.1-4.8V5.8Zm-1 9.5v10.9a4 4 0 0 1-4 3.8h-9.1a4 4 0 0 1-4-3.8V15.3h17ZM15.5 2v12.3h-8V5.8a4 4 0 0 1 4-3.8h4Zm1 0h4a4 4 0 0 1 4 3.8v8.5h-8V2Z"
                    }
                }), e._v(" "), n("path", {
                    staticStyle: {
                        fill: "red"
                    },
                    attrs: {
                        id: "left",
                        d: "M15.5 2v12.3h-8V5.8a4 4 0 0 1 4-3.8h4Z"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        id: "middle-inactive",
                        d: "M14.6 4h2.8v8h-2.8z"
                    }
                }) ]) ]), e._v(" "), n("dd", [ e._v("\n                Rotate\n            ") ]), e._v(" "), n("dt", [ n("svg", e._b({}, "svg", e.svgProps, !1), [ n("title", [ e._v("Right click") ]), e._v(" "), n("path", {
                    attrs: {
                        d: "M25.6 5.8a5 5 0 0 0-5-4.8h-9.1a5 5 0 0 0-5.1 4.8v20.4a5 5 0 0 0 5 4.8h9.1a5 5 0 0 0 5.1-4.8V5.8Zm-1 9.5v10.9a4 4 0 0 1-4 3.8h-9.1a4 4 0 0 1-4-3.8V15.3h17ZM15.5 2v12.3h-8V5.8a4 4 0 0 1 4-3.8h4Zm1 0h4a4 4 0 0 1 4 3.8v8.5h-8V2Z"
                    }
                }), e._v(" "), n("path", {
                    staticStyle: {
                        fill: "red"
                    },
                    attrs: {
                        id: "right",
                        d: "M16.5 2h4a4 4 0 0 1 4 3.8v8.5h-8V2Z"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        id: "middle-inactive",
                        d: "M14.6 4h2.8v8h-2.8z"
                    }
                }) ]) ]), e._v(" "), n("dd", [ e._v("\n                Pan\n            ") ]), e._v(" "), n("dt", [ n("svg", e._b({}, "svg", e.svgProps, !1), [ n("title", [ e._v("Scroll wheel") ]), e._v(" "), n("path", {
                    attrs: {
                        d: "M25.6 5.8a5 5 0 0 0-5-4.8h-9.1a5 5 0 0 0-5.1 4.8v20.4a5 5 0 0 0 5 4.8h9.1a5 5 0 0 0 5.1-4.8V5.8Zm-1 9.5v10.9a4 4 0 0 1-4 3.8h-9.1a4 4 0 0 1-4-3.8V15.3h17ZM15.5 2v12.3h-8V5.8a4 4 0 0 1 4-3.8h4Zm1 0h4a4 4 0 0 1 4 3.8v8.5h-8V2Z"
                    }
                }), e._v(" "), n("path", {
                    staticStyle: {
                        fill: "red"
                    },
                    attrs: {
                        id: "middle-active",
                        d: "M14.6 4h2.8v8h-2.8z"
                    }
                }) ]) ]), e._v(" "), n("dd", [ e._v("\n                Zoom\n            ") ]) ]) ]) ]);
            };
            rt._withStripped = !0;
            const at = {
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
            var it = (0, P.Z)(at, rt, [], !1, null, null, null);
            Q()(it, {
                VIcon: W.Z,
                VTooltip: we.Z
            }), it.options.__file = "frontend/StructureViewerTooltip.vue";
            const st = it.exports;
            var ot = function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    staticClass: "toolbar-panel"
                }, [ n("v-item-group", {
                    staticClass: "v-btn-toggle",
                    attrs: {
                        light: e.isFullscreen
                    }
                }, [ e.disablePDBButton ? e._e() : n("v-btn", e._b({
                    attrs: {
                        title: "Save PDB"
                    },
                    on: {
                        click: e.handleClickMakePDB
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ n("v-icon", e._b({}, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.SavePDB)) ]), e._v(" "), e.isFullscreen ? n("span", [ e._v(" Save PDB") ]) : e._e() ], 1), e._v(" "), e.disableImageButton ? e._e() : n("v-btn", e._b({
                    attrs: {
                        title: "Save image"
                    },
                    on: {
                        click: e.handleClickMakeImage
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ n("v-icon", e._b({}, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.SavePNG)) ]), e._v(" "), e.isFullscreen ? n("span", [ e._v(" Save image") ]) : e._e() ], 1), e._v(" "), e.disableQueryButton ? e._e() : n("v-btn", e._b({
                    attrs: {
                        title: "Toggle between the entire query structure and aligned region"
                    },
                    on: {
                        click: e.handleClickCycleQuery
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ 0 === e.showQuery ? n("v-icon", e._b({
                    staticStyle: {
                        color: "#1E88E5"
                    }
                }, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$LOCAL ? e.$MDI.CircleHalf : e.$MDI.CircleOneThird)) ]) : e.$LOCAL || 1 !== e.showQuery ? n("v-icon", e._b({
                    staticStyle: {
                        color: "#1E88E5"
                    }
                }, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.Circle)) ]) : n("v-icon", e._b({
                    staticStyle: {
                        color: "#1E88E5"
                    }
                }, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.CircleTwoThird)) ]), e._v(" "), e.isFullscreen ? n("span", [ e._v(" Toggle full query") ]) : e._e() ], 1), e._v(" "), e.disableTargetButton ? e._e() : n("v-btn", e._b({
                    attrs: {
                        title: "Toggle between the entire target structure and aligned region"
                    },
                    on: {
                        click: e.handleClickToggleTarget
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ "aligned" == e.showTarget ? n("v-icon", e._b({
                    staticStyle: {
                        color: "#FFC107"
                    }
                }, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.CircleHalf)) ]) : n("v-icon", e._b({
                    staticStyle: {
                        color: "#FFC107"
                    }
                }, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.Circle)) ]), e._v(" "), e.isFullscreen ? n("span", [ e._v(" Toggle full target") ]) : e._e() ], 1), e._v(" "), e.disableArrowButton ? e._e() : n("v-btn", e._b({
                    attrs: {
                        title: "Draw arrows between aligned residues"
                    },
                    on: {
                        click: e.handleClickToggleArrows
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ e.showArrows ? n("v-icon", e._b({}, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.ArrowRightCircle)) ]) : n("v-icon", e._b({}, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.ArrowRightCircleOutline)) ]), e._v(" "), e.isFullscreen ? n("span", [ e._v(" Toggle arrows") ]) : e._e() ], 1), e._v(" "), e.disableResetButton ? e._e() : n("v-btn", e._b({
                    attrs: {
                        title: "Reset the view to the original position and zoom level"
                    },
                    on: {
                        click: e.handleClickResetView
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ n("v-icon", e._b({}, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.Restore)) ]), e._v(" "), e.isFullscreen ? n("span", [ e._v(" Reset view") ]) : e._e() ], 1), e._v(" "), e.disableSpinButton ? e._e() : n("v-btn", e._b({
                    attrs: {
                        title: "Toggle spinning structure"
                    },
                    on: {
                        click: e.handleClickSpin
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ n("v-icon", e._b({}, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.AxisZRotateCounterclockwise)) ]), e._v(" "), e.isFullscreen ? n("span", [ e._v(" Toggle spin") ]) : e._e() ], 1), e._v(" "), e.disableFullscreenButton ? e._e() : n("v-btn", e._b({
                    attrs: {
                        title: "Enter fullscreen mode - press ESC to exit"
                    },
                    on: {
                        click: e.handleClickFullscreen
                    }
                }, "v-btn", e.toolbarButtonProps, !1), [ n("v-icon", e._b({}, "v-icon", e.toolbarIconProps, !1), [ e._v(e._s(e.$MDI.Fullscreen)) ]), e._v(" "), e.isFullscreen ? n("span", [ e._v(" Fullscreen") ]) : e._e() ], 1) ], 1) ], 1);
            };
            ot._withStripped = !0;
            const lt = {
                props: {
                    showQuery: {
                        type: Number,
                        default: 0
                    },
                    showArrows: {
                        type: Boolean,
                        default: !1
                    },
                    showTarget: {
                        type: String,
                        default: "aligned"
                    },
                    isFullscreen: {
                        type: Boolean,
                        default: !1
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
            var ct = n(639), ut = (0, P.Z)(lt, ot, [], !1, null, null, null);
            Q()(ut, {
                VBtn: F.Z,
                VIcon: W.Z,
                VItemGroup: ct.Z
            }), ut.options.__file = "frontend/StructureViewerToolbar.vue";
            const dt = ut.exports, At = {
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
                        window.addEventListener("resize", this.handleResize), this.stage = new v.Hf(this.$refs.viewport, this.stageParameters), 
                        this.stage.signals.fullscreenChanged.add((function(t) {
                            t ? (e.stage.viewer.setBackground("#ffffff"), e.stage.viewer.setLight(void 0, void 0, void 0, .2), 
                            e.isFullscreen = !0) : (e.stage.viewer.setBackground(e.bgColor), e.stage.viewer.setLight(void 0, void 0, void 0, e.ambientIntensity), 
                            e.isFullscreen = !1);
                        })), this.stage.setSpin(this.isSpinning);
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
            var ht = (0, P.Z)(At, undefined, undefined, !1, null, null, null);
            ht.options.__file = "frontend/StructureViewerMixin.vue";
            const pt = ht.exports;
            var gt = n(7895), mt = n(1434);
            function ft(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return vt(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vt(e, t);
                    }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0, a = function() {};
                        return {
                            s: a,
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
                            f: a
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i, s = !0, o = !1;
                return {
                    s: function() {
                        n = n.call(e);
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        o = !0, i = e;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                };
            }
            function vt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            var bt = function(e, t) {
                var n = e.getResidueProxy(), r = e.getAtomProxy();
                return n.index = t, r.index = n.getAtomIndexByName("CA"), [ r.x, r.y, r.z ];
            }, yt = function(e, t) {
                var n = new Map, r = 1;
                return e.eachResidue((function(e) {
                    n.set(r++, {
                        index: e.index,
                        resno: e.resno
                    });
                }), new v.Y1(t)), n;
            };
            const Ct = {
                name: "StructureViewer",
                components: {
                    Panel: $,
                    StructureViewerTooltip: st,
                    StructureViewerToolbar: dt
                },
                mixins: [ pt ],
                data: function() {
                    return {
                        qChainResMap: null,
                        qMatches: [],
                        queryChain: "",
                        queryRepr: null,
                        selection: null,
                        showArrows: !1,
                        showQuery: 0,
                        showTarget: "aligned",
                        tMatches: [],
                        targetRepr: null,
                        tmAlignResults: null
                    };
                },
                props: {
                    alignment: {
                        type: Object
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
                    queryMap: {
                        type: Array,
                        default: null
                    },
                    targetMap: {
                        type: Array,
                        default: null
                    },
                    hits: {
                        type: Object
                    }
                },
                methods: {
                    saveMatchingResidues: function(e, t, n, r) {
                        var a = this;
                        if (e.length === t.length) {
                            this.qMatches = [], this.tMatches = [];
                            for (var i = function() {
                                if ("-" === e[s] || "-" === t[s]) return 0;
                                var i = a.qChainResMap.get(a.queryMap[s]);
                                if (void 0 === i) return 0;
                                var o = a.targetMap[s] - 1;
                                a.qMatches.push({
                                    index: i.index,
                                    xyz: function() {
                                        return bt(n, i.index);
                                    }
                                }), a.tMatches.push({
                                    index: o,
                                    xyz: function() {
                                        return bt(r, o);
                                    }
                                });
                            }, s = 0; s < e.length; s++) i();
                        }
                    },
                    handleToggleArrows: function() {
                        this.stage && (this.showArrows = !this.showArrows);
                    },
                    handleToggleQuery: function() {
                        this.stage && (this.showQuery = 0 === this.showQuery ? 1 : 0);
                    },
                    handleToggleTarget: function() {
                        this.stage && (this.showTarget = "aligned" === this.showTarget ? "full" : "aligned");
                    },
                    setSelectionByRange: function(e, t) {
                        this.targetRepr && (this.targetRepr.setSelection("".concat(e, "-").concat(t)), this.stage.autoView(100));
                    },
                    setSelectionData: function(e, t) {
                        this.selection = [ e, t ];
                    },
                    setSelection: function(e) {
                        "full" === e ? this.setSelectionData(1, this.alignment.dbLen) : this.setSelectionData(this.alignment.dbStartPos, this.alignment.dbEndPos);
                    },
                    setQuerySelection: function() {
                        this.queryRepr && (this.queryRepr.setSelection(this.querySele), this.stage.autoView(100));
                    },
                    renderArrows: function() {
                        if (this.stage) {
                            this.arrowShape && this.arrowShape.dispose();
                            for (var e = new Array, t = 0; t < this.tMatches.length; t++) {
                                var n = this.qMatches[t], r = this.tMatches[t];
                                (!this.selection || r.index >= this.selection[0] - 1 && r.index < this.selection[1]) && e.push([ n.xyz(), r.xyz() ]);
                            }
                            this.arrowShape = this.stage.addComponentFromObject(function(e) {
                                for (var t = new v.bn("shape"), n = 0; n < e.length; n++) {
                                    var r = (0, f.Z)(e[n], 2), a = r[0], i = r[1];
                                    t.addArrow(a, i, [ 0, 1, 1 ], .4);
                                }
                                return t;
                            }(e)), this.arrowShape.addRepresentation("buffer"), this.arrowShape.setVisibility(this.showArrows);
                        }
                    },
                    makeImage: function() {
                        var e = this;
                        if (this.stage) {
                            var t = null;
                            if (this.queryRepr) {
                                var n = this.hits.query.header.indexOf(" ");
                                t = -1 === n ? this.hits.query.header : this.hits.query.header.substring(0, n);
                            }
                            this.stage.viewer.setLight(void 0, void 0, void 0, .2), this.stage.makeImage({
                                trim: !0,
                                factor: this.isFullscreen ? 1 : 8,
                                antialias: !0,
                                transparent: !0
                            }).then((function(n) {
                                e.stage.viewer.setLight(void 0, void 0, void 0, e.$vuetify.theme.dark ? .4 : .2), 
                                (0, v.LR)(n, (t ? qAccession + "-" : "") + e.alignment.target + ".png");
                            }));
                        }
                    },
                    makePdb: function() {
                        if (this.stage) {
                            var e, t, n, r = null;
                            if (this.queryRepr) {
                                e = (e = new v.p8(this.queryRepr.repr.structure, {
                                    renumberSerial: !1
                                }).getData()).split("\n").filter((function(e) {
                                    return e.startsWith("ATOM");
                                })).join("\n");
                                var a = this.hits.query.header.indexOf(" ");
                                r = -1 === a ? this.hits.query.header : this.hits.query.header.substring(0, a);
                            }
                            this.targetRepr && (t = (t = new v.p8(this.targetRepr.repr.structure, {
                                renumberSerial: !1
                            }).getData()).split("\n").filter((function(e) {
                                return e.startsWith("ATOM");
                            })).join("\n")), (e || t) && (n = e && t ? "TITLE     ".concat(r, " - ").concat(this.alignment.target, "\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms might have been re-generated by PULCHRA,\nREMARK              if they are not present in the original PDB file.\nMODEL        1\n").concat(e, "\nENDMDL\nMODEL        2\n").concat(t, "\nENDMDL\nEND\n") : "TITLE     ".concat(this.alignment.target, "\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms were re-generated by PULCHRA.\nMODEL        1\n").concat(t, "\nENDMDL\nEND\n"), 
                            (0, v.LR)(new Blob([ n ], {
                                type: "text/plain"
                            }), (r ? r + "-" : "") + this.alignment.target + ".pdb"));
                        }
                    }
                },
                watch: {
                    showTarget: function(e, t) {
                        this.setSelection(e);
                    },
                    showArrows: function(e, t) {
                        this.stage && this.arrowShape && this.arrowShape.setVisibility(e);
                    },
                    selection: function(e) {
                        var t = (0, f.Z)(e, 2), n = t[0], r = t[1];
                        this.setSelectionByRange(n, r), this.renderArrows();
                    },
                    showQuery: function() {
                        this.stage && this.setQuerySelection();
                    }
                },
                computed: {
                    queryChainId: function() {
                        return this.queryChain ? this.queryChain.charCodeAt(0) - "A".charCodeAt(0) : "A";
                    },
                    queryChainSele: function() {
                        return this.queryChain ? "(:".concat(this.queryChain.toUpperCase(), " OR :").concat(this.queryChain.toLowerCase(), ")") : "";
                    },
                    querySubSele: function() {
                        if (!this.qChainResMap) return "";
                        var e = this.qChainResMap.get(this.alignment.qStartPos), t = this.qChainResMap.get(this.alignment.qEndPos), n = "".concat(e.resno, "-").concat(t.resno);
                        return this.queryChain && (n = "".concat(n, " AND ").concat(this.queryChainSele)), 
                        n;
                    },
                    querySele: function() {
                        return 0 == this.showQuery ? this.querySubSele : 1 == this.showQuery ? this.queryChainSele : "";
                    },
                    targetSele: function() {
                        return this.selection ? "".concat(this.selection[0], "-").concat(this.selection[1]) : "";
                    },
                    tmPanelBindings: function() {
                        return this.isFullscreen ? {
                            style: "margin-top: 10px; font-size: 2em; line-height: 2em"
                        } : {};
                    }
                },
                beforeMount: function() {
                    var e = this.hits.query.header.match(/_([A-Z]+?)/m);
                    e && (this.queryChain = e[1]);
                },
                mounted: function() {
                    var e = this;
                    return (0, et.Z)(nt().mark((function t() {
                        var n, r, a, i, s, o, l, c, u, d, A, h, p, g, m, f;
                        return nt().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (void 0 !== e.alignment.tCa) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, (0, gt.n)(R(e.alignment.tCa, e.alignment.tSeq));

                              case 4:
                                return n = t.sent, t.next = 7, e.stage.loadFile(new Blob([ n ], {
                                    type: "text/plain"
                                }), {
                                    ext: "pdb",
                                    firstModelOnly: !0
                                });

                              case 7:
                                if (r = t.sent, e.targetSchemeId = v.Ub.addSelectionScheme([ [ e.targetAlignedColor, "".concat(e.alignment.dbStartPos, "-").concat(e.alignment.dbEndPos) ], [ e.targetUnalignedColor, "*" ] ], "_targetScheme"), 
                                a = "", i = !0, !e.$LOCAL) {
                                    t.next = 21;
                                    break;
                                }
                                if (!e.hits.query.hasOwnProperty("pdb")) {
                                    t.next = 16;
                                    break;
                                }
                                a = JSON.parse(e.hits.query.pdb), t.next = 19;
                                break;

                              case 16:
                                return t.next = 18, (0, gt.n)(R(e.hits.query.qCa, e.hits.query.sequence));

                              case 18:
                                a = t.sent;

                              case 19:
                                t.next = 43;
                                break;

                              case 21:
                                if (!e.$route.params.ticket.startsWith("user")) {
                                    t.next = 32;
                                    break;
                                }
                                if (!e.hits.query.hasOwnProperty("pdb")) {
                                    t.next = 26;
                                    break;
                                }
                                a = JSON.parse(e.hits.query.pdb), t.next = 30;
                                break;

                              case 26:
                                return s = e.$root.userData[e.$route.params.entry], t.next = 29, (0, gt.n)(R(s.query.qCa, s.query.sequence));

                              case 29:
                                a = t.sent;

                              case 30:
                                t.next = 43;
                                break;

                              case 32:
                                return t.prev = 32, t.next = 35, e.$axios.get("api/result/" + e.$route.params.ticket + "/query");

                              case 35:
                                o = t.sent, a = o.data, t.next = 43;
                                break;

                              case 39:
                                t.prev = 39, t.t0 = t.catch(32), a = "", i = !1;

                              case 43:
                                if (!i) {
                                    t.next = 67;
                                    break;
                                }
                                l = "", c = ft(a.split("\n"));
                                try {
                                    for (c.s(); !(u = c.n()).done; ) d = u.value, A = Math.max(0, 80 - d.length), h = d + " ".repeat(A) + "\n", 
                                    l += h;
                                } catch (e) {
                                    c.e(e);
                                } finally {
                                    c.f();
                                }
                                return a = l, t.next = 50, e.stage.loadFile(new Blob([ a ], {
                                    type: "text/plain"
                                }), {
                                    ext: "pdb",
                                    firstModelOnly: !0
                                });

                              case 50:
                                if (!(p = t.sent) || !p.structure.getAtomProxy().isCg()) {
                                    t.next = 58;
                                    break;
                                }
                                return t.next = 54, (0, gt.n)(a);

                              case 54:
                                return a = t.sent, t.next = 57, e.stage.loadFile(new Blob([ a ], {
                                    type: "text/plain"
                                }), {
                                    ext: "pdb",
                                    firstModelOnly: !0
                                });

                              case 57:
                                p = t.sent;

                              case 58:
                                e.qChainResMap = yt(p.structure, e.queryChainSele), e.saveMatchingResidues(e.alignment.qAln, e.alignment.dbAln, p.structure, r.structure), 
                                e.querySchemeId = v.Ub.addSelectionScheme([ [ e.queryAlignedColor, e.querySubSele ], [ e.queryUnalignedColor, "*" ] ], "_queryScheme"), 
                                g = L(p.structure, e.querySubSele), m = L(r.structure, "".concat(e.alignment.dbStartPos, "-").concat(e.alignment.dbEndPos)), 
                                f = ">target\n".concat(e.alignment.dbAln, "\n\n>query\n").concat(e.alignment.qAln), 
                                (0, mt.Mb)(m, g, f).then((function(t) {
                                    e.tmAlignResults = (0, mt.Qc)(t.output);
                                    var n = (0, mt.im)(t.matrix), a = n.t, i = n.u;
                                    O(r.structure, a, i), e.queryRepr = p.addRepresentation(e.qRepr, {
                                        color: e.querySchemeId
                                    }), e.targetRepr = r.addRepresentation(e.tRepr, {
                                        color: e.targetSchemeId
                                    });
                                })).then((function() {
                                    e.setSelection(e.showTarget), e.setQuerySelection(), e.stage.autoView();
                                })), t.next = 71;
                                break;

                              case 67:
                                e.targetRepr = r.addRepresentation(e.tRepr, {
                                    color: e.targetSchemeId
                                }), e.setSelection(e.showTarget), e.setQuerySelection(), e.stage.autoView();

                              case 71:
                              case "end":
                                return t.stop();
                            }
                        }), t, null, [ [ 32, 39 ] ]);
                    })))();
                }
            };
            n(9121), n(6226);
            var Mt = (0, P.Z)(Ct, $e, [], !1, null, "739834d6", null);
            Mt.options.__file = "frontend/StructureViewer.vue";
            const wt = Mt.exports;
            var xt = function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    staticClass: "structure-panel"
                }, [ n("StructureViewerTooltip", {
                    attrs: {
                        attach: ".structure-panel"
                    }
                }), e._v(" "), n("div", {
                    ref: "structurepanel",
                    staticClass: "structure-wrapper"
                }, [ n("StructureViewerToolbar", {
                    staticStyle: {
                        position: "absolute",
                        bottom: "8px"
                    },
                    attrs: {
                        isFullscreen: e.isFullscreen,
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
                }), e._v(" "), n("div", {
                    ref: "viewport",
                    staticClass: "structure-viewer"
                }) ], 1) ], 1);
            };
            function St(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }))), n.push.apply(n, r);
                }
                return n;
            }
            function Tt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? St(Object(n), !0).forEach((function(t) {
                        (0, Ue.Z)(e, t, n[t]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : St(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    }));
                }
                return e;
            }
            function It(e, t) {
                for (var n, r = t.slice(), a = 0; a < 3; a++) r[a].push(e[a]);
                var i = new v.yG, s = (n = []).concat.apply(n, (0, je.Z)(r).concat([ [ 0, 0, 0, 1 ] ]));
                return i.set.apply(i, (0, je.Z)(s)), i;
            }
            function Lt(e, t) {
                for (var n = {
                    backtrace: "",
                    qAln: "",
                    dbAln: ""
                }, r = !1, a = 0, i = 0, s = 0, o = "", l = ""; a < e.length; ) {
                    var c = e[a], u = t[a];
                    "-" === c && "-" === u || ("-" === c ? (r && (n.backtrace += "D", o += c, l += u), 
                    ++s) : "-" === u ? (r && (n.backtrace += "I", o += c, l += u), ++i) : (r ? (n.qAln += o, 
                    n.dbAln += l, o = "", l = "") : (r = !0, n.qStartPos = i, n.dbStartPos = s), n.backtrace += "M", 
                    o += c, l += u, n.qEndPos = i, n.dbEndPos = s, ++i, ++s)), ++a;
                }
                return n.qStartPos++, n.dbStartPos++, n.qSeq = e.replace(/-/g, ""), n.tSeq = t.replace(/-/g, ""), 
                n;
            }
            function Rt(e, t, n) {
                var r = [], a = [], i = [], s = {}, o = new Set(t);
                return e.forEach((function(e, t) {
                    if (t === n) return s.item = e, void (o.has(e) ? (s.status = "update", o.delete(e)) : s.status = "new");
                    o.has(e) ? (r.push(e), o.delete(e)) : i.push(e);
                })), a.push.apply(a, (0, je.Z)(o)), {
                    update: r,
                    remove: a,
                    add: i,
                    reference: s
                };
            }
            xt._withStripped = !0;
            const Ot = {
                name: "StructureViewerMSA",
                components: {
                    StructureViewerToolbar: dt,
                    StructureViewerTooltip: st
                },
                mixins: [ pt ],
                data: function() {
                    return {
                        structures: [],
                        curReferenceIndex: 0,
                        oldReference: ""
                    };
                },
                props: {
                    entries: {
                        type: Array
                    },
                    reference: {
                        type: Number
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
                                opacity: .5
                            };
                        }
                    }
                },
                methods: {
                    resetView: function() {
                        this.stage && (this.structures.length > 0 ? this.structures[this.curReferenceIndex].structure.autoView(this.transitionDuration) : this.stage.autoView(this.transitionDuration));
                    },
                    makePDB: function() {
                        if (this.stage) {
                            var e, t = "TITLE     Superposed structures from Foldmason alignment\nREMARK    This file was generated by the FoldMason webserver:\nREMARK      https://mason.foldseek.com\nREMARK    Please cite:\nREMARK      <insert citation>\nREMARK    Warning: Non C-alpha atoms may have been re-generated by PULCHRA\nREMARK             if they are not present in the original PDB file.\n";
                            this.structures.forEach((function(n, r) {
                                e = (e = new v.p8(n.structure.structure, {
                                    renumberSerial: !1
                                }).getData()).split("\n").filter((function(e) {
                                    return e.startsWith("ATOM");
                                })).join("\n"), t += "MODEL     ".concat(r, "\nREMARK    Name: ").concat(n.name, "\n").concat(e, "\nENDMDL\n");
                            })), t += "END", (0, v.LR)(new Blob([ t ], {
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
                        }).then((function(t) {
                            e.stage.viewer.setLight(void 0, void 0, void 0, e.$vuetify.theme.dark ? .4 : .2), 
                            (0, v.LR)(t, "foldmason.png");
                        })));
                    },
                    tmAlignToReference: function(e) {
                        var t = this;
                        return (0, et.Z)(nt().mark((function n() {
                            var r, a, i, s, o, l, c, u, d, A, h, p, g, m, v;
                            return nt().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (e !== t.curReferenceIndex) {
                                        n.next = 2;
                                        break;
                                    }
                                    return n.abrupt("return");

                                  case 2:
                                    return r = t.structures[t.curReferenceIndex].structure, a = Lt(t.structures[t.curReferenceIndex].aa, t.structures[e].aa), 
                                    i = ">target\n".concat(a.dbAln, "\n\n>query\n").concat(a.qAln), s = t.structures[e].structure, 
                                    n.next = 8, Promise.all([ L(r.structure, a ? "".concat(a.qStartPos, "-").concat(a.qEndPos) : ""), L(s.structure, a ? "".concat(a.dbStartPos, "-").concat(a.dbEndPos) : "") ]);

                                  case 8:
                                    return o = n.sent, l = (0, f.Z)(o, 2), c = l[0], u = l[1], n.next = 14, (0, mt.Mb)(u, c, i);

                                  case 14:
                                    return d = n.sent, A = d.output, h = d.matrix, p = (0, mt.im)(h), g = p.t, m = p.u, 
                                    v = (0, mt.Qc)(A), n.abrupt("return", Promise.resolve({
                                        matrix: It(g, m),
                                        tmResults: v,
                                        alignment: a
                                    }));

                                  case 20:
                                  case "end":
                                    return n.stop();
                                }
                            }), n);
                        })))();
                    },
                    addStructureToStage: function(e) {
                        var t = this;
                        return (0, et.Z)(nt().mark((function n() {
                            var r, a, i, s, o, l;
                            return nt().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return r = e.name, a = e.aa, i = e.ca, s = t.structures.push(Tt({}, e)) - 1, n.next = 4, 
                                    (0, gt.n)(R(i, a.replace(/-/g, "")));

                                  case 4:
                                    return o = n.sent, n.next = 7, t.stage.loadFile(new Blob([ o ], {
                                        type: "text/plain"
                                    }), {
                                        ext: "pdb",
                                        firstModelOnly: !0,
                                        name: r
                                    });

                                  case 7:
                                    return l = n.sent, t.structures[s].index = s, t.structures[s].structure = l, n.abrupt("return", s);

                                  case 11:
                                  case "end":
                                    return n.stop();
                                }
                            }), n);
                        })))();
                    },
                    shiftStructure: function(e, t, n) {
                        var r = this;
                        return (0, et.Z)(nt().mark((function a() {
                            var i, s, o, l, c, u;
                            return nt().wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    i = e.structure, s = i.position, o = s.x, l = s.y, c = s.z, u = t * n, i.setPosition({
                                        x: o + u,
                                        y: l + u,
                                        z: c + u
                                    }), r.stage.viewer.requestRender();

                                  case 5:
                                  case "end":
                                    return a.stop();
                                }
                            }), a);
                        })))();
                    },
                    explode: function(e) {
                        var t = this;
                        return (0, et.Z)(nt().mark((function n() {
                            return nt().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (t.stage) {
                                        n.next = 2;
                                        break;
                                    }
                                    return n.abrupt("return");

                                  case 2:
                                    t.structures.forEach((function(n, r) {
                                        return t.shiftStructure(n, r, e);
                                    })), t.stage.autoView();

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }), n);
                        })))();
                    },
                    updateEntries: function(e, t) {
                        var n = this;
                        return (0, et.Z)(nt().mark((function r() {
                            var a, i, s, o, l, c, u, d;
                            return nt().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    if (n.stage) {
                                        r.next = 2;
                                        break;
                                    }
                                    return r.abrupt("return");

                                  case 2:
                                    if (a = Rt(e, t, n.reference), i = a.update, s = a.remove, o = a.add, l = a.reference, 
                                    c = 0 === Object.keys(l).length, u = c || l.item.name !== n.oldReference, n.oldReference = c ? "" : l.item.name, 
                                    c || !u) {
                                        r.next = 19;
                                        break;
                                    }
                                    if ("update" !== l.status) {
                                        r.next = 13;
                                        break;
                                    }
                                    d = n.structures.findIndex((function(e) {
                                        return e.name === l.item.name;
                                    })), n.structures[d].representation.setParameters(n.referenceStyleParameters), n.structures[d].structure.setTransform(new v.yG), 
                                    r.next = 17;
                                    break;

                                  case 13:
                                    return r.next = 15, n.addStructureToStage(l.item);

                                  case 15:
                                    d = r.sent, n.structures[d].representation = n.structures[d].structure.addRepresentation(n.representationStyle, n.referenceStyleParameters);

                                  case 17:
                                    n.structures[d].structure.autoView(), n.curReferenceIndex = d;

                                  case 19:
                                    return r.next = 21, Promise.all(i.map(function() {
                                        var e = (0, et.Z)(nt().mark((function e(t) {
                                            var r, a, i, s, o, l;
                                            return nt().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    if (-1 !== (r = n.structures.findIndex((function(e) {
                                                        return t.name === e.name;
                                                    })))) {
                                                        e.next = 3;
                                                        break;
                                                    }
                                                    return e.abrupt("return");

                                                  case 3:
                                                    if (!u) {
                                                        e.next = 17;
                                                        break;
                                                    }
                                                    return (a = n.structures[r]).representation.setVisibility(!1), e.next = 8, n.tmAlignToReference(r);

                                                  case 8:
                                                    i = e.sent, s = i.matrix, o = i.tmResults, l = i.alignment, a.tmResults = o, a.alignment = l, 
                                                    a.representation.setParameters(n.regularStyleParameters), a.structure.setTransform(s), 
                                                    a.representation.setVisibility(!0);

                                                  case 17:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }), e);
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments);
                                        };
                                    }()));

                                  case 21:
                                    return r.next = 23, Promise.all(s.map(function() {
                                        var e = (0, et.Z)(nt().mark((function e(t) {
                                            var r;
                                            return nt().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    n.stage.getComponentsByName(t.name).forEach((function(e) {
                                                        return n.stage.removeComponent(e);
                                                    })), r = n.structures.findIndex((function(e) {
                                                        return t.name === e.name;
                                                    })), n.structures.splice(r, 1);

                                                  case 3:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }), e);
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments);
                                        };
                                    }()));

                                  case 23:
                                    return r.next = 25, Promise.all(o.map(function() {
                                        var e = (0, et.Z)(nt().mark((function e(t) {
                                            var r, a, i, s, o, l;
                                            return nt().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.next = 2, n.addStructureToStage(t);

                                                  case 2:
                                                    return r = e.sent, e.next = 5, n.tmAlignToReference(r);

                                                  case 5:
                                                    a = e.sent, i = a.matrix, s = a.tmResults, o = a.alignment, (l = n.structures[r]).tmResults = s, 
                                                    l.alignment = o, l.representation = l.structure.addRepresentation(n.representationStyle, n.regularStyleParameters), 
                                                    l.structure.setTransform(i);

                                                  case 14:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }), e);
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments);
                                        };
                                    }()));

                                  case 25:
                                  case "end":
                                    return r.stop();
                                }
                            }), r);
                        })))();
                    }
                },
                watch: {
                    "$vuetify.theme.dark": function() {
                        this.stage.viewer.setBackground(this.bgColor);
                    },
                    entries: function(e, t) {
                        this.updateEntries(e, t);
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
            n(4678);
            var kt = (0, P.Z)(Ot, xt, [], !1, null, "06a02575", null);
            kt.options.__file = "frontend/StructureViewerMSA.vue";
            const Dt = {
                components: {
                    MSAView: Xe,
                    StructureViewer: wt,
                    StructureViewerMSA: kt.exports
                },
                props: {
                    entries: [],
                    scores: [],
                    statistics: {}
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
                        alphabetOptions: [ {
                            text: "Amino Acids",
                            value: "aa"
                        }, {
                            text: "3D Interactions (3Di)",
                            value: "ss"
                        } ],
                        matchRatio: 0,
                        structureViewerSelection: [],
                        structureViewerReference: 0,
                        isLoadingStructure: !1
                    };
                },
                watch: {
                    matchRatio: k((function() {
                        this.handleUpdateMatchRatio();
                    }), 200)
                },
                beforeMount: function() {
                    this.handleUpdateMatchRatio();
                },
                mounted: function() {
                    window.addEventListener("scroll", this.handleScroll), this.structureViewerSelection = [ 0, 1 ];
                },
                beforeDestroy: function() {
                    window.removeEventListener("scroll", this.handleScroll);
                },
                computed: {
                    alnLen: function() {
                        return this.entries.length > 0 ? this.mask.reduce((function(e, t) {
                            return e + t;
                        }), 0) : 0;
                    },
                    structureViewerProps: function() {
                        return {
                            structures: this.entries
                        };
                    },
                    structureViewerEntries: function() {
                        var e = this;
                        return this.structureViewerSelection.map((function(t) {
                            return e.entries[t];
                        }));
                    },
                    msaViewEntries: function() {
                        var e = this;
                        return this.entries.map((function(t) {
                            for (var n = {
                                name: t.name,
                                aa: "",
                                ss: ""
                            }, r = 0; r < e.mask.length; r++) 1 === e.mask[r] && (n.aa += t.aa[r], n.ss += t.ss[r]);
                            return n;
                        }));
                    },
                    msaViewScores: function() {
                        var e = this;
                        return this.scores.filter((function(t, n) {
                            return 1 === e.mask[n];
                        }));
                    }
                },
                methods: {
                    handleUpdateMatchRatio: function() {
                        0 === this.matchRatio ? this.mask = new Array(this.entries[0].aa.length).fill(1) : this.mask = function(e, t) {
                            for (var n = e[0].aa.length, r = new Array(n).fill(0), a = 0; a < n; a++) {
                                for (var i = 0, s = 0, o = 0; o < e.length; o++) "-" === e[o].aa[a] ? i++ : s++;
                                s / (i + s) >= t && (r[a] = 1);
                            }
                            return r;
                        }(this.entries, this.matchRatio);
                    },
                    handleStructureLoadingChange: function(e) {
                        console.log("loading state change", e), this.isLoadingStructure = e;
                    },
                    handleNewStructureViewerReference: function(e) {
                        var t = this.structureViewerSelection.slice(), n = t.indexOf(e);
                        if (n === this.structureViewerReference) return this.structureViewerSelection = [], 
                        void (this.structureViewerReference = 0);
                        -1 === n && t.push(e), this.structureViewerSelection = t, this.structureViewerReference = this.structureViewerSelection.indexOf(e);
                    },
                    handleNewStructureViewerSelection: function(e) {
                        var t = this.structureViewerSelection.slice(), n = t.indexOf(e);
                        if (n === this.structureViewerReference) return this.structureViewerSelection = [], 
                        void (this.structureViewerReference = 0);
                        -1 !== n ? t.splice(n, 1) : t.push(e), this.structureViewerSelection = t;
                    },
                    getEntry: function(e) {
                        return this.entries.find((function(t) {
                            return t.name === e;
                        }));
                    },
                    makeMockAlignment: function(e, t) {
                        var n = this.entries[e], r = this.entries[t];
                        if (n && r) {
                            var a = function(e, t) {
                                for (var n = {
                                    backtrace: ""
                                }, r = !1, a = 0, i = 0, s = 0; a < e.length; ) {
                                    var o = e[a], l = t[a];
                                    "-" === o && "-" === l || ("-" === o ? (r && (n.backtrace += "D"), ++s) : "-" === l ? (r && (n.backtrace += "I"), 
                                    ++i) : (r || (r = !0, n.qStartPos = i, n.dbStartPos = s), n.backtrace += "M", n.qEndPos = i, 
                                    n.dbEndPos = s, ++i, ++s)), ++a;
                                }
                                return n.qStartPos++, n.dbStartPos++, n;
                            }(n.aa, r.aa);
                            return a.query = n.name, a.target = r.name, a.qCa = n.ca, a.tCa = r.ca, a.qSeq = n.aa.replace(/-/g, ""), 
                            a.qAln = n.aa, a.tSeq = r.aa.replace(/-/g, ""), a.dbAln = r.aa, {
                                queryMap: T(a.qStartPos, a.qAln),
                                targetMap: T(a.dbStartPos, a.dbAln),
                                alignment: a
                            };
                        }
                    },
                    handleMapBlockClick: function(e) {
                        var t = document.querySelector(".minimap").offsetHeight + 60, n = this.$refs.msaView.$el.children[e].getBoundingClientRect();
                        window.scrollTo({
                            behavior: "smooth",
                            top: n.top + window.scrollY - t
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
                        var e = this.$refs.msaView.$el.getBoundingClientRect(), t = Math.ceil(this.alnLen / this.lineLen), n = e.height / t, r = window.scrollY + e.top, a = r + e.height, i = r + window.scrollY;
                        this.blockIndex = i < r ? 0 : i > a ? t : Math.floor((i - r) / n);
                    },
                    handleLineLen: function(e) {
                        this.lineLen = e;
                    },
                    handleCSSGradient: function(e) {
                        var t = Math.ceil(this.alnLen / this.lineLen), n = e.length / t;
                        this.cssGradients = Array.from({
                            length: t
                        }, (function() {
                            return [];
                        }));
                        for (var r = Math.max(Math.floor(n / 30), 1), a = 0; a < t; a++) for (var i = 0; i < Math.min(n, 30); i += r) this.cssGradients[a].push(e[i + a * n]);
                        var s = this.cssGradients[t - 1][0].split("%,").length / 2, o = (t - 1) * this.lineLen + s;
                        this.gradientRatio = new Array(t - 1).fill(this.lineLen / o * 100), this.gradientRatio.push(s / o * 100);
                    }
                }
            };
            n(7316);
            var Et = n(7024), Nt = n(7894), Bt = n(538), qt = n(4317), Pt = n(5191), Vt = (0, 
            P.Z)(Dt, Ve, [], !1, null, null, null);
            Q()(Vt, {
                VCard: Y.Z,
                VCardText: H.ZB,
                VCardTitle: H.EB,
                VCol: Et.Z,
                VContainer: ve.Z,
                VRow: Nt.Z,
                VSelect: Bt.Z,
                VSimpleTable: qt.Z,
                VTextField: Pt.Z
            }), Vt.options.__file = "frontend/MSA.vue";
            const _t = {
                components: {
                    MSA: Vt.exports,
                    Local: Ee
                },
                data: function() {
                    return {
                        entries: [],
                        scores: [],
                        statistics: {}
                    };
                },
                mounted: function() {
                    var e = this;
                    document.onreadystatechange = function() {
                        if ("complete" == document.readyState) {
                            var t = document.getElementById("data");
                            if (!t) return null;
                            var n = JSON.parse(t.textContent);
                            e.handleUploadData(n);
                        }
                    };
                },
                methods: {
                    clearData: function() {
                        this.entries = [], this.scores = [], this.statistics = {};
                    },
                    handleUploadData: function(e) {
                        this.clearData(), this.entries = e.entries, this.scores = e.scores, this.statistics = e.statistics;
                    },
                    handleDownloadData: function() {
                        this.entries && S({
                            entries: this.entries,
                            scores: this.scores,
                            statistics: this.statistics
                        }, "FoldMason-".concat(x(), ".json"));
                    }
                }
            };
            var Ut = (0, P.Z)(_t, Pe, [], !1, null, null, null);
            Ut.options.__file = "frontend/MSALocal.vue";
            const Gt = {
                components: {
                    ResultLocal: qe,
                    MSALocal: Ut.exports
                }
            };
            var jt = n(1095), zt = n(5091), Zt = (0, P.Z)(Gt, g, [], !1, null, null, null);
            Q()(Zt, {
                VApp: jt.Z,
                VMain: zt.Z
            }), Zt.options.__file = "frontend/AppLocal.vue";
            const Qt = Zt.exports;
            n(654);
            r.Z.use(a.Z), r.Z.use(A);
            var Ft = {
                mmseqs: n(8615).Z,
                foldseek: n(5473).Z,
                foldmason: n(5106).Z
            };
            window.document.title = Ft.foldmason.APP_NAME + " Search Server";
            var Yt = window.matchMedia("(prefers-color-scheme: dark)"), Ht = new a.Z({
                icons: {
                    iconfont: "mdiSvg"
                },
                theme: {
                    dark: Yt.matches
                }
            });
            Yt.addEventListener("change", (function(e) {
                Ht.framework.theme.dark = e.matches;
            })), r.Z.use({
                install: function(e, t) {
                    e.prototype.$APP = "foldmason", e.prototype.$STRINGS = Ft.foldmason, e.prototype.$ELECTRON = !1, 
                    e.prototype.$LOCAL = !0, e.prototype.$MDI = p, e.prototype.__OS__ = {
                        arch: "web",
                        platform: "web"
                    }, e.prototype.mmseqsVersion = "web", e.prototype.saveResult = function() {}, e.prototype.handleTitleBarDoubleClick = function() {};
                }
            });
            new r.Z({
                el: "#app",
                vuetify: Ht,
                render: function(e) {
                    return e(Qt);
                }
            });
        },
        9837: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i)()(a());
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
        5426: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i)()(a());
            s.push([ e.id, '\n.residues {\n    font-family: InconsolataClustal, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n    white-space: pre;\n}\n.alignment-wrapper-inner {\n    display: inline-block;\n    overflow-x: auto;\n}\n.alignment-wrapper-inner .line {\n    display: inline-block;\n    margin-bottom: 0.5em;\n    white-space: nowrap;\n}\n', "", {
                version: 3,
                sources: [ "webpack://./frontend/Alignment.vue" ],
                names: [],
                mappings: ";AA6FA;IACA,sOAAA;IACA,gBAAA;AACA;AACA;IACA,qBAAA;IACA,gBAAA;AACA;AACA;IACA,qBAAA;IACA,oBAAA;IACA,mBAAA;AACA",
                sourcesContent: [ '<template>\n    <div class="alignment-wrapper-inner">\n        <span class="monospace" v-for="i in Math.max(1, Math.ceil(alignment.alnLength / lineLen))" :key="i">\n            <span class="line">\n                Q&nbsp;{{padNumber(getQueryRowStartPos(i), (Math.max(alignment.qStartPos, alignment.dbStartPos) + alignment.alnLength+"").length, \'&nbsp;\')}}&nbsp;<span class="residues">{{alignment.qAln.substring((i-1)*lineLen,  (i-1)*lineLen+lineLen)}}</span>\n                <br>\n                {{\'&nbsp;\'.repeat(3+(Math.max(alignment.qStartPos, alignment.dbStartPos) + alignment.alnLength+"").length)}}<span class="residues">{{formatAlnDiff(alignment.qAln.substring((i-1)*lineLen,  (i-1)*lineLen+lineLen), alignment.dbAln.substring((i-1)*lineLen, (i-1)*lineLen+lineLen))}}</span>\n                <br>\n                T&nbsp;{{padNumber(getTargetRowStartPos(i), (Math.max(alignment.qStartPos, alignment.dbStartPos) + alignment.alnLength+"").length, \'&nbsp;\')}}&nbsp;<span class="residues" @pointerup="onSelectText(i)">{{alignment.dbAln.substring((i-1)*lineLen, (i-1)*lineLen+lineLen)}}</span>\n            </span><br>\n        </span>\n        <small v-if="$APP == \'foldseek\'" style="float:right">Select target residues to highlight their structure</small>\n    </div>\n</template>\n\n<script>\n\n// cat blosum62.out  | grep -v \'^#\' | awk \'NR == 1 { for (i = 1; i <= NF; i++) { r[i] = $i; } next; } { col = $1; for (i = 2; i <= NF; i++) { print col,r[i-1],$i; } }\' | awk \'$3 > 0 && $1 != $2 { printf "\\""$1""$2"\\",";}\'\nconst blosum62Sim = [\n    "AG", "AS", "DE", "DN",\n    "ED", "EK", "EQ", "FL",\n    "FM", "FW", "FY", "GA",\n    "HN", "HQ", "HY", "IL",\n    "IM", "IV", "KE", "KQ",\n    "KR", "LF", "LI", "LM",\n    "LV", "MF", "MI", "ML",\n    "MV", "ND", "NH", "NQ",\n    "NS", "QE", "QH", "QK",\n    "QN", "QR", "RK", "RQ",\n    "SA", "SN", "ST", "TS",\n    "VI", "VL", "VM", "WF",\n    "WY", "YF", "YH", "YW"\n]\n\n// Get the first and last non-null values in a map between a range\nfunction getRange(map, start, end) {\n    let first = null, last = null\n    for (let i = start; i <= end; i++) {\n\tlet val = map[i]\n\tif (val !== null) {\n\t    if (first === null) first = val\n\t    last = val\n\t}\n    }\n    return [first, last]\n}\n\nexport default {\n    props: [\'alignment\', \'lineLen\', \'queryMap\', \'targetMap\'],\n    methods: {\n        // Get the index of a given residue in the alignment\n        getQueryIndex(index) { return this.queryMap[index] },\n        getTargetIndex(index) { return this.targetMap[index] },\n        getFirstResidueNumber(map, i) {\n            let start = this.lineLen * (i - 1)\n            while (map[start] === null) start--\n            return map[start]\n        },\n        getQueryRowStartPos(i) { return this.getFirstResidueNumber(this.queryMap, i) },\n        getTargetRowStartPos(i) { return this.getFirstResidueNumber(this.targetMap, i) },\n        formatAlnDiff(seq1, seq2) {\n            if (seq1.length != seq2.length) return \'\'\n            var res = \'\'\n            for (var i = 0; i < seq1.length; i++) {\n                if (seq1[i] == seq2[i]) res += seq1[i];\n                else if (blosum62Sim.indexOf(seq1[i] + seq2[i]) != -1) res += \'+\';\n                else res += \' \';\n            }\n            return res;\n        },\n        padNumber(nr, n, str){\n            return Array(n - String(nr).length + 1).join(str || \'0\') + nr\n        },\n        onSelectText(i) {\n            var selection = window.getSelection()\n\n            // In case of backwards selection\n            var [offsetStart, offsetEnd] = [\n                selection.anchorOffset, selection.focusOffset\n            ].sort((a, b) => a - b)\n\n            var length = offsetEnd - offsetStart\n            var relStart = (i - 1) * this.lineLen + offsetStart\n            var relEnd = relStart + length - 1 // the selection is inclusive\n\n            var [start, end] = getRange(this.targetMap, relStart, relEnd)\n            this.$emit(\'selected\', [start, end])\n        }\n    }, \n}\n<\/script>\n\n<style>\n.residues {\n    font-family: InconsolataClustal, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n    white-space: pre;\n}\n.alignment-wrapper-inner {\n    display: inline-block;\n    overflow-x: auto;\n}\n.alignment-wrapper-inner .line {\n    display: inline-block;\n    margin-bottom: 0.5em;\n    white-space: nowrap;\n}\n</style>\n' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        6696: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i)()(a());
            s.push([ e.id, "\n.alignment-wrapper-outer {\n    display: inline-flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: stretch;\n    width: 100%;\n}\n.alignment-wrapper-inner {\n    flex: 2;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: end;\n}\n.alignment-structure-wrapper {\n    flex: 1;\n    min-width:450px;\n    margin: 0;\n    margin-bottom: auto;\n}\n@media screen and (max-width: 960px) {\n.alignment-wrapper-outer {\n        display: flex;\n        flex-direction: column;\n}\n.alignment-structure-wrapper {\n        padding-top: 1em;\n}\n}\n@media screen and (min-width: 961px) {\n.alignment-structure-wrapper {\n        padding-left: 2em;\n}\n}\n\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/AlignmentPanel.vue" ],
                names: [],
                mappings: ";AA8DA;IACA,oBAAA;IACA,mBAAA;IACA,iBAAA;IACA,uBAAA;IACA,oBAAA;IACA,WAAA;AACA;AACA;IACA,OAAA;IACA,YAAA;IACA,aAAA;IACA,sBAAA;IACA,gBAAA;AACA;AAEA;IACA,OAAA;IACA,eAAA;IACA,SAAA;IACA,mBAAA;AACA;AAEA;AACA;QACA,aAAA;QACA,sBAAA;AACA;AACA;QACA,gBAAA;AACA;AACA;AAEA;AACA;QACA,iBAAA;AACA;AACA",
                sourcesContent: [ '<template>\n    <div class="alignment-wrapper-outer" slot="content">\n        <Alignment\n            :key="`aln2-${alignment.id}`"\n            :alignment="alignment"\n            :lineLen="lineLen"\n            :queryMap="queryMap"\n            :targetMap="targetMap"\n            @selected="setUserSelection"\n        />\n        <div v-if="$APP == \'foldseek\'" class="alignment-structure-wrapper">\n            <StructureViewer\n                :key="`struc2-${alignment.id}`"\n                :alignment="alignment"\n                :queryMap="queryMap"\n                :targetMap="targetMap"\n                :hits="hits"\n                bgColorLight="white"\n                bgColorDark="#1E1E1E"\n                qColor="lightgrey"\n                tColor="red"\n                qRepr="cartoon"\n                tRepr="cartoon"\n                ref="structureViewer"\n            />\n        </div>\n    </div>\n</template>\n\n<script>\nimport Alignment from \'./Alignment.vue\'\nimport { makePositionMap } from \'./Utilities.js\'\n\nexport default {\n    components: { StructureViewer: () => __APP__ == "foldseek" ? import(\'./StructureViewer.vue\') : null, Alignment },\n    data: () => ({\n        queryMap: null,\n        targetMap: null,\n    }),\n    props: {\n        alignment: { type: Object, required: true, },\n        lineLen: { type: Number, required: true, },\n        hits: { type: Object }\n    },\n    methods: {\n        setUserSelection([start, end]) {\n            if (!this.alignment) return\n            if (__APP__ != "foldseek") return\n            this.$refs.structureViewer.setSelectionData(start, end)\n        },\n        updateMaps() {\n            if (!this.alignment) return\n            this.queryMap = makePositionMap(this.alignment.qStartPos, this.alignment.qAln)\n            this.targetMap = makePositionMap(this.alignment.dbStartPos, this.alignment.dbAln)\n        },\n    },\n    watch: { \'alignment\': function() { this.updateMaps() } },\n    beforeMount() { this.updateMaps() },\n}\n<\/script>\n\n<style>\n.alignment-wrapper-outer {\n    display: inline-flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: stretch;\n    width: 100%;\n}\n.alignment-wrapper-inner {\n    flex: 2;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: end;\n}\n\n.alignment-structure-wrapper {\n    flex: 1;\n    min-width:450px;\n    margin: 0;\n    margin-bottom: auto;\n}\n\n@media screen and (max-width: 960px) {\n    .alignment-wrapper-outer {\n        display: flex;\n        flex-direction: column;\n    }\n    .alignment-structure-wrapper {\n        padding-top: 1em;\n    }\n}\n\n@media screen and (min-width: 961px) {\n    .alignment-structure-wrapper {\n        padding-left: 2em;\n    }\n}\n\n</style>\n' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        5479: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i)()(a());
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
        7212: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i)()(a());
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
        6791: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i)()(a());
            s.push([ e.id, "\n.gradient-block-col {\n    position: relative;\n    display: inline-block;\n    border: 1px solid grey;\n}\n.gradient-block-col:not(:last-child) {\n    margin-right: -1px;\n}\n.minimap {\n    position: sticky;\n    top: 48px;\n    padding: 16px;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    height: fit-content;\n    z-index: 1;\n}\n.gradient-block-col::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--bg-color);\n    z-index: 2;\n}\n.gradient-block-col:hover:before {\n    background-color: var(--bg-color-hover);\n    cursor: pointer;\n}\n.settings-td {\n    text-align: right;\n    vertical-align: middle;\n    padding: 0;\n    margin: 0;\n    height: 75px !important;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/MSA.vue" ],
                names: [],
                mappings: ";AAoZA;IACA,kBAAA;IACA,qBAAA;IACA,sBAAA;AACA;AACA;IACA,kBAAA;AACA;AACA;IACA,gBAAA;IACA,SAAA;IACA,aAAA;IACA,eAAA;IACA,kBAAA;IACA,mBAAA;IACA,UAAA;AACA;AACA;IACA,WAAA;IACA,kBAAA;IACA,MAAA;IACA,OAAA;IACA,WAAA;IACA,YAAA;IACA,iCAAA;IACA,UAAA;AACA;AACA;IACA,uCAAA;IACA,eAAA;AACA;AACA;IACA,iBAAA;IACA,sBAAA;IACA,UAAA;IACA,SAAA;IACA,uBAAA;AACA",
                sourcesContent: [ '<template>\n<div>\n    <v-container fluid pa-2 style="overflow: visible; height: 100%;">\n        <v-row style="height: 400px;">\n            <v-col fill-height>\n                <v-card style="height: 100%">\n                    <v-card-title>Settings</v-card-title>\n                    <v-card-text>\n                        <v-simple-table style="height: 100%;" id="settings" class="settings auto-height-table">\n                            <tbody>\n                                <tr>\n                                    <td style="width: 50%; vertical-align: middle;">Display alphabet</td>\n                                    <td style="width: 0px;" class="settings-td">\n                                        <v-select\n                                            v-model="alphabet"\n                                            :items="alphabetOptions"\n                                            default="aa"\n                                            hide-details\n                                            single-line\n                                            outlined\n                                            dense\n                                            style="max-width: 200px; max-height: 40px; line-height: 40px; border: none;"\n                                        />\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td style="width: 50%;">Non-gap ratio</td>\n                                    <td style="width: 200px;" class="settings-td">\n                                        <v-text-field\n                                            v-model="matchRatio"\n                                            label="0"\n                                            default="0"\n                                            type="number"\n                                            min="0"\n                                            max="1"\n                                            step="0.01"\n                                            single-line\n                                            hide-details\n                                            outlined\n                                            dense\n                                            style="max-width: 200px; max-height: 40px; line-height: 40px; border: none;"\n                                        />\n                                    </td>\n                                </tr>\n                                <tr v-if="statistics.db">\n                                    <td>Database</td>\n                                    <td id="msa-database">{{ statistics.db }}</td>\n                                </tr>\n                                <tr v-if="statistics.msaFile">\n                                    <td>MSA file</td>\n                                    <td id="msa-file">{{ statistics.msaFile }}</td>\n                                </tr>\n                                <tr v-if="statistics.msaLDDT">\n                                    <td>MSA LDDT</td>\n                                    <td id="msa-lddt">{{ statistics.msaLDDT }}</td>\n                                </tr>\n                            </tbody>\n                        </v-simple-table>\n                    </v-card-text>\n                </v-card>\n            </v-col>\n            <v-col>\n                <v-card class="fill-height" style="position: relative;">\n                    <v-card-title style="position: absolute; left: 0; top: 0; margin: 0; padding: 16px; z-index: 1;">Structure</v-card-title>\n                    <div v-if="structureViewerSelection" style="padding: 10px; height: 100%; width: 100%;">\n                        <StructureViewerMSA\n                            :entries="structureViewerEntries"\n                            :reference="structureViewerReference"\n                            @loadingChange="handleStructureLoadingChange"\n                        />\n                    </div>\n                    <v-card-text v-else>\n                        No structures loaded.\n                    </v-card-text>\n                </v-card>\n            </v-col>\n        </v-row>\n        <v-card class="minimap fill-height">\n            <v-row dense v-if="cssGradients">\n                <v-col\n                    v-for="(block, i) in cssGradients"\n                    :key="\'col-\' + i"\n                    class="gradient-block-col"\n                    :style="minimapBlock(i)"\n                    @click="handleMapBlockClick(i)"\n                >\n                    <div>\n                        <div\n                            v-for="(gradient, j) in block"\n                            :key="\'gradient-\' + j"\n                            class="gradient-block"\n                        >\n                            <div :style="{ width: \'100%\', height: \'3px\', \'background-image\': gradient }"></div>\n                        </div>                           \n                    </div>\n                </v-col>\n            </v-row>\n        </v-card>\n        <v-card pa-2>\n            <MSAView\n                :entries="msaViewEntries"\n                :scores="msaViewScores"\n                :alnLen="alnLen"\n                :alphabet="alphabet"\n                :selectedStructures="structureViewerSelection"\n                :referenceStructure="structureViewerReference"\n                :matchRatio="parseFloat(matchRatio)"\n                @cssGradients="handleCSSGradient"\n                @lineLen="handleLineLen"\n                @newStructureSelection="handleNewStructureViewerSelection"\n                @newStructureReference="handleNewStructureViewerReference"\n                ref="msaView"\n            />\n        </v-card>\n    </v-container>\n</div>\n</template>\n\n<script>\nimport MSAView from \'./MSAView.vue\';\nimport StructureViewer from \'./StructureViewer.vue\';\nimport StructureViewerMSA from \'./StructureViewerMSA.vue\';\nimport { debounce, makePositionMap } from \'./Utilities.js\'\n\nfunction makeMatchRatioMask(entries, ratio) {\n    const columnLength = entries[0].aa.length;\n    const mask = new Array(columnLength).fill(0);\n    for (let i = 0; i < columnLength; i++) {\n        let gap = 0;\n        let nonGap = 0;\n        for (let j = 0; j < entries.length; j++) {\n            if (entries[j].aa[i] === \'-\') {\n                gap++;\n            } else {\n                nonGap++;\n            }\n        }\n        let fraction = nonGap / (gap + nonGap);\n        if (fraction >= ratio) {\n            mask[i] = 1;\n        }\n    }\n    return mask;\n}\n\nfunction mockAlignment(one, two) {\n    let res = { backtrace: "" };\n    let started = false; // flag for first Match column in backtrace\n    let m = 0;           // index in msa\n    let qr = 0;          // index in seq\n    let tr = 0;\n    while (m < one.length) {\n        const qc = one[m];\n        const tc = two[m];\n        if (qc === \'-\' && tc === \'-\') {\n            // Skip gap columns\n        } else if (qc === \'-\') {\n            if (started) res.backtrace += \'D\';\n            ++tr;\n        } else if (tc === \'-\') {\n            if (started) res.backtrace += \'I\';\n            ++qr;\n        } else {\n            if (!started) {\n                started = true;\n                res.qStartPos = qr;\n                res.dbStartPos = tr;\n            }\n            res.backtrace += \'M\';\n            res.qEndPos = qr;\n            res.dbEndPos = tr;\n            ++qr;\n            ++tr;\n        }\n        ++m;\n    }\n    res.qStartPos++;\n    res.dbStartPos++;\n    return res;\n}\n\nexport default {\n    components: {\n        MSAView,\n        StructureViewer,\n        StructureViewerMSA,\n    },\n    props: {\n        entries: [],\n        scores: [],\n        statistics: {},\n    },\n    data() {\n        return {\n            mask: [],\n            structures: [],       \n            lineLen: 80,\n            cssGradients: null,\n            gradientRatio: null,\n            blockIndex: 0,\n            alphabet: \'aa\',\n            alphabetOptions: [\n                { text: \'Amino Acids\', value: \'aa\' },\n                { text: \'3D Interactions (3Di)\', value: \'ss\' }\n            ],\n            matchRatio: 0.0,\n            structureViewerSelection: [],\n            structureViewerReference: 0,\n            isLoadingStructure: false\n        }\n    },    \n    watch: {\n        // TODO might need when parsing from convertalis\n        // scores: function() {\n        //     this.scores = new Array(this.alnLen).fill(-1);\n        //     for (const [idx, score] of raw.scores) {\n        //         this.scores[idx] = score;\n        //     }\n        // }\n        matchRatio: debounce(function() {\n            this.handleUpdateMatchRatio();\n        }, 200)\n    },\n    beforeMount() {\n        this.handleUpdateMatchRatio();\n    },\n    mounted() {\n        window.addEventListener("scroll", this.handleScroll);\n        this.structureViewerSelection = [0, 1];\n    },\n    beforeDestroy() {\n        window.removeEventListener("scroll", this.handleScroll);\n    },\n    computed: {\n        alnLen() {\n            if (this.entries.length > 0) {\n                return this.mask.reduce((count, value) => count + value, 0);\n                // return this.entries[0].aa.length;\n            }\n            return 0;\n        },\n        structureViewerProps() {\n            return { structures: this.entries };\n        },\n        structureViewerEntries() {\n            return this.structureViewerSelection.map(index => this.entries[index]);\n        },\n        msaViewEntries() {\n            const entries = this.entries.map(entry => {\n                const copy = {\n                    name: entry.name,\n                    aa: "",\n                    ss: ""\n                }\n                for (let i = 0; i < this.mask.length; i++) {\n                    if (this.mask[i] === 1) {\n                        copy.aa += entry.aa[i];\n                        copy.ss += entry.ss[i];\n                    }\n                }\n                return copy;\n            })\n            return entries\n        },\n        msaViewScores() {\n            return this.scores.filter((_, index) => this.mask[index] === 1);\n        }\n    },\n    methods: {\n        handleUpdateMatchRatio: function() {\n            if (this.matchRatio === 0.0) {\n                this.mask = new Array(this.entries[0].aa.length).fill(1);\n            } else {\n                this.mask = makeMatchRatioMask(this.entries, this.matchRatio);\n            }\n        },\n        handleStructureLoadingChange(isLoading) {\n            console.log(\'loading state change\', isLoading)\n            this.isLoadingStructure = isLoading;\n        },\n        handleNewStructureViewerReference(entryIndex) {\n            // New reference emitted from MSAView.\n            // entryIndex is based on ALL entries, not just selection (taken from row of MSA block)\n            // Add new structure to selection if index not already in selection,\n            // otherwise just switch reference index.\n            const selection = this.structureViewerSelection.slice();\n            const index = selection.indexOf(entryIndex);\n            if (index === this.structureViewerReference) {\n                this.structureViewerSelection = [];\n                this.structureViewerReference = 0;\n                return;\n            }\n            if (index === -1) {\n                selection.push(entryIndex);\n            }\n            this.structureViewerSelection = selection;\n            this.structureViewerReference = this.structureViewerSelection.indexOf(entryIndex);\n        },\n        handleNewStructureViewerSelection(entryIndex) {\n            const selection = this.structureViewerSelection.slice();\n            const index = selection.indexOf(entryIndex);\n            if (index === this.structureViewerReference) {\n                this.structureViewerSelection = [];\n                this.structureViewerReference = 0;\n                return;\n            }\n            if (index !== -1) {\n                selection.splice(index, 1);\n            } else {\n                selection.push(entryIndex);\n            }\n            this.structureViewerSelection = selection;\n        },\n        getEntry(name) {\n            return this.entries.find(item => item.name === name);\n        },\n        makeMockAlignment(one, two) {\n            const entryOne = this.entries[one];\n            const entryTwo = this.entries[two];\n            if (!entryOne || !entryTwo) {\n                return;\n            }\n            const alignment  = mockAlignment(entryOne.aa, entryTwo.aa);\n            alignment.query  = entryOne.name;\n            alignment.target = entryTwo.name;\n            alignment.qCa    = entryOne.ca;\n            alignment.tCa    = entryTwo.ca;\n            alignment.qSeq   = entryOne.aa.replace(/-/g, \'\');\n            alignment.qAln   = entryOne.aa;\n            alignment.tSeq   = entryTwo.aa.replace(/-/g, \'\');\n            alignment.dbAln  = entryTwo.aa;\n            return {\n                queryMap: makePositionMap(alignment.qStartPos, alignment.qAln), \n                targetMap: makePositionMap(alignment.dbStartPos, alignment.dbAln), \n                alignment: alignment\n            };\n        },\n        handleMapBlockClick(index) {\n            const top = document.querySelector(\'.minimap\').offsetHeight + 60;  // app-bar + minimap\n            const box = this.$refs.msaView.$el.children[index].getBoundingClientRect();\n            window.scrollTo({ behavior: \'smooth\', top: box.top + window.scrollY - top });\n\n        },\n        handleAlphabetChange(event) {\n            this.alphabet = event.target.value;\n        },\n        gradientBlockCSS(gradient) {\n            return { width: \'100%\' };\n        },\n        handleLineLenChange: function(event) {\n            this.lineLen = parseInt(event.target.value);\n        },\n        minimapBlock: function(index) {\n            return {\n                \'--bg-color\': (this.blockIndex === index) ? \'rgba(255, 0, 0, 0.3)\' : null,\n                \'--bg-color-hover\': this.$vuetify.theme.dark ? \'rgba(255, 255, 255, 0.5)\' : \'rgba(100, 100, 100, 0.5)\',\n                \'flex-basis\': `${this.gradientRatio[index]}%`\n            }\n        },\n        handleScroll() {\n            const box = this.$refs.msaView.$el.getBoundingClientRect()\n            const numBlocks = Math.ceil(this.alnLen / this.lineLen);\n            const blockSize = box.height / numBlocks;\n            const top = window.scrollY + box.top;  // top of the msa\n            const bot = top + box.height;          // bottom\n            let scroll = top + window.scrollY;     // current scroll pos, relative to msaview offset\n            if (scroll < top) {\n                this.blockIndex = 0;\n            } else if (scroll > bot) {\n                this.blockIndex = numBlocks;\n            } else {\n                this.blockIndex = Math.floor((scroll - top) / blockSize);\n            }\n        },\n        handleLineLen(lineLen) {\n            this.lineLen = lineLen;\n        },\n        handleCSSGradient(gradients) {\n            const maxSize = 30;\n            const numBlocks = Math.ceil(this.alnLen / this.lineLen);\n            const blockSize = gradients.length / numBlocks;\n\n            // Organise into blocks. Subsetted to maxSize for large MSAs\n            // Use a step to ensure coverage over entire MSA.\n            this.cssGradients = Array.from({ length: numBlocks }, () => []);\n            const step = Math.max(Math.floor(blockSize / maxSize), 1);\n            for (let i = 0; i < numBlocks; i++) {\n                for (let j = 0; j < Math.min(blockSize, maxSize); j += step) {\n                    this.cssGradients[i].push(gradients[j + i * blockSize]);\n                }\n            }\n\n            // Calculate length of last block (all others will be lineLen)\n            // Get array of %s that sum to 100%\n            const lastBlockLen = this.cssGradients[numBlocks - 1][0].split(\'%,\').length / 2;\n            const total = (numBlocks - 1) * this.lineLen + lastBlockLen;\n            this.gradientRatio = new Array(numBlocks - 1).fill(this.lineLen / total * 100);\n            this.gradientRatio.push(lastBlockLen / total * 100);\n        },\n    },\n}\n<\/script>\n\n<style>\n.gradient-block-col {\n    position: relative;\n    display: inline-block;\n    border: 1px solid grey; \n}\n.gradient-block-col:not(:last-child) {\n    margin-right: -1px;\n}\n.minimap {\n    position: sticky;\n    top: 48px;\n    padding: 16px;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    height: fit-content;\n    z-index: 1;\n}\n.gradient-block-col::before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--bg-color);\n    z-index: 2;\n}\n.gradient-block-col:hover:before {\n    background-color: var(--bg-color-hover);\n    cursor: pointer;\n}\n.settings-td {\n    text-align: right;\n    vertical-align: middle;\n    padding: 0;\n    margin: 0;\n    height: 75px !important;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        1229: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i)()(a());
            s.push([ e.id, "\n.msa-wrapper {\n    padding: 16px; /* equivalent to pa-4 */\n    display: flex;\n    flex-direction: column;\n    font-family: monospace;\n    white-space: nowrap;\n    line-height: 1.2em;\n}\n.msa-block {\n    margin-bottom: 1em;\n}\n.msa-block:last-child {\n    margin-bottom: 0;\n}\n.msa-block .sequence {\n    display: inline-block;\n    padding: 0px;\n    margin: 0px;\n    letter-spacing: 4px;\n    color: transparent;\n    z-index: 0;\n}\n.msa-block .sequence::selection {\n  background: rgba(100, 100, 255, 1);\n  color: white;\n}\n.msa-row {\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 16px;\n}\n.header, .count {\n    flex: 0 0 auto;\n    white-space: nowrap;\n}\n.sequence-wrapper {\n    width: 100%;\n    flex: grow;\n    overflow: hidden;\n    align-content: left;\n}\n.sequence {\n    margin-left: auto;\n}\n.header:hover {\n    cursor: pointer;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/MSAView.vue" ],
                names: [],
                mappings: ";AAiOA;IACA,aAAA,EAAA,uBAAA;IACA,aAAA;IACA,sBAAA;IACA,sBAAA;IACA,mBAAA;IACA,kBAAA;AACA;AACA;IACA,kBAAA;AACA;AACA;IACA,gBAAA;AACA;AACA;IACA,qBAAA;IACA,YAAA;IACA,WAAA;IACA,mBAAA;IACA,kBAAA;IACA,UAAA;AACA;AACA;EACA,kCAAA;EACA,YAAA;AACA;AACA;IACA,UAAA;IACA,SAAA;IACA,aAAA;IACA,8BAAA;IACA,mBAAA;IACA,SAAA;AACA;AACA;IACA,cAAA;IACA,mBAAA;AACA;AACA;IACA,WAAA;IACA,UAAA;IACA,gBAAA;IACA,mBAAA;AACA;AACA;IACA,iBAAA;AACA;AACA;IACA,eAAA;AACA",
                sourcesContent: [ '<template>\n<div class="msa-wrapper">\n    <div class="msa-block" v-for="([start, end], i) in blockRanges">\n        \x3c!-- <SequenceLogo\n            :sequences="getEntryRanges(start, end, makeGradients=false)"\n            :alphabet="alphabet"\n            :lineLen="lineLen"\n        /> --\x3e\n        <div class="msa-row" v-for="({name, aa, ss, css}, j) in getEntryRanges(start, end)">\n            <span\n                class="header"\n                :style="headerStyle(j)"\n                @click="handleClickHeader($event, j)"\n            >{{ name.padStart(headerLen, \'&nbsp\') }}</span>\n            <div class="sequence-wrapper">\n                <span class="sequence" :style="css">{{ alphabet === \'aa\' ? aa : ss }}</span>\n            </div>\n            <span class="count"   >{{ countSequence(i, aa, start, end).toString().padStart(countLen, \'&nbsp\')  }}</span>\n        </div>\n    </div>\n</div>\n</template>\n\n<script>\nimport SequenceLogo from \'./SequenceLogo.vue\';\nimport { debounce } from \'./Utilities.js\';\n\nexport default {\n    components: { SequenceLogo, SequenceLogo },\n    data() {\n        return {\n            mask: [],\n            lineLen: 80,\n            headerLen: null,\n            countLen: null,\n        }\n    },\n    props: {\n        matchRatio: Number,\n        entries: Array,\n        scores: Array,\n        alnLen: Number,\n        alphabet: String,\n        selectedStructures: { type: Array, required: false },\n        referenceStructure: { type: Number }\n    },\n    mounted() {\n        window.addEventListener(\'resize\', debounce(this.handleResize, 100));\n        this.handleUpdateEntries();\n        this.handleResize();\n        this.emitGradients();\n    },\n    updated() {\n        this.handleResize();\n        this.emitGradients();\n    },\n    beforeDestroy() {\n        window.removeEventListener(\'resize\', this.handleResize);\n    },\n    watch: {\n        entries: function() {\n            this.handleUpdateEntries();\n        },\n        lineLen: function() {\n            this.$emit("lineLen", this.lineLen);\n        },\n    },\n    computed: {\n        firstSequenceWidth() {\n            const container = document.querySelector(".msa-row");\n            if (!container)\n                return 0\n            const sequence = container.querySelector(".sequence");\n            return sequence.scrollWidth;\n        },\n        blockRanges() {\n            const maxVal = Math.max(1, Math.ceil(this.alnLen / this.lineLen));\n            return Array.from({ length: maxVal }, (_, i) => {\n                let start = i * this.lineLen;\n                let end = Math.min(this.alnLen, i * this.lineLen + this.lineLen);\n                return [start, end];\n            });\n        },\n        backgroundClip() {\n            return this.$vuetify.theme.dark ? \'text\' : \'border-box\';\n        },\n        sequenceColor() {\n            return this.$vuetify.theme.dark ? \'transparent\' : \'black\';\n        },\n        fontWeight() {\n            return this.$vuetify.theme.dark ? \'bolder\' : \'normal\';\n        },\n    },\n    methods: {\n        handleClickHeader(event, index) {\n            if (event.altKey) {\n                this.$emit("newStructureReference", index);\n            } else {\n                this.$emit("newStructureSelection", index);\n            }\n        },\n        getSequenceWidth() {\n            const container = document.querySelector(".msa-row");\n            const sequence  = container.querySelector(".sequence");\n            return sequence.scrollWidth;\n        },\n        headerStyle(index) {\n            const isSelected  = this.selectedStructures.length > 0 && this.selectedStructures.includes(index);\n            const isReference = this.selectedStructures.length > 0 && this.selectedStructures[this.referenceStructure] === index;\n            return {\n                fontWeight: isSelected ? \'bold\' : \'normal\',                \n                color: isReference\n                    ? \'#1E88E5\'\n                    : (isSelected\n                        ? this.$vuetify.theme.dark ? \'lightBlue\' : \'#e6ac00\'\n                        : this.$vuetify.theme.dark ? \'rgba(180, 180, 180, 1)\' : \'black\'),\n            }\n        },\n        handleUpdateEntries() {\n            this.headerLen = 0;\n            this.countLen = 0;\n            this.entries.forEach(e => {\n                this.headerLen = Math.max(this.headerLen, e.name.length);\n                let count = 0;\n                for (const char of e.aa) {\n                    if (char !== \'-\') count++;\n                }\n                this.countLen = Math.max(this.countLen, count.toString().length);\n            })\n        },\n        handleResize() {\n            // Resize based on first row\n            const container = document.querySelector(".msa-row");\n            const header    = container.querySelector(".header");\n            const count     = container.querySelector(".count");\n            const sequence  = container.querySelector(".sequence");\n            const containerWidth = container.offsetWidth - header.scrollWidth - count.scrollWidth - 32;\n            \n            // calculate #chars difference\n            const content = sequence.textContent;\n            const charDiff = Math.abs(Math.ceil(content.length * (sequence.scrollWidth - containerWidth) / sequence.scrollWidth));\n\n            if (sequence.scrollWidth > containerWidth) {\n                this.lineLen -= charDiff;\n            } else if (sequence.scrollWidth < containerWidth) {\n                this.lineLen += charDiff;                \n            }\n        },\n        emitGradients() {\n            const elements = document.getElementsByClassName("sequence"); \n            this.$emit(\n                "cssGradients",\n                Array.prototype.map.call(elements, element => element.style[\'background-image\'])\n            );\n        },\n        percentageToColor(percentage, maxHue = 120, minHue = 0) {\n            if (percentage === -1) {\n                return this.$vuetify.theme.dark ? \'rgba(180, 180, 180, 1)\' : \'rgba(0, 0, 0, 0)\';\n            }\n            const hue = percentage * (maxHue - minHue) + minHue;\n            // const hue = (1 - percentage) * 120;\n            // const lightness = this.$vuetify.theme.dark ? 50 : 30;\n            return `hsl(${hue}, 100%, 50%)`;\n        },\n        getEntryRange(entry, start, end, makeGradients=true) {\n            let result = {\n                name: entry.name,\n                aa: entry.aa.slice(start, end),\n                ss: entry.ss.slice(start, end)\n            };\n            if (makeGradients)\n                result.css = this.generateCSSGradient(start, end, result.aa);\n            return result;\n        },\n        getEntryRanges(start, end, makeGradients=true) {\n            return Array.from(this.entries, entry => this.getEntryRange(entry, start, end, makeGradients));\n        },\n        countSequence(blockIndex, sequence) {\n            let gaps = sequence.split(\'-\').length - 1;\n            return blockIndex * this.lineLen + this.lineLen - gaps;\n        },\n        generateCSSGradient(start, end, sequence) {\n            if (!this.scores) {\n                return null;\n            }\n            const colours = this.scores\n                .slice(start, end)\n                .map(score => this.percentageToColor(parseFloat(score)));;\n            \n            for (let i = 0; i < sequence.length; i++) {\n                if (sequence[i] === \'-\') {\n                    colours[i] = this.$vuetify.theme.dark ? "rgba(100, 100, 100, 0.4)" : "rgba(0, 0, 0, 0)";\n                    // colours[i] = "rgba(0, 0, 0, 0)";\n                }\n            }\n\n            const step = 100 / colours.length;\n            let gradient = \'linear-gradient(to right\';\n            \n            let preStep = 0;\n            let curStep = step;\n            for (let i = 0; i < colours.length; i++) {\n                curStep = (i === colours.length - 1) ? 100 : preStep + step;\n                gradient += `, ${colours[i]} ${preStep}%, ${colours[i]} ${curStep}%`;\n                preStep = curStep;\n            }\n            gradient += \')\';\n\n            return {\n                backgroundImage: gradient,\n                // decrease width to account for weird font glyph spacing\n                backgroundSize: `calc(100% - 2px) 100%`,\n                backgroundPosition: \'left top\',\n                backgroundAttachment: \'scroll\',\n                backgroundClip: this.backgroundClip,\n                color: this.sequenceColor,\n                fontWeight: this.fontWeight,\n                \n            };\n        }\n    },\n}\n<\/script>\n\n<style>\n.msa-wrapper {\n    padding: 16px; /* equivalent to pa-4 */\n    display: flex;\n    flex-direction: column;\n    font-family: monospace;\n    white-space: nowrap;\n    line-height: 1.2em;\n}\n.msa-block {\n    margin-bottom: 1em;\n}\n.msa-block:last-child {\n    margin-bottom: 0;\n}\n.msa-block .sequence {\n    display: inline-block;\n    padding: 0px;\n    margin: 0px;\n    letter-spacing: 4px;\n    color: transparent;\n    z-index: 0;\n}\n.msa-block .sequence::selection {\n  background: rgba(100, 100, 255, 1);\n  color: white;\n}\n.msa-row {\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 16px;\n}\n.header, .count {\n    flex: 0 0 auto;\n    white-space: nowrap;\n}\n.sequence-wrapper {\n    width: 100%;\n    flex: grow;\n    overflow: hidden;\n    align-content: left;\n}\n.sequence {\n    margin-left: auto;\n}\n.header:hover {\n    cursor: pointer;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        4569: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => p
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i), o = n(1667), l = n.n(o), c = new URL(n(42), n.b), u = new URL(n(901), n.b), d = s()(a()), A = l()(c), h = l()(u);
            d.push([ e.id, "\n.panel-root[data-v-0d9b5935], .panel-content[data-v-0d9b5935] {\n    flex-direction: column;\n}\n.panel-root header[data-v-0d9b5935], .panel-content[data-v-0d9b5935] {\n    contain: content;\n}\n.panel-root nav[data-v-0d9b5935] {\n    flex: 0;\n}\n.panel-root .force-fill-height[data-v-0d9b5935] {\n    display: flex;\n    height: 100% !important;\n}\n.panel-root[data-v-0d9b5935] .v-toolbar {\n    background-repeat: repeat;\n}\n.theme--light .panel-root[data-v-0d9b5935] .v-toolbar {\n    background: url(" + A + ");\n}\n.theme--dark .panel-root[data-v-0d9b5935] .v-toolbar {\n    background: url(" + h + ");\n}\n.panel-root[data-v-0d9b5935] .text-h6 {\n    margin-bottom: -5px;\n}\n.panel-root[data-v-0d9b5935] .text-h6 i.v-icon {\n    font-size: 1em;\n    vertical-align: bottom;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/Panel.vue" ],
                names: [],
                mappings: ";AAsDA;IACA,sBAAA;AACA;AAEA;IACA,gBAAA;AACA;AAEA;IACA,OAAA;AACA;AAEA;IACA,aAAA;IACA,uBAAA;AACA;AAEA;IACA,yBAAA;AACA;AAEA;IACA,mDAAA;AAEA;AAEA;IACA,mDAAA;AACA;AAEA;IACA,mBAAA;AACA;AAEA;IACA,cAAA;IACA,sBAAA;AACA",
                sourcesContent: [ "<template>\n    <div :class=\"['panel-root', elevation != null ? 'elevation-' + elevation : null ]\">\n        <v-toolbar v-if=\"!!$slots['header'] || !!header\" text dense dark>\n            <v-btn v-if=\"collapsible\" style=\"margin-top:0;margin-left:-15px;\" icon plain  @click=\"isCollapsed = !isCollapsed\" :aria-expanded=\"isCollapsed ? 'false' : 'true'\" :aria-controls=\"uuid\">\n                <v-icon v-if=\"isCollapsed\">\n                    {{ $MDI.PlusBox }}\n                </v-icon>\n                <v-icon v-else>\n                    {{ $MDI.MinusBox }}\n                </v-icon>\n            </v-btn>\n            <span class=\"text-h6 align-end\">\n                <slot v-if=\"$slots['header']\" name=\"header\"></slot>\n                <template v-else>{{ header }}</template>\n            </span>\n            <v-spacer></v-spacer>\n            <slot name=\"toolbar-extra\"></slot>\n        </v-toolbar>\n        <v-card rounded=\"0\" :class=\"['panel', { 'd-flex' : flex }, { 'force-fill-height' : fillHeight }]\" v-if=\"!isCollapsed\" :id=\"uuid\">\n            <v-card-text v-if=\"$slots['desc']\" class=\"subheading justify\">\n                <slot name=\"desc\"></slot>\n            </v-card-text>\n            <v-card-text v-if=\"$slots['content']\" :class=\"['panel-content', 'justify', { 'd-flex' : flex }]\">\n                <slot name=\"content\"></slot>\n            </v-card-text>\n        </v-card>\n    </div>\n</template>\n\n<script>\nlet uuid = 0;\nexport default {\n    name: 'panel',\n    props: { \n        header : { default: '', type: String }, \n        'fillHeight' : { default: false, type: Boolean }, \n        'collapsible' : { default: false, type: Boolean },\n        'collapsed' : { default: false, type: Boolean },\n        'flex' : { default: true, type: Boolean },\n        'elevation' : { default: null, type: Number }\n    },\n    data() {\n        return {\n            isCollapsed: this.collapsed,\n        }\n    },\n    beforeCreate() {\n        this.uuid = 'panel-' + uuid.toString();\n        uuid += 1;\n    },\n}\n<\/script>\n\n<style scoped>\n.panel-root, .panel-content {\n    flex-direction: column;\n}\n\n.panel-root header, .panel-content {\n    contain: content;\n}\n\n.panel-root nav {\n    flex: 0;\n}\n\n.panel-root .force-fill-height {\n    display: flex;\n    height: 100% !important;\n}\n\n.panel-root >>> .v-toolbar {\n    background-repeat: repeat;\n}\n\n.theme--light .panel-root >>> .v-toolbar {\n    background: url('./assets/spiration-dark.png');\n    \n}\n\n.theme--dark .panel-root >>> .v-toolbar {\n    background: url('./assets/spiration-darker.png');\n}\n\n.panel-root >>> .text-h6 {\n    margin-bottom: -5px;\n}\n\n.panel-root >>> .text-h6 i.v-icon {\n    font-size: 1em;\n    vertical-align: bottom;\n}\n</style>" ],
                sourceRoot: ""
            } ]);
            const p = d;
        },
        864: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i)()(a());
            s.push([ e.id, "\n[data-v-54679682] .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/ResultLocal.vue" ],
                names: [],
                mappings: ";AAkGA;IACA,gCAAA;AACA",
                sourcesContent: [ '<template>\n<Local \n    :title="appTitle"\n    @uploadData="handleUploadData"\n    @downloadData="handleDownloadData"\n>\n    <template v-slot:default>\n        <v-tabs v-if="hits" center-active grow style="margin-bottom: 1em" show-arrows>\n            <v-tab v-for="(entry, index) in hits" :key="entry.query.header" @click="changeResult(index)">\n                {{ entry.query.header }} ({{ entry.results[0].alignments ? entry.results[0].alignments.length : 0 }})\n            </v-tab>\n        </v-tabs>\n        <ResultView\n            :key="currentIndex"\n            :ticket="ticket"\n            :error="error"\n            :mode="mode"\n            :hits="currentResult"\n            :selectedDatabases="selectedDatabases"\n            :tableMode="tableMode"\n        />       \n    </template>\n</Local>\n</template>\n\n<script>\nimport { parseResultsList, download, dateTime } from \'./Utilities.js\';\nimport ResultMixin from \'./ResultMixin.vue\';\nimport ResultView from \'./ResultView.vue\';\nimport Local from \'./Local.vue\';\n\nexport default {\n    name: \'result\',\n    mixins: [ResultMixin],\n    components: { ResultView, Local },\n    data() {\n        return {\n            currentIndex: 0\n        };\n    },\n    mounted() {\n        document.onreadystatechange = () => {\n            if (document.readyState == "complete") {\n                let div = document.getElementById("data");\n                if (!div) {\n                    return null;\n                }\n                let data = JSON.parse(div.textContent);\n                this.fetchData(data);\n            }\n        }\n    },\n    computed: {\n        appTitle() {\n            return `${__STRINGS__.APP_NAME} Search`;\n        },\n        currentResult() {\n            if (this.hits === null)\n                return null;\n            return this.hits[this.currentIndex];\n        },\n        currentQuery() {\n            if (this.hits === null)\n                return "";\n            return this.hits[this.currentIndex].query.header;\n        }\n    },\n    methods: {\n        changeResult(newRes) {\n            this.currentIndex = newRes;\n            this.setColorScheme();\n        },\n        handleUploadData(data) {\n            this.fetchData(data);\n        },\n        handleDownloadData() {\n            if (!this.hits) {\n                return null;\n            }\n            download(this.hits, `${__APP__}-${dateTime()}.json`);\n        },\n        resetProperties() {\n            this.ticket = "";\n            this.error = "";\n            this.mode = "";\n            this.hits = null;\n            this.selectedDatabases = 0;\n            this.tableMode = 0;\n        },\n        fetchData(data) {\n            this.resetProperties();\n            this.hits = parseResultsList(data);\n        }\n    }\n};\n<\/script>\n\n<style scoped>\n::v-deep .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n</style>\n<style>\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        8742: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i)()(a());
            s.push([ e.id, "\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/ResultLocal.vue" ],
                names: [],
                mappings: ";AAuGA;IACA,oCAAA;AACA;AAEA;IACA,oCAAA;AACA",
                sourcesContent: [ '<template>\n<Local \n    :title="appTitle"\n    @uploadData="handleUploadData"\n    @downloadData="handleDownloadData"\n>\n    <template v-slot:default>\n        <v-tabs v-if="hits" center-active grow style="margin-bottom: 1em" show-arrows>\n            <v-tab v-for="(entry, index) in hits" :key="entry.query.header" @click="changeResult(index)">\n                {{ entry.query.header }} ({{ entry.results[0].alignments ? entry.results[0].alignments.length : 0 }})\n            </v-tab>\n        </v-tabs>\n        <ResultView\n            :key="currentIndex"\n            :ticket="ticket"\n            :error="error"\n            :mode="mode"\n            :hits="currentResult"\n            :selectedDatabases="selectedDatabases"\n            :tableMode="tableMode"\n        />       \n    </template>\n</Local>\n</template>\n\n<script>\nimport { parseResultsList, download, dateTime } from \'./Utilities.js\';\nimport ResultMixin from \'./ResultMixin.vue\';\nimport ResultView from \'./ResultView.vue\';\nimport Local from \'./Local.vue\';\n\nexport default {\n    name: \'result\',\n    mixins: [ResultMixin],\n    components: { ResultView, Local },\n    data() {\n        return {\n            currentIndex: 0\n        };\n    },\n    mounted() {\n        document.onreadystatechange = () => {\n            if (document.readyState == "complete") {\n                let div = document.getElementById("data");\n                if (!div) {\n                    return null;\n                }\n                let data = JSON.parse(div.textContent);\n                this.fetchData(data);\n            }\n        }\n    },\n    computed: {\n        appTitle() {\n            return `${__STRINGS__.APP_NAME} Search`;\n        },\n        currentResult() {\n            if (this.hits === null)\n                return null;\n            return this.hits[this.currentIndex];\n        },\n        currentQuery() {\n            if (this.hits === null)\n                return "";\n            return this.hits[this.currentIndex].query.header;\n        }\n    },\n    methods: {\n        changeResult(newRes) {\n            this.currentIndex = newRes;\n            this.setColorScheme();\n        },\n        handleUploadData(data) {\n            this.fetchData(data);\n        },\n        handleDownloadData() {\n            if (!this.hits) {\n                return null;\n            }\n            download(this.hits, `${__APP__}-${dateTime()}.json`);\n        },\n        resetProperties() {\n            this.ticket = "";\n            this.error = "";\n            this.mode = "";\n            this.hits = null;\n            this.selectedDatabases = 0;\n            this.tableMode = 0;\n        },\n        fetchData(data) {\n            this.resetProperties();\n            this.hits = parseResultsList(data);\n        }\n    }\n};\n<\/script>\n\n<style scoped>\n::v-deep .v-app-bar-title__content {\n    text-overflow: revert !important;\n}\n</style>\n<style>\n.theme--light .panel-root .v-toolbar {\n    background-color: #454545 !important;\n}\n\n.theme--dark .panel-root .v-toolbar {\n    background-color: #1e1e1e !important;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        405: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i)()(a());
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
        7866: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i)()(a());
            s.push([ e.id, "\n.structure-wrapper[data-v-739834d6] {\n    width: 400px;\n    height: 300px;\n    margin: 0 auto;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/StructureViewer.vue" ],
                names: [],
                mappings: ";AAkZA;IACA,YAAA;IACA,aAAA;IACA,cAAA;AACA",
                sourcesContent: [ "<template>\n<div class=\"structure-panel\" v-if=\"'tCa' in alignment\">\n    <StructureViewerTooltip attach=\".structure-panel\" />\n    <div class=\"structure-wrapper\" ref=\"structurepanel\">\n        <table v-if=\"tmAlignResults\" class=\"tmscore-panel\" v-bind=\"tmPanelBindings\">\n            <tr>\n                <td class=\"left-cell\">TM-Score:</td>\n                <td class=\"right-cell\">{{ tmAlignResults.tmScore }}</td>\n            </tr>\n            <tr>\n                <td class=\"left-cell\">RMSD:</td>\n                <td class=\"right-cell\">{{ tmAlignResults.rmsd  }}</td>\n            </tr>\n        </table>\n        <StructureViewerToolbar\n            :isFullscreen=\"isFullscreen\"\n            :showQuery=\"showQuery\"\n            :showTarget=\"showTarget\"\n            :showArrows=\"showArrows\"\n            @makeImage=\"handleMakeImage\"\n            @makePDB=\"handleMakePDB\"\n            @resetView=\"handleResetView\"\n            @toggleFullscreen=\"handleToggleFullscreen\"\n            @toggleTarget=\"handleToggleTarget\"\n            @toggleQuery=\"handleToggleQuery\"\n            @toggleArrows=\"handleToggleArrows\"\n            @toggleSpin=\"handleToggleSpin\"\n        />\n        <div class=\"structure-viewer\" ref=\"viewport\" />\n    </div>\n</div>\n</template>\n\n<script>\nimport StructureViewerTooltip from './StructureViewerTooltip.vue';\nimport StructureViewerToolbar from './StructureViewerToolbar.vue';\nimport StructureViewerMixin from './StructureViewerMixin.vue';\nimport { mockPDB, makeSubPDB, transformStructure  } from './Utilities.js';\nimport { pulchra } from 'pulchra-wasm';\nimport { tmalign, parse as parseTMOutput, parseMatrix as parseTMMatrix } from 'tmalign-wasm';\n\nimport Panel from './Panel.vue';\nimport { Shape, Selection, download, ColormakerRegistry, PdbWriter } from 'ngl';\n\n// Create NGL arrows from array of ([X, Y, Z], [X, Y, Z]) pairs\nfunction createArrows(matches) {\n    const shape = new Shape('shape');\n    for (let i = 0; i < matches.length; i++) {\n        const [a, b] = matches[i];\n        shape.addArrow(a, b, [0, 1, 1], 0.4);\n    }\n    return shape;\n}\n\n// Get XYZ coordinates of CA of a given residue\nconst xyz = (structure, resIndex) => {\n    var rp = structure.getResidueProxy();\n    var ap = structure.getAtomProxy();\n    rp.index = resIndex;\n    ap.index = rp.getAtomIndexByName('CA');\n    return [ap.x, ap.y, ap.z];\n}\n\n// Map 1-based indices in a selection to residue index/resno\nconst makeChainMap = (structure, sele) => {\n    let map = new Map()\n    let idx = 1;\n    structure.eachResidue(rp => {\n        map.set(idx++, { index: rp.index, resno: rp.resno });\n    }, new Selection(sele));\n    return map\n}\n\nexport default {\n    name: \"StructureViewer\",\n    components: {\n        Panel,\n        StructureViewerTooltip,\n        StructureViewerToolbar,\n    },\n    mixins: [\n        StructureViewerMixin,\n    ],\n    data: () => ({\n        qChainResMap: null,\n        qMatches: [],\n        queryChain: '',\n        queryRepr: null,\n        selection: null,\n        showArrows: false,\n        showQuery: 0,\n        showTarget: 'aligned',\n        tMatches: [],\n        targetRepr: null,\n        tmAlignResults: null,\n    }),\n    props: {\n        alignment: { type: Object },\n        queryFile: { type: String },\n        queryAlignedColor: { type: String, default: \"#1E88E5\" },\n        queryUnalignedColor: { type: String, default: \"#A5CFF5\" },\n        targetAlignedColor: { type: String, default: \"#FFC107\" },\n        targetUnalignedColor: { type: String, default: \"#FFE699\" },\n        qRepr: { type: String, default: \"cartoon\" },\n        tRepr: { type: String, default: \"cartoon\" },\n        queryMap: { type: Array, default: null },\n        targetMap: { type: Array, default: null },\n        hits: { type: Object }\n    },\n    methods: {\n        // Parses two alignment strings, and saves matching residues\n        // Each match contains the index of the residue in the structure and a callback\n        // function to retrieve the residue's CA XYZ coordinates to allow retrieval\n        // before and after superposition (with updated coords)\n        saveMatchingResidues(aln1, aln2, str1, str2) {\n            if (aln1.length !== aln2.length) return\n            this.qMatches = []\n            this.tMatches = []\n            for (let i = 0; i < aln1.length; i++) {\n                if (aln1[i] === '-' || aln2[i] === '-') {\n                    continue;\n                }\n                // Make sure this residue actually exists in NGL structure representation\n                // e.g. d1b0ba starts with X, reported in alignment but removed by Pulchra\n                let qIdx = this.qChainResMap.get(this.queryMap[i]);\n                if (qIdx === undefined) {\n                    continue;\n                }\n                // Must be 0-based for xyz()\n                let tIdx = this.targetMap[i] - 1;\n                this.qMatches.push({ index: qIdx.index, xyz: () => xyz(str1, qIdx.index) })\n                this.tMatches.push({ index: tIdx, xyz: () => xyz(str2, tIdx) })\n            }\n        },\n        handleToggleArrows() {\n            if (!this.stage) return;\n            this.showArrows = !this.showArrows;\n        },\n        handleToggleQuery() {\n            if (!this.stage) return;\n            if (__LOCAL__) {\n                this.showQuery = (this.showQuery === 0) ? 1 : 0;\n            } else {\n                this.showQuery = (this.showQuery === 2) ? 0 : this.showQuery + 1;\n            }\n        },\n        handleToggleTarget() {\n            if (!this.stage) return;\n            this.showTarget = this.showTarget === 'aligned' ? 'full' : 'aligned';\n        },\n        setSelectionByRange(start, end) {\n            if (!this.targetRepr) return\n            this.targetRepr.setSelection(`${start}-${end}`)\n            this.stage.autoView(100)\n        },\n        setSelectionData(start, end) {\n            this.selection = [start, end]\n        },\n        setSelection(val) {\n            if (val === 'full') this.setSelectionData(1, this.alignment.dbLen)\n            else this.setSelectionData(this.alignment.dbStartPos, this.alignment.dbEndPos)\n        },\n        setQuerySelection() {\n            if (!this.queryRepr) return;\n            this.queryRepr.setSelection(this.querySele)\n            this.stage.autoView(100)\n        },\n        renderArrows() {\n            // Update arrow shape on shape update\n            if (!this.stage) return\n            if (this.arrowShape) this.arrowShape.dispose()\n            let matches = new Array()\n            for (let i = 0; i < this.tMatches.length; i++) {\n                let qMatch = this.qMatches[i]\n                let tMatch = this.tMatches[i]\n                if (this.selection && !(tMatch.index >= this.selection[0] - 1 && tMatch.index < this.selection[1]))\n                    continue\n                matches.push([qMatch.xyz(), tMatch.xyz()])\n            }\n            this.arrowShape = this.stage.addComponentFromObject(createArrows(matches))\n            this.arrowShape.addRepresentation('buffer')\n            this.arrowShape.setVisibility(this.showArrows)\n        },\n        makeImage() {\n            if (!this.stage) return\n            let accession = null;\n            if (this.queryRepr) {\n                const qIndex = this.hits.query.header.indexOf(' ');\n                accession = qIndex === -1 ? this.hits.query.header : this.hits.query.header.substring(0, qIndex);\n            }\n            this.stage.viewer.setLight(undefined, undefined, undefined, 0.2)\n            this.stage.makeImage({\n                trim: true,\n                factor: (this.isFullscreen) ? 1 : 8,\n                antialias: true,\n                transparent: true,\n            }).then((blob) => {\n                this.stage.viewer.setLight(undefined, undefined, undefined, this.$vuetify.theme.dark ? 0.4 : 0.2)\n                download(blob, (accession ? (qAccession + '-') : '') + this.alignment.target + \".png\")\n            })\n        },\n        makePdb() {\n            if (!this.stage) return\n            let qPDB, tPDB, result;\n            let accession = null;\n            if (this.queryRepr) {\n                qPDB = new PdbWriter(this.queryRepr.repr.structure, { renumberSerial: false }).getData()\n                qPDB = qPDB.split('\\n').filter(line => line.startsWith('ATOM')).join('\\n')\n                const qIndex = this.hits.query.header.indexOf(' ');\n                accession = qIndex === -1 ? this.hits.query.header : this.hits.query.header.substring(0, qIndex);\n            }\n            if (this.targetRepr) {\n                tPDB = new PdbWriter(this.targetRepr.repr.structure, { renumberSerial: false }).getData()\n                tPDB = tPDB.split('\\n').filter(line => line.startsWith('ATOM')).join('\\n')\n            }\n            if (!qPDB && !tPDB) return\n\n            if (qPDB && tPDB) {\n                result =\n`TITLE     ${accession} - ${this.alignment.target}\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms might have been re-generated by PULCHRA,\nREMARK              if they are not present in the original PDB file.\nMODEL        1\n${qPDB}\nENDMDL\nMODEL        2\n${tPDB}\nENDMDL\nEND\n`\n            } else {\n                result =\n`TITLE     ${this.alignment.target}\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms were re-generated by PULCHRA.\nMODEL        1\n${tPDB}\nENDMDL\nEND\n`\n            }\n            download(new Blob([result], { type: 'text/plain' }), (accession ? (accession + '-') : '') + this.alignment.target + \".pdb\")\n        }\n    },\n    watch: {\n        'showTarget': function(val, _) {\n            this.setSelection(val)\n        },\n        'showArrows': function(val, _) {\n            if (!this.stage || !this.arrowShape) return\n            this.arrowShape.setVisibility(val)\n        },\n        'selection': function([start, end]) {\n            this.setSelectionByRange(start, end)\n            this.renderArrows()\n        },\n        'showQuery': function() {\n            if (!this.stage) return\n            this.setQuerySelection()\n        },\n    },\n    computed: {\n        queryChainId: function() {\n            return (this.queryChain) ? this.queryChain.charCodeAt(0) - 'A'.charCodeAt(0) : 'A'\n        },\n        queryChainSele: function() {\n            return (this.queryChain) ? `(:${this.queryChain.toUpperCase()} OR :${this.queryChain.toLowerCase()})` : '';\n        },\n        querySubSele: function() {\n            if (!this.qChainResMap) {\n                return '';\n            }\n            let start = this.qChainResMap.get(this.alignment.qStartPos);\n            let end   = this.qChainResMap.get(this.alignment.qEndPos);\n            let sele  = `${start.resno}-${end.resno}`;\n            if (this.queryChain) {\n                sele = `${sele} AND ${this.queryChainSele}`;\n            }\n            return sele\n        },\n        querySele: function() {\n            if (this.showQuery == 0)\n                return this.querySubSele;\n            if (this.showQuery == 1)\n                return this.queryChainSele;\n            return ''\n        },\n        targetSele: function() {\n            if (!this.selection) return ''\n            return `${this.selection[0]}-${this.selection[1]}`;\n        },\n        tmPanelBindings: function() {\n            return (this.isFullscreen) ? { 'style': 'margin-top: 10px; font-size: 2em; line-height: 2em' } : {  }\n        },\n    },\n    beforeMount() {\n        let qChain = this.hits.query.header.match(/_([A-Z]+?)/m)\n        if (qChain) this.queryChain = qChain[1] //.replace('_', '')\n    },\n    async mounted() {\n        if (typeof(this.alignment.tCa) == \"undefined\")\n            return;\n\n        const targetPdb = await pulchra(mockPDB(this.alignment.tCa, this.alignment.tSeq));\n        const target = await this.stage.loadFile(new Blob([targetPdb], { type: 'text/plain' }), {ext: 'pdb', firstModelOnly: true});\n        this.targetSchemeId = ColormakerRegistry.addSelectionScheme([\n            [this.targetAlignedColor, `${this.alignment.dbStartPos}-${this.alignment.dbEndPos}`],\n            [this.targetUnalignedColor, \"*\"]\n        ], \"_targetScheme\")\n\n        // Download from server --\x3e full input PDB from /result/query endpoint, saved with JSON.stringify\n        //                local --\x3e qCa string\n        // Tickets prefixed with 'user-' only occur on user uploaded files\n        let queryPdb = \"\";\n        let hasQuery = true;\n        if (this.$LOCAL) {\n            if (this.hits.query.hasOwnProperty('pdb')) {\n                queryPdb = JSON.parse(this.hits.query.pdb);\n            } else {\n                queryPdb = await pulchra(mockPDB(this.hits.query.qCa, this.hits.query.sequence))\n            }\n        } else if (this.$route.params.ticket.startsWith('user')) {\n            // Check for special 'user' ticket for when users have uploaded JSON\n            if (this.hits.query.hasOwnProperty('pdb')) {\n                queryPdb = JSON.parse(this.hits.query.pdb);\n            } else {\n                const localData = this.$root.userData[this.$route.params.entry];\n                queryPdb = await pulchra(mockPDB(localData.query.qCa, localData.query.sequence));\n            }\n        } else {\n            try {\n                const request = await this.$axios.get(\"api/result/\" + this.$route.params.ticket + '/query');\n                queryPdb = request.data;\n            } catch (e) {\n                // console.log(e);\n                queryPdb = \"\";\n                hasQuery = false;\n            }\n        }\n\n        if (hasQuery) {\n            let data = '';\n            for (let line of queryPdb.split('\\n')) {\n                let numCols = Math.max(0, 80 - line.length);\n                let newLine = line + ' '.repeat(numCols) + '\\n';\n                data += newLine\n            }\n            queryPdb = data;\n\n            let query = await this.stage.loadFile(new Blob([queryPdb], { type: 'text/plain' }), {ext: 'pdb', firstModelOnly: true});\n            if (query && query.structure.getAtomProxy().isCg()) {\n                queryPdb = await pulchra(queryPdb);\n                query = await this.stage.loadFile(new Blob([queryPdb], { type: 'text/plain' }), {ext: 'pdb', firstModelOnly: true});\n            }\n\n            // Map 1-based indices to residue index/resno; only need for query structure\n            // Use queryChainSele to make all selections based on actual query chain\n            this.qChainResMap = makeChainMap(query.structure, this.queryChainSele)\n            this.saveMatchingResidues(this.alignment.qAln, this.alignment.dbAln, query.structure, target.structure)\n\n            // Generate colorschemes for query/target based on alignment\n            this.querySchemeId = ColormakerRegistry.addSelectionScheme([\n                [this.queryAlignedColor, this.querySubSele],\n                [this.queryUnalignedColor, \"*\"],\n            ], \"_queryScheme\")\n\n            // Generate subsetted PDBs for TM-align\n            let qSubPdb = makeSubPDB(query.structure, this.querySubSele)\n            let tSubPdb = makeSubPDB(target.structure, `${this.alignment.dbStartPos}-${this.alignment.dbEndPos}`)\n            let alnFasta = `>target\\n${this.alignment.dbAln}\\n\\n>query\\n${this.alignment.qAln}`\n\n            // Re-align target to query using TM-align for better superposition\n            // Target 1st since TM-align generates superposition matrix for 1st structure\n            tmalign(tSubPdb, qSubPdb, alnFasta).then(out => {\n                this.tmAlignResults = parseTMOutput(out.output)\n                let { t, u } = parseTMMatrix(out.matrix)\n                transformStructure(target.structure, t, u)\n                this.queryRepr = query.addRepresentation(this.qRepr, {color: this.querySchemeId})\n                this.targetRepr = target.addRepresentation(this.tRepr, {color: this.targetSchemeId})\n            }).then(() => {\n                this.setSelection(this.showTarget)\n                this.setQuerySelection()\n                this.stage.autoView()\n            })\n        } else {\n            this.targetRepr = target.addRepresentation(this.tRepr, {color: this.targetSchemeId})\n            this.setSelection(this.showTarget)\n            this.setQuerySelection()\n            this.stage.autoView()\n        }\n    },\n}\n<\/script>\n\n<style scoped>\n.structure-wrapper {\n    width: 400px;\n    height: 300px;\n    margin: 0 auto;\n}\n</style>\n\n<style>\n.theme--dark .structure-wrapper .v-tooltip__content {\n    background: rgba(97, 97, 97, 0.3);\n}\n/* @media only screen and (max-width: 600px) {\n    .structure-wrapper {\n        width: 300px;\n    }\n} */\n.structure-viewer {\n    width: 100%;\n    height: 100%;\n}\n.structure-viewer canvas {\n    border-radius: 2px;\n}\n.structure-panel {\n    position: relative;\n}\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n.tmscore-panel {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    font-family: monospace;\n    color: rgb(31, 119, 180);\n}\n.left-cell {\n    text-align: right;\n    width: 50%;\n}\n.right-cell {\n    text-align: left;\n    width: 50%;\n    padding-left: 0.3em;\n}\n</style>" ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        6732: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i)()(a());
            s.push([ e.id, "\n.theme--dark .structure-wrapper .v-tooltip__content {\n    background: rgba(97, 97, 97, 0.3);\n}\n/* @media only screen and (max-width: 600px) {\n    .structure-wrapper {\n        width: 300px;\n    }\n} */\n.structure-viewer {\n    width: 100%;\n    height: 100%;\n}\n.structure-viewer canvas {\n    border-radius: 2px;\n}\n.structure-panel {\n    position: relative;\n}\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n.tmscore-panel {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    font-family: monospace;\n    color: rgb(31, 119, 180);\n}\n.left-cell {\n    text-align: right;\n    width: 50%;\n}\n.right-cell {\n    text-align: left;\n    width: 50%;\n    padding-left: 0.3em;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/StructureViewer.vue" ],
                names: [],
                mappings: ";AA0ZA;IACA,iCAAA;AACA;AACA;;;;GAIA;AACA;IACA,WAAA;IACA,YAAA;AACA;AACA;IACA,kBAAA;AACA;AACA;IACA,kBAAA;AACA;AACA;IACA,oBAAA;IACA,mBAAA;IACA,kBAAA;IACA,uBAAA;IACA,WAAA;IACA,SAAA;IACA,UAAA;IACA,OAAA;AACA;AACA;IACA,kBAAA;IACA,WAAA;IACA,MAAA;IACA,OAAA;IACA,UAAA;IACA,sBAAA;IACA,wBAAA;AACA;AACA;IACA,iBAAA;IACA,UAAA;AACA;AACA;IACA,gBAAA;IACA,UAAA;IACA,mBAAA;AACA",
                sourcesContent: [ "<template>\n<div class=\"structure-panel\" v-if=\"'tCa' in alignment\">\n    <StructureViewerTooltip attach=\".structure-panel\" />\n    <div class=\"structure-wrapper\" ref=\"structurepanel\">\n        <table v-if=\"tmAlignResults\" class=\"tmscore-panel\" v-bind=\"tmPanelBindings\">\n            <tr>\n                <td class=\"left-cell\">TM-Score:</td>\n                <td class=\"right-cell\">{{ tmAlignResults.tmScore }}</td>\n            </tr>\n            <tr>\n                <td class=\"left-cell\">RMSD:</td>\n                <td class=\"right-cell\">{{ tmAlignResults.rmsd  }}</td>\n            </tr>\n        </table>\n        <StructureViewerToolbar\n            :isFullscreen=\"isFullscreen\"\n            :showQuery=\"showQuery\"\n            :showTarget=\"showTarget\"\n            :showArrows=\"showArrows\"\n            @makeImage=\"handleMakeImage\"\n            @makePDB=\"handleMakePDB\"\n            @resetView=\"handleResetView\"\n            @toggleFullscreen=\"handleToggleFullscreen\"\n            @toggleTarget=\"handleToggleTarget\"\n            @toggleQuery=\"handleToggleQuery\"\n            @toggleArrows=\"handleToggleArrows\"\n            @toggleSpin=\"handleToggleSpin\"\n        />\n        <div class=\"structure-viewer\" ref=\"viewport\" />\n    </div>\n</div>\n</template>\n\n<script>\nimport StructureViewerTooltip from './StructureViewerTooltip.vue';\nimport StructureViewerToolbar from './StructureViewerToolbar.vue';\nimport StructureViewerMixin from './StructureViewerMixin.vue';\nimport { mockPDB, makeSubPDB, transformStructure  } from './Utilities.js';\nimport { pulchra } from 'pulchra-wasm';\nimport { tmalign, parse as parseTMOutput, parseMatrix as parseTMMatrix } from 'tmalign-wasm';\n\nimport Panel from './Panel.vue';\nimport { Shape, Selection, download, ColormakerRegistry, PdbWriter } from 'ngl';\n\n// Create NGL arrows from array of ([X, Y, Z], [X, Y, Z]) pairs\nfunction createArrows(matches) {\n    const shape = new Shape('shape');\n    for (let i = 0; i < matches.length; i++) {\n        const [a, b] = matches[i];\n        shape.addArrow(a, b, [0, 1, 1], 0.4);\n    }\n    return shape;\n}\n\n// Get XYZ coordinates of CA of a given residue\nconst xyz = (structure, resIndex) => {\n    var rp = structure.getResidueProxy();\n    var ap = structure.getAtomProxy();\n    rp.index = resIndex;\n    ap.index = rp.getAtomIndexByName('CA');\n    return [ap.x, ap.y, ap.z];\n}\n\n// Map 1-based indices in a selection to residue index/resno\nconst makeChainMap = (structure, sele) => {\n    let map = new Map()\n    let idx = 1;\n    structure.eachResidue(rp => {\n        map.set(idx++, { index: rp.index, resno: rp.resno });\n    }, new Selection(sele));\n    return map\n}\n\nexport default {\n    name: \"StructureViewer\",\n    components: {\n        Panel,\n        StructureViewerTooltip,\n        StructureViewerToolbar,\n    },\n    mixins: [\n        StructureViewerMixin,\n    ],\n    data: () => ({\n        qChainResMap: null,\n        qMatches: [],\n        queryChain: '',\n        queryRepr: null,\n        selection: null,\n        showArrows: false,\n        showQuery: 0,\n        showTarget: 'aligned',\n        tMatches: [],\n        targetRepr: null,\n        tmAlignResults: null,\n    }),\n    props: {\n        alignment: { type: Object },\n        queryFile: { type: String },\n        queryAlignedColor: { type: String, default: \"#1E88E5\" },\n        queryUnalignedColor: { type: String, default: \"#A5CFF5\" },\n        targetAlignedColor: { type: String, default: \"#FFC107\" },\n        targetUnalignedColor: { type: String, default: \"#FFE699\" },\n        qRepr: { type: String, default: \"cartoon\" },\n        tRepr: { type: String, default: \"cartoon\" },\n        queryMap: { type: Array, default: null },\n        targetMap: { type: Array, default: null },\n        hits: { type: Object }\n    },\n    methods: {\n        // Parses two alignment strings, and saves matching residues\n        // Each match contains the index of the residue in the structure and a callback\n        // function to retrieve the residue's CA XYZ coordinates to allow retrieval\n        // before and after superposition (with updated coords)\n        saveMatchingResidues(aln1, aln2, str1, str2) {\n            if (aln1.length !== aln2.length) return\n            this.qMatches = []\n            this.tMatches = []\n            for (let i = 0; i < aln1.length; i++) {\n                if (aln1[i] === '-' || aln2[i] === '-') {\n                    continue;\n                }\n                // Make sure this residue actually exists in NGL structure representation\n                // e.g. d1b0ba starts with X, reported in alignment but removed by Pulchra\n                let qIdx = this.qChainResMap.get(this.queryMap[i]);\n                if (qIdx === undefined) {\n                    continue;\n                }\n                // Must be 0-based for xyz()\n                let tIdx = this.targetMap[i] - 1;\n                this.qMatches.push({ index: qIdx.index, xyz: () => xyz(str1, qIdx.index) })\n                this.tMatches.push({ index: tIdx, xyz: () => xyz(str2, tIdx) })\n            }\n        },\n        handleToggleArrows() {\n            if (!this.stage) return;\n            this.showArrows = !this.showArrows;\n        },\n        handleToggleQuery() {\n            if (!this.stage) return;\n            if (__LOCAL__) {\n                this.showQuery = (this.showQuery === 0) ? 1 : 0;\n            } else {\n                this.showQuery = (this.showQuery === 2) ? 0 : this.showQuery + 1;\n            }\n        },\n        handleToggleTarget() {\n            if (!this.stage) return;\n            this.showTarget = this.showTarget === 'aligned' ? 'full' : 'aligned';\n        },\n        setSelectionByRange(start, end) {\n            if (!this.targetRepr) return\n            this.targetRepr.setSelection(`${start}-${end}`)\n            this.stage.autoView(100)\n        },\n        setSelectionData(start, end) {\n            this.selection = [start, end]\n        },\n        setSelection(val) {\n            if (val === 'full') this.setSelectionData(1, this.alignment.dbLen)\n            else this.setSelectionData(this.alignment.dbStartPos, this.alignment.dbEndPos)\n        },\n        setQuerySelection() {\n            if (!this.queryRepr) return;\n            this.queryRepr.setSelection(this.querySele)\n            this.stage.autoView(100)\n        },\n        renderArrows() {\n            // Update arrow shape on shape update\n            if (!this.stage) return\n            if (this.arrowShape) this.arrowShape.dispose()\n            let matches = new Array()\n            for (let i = 0; i < this.tMatches.length; i++) {\n                let qMatch = this.qMatches[i]\n                let tMatch = this.tMatches[i]\n                if (this.selection && !(tMatch.index >= this.selection[0] - 1 && tMatch.index < this.selection[1]))\n                    continue\n                matches.push([qMatch.xyz(), tMatch.xyz()])\n            }\n            this.arrowShape = this.stage.addComponentFromObject(createArrows(matches))\n            this.arrowShape.addRepresentation('buffer')\n            this.arrowShape.setVisibility(this.showArrows)\n        },\n        makeImage() {\n            if (!this.stage) return\n            let accession = null;\n            if (this.queryRepr) {\n                const qIndex = this.hits.query.header.indexOf(' ');\n                accession = qIndex === -1 ? this.hits.query.header : this.hits.query.header.substring(0, qIndex);\n            }\n            this.stage.viewer.setLight(undefined, undefined, undefined, 0.2)\n            this.stage.makeImage({\n                trim: true,\n                factor: (this.isFullscreen) ? 1 : 8,\n                antialias: true,\n                transparent: true,\n            }).then((blob) => {\n                this.stage.viewer.setLight(undefined, undefined, undefined, this.$vuetify.theme.dark ? 0.4 : 0.2)\n                download(blob, (accession ? (qAccession + '-') : '') + this.alignment.target + \".png\")\n            })\n        },\n        makePdb() {\n            if (!this.stage) return\n            let qPDB, tPDB, result;\n            let accession = null;\n            if (this.queryRepr) {\n                qPDB = new PdbWriter(this.queryRepr.repr.structure, { renumberSerial: false }).getData()\n                qPDB = qPDB.split('\\n').filter(line => line.startsWith('ATOM')).join('\\n')\n                const qIndex = this.hits.query.header.indexOf(' ');\n                accession = qIndex === -1 ? this.hits.query.header : this.hits.query.header.substring(0, qIndex);\n            }\n            if (this.targetRepr) {\n                tPDB = new PdbWriter(this.targetRepr.repr.structure, { renumberSerial: false }).getData()\n                tPDB = tPDB.split('\\n').filter(line => line.startsWith('ATOM')).join('\\n')\n            }\n            if (!qPDB && !tPDB) return\n\n            if (qPDB && tPDB) {\n                result =\n`TITLE     ${accession} - ${this.alignment.target}\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms might have been re-generated by PULCHRA,\nREMARK              if they are not present in the original PDB file.\nMODEL        1\n${qPDB}\nENDMDL\nMODEL        2\n${tPDB}\nENDMDL\nEND\n`\n            } else {\n                result =\n`TITLE     ${this.alignment.target}\nREMARK     This file was generated by the Foldseek webserver:\nREMARK       https://search.foldseek.com\nREMARK     Please cite:\nREMARK       https://doi.org/10.1101/2022.02.07.479398\nREMARK     Warning: Non C-alpha atoms were re-generated by PULCHRA.\nMODEL        1\n${tPDB}\nENDMDL\nEND\n`\n            }\n            download(new Blob([result], { type: 'text/plain' }), (accession ? (accession + '-') : '') + this.alignment.target + \".pdb\")\n        }\n    },\n    watch: {\n        'showTarget': function(val, _) {\n            this.setSelection(val)\n        },\n        'showArrows': function(val, _) {\n            if (!this.stage || !this.arrowShape) return\n            this.arrowShape.setVisibility(val)\n        },\n        'selection': function([start, end]) {\n            this.setSelectionByRange(start, end)\n            this.renderArrows()\n        },\n        'showQuery': function() {\n            if (!this.stage) return\n            this.setQuerySelection()\n        },\n    },\n    computed: {\n        queryChainId: function() {\n            return (this.queryChain) ? this.queryChain.charCodeAt(0) - 'A'.charCodeAt(0) : 'A'\n        },\n        queryChainSele: function() {\n            return (this.queryChain) ? `(:${this.queryChain.toUpperCase()} OR :${this.queryChain.toLowerCase()})` : '';\n        },\n        querySubSele: function() {\n            if (!this.qChainResMap) {\n                return '';\n            }\n            let start = this.qChainResMap.get(this.alignment.qStartPos);\n            let end   = this.qChainResMap.get(this.alignment.qEndPos);\n            let sele  = `${start.resno}-${end.resno}`;\n            if (this.queryChain) {\n                sele = `${sele} AND ${this.queryChainSele}`;\n            }\n            return sele\n        },\n        querySele: function() {\n            if (this.showQuery == 0)\n                return this.querySubSele;\n            if (this.showQuery == 1)\n                return this.queryChainSele;\n            return ''\n        },\n        targetSele: function() {\n            if (!this.selection) return ''\n            return `${this.selection[0]}-${this.selection[1]}`;\n        },\n        tmPanelBindings: function() {\n            return (this.isFullscreen) ? { 'style': 'margin-top: 10px; font-size: 2em; line-height: 2em' } : {  }\n        },\n    },\n    beforeMount() {\n        let qChain = this.hits.query.header.match(/_([A-Z]+?)/m)\n        if (qChain) this.queryChain = qChain[1] //.replace('_', '')\n    },\n    async mounted() {\n        if (typeof(this.alignment.tCa) == \"undefined\")\n            return;\n\n        const targetPdb = await pulchra(mockPDB(this.alignment.tCa, this.alignment.tSeq));\n        const target = await this.stage.loadFile(new Blob([targetPdb], { type: 'text/plain' }), {ext: 'pdb', firstModelOnly: true});\n        this.targetSchemeId = ColormakerRegistry.addSelectionScheme([\n            [this.targetAlignedColor, `${this.alignment.dbStartPos}-${this.alignment.dbEndPos}`],\n            [this.targetUnalignedColor, \"*\"]\n        ], \"_targetScheme\")\n\n        // Download from server --\x3e full input PDB from /result/query endpoint, saved with JSON.stringify\n        //                local --\x3e qCa string\n        // Tickets prefixed with 'user-' only occur on user uploaded files\n        let queryPdb = \"\";\n        let hasQuery = true;\n        if (this.$LOCAL) {\n            if (this.hits.query.hasOwnProperty('pdb')) {\n                queryPdb = JSON.parse(this.hits.query.pdb);\n            } else {\n                queryPdb = await pulchra(mockPDB(this.hits.query.qCa, this.hits.query.sequence))\n            }\n        } else if (this.$route.params.ticket.startsWith('user')) {\n            // Check for special 'user' ticket for when users have uploaded JSON\n            if (this.hits.query.hasOwnProperty('pdb')) {\n                queryPdb = JSON.parse(this.hits.query.pdb);\n            } else {\n                const localData = this.$root.userData[this.$route.params.entry];\n                queryPdb = await pulchra(mockPDB(localData.query.qCa, localData.query.sequence));\n            }\n        } else {\n            try {\n                const request = await this.$axios.get(\"api/result/\" + this.$route.params.ticket + '/query');\n                queryPdb = request.data;\n            } catch (e) {\n                // console.log(e);\n                queryPdb = \"\";\n                hasQuery = false;\n            }\n        }\n\n        if (hasQuery) {\n            let data = '';\n            for (let line of queryPdb.split('\\n')) {\n                let numCols = Math.max(0, 80 - line.length);\n                let newLine = line + ' '.repeat(numCols) + '\\n';\n                data += newLine\n            }\n            queryPdb = data;\n\n            let query = await this.stage.loadFile(new Blob([queryPdb], { type: 'text/plain' }), {ext: 'pdb', firstModelOnly: true});\n            if (query && query.structure.getAtomProxy().isCg()) {\n                queryPdb = await pulchra(queryPdb);\n                query = await this.stage.loadFile(new Blob([queryPdb], { type: 'text/plain' }), {ext: 'pdb', firstModelOnly: true});\n            }\n\n            // Map 1-based indices to residue index/resno; only need for query structure\n            // Use queryChainSele to make all selections based on actual query chain\n            this.qChainResMap = makeChainMap(query.structure, this.queryChainSele)\n            this.saveMatchingResidues(this.alignment.qAln, this.alignment.dbAln, query.structure, target.structure)\n\n            // Generate colorschemes for query/target based on alignment\n            this.querySchemeId = ColormakerRegistry.addSelectionScheme([\n                [this.queryAlignedColor, this.querySubSele],\n                [this.queryUnalignedColor, \"*\"],\n            ], \"_queryScheme\")\n\n            // Generate subsetted PDBs for TM-align\n            let qSubPdb = makeSubPDB(query.structure, this.querySubSele)\n            let tSubPdb = makeSubPDB(target.structure, `${this.alignment.dbStartPos}-${this.alignment.dbEndPos}`)\n            let alnFasta = `>target\\n${this.alignment.dbAln}\\n\\n>query\\n${this.alignment.qAln}`\n\n            // Re-align target to query using TM-align for better superposition\n            // Target 1st since TM-align generates superposition matrix for 1st structure\n            tmalign(tSubPdb, qSubPdb, alnFasta).then(out => {\n                this.tmAlignResults = parseTMOutput(out.output)\n                let { t, u } = parseTMMatrix(out.matrix)\n                transformStructure(target.structure, t, u)\n                this.queryRepr = query.addRepresentation(this.qRepr, {color: this.querySchemeId})\n                this.targetRepr = target.addRepresentation(this.tRepr, {color: this.targetSchemeId})\n            }).then(() => {\n                this.setSelection(this.showTarget)\n                this.setQuerySelection()\n                this.stage.autoView()\n            })\n        } else {\n            this.targetRepr = target.addRepresentation(this.tRepr, {color: this.targetSchemeId})\n            this.setSelection(this.showTarget)\n            this.setQuerySelection()\n            this.stage.autoView()\n        }\n    },\n}\n<\/script>\n\n<style scoped>\n.structure-wrapper {\n    width: 400px;\n    height: 300px;\n    margin: 0 auto;\n}\n</style>\n\n<style>\n.theme--dark .structure-wrapper .v-tooltip__content {\n    background: rgba(97, 97, 97, 0.3);\n}\n/* @media only screen and (max-width: 600px) {\n    .structure-wrapper {\n        width: 300px;\n    }\n} */\n.structure-viewer {\n    width: 100%;\n    height: 100%;\n}\n.structure-viewer canvas {\n    border-radius: 2px;\n}\n.structure-panel {\n    position: relative;\n}\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n.tmscore-panel {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    font-family: monospace;\n    color: rgb(31, 119, 180);\n}\n.left-cell {\n    text-align: right;\n    width: 50%;\n}\n.right-cell {\n    text-align: left;\n    width: 50%;\n    padding-left: 0.3em;\n}\n</style>" ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        8786: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i)()(a());
            s.push([ e.id, "\n.structure-panel[data-v-06a02575] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n.structure-viewer[data-v-06a02575] {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/StructureViewerMSA.vue" ],
                names: [],
                mappings: ";AAyXA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;AACA;AACA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;IACA,SAAA;IACA,OAAA;IACA,QAAA;IACA,MAAA;IACA,SAAA;IACA,UAAA;IACA,gBAAA;AACA",
                sourcesContent: [ '<template>\n<div class="structure-panel">\n    <StructureViewerTooltip attach=".structure-panel" />\n    <div class="structure-wrapper" ref="structurepanel">\n        <StructureViewerToolbar\n            :isFullscreen="isFullscreen"\n            @makeImage="handleMakeImage"\n            @makePDB="handleMakePDB"\n            @resetView="handleResetView"\n            @toggleFullscreen="handleToggleFullscreen"\n            @toggleSpin="handleToggleSpin"\n            disableArrowButton\n            disableQueryButton\n            disableTargetButton\n            style="position: absolute; bottom: 8px;"\n        />\n        <div class="structure-viewer" ref="viewport" />\n    </div>\n</div>\n</template>\n\n<script>\nimport StructureViewerTooltip from \'./StructureViewerTooltip.vue\';\nimport StructureViewerToolbar from \'./StructureViewerToolbar.vue\';\nimport StructureViewerMixin from \'./StructureViewerMixin.vue\';\nimport { mockPDB, makeSubPDB  } from \'./Utilities.js\';\nimport { download, PdbWriter, Matrix4, Quaternion, Vector3 } from \'ngl\';\nimport { pulchra } from \'pulchra-wasm\';\nimport { tmalign, parse as parseTMOutput, parseMatrix as parseTMMatrix } from \'tmalign-wasm\';\n\n// Generate THREE.Matrix4 from 3x3 rotation and 1x3 translation matrices\n// Can give this directly to StructureComponent.setTransform() to superpose\nfunction makeMatrix4(translation, rotation) {\n    const u = rotation.slice();\n    for (let i = 0; i < 3; i++) {\n        u[i].push(translation[i]);\n    }\n    const nglMatrix = new Matrix4();\n    const flatMatrix = [].concat(...u, [0, 0, 0, 1]);\n    nglMatrix.set(...flatMatrix);\n    return nglMatrix;\n}\n\n// Decompose Matrix4 into Quaternion, Position and Scale\n// Slerp between Quaternions, linear interpolate position for some t (0.0-1.0)\n// Compose new Matrix4 for transformation.\nfunction interpolateMatrices(a, b, t) {\n    const quaternionA = new Quaternion();\n    const positionA   = new Vector3();\n    const scaleA      = new Vector3();\n    const quaternionB = new Quaternion();\n    const positionB   = new Vector3();\n    const scaleB      = new Vector3();\n    a.decompose(positionA, quaternionA, scaleA);\n    b.decompose(positionB, quaternionB, scaleB);\n    const quaternion = new Quaternion();\n    quaternion.slerp(quaternionB, t);\n    const position = new Vector3();\n    position.lerpVectors(positionA, positionB, t);\n    const matrix = new Matrix4();\n    matrix.compose(position, quaternion, scaleA);\n    return matrix;\n}\n\nfunction animateMatrix(structure, newMatrix, duration) {\n    let startTime = null;\n    const oldMatrix = structure.matrix;\n    const animate = (currentTime) => {\n        if (!startTime) {\n            startTime = currentTime;\n        }\n        let progress = Math.min(1, (currentTime - startTime) / duration);\n        let interpolated = interpolateMatrices(oldMatrix, newMatrix, progress);\n        structure.setTransform(interpolated);\n        if (progress < 1) {\n            window.requestAnimationFrame(animate);\n        }\n    }\n    window.requestAnimationFrame(animate);\n}\n\n// Mock alignment object from two (MSA-derived) aligned strings\nfunction mockAlignment(one, two) {\n    let res = { backtrace: "", qAln: "", dbAln: "" };\n    let started = false; // flag for first Match column in backtrace\n    let m = 0;           // index in msa\n    let qr = 0;          // index in seq\n    let tr = 0;\n    let qBuffer = "";\n    let tBuffer = "";\n    while (m < one.length) {\n        const qc = one[m];\n        const tc = two[m];\n        if (qc === \'-\' && tc === \'-\') {\n            // Skip gap columns\n        } else if (qc === \'-\') {\n            if (started) {\n                res.backtrace += \'D\';               \n                qBuffer += qc;\n                tBuffer += tc;\n            }\n            ++tr;\n        } else if (tc === \'-\') {\n            if (started) {\n                res.backtrace += \'I\';\n                qBuffer += qc;\n                tBuffer += tc;\n            }\n            ++qr;\n        } else {\n            if (started) {\n                res.qAln += qBuffer;\n                res.dbAln += tBuffer;\n                qBuffer = "";\n                tBuffer = "";\n            } else {\n                started = true;\n                res.qStartPos = qr;\n                res.dbStartPos = tr;\n            }\n            res.backtrace += \'M\';\n            qBuffer += qc;\n            tBuffer += tc;\n            res.qEndPos = qr;\n            res.dbEndPos = tr;\n            ++qr;\n            ++tr;\n        }\n        ++m;\n    }\n    res.qStartPos++;\n    res.dbStartPos++;\n    res.qSeq  = one.replace(/-/g, \'\');\n    res.tSeq  = two.replace(/-/g, \'\');\n    return res;\n}\n\nfunction generateSelections(newValues, oldValues, refIndex) {\n    const update = [];\n    const remove = [];\n    const add    = [];\n    const reference = {};\n    const oldValuesSet = new Set(oldValues);\n    newValues.forEach((newValue, index) => {\n        if (index === refIndex) {\n            reference.item = newValue;\n            if (oldValuesSet.has(newValue)) {\n                reference.status = \'update\';\n                oldValuesSet.delete(newValue);\n            } else {\n                reference.status = \'new\';\n            }\n            return;\n        }\n        if (oldValuesSet.has(newValue)) {\n            update.push(newValue);\n            oldValuesSet.delete(newValue);\n        } else {\n            add.push(newValue);\n        }\n    });\n    remove.push(...oldValuesSet);\n    return { update, remove, add, reference };\n}\n\nexport default {\n    name: "StructureViewerMSA",\n    components: {\n        StructureViewerToolbar,\n        StructureViewerTooltip,\n    },\n    mixins: [\n        StructureViewerMixin,\n    ],\n    data: () => ({\n        structures: [],  // { name, aa, 3di (ss), ca, NGL structure, alignment, map }\n        curReferenceIndex: 0,\n        oldReference: ""\n    }),\n    props: {\n        entries: { type: Array },\n        reference: { type: Number },\n        bgColorLight: { type: String, default: "white" },\n        bgColorDark: { type: String, default: "#1E1E1E" },\n        representationStyle: { type: String, default: "cartoon" },\n        referenceStyleParameters: {\n            type: Object,\n            default: () => ({ color: \'#1E88E5\', opacity: 1.0 })\n        },\n        regularStyleParameters: {\n            type: Object,\n            default: () => ({ color: \'#FFC107\', opacity: 0.5 })\n        },\n    },\n    methods: {\n        resetView() {\n            if (!this.stage) return;\n            if (this.structures.length > 0) {\n                this.structures[this.curReferenceIndex].structure.autoView(this.transitionDuration);\n            } else {\n                this.stage.autoView(this.transitionDuration);\n            }\n        },\n        makePDB() {\n            if (!this.stage) return\n            let PDB;\n            let result = `\\\nTITLE     Superposed structures from Foldmason alignment\nREMARK    This file was generated by the FoldMason webserver:\nREMARK      https://mason.foldseek.com\nREMARK    Please cite:\nREMARK      <insert citation>\nREMARK    Warning: Non C-alpha atoms may have been re-generated by PULCHRA\nREMARK             if they are not present in the original PDB file.\n`;\n            this.structures.forEach((structure, index) => {\n                PDB = new PdbWriter(structure.structure.structure, { renumberSerial: false }).getData(); \n                PDB = PDB.split(\'\\n\').filter(line => line.startsWith("ATOM")).join(\'\\n\');\n                result += `\\\nMODEL     ${index}\nREMARK    Name: ${structure.name}\n${PDB}\nENDMDL\n`;\n            });\n            result += "END";\n            download(new Blob([result], { type: \'text/plain\' }), "foldmason.pdb")\n        },\n        makeImage() {\n            if (!this.stage) return\n            this.stage.viewer.setLight(undefined, undefined, undefined, 0.2)\n            this.stage.makeImage({\n                trim: true,\n                factor: (this.isFullscreen) ? 1 : 8,\n                antialias: true,\n                transparent: true,\n            }).then((blob) => {\n                this.stage.viewer.setLight(undefined, undefined, undefined, this.$vuetify.theme.dark ? 0.4 : 0.2)\n                download(blob, "foldmason.png")\n            })\n        },\n        async tmAlignToReference(index) {\n            if (index === this.curReferenceIndex) {\n                return;\n            }\n            const reference = this.structures[this.curReferenceIndex].structure;\n            const alignment = mockAlignment(this.structures[this.curReferenceIndex].aa, this.structures[index].aa);\n            const alnFasta = `>target\\n${alignment.dbAln}\\n\\n>query\\n${alignment.qAln}`;\n            const structure = this.structures[index].structure;\n            const [queryPDB, targetPDB] = await Promise.all([\n                makeSubPDB(reference.structure, alignment ? `${alignment.qStartPos}-${alignment.qEndPos}` : \'\'),\n                makeSubPDB(structure.structure, alignment ? `${alignment.dbStartPos}-${alignment.dbEndPos}` : \'\')\n            ]);\n            const { output, matrix } = await tmalign(targetPDB, queryPDB, alnFasta);\n            const { t, u }  = parseTMMatrix(matrix);\n            const tmResults = parseTMOutput(output);\n            return Promise.resolve({\n                matrix: makeMatrix4(t, u),\n                tmResults: tmResults,\n                alignment: alignment,\n            });\n        },\n        async addStructureToStage(data) {\n            const { name, aa, ca } = data;\n            const index = this.structures.push({...data}) - 1;\n            const pdb = await pulchra(mockPDB(ca, aa.replace(/-/g, \'\')));\n            const structure = await this.stage.loadFile(\n                new Blob([pdb], { type: \'text/plain\' }),\n                {ext: \'pdb\', firstModelOnly: true, name: name }\n            );\n            this.structures[index].index = index;\n            this.structures[index].structure = structure;\n            return index;\n        },\n        async shiftStructure({ structure }, index, shiftValue) {\n            const { x, y, z } = structure.position;\n            const offset = index * shiftValue;\n            structure.setPosition({x: x + offset, y: y + offset, z: z + offset })\n            this.stage.viewer.requestRender()\n        },\n        async explode(shiftValue) {\n            if (!this.stage) return;\n            this.structures.forEach((structure, index) => this.shiftStructure(structure, index, shiftValue));\n            this.stage.autoView();\n        },\n        async updateEntries(newValues, oldValues) {\n            if (!this.stage)\n                return;\n            const { update, remove, add, reference } = generateSelections(newValues, oldValues, this.reference);\n            const isReferenceEmpty = Object.keys(reference).length === 0;\n            const isNewReference = isReferenceEmpty || reference.item.name !== this.oldReference;\n            this.oldReference = isReferenceEmpty ? "" : reference.item.name;\n\n            // Always deal with the reference structure first\n            if (!isReferenceEmpty && isNewReference) {\n                let idx;\n                if (reference.status === "update") {\n                    idx = this.structures.findIndex(item => item.name === reference.item.name);\n                    this.structures[idx].representation.setParameters(this.referenceStyleParameters);\n                    this.structures[idx].structure.setTransform(new Matrix4());\n                } else {\n                    idx = await this.addStructureToStage(reference.item);\n                    this.structures[idx].representation = this.structures[idx].structure.addRepresentation(\n                        this.representationStyle,\n                        this.referenceStyleParameters\n                    );\n                }\n                this.structures[idx].structure.autoView();\n                this.curReferenceIndex = idx;\n            }\n\n            await Promise.all(\n                update.map(async (item) => {\n                    const index = this.structures.findIndex(structure => item.name === structure.name);\n                    if (index === -1) {\n                        return;\n                    }\n                    if (isNewReference) {\n                        const entry = this.structures[index];\n                        entry.representation.setVisibility(false);\n                        const { matrix, tmResults, alignment } = await this.tmAlignToReference(index);\n                        entry.tmResults = tmResults;\n                        entry.alignment = alignment;                \n                        entry.representation.setParameters(this.regularStyleParameters);\n                        entry.structure.setTransform(matrix);\n                        entry.representation.setVisibility(true);\n                        // animateMatrix(this.structures[index].structure, matrix, 5000);\n                    }\n                })\n            );\n\n            await Promise.all(\n                remove.map(async (item) => {\n                    this.stage\n                        .getComponentsByName(item.name)\n                        .forEach(item => this.stage.removeComponent(item));\n                    const index = this.structures.findIndex(structure => item.name === structure.name);\n                    this.structures.splice(index, 1);\n                })\n            );\n\n            await Promise.all(\n                add.map(async (item) => {\n                    const index = await this.addStructureToStage(item);\n                    const { matrix, tmResults, alignment } = await this.tmAlignToReference(index);\n                    const entry = this.structures[index];\n                    entry.tmResults = tmResults;\n                    entry.alignment = alignment;\n                    entry.representation = entry.structure.addRepresentation(\n                        this.representationStyle,\n                        this.regularStyleParameters\n                    );\n                    entry.structure.setTransform(matrix);\n                })\n            );\n        },\n    },\n    watch: {\n        \'$vuetify.theme.dark\': function() {\n            this.stage.viewer.setBackground(this.bgColor);\n        },\n        entries: function(newV, oldV) {\n            this.updateEntries(newV, oldV);\n        },\n    },\n    computed: {\n        bgColor() {\n            return this.$vuetify.theme.dark ? this.bgColorDark : this.bgColorLight;\n        },\n        ambientIntensity() {\n            this.$vuetify.theme.dark ? 0.4 : 0.2;\n        },\n    },\n}\n<\/script>\n\n<style scoped>\n.structure-panel {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n.structure-viewer {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        6237: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o
            });
            var r = n(7537), a = n.n(r), i = n(3645), s = n.n(i)()(a());
            s.push([ e.id, "\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n", "", {
                version: 3,
                sources: [ "webpack://./frontend/StructureViewerToolbar.vue" ],
                names: [],
                mappings: ";AAmJA;IACA,oBAAA;IACA,mBAAA;IACA,kBAAA;IACA,uBAAA;IACA,WAAA;IACA,SAAA;IACA,UAAA;IACA,OAAA;AACA",
                sourcesContent: [ '<template>\n<div class="toolbar-panel">\n    <v-item-group class="v-btn-toggle" :light="isFullscreen">\n    <v-btn\n        v-if="!disablePDBButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickMakePDB"\n        title="Save PDB"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.SavePDB }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Save PDB</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableImageButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickMakeImage"\n        title="Save image"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.SavePNG }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Save image</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableQueryButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickCycleQuery"\n        title="Toggle between the entire query structure and aligned region"\n    >\n        <v-icon v-bind="toolbarIconProps" style=\'color: #1E88E5;\' v-if="showQuery === 0">{{ ($LOCAL) ? $MDI.CircleHalf : $MDI.CircleOneThird }}</v-icon>\n        <v-icon v-bind="toolbarIconProps" style=\'color: #1E88E5;\' v-else-if="!$LOCAL && showQuery === 1">{{ $MDI.CircleTwoThird }}</v-icon>\n        <v-icon v-bind="toolbarIconProps" style=\'color: #1E88E5;\' v-else>{{ $MDI.Circle }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Toggle full query</span>\n  </v-btn>\n    <v-btn\n        v-if="!disableTargetButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickToggleTarget"\n        title="Toggle between the entire target structure and aligned region"\n    >\n        <v-icon v-bind="toolbarIconProps" style=\'color: #FFC107;\' v-if="showTarget == \'aligned\'">{{ $MDI.CircleHalf }}</v-icon>\n        <v-icon v-bind="toolbarIconProps" style=\'color: #FFC107;\' v-else>{{ $MDI.Circle }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Toggle full target</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableArrowButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickToggleArrows"\n        title="Draw arrows between aligned residues"\n    >\n        <v-icon v-bind="toolbarIconProps" v-if="showArrows">{{ $MDI.ArrowRightCircle }}</v-icon>\n        <v-icon v-bind="toolbarIconProps" v-else>{{ $MDI.ArrowRightCircleOutline }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Toggle arrows</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableResetButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickResetView"\n        title="Reset the view to the original position and zoom level"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.Restore }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Reset view</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableSpinButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickSpin"\n        title="Toggle spinning structure"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.AxisZRotateCounterclockwise }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Toggle spin</span>\n    </v-btn>\n    <v-btn\n        v-if="!disableFullscreenButton"\n        v-bind="toolbarButtonProps"\n        @click="handleClickFullscreen"\n        title="Enter fullscreen mode - press ESC to exit"\n    >\n        <v-icon v-bind="toolbarIconProps">{{ $MDI.Fullscreen }}</v-icon>\n        <span v-if="isFullscreen">&nbsp;Fullscreen</span>\n    </v-btn>\n    </v-item-group>\n</div>\n</template>\n\n<script>\nexport default {\n    props: {\n        showQuery: { type: Number, default: 0 },\n        showArrows: { type: Boolean, default: false },\n        showTarget: { type: String, default: \'aligned\' },\n        isFullscreen: { type: Boolean, default: false },\n        disablePDBButton: { type: Boolean, default: false },\n        disableSpinButton: { type: Boolean, default: false },\n        disableImageButton: { type: Boolean, default: false },\n        disableQueryButton: { type: Boolean, default: false },\n        disableTargetButton: { type: Boolean, default: false },\n        disableArrowButton: { type: Boolean, default: false },\n        disableResetButton: { type: Boolean, default: false },\n        disableFullscreenButton: { type: Boolean, default: false },\n    },\n    computed: {\n        toolbarIconProps: function() {\n            return (this.isFullscreen) ? {\n                \'right\': true\n            } : {\n                \n            }\n        },\n        toolbarButtonProps: function() {\n            return (this.isFullscreen) ? {\n                small: false,\n                style: \'margin-bottom: 15px;\',\n            } : {\n                small: true,\n                style: "width: 24px;",\n            }\n        },\n    },\n    methods: {\n        handleClickSpin() {\n            this.$emit("toggleSpin");\n        },\n        handleClickMakePDB() {\n            this.$emit("makePDB");\n        },\n        handleClickMakeImage() {\n            this.$emit("makeImage");\n        },\n        handleClickResetView() {\n            this.$emit("resetView");\n        },\n        handleClickFullscreen() {\n            this.$emit("toggleFullscreen");\n        },\n        handleClickCycleQuery() {\n            this.$emit("toggleQuery");\n        },\n        handleClickToggleTarget() {\n            this.$emit("toggleTarget");\n        },\n        handleClickToggleArrows() {\n            this.$emit("toggleArrows");\n        } \n    }\n}\n<\/script>\n\n<style>\n.toolbar-panel {\n    display: inline-flex;\n    flex-direction: row;\n    position: absolute;\n    justify-content: center;\n    width: 100%;\n    bottom: 0;\n    z-index: 1;\n    left: 0;\n}\n</style>' ],
                sourceRoot: ""
            } ]);
            const o = s;
        },
        9010: (e, t, n) => {
            var r = n(7537), a = n(3645), i = n(1667), s = n(7204), o = n(1464), l = a(r), c = i(s), u = i(o);
            l.push([ e.id, "@font-face{font-family:InconsolataClustal;src:url(" + c + "),url(" + u + ')}.hide{display:none}.db{border-left:5px solid #000}@media print,screen and (max-width: 599px){small.ticket{display:inline-block;line-height:.9}}.result-table a.anchor{display:block;position:relative;top:-125px;visibility:hidden}.result-table a:not([href]){color:#333}.result-table a:not([href]):not([href]):hover{text-decoration:none}.result-table td,.result-table th{padding:0 6px;text-align:left}.result-table .hit.active{background:#f9f9f9}.result-table tbody:hover td[rowspan],.result-table tbody tr:hover{background:#eee}.result-table .alignment-action{text-align:center;word-wrap:normal}.theme--dark .result-table a:not([href]){color:#eee}.theme--dark .result-table .hit.active{background:#333}.theme--dark .result-table tbody:hover td[rowspan],.theme--dark .result-table tbody tr:hover{background:#333}@media print,screen and (min-width: 961px){.result-table{table-layout:fixed;border-collapse:collapse;width:100%}.result-table th.wide-1{width:15%}.result-table th.wide-2{width:30%}.result-table th.wide-3{width:45%}.result-table th.thin{width:6.5% !important;white-space:nowrap}.result-table td.thin{white-space:nowrap}.result-table .long{overflow:hidden;word-break:keep-all;text-overflow:ellipsis;white-space:nowrap}}@media print{.result-table .alignment-action{display:none}}@media screen and (max-width: 960px){.result-table{width:100%}.result-table .long{height:100% !important;white-space:normal !important;min-height:48px}.result-table .hits{min-width:300px}.result-table tbody td a{min-width:100px}.result-table tbody td.graphical div.ruler{margin:10px 0}.result-table thead{display:none}.result-table tfoot th{border:0;display:inherit}.result-table tr{box-shadow:0 2px 3px rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.1);max-width:100%;position:relative;display:block;padding:.5em}.result-table tr td{border:0;display:inherit}.result-table tr td:last-child{border-bottom:0}.result-table tr:not(:last-child){margin-bottom:1rem}.result-table tr:not(.is-selected){background:inherit}.result-table tr:not(.is-selected):hover{background-color:inherit}.result-table tr.detail{margin-top:-1rem}.result-table tr:not(.detail):not(.is-empty):not(.table-footer) td{display:flex;border-bottom:1px solid #eee;flex-direction:row}.result-table tr:not(.detail):not(.is-empty):not(.table-footer) td:last-child{border-bottom:0}.result-table tr:not(.detail):not(.is-empty):not(.table-footer) td:before{content:attr(data-label);font-weight:600;margin-right:auto;padding-right:.5em;word-break:keep-all;flex:1;white-space:nowrap}.result-table tbody td a,.result-table tbody td span{flex:2;margin-left:auto;text-align:right;word-wrap:anywhere}}.alignment{position:absolute;left:4px;right:4px;z-index:999}.alignment .residues{font-family:InconsolataClustal,Inconsolata,Consolas,Menlo,Monaco,"Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New",monospace;white-space:pre}.theme--dark .alignment .residues{color:#fff}.clear-button{font:14px sans-serif;cursor:pointer}', "", {
                version: 3,
                sources: [ "webpack://./frontend/ResultView.vue" ],
                names: [],
                mappings: "AAoRA,WACA,8BAAA,CACA,mFAAA,CAIA,MACI,YAAA,CAGJ,IACI,0BAAA,CAGJ,2CACA,aACI,oBAAA,CACA,cAAA,CAAA,CAKA,uBACI,aAAA,CACA,iBAAA,CACA,UAAA,CACA,iBAAA,CAGJ,4BACI,UAAA,CACA,8CACI,oBAAA,CAIR,kCACI,aAAA,CACA,eAAA,CAGJ,0BACI,kBAAA,CAGJ,mEACI,eAAA,CAGJ,gCACI,iBAAA,CACA,gBAAA,CAOA,yCACI,UAAA,CAGJ,uCACI,eAAA,CAGJ,6FACI,eAAA,CAKZ,2CACI,cACI,kBAAA,CACA,wBAAA,CACA,UAAA,CACA,wBACI,SAAA,CAEJ,wBACI,SAAA,CAGJ,wBACI,SAAA,CAEJ,sBACI,qBAAA,CACA,kBAAA,CAEJ,sBACI,kBAAA,CAEJ,oBACI,eAAA,CACA,mBAAA,CACA,sBAAA,CACA,kBAAA,CAAA,CAKZ,aACI,gCACI,YAAA,CAAA,CAIR,qCACI,cACI,UAAA,CACA,oBACI,sBAAA,CACA,6BAAA,CACA,eAAA,CAGJ,oBACI,eAAA,CAGJ,yBACI,eAAA,CAGJ,2CACI,aAAA,CAGJ,oBACI,YAAA,CAGJ,uBACI,QAAA,CACA,eAAA,CAGJ,iBACI,4DAAA,CACA,cAAA,CACA,iBAAA,CACA,aAAA,CACA,YAAA,CAGJ,oBACI,QAAA,CACA,eAAA,CAGJ,+BACI,eAAA,CAEJ,kCACI,kBAAA,CAEJ,mCACI,kBAAA,CAEJ,yCACI,wBAAA,CAEJ,wBACI,gBAAA,CAGJ,mEACI,YAAA,CACA,4BAAA,CACA,kBAAA,CAEA,8EACI,eAAA,CAGR,0EACI,wBAAA,CACA,eAAA,CACA,iBAAA,CACA,kBAAA,CACA,mBAAA,CACA,MAAA,CACA,kBAAA,CAGJ,qDACI,MAAA,CACA,gBAAA,CACA,gBAAA,CACA,kBAAA,CAAA,CAKZ,WACI,iBAAA,CACA,QAAA,CACA,SAAA,CACA,WAAA,CAEA,qBACI,uNAAA,CACA,eAAA,CAIA,kCACI,UAAA,CAKZ,cACI,oBAAA,CACA,cAAA",
                sourcesContent: [ '@import "_variables.scss";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@font-face {\nfont-family: InconsolataClustal;\nsrc: url(assets/InconsolataClustal2.woff2),\n     url(assets/InconsolataClustal2.woff);\n}\n\n.hide {\n    display: none;\n}\n\n.db {\n    border-left: 5px solid black;\n}\n\n@media print, screen and (max-width: 599px) {\nsmall.ticket {\n    display: inline-block;\n    line-height: 0.9;\n}\n}\n\n.result-table {\n    a.anchor {\n        display: block;\n        position: relative;\n        top: -125px;\n        visibility: hidden;\n    }\n\n    a:not([href]) {\n        color: #333;\n        &:not([href]):hover {\n            text-decoration: none;\n        }\n    }\n\n    td, th {\n        padding: 0 6px;\n        text-align: left;\n    }\n\n    .hit.active {\n        background: #f9f9f9;\n    }\n\n    tbody:hover td[rowspan], tbody tr:hover {\n        background: #eee;\n    }\n\n    .alignment-action {\n        text-align: center;\n        word-wrap: normal;\n    }\n}\n\n\n.theme--dark {\n    .result-table {\n        a:not([href])  {\n            color: #eee;\n        }\n\n        .hit.active {\n            background: #333;\n        }\n\n        tbody:hover td[rowspan], tbody tr:hover {\n            background: #333;\n        }\n    }\n}\n\n@media print, screen and (min-width: 961px) {\n    .result-table {\n        table-layout: fixed;\n        border-collapse: collapse;\n        width: 100%;\n        th.wide-1 {\n            width: 15%;\n        }\n        th.wide-2 {\n            width: 30%;\n        }\n\n        th.wide-3 {\n            width: 45%;\n        }\n        th.thin {\n            width: 6.5% !important;\n            white-space: nowrap;\n        }\n        td.thin {\n            white-space: nowrap;\n        }\n        .long {\n            overflow: hidden;\n            word-break: keep-all;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n        }\n    }\n}\n\n@media print {\n    .result-table .alignment-action {\n        display: none;\n    }\n}\n\n@media screen and (max-width: 960px) {\n    .result-table {\n        width: 100%;\n        .long {\n            height: 100% !important;\n            white-space: normal !important;\n            min-height: 48px;\n        }\n\n        .hits {\n            min-width: 300px;\n        }\n\n        tbody td a {\n            min-width: 100px;\n        }\n\n        tbody td.graphical div.ruler {\n            margin: 10px 0;\n        }\n\n        thead {\n            display: none;\n        }\n\n        tfoot th {\n            border: 0;\n            display: inherit;\n        }\n\n        tr {\n            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);\n            max-width: 100%;\n            position: relative;\n            display: block;\n            padding: 0.5em;\n        }\n\n        tr td {\n            border: 0;\n            display: inherit;\n        }\n\n        tr td:last-child {\n            border-bottom: 0;\n        }\n        tr:not(:last-child) {\n            margin-bottom: 1rem;\n        }\n        tr:not(.is-selected) {\n            background: inherit;\n        }\n        tr:not(.is-selected):hover {\n            background-color: inherit;\n        }\n        tr.detail {\n            margin-top: -1rem;\n        }\n\n        tr:not(.detail):not(.is-empty):not(.table-footer) td {\n            display: flex;\n            border-bottom: 1px solid #eee;\n            flex-direction: row;\n\n            &:last-child {\n                border-bottom: 0;\n            }\n        }\n        tr:not(.detail):not(.is-empty):not(.table-footer) td:before {\n            content: attr(data-label);\n            font-weight: 600;\n            margin-right: auto;\n            padding-right: 0.5em;\n            word-break: keep-all;\n            flex: 1;\n            white-space: nowrap;\n        }\n\n        tbody td a, tbody td span {\n            flex: 2;\n            margin-left: auto;\n            text-align: right;\n            word-wrap: anywhere;\n        }\n    }\n}\n\n.alignment {\n    position:absolute;\n    left:4px;\n    right:4px;\n    z-index: 999;\n\n    .residues {\n        font-family: InconsolataClustal, Inconsolata, Consolas, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;\n        white-space: pre;\n    }\n\n    .theme--dark & {\n        .residues {\n            color: #fff;\n        }\n    }\n}\n\n.clear-button {\n    font: 14px sans-serif;\n    cursor: pointer;\n}\n\n\n' ],
                sourceRoot: ""
            } ]), e.exports = l;
        },
        5385: (e, t, n) => {
            var r = n(7537), a = n(3645)(r);
            a.push([ e.id, ".ruler[data-v-2b7861b2]{position:relative;width:100%;height:10px;border-top:1px solid #333}.tick-label[data-v-2b7861b2]{position:absolute;word-wrap:normal;font-size:9px;word-break:keep-all;line-height:1em;margin-top:7px;width:50px;margin-left:-25px;text-align:center;font-weight:bold}.tick-label-top[data-v-2b7861b2]{margin-top:-15px}.query[data-v-2b7861b2]{position:absolute;top:0;bottom:0;margin-top:-5px;--chevron-width: 5px;height:10px}.chevron-start[data-v-2b7861b2]{position:absolute;left:0;bottom:0;top:0;width:5px;clip-path:polygon(0 0, var(--chevron-width) 0, var(--chevron-width) 100%, 0 100%, var(--chevron-width) 50%)}.query.reversed .chevron-start[data-v-2b7861b2]{clip-path:polygon(var(--chevron-width) 0, 0 50%, var(--chevron-width) 100%)}.chevron-mid[data-v-2b7861b2]{position:absolute;left:5px;right:5px;bottom:0;top:0}.chevron-end[data-v-2b7861b2]{position:absolute;right:0;bottom:0;top:0;width:5px;clip-path:polygon(0 0, var(--chevron-width) 50%, 0 100%)}.query.reversed .chevron-end[data-v-2b7861b2]{clip-path:polygon(0 0, var(--chevron-width) 0, 0 50%, var(--chevron-width) 100%, 0 100%);clip-path:polygon()}.theme--dark .ruler[data-v-2b7861b2]{border-color:#aaa}", "", {
                version: 3,
                sources: [ "webpack://./frontend/Ruler.vue" ],
                names: [],
                mappings: "AAwDA,wBACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,yBAAA,CAGF,6BACE,iBAAA,CACA,gBAAA,CACA,aAAA,CACA,mBAAA,CACA,eAAA,CACA,cAAA,CACA,UAAA,CACA,iBAAA,CACA,iBAAA,CACA,gBAAA,CAGF,iCACE,gBAAA,CAGF,wBACE,iBAAA,CACA,KAAA,CACA,QAAA,CACA,eAAA,CACA,oBAAA,CACA,WAAA,CAGF,gCACE,iBAAA,CACA,MAAA,CACA,QAAA,CACA,KAAA,CACA,SAAA,CACA,2GAAA,CAGF,gDACE,2EAAA,CAGF,8BACE,iBAAA,CACA,QAAA,CACA,SAAA,CACA,QAAA,CACA,KAAA,CAGF,8BACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,KAAA,CACA,SAAA,CACA,wDAAA,CAEF,8CACE,wFAAA,CACA,mBAAA,CAIE,qCACE,iBAAA",
                sourcesContent: [ '@import "_variables.scss";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.ruler {\n  position: relative;\n  width: 100%;\n  height: 10px;\n  border-top: 1px solid #333;\n}\n\n.tick-label {\n  position: absolute;\n  word-wrap: normal;\n  font-size: 9px;\n  word-break: keep-all;\n  line-height: 1em;\n  margin-top: 7px;\n  width: 50px;\n  margin-left: -25px;\n  text-align: center;\n  font-weight: bold;\n}\n\n.tick-label-top {\n  margin-top: -15px;\n}\n\n.query {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin-top: -5px;\n  --chevron-width: 5px;\n  height: 10px;\n}\n\n.chevron-start {\n  position: absolute;\n  left:0;\n  bottom:0;\n  top:0;\n  width:5px;\n  clip-path: polygon(0 0, var(--chevron-width) 0, var(--chevron-width) 100%, 0 100%, var(--chevron-width) 50%);\n}\n\n.query.reversed .chevron-start {\n  clip-path: polygon(var(--chevron-width) 0, 0 50%, var(--chevron-width) 100%);\n}\n\n.chevron-mid {\n  position: absolute;\n  left:5px;\n  right:5px;\n  bottom:0;\n  top:0;\n}\n\n.chevron-end {\n  position: absolute;\n  right:0;\n  bottom:0;\n  top:0;\n  width:5px;\n  clip-path: polygon(0 0, var(--chevron-width) 50%, 0 100%);\n}\n.query.reversed .chevron-end {\n  clip-path: polygon(0 0, var(--chevron-width) 0, 0 50%, var(--chevron-width) 100%, 0 100%);\n  clip-path: polygon()\n}\n\n.theme--dark {\n    .ruler {\n      border-color: #aaa;\n    }\n}\n' ],
                sourceRoot: ""
            } ]), e.exports = a;
        },
        654: (e, t, n) => {
            var r = n(9837);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("4fa110d4", r, !1, {});
        },
        603: (e, t, n) => {
            var r = n(5426);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("59383ee7", r, !1, {});
        },
        2530: (e, t, n) => {
            var r = n(6696);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("4a805097", r, !1, {});
        },
        4869: (e, t, n) => {
            var r = n(5479);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("d70395c2", r, !1, {});
        },
        55: (e, t, n) => {
            var r = n(7212);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("08f57856", r, !1, {});
        },
        7316: (e, t, n) => {
            var r = n(6791);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("e7ce63d2", r, !1, {});
        },
        1574: (e, t, n) => {
            var r = n(1229);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("4c075a21", r, !1, {});
        },
        9146: (e, t, n) => {
            var r = n(4569);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("5d44b975", r, !1, {});
        },
        2556: (e, t, n) => {
            var r = n(864);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("0a2d9f56", r, !1, {});
        },
        8973: (e, t, n) => {
            var r = n(8742);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("77ba9bdc", r, !1, {});
        },
        5877: (e, t, n) => {
            var r = n(405);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("a3a33312", r, !1, {});
        },
        9121: (e, t, n) => {
            var r = n(7866);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("802ef828", r, !1, {});
        },
        6226: (e, t, n) => {
            var r = n(6732);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("9e5866ec", r, !1, {});
        },
        4678: (e, t, n) => {
            var r = n(8786);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("0ac3d6be", r, !1, {});
        },
        7539: (e, t, n) => {
            var r = n(6237);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("4acebb77", r, !1, {});
        },
        5264: (e, t, n) => {
            var r = n(9010);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("122feea2", r, !1, {});
        },
        5941: (e, t, n) => {
            var r = n(5385);
            r.__esModule && (r = r.default), "string" == typeof r && (r = [ [ e.id, r, "" ] ]), 
            r.locals && (e.exports = r.locals);
            (0, n(5346).Z)("6d831950", r, !1, {});
        },
        1464: e => {
            "use strict";
            e.exports = "data:font/woff;base64,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";
        },
        7204: e => {
            "use strict";
            e.exports = "data:font/woff2;base64,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";
        },
        4833: (e, t, n) => {
            "use strict";
            e.exports = n.p + "142d6904f2305dd1cce7.png";
        },
        5904: (e, t, n) => {
            "use strict";
            e.exports = n.p + "9f772eefe8d08175ff5d.png";
        },
        7969: (e, t, n) => {
            "use strict";
            e.exports = n.p + "53d2a61fad6a2df4af57.png";
        },
        5515: (e, t, n) => {
            "use strict";
            e.exports = n.p + "fb5cfc3806f721f541ad.png";
        },
        4484: (e, t, n) => {
            "use strict";
            e.exports = n.p + "cb013a3d1b5f9a2c78e2.png";
        },
        7940: (e, t, n) => {
            "use strict";
            e.exports = n.p + "753a136eb8e7d5534788.png";
        },
        42: (e, t, n) => {
            "use strict";
            e.exports = n.p + "a1ee785acc7f8c1bf4ac.png";
        },
        901: (e, t, n) => {
            "use strict";
            e.exports = n.p + "bfc0aaa54b3fd8130101.png";
        }
    }, n = {};
    function r(e) {
        var a = n[e];
        if (void 0 !== a) return a.exports;
        var i = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, r), i.loaded = !0, i.exports;
    }
    r.m = t, e = [], r.O = (t, n, a, i) => {
        if (!n) {
            var s = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [n, a, i] = e[u], o = !0, l = 0; l < n.length; l++) (!1 & i || s >= i) && Object.keys(r.O).every((e => r.O[e](n[l]))) ? n.splice(l--, 1) : (o = !1, 
                i < s && (s = i));
                if (o) {
                    e.splice(u--, 1);
                    var c = a();
                    void 0 !== c && (t = c);
                }
            }
            return t;
        }
        i = i || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
        e[u] = [ n, a, i ];
    }, r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t;
    }, r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        });
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e), r.p = "/", (() => {
        r.b = document.baseURI || self.location.href;
        var e = {
            179: 0
        };
        r.O.j = t => 0 === e[t];
        var t = (t, n) => {
            var a, i, [s, o, l] = n, c = 0;
            if (s.some((t => 0 !== e[t]))) {
                for (a in o) r.o(o, a) && (r.m[a] = o[a]);
                if (l) var u = l(r);
            }
            for (t && t(n); c < s.length; c++) i = s[c], r.o(e, i) && e[i] && e[i][0](), e[i] = 0;
            return r.O(u);
        }, n = self.webpackChunkmmseqs_app = self.webpackChunkmmseqs_app || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n));
    })();
    var a = r.O(void 0, [ 736 ], (() => r(5453)));
    a = r.O(a);
})();
//# sourceMappingURL=main.js.map