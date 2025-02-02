---
sidebar_position: 30
---
# README

### ファイル情報

- パス: `drivers/net/wireless/marvell/mwifiex/README`

### コンテンツ

```txt
#
# Copyright 2011-2020 NXP
#
# This software file (the "File") is distributed by NXP
# under the terms of the GNU General Public License Version 2, June 1991
# (the "License").  You may use, redistribute and/or modify this File in
# accordance with the terms and conditions of the License, a copy of which
# is available by writing to the Free Software Foundation, Inc.,
# 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA or on the
# worldwide web at http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.
#
# THE FILE IS DISTRIBUTED AS-IS, WITHOUT WARRANTY OF ANY KIND, AND THE
# IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE
# ARE EXPRESSLY DISCLAIMED.  The License provides additional details about
# this warranty disclaimer.


===============================================================================
			U S E R  M A N U A L

1) FOR DRIVER INSTALL

	a) Copy sd8787.bin to /lib/firmware/mrvl/ directory,
	   create the directory if it doesn't exist.
	b) Install WLAN driver,
		insmod mwifiex.ko
	c) Uninstall WLAN driver,
		ifconfig mlanX down
		rmmod mwifiex


2) FOR DRIVER CONFIGURATION AND INFO
	The configurations can be done either using the 'iw' user space
	utility or debugfs.

	a) 'iw' utility commands

	Following are some useful iw commands:-

iw dev mlan0 scan

	This command will trigger a scan.
	The command will then display the scan table entries

iw dev mlan0 connect -w <SSID> [<freq in MHz>] [<bssid>] [key 0:abcde d:1123456789a]
	The above command can be used to connect to an AP with a particular SSID.
	Ap's operating frequency can be specified or even the bssid. If the AP is using
	WEP encryption, wep keys can be specified in the command.
	Note: Every time before connecting to an AP scan command (iw dev mlan0 scan) should be used by user.

iw dev mlan0 disconnect
	This command will be used to disconnect from an AP.


iw dev mlan0 ibss join <SSID> <freq in MHz> [fixed-freq] [fixed-bssid] [key 0:abcde]
	The command will be used to join or create an ibss. Optionally, operating frequency,
	bssid and the security related parameters can be specified while joining/creating
	and ibss.

iw dev mlan0 ibss leave
	The command will be used to leave an ibss network.

iw dev mlan0 link
	The command will be used to get the connection status. The command will return parameters
	such as SSID, operating frequency, rx/tx packets, signal strength, tx bitrate.

	Apart from the iw utility all standard configurations using the 'iwconfig' utility are also supported.

	b) Debugfs interface

	The debugfs interface can be used for configurations and for getting
	some useful information from the driver.
	The section below explains the configurations that can be
	done.

	Mount debugfs to /debugfs mount point:

		mkdir /debugfs
		mount -t debugfs debugfs /debugfs

	The information is provided in /debugfs/mwifiex/mlanX/:

iw reg set <country code>
	The command will be used to change the regulatory domain.

iw reg get
	The command will be used to get current regulatory domain.

info
	This command is used to get driver info.

	Usage:
		cat info

	driver_name = "mwifiex"
	driver_version = <driver_name, driver_version, (firmware_version)>
	interface_name = "mlanX"
	bss_mode = "Ad-hoc" | "Managed" | "Auto" | "Unknown"
	media_state = "Disconnected" | "Connected"
	mac_address = <6-byte adapter MAC address>
	multicase_count = <multicast address count>
	essid = <current SSID>
	bssid = <current BSSID>
	channel = <current channel>
	region_code = <current region code>
	multicasr_address[n] = <multicast address>
	num_tx_bytes = <number of bytes sent to device>
	num_rx_bytes = <number of bytes received from device and sent to kernel>
	num_tx_pkts = <number of packets sent to device>
	num_rx_pkts = <number of packets received from device and sent to kernel>
	num_tx_pkts_dropped = <number of Tx packets dropped by driver>
	num_rx_pkts_dropped = <number of Rx packets dropped by driver>
	num_tx_pkts_err = <number of Tx packets failed to send to device>
	num_rx_pkts_err = <number of Rx packets failed to receive from device>
	carrier "on" | "off"
	tx queue "stopped" | "started"

	The following debug info are provided in /debugfs/mwifiex/mlanX/debug:

	int_counter = <interrupt count, cleared when interrupt handled>
	wmm_ac_vo = <number of packets sent to device from WMM AcVo queue>
	wmm_ac_vi = <number of packets sent to device from WMM AcVi queue>
	wmm_ac_be = <number of packets sent to device from WMM AcBE queue>
	wmm_ac_bk = <number of packets sent to device from WMM AcBK queue>
	tx_buf_size = <current Tx buffer size>
	curr_tx_buf_size = <current Tx buffer size>
	ps_mode = <0/1, CAM mode/PS mode>
	ps_state = <0/1/2/3, full power state/awake state/pre-sleep state/sleep state>
	is_deep_sleep = <0/1, not deep sleep state/deep sleep state>
	wakeup_dev_req = <0/1, wakeup device not required/required>
	wakeup_tries = <wakeup device count, cleared when device awake>
	hs_configured = <0/1, host sleep not configured/configured>
	hs_activated = <0/1, extended host sleep not activated/activated>
	num_tx_timeout = <number of Tx timeout>
	is_cmd_timedout = <0/1 command timeout not occurred/occurred>
	timeout_cmd_id = <command id of the last timeout command>
	timeout_cmd_act = <command action of the last timeout command>
	last_cmd_id = <command id of the last several commands sent to device>
	last_cmd_act = <command action of the last several commands sent to device>
	last_cmd_index = <0 based last command index>
	last_cmd_resp_id = <command id of the last several command responses received from device>
	last_cmd_resp_index = <0 based last command response index>
	last_event = <event id of the last several events received from device>
	last_event_index = <0 based last event index>
	num_cmd_h2c_fail = <number of commands failed to send to device>
	num_cmd_sleep_cfm_fail = <number of sleep confirm failed to send to device>
	num_tx_h2c_fail = <number of data packets failed to send to device>
	num_evt_deauth = <number of deauthenticated events received from device>
	num_evt_disassoc = <number of disassociated events received from device>
	num_evt_link_lost = <number of link lost events received from device>
	num_cmd_deauth = <number of deauthenticate commands sent to device>
	num_cmd_assoc_ok = <number of associate commands with success return>
	num_cmd_assoc_fail = <number of associate commands with failure return>
	cmd_sent = <0/1, send command resources available/sending command to device>
	data_sent = <0/1, send data resources available/sending data to device>
	mp_rd_bitmap = <SDIO multi-port read bitmap>
	mp_wr_bitmap = <SDIO multi-port write bitmap>
	cmd_resp_received = <0/1, no cmd response to process/response received and yet to process>
	event_received = <0/1, no event to process/event received and yet to process>
	cmd_pending = <number of cmd pending>
	tx_pending = <number of Tx packet pending>
	rx_pending = <number of Rx packet pending>


3) FOR DRIVER CONFIGURATION

regrdwr
	This command is used to read/write the adapter register.

	Usage:
		echo " <type> <offset> [value]" > regrdwr
		cat regrdwr

	where the parameters are,
		<type>:     1:MAC/SOC, 2:BBP, 3:RF, 4:PMIC, 5:CAU
		<offset>:   offset of register
		[value]:    value to be written

	Examples:
		echo "1 0xa060" > regrdwr           : Read the MAC register
		echo "1 0xa060 0x12" > regrdwr      : Write the MAC register
		echo "1 0xa794 0x80000000" > regrdwr
		                                    : Write 0x80000000 to MAC register

memrw
	This command is used to read/write the firmware memory.

	Usage:
		1) For reading firmware memory location.
			echo r <address> 0 > /sys/kernel/debug/mwifiex/mlan0/memrw
			cat /sys/kernel/debug/mwifiex/mlan0/memrw
		2) For writing value to firmware memory location.
			echo w <address> [value] > /sys/kernel/debug/mwifiex/mlan0/memrw

	where the parameters are,
		<address>:  memory address
		[value]:    value to be written

	Examples:
		echo r 0x4cf70 0 > /sys/kernel/debug/mwifiex/mlan0/memrw
		cat /sys/kernel/debug/mwifiex/mlan0/memrw
						: Read memory address 0x4cf70
		iwpriv mlan0 memrdwr -0x7fff6000 -0x40000000
		echo w 0x8000a000 0xc0000000 > /sys/kernel/debug/mwifiex/mlan0/memrw
						: Write 0xc0000000 to memory address 0x8000a000

rdeeprom
	This command is used to read the EEPROM contents of the card.

	Usage:
		echo "<offset> <length>" > rdeeprom
		cat rdeeprom

	where the parameters are,
		<offset>:   multiples of 4
		<length>:   4-20, multiples of 4

	Example:
		echo "0 20" > rdeeprom      : Read 20 bytes of EEPROM data from offset 0

hscfg
	This command is used to debug/simulate host sleep feature using
	different configuration parameters.

	Usage:
		echo "<condition> [GPIO# [gap]]]" > hscfg
		cat hscfg

	where the parameters are,
		<condition>: bit 0 = 1   -- broadcast data
			     bit 1 = 1   -- unicast data
			     bit 2 = 1   -- mac event
			     bit 3 = 1   -- multicast data
		[GPIO#]: pin number of GPIO used to wakeup the host.
			 GPIO pin# (e.g. 0-7) or 0xff (interface, e.g. SDIO
			 will be used instead).
		[gap]:   the gap in milliseconds between wakeup signal and
			 wakeup event or 0xff for special setting (host
			 acknowledge required) when GPIO is used to wakeup host.

	Examples:
		echo "-1" > hscfg        : Cancel host sleep mode
		echo "3" > hscfg         : Broadcast and unicast data;
					   Use GPIO and gap set previously
		echo "2 3" > hscfg       : Unicast data and GPIO 3;
					   Use gap set previously
		echo "2 1 160" > hscfg   : Unicast data, GPIO 1 and gap 160 ms
		echo "2 1 0xff" > hscfg  : Unicast data, GPIO 1; Wait for host
					   to ack before sending wakeup event

getlog
        This command is used to get the statistics available in the station.
	Usage:

	cat getlog

device_dump
	This command is used to dump driver information and firmware memory
	segments.
	Usage:

	cat fw_dump

verext
	This command is used to get extended firmware version string using
	different configuration parameters.

	Usage:
		echo "[version_str_sel]" > verext
		cat verext

		[version_str_sel]: firmware support several extend version
				   string cases, include 0/1/10/20/21/99
===============================================================================

```
