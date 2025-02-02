---
sidebar_position: 12
---
# fun_port.h

### ファイル情報

- パス: `drivers/net/ethernet/fungible/funeth/fun_port.h`

### コンテンツ

```h
/* SPDX-License-Identifier: (GPL-2.0-only OR BSD-3-Clause) */

#ifndef _FUN_PORT_H
#define _FUN_PORT_H

enum port_mac_rx_stats {
	PORT_MAC_RX_etherStatsOctets = 0x0,
	PORT_MAC_RX_OctetsReceivedOK = 0x1,
	PORT_MAC_RX_aAlignmentErrors = 0x2,
	PORT_MAC_RX_aPAUSEMACCtrlFramesReceived = 0x3,
	PORT_MAC_RX_aFrameTooLongErrors = 0x4,
	PORT_MAC_RX_aInRangeLengthErrors = 0x5,
	PORT_MAC_RX_aFramesReceivedOK = 0x6,
	PORT_MAC_RX_aFrameCheckSequenceErrors = 0x7,
	PORT_MAC_RX_VLANReceivedOK = 0x8,
	PORT_MAC_RX_ifInErrors = 0x9,
	PORT_MAC_RX_ifInUcastPkts = 0xa,
	PORT_MAC_RX_ifInMulticastPkts = 0xb,
	PORT_MAC_RX_ifInBroadcastPkts = 0xc,
	PORT_MAC_RX_etherStatsDropEvents = 0xd,
	PORT_MAC_RX_etherStatsPkts = 0xe,
	PORT_MAC_RX_etherStatsUndersizePkts = 0xf,
	PORT_MAC_RX_etherStatsPkts64Octets = 0x10,
	PORT_MAC_RX_etherStatsPkts65to127Octets = 0x11,
	PORT_MAC_RX_etherStatsPkts128to255Octets = 0x12,
	PORT_MAC_RX_etherStatsPkts256to511Octets = 0x13,
	PORT_MAC_RX_etherStatsPkts512to1023Octets = 0x14,
	PORT_MAC_RX_etherStatsPkts1024to1518Octets = 0x15,
	PORT_MAC_RX_etherStatsPkts1519toMaxOctets = 0x16,
	PORT_MAC_RX_etherStatsOversizePkts = 0x17,
	PORT_MAC_RX_etherStatsJabbers = 0x18,
	PORT_MAC_RX_etherStatsFragments = 0x19,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_0 = 0x1a,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_1 = 0x1b,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_2 = 0x1c,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_3 = 0x1d,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_4 = 0x1e,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_5 = 0x1f,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_6 = 0x20,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_7 = 0x21,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_8 = 0x22,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_9 = 0x23,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_10 = 0x24,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_11 = 0x25,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_12 = 0x26,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_13 = 0x27,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_14 = 0x28,
	PORT_MAC_RX_CBFCPAUSEFramesReceived_15 = 0x29,
	PORT_MAC_RX_MACControlFramesReceived = 0x2a,
	PORT_MAC_RX_STATS_MAX = 0x2b,
};

enum port_mac_tx_stats {
	PORT_MAC_TX_etherStatsOctets = 0x0,
	PORT_MAC_TX_OctetsTransmittedOK = 0x1,
	PORT_MAC_TX_aPAUSEMACCtrlFramesTransmitted = 0x2,
	PORT_MAC_TX_aFramesTransmittedOK = 0x3,
	PORT_MAC_TX_VLANTransmittedOK = 0x4,
	PORT_MAC_TX_ifOutErrors = 0x5,
	PORT_MAC_TX_ifOutUcastPkts = 0x6,
	PORT_MAC_TX_ifOutMulticastPkts = 0x7,
	PORT_MAC_TX_ifOutBroadcastPkts = 0x8,
	PORT_MAC_TX_etherStatsPkts64Octets = 0x9,
	PORT_MAC_TX_etherStatsPkts65to127Octets = 0xa,
	PORT_MAC_TX_etherStatsPkts128to255Octets = 0xb,
	PORT_MAC_TX_etherStatsPkts256to511Octets = 0xc,
	PORT_MAC_TX_etherStatsPkts512to1023Octets = 0xd,
	PORT_MAC_TX_etherStatsPkts1024to1518Octets = 0xe,
	PORT_MAC_TX_etherStatsPkts1519toMaxOctets = 0xf,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_0 = 0x10,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_1 = 0x11,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_2 = 0x12,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_3 = 0x13,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_4 = 0x14,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_5 = 0x15,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_6 = 0x16,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_7 = 0x17,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_8 = 0x18,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_9 = 0x19,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_10 = 0x1a,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_11 = 0x1b,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_12 = 0x1c,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_13 = 0x1d,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_14 = 0x1e,
	PORT_MAC_TX_CBFCPAUSEFramesTransmitted_15 = 0x1f,
	PORT_MAC_TX_MACControlFramesTransmitted = 0x20,
	PORT_MAC_TX_etherStatsPkts = 0x21,
	PORT_MAC_TX_STATS_MAX = 0x22,
};

enum port_mac_fec_stats {
	PORT_MAC_FEC_Correctable = 0x0,
	PORT_MAC_FEC_Uncorrectable = 0x1,
	PORT_MAC_FEC_STATS_MAX = 0x2,
};

#endif /* _FUN_PORT_H */

```
