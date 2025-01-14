---
sidebar_position: 13
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/cavium/cpt/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_CAVIUM_CPT) += cptpf.o cptvf.o
cptpf-objs := cptpf_main.o cptpf_mbox.o
cptvf-objs := cptvf_main.o cptvf_reqmanager.o cptvf_mbox.o cptvf_algs.o

```
