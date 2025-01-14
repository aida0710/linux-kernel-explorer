---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/sysdev/xive/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config PPC_XIVE
	bool
	select PPC_SMP_MUXED_IPI
	select HARDIRQS_SW_RESEND

config PPC_XIVE_NATIVE
	bool
	select PPC_XIVE
	depends on PPC_POWERNV

config PPC_XIVE_SPAPR
	bool
	select PPC_XIVE

```
