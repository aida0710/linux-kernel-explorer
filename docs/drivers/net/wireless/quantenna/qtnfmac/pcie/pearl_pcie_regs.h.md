---
sidebar_position: 5
---
# pearl_pcie_regs.h

### ファイル情報

- パス: `drivers/net/wireless/quantenna/qtnfmac/pcie/pearl_pcie_regs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0+ */
/* Copyright (c) 2015 Quantenna Communications */

#ifndef __PEARL_PCIE_H
#define __PEARL_PCIE_H

/* Pearl PCIe HDP registers */
#define PCIE_HDP_CTRL(base)			((base) + 0x2c00)
#define PCIE_HDP_AXI_CTRL(base)			((base) + 0x2c04)
#define PCIE_HDP_HOST_WR_DESC0(base)		((base) + 0x2c10)
#define PCIE_HDP_HOST_WR_DESC0_H(base)		((base) + 0x2c14)
#define PCIE_HDP_HOST_WR_DESC1(base)		((base) + 0x2c18)
#define PCIE_HDP_HOST_WR_DESC1_H(base)		((base) + 0x2c1c)
#define PCIE_HDP_HOST_WR_DESC2(base)		((base) + 0x2c20)
#define PCIE_HDP_HOST_WR_DESC2_H(base)		((base) + 0x2c24)
#define PCIE_HDP_HOST_WR_DESC3(base)		((base) + 0x2c28)
#define PCIE_HDP_HOST_WR_DESC4_H(base)		((base) + 0x2c2c)
#define PCIE_HDP_RX_INT_CTRL(base)		((base) + 0x2c30)
#define PCIE_HDP_TX_INT_CTRL(base)		((base) + 0x2c34)
#define PCIE_HDP_INT_STATUS(base)		((base) + 0x2c38)
#define PCIE_HDP_INT_EN(base)			((base) + 0x2c3c)
#define PCIE_HDP_RX_DESC0_PTR(base)		((base) + 0x2c40)
#define PCIE_HDP_RX_DESC0_NOE(base)		((base) + 0x2c44)
#define PCIE_HDP_RX_DESC1_PTR(base)		((base) + 0x2c48)
#define PCIE_HDP_RX_DESC1_NOE(base)		((base) + 0x2c4c)
#define PCIE_HDP_RX_DESC2_PTR(base)		((base) + 0x2c50)
#define PCIE_HDP_RX_DESC2_NOE(base)		((base) + 0x2c54)
#define PCIE_HDP_RX_DESC3_PTR(base)		((base) + 0x2c58)
#define PCIE_HDP_RX_DESC3_NOE(base)		((base) + 0x2c5c)

#define PCIE_HDP_TX0_BASE_ADDR(base)		((base) + 0x2c60)
#define PCIE_HDP_TX1_BASE_ADDR(base)		((base) + 0x2c64)
#define PCIE_HDP_TX0_Q_CTRL(base)		((base) + 0x2c70)
#define PCIE_HDP_TX1_Q_CTRL(base)		((base) + 0x2c74)
#define PCIE_HDP_CFG0(base)			((base) + 0x2c80)
#define PCIE_HDP_CFG1(base)			((base) + 0x2c84)
#define PCIE_HDP_CFG2(base)			((base) + 0x2c88)
#define PCIE_HDP_CFG3(base)			((base) + 0x2c8c)
#define PCIE_HDP_CFG4(base)			((base) + 0x2c90)
#define PCIE_HDP_CFG5(base)			((base) + 0x2c94)
#define PCIE_HDP_CFG6(base)			((base) + 0x2c98)
#define PCIE_HDP_CFG7(base)			((base) + 0x2c9c)
#define PCIE_HDP_CFG8(base)			((base) + 0x2ca0)
#define PCIE_HDP_CFG9(base)			((base) + 0x2ca4)
#define PCIE_HDP_CFG10(base)			((base) + 0x2ca8)
#define PCIE_HDP_CFG11(base)			((base) + 0x2cac)
#define PCIE_INT(base)				((base) + 0x2cb0)
#define PCIE_INT_MASK(base)			((base) + 0x2cb4)
#define PCIE_MSI_MASK(base)			((base) + 0x2cb8)
#define PCIE_MSI_PNDG(base)			((base) + 0x2cbc)
#define PCIE_PRI_CFG(base)			((base) + 0x2cc0)
#define PCIE_PHY_CR(base)			((base) + 0x2cc4)
#define PCIE_HDP_CTAG_CTRL(base)		((base) + 0x2cf4)
#define PCIE_HDP_HHBM_BUF_PTR(base)		((base) + 0x2d00)
#define PCIE_HDP_HHBM_BUF_PTR_H(base)		((base) + 0x2d04)
#define PCIE_HDP_HHBM_BUF_FIFO_NOE(base)	((base) + 0x2d04)
#define PCIE_HDP_RX0DMA_CNT(base)		((base) + 0x2d10)
#define PCIE_HDP_RX1DMA_CNT(base)		((base) + 0x2d14)
#define PCIE_HDP_RX2DMA_CNT(base)		((base) + 0x2d18)
#define PCIE_HDP_RX3DMA_CNT(base)		((base) + 0x2d1c)
#define PCIE_HDP_TX0DMA_CNT(base)		((base) + 0x2d20)
#define PCIE_HDP_TX1DMA_CNT(base)		((base) + 0x2d24)
#define PCIE_HDP_RXDMA_CTRL(base)		((base) + 0x2d28)
#define PCIE_HDP_TX_HOST_Q_SZ_CTRL(base)	((base) + 0x2d2c)
#define PCIE_HDP_TX_HOST_Q_BASE_L(base)		((base) + 0x2d30)
#define PCIE_HDP_TX_HOST_Q_BASE_H(base)		((base) + 0x2d34)
#define PCIE_HDP_TX_HOST_Q_WR_PTR(base)		((base) + 0x2d38)
#define PCIE_HDP_TX_HOST_Q_RD_PTR(base)		((base) + 0x2d3c)
#define PCIE_HDP_TX_HOST_Q_STS(base)		((base) + 0x2d40)

/* Pearl PCIe HBM pool registers */
#define PCIE_HHBM_CSR_REG(base)			((base) + 0x2e00)
#define PCIE_HHBM_Q_BASE_REG(base)		((base) + 0x2e04)
#define PCIE_HHBM_Q_LIMIT_REG(base)		((base) + 0x2e08)
#define PCIE_HHBM_Q_WR_REG(base)		((base) + 0x2e0c)
#define PCIE_HHBM_Q_RD_REG(base)		((base) + 0x2e10)
#define PCIE_HHBM_POOL_DATA_0_H(base)		((base) + 0x2e90)
#define PCIE_HHBM_CONFIG(base)			((base) + 0x2f9c)
#define PCIE_HHBM_POOL_REQ_0(base)		((base) + 0x2f10)
#define PCIE_HHBM_POOL_DATA_0(base)		((base) + 0x2f40)
#define PCIE_HHBM_WATERMARK_MASKED_INT(base)	((base) + 0x2f68)
#define PCIE_HHBM_WATERMARK_INT(base)		((base) + 0x2f6c)
#define PCIE_HHBM_POOL_WATERMARK(base)		((base) + 0x2f70)
#define PCIE_HHBM_POOL_OVERFLOW_CNT(base)	((base) + 0x2f90)
#define PCIE_HHBM_POOL_UNDERFLOW_CNT(base)	((base) + 0x2f94)
#define HBM_INT_STATUS(base)			((base) + 0x2f9c)
#define PCIE_HHBM_POOL_CNFIG(base)		((base) + 0x2f9c)

/* Pearl PCIe HBM bit field definitions */
#define HHBM_CONFIG_SOFT_RESET			(BIT(8))
#define HHBM_WR_REQ				(BIT(0))
#define HHBM_RD_REQ				(BIT(1))
#define HHBM_DONE				(BIT(31))
#define HHBM_64BIT				(BIT(10))

/* PCIe HDP interrupt status definition */
#define PCIE_HDP_INT_EP_RXDMA		(BIT(0))
#define PCIE_HDP_INT_HBM_UF		(BIT(1))
#define PCIE_HDP_INT_RX_LEN_ERR		(BIT(2))
#define PCIE_HDP_INT_RX_HDR_LEN_ERR	(BIT(3))
#define PCIE_HDP_INT_EP_TXDMA		(BIT(12))
#define PCIE_HDP_INT_HHBM_UF		(BIT(13))
#define PCIE_HDP_INT_EP_TXEMPTY		(BIT(15))
#define PCIE_HDP_INT_IPC		(BIT(29))

/* PCIe interrupt status definition */
#define PCIE_INT_MSI			(BIT(24))
#define PCIE_INT_INTX			(BIT(23))

/* PCIe legacy INTx */
#define PEARL_PCIE_CFG0_OFFSET		(0x6C)
#define PEARL_ASSERT_INTX		(BIT(9))

/* SYS CTL regs */
#define QTN_PEARL_SYSCTL_LHOST_IRQ_OFFSET	(0x001C)

#define QTN_PEARL_IPC_IRQ_WORD(irq)	(BIT(irq) | BIT(irq + 16))
#define QTN_PEARL_LHOST_IPC_IRQ		(6)
#define QTN_PEARL_LHOST_EP_RESET	(7)

#endif /* __PEARL_PCIE_H */

```
