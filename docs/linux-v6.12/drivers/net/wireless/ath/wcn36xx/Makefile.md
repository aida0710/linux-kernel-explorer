---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/ath/wcn36xx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: ISC
obj-$(CONFIG_WCN36XX) := wcn36xx.o
wcn36xx-y +=   main.o \
               dxe.o \
               txrx.o \
               smd.o \
               pmc.o \
               debug.o \
               firmware.o

wcn36xx-$(CONFIG_NL80211_TESTMODE) += testmode.o

```
