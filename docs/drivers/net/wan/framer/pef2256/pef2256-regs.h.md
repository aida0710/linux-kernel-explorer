---
sidebar_position: 2
---
# pef2256-regs.h

### ファイル情報

- パス: `drivers/net/wan/framer/pef2256/pef2256-regs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * PEF2256 registers definition
 *
 * Copyright 2023 CS GROUP France
 *
 * Author: Herve Codina <herve.codina@bootlin.com>
 */
#ifndef __PEF2256_REGS_H__
#define __PEF2256_REGS_H__

#include "linux/bitfield.h"

/* Command Register */
#define PEF2256_CMDR		0x02
#define PEF2256_CMDR_RRES	BIT(6)
#define PEF2256_CMDR_XRES	BIT(4)
#define PEF2256_CMDR_SRES	BIT(0)

/* Interrupt Mask Register 0..5 */
#define PEF2256_IMR0	        0x14
#define PEF2256_IMR1	        0x15
#define PEF2256_IMR2	        0x16
#define PEF2256_IMR3	        0x17
#define PEF2256_IMR4	        0x18
#define PEF2256_IMR5	        0x19

/* Framer Mode Register 0 */
#define PEF2256_FMR0		0x1C
#define PEF2256_FMR0_XC_MASK	GENMASK(7, 6)
#define PEF2256_FMR0_XC_NRZ	FIELD_PREP_CONST(PEF2256_FMR0_XC_MASK, 0x0)
#define PEF2256_FMR0_XC_CMI	FIELD_PREP_CONST(PEF2256_FMR0_XC_MASK, 0x1)
#define PEF2256_FMR0_XC_AMI	FIELD_PREP_CONST(PEF2256_FMR0_XC_MASK, 0x2)
#define PEF2256_FMR0_XC_HDB3	FIELD_PREP_CONST(PEF2256_FMR0_XC_MASK, 0x3)
#define PEF2256_FMR0_RC_MASK	GENMASK(5, 4)
#define PEF2256_FMR0_RC_NRZ	FIELD_PREP_CONST(PEF2256_FMR0_RC_MASK, 0x0)
#define PEF2256_FMR0_RC_CMI	FIELD_PREP_CONST(PEF2256_FMR0_RC_MASK, 0x1)
#define PEF2256_FMR0_RC_AMI	FIELD_PREP_CONST(PEF2256_FMR0_RC_MASK, 0x2)
#define PEF2256_FMR0_RC_HDB3	FIELD_PREP_CONST(PEF2256_FMR0_RC_MASK, 0x3)

/* Framer Mode Register 1 */
#define PEF2256_FMR1		0x1D
#define PEF2256_FMR1_XFS	BIT(3)
#define PEF2256_FMR1_ECM	BIT(2)
/* SSD is defined on 2 bits. The other bit is on SIC1 register */
#define PEF2256_FMR1_SSD_MASK	GENMASK(1, 1)
#define PEF2256_FMR1_SSD_2048	FIELD_PREP_CONST(PEF2256_FMR1_SSD_MASK, 0x0)
#define PEF2256_FMR1_SSD_4096	FIELD_PREP_CONST(PEF2256_FMR1_SSD_MASK, 0x1)
#define PEF2256_FMR1_SSD_8192	FIELD_PREP_CONST(PEF2256_FMR1_SSD_MASK, 0x0)
#define PEF2256_FMR1_SSD_16384	FIELD_PREP_CONST(PEF2256_FMR1_SSD_MASK, 0x1)

/* Framer Mode Register 2 */
#define PEF2256_FMR2			  0x1E
#define PEF2256_FMR2_RFS_MASK		  GENMASK(7, 6)
#define PEF2256_FMR2_RFS_DOUBLEFRAME	  FIELD_PREP_CONST(PEF2256_FMR2_RFS_MASK, 0x0)
#define PEF2256_FMR2_RFS_CRC4_MULTIFRAME  FIELD_PREP_CONST(PEF2256_FMR2_RFS_MASK, 0x2)
#define PEF2256_FMR2_RFS_AUTO_MULTIFRAME  FIELD_PREP_CONST(PEF2256_FMR2_RFS_MASK, 0x3)
#define PEF2256_FMR2_AXRA		  BIT(1)

/* Transmit Service Word */
#define PEF2256_XSW		0x20
#define PEF2256_XSW_XSIS	BIT(7)
#define PEF2256_XSW_XTM		BIT(6)
#define PEF2256_XSW_XY_MASK	GENMASK(5, 0)
#define PEF2256_XSW_XY(_v)	FIELD_PREP(PEF2256_XSW_XY_MASK, _v)

/* Transmit Spare Bits */
#define PEF2256_XSP	        0x21
#define PEF2256_XSP_XSIF	BIT(2)

/* Transmit Control 0..1 */
#define PEF2256_XC0		0x22
#define PEF2256_XC1		0x23

/* Receive Control 0 */
#define PEF2256_RC0		0x24
#define PEF2256_RC0_SWD		BIT(7)
#define PEF2256_RC0_ASY4	BIT(6)

/* Receive Control 1 */
#define PEF2256_RC1		0x25

/* Transmit Pulse Mask 0..1 */
#define PEF2256_XPM0		0x26
#define PEF2256_XPM1		0x27

/* Transmit Pulse Mask 2 */
#define PEF2256_XPM2		0x28
#define PEF2256_XPM2_XLT	BIT(6)

/* Transparent Service Word Mask */
#define PEF2256_TSWM		0x29

/* Line Interface Mode 0 */
#define PEF2256_LIM0		0x36
#define PEF2256_2X_LIM0_BIT3	BIT(3) /* v2.x, described as a forced '1' bit */
#define PEF2256_LIM0_MAS	BIT(0)

/* Line Interface Mode 1 */
#define PEF2256_LIM1		  0x37
#define PEF2256_12_LIM1_RIL_MASK  GENMASK(6, 4)
#define PEF2256_12_LIM1_RIL_910	  FIELD_PREP_CONST(PEF2256_12_LIM1_RIL_MASK, 0x0)
#define PEF2256_12_LIM1_RIL_740	  FIELD_PREP_CONST(PEF2256_12_LIM1_RIL_MASK, 0x1)
#define PEF2256_12_LIM1_RIL_590	  FIELD_PREP_CONST(PEF2256_12_LIM1_RIL_MASK, 0x2)
#define PEF2256_12_LIM1_RIL_420	  FIELD_PREP_CONST(PEF2256_12_LIM1_RIL_MASK, 0x3)
#define PEF2256_12_LIM1_RIL_320	  FIELD_PREP_CONST(PEF2256_12_LIM1_RIL_MASK, 0x4)
#define PEF2256_12_LIM1_RIL_210	  FIELD_PREP_CONST(PEF2256_12_LIM1_RIL_MASK, 0x5)
#define PEF2256_12_LIM1_RIL_160	  FIELD_PREP_CONST(PEF2256_12_LIM1_RIL_MASK, 0x6)
#define PEF2256_12_LIM1_RIL_100	  FIELD_PREP_CONST(PEF2256_12_LIM1_RIL_MASK, 0x7)
#define PEF2256_2X_LIM1_RIL_MASK  GENMASK(6, 4)
#define PEF2256_2X_LIM1_RIL_2250  FIELD_PREP_CONST(PEF2256_2X_LIM1_RIL_MASK, 0x0)
#define PEF2256_2X_LIM1_RIL_1100  FIELD_PREP_CONST(PEF2256_2X_LIM1_RIL_MASK, 0x1)
#define PEF2256_2X_LIM1_RIL_600	  FIELD_PREP_CONST(PEF2256_2X_LIM1_RIL_MASK, 0x2)
#define PEF2256_2X_LIM1_RIL_350	  FIELD_PREP_CONST(PEF2256_2X_LIM1_RIL_MASK, 0x3)
#define PEF2256_2X_LIM1_RIL_210	  FIELD_PREP_CONST(PEF2256_2X_LIM1_RIL_MASK, 0x4)
#define PEF2256_2X_LIM1_RIL_140	  FIELD_PREP_CONST(PEF2256_2X_LIM1_RIL_MASK, 0x5)
#define PEF2256_2X_LIM1_RIL_100	  FIELD_PREP_CONST(PEF2256_2X_LIM1_RIL_MASK, 0x6)
#define PEF2256_2X_LIM1_RIL_50	  FIELD_PREP_CONST(PEF2256_2X_LIM1_RIL_MASK, 0x7)

/* Pulse Count Detection */
#define PEF2256_PCD		0x38

 /* Pulse Count Recovery */
#define PEF2256_PCR		0x39

 /* Line Interface Mode 2 */
#define PEF2256_LIM2		0x3A
#define PEF2256_LIM2_SLT_MASK	GENMASK(5, 4)
#define PEF2256_LIM2_SLT_THR55	FIELD_PREP_CONST(PEF2256_LIM2_SLT_MASK, 0x0)
#define PEF2256_LIM2_SLT_THR67	FIELD_PREP_CONST(PEF2256_LIM2_SLT_MASK, 0x1)
#define PEF2256_LIM2_SLT_THR50	FIELD_PREP_CONST(PEF2256_LIM2_SLT_MASK, 0x2)
#define PEF2256_LIM2_SLT_THR45	FIELD_PREP_CONST(PEF2256_LIM2_SLT_MASK, 0x3)
#define PEF2256_LIM2_ELT	BIT(2)

/* System Interface Control 1 */
#define PEF2256_SIC1	          0x3E
#define PEF2256_SIC1_SSC_MASK	  (BIT(7) |  BIT(3))
#define PEF2256_SIC1_SSC_2048	  (0)
#define PEF2256_SIC1_SSC_4096	  BIT(3)
#define PEF2256_SIC1_SSC_8192	  BIT(7)
#define PEF2256_SIC1_SSC_16384	  (BIT(7) |  BIT(3))
/* SSD is defined on 2 bits. The other bit is on FMR1 register */
#define PEF2256_SIC1_SSD_MASK	  GENMASK(6, 6)
#define PEF2256_SIC1_SSD_2048	  FIELD_PREP_CONST(PEF2256_SIC1_SSD_MASK, 0x0)
#define PEF2256_SIC1_SSD_4096	  FIELD_PREP_CONST(PEF2256_SIC1_SSD_MASK, 0x0)
#define PEF2256_SIC1_SSD_8192	  FIELD_PREP_CONST(PEF2256_SIC1_SSD_MASK, 0x1)
#define PEF2256_SIC1_SSD_16384	  FIELD_PREP_CONST(PEF2256_SIC1_SSD_MASK, 0x1)
#define PEF2256_SIC1_RBS_MASK	  GENMASK(5, 4)
#define PEF2256_SIC1_RBS_2FRAMES  FIELD_PREP_CONST(PEF2256_SIC1_RBS_MASK, 0x0)
#define PEF2256_SIC1_RBS_1FRAME	  FIELD_PREP_CONST(PEF2256_SIC1_RBS_MASK, 0x1)
#define PEF2256_SIC1_RBS_96BITS	  FIELD_PREP_CONST(PEF2256_SIC1_RBS_MASK, 0x2)
#define PEF2256_SIC1_RBS_BYPASS	  FIELD_PREP_CONST(PEF2256_SIC1_RBS_MASK, 0x3)
#define PEF2256_SIC1_XBS_MASK	  GENMASK(1, 0)
#define PEF2256_SIC1_XBS_BYPASS	  FIELD_PREP_CONST(PEF2256_SIC1_XBS_MASK, 0x0)
#define PEF2256_SIC1_XBS_1FRAME	  FIELD_PREP_CONST(PEF2256_SIC1_XBS_MASK, 0x1)
#define PEF2256_SIC1_XBS_2FRAMES  FIELD_PREP_CONST(PEF2256_SIC1_XBS_MASK, 0x2)
#define PEF2256_SIC1_XBS_96BITS	  FIELD_PREP_CONST(PEF2256_SIC1_XBS_MASK, 0x3)

/* System Interface Control 2 */
#define PEF2256_SIC2		0x3F
#define PEF2256_SIC2_SICS_MASK	GENMASK(3, 1)
#define PEF2256_SIC2_SICS(_v)	FIELD_PREP(PEF2256_SIC2_SICS_MASK, _v)

/* System Interface Control 3 */
#define PEF2256_SIC3		0x40
#define PEF2256_SIC3_RTRI	BIT(5)
#define PEF2256_SIC3_RESX	BIT(3)
#define PEF2256_SIC3_RESR	BIT(2)

/* Clock Mode Register 1 */
#define PEF2256_CMR1			0x44
#define PEF2256_CMR1_RS_MASK		GENMASK(5, 4)
#define PEF2256_CMR1_RS_DPLL		FIELD_PREP_CONST(PEF2256_CMR1_RS_MASK, 0x0)
#define PEF2256_CMR1_RS_DPLL_LOS_HIGH	FIELD_PREP_CONST(PEF2256_CMR1_RS_MASK, 0x1)
#define PEF2256_CMR1_RS_DCOR_2048	FIELD_PREP_CONST(PEF2256_CMR1_RS_MASK, 0x2)
#define PEF2256_CMR1_RS_DCOR_8192	FIELD_PREP_CONST(PEF2256_CMR1_RS_MASK, 0x3)
#define PEF2256_CMR1_DCS		BIT(3)

/* Clock Mode Register 2 */
#define PEF2256_CMR2		0x45
#define PEF2256_CMR2_DCOXC	BIT(5)

/* Global Configuration Register */
#define PEF2256_GCR		0x46
#define PEF2256_GCR_SCI		BIT(6)
#define PEF2256_GCR_ECMC	BIT(4)

/* Port Configuration 5 */
#define PEF2256_PC5		0x84
#define PEF2256_PC5_CRP         BIT(0)

/* Global Port Configuration 1 */
#define PEF2256_GPC1			0x85
#define PEF2256_GPC1_CSFP_MASK		GENMASK(7, 5)
#define PEF2256_GPC1_CSFP_SEC_IN_HIGH	FIELD_PREP_CONST(PEF2256_GPC1_CSFP_MASK, 0x0)
#define PEF2256_GPC1_CSFP_SEC_OUT_HIGH	FIELD_PREP_CONST(PEF2256_GPC1_CSFP_MASK, 0x1)
#define PEF2256_GPC1_CSFP_FSC_OUT_HIGH	FIELD_PREP_CONST(PEF2256_GPC1_CSFP_MASK, 0x2)
#define PEF2256_GPC1_CSFP_FSC_OUT_LOW	FIELD_PREP_CONST(PEF2256_GPC1_CSFP_MASK, 0x3)

/* Port Configuration 6 */
#define PEF2256_PC6		0x86

/* Global Counter Mode n=1..8 */
#define PEF2256_GCM(_n)         (0x92 + (_n) - 1)
#define PEF2256_GCM1	        0x92
#define PEF2256_GCM2	        0x93
#define PEF2256_GCM3	        0x94
#define PEF2256_GCM4	        0x95
#define PEF2256_GCM5	        0x96
#define PEF2256_GCM6	        0x97
#define PEF2256_GCM7	        0x98
#define PEF2256_GCM8	        0x99

/* Version Status Register */
#define PEF2256_VSTR		 0x4A
#define PEF2256_VSTR_VERSION_12	 0x00
#define PEF2256_VSTR_VERSION_21	 0x10
#define PEF2256_VSTR_VERSION_2x	 0x05

/* Framer Receive Status 0 */
#define PEF2256_FRS0		0x4C
#define PEF2256_FRS0_LOS	BIT(7)
#define PEF2256_FRS0_AIS	BIT(6)

/* Interrupt Status Register 0..5 */
#define PEF2256_ISR(_n)		(0x68 + (_n))
#define PEF2256_ISR0		0x68
#define PEF2256_ISR1		0x69
#define PEF2256_ISR2		0x6A
#define PEF2256_ISR3		0x6B
#define PEF2256_ISR4		0x6C
#define PEF2256_ISR5		0x6D

/* Global Interrupt Status */
#define PEF2256_GIS		0x6E
#define PEF2256_GIS_ISR(_n)	BIT(_n)

/* Wafer Identification Register */
#define PEF2256_WID		   0xEC
#define PEF2256_12_WID_MASK	   GENMASK(1, 0)
#define PEF2256_12_WID_VERSION_12  FIELD_PREP_CONST(PEF2256_12_WID_MASK, 0x3)
#define PEF2256_2X_WID_MASK	   GENMASK(7, 6)
#define PEF2256_2X_WID_VERSION_21  FIELD_PREP_CONST(PEF2256_2X_WID_MASK, 0x0)
#define PEF2256_2X_WID_VERSION_22  FIELD_PREP_CONST(PEF2256_2X_WID_MASK, 0x1)

/* IMR2/ISR2 Interrupts common bits */
#define PEF2256_INT2_AIS	BIT(3)
#define PEF2256_INT2_LOS	BIT(2)

#endif /* __PEF2256_REGS_H__ */

```
