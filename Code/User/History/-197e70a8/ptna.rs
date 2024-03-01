struct DFA {
    states: HashSet<usize>,
    alphabet: HashSet<char>,
    transitions: HashMap<(usize, char), usize>,
    start_state: usize,
    accepting_states: HashSet<usize>,
}

impl DFA {
    fn new() -> DFA {
        DFA {
            states: HashSet::new(),
            alphabet: HashSet::new(),
            transitions: HashMap::new(),
            start_state: 0,
            accepting_states: HashSet::new(),
        }
    }

    fn add_transition(&mut self, state: usize, symbol: char, next_state: usize) {
        self.states.insert(state);
        self.states.insert(next_state);
        self.alphabet.insert(symbol);
        self.transitions.insert((state, symbol), next_state);
    }

    fn set_start_state(&mut self, start_state: usize) {
        self.start_state = start_state;
        self.states.insert(start_state);
    }

    fn add_accepting_state(&mut self, state: usize) {
        self.accepting_states.insert(state);
        self.states.insert(state);
    }

    fn is_accepting(&self, state: usize) -> bool {
        self.accepting_states.contains(&state)
    }

    fn process_input(&self, input: &str) -> bool {
        let mut current_state = self.start_state;
        for symbol in input.chars() {
            if let Some(&next_state) = self.transitions.get(&(current_state, symbol)) {
                current_state = next_state;
            } else {
                return false; // No transition defined for the current state and input symbol
            }
        }
        self.is_accepting(current_state)
    }
}
