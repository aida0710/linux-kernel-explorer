---
sidebar_position: 18
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/freescale/fman/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config FSL_FMAN
	tristate "FMan support"
	depends on FSL_SOC || ARCH_LAYERSCAPE || COMPILE_TEST
	select GENERIC_ALLOCATOR
	select PHYLINK
	select PCS_LYNX
	select CRC32
	default n
	help
		Freescale Data-Path Acceleration Architecture Frame Manager
		(FMan) support

config DPAA_ERRATUM_A050385
	bool
	depends on ARM64 && FSL_DPAA
	default y
	help
		DPAA FMan erratum A050385 software workaround implementation:
		align buffers, data start, SG fragment length to avoid FMan DMA
		splits.
		FMAN DMA read or writes under heavy traffic load may cause FMAN
		internal resource leak thus stopping further packet processing.
		The FMAN internal queue can overflow when FMAN splits single
		read or write transactions into multiple smaller transactions
		such that more than 17 AXI transactions are in flight from FMAN
		to interconnect. When the FMAN internal queue overflows, it can
		stall further packet processing. The issue can occur with any
		one of the following three conditions:
		1. FMAN AXI transaction crosses 4K address boundary (Errata
		A010022)
		2. FMAN DMA address for an AXI transaction is not 16 byte
		aligned, i.e. the last 4 bits of an address are non-zero
		3. Scatter Gather (SG) frames have more than one SG buffer in
		the SG list and any one of the buffers, except the last
		buffer in the SG list has data size that is not a multiple
		of 16 bytes, i.e., other than 16, 32, 48, 64, etc.
		With any one of the above three conditions present, there is
		likelihood of stalled FMAN packet processing, especially under
		stress with multiple ports injecting line-rate traffic.

```
