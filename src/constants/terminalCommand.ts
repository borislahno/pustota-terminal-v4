export enum COMMAND_ENUM {
  connect = "connect",
  disconnect = "disconnect",
  info = "info",
  stats = "stats",
  help = "help",
}

type CommandType = Record<COMMAND_ENUM, {
  messages: string[],
}>

type CommandInfo = {
  name: keyof typeof COMMAND_ENUM,
  info: string,
}

export const COMMANDS_INFO: CommandInfo[] = [
  {
    name: 'connect',
    info: 'prompts to connect your wallet',
  },
  {
    name: 'disconnect',
    info: 'disconnects your wallet',
  },
  {
    name: 'info',
    info: 'more info about Pustota',
  },
  {
    name: 'stats',
    info: 'your wallet stats',
  },
  {
    name: 'help',
    info: 'shows all commands',
  },
]

export const COMMANDS: CommandType = Object.freeze({
  "connect": {
    messages: ['Wallet connecting...'],
  },
  "disconnect": {
    messages: ['Wallet disconnecting'],
  },
  "info": {
    messages: ['Launching video...'],
  },
  "stats": {
    messages: [],
  },
  "help": {
    messages: [
      'Available Commands:',
      ...COMMANDS_INFO.map(({info, name}) => `${name} - ${info}`)
    ],
  },
});