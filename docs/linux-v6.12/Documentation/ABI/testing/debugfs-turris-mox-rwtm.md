---
sidebar_position: 58
---
# debugfs-turris-mox-rwtm

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/debugfs-turris-mox-rwtm`

### コンテンツ

```txt
What:		/sys/kernel/debug/turris-mox-rwtm/do_sign
Date:		Jun 2020
KernelVersion:	5.8
Contact:	Marek Behún <kabel@kernel.org>
Description:

		======= ===========================================================
		(Write) Message to sign with the ECDSA private key stored in
		        device's OTP. The message must be exactly 64 bytes
		        (since this is intended for SHA-512 hashes).
		(Read)  The resulting signature, 136 bytes. This contains the
			R and S values of the ECDSA signature, both in
			big-endian format.
		======= ===========================================================

```
