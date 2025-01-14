---
sidebar_position: 17
---
# via82xx-mixer.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/sound/cards/via82xx-mixer.rst`

### コンテンツ

```rst
=============
VIA82xx mixer
=============

On many VIA82xx boards, the ``Input Source Select`` mixer control does not work.
Setting it to ``Input2`` on such boards will cause recording to hang, or fail
with EIO (input/output error) via OSS emulation.  This control should be left
at ``Input1`` for such cards.

```
