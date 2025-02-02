---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/team/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
menuconfig NET_TEAM
	tristate "Ethernet team driver support"
	help
	  This allows one to create virtual interfaces that teams together
	  multiple ethernet devices.

	  Team devices can be added using the "ip" command from the
	  iproute2 package:

	  "ip link add link [ address MAC ] [ NAME ] type team"

	  To compile this driver as a module, choose M here: the module
	  will be called team.

if NET_TEAM

config NET_TEAM_MODE_BROADCAST
	tristate "Broadcast mode support"
	depends on NET_TEAM
	help
	  Basic mode where packets are transmitted always by all suitable ports.

	  All added ports are setup to have team's device address.

	  To compile this team mode as a module, choose M here: the module
	  will be called team_mode_broadcast.

config NET_TEAM_MODE_ROUNDROBIN
	tristate "Round-robin mode support"
	depends on NET_TEAM
	help
	  Basic mode where port used for transmitting packets is selected in
	  round-robin fashion using packet counter.

	  All added ports are setup to have team's device address.

	  To compile this team mode as a module, choose M here: the module
	  will be called team_mode_roundrobin.

config NET_TEAM_MODE_RANDOM
	tristate "Random mode support"
	depends on NET_TEAM
	help
	  Basic mode where port used for transmitting packets is selected
	  randomly.

	  All added ports are setup to have team's device address.

	  To compile this team mode as a module, choose M here: the module
	  will be called team_mode_random.

config NET_TEAM_MODE_ACTIVEBACKUP
	tristate "Active-backup mode support"
	depends on NET_TEAM
	help
	  Only one port is active at a time and the rest of ports are used
	  for backup.

	  Mac addresses of ports are not modified. Userspace is responsible
	  to do so.

	  To compile this team mode as a module, choose M here: the module
	  will be called team_mode_activebackup.

config NET_TEAM_MODE_LOADBALANCE
	tristate "Load-balance mode support"
	depends on NET_TEAM
	help
	  This mode provides load balancing functionality. Tx port selection
	  is done using BPF function set up from userspace (bpf_hash_func
	  option)

	  To compile this team mode as a module, choose M here: the module
	  will be called team_mode_loadbalance.

endif # NET_TEAM

```
