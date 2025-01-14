---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/firmware/smccc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
obj-$(CONFIG_HAVE_ARM_SMCCC_DISCOVERY)	+= smccc.o kvm_guest.o
obj-$(CONFIG_ARM_SMCCC_SOC_ID)	+= soc_id.o

```
