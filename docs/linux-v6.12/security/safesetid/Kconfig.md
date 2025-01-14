---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/security/safesetid/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config SECURITY_SAFESETID
        bool "Gate setid transitions to limit CAP_SET{U/G}ID capabilities"
        depends on SECURITY
        select SECURITYFS
        default n
        help
          SafeSetID is an LSM module that gates the setid family of syscalls to
          restrict UID/GID transitions from a given UID/GID to only those
          approved by a system-wide whitelist. These restrictions also prohibit
          the given UIDs/GIDs from obtaining auxiliary privileges associated
          with CAP_SET{U/G}ID, such as allowing a user to set up user namespace
          UID mappings.

          If you are unsure how to answer this question, answer N.

```
