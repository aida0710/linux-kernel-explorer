---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/sysdev/xics/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-y				+= xics-common.o
obj-$(CONFIG_PPC_ICP_NATIVE)	+= icp-native.o
obj-$(CONFIG_PPC_ICP_HV)	+= icp-hv.o
obj-$(CONFIG_PPC_ICS_RTAS)	+= ics-rtas.o
obj-$(CONFIG_PPC_ICS_NATIVE)	+= ics-native.o
obj-$(CONFIG_PPC_POWERNV)	+= ics-opal.o icp-opal.o

```
