---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `net/qrtr/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_QRTR) += qrtr.o
qrtr-y	:= af_qrtr.o ns.o

obj-$(CONFIG_QRTR_SMD) += qrtr-smd.o
qrtr-smd-y	:= smd.o
obj-$(CONFIG_QRTR_TUN) += qrtr-tun.o
qrtr-tun-y	:= tun.o
obj-$(CONFIG_QRTR_MHI) += qrtr-mhi.o
qrtr-mhi-y	:= mhi.o

```
