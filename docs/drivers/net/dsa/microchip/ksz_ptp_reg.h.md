---
sidebar_position: 18
---
# ksz_ptp_reg.h

### ファイル情報

- パス: `drivers/net/dsa/microchip/ksz_ptp_reg.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Microchip KSZ PTP register definitions
 * Copyright (C) 2022 Microchip Technology Inc.
 */

#ifndef __KSZ_PTP_REGS_H
#define __KSZ_PTP_REGS_H

#define REG_SW_GLOBAL_LED_OVR__4	0x0120
#define LED_OVR_2			BIT(1)
#define LED_OVR_1			BIT(0)

#define REG_SW_GLOBAL_LED_SRC__4	0x0128
#define LED_SRC_PTP_GPIO_1		BIT(3)
#define LED_SRC_PTP_GPIO_2		BIT(2)

/* 5 - PTP Clock */
#define REG_PTP_CLK_CTRL		0x0500

#define PTP_STEP_ADJ			BIT(6)
#define PTP_STEP_DIR			BIT(5)
#define PTP_READ_TIME			BIT(4)
#define PTP_LOAD_TIME			BIT(3)
#define PTP_CLK_ADJ_ENABLE		BIT(2)
#define PTP_CLK_ENABLE			BIT(1)
#define PTP_CLK_RESET			BIT(0)

#define REG_PTP_RTC_SUB_NANOSEC__2	0x0502

#define PTP_RTC_SUB_NANOSEC_M		0x0007
#define PTP_RTC_0NS			0x00

#define REG_PTP_RTC_NANOSEC		0x0504

#define REG_PTP_RTC_SEC			0x0508

#define REG_PTP_SUBNANOSEC_RATE		0x050C

#define PTP_SUBNANOSEC_M		0x3FFFFFFF
#define PTP_RATE_DIR			BIT(31)
#define PTP_TMP_RATE_ENABLE		BIT(30)

#define REG_PTP_SUBNANOSEC_RATE_L	0x050E

#define REG_PTP_RATE_DURATION		0x0510
#define REG_PTP_RATE_DURATION_H		0x0510
#define REG_PTP_RATE_DURATION_L		0x0512

#define REG_PTP_MSG_CONF1		0x0514

#define PTP_802_1AS			BIT(7)
#define PTP_ENABLE			BIT(6)
#define PTP_ETH_ENABLE			BIT(5)
#define PTP_IPV4_UDP_ENABLE		BIT(4)
#define PTP_IPV6_UDP_ENABLE		BIT(3)
#define PTP_TC_P2P			BIT(2)
#define PTP_MASTER			BIT(1)
#define PTP_1STEP			BIT(0)

#define REG_PTP_UNIT_INDEX__4		0x0520

#define PTP_GPIO_INDEX			GENMASK(19, 16)
#define PTP_TSI_INDEX			BIT(8)
#define PTP_TOU_INDEX			GENMASK(1, 0)

#define REG_PTP_TRIG_STATUS__4		0x0524

#define TRIG_ERROR_M			GENMASK(18, 16)
#define TRIG_DONE_M			GENMASK(2, 0)

#define REG_PTP_INT_STATUS__4		0x0528

#define TRIG_INT_M			GENMASK(18, 16)
#define TS_INT_M			GENMASK(1, 0)

#define REG_PTP_CTRL_STAT__4		0x052C

#define GPIO_IN			BIT(7)
#define GPIO_OUT			BIT(6)
#define TS_INT_ENABLE			BIT(5)
#define TRIG_ACTIVE			BIT(4)
#define TRIG_ENABLE			BIT(3)
#define TRIG_RESET			BIT(2)
#define TS_ENABLE			BIT(1)
#define TS_RESET			BIT(0)

#define REG_TRIG_TARGET_NANOSEC	0x0530
#define REG_TRIG_TARGET_SEC		0x0534

#define REG_TRIG_CTRL__4		0x0538

#define TRIG_CASCADE_ENABLE		BIT(31)
#define TRIG_CASCADE_TAIL		BIT(30)
#define TRIG_CASCADE_UPS_M		GENMASK(29, 26)
#define TRIG_NOW			BIT(25)
#define TRIG_NOTIFY			BIT(24)
#define TRIG_EDGE			BIT(23)
#define TRIG_PATTERN_M			GENMASK(22, 20)
#define TRIG_NEG_EDGE			0
#define TRIG_POS_EDGE			1
#define TRIG_NEG_PULSE			2
#define TRIG_POS_PULSE			3
#define TRIG_NEG_PERIOD		4
#define TRIG_POS_PERIOD		5
#define TRIG_REG_OUTPUT		6
#define TRIG_GPO_M			GENMASK(19, 16)
#define TRIG_CASCADE_ITERATE_CNT_M	GENMASK(15, 0)

#define REG_TRIG_CYCLE_WIDTH		0x053C
#define TRIG_CYCLE_WIDTH_M		GENMASK(31, 0)

#define REG_TRIG_CYCLE_CNT		0x0540

#define TRIG_CYCLE_CNT_M		GENMASK(31, 16)
#define TRIG_BIT_PATTERN_M		GENMASK(15, 0)

#define REG_TRIG_ITERATE_TIME		0x0544

#define REG_TRIG_PULSE_WIDTH__4	0x0548

#define TRIG_PULSE_WIDTH_M		GENMASK(23, 0)

/* Port PTP Register */
#define REG_PTP_PORT_RX_DELAY__2	0x0C00
#define REG_PTP_PORT_TX_DELAY__2	0x0C02
#define REG_PTP_PORT_ASYM_DELAY__2	0x0C04

#define REG_PTP_PORT_XDELAY_TS		0x0C08
#define REG_PTP_PORT_SYNC_TS		0x0C0C
#define REG_PTP_PORT_PDRESP_TS		0x0C10

#define REG_PTP_PORT_TX_INT_STATUS__2	0x0C14
#define REG_PTP_PORT_TX_INT_ENABLE__2	0x0C16

#define PTP_PORT_SYNC_INT		BIT(15)
#define PTP_PORT_XDELAY_REQ_INT		BIT(14)
#define PTP_PORT_PDELAY_RESP_INT	BIT(13)
#define KSZ_SYNC_MSG			2
#define KSZ_XDREQ_MSG			1
#define KSZ_PDRES_MSG			0

#endif

```
